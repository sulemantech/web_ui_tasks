// script.js

const ctx = document.getElementById('weather-chartc').getContext('2d'); // Get the canvas context

const weatherData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], // X-axis labels (days)
  datasets: [
    {
      label: 'High Temp (°C)', // Dataset for high temperatures
      data: [25, 28, 22, 27, 26], // High temperatures
      borderColor: 'rgba(255, 252, 0, 1)', // Red line color
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red fill
      borderWidth: 2, // Line width
      pointBackgroundColor: 'white', // Point background color
      pointBorderColor: 'white', // Point border color
      pointBorderWidth: 2, // Point border thickness
    },
    {
      label: 'Low Temp (°C)', // Dataset for low temperatures
      data: [15, 12, 13, 14, 10], // Low temperatures
      borderColor: 'rgba(255, 0, 132, 1)', // Blue line color
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue fill
      borderWidth: 2, // Line width
      pointBackgroundColor: 'white', // Point background color
      pointBorderColor: 'white', // Point border color
      pointBorderWidth: 2, // Point border thickness
    },
  ],
};

const weatherChart = new Chart(ctx, {
  type: 'line', // Set chart type to line
  data: weatherData, // Provide the data
  options: {
    responsive: true, // Ensure the chart is responsive
    scales: {
      x: {
        display: false, // Hide x-axis labels
      },
      y: {
        display: false, // Start y-axis at zero
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend (removes dataset labels and box)
      },
      datalabels: {
        align: 'top', // Position the labels above the data points
        anchor: 'end', // Align the labels relative to the points
        color: 'white', // Label color
        formatter: (value) => `${value}°C`, // Custom label formatter
      },
    },
  },
});
