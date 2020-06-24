import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    const { title, poster_path, overview } = this.props
    return (
      <li className="media p-4">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
          width="200"
          height="200"
          className="mr-3"
          alt={title}
        />
        <div className="media-body">
          <h5 className="mt-0 mb-1">
            <strong>{title}</strong>
          </h5>
          {overview}
        </div>
      </li>
    )
  }
}
