import React, {Component} from 'react';
import {
  //@ts-ignore
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LandingPage from './LandingPage';

interface IsProps {
  navigation?: any;
}

interface IsState {
  isSplash: boolean;
  mobileNum: string;
  isActiveId: number;
}

export class SplashScreen extends Component<IsProps, IsState> {
  constructor(props: IsProps) {
    super(props);

    this.state = {
      isSplash: true,
      mobileNum: '',
      isActiveId: 0,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({
      isSplash: false,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.Hide_Splash_Screen();
    }, 3000);

    setInterval(() => {
      this.setState({
        isActiveId: this.state.isActiveId < 2 ? this.state.isActiveId + 1 : 0,
      });
    }, 5000);
  }

  onPressCarousel = (id: any) => {
    this.setState({isActiveId: id});
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const width = Dimensions.get('window').width;
    let Splash_Screen = (
      <View style={styles.SplashContainer}>
        <View style={styles.topcontainer}>
          <View>
            <Image
              style={styles.imagess}
              source={require('../assets/WashNdGoImages/logo(3).png')}
            />
          </View>
          <Image
            style={styles.imagess}
            source={require('../assets/WashNdGoImages/Maskgroup.png')}
          />
        </View>
        <Image
          style={styles.mainImage}
          source={require('../assets/WashNdGoImages/logo.png')}
        />
        <Image
          style={styles.bottomImg}
          source={require('../assets/WashNdGoImages/logo(4).png')}
        />
      </View>
    );

    let LoginScreen = (
      <>
        <LandingPage />
      </>
    );

    return (
      <View>{this.state.isSplash === true ? Splash_Screen : LoginScreen}</View>
    );
  }
}

const styles = StyleSheet.create({
  SplashContainer: {
    // flex: 1,
    height: hp('50%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imagess: {
    resizeMode: 'cover',
  },
  topcontainer: {
    width: wp('100%'),
    display: 'flex',
    flexDirection: 'row',
  },
  mainImage: {
    marginTop: -82,
    resizeMode: 'contain',
    width: wp('100%'),
  },
  bottomImg: {
    resizeMode: 'cover',
    marginTop: -58,
    justifyContent: 'flex-end',
    width: wp('100%'),
  },
});

export default SplashScreen;
