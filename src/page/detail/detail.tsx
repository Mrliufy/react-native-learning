import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faShoppingCart,
  faSearch,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {styles} from './detailCss';
import Logo from '../../resource/images/logo.svg';
import {useNavigation, useRoute} from '@react-navigation/native';

const Detail: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const param = route.params && route.params.detail;

  function goback() {
    navigation.goBack();
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={goback}>
          <FontAwesomeIcon size={22} color={'#ffffff'} icon={faArrowLeft} />
        </TouchableOpacity>
        <View style={styles.iconRightWrapper}>
          <FontAwesomeIcon size={22} color={'#ffffff'} icon={faSearch} />
          <FontAwesomeIcon size={22} color={'#ffffff'} icon={faShoppingCart} />
        </View>
      </View>
      <View style={styles.detailPictureTextWrapper}>
        <View style={styles.detailPictureWrapper}>
          <View style={styles.pictureItem}>
            <Logo width={160} height={160} />
          </View>
          <View style={styles.btnWrapper}>
            <Text style={styles.btnText}>{'Instock' + param}</Text>
          </View>
          <View style={styles.circle} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.brands}>Xiaomi Mi A3</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.priceNow}>$ 222</Text>
            <Text style={styles.priceOriginal}>$224</Text>
            <Text style={styles.priceOff}>9% Off</Text>
          </View>
        </View>
      </View>
      <View style={styles.space} />
      <View style={styles.selectWrapper}>
        <Text style={styles.selectText}>Select color:</Text>
        <View style={styles.selectBtnWrapper}>
          <Text style={styles.selectBtnText}>BLUE</Text>
        </View>
      </View>
      <View style={styles.space} />
      <View style={styles.discriptionWapper}>
        <Text style={styles.disTitle}>Description:</Text>
        <Text style={styles.disDetails}>
          that's be good that's be goodthat's be goodthat's be goodthat's be
          goodthat's be goodthat's be goodthat's be goodthat's be good that's be
          goodthat's be goodthat's be good
        </Text>
      </View>
      <View style={styles.disBtnWrapper}>
        <View style={styles.wishiListWrapper}>
          <FontAwesomeIcon
            size={24}
            icon={faHeart}
            color={'rgb(46, 140, 191)'}
          />
          <Text style={styles.wishListText}>WishList</Text>
        </View>
        <View style={styles.addCarWrapper}>
          <Text style={styles.addCarText}>Add To Cart</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
