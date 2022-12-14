import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { TabView, SceneMap } from 'react-native-tab-view';

import ShipAction from '../components/movie/valuation';

import CinemaElement from '../components/movie/cinema-element';

import CardReview from '../components/cards/review';

const MovieDetail = ({ navigation }) => {
  const renderScene = SceneMap({
    info: InfoTab,
    review: ReviewTab,
    awards: AwardsTab,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'info', title: 'First' },
    { key: 'review', title: 'Second' },
    { key: 'awards', title: 'Second' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Venom</Text>

        <View style={styles.containerResume}>
          <View style={{ position: 'relative', marginLeft: -30 }}>
            <Image
              style={{
                width: 200,
                height: 300,
                backgroundColor: 'gray',
              }}
              source={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr1PxIwMvIDPUKQHpRbXDnnjJWIUo4qrkTQ&usqp=CAU'
              }
            />

            <View style={{ position: 'absolute', top: 0, right: 0 }}>
              <ShipAction
                styleContainer={{ backgroundColor: '#C8C8C8', opacity: 0.8 }}
              />
            </View>
          </View>

          <View style={styles.containerRight}>
            <Text style={styles.textDuration}>1h 5m </Text>
            <Text style={styles.textGender}>Mystery Thriller</Text>

            <View style={[styles.containerCinema, { marginBottom: 20 }]}>
              <CinemaElement text="3D/MAX" />
              <CinemaElement text="4D" />
            </View>

            <View style={styles.containerShip}>
              <Text style={styles.textShip}>5.8/10 </Text>
              <Text style={styles.textShip}>imbd</Text>
            </View>

            <View style={[styles.containerShip, { marginBottom: 10 }]}>
              <Text style={styles.textShip}>5.8/10 </Text>
              <Text style={styles.textShip}>imbd</Text>
            </View>

            <View style={styles.containerShipAction}>
              <ShipAction
                iconName="play"
                text="Watch Trailer"
                styleIcon={{ marginRight: 10, fontSize: 22 }}
                styleText={{ fontSize: 18, fontWeight: 'bold' }}
                styleContainer={{
                  padding: 18,
                  width: 200,
                }}
              />
            </View>
          </View>
        </View>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={{ marginVertical: 10 }}
          indicatorStyle={{ backgroundColor: 'pink' }}
        />
      </ScrollView>

      <TouchableOpacity style={styles.book}>
        <Icon style={styles.ticket} name="ticket" color="#000"></Icon>
        <Text style={styles.text}>Book ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const description =
  'El periodista Eddie Brock (Tom Hardy) comienza a investigar la Fundaci??n Vida, dirigida por el cient??fico Carlton Drake (Riz Ahmed). Al descubrir que realizan experimentos con seres humanos y formas de vida alien??gena, har?? todo lo posible por sacar a la luz este tipo de excesos. Tarea que le afectar?? en lo profesional, y en lo personal con su novia Anne (Michelle Williams).';

const InfoTab = () => (
  <CardReview title="Story time" description={description} />
);

const ReviewTab = () => (
  <CardReview title="Story time" description={description} />
);

const AwardsTab = () => (
  <CardReview title="Story time" description={description} />
);

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  scrollContainer: {
    flex: 1,
    padding: 30,
    overflow: 'scroll',
  },
  book: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgb(202, 132, 4);',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ticket: {
    position: 'absolute',
    left: 40,
    fontSize: 36,
    marginRight: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  containerResume: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    padding: 20,
    position: 'relative',
    height: '100%',
  },
  containerCinema: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerShip: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 10,
    width: 120,
    marginBottom: 10,
  },
  containerShipAction: {
    position: 'absolute',
    left: -60,
    bottom: 0,
  },
  textShip: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  textDuration: {
    color: 'gray',
    fontSize: 22,
    fontWeight: '400',
    paddingBottom: 10,
  },
  textGender: {
    color: 'orange',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 15,
  },
});
