import { useFavorites } from '@/store/useFavorites'
import { useState } from 'react'
import AddLocationModal from './AddLocationModal'

const FavoriteLocations = () => {
  const { favorites, removeFavorite } = useFavorites()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Favorite Locations</h2>

          <div className="space-y-4">
            {favorites.length === 0 ? (
              <div className="text-center py-8 text-base-content/70">
                <p>No favorite locations yet</p>
                <p className="text-sm">Add some locations to track their weather</p>
              </div>
            ) : (
              favorites.map(location => (
                <div
                  key={location.id}
                  className="card card-compact bg-base-300 hover:bg-base-300/70 transition-colors"
                >
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="text-yellow-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold">{location.name}</h3>
                          <p className="text-sm opacity-70">
                            {location.condition} • {location.temp}°
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFavorite(location.id)}
                        className="btn btn-circle btn-ghost text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="card-actions justify-end flex-col flex-1 items-end mt-4">
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              Add New Location
            </button>
          </div>
        </div>
      </div>
      <AddLocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default FavoriteLocations
