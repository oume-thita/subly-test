import classNames from "classnames"
import { initial } from "cypress/types/lodash"
import React, { useState } from "react"
import { IMedium } from "../types"
import Button from "./Button"
import LoadingProgress from "./LoadingProgress"
import { Wrap } from "./styles"

interface CardProps {
  medium: IMedium
  progress?: number
}

const Card: React.FC<CardProps> = ({ medium, progress = 70 }: CardProps) => {
  const { name, cover, languages, status, errorMessage } = medium
  const [isMouseInside, setIsMouseInside] = useState<boolean>()

  const componentStyle = classNames("card-status", {
    ready: status === "ready",
    error: status === "error",
    transcribing: status === "transcribing",
  })

  return (
    <Wrap onMouseLeave={() => console.log("leave")}>
      <div className="cart-container">
        {status === "error" && (
          <div className={componentStyle}>{errorMessage}</div>
        )}
        {status === "transcribing" && (
          <div
            className={componentStyle}
            style={{ backgroundImage: `url(${cover})` }}
          >
            <h1>Transcrining subtitles</h1>
            <LoadingProgress progress={progress} />
          </div>
        )}
        {status === "ready" && (
          <div
            className={componentStyle}
            style={{ backgroundImage: `url(${cover})` }}
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
          >
            {isMouseInside ? (
              <div>
                <div className="language">{languages.length} languages</div>
                <Button text="Edit" />
              </div>
            ) : null}
          </div>
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
