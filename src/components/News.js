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

    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8acd9102e3884b50b1ca12c44199aa8e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         disableNextButton: false,
    //         loading: false
    //     })
    // }

    // handleNextClick = async () => {
    //     let check = Math.ceil(this.state.totalResults / this.props.pageSize)
    //     if (!(this.state.page + 1 > check)) {

    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8acd9102e3884b50b1ca12c44199aa8e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //         this.setState({ loading: true })
    //         let data = await fetch(url)
    //         let parsedData = await data.json()
    //         if (this.state.page + 1 === check) {
    //             this.setState({
    //                 disableNextButton: true
    //             })
    //         }
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false
    //         })
    //     }
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8acd9102e3884b50b1ca12c44199aa8e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
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
            <div className='container my-3'>
                <h1 className="text-center"><u>NewsMonkey - Top Headlines</u></h1>
                {/* {this.state.loading && <Spinner />} */}
                <div>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}>
                        <div className='row'>
                            {this.state.articles?.map((e) => {
                                return (<div className="col-md-4" key={e.url}>
                                    <NewsComponent title={e.title} description={e.description} imageUrl={e.urlToImage} newsurl={e.url} />
                                </div>
                                )
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark prev" onClick={this.handlePrevClick}>&laquo; Prev</button>
                    <p>Page {this.state.page}</p>
                    <button disabled={this.state.disableNextButton} type="button" className="btn btn-dark next" onClick={this.handleNextClick}>Next &raquo;</button>
                </div> */}
            </div >
        )
    }
}


