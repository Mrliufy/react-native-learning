import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

interface Props {
  title?: string;
  content: string;
  btnLeftText?: string;
  btnRtText?: string;
  children?: React.ReactNode;
  callback: () => {};
}

const PopUpTips = (props: Props) => {
  const {title, content, btnLeftText, btnRtText, callback} = props;
  return (
    <View style={styles.popupWrapper}>
      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon
            size={40}
            icon={faExclamationCircle}
            color={'rgb(233, 189, 140)'}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity onPress={callback} style={styles.totalWidth}>
            <View style={styles.btnItemWrapper}>
              <Text style={styles.btnText}>{btnLeftText}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={callback} style={styles.totalWidth}>
            <View style={styles.btnItemWrapper}>
              <Text style={styles.btnText}>{btnRtText}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popupWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: 'rgba(151, 151, 151, .4)',
  },
  wrapper: {
    width: '80%',
    height: 230,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 40,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  iconWrapper: {
    marginTop: 20,
  },
  titleWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  titleText: {
    fontWeight: '400',
    fontSize: 20,
  },
  contentWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  contentText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'rgb(123,123,123)',
  },
  btnWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalWidth: {
    width: '40%',
  },
  btnItemWrapper: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'rgb(58, 168, 242)',
  },
  btnText: {
    fontWeight: '600',
    color: '#fff',
  },
});

export default React.memo(PopUpTips);
