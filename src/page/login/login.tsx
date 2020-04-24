import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import {styles} from './loginCss';
import Reactotron from 'reactotron-react-native';
import {useNavigation, StackRouter} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setNavigation, clearSetting} from '../../store/login/saga';
import LinearGradient from 'react-native-linear-gradient';
import {
  updateAccount,
  updatePassword,
  updateLoginstatus,
  fetchData,
} from '../../store/login/action';
import FadeIn from '../../components/fadeIn';
import PopUpTips from '../../components/popupTips';

const Login = () => {
  const navitation = useNavigation();
  const state = useSelector(state => state.login);
  const [valAccountMss, setValAccountMss] = useState('');
  const [valPasswordMss, setValPasswordMss] = useState('');
  const [popupIndex, setPopupIndex] = useState(-1);
  const dispatch = useDispatch();
  const durationTime = useRef(10).current;

  let commaDisOne = useRef(new Animated.Value(26)).current;
  let commaDisTwo = useRef(new Animated.Value(26)).current;
  let commaDisThree = useRef(new Animated.Value(26)).current;
  let btnWidth = useRef(new Animated.Value(100)).current;
  let failBtnWidth = useRef(new Animated.Value(0)).current;
  let closeLeftWidth = useRef(new Animated.Value(0)).current;
  let closeRightWidth = useRef(new Animated.Value(0)).current;
  let closeShakeVal = useRef(new Animated.Value(0)).current;
  let failedTipsOpa = useRef(new Animated.Value(0)).current;
  let aniStatus = useRef('stop');

  const {loginStatus} = state;

  useEffect(() => {
    setNavigation(navitation);
    return clearSetting;
  }, [navitation]);

  /**
   * comma animation up and down
   */
  const commaOneUp = () => {
    commaDisOne.setValue(26);
    commaDisTwo.setValue(26);
    commaDisThree.setValue(26);
    Animated.sequence([
      Animated.timing(commaDisOne, {
        toValue: 15,
        duration: durationTime,
      }),
      Animated.parallel([
        Animated.timing(commaDisOne, {
          toValue: 26,
          duration: durationTime,
        }),
        Animated.sequence([
          Animated.timing(commaDisTwo, {
            toValue: 15,
            duration: durationTime,
          }),
          Animated.parallel([
            Animated.timing(commaDisTwo, {
              toValue: 26,
              duration: durationTime,
            }),
            Animated.sequence([
              Animated.timing(commaDisThree, {
                toValue: 15,
                duration: durationTime,
              }),
              Animated.timing(commaDisThree, {
                toValue: 26,
                duration: durationTime,
              }),
            ]),
          ]),
        ]),
      ]),
    ]).start(() => {
      if (aniStatus.current === 'login') {
        commaOneUp();
      } else {
        return false;
      }
    });
  };

  const btnAniShrink = () => {
    Animated.timing(btnWidth, {
      toValue: 25,
      duration: 500,
    }).start(() => commaOneUp());
  };

  const btnAniExpand = () => {
    Animated.timing(btnWidth, {
      toValue: 100,
      duration: 50,
    }).start();
  };

  const closeAni = () => {
    Animated.sequence([
      Animated.timing(closeLeftWidth, {
        toValue: 25,
        duration: 200,
        // useNativeDriver: true,
      }),
      Animated.timing(closeRightWidth, {
        toValue: 25,
        duration: 200,
        // useNativeDriver: true,
      }),
      Animated.timing(failedTipsOpa, {
        toValue: 1,
        duration: 2000,
      }),
    ]).start(shakeBtn);
  };

  /**
   * shake button
   */
  const shakeBtn = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(closeShakeVal, {
          toValue: 1.0,
          duration: 25,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(closeShakeVal, {
          toValue: -1.0,
          duration: 50,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(closeShakeVal, {
          toValue: 0.0,
          duration: 25,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {iterations: 3},
    ).start(() =>
      setTimeout(() => {
        faildBtnShink();
      }, 200),
    );
  };

  const faildBtnShink = () => {
    Animated.timing(failBtnWidth, {
      toValue: 100,
      duration: 10,
    }).start(btnAniExpand);
  };

  /**
   * Animation
   */
  useEffect(() => {
    console.log(aniStatus.current);
    if (loginStatus === 'login' && aniStatus.current === 'stop') {
      aniStatus.current = 'start';
      btnAniShrink();
    } else if (loginStatus === 'failed') {
      closeAni();
      setTimeout(() => {
        dispatch(updateLoginstatus(''));
        setPopupIndex(99);
        aniStatus.current = 'stop';
        btnWidth.setValue(100);
        failBtnWidth.setValue(0);
        closeLeftWidth.setValue(0);
        closeRightWidth.setValue(0);
        closeShakeVal.setValue(0);
        failedTipsOpa.setValue(0);
      }, 2000);
    }
  });

  /**
   * login
   */
  function login() {
    dispatch(fetchData());
  }

  function signUp() {
    navitation.navigate('Registration');
  }

  function validateAcc(params: string) {
    const reg = new RegExp(/[>?<{}]/g);
    if (reg.test(params)) {
      setValAccountMss('Account has illegal element.');
    } else if (params > '') {
      setValAccountMss('');
    }
  }

  function validatePa(params: string) {
    if (params.length < 6) {
      setValPasswordMss('Password need at least 6 words!');
    } else {
      setValPasswordMss('');
    }
  }
  function onChangeAccount(param: string) {
    dispatch(updateAccount(param));
    validateAcc(param);
  }

  function onChangePassord(param: string) {
    dispatch(updatePassword(param));
    validatePa(param);
  }

  const tipsCallback = useCallback(() => {
    setPopupIndex(-1);
  }, []);

  return (
    <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
      <LinearGradient
        style={[
          styles.container,
          styles.wholeDimension,
          {position: 'relative'},
        ]}
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
              onChangeText={onChangeAccount}
              value={state.account}
            />
          </View>
          <FadeIn style={styles.textValidWrapper} valMss={valAccountMss}>
            <Text style={styles.textValidation}>{valAccountMss}</Text>
          </FadeIn>
          <View style={[styles.inputWrapper, styles.distance]}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="rgb(116, 116, 116)"
              value={state.password}
              onChangeText={onChangePassord}
            />
          </View>
          <FadeIn style={styles.textValidWrapper} valMss={valPasswordMss}>
            <Text style={styles.textValidation}>{valPasswordMss}</Text>
          </FadeIn>
        </View>
        <View style={styles.forgotPWrapper}>
          <Text style={styles.forgotPW}>Forgot Password ?</Text>
        </View>
        {loginStatus !== 'failed' ? (
          <Animated.View
            style={[
              styles.btnWrapper,
              {
                width: btnWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}>
            {loginStatus === '' ? (
              <TouchableHighlight style={styles.btnSignIn} onPress={login}>
                <Text style={styles.btnSignInText}>SIGN IN</Text>
              </TouchableHighlight>
            ) : (
              <View style={[styles.animationTwo]}>
                <View style={styles.commaWrapper}>
                  <Animated.View
                    style={[
                      styles.comma,
                      {
                        top: commaDisOne.interpolate({
                          inputRange: [10, 26],
                          outputRange: [10, 26],
                        }),
                      },
                    ]}
                  />
                </View>
                <View style={[styles.commaWrapper, styles.commaSpace]}>
                  <Animated.View
                    style={[
                      styles.comma,
                      {
                        top: commaDisTwo.interpolate({
                          inputRange: [10, 26],
                          outputRange: [10, 26],
                        }),
                      },
                    ]}
                  />
                </View>
                <View style={[styles.commaWrapper, styles.commaSpace]}>
                  <Animated.View
                    style={[
                      styles.comma,
                      {
                        top: commaDisThree.interpolate({
                          inputRange: [10, 26],
                          outputRange: [10, 26],
                        }),
                      },
                    ]}
                  />
                </View>
              </View>
            )}
          </Animated.View>
        ) : (
          <Animated.View
            style={[
              styles.btnWrapper,
              styles.loginFailedAni,
              {
                width: failBtnWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}>
            <Animated.View style={{opacity: failedTipsOpa}}>
              <Text style={styles.failTip}>Oops! Try Again</Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.closeWrapper,
                {
                  transform: [
                    {
                      rotate: closeShakeVal.interpolate({
                        inputRange: [-1, 1],
                        outputRange: ['-0.1rad', '0.1rad'],
                      }),
                    },
                  ],
                },
              ]}>
              <Animated.View
                style={[styles.closeLeft, {height: closeLeftWidth}]}
              />
              <Animated.View
                style={[styles.closeRight, {height: closeRightWidth}]}
              />
            </Animated.View>
          </Animated.View>
        )}
        <View style={styles.textWrapper}>
          <TouchableOpacity onPress={signUp}>
            <Text style={styles.signUpText}>New here ? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <Animated.View style={[styles.popupWrapper, {zIndex: popupIndex}]}>
        <PopUpTips
          title="Login Failed"
          content="Please check your account or password"
          btnLeftText="Comfirm"
          btnRtText="Cancle"
          callback={tipsCallback}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Login;
