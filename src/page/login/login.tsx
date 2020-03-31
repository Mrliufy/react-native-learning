import React, {Props} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import {styles} from './loginCss';
import Reactotron from 'reactotron-react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../resource/images/logo.svg';

const Login: React.FC = (Props: Props) => {
  /**
   * login
   */
  function login() {
    //https://reactnative.dev/movies.json
    return (
      fetch('https://reactnative.dev/movies.json', {
        // method: 'POST',
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        // },
        // body: {
        //   loginname: 'jerry_liu',
        //   password: '1qaz@WSX',
        //   callback: () => {
        //     Reactotron.log('123');
        //   },
        // },
      })
        .then(response => {
          Reactotron.log(response);
          response.json();
        })
        // .then(json => {
        //   Reactotron.log(json);
        //   return json.movies;
        // })
        .catch(error => {
          console.error(error);
        })
    );
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.textColor}>Login</Text> */}
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
          />
        </View>
        <View style={[styles.inputWrapper, styles.distance]}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="rgb(116, 116, 116)"
          />
        </View>
      </View>
      <View style={styles.forgotPWrapper}>
        <Text style={styles.forgotPW}>Forgot Password ?</Text>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableHighlight
          style={styles.btnSignIn}
          onPress={() => {
            login();
          }}>
          <Text style={styles.btnSignInText}>SIGN IN</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.textWrapper}>
        <TouchableHighlight>
          <Text style={styles.signUpText}>New here ? Sign Up</Text>
        </TouchableHighlight>
      </View>
      {/* <View>
        <FontAwesomeIcon size={22} color={'red'} icon={faCoffee} />
      </View>
      <View>
        <Logo width={120} height={60} />
      </View> */}
    </View>
  );
};

export default Login;
