import React, { Component } from 'react'
import '../componentCSS/NewsComponent.css'

export default class NewsComponent extends Component {
    render() {
        let { title, description, imageUrl, newsurl } = this.props;
        return (
            <div className='my-3'>
                <a href={newsurl} rel='noreferrer' target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="cardComponent" style={{ color: 'wheat', background: '#e5e7d1', height: '50vh', padding: '0.2rem', borderRadius: '0.5rem' ,border:'3px solid black'}}>
                        <div className="cardImage" style={{ height: '60%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img src={imageUrl} className="card-img-top" alt="" style={{ maxHeight: '100%', width: 'auto', maxWidth: '100%', borderRadius: '0.2rem', marginTop: '0.2rem' }} />
                        </div>
                        <div className="NewsTitleAndDescription" style={{ height: '38%', overflow: "auto", padding: '0.46rem' ,paddingLeft:'1rem',paddingRight:'1rem'}}>
                            <h5 className="card-title" style={{ color: 'black' }}>{title}</h5>
                            <p className="card-text" style={{ color: 'gray' }}>{description}</p>
                        </div>
                    </div>
                </a>
            </div >
        )
    }
}
