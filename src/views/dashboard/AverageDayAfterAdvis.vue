<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const series = ref([])
const chartOptions = computed(() => ({
  chart: { toolbar: { show: false } },
  xaxis: { categories: ['Average Days After Advis'] },
  yaxis: { title: { text: 'Days' } },
  dataLabels: { enabled: true },
  stroke: { curve: 'smooth' }
}))

onMounted(async () => {
  try {
    const response = await axios.get('https://gateway.berkompeten.com/api/admin/stats/average-days-after-advis')
    const data = response.data.data
    series.value = [{ name: 'Days', data: [data.average_days_after_advis] }]
  } catch (error) {
    console.error('Failed to fetch average days after advis data:', error)
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h4 class="text-h4">Average Days After Advis</h4>
      <VueApexCharts type="line" :options="chartOptions" :series="series" :height="350" class="my-1" />
    </VCardText>
  </VCard>
</template>
