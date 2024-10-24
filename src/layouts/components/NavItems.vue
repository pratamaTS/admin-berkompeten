<script setup>
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
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

const menuItems = {
  reports: {
    title: 'Reports',
    items: [
      {
        title: 'User Trial Report',
        to: '/user-trial-report',
        icon: 'ri-file-list-3-line',  // More fitting for a trial report
      },
      {
        title: 'User Premium Report',
        to: '/user-premium-report',
        icon: 'ri-vip-crown-line',  // Icon for premium or VIP content
      },
      {
        title: 'Payment Report',
        to: '/payment-report',
        icon: 'ri-money-dollar-box-line',  // Icon related to payments
      },
    ],
    icon: 'ri-file-chart-line', // General icon for Reports
  },
  management: {
    title: 'Management',
    items: [
      {
        title: 'System Management',
        to: '/system-management',
        icon: 'ri-settings-3-line',  // Settings icon for system-related management
      },
      {
        title: 'Topic Management',
        to: '/topic-management',
        icon: 'ri-booklet-line',  // Icon for organizing topics or lists
      },
      {
        title: 'Sub Topic Management',
        to: '/subtopic-management',
        icon: 'ri-bookmark-line',  // Sub-section icon, relevant to subtopics
      },
      {
        title: 'Media Management',
        to: '/media-management',
        icon: 'ri-image-line',  // Image or media icon
      },
      {
        title: 'Question Packet Management',
        to: '/question-packet-management',
        icon: 'ri-file-paper-2-line',  // Document-like icon for managing question packets
      },
      {
        title: 'Question Management',
        to: '/question-management',
        icon: 'ri-question-line',  // Question mark for managing questions
      },
      {
        title: 'Student Management',
        to: '/student-management',
        icon: 'ri-user-line',  // Person or user icon for managing students
      },
      {
        title: 'Admin Management',
        to: '/admin-management',
        icon: 'ri-shield-user-line',  // Admin icon with a shield
      },
      {
        title: 'Membership Management',
        to: '/membership-management',
        icon: 'ri-user-star-line',  // Icon for membership with a star
      },
      {
        title: 'Category Lab Management',
        to: '/category-lab-management',
        icon: 'ri-flask-line',  // Flask icon for lab-related management
      },
      {
        title: 'Lab Values Management',
        to: '/lab-value-management',
        icon: 'ri-file-edit-line',  // Generic file editing for managing values
      },
      {
        title: 'University Management',
        to: '/university-management',
        icon: 'ri-bank-line',  // University or institutional icon
      },
      {
        title: 'Educational Status Management',
        to: '/educational-status-management',
        icon: 'ri-bar-chart-box-line',  // Chart for tracking educational statuses
      },
      {
        title: 'Exam Dates Management',
        to: '/exam-dates-management',
        icon: 'ri-calendar-line',  // Calendar icon for exam dates
      },
      {
        title: 'Config Management',
        to: '/config-management',
        icon: 'ri-tools-line',  // Configuration tools icon
      },
    ],
    icon: 'ri-settings-line',  // Settings icon for general management
  }
};
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

  <!-- Grouping the Reports section -->
  <VerticalNavGroup :item="menuItems.reports">
    <VerticalNavLink
      v-for="(item, index) in menuItems.reports.items"
      :key="index"
      :item="item"
    />
  </VerticalNavGroup>

  <!-- Grouping the Management section -->
  <VerticalNavGroup :item="menuItems.management">
    <VerticalNavLink
      v-for="(item, index) in menuItems.management.items"
      :key="index"
      :item="item"
    />
  </VerticalNavGroup>
</template>
