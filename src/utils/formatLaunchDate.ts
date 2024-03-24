import moment from "moment"

export const formatLaunchDate = (dateUtc: string): string => {
    return moment.utc(dateUtc).utcOffset(moment().utcOffset()).format('MMMM Do YYYY, HH:mm');
}