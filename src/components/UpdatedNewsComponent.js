import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsComponent from './NewsComponent';

import '../componentCSS/UpdatedNews.css'
import { useNavigate } from 'react-router-dom';

const UpdatedNewsComponent = (props) => {
    const navigate = useNavigate()
    // const location = useLocation()

    //variables
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalresults] = useState(0)
    const [page, setPage] = useState(1)

    //Common function to fetch the data
    const fetchArticles = async (page) => {
        // const api_key = process.env.REACT_APP_NEWS_TOKEN
        const api_key = localStorage.getItem('apiToken')
        let url = `https://api.thenewsapi.com/v1/news/top?api_token=${api_key}&locale=${props.country}&limit=3&categories=${props.category}&page=${page}`
        let data = await fetch(url)
        console.log(data)
        if (!data.ok) {
            let new_url = '/newUser'
            // let new_url = `/old${location.pathname}`
            //Sending the status of the data to NewUser Page
            navigate(new_url, {
                state: { status: data.status }
            })
            return ""
        }
        else {
            let parsedData = data.json()
            return parsedData
        }
    }

    const fetchMoreArticles = async () => {
        const nextPage = page + 1
        const parsedData = await fetchArticles(nextPage)

        setArticles((prevArticles) => prevArticles.concat(parsedData.data))
        setPage(nextPage)
    }
    /* eslint-disable */

    useEffect(() => {
        
        const loadInitialArticles = async () => {
            const parsedData = await fetchArticles(page)
            setArticles(parsedData.data)
            setTotalresults(parsedData.meta.found)
        }
        loadInitialArticles();
        fetchMoreArticles();
    }, [])

    /* eslint-enable */

    return (
        <div className='NewsMainContainer' style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreArticles}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className='NewsContainer' style={{ width: '95vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {articles?.map((e) => (
                            e.image_url && (
                                <div className="NewsBox" key={e.uuid} style={{ width: '31%', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                    <NewsComponent title={e.title} description={e.description} imageUrl={e.image_url} newsurl={e.url} />
                                </div>
                            )
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>

    )
}

export default UpdatedNewsComponent