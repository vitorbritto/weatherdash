import { Line } from 'react-chartjs-2'
import { DayForecast } from './WeatherCard'

interface TemperatureChartProps {
  data: DayForecast[]
  unit: 'C' | 'F'
}

const TemperatureChart = ({ data, unit }: TemperatureChartProps) => {
  const convertTemp = (temp: number, unit: 'C' | 'F'): number => {
    if (unit === 'F') {
      return Math.round((temp * 9) / 5 + 32)
    }
    return temp
  }

  const chartData = {
    labels: data.map(day => day.day),
    datasets: [
      {
        label: `Temperature (°${unit})`,
        data: data.map(day => convertTemp(day.temp, unit)),
        fill: true,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 8,
        callbacks: {
          label: function (context: { parsed: { y: number } }) {
            return `${context.parsed.y}°${unit}`
          }
        }
      }
    },
    scales: {
      y: {
        display: false,
        beginAtZero: false
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          },
          color: 'rgba(255, 255, 255, 0.6)'
        }
      }
    }
  }

  return (
    <div className="mt-6 p-4 bg-base-300 rounded-box">
      <div className="h-32">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}

export default TemperatureChart
