
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import styles from '../../styles/Chart.module.css';

export default function ApexLineChart() {
    const data:any = [0, 1, 3, 5, 10];
    const days:any = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const [hoveredValue, setHoveredValue] = useState<any>(null);

    const series = [{
        name: 'Daily Values',
        data: data
    }];

    const options = {
        chart: {
            id: 'basic-line',
            toolbar: {
                show: false,
            },
            events: {
                mouseMove: function(event:any, chartContext:any, config:any) {
                    const chartElement = chartContext.el;
                    const rect = chartElement.getBoundingClientRect();
                    const mouseX = event.clientX - rect.left;
                    const chartWidth = chartElement.clientWidth;
                    const index = Math.floor((mouseX / chartWidth) * days.length);

                    if (index >= 0 && index < days.length) {
                        setHoveredValue(`${days[index]+": "+data[index]} GB`);
                    } else {
                        setHoveredValue(null);
                    }
                },
                mouseLeave: function(event:any, chartContext:any, config:any) {
                    setHoveredValue(null);
                }
            }
        },
        xaxis: {
            categories: days,
            labels: {
                show: true,
                style: {
                    colors: '#000000',
                    fontSize: '14px',
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (value:any) {
                    const allowedValues = [0, 1, 3, 5, 10];
                    return allowedValues.includes(value) ? value : '';
                }
            },
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            show: false, 
        },
        colors: ['#000000'],
        annotations: {
            position: 'front',
            yaxis: data.map((value:any) => ({
                y: value,
                borderColor: '#000000',
                label: {
                    borderColor: '#000000',
                    style: {
                        color: '#fff',
                        background: '#000000'
                    },
                }
            })),
        },
        tooltip: {
            enabled: false 
        }
    };

    return (
        <div className="chart-container" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', position: 'relative' }}>
            <div className={styles.title}>
                <h4 className={styles.titleContent}>Data usage per network</h4>
            </div>
           {//@ts-ignore
            <Chart options={options} series={series} type="line" height={400} />}
            {hoveredValue !== null && (
                <div className="hovered-value" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.7)', color: '#fff', padding: '8px', borderRadius: '4px', zIndex: '999', pointerEvents: 'none' }}>
                    {hoveredValue}
                </div>
            )}
        </div>
    );
}
