import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const LandingPage = () => {
  const navigation: any = useNavigation();
  // const onPressStart = {}
  //   const onPressBtn = () => {
  //     console.log('jjj', navigation?.navigate('Signup'));
  //     navigation?.navigate('Signup');
  //   };
  return (
    <View style={styles.washContainer}>
      <View style={styles.topcontainer}>
        <View>
          <Image source={require('../assets/WashNdGoImages/logo(3).png')} />
        </View>
        <Image source={require('../assets/WashNdGoImages/Maskgroup.png')} />
      </View>
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          source={require('../assets/WashNdGoImages/logo.png')}
        />
      </View>
      <View style={styles.bottomCon}>
        <Text style={styles.heading}>
          Sparkle & Shine Transform{'\n'}Your Drive with Every Wash!
        </Text>

        <TouchableOpacity
          onPress={() => navigation?.navigate('Signup')}
          style={styles.button}>
          <Text style={styles.buttonTitle}>Let's Start</Text>
        </TouchableOpacity>

        <Text style={styles.desc}>
          Already have an account ?{' '}
          <TouchableOpacity
            style={styles.signInCon}
            onPress={() => navigation?.navigate('SignIn')}>
            <Text style={styles.sign}>Sign in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  washContainer: {
    height: hp('100%'),
    width: wp('100%'),
  },
  signInCon: {},
  topcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainImage: {
    marginTop: -98,
    width: wp('90%'),
    resizeMode: 'contain',
  },
  mainImageContainer: {
    width: wp('100%'),
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    color: '#808080',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    margin: 22,
    marginBottom: 42,
  },
  button: {
    backgroundColor: '#94C7FF',
    padding: 20,
    borderRadius: 100,
    width: wp('90%'),
    // alignItems: 'center',
    marginTop: 22,
  },
  buttonTitle: {
    color: '#092A4D',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '700',
  },
  desc: {
    paddingTop: 16,
    // paddingBottom: 42,
    alignContent: 'center',
    fontSize: 16,
  },
  sign: {
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: 0,
  },
  bottomCon: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: -10,
  },
});

export default LandingPage;
