import moment from 'jalali-moment'

export const dateFromObjectId = objectId => moment(new Date(parseInt(objectId.substring(0, 8), 16) * 1000)).locale('fa').format('HH:mm YYYY-MM-DD')

// export const dateFromObjectId = objectId => new Date(parseInt(objectId.substring(0, 8), 16) * 1000)
