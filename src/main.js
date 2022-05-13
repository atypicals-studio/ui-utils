import environmentMock from './jest/environment-mock'
import fileMock from './jest/file-mock'
import styleMock from './jest/style-mock'
import configureEnzyme from './jest/configure-enzyme'

import {
  desktop,
  tablet,
  mobile,
  desktopAndTablet,
  tabletAndMobile,
  desktopOnly,
  tabletOnly,
  mobileOnly,
  desktopAndTabletOnly,
  tabletAndMobileOnly,
} from './responsive/media-queries'
import useResponsive from './responsive/use-responsive'

import { darken, lighten } from './color'

import { stringToDate } from './date'

import {
  formatDate,
  formatCurrency,
  formatPercentage,
  formatNullable,
  formatNullableDate,
  formatNullableCurrency,
  formatNetworkSpeed,
  formatDuration,
  formatDataVolume,
  formatFileSize,
} from './formatting'

import useFileExport, { downloadFile } from './use-file-export'

import useQueryString from './use-query-string'

import {
  useValidation,
  runValidatorsFromKeys,
  isNotEmpty,
  isEmail,
} from './validation'

export {
  environmentMock,
  fileMock,
  styleMock,
  configureEnzyme,
  desktop,
  tablet,
  mobile,
  desktopAndTablet,
  tabletAndMobile,
  desktopOnly,
  tabletOnly,
  mobileOnly,
  desktopAndTabletOnly,
  tabletAndMobileOnly,
  useResponsive,
  darken,
  lighten,
  stringToDate,
  formatDate,
  formatCurrency,
  formatPercentage,
  formatNullable,
  formatNullableDate,
  formatNullableCurrency,
  formatNetworkSpeed,
  formatDuration,
  formatDataVolume,
  formatFileSize,
  useFileExport,
  downloadFile,
  useQueryString,
  useValidation,
  runValidatorsFromKeys,
  isNotEmpty,
  isEmail,
}
