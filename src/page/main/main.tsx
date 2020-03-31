import React, {Props} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import {styles} from './mainCss';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faShoppingCart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../resource/images/logo.svg';

const CircleIcon: React.FC = (Props: Porps) => {
  return (
    <View style={styles.circleIconTextWrapper}>
      <Props.tag
        style={styles.circleIcon}
        width={Props.width}
        height={Props.height}
      />
      <Text style={styles.circleIconText}>{Props.text}</Text>
    </View>
  );
};

const DetailItem: React.FC = (Props: Props) => {
  return (
    <View style={styles.detailItemWrapper}>
      <View>
        <Props.tag width={Props.width} height={Props.height} />
      </View>
      <View style={styles.detailIconPriceText}>
        <Text style={styles.brands}>{Props.brands}</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceNow}>{Props.price}</Text>
          <Text style={styles.priceOriginal}>{Props.priceOriginal}</Text>
          <Text style={styles.priceOff}>{`${Props.priceOff}% Off`}</Text>
        </View>
      </View>
    </View>
  );
};

const Main: React.FC = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon size={22} icon={faBars} color={'#ffffff'} />
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
      <View style={styles.detailWrapper}>
        <View style={styles.detailTextWrapper}>
          <Text style={styles.eleText}>Electronics</Text>
          <TouchableHighlight style={styles.viewBtn}>
            <Text style={styles.viewText}>View All</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.detailIconWrapper}>
          <View style={styles.iconRowWrapper}>
            <View style={styles.iconRowItem}>
              <DetailItem
                width={110}
                height={110}
                brands={'Xiaomi Mi A3'}
                price={'$222'}
                priceOriginal={'$224'}
                priceOff={'9'}
                tag={Logo}
              />
            </View>
            <View style={styles.iconRowItem}>
              <DetailItem
                width={110}
                height={110}
                brands={'Xiaomi Mi A3'}
                price={'$222'}
                priceOriginal={'$224'}
                priceOff={'9'}
                tag={Logo}
              />
            </View>
          </View>
          <View style={styles.iconRowWrapper}>
            <View style={styles.iconRowItem}>
              <DetailItem
                width={110}
                height={110}
                brands={'Xiaomi Mi A3'}
                price={'$222'}
                priceOriginal={'$224'}
                priceOff={'9'}
                tag={Logo}
              />
            </View>
          </View>
        </View>
        <View style={styles.detailTextWrapper}>
          <Text style={styles.eleText}>CLOTH</Text>
          <TouchableHighlight style={styles.viewBtn}>
            <Text style={styles.viewText}>View All</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Main;
