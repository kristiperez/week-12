import React, {Component} from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';


class MovieList extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            movies: [],
            moviedetail: {}
        }

        this.fetchMovies()
    }

    fetchMovies = () => {
        fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=1cc927a')
        .then(response => response.json())
        .then(movies => {
            this.setState({
                //ask about this
                // movies: movies
                movies: movies.Search
            }, () => {
                console.log('movies updated')
            })
        })
    }

    movieDetail = (id) => {
        fetch('http://www.omdbapi.com/?i=${id}&apikey=1cc927a'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }
    }

    render() {
        let movieItems = this.state.movies.map((movie,index) => {
            return (
                <div className="movie" key={index}>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt="movie poster" />
                    <Button variant="info" onClick={() => this.movieDetail(movie.imdbID)}>Details</Button>
                </div>
            )
        })

        return (
            <div>
                <div className="movieList">
                    {movieItems}
                </div>
            </div>
        )
    }


}

export default MovieList