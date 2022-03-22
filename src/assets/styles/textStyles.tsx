import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import colors from './colors';

export const REGULAR = '400';
export const MEDIUM = '500';
export const SEMIBOLD = '600';
export const BOLD = '700';

const typos = StyleSheet.create({
  h1: {
    fontSize: moderateScale(48),
    lineHeight: moderateScale(56),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h2: {
    fontSize: moderateScale(40),
    lineHeight: moderateScale(48),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h3: {
    fontSize: moderateScale(36),
    lineHeight: moderateScale(44),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h4: {
    fontSize: moderateScale(32),
    lineHeight: moderateScale(40),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h5: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h6: {
    fontSize: moderateScale(20),
    lineHeight: moderateScale(28),
    letterSpacing: 0.5,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleLarge: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(26),
    letterSpacing: 0.5,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleMedium: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleSmall: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleVerySmall: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.title,
  },
  titleTiny: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(20),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  buttonLarge: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontWeight: BOLD,
    color: colors.title,
  },
  buttonSmall: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontWeight: BOLD,
    color: colors.title,
  },
  tab: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.bodyText,
  },
  bodyLarge: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.bodyText,
  },
  bodyMedium: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.bodyText,
  },
  bodySmall: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.bodyText,
  },
  bodySmallBold: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
    letterSpacing: 0,
    fontWeight: BOLD,
    color: colors.bodyText,
  },
  bodySmallRegular: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
    letterSpacing: 0,
    fontWeight: REGULAR,
    color: colors.bodyText,
  },
  bodyTinyRegular: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    letterSpacing: 0,
    fontWeight: REGULAR,
    color: colors.bodyText,
  },
  captionLarge: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.description,
  },
  captionSmall: {
    fontSize: moderateScale(11),
    lineHeight: moderateScale(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.description,
  },
  captionTiny: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.description,
  },
  CHIP: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(16),
    letterSpacing: 0.5,
    fontWeight: BOLD,
    color: colors.description,
  },
});

export default typos;
