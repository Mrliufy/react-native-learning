import React, {ReactChild, useRef, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

interface Props {
  style: object;
  children: ReactChild;
  valMss?: string;
}

const FadeIn = (props: Props) => {
  const {style, children, valMss} = props;
  const fadeAni = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    function animation() {
      Animated.timing(fadeAni, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }
    if (valMss && valMss > '') {
      fadeAni.setValue(0);
      animation();
    }
  }, [fadeAni, valMss]);

  return (
    <View>
      <Animated.View style={[styles.wrapper, {...style}, {opacity: fadeAni}]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 15,
  },
});

export default React.memo(FadeIn);
