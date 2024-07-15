<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const series = ref([])
const chartOptions = computed(() => ({
  chart: { toolbar: { show: false } },
  xaxis: { categories: ['Weekly Paid Users', 'Total Paid Users'] },
  yaxis: { title: { text: 'Users' } },
  dataLabels: { enabled: true },
  stroke: { curve: 'smooth' }
}))

onMounted(async () => {
  try {
    const response = await axios.get('https://gateway.berkompeten.com/api/admin/stats/weekly-paid-users')
    const data = response.data.data
    series.value = [{ name: 'Paid Users', data: [data.weekly_paid_users, data.total_paid_users] }]
  } catch (error) {
    console.error('Failed to fetch weekly paid users data:', error)
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h4 class="text-h4">Weekly Paid Users</h4>
      <VueApexCharts type="line" :options="chartOptions" :series="series" :height="350" class="my-1" />
    </VCardText>
  </VCard>
</template>
