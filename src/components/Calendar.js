// Calendar.js
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Css/Calendar.css"; // Assuming you will create a Calendar.css for styling

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const events = []; // You can populate this array with actual events
  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarComponent;
