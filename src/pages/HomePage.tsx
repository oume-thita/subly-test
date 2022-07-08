import React, { useEffect, useState } from "react"
import { fetchMedia } from "../api"
import Card from "../components/Card"
import Dropdown from "../components/Dropdown"
import { IMedium } from "../types"

const optionsLanguage = [
  { label: "Show All", value: "Show All" },
  { label: "NL", value: "nl" },
  { label: "EN", value: "en" },
  { label: "CZ", value: "cz" },
]

const optionsStatus = [
  { label: "Show All", value: "Show All" },
  { label: "Ready", value: "ready" },
  { label: "Error", value: "error" },
  { label: "Transcribe", value: "transcribing" },
]

const HomePage = () => {
  const [mediums, setMedium] = useState<IMedium[]>([])
  const [value, setValue] = useState<string>("")
  const [status, setStatus] = useState<string>("")

  const getMedia = async () => {
    const data = await fetchMedia()
    setMedium(data)
  }
  useEffect(() => {
    getMedia()
  }, [])

  return (
    <div>
      <Dropdown
        label="Filter Languages"
        options={optionsLanguage}
        value={value}
        onChange={(v) => setValue(v)}
      />
      <Dropdown
        label="Filter Status"
        options={optionsStatus}
        value={status}
        onChange={(v) => setStatus(v)}
      />

      {mediums
        ?.filter((m) =>
          value && status !== "Show All"
            ? m.languages.includes(value) && m.status === status
            : mediums
        )
        .map((m) => {
          return <Card key={m.id} medium={m} />
        })}
    </div>
  )
}

export default HomePage
