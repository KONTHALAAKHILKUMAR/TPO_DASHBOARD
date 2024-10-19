// // JavaScript: Responsive Dashboard Functionality

// document.addEventListener("DOMContentLoaded", function () {
//     // Chart.js configuration for Module Progress
//     const ctx = document.getElementById('moduleProgressChart').getContext('2d');
//     const moduleProgressChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8', 'Module 9', 'Module 10', 'Module 11', 'Module 12', 'Module 13'],
//             datasets: [
//                 {
//                     label: 'Completed',
//                     data: [80, 70, 60, 90, 50, 40, 30, 20, 50, 40, 30, 20, 10],
//                     backgroundColor: '#20c997'
//                 },
//                 {
//                     label: 'Reading',
//                     data: [50, 60, 40, 70, 30, 50, 60, 40, 30, 20, 10, 30, 40],
//                     backgroundColor: '#0d6efd'
//                 },
//                 {
//                     label: 'Skipped',
//                     data: [30, 20, 10, 30, 20, 30, 40, 30, 20, 40, 30, 50, 60],
//                     backgroundColor: '#ff6f61'
//                 },
//                 {
//                     label: 'No data',
//                     data: [20, 30, 40, 20, 50, 60, 70, 80, 90, 60, 70, 80, 90],
//                     backgroundColor: '#6c757d'
//                 }
//             ]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: 'top'
//                 },
//                 tooltip: {
//                     callbacks: {
//                         label: function (tooltipItem) {
//                             return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' students';
//                         }
//                     }
//                 }
//             },
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                     title: {
//                         display: true,
//                         text: 'Students'
//                     }
//                 },
//                 x: {
//                     title: {
//                         display: true,
//                         text: 'Modules'
//                     }
//                 }
//             }
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    // Course Progress By Schedule (Doughnut Chart)
    const courseProgressScheduleCtx = document.getElementById('courseProgressScheduleChart').getContext('2d');
    const courseProgressScheduleChart = new Chart(courseProgressScheduleCtx, {
        type: 'doughnut',
        data: {
            labels: ['As per schedule', 'Ahead of schedule', 'Lagging behind'],
            datasets: [{
                data: [40, 50, 60],
                backgroundColor: ['#ff6f61', '#0d6efd', '#6c757d'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + ' students';
                        }
                    }
                }
            },
            // Remove the default border lines around the doughnut chart
            cutout: '70%', // Makes the center cutout larger, giving a sleeker look
        }
    });

    // Course Completion Progress (Doughnut Chart)
    // Course Completion Gauge (Doughnut Chart)
    const ctx = document.getElementById('courseCompletionGaugeChart').getContext('2d');

    const courseCompletionGaugeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Not Completed'],
            datasets: [{
                data: [10, 140], // Change these values as needed
                backgroundColor: ['#28a745', '#dcdcdc'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '80%',
            rotation: -90, // Starts the chart at the top
            circumference: 180, // Half circle
            plugins: {
                legend: {
                    display: false // Remove legend from the chart
                },
                tooltip: {
                    enabled: false // Disable tooltips
                }
            }
        }
    });
    // Project Progress (Bar Chart) - with Grid Lines Removed
    const projectProgressCtx = document.getElementById('projectProgressChart').getContext('2d');
    const projectProgressChart = new Chart(projectProgressCtx, {
        type: 'bar',
        data: {
            labels: ['Not Started', 'In Progress', 'Completed'],
            datasets: [{
                data: [70, 70, 10],
                backgroundColor: ['#dc3545', '#0d6efd', '#20c997'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + ' projects';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false  // This removes the grid lines on the y-axis
                    },
                    title: {
                        display: true,
                        text: 'Projects'
                    }
                },
                x: {
                    grid: {
                        display: false  // This removes the grid lines on the x-axis
                    },
                    title: {
                        display: true,
                        text: 'Status'
                    }
                }
            }
        }
    });
    // Module Progress (Bar Chart)
    const moduleProgressCtx = document.getElementById('moduleProgressChart').getContext('2d');
    const moduleProgressChart = new Chart(moduleProgressCtx, {
        type: 'bar',
        data: {
            labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8', 'Module 9', 'Module 10', 'Module 11', 'Module 12', 'Module 13'],
            datasets: [
                {
                    label: 'Completed',
                    data: [80, 70, 60, 90],
                    backgroundColor: '#20c997'
                },
                {
                    label: 'Reading',
                    data: [50, 60, 40, 70],
                    backgroundColor: '#0d6efd'
                },
                {
                    label: 'Skipped',
                    data: [30, 20, 10, 30],
                    backgroundColor: '#ff6f61'
                },
                {
                    label: 'No data',
                    data: [20, 30, 40,50
                        
                    ],
                    backgroundColor: '#6c757d'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
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
