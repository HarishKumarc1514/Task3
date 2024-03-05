const totalRevenueChart = new Chart(totalRevenueChart, totalRevenueConfig);
const outstandingAmountChart = new Chart(outstandingAmountChart, outstandingAmountConfig);

const revenueByJobTypeData = {
  labels: ['alarm system', 'Backflow Testing', 'Diagnosis', 'Fire Extinguisher', 'pump'],
  datasets: [{
    label: 'Revenue',
    data: [0, 2000, 4000, 6000, 8000, 10000, 14000, 16000, 18000, 12000],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const revenueByJobTypeConfig = {
  type: 'bar',
  data: revenueByJobTypeData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const revenueByJobTypeChart = new Chart(document.getElementById('revenueByJobTypeChart'), revenueByJobTypeConfig);

const jobLocationDropdown = document.getElementById('jobLocationDropdown');

const jobLocations = ['Social Circle', 'Malibu', 'Snohomish', 'New York', 'Everett', 'Seattle', 'London'];

jobLocations.forEach(location => {
  const option = document.createElement('option');
  option.value = location;
  option.text = location;
  jobLocationDropdown.appendChild(option);
});

jobLocationDropdown.addEventListener('change', () => {
  const selectedLocation = jobLocationDropdown.value;
  // Handle the dropdown change here
});