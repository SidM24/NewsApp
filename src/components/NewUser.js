import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const NewUser = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const status = location.state.status
    const [apiToken, setApiToken] = useState('');

    const handleChange = (e) => {
        setApiToken(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('apiToken', apiToken)
        navigate('/')
    }

    return (<>
        <div style={{ backgroundColor: 'black', color: "white", opacity: '0.95', height: '92vh' }}>
            <h1 style={{ textAlign: 'center', paddingTop: '5rem' }}>{status === 402 ? 'Daily Limit Exhausted' : 'Please Recheck your API Token'}</h1>
            <h4 style={{ textAlign: 'center' }}>{status === 402 ? 'Sorry Your Current API Limit has exhausted, upgrade your plan or enter a new API Token to resume browsing' : 'The API token entered is invalid, please re-enter the correct API Token and try again !!'}</h4>
            <div style={{ height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30rem' }}>
                    <h4 style={{ textAlign: 'center' }}>Enter API Token below</h4>
                    <label style={{ width: '80%', margin: 'auto' }}>
                        <input type="text" value={apiToken} onChange={handleChange} required style={{ width: '100%', textAlign: 'center', borderRadius: '0.5rem' }} />
                    </label>
                    <button type="submit" style={{ width: '30%', margin: 'auto', marginTop: '1rem', borderRadius: '2rem', backgroundColor: 'blue', color: 'white', fontWeight: "600" }}>Submit</button>
                </form>

                <div className="getNewToken" style={{ marginTop: '3rem' }}>
                    Dont Have An API Token?<br />
                    Click <a href="https://www.thenewsapi.com/">here</a> to get one now!!
                </div>
            </div>
        </div>
    </>
    )
}

export default NewUser