<script setup>
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const token = localStorage.getItem('token'); // Replace with the actual key you use for the token
const userProfile = ref(null);
const router = useRouter();

onMounted(async () => {
  if (token) {
    try {
      const response = await axios.get('https://gateway.berkompeten.com/api/admin/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      userProfile.value = response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login page if the response status is 401
        router.push('/login');
      }
    }
  } else {
    // Redirect to login page if token is not present
    router.push('/login');
  }
});
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavLink
      :item="{
        title: 'Beranda',
        to: '/dashboard',
        icon: 'ri-home-smile-line',
      }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'User Trial Report',
      to: '/user-trial-report',
      icon: 'ri-file-line',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'User Premium Report',
      to: '/user-premium-report',
      icon: 'ri-file-line',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'Payment Report',
      to: '/payment-report',
      icon: 'ri-file-line',
    }"
  />

  <VerticalNavLink
      :item="{
        title: 'System Management',
        to: '/system-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Topic Management',
        to: '/topic-management',
        icon: 'ri-file-edit-line',
      }"
  />
  
  <VerticalNavLink
      :item="{
        title: 'Sub Topic Management',
        to: '/subtopic-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Media Management',
        to: '/media-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Question Packet Management',
        to: '/question-packet-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Question Management',
        to: '/question-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Student Management',
        to: '/student-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Admin Management',
        to: '/admin-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Membership Management',
        to: '/membership-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Category Lab Management',
        to: '/category-lab-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Lab Values Management',
        to: '/lab-value-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'University Management',
        to: '/university-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Educational Status Management',
        to: '/educational-status-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Exam Dates Management',
        to: '/exam-dates-management',
        icon: 'ri-file-edit-line',
      }"
  />

  <VerticalNavLink
      :item="{
        title: 'Config Management',
        to: '/config-management',
        icon: 'ri-file-edit-line',
      }"
  />
 
</template>
