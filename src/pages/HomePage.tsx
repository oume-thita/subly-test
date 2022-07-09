import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
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
  const [value, setValue] = useState<string>(optionsLanguage[0].value)
  const [status, setStatus] = useState<string>(optionsStatus[0].value)

  const getMedia = async () => {
    const data = await fetchMedia()
    setMedium(data)
  }
  useEffect(() => {
    getMedia()
  }, [])

  const filterData = useMemo(() => {
    return mediums.filter((d) => {
      let c = true
      if (value !== "Show All") {
        c &&= d.languages.includes(value)
      }
      if (status !== "Show All") {
        c &&= d.status === status
      }
      return c
    })
  }, [mediums, status, value])

  return (
    <Wrapper>
      <div className="card-section">
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
      </div>

      {filterData.map((m: IMedium) => {
        return <Card key={m.id} medium={m} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-section {
    display: flex;
    flex-direction: row;
    margin-bottom: 200px;
  }
`

export default HomePage
