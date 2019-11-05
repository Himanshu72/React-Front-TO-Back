import React, { Component } from "react";

class AddContact extends Component {
  static defaultProps = {
    name: "Himanshu Joshi",
    email: "hjoshi115@gmail.com",
    phone: "7383387646"
  };

  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phone: this.phoneRef.current.value
    };
    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Enter Name...."
                defaultValue={name}
                ref={this.nameRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter Email...."
                defaultValue={email}
                ref={this.emailRef}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter Phone Numnber...."
                defaultValue={phone}
                ref={this.phoneRef}
              />
            </div>
            <input type="submit" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
