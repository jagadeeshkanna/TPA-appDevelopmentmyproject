import React from 'react';
import { connect } from 'react-redux';
//import InputLabel from ;
import './Feedback.css';
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updatePhoneNumber,
  updateQuery,
  submitForm
} from './actions';

function Feedback(props) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    query,
    isSubmitted,
    formError,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePhoneNumberChange,
    handleQueryChange,
    handleSubmit,
    isFormValid
  } = props;

  return (
   
    <center >
        <div className='fd'>
      <div className="contact_us_2">
        <div className="responsive-container8-block big-container8">
          <div className="blueBG"></div>
          <div className="responsive-container8-block container8">
            
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="container8-block form-wrapper">
                <p className="text-blk contactus-head">Great To See You Here</p>
                <p className="text-blk contactus-subhead">Your Feedbacks Are Valuable To Us</p>
               <h3>----------------------------</h3> 
                <br></br>
                <div className="responsive-container8-block">
                  <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                    <p className="text-blk input-title">FIRST NAME</p>
                    <br></br>
                    <input
                      type="text"
                      className="input"
                      id="i"
                      name="FirstName"
                      placeholder="Enter first name..."
                      required
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <br></br>
                    <input
                      type="text"
                      className="input"
                      id="i"
                      name="Last Name"
                      placeholder="Enter last name..."
                      required
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <br></br>
                    <input
                      type="email"
                      className="input"
                      id="i"
                      name="Email"
                      placeholder="Enter email..."
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <br></br>
                    <input
                      type="tel"
                      className="input"
                      id="i"
                      name="PhoneNumber"
                      placeholder="Enter phone number..."
                      required
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  <br></br>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                    <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
                    <br></br>
                    <textarea
                      type="text"
                      className="textinput"
                      id="i1"
                      placeholder="Please enter query..."
                      required
                      value={query}
                      onChange={handleQueryChange}
                    ></textarea>
<br></br>
<p>Rating</p>
<input type="radio" id="html" name="fav_language" value="HTML"/><label for="html">Fair</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="radio" id="html" name="fav_language" value="HTML"/><label for="html">Good</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="radio" id="html" name="fav_language" value="HTML"/><label for="html">Excellent</label>


                  </div>
                  <br></br>
                  <br></br>
                </div>
                {formError && <div className="error-message">{formError}</div>}
                {isSubmitted ? (
                  <div className="feedback-message">
                    Feedback Submitted <span className="tick-mark">&#10004;</span>
                  </div>
                ) : (
                  <button className="submit-btn" disabled={!isFormValid}>
                    Submit
                  </button>
                )}
              </div>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    </div>
      </center>
  );
}

const mapStateToProps = (state) => {
  const { firstName, lastName, email, phoneNumber, query, isSubmitted, formError } = state;
  const isFormValid = firstName !== '' && lastName !== '' && email !== '' && phoneNumber !== '' && query !== '';

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    query,
    isSubmitted,
    formError,
    isFormValid
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFirstNameChange: (event) => dispatch(updateFirstName(event.target.value)),
    handleLastNameChange: (event) => dispatch(updateLastName(event.target.value)),
    handleEmailChange: (event) => dispatch(updateEmail(event.target.value)),
    handlePhoneNumberChange: (event) => dispatch(updatePhoneNumber(event.target.value)),
    handleQueryChange: (event) => dispatch(updateQuery(event.target.value)),
    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(submitForm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);