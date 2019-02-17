import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
// import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {


  // import logo from "./logo.svg";
    state = {
      events: [
        // {
        //   start: new Date(),
        //   end: new Date(moment().add(1, "days")),
        //   title: "Random Title"
        // },
        {
          start: new Date(moment("Mon 03-Jul-2019, 11:00 AM")),
          end: new Date(moment("2019-02-14 1:00").add(2,"hours")),
          title: "Study for X"
        }
      ]
    };

    render() {
      return (
        <div className="App">
            <BigCalendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="week"
              // view='week'
              events={this.state.events}
              // views={['month','week','day']}
              // views={['month','week','day','agenda']}
              style={{ height: "100vh", width: "100vh" }}
            />
          </div>
        // <h2>FINALS</h2>

      );
    }
  }

export default Calendar;
