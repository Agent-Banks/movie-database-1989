import React, { Component } from 'react'
import { Movie } from './components/Movie'

class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=11c8a5fd49f79290bd9aa6de75d26f2f'
    )
    const moviesFromTheApi = await response.json()
    this.setState({ movies: moviesFromTheApi.results })
  }

  render() {
    const moviesToRender = this.state.movies.map(movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        poster_path={movie.poster_path}
      />
    ))

    return (
      <main className="container p-4">
        <div className="jumbotron">
          <h1 className="display-4 ">Party Like Its 1989</h1>
          <p className="lead ">Showcase of the most popular movies of 1989</p>
        </div>
        <ul className="list-unstyled border-dark">{moviesToRender}</ul>
      </main>
    )
  }
}

export default App
