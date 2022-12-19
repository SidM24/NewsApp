import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import PropTypes from 'prop-types'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Ronaldo Reacts As Lionel Messi Lifts Maiden FIFA World Cup Title With Argentina - NDTV Sports",
            "description": "Lionel Messi bagged his maiden FIFA World Cup title with Argentina as his team defeated France in the final on penalties.",
            "url": "https://sports.ndtv.com/fifa-world-cup-2022/ronaldo-reacts-as-lionel-messi-lifts-maiden-fifa-world-cup-title-with-argentina-3619804",
            "urlToImage": "https://c.ndtvimg.com/2022-12/qg4g3vf_lionel-messi_625x300_19_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-12-19T10:32:35Z",
            "content": "It was Argentina who won the FIFA World Cup in Qatar by defeating France in the final on penalties but the echoes of the South American team's triumph were heard all across the globe. People in diffe… [+2412 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Pathi Venkata Thadhagath",
            "title": "CT Ravi compares PM Modi with president Macron after FIFA finals. Here is why - Hindustan Times",
            "description": "\"Messi won the World Cup, while Macron won the Hearts. PM Modi consoling then ISRO Chief K Sivan after the failure of Chandrayan-2 will forever remain in our minds,\" Ravi said. | Bengaluru News",
            "url": "https://www.hindustantimes.com/cities/bengaluru-news/ct-ravi-compares-pm-modi-with-president-macron-after-fifa-finals-here-is-why-101671440779341.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/12/19/1600x900/CT_1671440900382_1671440915643_1671440915643.jpg",
            "publishedAt": "2022-12-19T09:12:34Z",
            "content": "Karnataka BJP leader CT Ravi on Monday compared prime minister Narendra Modi and France president Emmanuel Macron after a video of the latter consoling a disheartened French national footballl team -… [+1827 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Sandip G",
            "title": "Day after Greatest World Cup final: Qatar empties, leaving behind emptiness - The Indian Express",
            "description": "Thousands hung in the vicinity of the Lusail Stadium, to soak in the atmosphere, to fully absorb the slice of history they had seen.",
            "url": "https://indianexpress.com/article/sports/football/day-after-greatest-world-cup-final-qatar-empties-leaving-behind-emptiness-8332671/",
            "urlToImage": "https://images.indianexpress.com/2022/12/Untitled-design-8-2.jpg",
            "publishedAt": "2022-12-19T09:08:23Z",
            "content": "The night of Sunday never ended. Not for Lionel Messi and friends; not for their fans; not for any football fan, perhaps not for the entire country and the human mass that accumulated here. Even hour… [+6252 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Deepika Padukone’s ‘atrocious’ outfit at FIFA World Cup final confuses fans - Hindustan Times",
            "description": "Actor Deepika Padukone created history by unveiling FIFA World Cup trophy ahead of the Argentina versus France match in Qatar on Sunday. However, fans could not stop discussing her look, with some criticising the international fashion label that designed Deep…",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/deepika-padukone-s-atrocious-outfit-at-fifa-world-cup-final-confuses-fans-why-is-she-in-a-bag-101671431219451.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/12/19/1600x900/Deepika_FIFA_1671431671068_1671431713387_1671431713387.jpg",
            "publishedAt": "2022-12-19T07:01:58Z",
            "content": "Deepika Padukone made history on Sunday as she became the first Indian to unveil the FIFA World Cup trophy. Before the final between Lionel Messi-led Argentina and Hugo Lloris-led France teams, which… [+2200 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Koimoi"
            },
            "author": "Koimoi.com Team",
            "title": "Avatar 2 Box Office (Worldwide): Crosses The Milestone Of $400 Million To Score 3rd Biggest Opening Weekend In The Post-Pandemic Era! - Koimoi",
            "description": "Avatar 2 has managed to rake in the third biggest opening at the worldwide box office in the post-pandemic era. Here's all you need to know!",
            "url": "https://www.koimoi.com/?p=945824",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/avatar-2-crosses-400-million-in-the-opening-weekend-01.jpg",
            "publishedAt": "2022-12-19T04:26:11Z",
            "content": "Avatar 2 Crosses $400 Million In The Opening Weekend ( Photo Credit Instagram )\r\nJames Cameron’s Avatar 2 has closed its opening weekend at the worldwide box office on a superb note. It has managed t… [+1880 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Constructor is called here")
        this.state = {
            articles: this.articles,
            laoding: false
        }
    }
    render() {
        return (
            <div>
                <div className='container my-3'>
                    <h2>NewsMonkey - Top Headlines</h2>
                    <div className='row'>
                        <div className="col-md-4">
                            <NewsComponent imageUrl="https://images.indianexpress.com/2022/12/Lionel-Messi-9.jpg" />
                        </div>
                        <div className="col-md-4">
                            <NewsComponent imageUrl="https://images.indianexpress.com/2022/12/Lionel-Messi-9.jpg" />
                        </div>
                        <div className="col-md-4">
                            <NewsComponent imageUrl="https://images.indianexpress.com/2022/12/Lionel-Messi-9.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
