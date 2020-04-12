import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  FlatList,
  VirtualizedList,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import {styles} from './mainCss';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faShoppingCart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../resource/images/logo.svg';
import CircleIcon from '../../components/CircleIcon';
import DetailItem from '../../components/DetailItem';
import {useNavigation} from '@react-navigation/native';
import {connect, ConnectedProps} from 'react-redux';
import {fetchProductList} from '../../store/main/action';

const Main = (props: PropsFromRedux) => {
  const navigation = useNavigation();
  const {list, refreshing} = props;

  function showMenu() {
    navigation.openDrawer();
  }

  function refreshData() {
    props.dispatch(fetchProductList());
  }

  function getItem(data: any, index: Number): Object {
    return {
      id: Math.random()
        .toString(12)
        .substring(0),
      title: `Item ${index + 1}`,
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={showMenu}>
            <FontAwesomeIcon size={22} icon={faBars} color={'#ffffff'} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Ecommerce Store</Text>
          <FontAwesomeIcon
            size={22}
            style={styles.titleText}
            icon={faShoppingCart}
            color={'#ffffff'}
          />
        </View>
        <View style={styles.inputWrapper}>
          <FontAwesomeIcon
            style={styles.searchIcon}
            size={22}
            icon={faSearch}
            color={'gray'}
          />
          <TextInput
            style={styles.serchInput}
            placeholder="Search for products..."
            autoFocus={false}
          />
        </View>
      </View>
      <View style={styles.circlIconWrapper}>
        <CircleIcon width={50} height={50} text="Electronics" tag={Logo} />
        <CircleIcon width={50} height={50} text="Cloths" tag={Logo} />
        <CircleIcon width={50} height={50} text="FURNITURES" tag={Logo} />
      </View>
      <View style={styles.space} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
        }
        style={styles.detailWrapper}>
        <View style={styles.detailTextWrapper}>
          <Text style={styles.eleText}>Electronics</Text>
          <TouchableOpacity onPress={refreshData} style={styles.viewBtn}>
            <Text style={styles.viewText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailIconWrapper}>
          {/* <View style={styles.iconRowWrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detail', {detail: 'first'});
              }}
              style={styles.iconRowItem}>
              <DetailItem
                width={110}
                height={110}
                brands={'Xiaomi Mi A3'}
                price={'$222'}
                priceOriginal={'$224'}
                priceOff={'9'}
                tag={Logo}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detail', {detail: 'second'});
              }}
              style={styles.iconRowItem}>
              <DetailItem
                width={110}
                height={110}
                brands={'Xiaomi Mi A3'}
                price={'$222'}
                priceOriginal={'$224'}
                priceOff={'9'}
                tag={Logo}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconRowWrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detail', {detail: 'third'});
              }}
              style={styles.iconRowItem}>
              <DetailItem
                width={110}
                height={110}
                brands={'Xiaomi Mi A3'}
                price={'$222'}
                priceOriginal={'$224'}
                priceOff={'9'}
                tag={Logo}
              />
            </TouchableOpacity>
          </View> */}
          <FlatList
            data={list}
            numColumns={2}
            horizontal={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={item.type_name + index}
                onPress={() => {
                  navigation.navigate('Detail', {detail: 'third'});
                }}
                style={[
                  styles.iconRowItem,
                  {
                    marginTop: index > 1 ? 10 : 0,
                    marginLeft: index % 2 === 0 ? 0 : 10,
                  },
                ]}>
                <DetailItem
                  width={110}
                  height={110}
                  brands={item.type_name}
                  price={'$222'}
                  priceOriginal={'$224'}
                  priceOff={'9'}
                  tag={Logo}
                />
              </TouchableOpacity>
            )}
          />
          {/* <VirtualizedList
            data={list}
            initialNumToRender={4}
            renderItem={({item, index}) => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  key={item.type_name + index}
                  onPress={() => {
                    navigation.navigate('Detail', {detail: 'third'});
                  }}
                  style={[
                    styles.iconRowItem,
                    {
                      marginTop: 10,
                      // marginLeft: index % 2 === 0 ? 0 : 10,
                    },
                  ]}>
                  <DetailItem
                    width={110}
                    height={110}
                    brands={item.type_name}
                    price={'$222'}
                    priceOriginal={'$224'}
                    priceOff={'9'}
                    tag={Logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  key={item.type_name + index}
                  onPress={() => {
                    navigation.navigate('Detail', {detail: 'third'});
                  }}
                  style={[
                    styles.iconRowItem,
                    {
                      marginTop: 10,
                      marginLeft: 10,
                    },
                  ]}>
                  <DetailItem
                    width={110}
                    height={110}
                    brands={item.type_name}
                    price={'$222'}
                    priceOriginal={'$224'}
                    priceOff={'9'}
                    tag={Logo}
                  />
                </TouchableOpacity>
              </View>
            )}
            // keyExtractor={item => item.key}
            getItemCount={() => 6}
            getItem={getItem}
          /> */}
        </View>
        <View style={styles.detailTextWrapper}>
          <Text style={styles.eleText}>CLOTH</Text>
          <TouchableHighlight style={styles.viewBtn}>
            <Text style={styles.viewText}>View All</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({
  list: state.main.list,
  refreshing: state.main.refreshing,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Main);
