import React, { Component } from "react";
import { Consumer } from "../../context";

import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const encodeID = Buffer.from(id).toString("base64");
    const res = await axios.get(
      `http://localhost:8000/get/contact/ ${encodeID}`
    );
    console.log(res.data);
    const { name, email, ph } = res.data;

    this.setState({ name: name, email: email, phone: ph });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (dispatch, e) => {
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

    const id = this.props.match.params.id;
    const encodeID = Buffer.from(id).toString("base64");
    const res = await axios.put(
      `http://localhost:8000/modify/contact/ ${encodeID}`,
      { id: encodeID, name: name, email: email, ph: phone }
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });
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
              <div className="card-header">Edit Contact</div>
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

                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
