<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const token = localStorage.getItem('token');
const datas = ref([]);
const searchQuery = ref('');
const pagination = ref({
  current_page: 1,
  from: 1,
  last_page: 1,
  next_page_url: null,
  prev_page_url: null,
  total: 0,
});

const fetchData = async (page = 1) => {
  try {
    const response = await axios.get(`https://gateway.berkompeten.com/api/admin/master/question?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    datas.value = response.data.data;
    pagination.value = response.data;
  } catch (error) {
    console.log("err: ", error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      router.push('/login');
    }
  }
};

const filteredData = computed(() => {
  if (!searchQuery.value) {
    return datas.value;
  }
  return datas.value.filter(data => 
  data.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.question_packet.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.subtopic_list.subtopic.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.question_number.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.scenario.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.option_a.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.option_b.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.option_c.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.option_d.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.option_e.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.correct_answer.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.image_url.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.discussion.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.created_at.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    data.updated_at.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const nextPage = () => {
  if (pagination.value.next_page_url) {
    fetchData(pagination.value.current_page + 1);
  }
};

const prevPage = () => {
  if (pagination.value.prev_page_url) {
    fetchData(pagination.value.current_page - 1);
  }
};

const createData = () => {
  router.push(`/question/detail?id=${id}`);
};

const downloadTemplate = async () => {
  try {
    const response = await axios.get(`https://gateway.berkompeten.com/api/admin/master/question/download-template`, {
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'questions_template.xlsx');
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error("Error downloading template:", error);
  }
};

const bulkUpsert = () => {
  router.push('/bulk-upsert');
};

const editData = (id) => {
  router.push(`/question/detail?id=${id}`);
};

const deleteData = async (id) => {
  try {
    await axios.delete(`https://gateway.berkompeten.com/api/admin/master/question?question_id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchData(pagination.value.current_page);
  } catch (error) {
    console.log("err: ", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <div class="table-header">
      <input v-model="searchQuery" placeholder="Search..." />
      <button @click="createData">Create</button>
      <button @click="bulkUpsert">Bulk Upsert</button>
      <button @click="downloadTemplate">Download Template</button>
    </div>
    <VTable height="250" fixed-header>
      <thead>
        <tr>
          <th>Packet Name</th>
          <th>Subtopic Name</th>
          <th>Question Number</th>
          <th>Question</th>
          <th>Option A</th>
          <th>Option B</th>
          <th>Option C</th>
          <th>Option D</th>
          <th>Option E</th>
          <th>Correct Answer</th>
          <th>Discussion</th>
          <th>Is Active</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="question in filteredData" :key="question.id">
          <td>{{ question.question_packet.name }}</td>
          <td>{{ question.subtopic_list.subtopic }}</td>
          <td>{{ question.question_number }}</td>
          <td>{{ question.question }}</td>
          <td>{{ question.option_a }}</td>
          <td>{{ question.option_b }}</td>
          <td>{{ question.option_c }}</td>
          <td>{{ question.option_d }}</td>
          <td>{{ question.option_e }}</td>
          <td>{{ question.correct_answer }}</td>
          <td v-html="question.discussion"></td>
          <td>{{ question.is_active }}</td>
          <td>{{ question.created_at }}</td>
          <td>
            <button @click="editData(question.id)">
              <span class="material-icons">edit</span>
            </button>
            <button @click="deleteData(question.id)">
              <span class="material-icons">delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </VTable>
    <div>
      <button @click="prevPage" :disabled="!pagination.prev_page_url">Previous</button>
      <button @click="nextPage" :disabled="!pagination.next_page_url">Next</button>
    </div>
  </div>
</template>
