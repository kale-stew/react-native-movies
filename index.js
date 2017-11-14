import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MovieList from './src/components/MovieList';

const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'🎭 The Best Movies of All Time 🎬'} />
      <MovieList />
    </View>
);

AppRegistry.registerComponent('movies', () => App);
  // in any React Native application, at least one component must be registered to the app
  // the first param ('movies') must match the project name ('movies')
