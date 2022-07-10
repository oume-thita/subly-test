import React, { useState } from "react"
import classNames from "classnames"
import { IMedium } from "../types"
import { Button, LoadingProgress } from "./index"
import { Wrap } from "./styles"

interface CardProps {
  medium: IMedium
  progress?: number
}

const Card: React.FC<CardProps> = ({ medium, progress = 70 }: CardProps) => {
  const { name, cover, languages, status, errorMessage } = medium
  const [isMouseInside, setIsMouseInside] = useState<boolean>()

  //   set classname from states of Medium
  const componentStyle = classNames("card-status", {
    ready: status === "ready",
    error: status === "error",
    transcribing: status === "transcribing",
  })

  return (
    <Wrap>
      <div className="card-container">
        {status === "error" && (
          <div className={componentStyle}>{errorMessage}</div>
        )}
        {status === "transcribing" && (
          <div className="card-transcribing">
            <div
              className={componentStyle}
              style={{ backgroundImage: `url(${cover})` }}
            />
            <div className="load-transcribing">
              <h1>Transcribing subtitles</h1>
              <LoadingProgress progress={progress} />
            </div>
          </div>
        )}
        {status === "ready" && (
          <div
            className={componentStyle}
            style={{ backgroundImage: `url(${cover})` }}
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
          >
            {isMouseInside && (
              <div>
                <div className="language">{languages.length} languages</div>
                <Button text="Edit" />
              </div>
            )}
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
