import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textColor: {
    color: 'red',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  arrowWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  titleWrapper: {
    marginTop: 100,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 32,
    color: 'rgb(58, 168, 242)',
  },
  inputContainer: {
    width: '100%',
    marginTop: 40,
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
    marginTop: 30,
  },
  btnWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgb(46, 140, 191)',
  },
  btnSignUp: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignUpText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  textWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'rgb(113, 134, 236)',
  },
});
