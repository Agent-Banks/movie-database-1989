import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <li className="media">
        <img src="..." class="mr-3" alt="..." />
        <div className="media-body">
          <h5 className="mt-0 mb-1">List-based media object</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
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
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </ul>
      </main>
    )
  }
}

export default App
