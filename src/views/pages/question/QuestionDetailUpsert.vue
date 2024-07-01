<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const questionPacketsOption = ref([])
const subtopicListOption = ref([])
const formData = reactive({
  question_packet_id: null,
  subtopic_list_id: null,
  question_number: null,
  scenario: '',
  question: '',
  option_a: '',
  option_b: '',
  option_c: '',
  option_d: '',
  option_e: '',
  correct_answer: '',
  image_url: '',
  discussion: '',
  is_active: 0,
});
const token = localStorage.getItem('token');

const fetchData = async (id) => {
  try {
    const response = await axios.get(`https://gateway.berkompeten.com/api/admin/master/question/detail?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Object.assign(formData, response.data.data);
  } catch (error) {
    console.error("Error fetching question data:", error);
  }
};

const handleSubmit = async () => {
  try {
    const url = `https://gateway.berkompeten.com/api/admin/master/question/upsert`;
    const method = 'post';
    await axios({
      method,
      url,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    router.push('/questions'); // Redirect to the questions list page
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const resetForm = () => {
  Object.assign(formData, {
    question_packet_id: null,
    subtopic_list_id: null,
    question_number: null,
    scenario: '',
    question: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    option_e: '',
    correct_answer: '',
    image_url: '',
    discussion: '',
    is_active: 0,
  });
};

const fetchQuestionPackets = async () => {
  try {
    const response = await axios.get('/api/admin/question-packet/fetch')
    // Assuming the API response has an array of educational statuses
    questionPacketsOption.value = response.data.data.map(edu => ({
      id: edu.id,
      name: edu.name,
    }))
  } catch (error) {
    console.error('Error fetching university options:', error)
  }
}

const fetchSubTopicList = async () => {
  try {
    const response = await axios.get('/api/admin/subtopic/fetch')
    // Assuming the API response has an array of educational statuses
    subtopicListOption.value = response.data.data.map(edu => ({
      id: edu.id,
      name: edu.name,
    }))
  } catch (error) {
    console.error('Error fetching university options:', error)
  }
}

onMounted(() => {
  if (route.params.id) {
    fetchData(route.params.id);
    fetchQuestionPackets()
    fetchSubTopicList()
  }
});
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Question Details">
        <VCardText>
          <VForm @submit.prevent="handleSubmit">
            <VRow>
              <VCol cols="12">
                <VSelect
                  v-model="form.question_packet_id"
                  label="Question Packet"
                  :items="universityOptions"
                  placeholder="Select question packet"
                  item-value="id"
                  item-title="name"   
                ></VSelect>
              </VCol>
              <VCol cols="12">
                <VSelect
                  v-model="form.subtopic_list_id"
                  label="Sub Topic List"
                  :items="subtopicListOption"
                  placeholder="Select Sub Topic List"
                  item-value="id"
                  item-title="subtopic"   
                ></VSelect>
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="formData.question_number"
                  label="Question Number"
                  placeholder="Enter question number"
                />
              </VCol>
              <VCol cols="12">
                <VTextarea
                  v-model="formData.question"
                  label="Question"
                  placeholder="Enter question"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="formData.option_a"
                  label="Option A"
                  placeholder="Enter option A"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="formData.option_b"
                  label="Option B"
                  placeholder="Enter option B"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="formData.option_c"
                  label="Option C"
                  placeholder="Enter option C"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="formData.option_d"
                  label="Option D"
                  placeholder="Enter option D"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="formData.option_e"
                  label="Option E"
                  placeholder="Enter option E"
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="formData.correct_answer"
                  label="Correct Answer"
                  placeholder="Enter correct answer"
                />
              </VCol>
              <VCol cols="12">
                <VTextarea
                  v-model="formData.discussion"
                  label="Discussion"
                  placeholder="Enter discussion"
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

