import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {

    //Variable to keep track of the current path name

    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            disableNextButton: false,
            totalResults: 0,
        }
    }
    // Below api is for the headlines`
    // https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=53nA5srtdjmXlzBANVPc0l3Ostww5PMQyvnAeL3T

    async componentDidMount() {
        const api_key = process.env.REACT_APP_NEWS_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    fetchMoreData = async () => {
        const api_key = process.env.REACT_APP_NEWS_API_KEY;
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${api_key}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };


    render() {

        return (
            <div className='NewsMainContainer' style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />} >
                        <div className='NewsContainer' style={{ width: '95vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                            {this.state.articles?.map((e) => {
                                return (
                                    e.urlToImage &&
                                    <div className="NewsBox" key={e.url} style={{ width: '31%', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                                        <NewsComponent title={e.title} description={e.description} imageUrl={e.urlToImage} newsurl={e.url} />
                                    </div>
                                )
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </div >
        )
    }
}


