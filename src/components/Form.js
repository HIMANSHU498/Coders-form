import React, { useState, useEffect } from "react";
import "./Form.css";
import Select from "react-select";
const options = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "JS", label: "JS" },
  { value: "REACTJS", label: "REACTJS" },
];
const Form = () => {
  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(false);

  const [selected, setSelected] = useState([]);
  const handleSelectChange = (values) => {
    setSelected(values);
  };
  const Clicked = (e) => {
    e.preventDefault();
    setStatus(true);
    setSelected([]);
    setActive(false);
    setUserValues({ name: "", email: "", password: "" });
  };
  const [active, setActive] = useState(false);
  const handleChange = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (
      userValues.name &&
      userValues.email &&
      userValues.password &&
      selected.length > 0
    ) {
      setActive(true);
    }
  }, [selected, userValues]);

  return (
    <>
      <div className="form-container">
        {status ? (
          <div className="form-status">
            You have successfully subscribed to our plan
          </div>
        ) : (
          <div className="form-status">
            {" "}
            <strong> Try it free 7 days</strong> then ₹180/mo. thereafter
          </div>
        )}
        <div className="form">
          <form className="form-inputs">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="user-input"
              onChange={handleChange}
              value={userValues.name}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="user-input"
              onChange={handleChange}
              value={userValues.email}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="user-input"
              onChange={handleChange}
              value={userValues.password}
            />
            <Select
              className="form-select options-input"
              options={options}
              onChange={handleSelectChange}
              isMulti
              value={selected}
            />

            {active ? (
              <button
                className="btn"
                onClick={Clicked}
                style={{ background: "#37CC8A " }}
              >
                CLAIM YOUR FREE TRIAL
              </button>
            ) : (
              <button className="btn" disabled>
                {" "}
                CLAIM YOUR FREE TRIAL
              </button>
            )}
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
