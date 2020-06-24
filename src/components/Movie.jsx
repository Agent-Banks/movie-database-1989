import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    return (
      <li className="media">
        <img src={this.props.poster} class="mr-3" alt={this.props.title} />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{this.props.title}</h5>
          {this.props.description}
        </div>
      </li>
    )
  }
}
