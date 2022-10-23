import React, { useState, useEffect } from 'react';

import GetDiscover, { SortByOptions } from '../../services/GetDiscover';

import MovieCarousel from '../movie/movie-carousel';

import { Text,View, StyleSheet} from 'react-native';

const DiscoverRomance = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let genres = 10749;
    GetDiscover(SortByOptions.voteDesc,genres).then((res) => {
      setMovies(res);
    });
  }, []);

  return (
  <View style={styles.container}>
  <Text style={styles.title}>Romance</Text>
  <MovieCarousel movies={movies} />
  </View>
  );
};

export default DiscoverRomance;

const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 20,
      marginLeft: 20, 
    },
    container: {
        textAlign: 'left'
    }
  });