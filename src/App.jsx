import React, { Component } from 'react'
import { Movie } from './components/Movie'
import sampleMoviesArray from './data/sample-movies-api.json'

class App extends Component {
  state = {
    movies: sampleMoviesArray,
  }

  render() {
    const moviesToRender = this.state.movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        overview={movie.overview}
        poster_path={movie.poster_path}
      />
    ))

    return (
      <main className="container p-4">
        <div className="jumbotron">
          <h1 className="display-4">Party Like Its 1989</h1>
          <p className="lead">Showcase of the most popular movies of 1989.</p>
        </div>
        <ul className="list-unstyled">{moviesToRender}</ul>
      </main>
    )
  }
}

export default App
