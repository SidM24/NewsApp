import React, { Component } from 'react'
import loading from './Loading_icon.gif'
// import '../component.css/Spinner.css'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center spin'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

