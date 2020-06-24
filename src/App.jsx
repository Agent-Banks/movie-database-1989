import React, { Component } from 'react'

class Movie extends Component {
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

class App extends Component {
  render() {
    return (
      <main className="container p-4">
        <div className="jumbotron">
          <h1 className="display-4">Party Like Its 1989</h1>
          <p className="lead">Showcase of the most popular movies of 1989.</p>
        </div>
        <ul className="list-unstyled">
          <Movie title="something" description="something" poster="" />
          <Movie title="something" description="something" poster="" />
          <Movie title="something" description="something" poster="" />
          <Movie title="something" description="something" poster="" />
        </ul>
      </main>
    )
  }
}

export default App
