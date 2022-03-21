import {StyleSheet} from 'react-native';
import {scaleModerate} from './scale';
import colors from './colors';

export const REGULAR = '400';
export const MEDIUM = '500';
export const SEMIBOLD = '600';
export const BOLD = '700';

const typos = StyleSheet.create({
  h1: {
    fontSize: scaleModerate(48),
    lineHeight: scaleModerate(56),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h2: {
    fontSize: scaleModerate(40),
    lineHeight: scaleModerate(48),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h3: {
    fontSize: scaleModerate(36),
    lineHeight: scaleModerate(44),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h4: {
    fontSize: scaleModerate(32),
    lineHeight: scaleModerate(40),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h5: {
    fontSize: scaleModerate(24),
    lineHeight: scaleModerate(32),
    letterSpacing: 1,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  h6: {
    fontSize: scaleModerate(20),
    lineHeight: scaleModerate(28),
    letterSpacing: 0.5,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleLarge: {
    fontSize: scaleModerate(18),
    lineHeight: scaleModerate(26),
    letterSpacing: 0.5,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleMedium: {
    fontSize: scaleModerate(16),
    lineHeight: scaleModerate(24),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleSmall: {
    fontSize: scaleModerate(14),
    lineHeight: scaleModerate(24),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  titleVerySmall: {
    fontSize: scaleModerate(12),
    lineHeight: scaleModerate(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.title,
  },
  titleTiny: {
    fontSize: scaleModerate(12),
    lineHeight: scaleModerate(20),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.title,
  },
  buttonLarge: {
    fontSize: scaleModerate(16),
    lineHeight: scaleModerate(24),
    letterSpacing: 0,
    fontWeight: BOLD,
    color: colors.title,
  },
  buttonSmall: {
    fontSize: scaleModerate(14),
    lineHeight: scaleModerate(24),
    letterSpacing: 0,
    fontWeight: BOLD,
    color: colors.title,
  },
  tab: {
    fontSize: scaleModerate(14),
    lineHeight: scaleModerate(24),
    letterSpacing: 0,
    fontWeight: SEMIBOLD,
    color: colors.bodyText,
  },
  bodyLarge: {
    fontSize: scaleModerate(16),
    lineHeight: scaleModerate(24),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.bodyText,
  },
  bodyMedium: {
    fontSize: scaleModerate(14),
    lineHeight: scaleModerate(24),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.bodyText,
  },
  bodySmall: {
    fontSize: scaleModerate(13),
    lineHeight: scaleModerate(20),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.bodyText,
  },
  bodySmallBold: {
    fontSize: scaleModerate(13),
    lineHeight: scaleModerate(20),
    letterSpacing: 0,
    fontWeight: BOLD,
    color: colors.bodyText,
  },
  bodySmallRegular: {
    fontSize: scaleModerate(13),
    lineHeight: scaleModerate(20),
    letterSpacing: 0,
    fontWeight: REGULAR,
    color: colors.bodyText,
  },
  bodyTinyRegular: {
    fontSize: scaleModerate(12),
    lineHeight: scaleModerate(18),
    letterSpacing: 0,
    fontWeight: REGULAR,
    color: colors.bodyText,
  },
  captionLarge: {
    fontSize: scaleModerate(12),
    lineHeight: scaleModerate(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.description,
  },
  captionSmall: {
    fontSize: scaleModerate(11),
    lineHeight: scaleModerate(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.description,
  },
  captionTiny: {
    fontSize: scaleModerate(10),
    lineHeight: scaleModerate(16),
    letterSpacing: 0,
    fontWeight: MEDIUM,
    color: colors.description,
  },
  CHIP: {
    fontSize: scaleModerate(10),
    lineHeight: scaleModerate(16),
    letterSpacing: 0.5,
    fontWeight: BOLD,
    color: colors.description,
  },
});

export default typos;
