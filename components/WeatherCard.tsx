import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UnitToggle from './UnitToggle'
// import TemperatureChart from "./TemperatureChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

interface WeatherData {
  temp: number
  condition: string
  humidity: number
  wind: number
  pressure: number
  location: string
}

export interface DayForecast {
  day: string
  temp: number
  condition: string
  details: WeatherData
}

const WeatherCard = () => {
  // Dados de exemplo expandidos com detalhes para cada dia
  const weekForecast: DayForecast[] = [
    {
      day: 'Today',
      temp: 22,
      condition: 'sunny',
      details: {
        temp: 22,
        condition: 'sunny',
        humidity: 75,
        wind: 12,
        pressure: 1015,
        location: 'São Paulo, BR'
      }
    },
    {
      day: 'Tue',
      temp: 24,
      condition: 'partly-cloudy',
      details: {
        temp: 24,
        condition: 'partly-cloudy',
        humidity: 70,
        wind: 15,
        pressure: 1012,
        location: 'São Paulo, BR'
      }
    },
    {
      day: 'Wed',
      temp: 21,
      condition: 'rainy',
      details: {
        temp: 21,
        condition: 'rainy',
        humidity: 85,
        wind: 18,
        pressure: 1008,
        location: 'São Paulo, BR'
      }
    },
    {
      day: 'Thu',
      temp: 23,
      condition: 'cloudy',
      details: {
        temp: 23,
        condition: 'cloudy',
        humidity: 78,
        wind: 10,
        pressure: 1014,
        location: 'São Paulo, BR'
      }
    },
    {
      day: 'Fri',
      temp: 25,
      condition: 'sunny',
      details: {
        temp: 25,
        condition: 'sunny',
        humidity: 65,
        wind: 8,
        pressure: 1018,
        location: 'São Paulo, BR'
      }
    }
  ]

  const [selectedDay, setSelectedDay] = useState<DayForecast>(weekForecast[0])
  const [unit, setUnit] = useState<'C' | 'F'>('C')

  // Função para converter Celsius para Fahrenheit
  const convertTemp = (temp: number, unit: 'C' | 'F'): number => {
    if (unit === 'F') {
      return Math.round((temp * 9) / 5 + 32)
    }
    return temp
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        )
      case 'rainy':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 16.5835C20 18.4712 18.4712 20 16.5835 20C14.6958 20 13.167 18.4712 13.167 16.5835C13.167 14.6958 16.5835 11 16.5835 11C16.5835 11 20 14.6958 20 16.5835Z"
          />
        )
      case 'cloudy':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        )
      default:
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        )
    }
  }

  const handleUnitToggle = (newUnit: 'C' | 'F') => {
    setUnit(newUnit)
  }

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="card-title mb-4 sm:mb-0">Weather Forecast</h2>
          <UnitToggle unit={unit} onToggle={handleUnitToggle} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay.day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-6"
          >
            <div className="text-6xl font-bold text-primary">
              {convertTemp(selectedDay.details.temp, unit)}°{unit}
            </div>
            <div className="text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {getWeatherIcon(selectedDay.condition)}
              </svg>
            </div>
            <div>
              <p className="text-lg capitalize">{selectedDay.condition}</p>
              <p className="text-sm opacity-70">{selectedDay.details.location}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="stats stats-vertical sm:stats-horizontal shadow mt-6 bg-base-300">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <div className="stat-title">Humidity</div>
            <div className="stat-value text-primary">{selectedDay.details.humidity}%</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="stat-title">Wind</div>
            <div className="stat-value text-primary">{selectedDay.details.wind}km/h</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="stat-title">Pressure</div>
            <div className="stat-value text-primary">
              {selectedDay.details.pressure}hPa
            </div>
          </div>
        </div>

        <div className="divider mt-6">Weekly Forecast</div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {weekForecast.map(day => (
            <div
              key={day.day}
              onClick={() => setSelectedDay(day)}
              className={`flex flex-col items-center bg-base-300 rounded-box p-3 cursor-pointer transition-colors hover:bg-base-300/70 ${
                selectedDay.day === day.day ? 'ring-2 ring-primary' : ''
              }`}
            >
              <span className="text-sm font-semibold">{day.day}</span>
              <div className="text-primary my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {getWeatherIcon(day.condition)}
                </svg>
              </div>
              <span className="text-lg font-bold">{convertTemp(day.temp, unit)}°</span>
            </div>
          ))}
        </div>

        {/* Adicionar o gráfico de temperatura */}
        {/* <TemperatureChart data={weekForecast} unit={unit} /> */}
      </div>
    </div>
  )
}

export default WeatherCard
