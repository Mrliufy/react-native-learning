import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textColor: {
    color: 'red',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  titleWrapper: {
    marginTop: 80,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 32,
    color: 'rgb(58, 168, 242)',
  },
  inputContainer: {
    width: '100%',
    marginTop: 60,
  },
  inputWrapper: {
    width: '100%',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  textInput: {
    fontSize: 18,
    fontWeight: '500',
  },
  distance: {
    marginTop: 10,
  },
  forgotPWrapper: {
    width: '100%',
    marginTop: 5,
  },
  forgotPW: {
    textAlign: 'right',
    fontWeight: '500',
    fontSize: 16,
    color: 'rgb(113, 134, 236)',
  },
  btnWrapper: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'rgb(46, 140, 191)',
  },
  btnSignIn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  btnSignInText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  signUpText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'rgb(113, 134, 236)',
  },
  loadingWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    opacity: 0.5,
  },
  wholeDimension: {
    width: '100%',
    height: '100%',
  },
  textValidWrapper: {
    marginTop: 10,
  },
  textValidation: {
    fontSize: 16,
    color: 'red',
  },
  animationTwo: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  commaWrapper: {
    position: 'relative',
    width: 6,
  },
  comma: {
    width: 6,
    height: 6,
    position: 'absolute',
    top: 26,
    zIndex: 99,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  commaSpace: {
    marginLeft: 12,
  },
  loginFailedAni: {
    position: 'relative',
    backgroundColor: 'rgb(230, 170, 181)',
  },
  failTip: {
    fontWeight: '600',
    fontSize: 22,
    color: '#fff',
  },
  closeWrapper: {
    position: 'absolute',
    right: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(217, 98, 112)',
    borderRadius: 6,
  },
  closeLeft: {
    width: 2.5,
    height: 25,
    backgroundColor: '#fff',
    transform: [{rotate: '45deg'}],
  },
  closeRight: {
    position: 'absolute',
    width: 2.5,
    height: 25,
    backgroundColor: '#fff',
    transform: [{rotate: '-45deg'}],
  },
  popupWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
  },
});
