interface UnitToggleProps {
  unit: 'C' | 'F'
  onToggle: (unit: 'C' | 'F') => void
}

const UnitToggle = ({ unit, onToggle }: UnitToggleProps) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text mr-2">°C</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={unit === 'F'}
          onChange={() => onToggle(unit === 'C' ? 'F' : 'C')}
        />
        <span className="label-text ml-2">°F</span>
      </label>
    </div>
  )
}

export default UnitToggle
