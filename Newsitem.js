import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, description, imageurl, url, author, date } = this.props;
        return (
            <div className='my-4'>
                <div className="card">
                    <img src={!imageurl ? "	https://indiaeducationdiary.in/wp-content/uploads/2020/08/Default-Image-IED.png" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title">{title} <span class="badge badge-secondary">New</span></h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
