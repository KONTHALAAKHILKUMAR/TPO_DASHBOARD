// JavaScript: Responsive Dashboard Functionality

document.addEventListener("DOMContentLoaded", function () {
    // Chart.js configuration for Module Progress
    const ctx = document.getElementById('moduleProgressChart').getContext('2d');
    const moduleProgressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8', 'Module 9', 'Module 10', 'Module 11', 'Module 12', 'Module 13'],
            datasets: [
                {
                    label: 'Completed',
                    data: [80, 70, 60, 90, 50, 40, 30, 20, 50, 40, 30, 20, 10],
                    backgroundColor: '#20c997'
                },
                {
                    label: 'Reading',
                    data: [50, 60, 40, 70, 30, 50, 60, 40, 30, 20, 10, 30, 40],
                    backgroundColor: '#0d6efd'
                },
                {
                    label: 'Skipped',
                    data: [30, 20, 10, 30, 20, 30, 40, 30, 20, 40, 30, 50, 60],
                    backgroundColor: '#ff6f61'
                },
                {
                    label: 'No data',
                    data: [20, 30, 40, 20, 50, 60, 70, 80, 90, 60, 70, 80, 90],
                    backgroundColor: '#6c757d'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' students';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Students'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Modules'
                    }
                }
            }
        }
    });
});
