import React from 'react'
import {Alert} from 'react-bootstrap'

export default function Error(props) {
  return (
    <Alert variant='danger'>
    <li>{props.error}</li>
    </Alert>
  )
}
