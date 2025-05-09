<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
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

// Disable dates before today
const today = new Date();
const disablePastDates = (date) => {
  return date < today; // Disable dates before today
};

const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `https://gateway.berkompeten.id/api/admin/master/exam-date/detail?id=${id}`, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Object.assign(formData, response.data.data);
    // Set the date and time from the response data if available
    if (formData.date) {
      const dateTime = new Date(formData.date);
      date.value = dateTime.toISOString().substr(0, 10); // Extract the date part
      time.value = dateTime.toISOString().substr(11, 5); // Extract the time part
    }
  } catch (error) {
    console.error("Error fetching exam date data:", error);
    errorMessage.value = 'Failed to fetch exam date data.';
  }
};

const handleSubmit = async () => {
  try {
    saveDateTime(); // Ensure date and time are saved before submitting
    const url = `https://gateway.berkompeten.id/api/admin/master/exam-date/upsert`;
    const method = 'post';

    await axios({
      method,
      url,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("form data: ", formData)
    successMessage.value = 'Exam Date saved successfully!';
    setTimeout(() => {
      resetForm();
      router.push('/exam-dates-management');
    }, 2000);
  } catch (error) {
    console.error("Error submitting form:", error);
    if (error.response && error.response.data) {
      if (error.response.status === 500) {
        errorMessage.value = error.response.data.message || 'An error occurred while saving. Please try again.';
      } else if (error.response.data.error) {
        Object.assign(formErrors, error.response.data.message);
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
  formErrors.value = {};
  successMessage.value = '';
  errorMessage.value = '';
};

const saveDateTime = () => {
  if (formData.date) {
    // Convert the selected date to MySQL TIMESTAMP format
    const dateObj = new Date(formData.date);
    
    // Format the date into YYYY-MM-DD HH:MM:SS
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    // Combine the formatted parts into a MySQL-compatible timestamp string
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Set the formatted date to formData to be sent to the backend
    formData.date = formattedDate;

    console.log(`Saving date and time: ${formData.date}`); // For testing
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
  <VCol cols="12">
    <VCard title="Exam Date Details">
      <VCardText>
        <VForm @submit.prevent="handleSubmit">
          <VCol cols="12">
            <VueDatePicker 
              v-model="formData.date"
              :disabled-dates="disablePastDates"
              format="yyyy-mm-dd hh:mm:ss"
            >
            </VueDatePicker>
          </VCol>
          <VCol cols="12" style="padding-block-end: 400px;">
            <VSwitch
              color="#0080ff"
              v-model="formData.is_active"
              :error-messages="formErrors.is_active"
              label="Is Active"
            />
          </VCol>
          <VCol cols="12" class="d-flex flex-wrap gap-4 justify-content-end">
            <VBtn type="submit" color="#0080ff">Save</VBtn>
            <VBtn @click="resetForm" color="secondary" variant="outlined">Reset</VBtn>
          </VCol>
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
</template>
