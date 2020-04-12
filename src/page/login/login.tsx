import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './loginCss';
import Reactotron from 'reactotron-react-native';
import {useNavigation, StackRouter} from '@react-navigation/native';
import {connect, ConnectedProps} from 'react-redux';
import {setNavigation, clearSetting} from '../../store/login/saga';
import LinearGradient from 'react-native-linear-gradient';
import {
  updateAccount,
  updatePassword,
  fetchData,
} from '../../store/login/action';

const Login = (props: PropsFromRedux) => {
  const navitation = useNavigation();
  const {dispatch, loading} = props;
  useEffect(() => {
    setNavigation(navitation);
    return clearSetting;
  }, [navitation]);

  /**
   * login
   */
  function login() {
    // navitation.navigate('Main');
    dispatch(fetchData(navitation));
  }

  function signUp() {
    navitation.navigate('Registration');
  }

  function onChangeAccount(param: string) {
    dispatch(updateAccount(param));
  }

  function onChangePassord(param: string) {
    dispatch(updatePassword(param));
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
      <LinearGradient
        style={[styles.container, {width: '100%', height: '100%'}]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[
          'rgb(203, 220, 232)',
          'rgb(206, 194, 213)',
          'rgb(234, 214, 188)',
        ]}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Ecommerce</Text>
          <Text style={styles.title}>Store</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              placeholderTextColor="rgb(116, 116, 116)"
              onChangeText={text => onChangeAccount(text)}
              value={props.account}
            />
          </View>
          <View style={[styles.inputWrapper, styles.distance]}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="rgb(116, 116, 116)"
              value={props.password}
              onChangeText={text => onChangePassord(text)}
            />
          </View>
        </View>
        <View style={styles.forgotPWrapper}>
          <Text style={styles.forgotPW}>Forgot Password ?</Text>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableHighlight style={styles.btnSignIn} onPress={login}>
            <Text style={styles.btnSignInText}>SIGN IN</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.textWrapper}>
          <TouchableOpacity onPress={signUp}>
            <Text style={styles.signUpText}>New here ? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state: any) => ({
  account: state.login.account,
  password: state.login.password,
  loading: state.login.loading,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Login);
