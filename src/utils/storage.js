import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    throw err;
  }
};

const retrieveData = async (key, callback) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (callback) {
      callback(JSON.parse(value));
    }
  } catch (err) {
    throw err;
  }
};

const mergeData = async (key, data) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(data));
  } catch (err) {
    throw err;
  }
};

export {storeData, retrieveData, mergeData};
