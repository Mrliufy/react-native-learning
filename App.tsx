import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import './declarations.d.ts';

import Reactotron from 'reactotron-react-native';

import {connect, ConnectedProps} from 'react-redux';
import {updateText} from './src/store/demo/action';
import Login from './src/page/login/login';
import Main from './src/page/main/main';
import Detail from './src/page/detail/detail';
import Registration from './src/page/registration/registration';
import SideMenu from './src/page/sideMenu/sideMenu';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

type Props = PropsFromRedux;
const Stack = createStackNavigator();

function ScreenNavigators() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{title: 'Login', header: () => null}}
        component={Login}
      />
      <Stack.Screen
        name="Registration"
        options={{title: 'Sign UP'}}
        component={Registration}
      />
      <Stack.Screen
        name="Main"
        options={{title: 'Product List', header: () => null}}
        component={Main}
      />
      <Stack.Screen
        name="Detail"
        options={{title: 'Product detail', header: () => null}}
        component={Detail}
      />
    </Stack.Navigator>
  );
}

const MyComponent = props => {
  const {loading} = props;
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition={'left'} drawerContent={SideMenu}>
        <Drawer.Screen name="ScreenNavigators" component={ScreenNavigators} />
      </Drawer.Navigator>
      {loading === true ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color="#0000ff" animating={true} />
        </View>
      ) : null}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    color: 'red',
  },
  btnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  loadingWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(256, 256, 256, .6)',
  },
});

const mapStateToProps = (state: any) => ({
  text: state.demo.text,
  loading: state.login.loading,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(MyComponent);
