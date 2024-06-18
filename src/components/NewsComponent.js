import React, { Component } from 'react'

export default class NewsComponent extends Component {
    render() {
        let { title, description, imageUrl, newsurl } = this.props;
        return (
            <div className='my-3'>
                <a href={newsurl} rel='noreferrer' target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="cardComponent" style={{ background: 'white', height: '50vh', padding: '0.2rem', borderRadius: '0.3rem' }}>
                        <div className="cardImage" style={{ height: '60%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img src={imageUrl} className="card-img-top" alt="" style={{ maxHeight: '100%', width: 'auto',borderRadius:'0.2rem' }} />
                        </div>
                        <div className="NewsTitleAndDescription" style={{ height: '38%', overflow: "hidden", padding: '0.46rem' }}>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </a>
            </div >
        )
    }
}
