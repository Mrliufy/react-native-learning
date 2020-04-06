import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Porps = {
  tag: any;
  width: Number;
  height: Number;
  text: String;
};
const CircleIcon = (props: Porps) => {
  return (
    <View style={styles.circleIconTextWrapper}>
      <props.tag
        style={styles.circleIcon}
        width={props.width}
        height={props.height}
      />
      <Text style={styles.circleIconText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleIconTextWrapper: {
    // height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  circleIcon: {
    padding: 0,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 25,
  },
  circleIconText: {
    textAlign: 'center',
  },
});

export default React.memo(CircleIcon);
