import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <>
      <div className="text-container">
        Learn to code by watching others
        <span>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </span>
      </div>
      <div className="form-container">
        <div className="form-status">
          {" "}
          <strong> Try it free 7 days</strong> then ₹180/mo. thereafter
        </div>
        <div className="form">
          <form className="form-inputs">
            <input type="text" placeholder="Name" className="user-input" />
            <input type="email" placeholder="Email" className="user-input" />
            <input
              type="password"
              placeholder="Password"
              className="user-input"
            />
            <select id="cars" name="cars" className="options-input">
              <option defaultChecked>Choose your skills</option>
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="reactjs">ReactJs</option>
            </select>
            <button className="btn">CLAIM YOUR FREE TRIAL</button>
            <div className="terms">
              By clicking the button you are agreeing to our{" "}
              <span style={{ color: "red" }}>Terms and Services</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
