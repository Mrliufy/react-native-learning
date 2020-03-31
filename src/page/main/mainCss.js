import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  headerWrapper: {
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(21, 140, 192)',
  },
  iconWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  titleText: {
    lineHeight: 22,
    fontSize: 22,
    fontWeight: '400',
    color: '#ffffff',
  },
  inputWrapper: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  searchIcon: {
    marginLeft: 20,
    fontWeight: '100',
    color: 'gray',
  },
  serchInput: {
    width: 200,
    marginLeft: 10,
    fontSize: 16,
  },
  circlIconWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
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
  space: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgb(235, 235, 235)',
  },
  detailWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  detailTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  eleText: {
    fontSize: 18,
    color: 'rgb(58, 158, 201)',
  },
  viewBtn: {
    width: 80,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'rgb(58, 158, 201)',
  },
  viewText: {
    fontSize: 14,
    color: '#ffffff',
  },
  detailIconWrapper: {
    marginTop: 10,
  },
  iconRowWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconRowItem: {
    width: '48%',
    alignItems: 'center',
  },
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
