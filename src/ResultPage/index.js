import React from 'react'

export const ResultPage = (props) => {
  return props.location.state.success ? <h1>Success!</h1> : <h1>Failed!</h1>
}