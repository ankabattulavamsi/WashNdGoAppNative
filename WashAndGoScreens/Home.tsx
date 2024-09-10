import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  // const userName = route?.params;
  const navigation: any = useNavigation();
  const routers: any = useRoute();

  console.log('**********', routers?.params?.Logindata.userName);
  return (
    <>
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          source={require('../assets/WashNdGoImages/logo.png')}
        />
      </View>
      <View style={styles.welcomeHeCon}>
        <Text style={styles.welcomHead}>
          Welcome {routers?.params?.Logindata?.name}
        </Text>
      </View>
      <View style={styles.logoutBtn}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTitle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainImageContainer: {
    width: wp('100%'),
    display: 'flex',
    alignItems: 'center',
  },
  mainImage: {
    width: wp('70%'),
    resizeMode: 'contain',
  },
  welcomeHeCon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  welcomHead: {
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 36,
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#94C7FF',
    padding: 20,
    borderRadius: 100,
    width: wp('90%'),
    marginTop: 22,
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 92,
  },
  buttonTitle: {
    color: '#092A4D',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '700',
  },
});

export default Home;
