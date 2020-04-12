import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {styles} from './registrationCss';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../resource/images/logo.svg';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Registration: React.FC = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={100}>
      <LinearGradient
        style={[{width: '100%', height: '100%'}]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[
          'rgb(203, 220, 232)',
          'rgb(206, 194, 213)',
          'rgb(234, 214, 188)',
        ]}>
        <ScrollView>
          <TouchableOpacity
            style={styles.container}
            onPress={Keyboard.dismiss}
            activeOpacity={1}>
            <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.arrowWrapper}>
              <FontAwesomeIcon
                size={24}
                color={'rgb(74, 74, 74)'}
                icon={faArrowLeft}
              />
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Ecommerce</Text>
              <Text style={styles.title}>Store</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Full Name"
                  placeholderTextColor="rgb(116, 116, 116)"
                />
              </View>
              <View style={[styles.inputWrapper, styles.distance]}>
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
                  secureTextEntry
                  placeholderTextColor="rgb(116, 116, 116)"
                />
              </View>
              <View style={[styles.inputWrapper, styles.distance]}>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry
                  placeholder="Comfirm Password"
                  placeholderTextColor="rgb(116, 116, 116)"
                />
              </View>
            </View>
            <View style={styles.btnWrapper}>
              <TouchableHighlight style={styles.btnSignUp} onPress={() => {}}>
                <Text style={styles.btnSignUpText}>SIGN UP</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.textWrapper}>
              <TouchableOpacity onPress={navigation.goBack}>
                <Text style={styles.signUpText}>
                  Already have account ? Sign In
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View>
        <FontAwesomeIcon size={22} color={'red'} icon={faCoffee} />
      </View>
      <View>
        <Logo width={120} height={60} />
      </View> */}
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Registration;
