import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
type Props = {
  tag: any;
  width: Number;
  height: Number;
  brands: String;
  price: String;
  priceOriginal: String;
  priceOff: String;
};

const DetailItem = (props: Props) => {
  return (
    <View style={styles.detailItemWrapper}>
      <View>
        <props.tag width={props.width} height={props.height} />
      </View>
      <View style={styles.detailIconPriceText}>
        <Text style={styles.brands}>{props.brands}</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceNow}>{props.price}</Text>
          <Text style={styles.priceOriginal}>{props.priceOriginal}</Text>
          <Text style={styles.priceOff}>{`${props.priceOff}% Off`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItemWrapper: {
    width: '100%',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailIconPriceText: {
    width: '100%',
  },
  brands: {
    fontSize: 13,
  },
  priceWrapper: {
    flexDirection: 'row',
  },
  priceNow: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  priceOriginal: {
    marginLeft: 5,
    fontSize: 13,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  priceOff: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'rgb(58, 158, 201)',
  },
});

export default React.memo(DetailItem);
