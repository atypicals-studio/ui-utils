import { format, parseISO } from 'date-fns'

const locale = 'fr-BE'

const formatDate = (date) => {
  if (date) {
    const dateObj = date instanceof Date ? date : parseISO(date)
    return format(dateObj, 'dd/MM/yyyy')
  }
  return null
}

const formatCurrency = (amount) =>
  amount !== null && amount !== undefined
    ? `${amount.toLocaleString(locale, {
        maximumFractionDigits: 2,
      })} €`.replace(' ', ' ')
    : null

const formatPercentage = (percentage) =>
  percentage !== null && percentage !== null
    ? `${percentage.toLocaleString(locale, { maximumFractionDigits: 2 })}%`
    : null

const formatNullable = (nullable) =>
  nullable !== null && nullable !== undefined && nullable !== ''
    ? nullable
    : '-'

const formatNullableDate = (date) => formatNullable(formatDate(date))

const formatNullableCurrency = (amount) =>
  formatNullable(formatCurrency(amount))

const formatNetworkSpeed = (bps) => {
  if (bps) {
    let i = -1
    let remainingBps = bps
    const speedUnits = [
      'Kbps',
      'Mbps',
      'Gbps',
      'Tbps',
      'Pbps',
      'Ebps',
      'Zbps',
      'Ybps',
    ]
    do {
      remainingBps /= 1000
      i++
    } while (remainingBps > 999)
    return `${Math.max(remainingBps, 0.1).toFixed(1)} ${speedUnits[i]}`
  }
  return null
}

const formatDuration = (totalSeconds) => {
  if (totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600)
    const remainingTotalSeconds = totalSeconds % 3600
    const minutes = Math.floor(remainingTotalSeconds / 60)
    const seconds = remainingTotalSeconds % 60
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  }
  return null
}

const formatDataVolume = (amount) =>
  amount ? `${Math.round(amount * 100) / 100} Mb` : null

const formatFileSize = (bytes) => {
  if (bytes) {
    if (bytes > 1000000) {
      return `${Math.round(bytes / 100000) / 10} MB`
    }
    if (bytes > 1000) {
      return `${Math.round(bytes / 100) / 10} KB`
    }
    return `${bytes} B`
  }
  return null
}

export {
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
}
