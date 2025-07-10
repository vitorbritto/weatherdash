'use client'

import WeatherCard from '@/components/WeatherCard'
import FavoriteLocations from '@/components/FavoriteLocations'
import DashboardHeader from '@/components/DashboardHeader'

const Dashboard = () => (
  <main className="min-h-screen bg-base-300 p-8">
    <section className="container mx-auto space-y-8">
      <DashboardHeader />

      <section className="grid lg:grid-cols-2 gap-8">
        <WeatherCard />
        <FavoriteLocations />
      </section>
    </section>
  </main>
)

export default Dashboard
