import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{ position: 'absolute', left: '50%' }} >
        <div class="spinner-border" role="status" style={{height:'4rem',width:'4rem',fontWeight:'bold'}}>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

