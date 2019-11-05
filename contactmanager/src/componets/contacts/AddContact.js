import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: " phone is required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      ph: phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });
    //clear state
    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="name:"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    placeholder="Enter Name"
                    errors={errors.name}
                  />
                  <TextInputGroup
                    label="email:"
                    text="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Enter Email"
                    errors={errors.email}
                  />
                  <TextInputGroup
                    label="Phone:"
                    value={phone}
                    onChange={this.onChange}
                    placeholder="Enter Phone"
                    name="phone"
                    errors={errors.phone}
                  />

                  <input type="submit" className="btn btn-light btn-block" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
