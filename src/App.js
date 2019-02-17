import React from "react";

import Calendar from "./components/Calendar";
import Form from "./components/Form"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">

          </div>
        </header>
        <main>
        <div id="flex-container">
          <div id="flex-item">
            <Calendar />
            // <h2>Forms</h2>
          </div>
          <div id="flex-item">
            <Form/>
          </div>
        </div>
        </main>
      </div>
    );
  }
}
export default App;


// import React, { Component } from "react";
// // import Calendar from "react-big-calendar";
// import Calendar1 from "./components/Calendar";
// import moment from "moment";
//
// import "./App.css";
// // import "react-big-calendar/lib/css/react-big-calendar.css";
// // import logo from "./logo.svg";
//
// // const localizer = Calendar.momentLocalizer(moment);
//
// class App extends Component {
//   // state = {
//   //   events: [
//   //     {
//   //       start: new Date(),
//   //       end: new Date(moment().add(1, "days")),
//   //       title: "Some title"
//   //     }
//   //   ]
//   // };
//
//   render() {
//     return (
//       <div className="App">
//         // <div className="row">
//         //   <Calendar
//         //     localizer={localizer}
//         //     defaultDate={new Date()}
//         //     defaultView="month"
//         //     events={this.state.events}
//         //     style={{ height: "100vh", width: "90vh" }}
//         //   />
//
//         // </div>
//         <Calendar1/>
//
//       </div>
//
//     );
//   }
// }
//
// export default App;
