import React from "react"
import { Buttons } from "./styles"

interface Props {
  text: string
}

const Button: React.FC<Props> = (props) => {
  const { text } = props
  return (
    <Buttons onClick={() => console.log("hello")}>
      <p>{text}</p>
    </Buttons>
  )
}

export default Button
