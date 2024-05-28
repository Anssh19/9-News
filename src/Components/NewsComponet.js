import React, { Component } from 'react'

export class NewsComponet extends Component {
    render() {
        let {title, description, imageUrl, newsUrl , author , date} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://www.9news.com.au/assets/img/9news-image-background.96245abf.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"Unknow":author} on {date}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-info">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsComponet