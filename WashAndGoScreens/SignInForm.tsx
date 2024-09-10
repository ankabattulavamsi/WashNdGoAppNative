import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

const SignInForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigation: any = useNavigation();
  const handleSignIn = async () => {
    // Add your sign-up logic here
    try {
      let response: any = await fetch(
        'https://tor.appdevelopers.mobi/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({phone: phone, password: password}),
        },
      ).then(res => res.json());
      if (response.status === true) {
        navigation?.navigate('Home', {Logindata: response.data});
        Alert.alert(response.message);
      } else {
        Alert.alert(response.message);
      }

      console.log('Password:-----', response.message);
    } catch (err) {
      throw new Error('User not found');
    }
  };

  const onPressSignUp = () => {
    console.log('Name------------:');
    console.log('Password:');
    navigation?.navigate('Signup');
  };

  return (
    <>
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          source={require('../assets/WashNdGoImages/logo.png')}
        />
      </View>

      <View style={styles.containerTop}>
        <View style={styles.container}>
          <View style={styles.topCon}>
            <Text style={styles.signup}>Sign In</Text>

            <Text style={styles.signupDesc}>
              Hi ! Welcome back, you {'\n'}have been missed
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputWrapper}>
              <Foundation
                name="telephone"
                size={24}
                color="#777"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <Octicons
                name="lock"
                size={24}
                color="#777"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          <View style={styles.forgetCon}>
            <Text>Forgot password ?</Text>
          </View>

          <TouchableOpacity
            onPress={handleSignIn}
            style={[styles.button, !phone && styles.buttonDisabled]}
            disabled={!phone}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomScCon}>
        <View style={styles.lineCont}>
          <View style={styles.line1} />
          <View>
            <Text style={styles.orHead}>or</Text>
          </View>
          <View style={styles.line2} />
        </View>

        <View style={styles.socialContainer}>
          <View style={styles.googleIconC}>
            <Ionicons name="logo-google" size={22} />
          </View>
          <View style={styles.googleIconC2}>
            <Ionicons name="logo-apple" size={22} />
          </View>
        </View>
      </View>

      <View style={styles.bottomContent}>
        <Text style={styles.desc}>
          Don't have an account?{' '}
          <TouchableOpacity style={styles.signInCon} onPress={onPressSignUp}>
            <Text style={styles.sign}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.privacyDesc}>
          By login or sign up, you agree to our terms of use and {'\n'} privacy
          policy
        </Text>
      </View>
      <Image
        style={styles.bottomImg}
        source={require('../assets/WashNdGoImages/Maskgroup(2).png')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  bottomContent: {
    position: 'absolute',
    top: 740,
  },
  orHead: {
    color: '#666161',
    fontWeight: '700',
    width: 50,
    textAlign: 'center',
  },
  forgetCon: {
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
    paddingBottom: 6,
  },
  mainImageContainer: {
    width: wp('100%'),
    display: 'flex',
    alignItems: 'center',
  },
  mainImage: {
    width: wp('70%'),
    resizeMode: 'contain',
  },
  signup: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 48,
    color: '#000',
  },
  signupDesc: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#0000006B',
  },
  terms: {
    textDecorationLine: 'underline',
    color: '#0000006B',
  },
  signIn: {
    textDecorationLine: 'underline',
    color: '#000',
    fontWeight: '700',
  },
  topCon: {
    paddingBottom: 10,
  },
  privacyDesc: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 16,
    width: wp('100%'),
    paddingBottom: 20,
    // paddingRight: 30,
    paddingTop: 16,
  },

  container: {
    // flex: 0,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    padding: 20,
    // paddingTop: 40,
  },
  containerTop: {
    flex: 1,
    justifyContent: 'center',
    width: wp('100%'),
    // marginBottom: 300,
    marginTop: -160,
    zIndex: 11,
  },
  desc: {
    // paddingTop: 2,
    // paddingBottom: 42,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    cursor: 'pointer',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: '#808080',
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },

  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  button: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomImg: {
    marginTop: -100,
    resizeMode: 'contain',
    width: wp('100%'),
    marginLeft: -82,
  },
  lineCont: {
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'absolute',
    // top: 700,
  },
  line1: {
    flex: 1,
    height: 2,
    backgroundColor: '#A3CFFF',
    marginLeft: 50,
  },
  line2: {
    flex: 1,
    height: 2,
    backgroundColor: '#A3CFFF',
    marginRight: 50,
  },
  googleIconC: {
    // height: 1,
    borderRadius: 100,
    padding: 12,
    width: 50,
    borderColor: '#A3CFFF',
    borderStyle: 'solid',
    marginRight: 10,
    borderWidth: 2,
  },
  googleIconC2: {
    borderRadius: 100,
    padding: 12,
    width: 50,
    borderColor: '#A3CFFF',
    borderStyle: 'solid',
    marginLeft: 10,
    borderWidth: 2,
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 10,
    // position: 'absolute',
    paddingBottom: 60,
  },
  sign: {
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: 0,
  },
  signInCon: {},
  bottomScCon: {
    marginTop: -10,
  },
});

export default SignInForm;
