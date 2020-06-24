import React, { Component } from 'react'
import { Movie } from './components/Movie'

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
