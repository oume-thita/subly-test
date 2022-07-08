import React from "react"

interface Props {
  text: string
}

const Button: React.FC<Props> = (props) => {
  const { text } = props
  return <div>{text}</div>
}

export default Button
