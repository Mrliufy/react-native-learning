import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {},
  headerWrapper: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(46, 140, 191)',
  },
  iconRightWrapper: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailPictureTextWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  detailPictureWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  pictureItem: {
    alignItems: 'center',
  },
  btnWrapper: {
    width: 70,
    height: 25,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(46, 140, 191)',
  },
  btnText: {
    color: '#ffffff',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(46, 140, 191)',
  },
  textWrapper: {
    marginTop: 5,
  },
  brands: {
    fontSize: 20,
    fontWeight: '300',
  },
  priceWrapper: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  priceNow: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  priceOriginal: {
    marginLeft: 10,
    fontSize: 16,
    textDecorationLine: 'line-through',
    textAlignVertical: 'bottom',
    color: 'gray',
  },
  priceOff: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(46, 140, 191)',
    textAlignVertical: 'bottom',
  },
  space: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgb(235, 235, 235)',
  },
  selectWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  selectText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(46, 140, 191)',
  },
  selectBtnWrapper: {
    width: 60,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#ddd',
  },
  discriptionWapper: {
    paddingHorizontal: 20,
  },
  disTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(46, 140, 191)',
  },
  disDetails: {
    marginTop: 5,
    fontSize: 16,
  },
  disBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  wishiListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wishListText: {
    marginLeft: 10,
  },
  addCarWrapper: {
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    backgroundColor: 'rgb(46, 140, 191)',
  },
  addCarText: {
    color: '#ffffff',
  },
});
