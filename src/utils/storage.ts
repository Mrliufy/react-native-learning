import {AsyncStorage} from 'react-native';

export async function getItem(key: string) {
  try {
    const val = await AsyncStorage.getItem(key);
    return val;
  } catch (error) {
    console.log(`get ${key} value failed!`);
  }
}

export async function saveItem(key: string, value: any) {
  try {
    const val = await AsyncStorage.setItem(key, value);
    return val;
  } catch (error) {
    console.log(`set ${key} value failed!`);
  }
}

export async function removeItem(key: string) {
  try {
    const val = await AsyncStorage.removeItem(key);
    return val;
  } catch (error) {
    console.log(`remove ${key} value failed!`);
  }
}
