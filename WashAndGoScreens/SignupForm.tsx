import CheckBox from '@react-native-community/checkbox';
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
import {
  widthPercentageToDP as wp,
  //   heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import Foundation from 'react-native-vector-icons/Foundation';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigation: any = useNavigation();
  const handleSignUp = async () => {
    // Add your sign-up logic here

    try {
      let response: any = await fetch(
        'https://tor.appdevelopers.mobi/api/register?',
        {
          method: 'POST',
          body: JSON.stringify({name: name, phone: phone, password: password}),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      const dataa = await response.json();
      console.log('111111', dataa);

      if (dataa.status === true) {
        navigation?.navigate('Home', {Logindata: dataa.data});
        Alert.alert(dataa.message);
        console.log('------', JSON.stringify(dataa.message));
      } else {
        Alert.alert(dataa.error.phone[0]);
        console.log('datà----', JSON.stringify(dataa.error.phone[0]));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          source={require('../assets/WashNdGoImages/logo.png')}
        />
      </View>

      {/* <AntDesign name="stepforward" size={24} color="black" /> */}
      <View style={styles.containerTop}>
        <View style={styles.container}>
          <View style={styles.topCon}>
            <Text style={styles.signup}>Sign Up</Text>

            <Text style={styles.signupDesc}>
              Fill in the below form and add life to your car!
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputWrapper}>
              <Octicons
                name="person"
                size={24}
                color="#777"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
              />
            </View>
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
                keyboardType="email-address"
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

          <View style={styles.checkboxCon}>
            <View style={styles.checkboxContainer}>
              <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} />
              <Text style={styles.checkboxLabel}>
                Agree with the{' '}
                <Text style={styles.terms}>Terms&Conditions</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, !agreeTerms && styles.buttonDisabled]}
            onPress={handleSignUp}
            disabled={!agreeTerms}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.desc}>
            Already have an account?{' '}
            <TouchableOpacity
              style={styles.signInCon}
              onPress={() => navigation?.navigate('SignIn')}>
              <Text style={styles.sign}>Sign In</Text>
            </TouchableOpacity>
          </Text>
          <Text style={styles.privacyDesc}>
            By login or sign up, you agree to our terms of use and {'\n'}{' '}
            privacy policy
          </Text>
        </View>
      </View>
      <Image
        style={styles.bottomImg}
        source={require('../assets/WashNdGoImages/Maskgroup(1).png')}
      />
    </>
  );
};
const styles = StyleSheet.create({
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
  mainImageContainer: {
    width: wp('100%'),
    display: 'flex',
    alignItems: 'center',
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
    paddingBottom: 20,
  },
  privacyDesc: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 16,
    width: wp('100%'),
    paddingBottom: 20,
    paddingRight: 30,
    paddingTop: 10,
  },
  checkboxCon: {
    display: 'flex',
    alignSelf: 'flex-start',
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
    marginBottom: 40,
    zIndex: 9999,
  },
  desc: {
    paddingTop: 16,
    // paddingBottom: 42,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    // justifyContent: 'flex-start',
    marginBottom: 20,
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
    alignSelf: 'flex-end',
    marginTop: -120,
    resizeMode: 'cover',
  },
  sign: {
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: 0,
  },
  signInCon: {},
});
export default SignupForm;
