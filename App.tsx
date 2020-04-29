import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
  Animated,
} from 'react-native';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

import {getLoginInfo} from './src/store/login/action';
import './declarations.d.ts';

import Reactotron from 'reactotron-react-native';

import {useSelector} from 'react-redux';
import {updateText} from './src/store/demo/action';
import Login from './src/page/login/login';
import Main from './src/page/main/main';
import Detail from './src/page/detail/detail';
import Registration from './src/page/registration/registration';
import SideMenu from './src/page/sideMenu/sideMenu';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PopUpTips from './src/components/popupTips';

const Drawer = createDrawerNavigator();

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
        options={{title: 'Sign UP', header: () => null}}
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

const MyComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.login);
  const loadingStatus = useRef('stoped');
  const {loading} = state;
  const [networkStatus, setNetworkStatus] = useState(true);

  const indicatorTop = useRef(new Animated.Value(0)).current;

  /**
   * judge login status
   */
  useEffect(() => {
    dispatch(getLoginInfo());
  });

  useEffect(() => {
    if (loading && loadingStatus.current === 'stoped') {
      loadingStatus.current = 'started';
      Animated.timing(indicatorTop, {
        toValue: 50,
        duration: 1000,
      }).start();
    } else {
      loadingStatus.current = 'stoped';
      indicatorTop.setValue(0);
    }
  }, [indicatorTop, loading]);

  const tipsCallback = useCallback(() => {
    setNetworkStatus(true);
  }, [setNetworkStatus]);

  /**
   * testing network connection
   *
   */

  useEffect(() => {
    NetInfo.fetch().then((state: object) => {
      if (!state.isConnected) {
        setNetworkStatus(false);
      }
    });
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      console.log('changed');
      if (!state.isConnected) {
        setNetworkStatus(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition={'left'} drawerContent={SideMenu}>
        <Drawer.Screen name="ScreenNavigators" component={ScreenNavigators} />
      </Drawer.Navigator>
      {loading === true ? (
        <View style={styles.loadingWrapper}>
          <Animated.View
            style={[
              styles.loadingAniWrapper,
              {
                top: indicatorTop.interpolate({
                  inputRange: [0, 50],
                  outputRange: ['-40%', '0%'],
                }),
              },
            ]}>
            <ActivityIndicator size="large" color="#0000ff" animating={true} />
          </Animated.View>
        </View>
      ) : null}
      {networkStatus === true ? null : (
        <PopUpTips
          title="Net work"
          content="Please check your network connection"
          btnLeftText="Comfirm"
          btnRtText="Cancle"
          callback={tipsCallback}
        />
      )}
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
    backgroundColor: 'rgba(256, 256, 256, .6)',
  },
  loadingAniWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;
