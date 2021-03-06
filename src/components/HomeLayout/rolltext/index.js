import React from "react"

import TextLoop from "react-text-loop"

import "./rolltext.scss"

const Rolltext = props => {
  var rollelements = []
  for (const [key, value] of Object.entries(props.items)) {
    rollelements.push(
      <a href={value} className={`rollelement`} target={"_blank"}>
        {key}
      </a>
    )
  }
  return (
    <TextLoop interval={3000} delay={3000}>
      {rollelements}
    </TextLoop>
  )
}

export default Rolltext
