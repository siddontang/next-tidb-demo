import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'
Chart.register(CategoryScale, LinearScale, BarElement)


function buildData(rows) {
    rows = rows || [];
    const labels = rows.map(row => row.repo_name)
    const data = rows.map(row => row.events_count)
    const backgroundColor = rows.map(_ => 'rgba(255, 99, 132, 0.2)')
    const borderColor = rows.map(_ => 'rgba(255, 99, 132, 1)')
    return {
        labels,
        datasets: [{
            label: '# of Top Stars',
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1
        }]
    }
}

export default function TopStarRepos({ rows }) {
    const data = buildData(rows)

    return {
        displayName: 'TopStarRepos',
        render() {
            return (
                <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                    <h2>Top Star Repos</h2>
                    <Bar
                        data={data}
                        width={800}
                        height={400}
                        options={{
                            responsive: false,
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            );
        }
    }
}


