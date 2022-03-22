import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

// Guideline sizes are based on standard ~5" screen mobile device
const GUILINE_BASE_WIDTH = 350;
const GUILINE_BASE_HEIGHT = 680;

export const NORMAL_PADDING = moderateScale(16);
