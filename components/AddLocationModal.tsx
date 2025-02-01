import { useState } from "react";
import { useFavorites, Location } from "@/store/useFavorites";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddLocationModal({
  isOpen,
  onClose,
}: AddLocationModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { addFavorite } = useFavorites();

  const handleAddLocation = () => {
    // Aqui você implementaria a busca real na API de clima
    // Este é apenas um exemplo
    const newLocation: Location = {
      id: Date.now().toString(),
      name: searchTerm,
      country: "BR",
      temp: 25,
      condition: "Sunny",
    };

    addFavorite(newLocation);
    onClose();
    setSearchTerm("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-base-200">
        <h3 className="font-bold text-lg">Add New Location</h3>
        <div className="py-4">
          <input
            type="text"
            placeholder="Search for a city..."
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleAddLocation}
            disabled={!searchTerm}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
