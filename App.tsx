import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import Reactotron from 'reactotron-react-native';

import {connect, ConnectedProps} from 'react-redux';
import {updateText} from './src/store/demo/action';

type Props = PropsFromRedux;

const MyComponent = (props: Props) => {
  useEffect(() => {
    if (Reactotron.log) {
      Reactotron.log('props: ' + props.text);
    }
  }, [props]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
      <Button
        title="Press me"
        onPress={() => {
          props.dispatch(updateText('Jerry'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    color: 'red',
  },
});

const mapStateToProps = (state: any) => ({
  text: state.demo.text,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(MyComponent);
