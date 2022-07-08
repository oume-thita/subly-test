import classNames from "classnames"
import React from "react"
import { IMedium } from "../types"
import LoadingProgress from "./LoadingProgress"
import { Wrap } from "./styles"

interface CardProps {
  medium: IMedium
  progress?: number
}

const Card: React.FC<CardProps> = ({ medium, progress = 70 }: CardProps) => {
  const { name, cover, languages, status, errorMessage } = medium

  const componentStyle = classNames("card-status", {
    ready: status === "ready",
    error: status === "error",
    transcribing: status === "transcribing",
  })

  return (
    <Wrap
      onMouseEnter={() => console.log("Over")}
      onMouseLeave={() => console.log("leave")}
    >
      <div className="cart-container">
        {status === "error" && (
          <div className={componentStyle}>{errorMessage}</div>
        )}
        {status === "transcribing" && (
          <div
            className={componentStyle}
            style={{ backgroundImage: `url(${cover})` }}
          >
            <h2>Transcrining subtitles</h2>
            <LoadingProgress progress={progress} />
          </div>
        )}
        {status === "ready" && (
          <div
            className={componentStyle}
            style={{ backgroundImage: `url(${cover})` }}
          />
        )}
        <div className="cart-info">
          <h1>{name}</h1>
          <h2>{status}</h2>
        </div>
      </div>
    </Wrap>
  )
}

export default Card
