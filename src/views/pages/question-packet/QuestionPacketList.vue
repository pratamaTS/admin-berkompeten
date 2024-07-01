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
    const response = await axios.get(`https://gateway.berkompeten.com/api/admin/master/question-packet?page=${page}`, {
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
    data.is_active.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
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

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." />
    <VTable height="250" fixed-header>
      <thead>
        <tr>
          <th class="text-uppercase">Name</th>
          <th class="text-center text-uppercase">Is Active</th>
          <th class="text-center text-uppercase">Created At</th>
          <th class="text-center text-uppercase">Updated At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="qp in filteredData" :key="qp.id">
          <td>{{ qp.name }}</td>
          <td class="text-center">{{ qp.is_active }}</td>
          <td class="text-center">{{ qp.created_at }}</td>
          <td class="text-center">{{ qp.updated_at }}</td>
        </tr>
      </tbody>
    </VTable>
    <div>
      <button @click="prevPage" :disabled="!pagination.prev_page_url">Previous</button>
      <button @click="nextPage" :disabled="!pagination.next_page_url">Next</button>
    </div>
  </div>
</template>
