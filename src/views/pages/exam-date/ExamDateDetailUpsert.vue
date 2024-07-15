<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = localStorage.getItem('id');

const formData = reactive({
  date: '',
  is_active: false,
});
const formErrors = reactive({});
const token = localStorage.getItem('token');
const successMessage = ref('');
const errorMessage = ref('');
const menu = ref(false);
const date = ref(null);
const time = ref(null);

const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `https://gateway.berkompeten.com/api/admin/master/exam-date/detail?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Object.assign(formData, response.data.data);
  } catch (error) {
    console.error("Error fetching exam date data:", error);
  }
};

const handleSubmit = async () => {
  try {
    const url = `https://gateway.berkompeten.com/api/admin/master/exam-date/upsert`;
    const method = 'post';

    await axios({
      method,
      url,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    successMessage.value = 'Exam Date saved successfully!';
    setTimeout(() => {
      resetForm();
      router.push('/exam-date-management'); // Redirect to the questions list page after a delay
    }, 2000);
  } catch (error) {
    console.error("Error submitting form:", error);
    if (error.response && error.response.data) {
      if (error.response.status === 500) {
        errorMessage.value = error.response.data.message || 'An error occurred while saving. Please try again.';
      } else if (error.response.data.error) {
        Object.assign(formErrors, error.response.data.message);
        console.log("ERROR: ", formErrors);
      } else {
        errorMessage.value = 'An error occurred while saving. Please try again.';
      }
    } else {
      errorMessage.value = 'An error occurred while saving. Please try again.';
    }
  }
};

const resetForm = () => {
  Object.assign(formData, {
    date: '',
    is_active: false,
  });
  date.value = null;
  time.value = null;
};

const saveDateTime = () => {
  if (date.value && time.value) {
    const dateTime = new Date(`${date.value}T${time.value}`);
    formData.date = dateTime.toISOString();
    menu.value = false;
  }
};

onMounted(() => {
  if (id) {
    fetchData(id);
  } else {
    localStorage.removeItem('id');
  }
});
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Exam Date Details">
        <VCardText>
          <VForm @submit.prevent="handleSubmit">
            <VRow>
              <VCol cols="12">
                <VMenu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <VTextField
                      v-model="formData.date"
                      label="Date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :error-messages="formErrors.date"
                    />
                  </template>
                  <VCard>
                    <VDatePicker v-model="date" />
                    <VTimePicker v-model="time" />
                    <VCardActions>
                      <VSpacer />
                      <VBtn text color="primary" @click="menu = false">Cancel</VBtn>
                      <VBtn text color="primary" @click="saveDateTime">OK</VBtn>
                    </VCardActions>
                  </VCard>
                </VMenu>
              </VCol>
              <VCol cols="12">
                <VSwitch
                  color="#0080ff"
                  v-model="formData.is_active"
                  :error-messages="formErrors.is_active"
                  label="Is Active"
                />
              </VCol>
              <VCol cols="12" class="d-flex flex-wrap gap-4">
                <VBtn type="submit" color="#0080ff">Save</VBtn>
                <VBtn @click="resetForm" color="secondary" variant="outlined">Reset</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
        <VCardText>
          <VAlert v-if="successMessage" type="success" dismissible @click:close="successMessage = ''">
            {{ successMessage }}
          </VAlert>
          <VAlert v-if="errorMessage" type="error" dismissible @click:close="errorMessage = ''">
            {{ errorMessage }}
          </VAlert>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
