import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

// Guideline sizes are based on standard ~5" screen mobile device
const GUILINE_BASE_WIDTH = 350;
const GUILINE_BASE_HEIGHT = 680;

export const scale = (size: number) =>
  (SCREEN_WIDTH / GUILINE_BASE_WIDTH) * size;
export const scaleVertical = (size: number) =>
  (SCREEN_HEIGHT / GUILINE_BASE_HEIGHT) * size;
export const scaleModerate = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const NORMAL_PADDING = scaleModerate(16);
