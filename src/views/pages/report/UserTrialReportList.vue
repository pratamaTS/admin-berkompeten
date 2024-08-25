<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const token = localStorage.getItem('token');


// Data and reactive variables

const searchQuery = ref('');
const users = ref([]);
const errorMessage = ref('');
const successMessage = ref('');
const expanded = ref([]);
const pagination = ref({
  current_page: 1,
  from: 1,
  last_page: 1,
  next_page_url: null,
  prev_page_url: null,
  total: 0,
});

// Table headers
const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Phone Number', value: 'phone_number' },
  { text: 'Created At', value: 'created_at' },
  { text: 'Actions', value: 'actions', sortable: false },
];

const todoHeaders = [
  { text: 'ID', value: 'id' },
  { text: 'Question Packet ID', value: 'question_packet_id' },
  { text: 'Start Date', value: 'start_date' },
  { text: 'Finish Date', value: 'finish_date' },
  { text: 'Score', value: 'score' },
  { text: 'Is Done', value: 'is_done' },
];

// Methods
const fetchData = async (page = 1, searchQuery = '') => {
  try {
    const response = await axios.get('https://gateway.berkompeten.com/api/admin/report/user/trial', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: page,
        search: searchQuery.toLowerCase()
      },
    });

    if (response.data.error) {
      errorMessage.value = response.data.message;
      users.value = [];
    }

    successMessage.value = response.data.message;
    users.value = response.data.data.data;
    pagination.value = response.data.data;
  } catch (error) {
    errorMessage.value = 'Failed to fetch user trial report. Please try again.';
    console.log("err: ", error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      router.push('/login');
    }
  }
};

watch([searchQuery], ([newSearchValue]) => {
  fetchData(pagination.value.current_page, newSearchValue);
});

const getRowClass = (item) => {
  return item.is_active ? 'active-row' : 'inactive-row';
};

// Date and currency formatting
const formatDate = (date) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-US');
};
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>User Trial Report</v-card-title>
      <v-card-text>

        <!-- Date Filtering Form -->
        <v-form >
          <v-row>
            <v-col cols="12">
              <VTextField v-model="searchQuery" label="Search" class="mx-3" solo />
            </v-col>
          </v-row>
        </v-form>

        <!-- Error and Success Messages -->
        <v-alert v-if="errorMessage" type="error" dismissible @click:close="errorMessage = ''">
          {{ errorMessage }}
        </v-alert>
        <v-alert v-if="successMessage" type="success" dismissible @click:close="successMessage = ''">
          {{ successMessage }}
        </v-alert>

        <!-- User Data Table -->
        <v-data-table
          :headers="headers"
          :items="users"
          item-value="id"
          class="elevation-1"
          show-expand
          :expanded.sync="expanded"
          item-class="getRowClass"
        >
          <template v-slot:[`item.expand`]="{ item }">
            <v-card class="mb-3">
              <v-card-title>Additional Details for {{ item.name }}</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="6">
                    <strong>Gender:</strong> {{ item.gender }}<br />
                    <strong>Role:</strong> {{ item.role }}<br />
                    <strong>Year of Entry:</strong> {{ item.year_of_entry }}<br />
                    <strong>Target Exam Date:</strong> {{ formatDate(item.target_exam_date) }}<br />
                    <strong>University ID:</strong> {{ item.university_id }}<br />
                    <strong>Educational Status ID:</strong> {{ item.educational_status_id }}
                  </v-col>
                  <v-col cols="12" sm="6">
                    <strong>Trial Packet Completion Date:</strong> {{ formatDate(item.trial_packet_completion_date) }}<br />
                    <strong>Is User Silver:</strong> {{ item.is_user_silver }}<br />
                    <strong>Is User Gold:</strong> {{ item.is_user_gold }}<br />
                    <strong>Is User Platinum:</strong> {{ item.is_user_platinum }}
                  </v-col>
                </v-row>
                <v-divider class="my-3"></v-divider>
                <h4>Login Activities</h4>
                <v-list dense>
                  <v-list-item v-for="(activity, index) in item.login_activities" :key="index">
                    <v-list-item-content>{{ activity }}</v-list-item-content>
                  </v-list-item>
                </v-list>
                <h4>Student To-Do Lists</h4>
                <v-data-table
                  :headers="todoHeaders"
                  :items="item.student_to_do_lists"
                  item-value="id"
                  class="elevation-1"
                ></v-data-table>
              </v-card-text>
            </v-card>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.active-row {
  background-color: #e8f5e9; /* Light green for active users */
}

.inactive-row {
  background-color: #ffebee; /* Light red for inactive users */
}
</style>
