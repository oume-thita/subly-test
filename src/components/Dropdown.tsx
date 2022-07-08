import React from "react"

interface IDropdwnProps {
  label: string
  options: {
    value: string
    label: string
  }[]
  value: string
  onChange: (value: string) => void
}

const Dropdown = ({ label, options, value, onChange }: IDropdwnProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }
  return (
    <label>
      {label}
      <select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  )
}

export default Dropdown
