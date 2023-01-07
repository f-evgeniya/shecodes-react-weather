import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let dateIndex = props.date.getDate();

  return (
    <div>
      {day}, {month} {dateIndex}
    </div>
  );
}
