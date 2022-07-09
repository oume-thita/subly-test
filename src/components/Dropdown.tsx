import React from "react"
import { Dropdowns } from "./styles"

interface IDropdwnProps {
  label: string
  options: {
    value: string
    label: string
  }[]
  value: string
  onChange: (value: string) => void
}

const Dropdown: React.FC<IDropdwnProps> = ({
  label,
  options,
  value,
  onChange,
}: IDropdwnProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }
  return (
    <Dropdowns>
      <label>
        <h1>{label}</h1>
        <select className="select-filter" value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </Dropdowns>
  )
}

export default Dropdown
