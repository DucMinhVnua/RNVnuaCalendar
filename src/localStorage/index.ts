import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (keyStore: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(keyStore, jsonValue);
  } catch (error) {
    // Error saving data
  }
};

export const retrieve = async (keyRetrieve: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(keyRetrieve);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }

  console.log('Remove Done.');
};
