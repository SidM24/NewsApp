import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
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

    // async updateNews() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8acd9102e3884b50b1ca12c44199aa8e&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    // }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8acd9102e3884b50b1ca12c44199aa8e&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            // page: parsedData.page
        })
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8acd9102e3884b50b1ca12c44199aa8e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
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


