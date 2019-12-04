import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Catalogue extends Component {
  state ={
    movieList: []
  }

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
          api_key: "efb3b7e6b4dd9bb8a3c1ffc5a1a55fdf",
          primary_release_year: 2019
        }
      })
      .then(data => {
        console.log(data.data.results);
        this.setState({
          movieList: data.data.results
        });
      });
  }

  render() {
    return (
      <ul className="movie-catalogue">
        {this.state.movieList.map(singleMovie => {
          return (
            <Link to="/movie/">
              <li key={singleMovie.id} className="movie-catalogue__movie">
                <Link to={`/movie/${singleMovie.id}`}>
                  <h2>{singleMovie.original_title}</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
                    alt="movie posters"
                  />
                </Link>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  }
}
