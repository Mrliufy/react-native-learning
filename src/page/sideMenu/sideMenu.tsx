import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './sideMenuCss';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faShoppingCart,
  faHeart,
  faUser,
  faCartArrowDown,
  faEnvelope,
  faPhoneAlt,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

const SideMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Text style={styles.titleText}>Ecommerce </Text>
        <Text style={styles.titleText}>Store</Text>
      </View>
      <View style={styles.itemListContainer}>
        <Text style={styles.itemTitle}>My Account</Text>
        <TouchableOpacity style={styles.itemWrapper}>
          <FontAwesomeIcon
            size={22}
            icon={faUser}
            color={'rgb(21, 140, 192)'}
          />
          <Text style={styles.iconText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemWrapper, styles.itemMargin]}>
          <FontAwesomeIcon
            size={22}
            icon={faHeart}
            color={'rgb(21, 140, 192)'}
          />
          <Text style={styles.iconText}>My Wish List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemWrapper, styles.itemMargin]}>
          <FontAwesomeIcon
            size={22}
            icon={faShoppingCart}
            color={'rgb(21, 140, 192)'}
          />
          <Text style={styles.iconText}>My Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemWrapper, styles.itemMargin]}>
          <FontAwesomeIcon
            size={22}
            icon={faCartArrowDown}
            color={'rgb(21, 140, 192)'}
          />
          <Text style={styles.iconText}>My Orders</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemListContainer}>
        <Text style={styles.itemTitle}>Support</Text>
        <TouchableOpacity style={styles.itemWrapper}>
          <FontAwesomeIcon
            size={22}
            icon={faEnvelope}
            color={'rgb(21, 140, 192)'}
          />
          <Text style={styles.iconText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemWrapper, styles.itemMargin]}>
          <FontAwesomeIcon
            size={22}
            icon={faPhoneAlt}
            color={'rgb(21, 140, 192)'}
          />
          <Text style={styles.iconText}>Call</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.itemListContainer, styles.itemListContainerLast]}>
        <Text style={styles.itemTitle}>Others</Text>
        <TouchableOpacity style={styles.itemWrapper}>
          <FontAwesomeIcon
            size={22}
            icon={faShareAlt}
            color={'rgb(21, 140, 192)'}
          />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideMenu;
