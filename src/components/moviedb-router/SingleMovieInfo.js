import React, { Component } from "react";
import axios from "axios";

export default class SingleMovieInfo extends Component {
  state = {
    movieInfo: {}
  };

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, {
        params: {
          api_key: "efb3b7e6b4dd9bb8a3c1ffc5a1a55fdf"
        }
      })
      .then(data => {
        this.setState({
            movieInfo: data.data
        })
      });
  }

  render() {
    return (
      <div className="movie-single__description">
        <h2>{this.state.movieInfo.original_title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${this.state.movieInfo.poster_path}`}
          alt="stuffs and stuff"
        />
        <p>{this.state.movieInfo.overview}</p>
      </div>
    );
  }
}
