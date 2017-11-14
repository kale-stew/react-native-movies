import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MovieDetail from './MovieDetail';

class MovieList extends Component {
    // set a reasonable initial state
    // starting point for the state being tracked
    state = {
        movies: []
    };

    componentWillMount() {
        // great place to initiate loading of data
        axios.get('https://api.myjson.com/bins/cnqx7')
        .then(response => this.setState({ movies: response.data }));
        // passing an object of 'movies' into setState to be acted upon
    }
    
    renderMovies() {
        return this.state.movies.map(movie =>
           <MovieDetail key={movie.title} movie={movie} />
        ); // best key to use is an id, something unique
    }

    render() {
        // is now aware of state values 
        return (
            <ScrollView>
                { this.renderMovies() }
            </ScrollView>
        );
    }
}

export default MovieList;
