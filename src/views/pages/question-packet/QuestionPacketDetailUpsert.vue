<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const formData = reactive({
  name: '',
  is_active: 0,
});
const token = localStorage.getItem('token');

const fetchData = async (id) => {
  try {
    const response = await axios.get(`https://gateway.berkompeten.com/api/admin/master/question-packet/detail?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Object.assign(formData, response.data.data);
  } catch (error) {
    console.error("Error fetching question packet data:", error);
  }
};

const handleSubmit = async () => {
  try {
    const url = `https://gateway.berkompeten.com/api/admin/master/question-packet/upsert`;
    const method = 'post';
    await axios({
      method,
      url,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    router.push('/question-packet'); // Redirect to the questions list page
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const resetForm = () => {
  Object.assign(formData, {
    name: null,
    is_active: 0,
  });
};

onMounted(() => {
  if (route.params.id) {
    fetchData(route.params.id);
  }
});
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Question Packet Details">
        <VCardText>
          <VForm @submit.prevent="handleSubmit">
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="formData.name"
                  label="Name"
                  placeholder="Enter question packet name"
                />
              </VCol>
              <VCol cols="12">
                <VCheckbox
                  v-model="formData.is_active"
                  label="Is Active"
                />
              </VCol>
              <VCol cols="12" class="d-flex flex-wrap gap-4">
                <VBtn type="submit" color="primary">Save</VBtn>
                <VBtn @click="resetForm" color="secondary" variant="outlined">Reset</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

