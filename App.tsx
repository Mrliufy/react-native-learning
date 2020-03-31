import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';

import './declarations.d.ts';

import Reactotron from 'reactotron-react-native';

import {connect, ConnectedProps} from 'react-redux';
import {updateText} from './src/store/demo/action';
import Login from './src/page/login/login';
import Main from './src/page/main/main';
import Detail from './src/page/detail/detail';
import Registration from './src/page/registration/registration';

type Props = PropsFromRedux;

const MyComponent = (props: Props) => {
  useEffect(() => {
    if (Reactotron.log) {
      Reactotron.log('props: ' + props.text);
    }
  }, [props]);
  const [component, setComponent] = useState('Login');
  function showComponet(params: String) {
    setComponent(params);
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
      {/* <Button
        style={{display: 'none'}}
        title="Press me"
        onPress={() => {
          props.dispatch(updateText('Jerry'));
        }}
      /> */}
      <View style={styles.btnWrapper}>
        <TouchableHighlight onPress={() => showComponet('Login')}>
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => showComponet('Registration')}>
          <Text>Registration</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => showComponet('Main')}>
          <Text>Main</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => showComponet('Detail')}>
          <Text>Detail</Text>
        </TouchableHighlight>
      </View>
      <View style={{display: component === 'Login' ? 'flex' : 'none'}}>
        <Login />
      </View>
      <View style={{display: component === 'Registration' ? 'flex' : 'none'}}>
        <Registration />
      </View>
      <View style={{display: component === 'Main' ? 'flex' : 'none'}}>
        <Main />
      </View>
      <View style={{display: component === 'Detail' ? 'flex' : 'none'}}>
        <Detail />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'none',
    marginTop: 60,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    color: 'red',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = (state: any) => ({
  text: state.demo.text,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(MyComponent);
