import React, { Component } from 'react';

class Form extends React.Component {
    constructor() {
      super();
      this.fdate = {value: "2019-02-14 15:00"};
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
      event.preventDefault();
      alert('Your favorite flavor is: ' + this.fdate.value);
      // console.log(event.target.getAttribute("finalDate").value); // from elements property
      // console.log(event.target.getAttribute("firstname").vlaue);

    // console.log(event.target.username.value)          // or directly
    }

    handleChange(event) {
      this.setfdate({value: event.target.value});
    }
    // const data = new FormData(event.target);

  //   fetch('/api/form-submit-url', {
  //     method: 'POST',
  //     body: data,
  //   });
  // }

  render() {
    return (
      // <head>
        // <h2>Search<h2>
        // <nav>
          // <div className="search_box" style="text-align:right;">
            // <div className="topdiv" style="color:#C0C0C0;">
            //   <a href="main.html" >Home</a>
            // </div>
          // </div>
        // </nav>
      // </head>
      <body>
      <div className="bg">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center">Course Survey</h2>

                  <form id="checkout">
            						  <div className="form-group">
              					    <label htmlFor="InputFirstName">First Name</label>
              					    <input type="text" required="required" className="form-control" id="firstname" aria-describedby="FirstNameHelp" placeholder="Enter First Name" name="fn"/>
              					    <small id="FirstNameHelp" className="form-text text-muted">First character must be capital one.</small>
            						  </div>
                          <div className="form-group">
            						    <label htmlFor="InputLastName">Last Name</label>
            						    <input type="text" required="required"className="form-control" id="lastname" aria-describedby="LastNameHelp" placeholder="Enter Last Name" name="ln"/>
            						    <small id="LastNameHelp" className="form-text text-muted">First character must be capital one.</small>
            						  </div>
                          <div className="form-group">
            						    <label htmlFor="CourseName">Course Name</label>
            						    <input type="text" required="required"className="form-control" id="cname" aria-describedby="cnameHelp" placeholder="Enter Course Name" name="cn"/>
            						  </div>
            						  <div className="form-group" id="prof" >
            						  </div>
            						  <div className="form-group">
            						    <label htmlFor="gradeWant">Wanted Grade</label>
            						    <input type="number" min="0" max="100" required="required"className="form-control" id="gradeWant" aria-describedby="gradeWantHelp" placeholder="Enter the grade you want" name="gw"/>
            						    <small id="gradeWant" className="form-text text-muted">Use hundred-based percentage (0%~100%).</small>
            						  </div>
                          <div className="form-group">
            						    <label htmlFor="currentGrade">Current Grade</label>
            						    <input type="number" min="0" max="100" required="required"className="form-control" id="currentGrade" aria-describedby="currentGradeHelp" placeholder="Enter current grade you have" name="cg"/>
            						    <small id="currentGradeHelp" className="form-text text-muted">Use hundred-based percentage (0%~100%).</small>
            						  </div>
            						  <div className="form-group">
            						    <label htmlFor="finalDate">Final Date and Time</label>
            						    <input type="datetime-local" required="required"className="form-control" id="finalDate" aria-describedby="finalDateHelp" name="fd" value={this.fdate.value} onChange={this.handleChange}/>
            						  </div>
                          <fieldset>
            						  	<label htmlFor="Question">Choose the priority of study factor</label>
            						   <div className="form-row">
            						    <div className="form-group col-md-4">
            						      <small htmlFor="profStyle">Lecturing style of professor</small>
            						      <select id="profStyle" className="form-control">
            						        <option selected>1</option>
            						        <option>2</option>
            						        <option>3</option>
            						      </select>
            						    </div>
            						    <div className="form-group col-md-4">
            						      <small htmlFor="topic">className topic is so hard</small>
            						      <select id="topic" className="form-control">
            						        <option>1</option>
            						        <option selected>2</option>
            						        <option>3</option>
            						      </select>
            						    </div>
            						    <div className="form-group col-md-4">
            						      <small htmlFor="gradeWant">Grade you Wanted</small>
            						      <select id="gradeWant" className="form-control">
            						        <option>1</option>
            						        <option>2</option>
            						        <option selected>3</option>
            						      </select>
            						    </div>
            						  </div>
             						  </fieldset>
                          <button className="btn btn-primary" onClick={event => this.onSubmit(event)}>Submit</button>
                  </form>
      <div id="transaction_error_message"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
    );
  }
}

export default Form;
