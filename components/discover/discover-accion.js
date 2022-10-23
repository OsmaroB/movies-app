import React, { useState, useEffect } from 'react';

import GetDiscover, { SortByOptions } from '../../services/GetDiscover';

import MovieCarousel from '../movie/movie-carousel';

import { Text,View, StyleSheet} from 'react-native';

const DiscoverAccion = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let genres = 28;
    GetDiscover(SortByOptions.voteDesc,genres).then((res) => {
      setMovies(res);
    });
  }, []);

  return (
    <View style={styles.container}>
  <Text style={styles.title}>Acción</Text>
  <MovieCarousel movies={movies} />
  </View>
  );
};

export default DiscoverAccion;


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