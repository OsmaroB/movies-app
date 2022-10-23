import React, { useState, useEffect } from 'react';

import GetDiscover, { SortByOptions } from '../../services/GetDiscover';

import MovieCarousel from '../movie/movie-carousel';

import { Text,View, StyleSheet} from 'react-native';

const DiscoverComedia = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let genres = 35;
    GetDiscover(SortByOptions.voteDesc,genres).then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Comedia</Text>
    <MovieCarousel movies={movies} />
    </View>
  );
};

export default DiscoverComedia;

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