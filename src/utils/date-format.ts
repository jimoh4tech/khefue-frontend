import moment from "moment";

export const formatDateToTime = (date: string | Date) =>
  moment(date).format("HH:mm");

export const formatDateIntervalToHours = (
  from: string | Date,
  to: string | Date
) => {
  const diff = moment.duration(moment(to).diff(moment(from))); // Get the difference

  const hours = Math.floor(diff.asHours()); // Get total hours
  const minutes = diff.minutes();
  return `${hours}h ${minutes}m`;
};