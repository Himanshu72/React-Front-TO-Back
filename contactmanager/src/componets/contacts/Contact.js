import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`http://localhost:8000/delete/contact/${id}`)
      .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    const { name, email, ph, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ color: "red", float: "right", cursor: "pointer" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                &nbsp;
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      color: "black",
                      float: "right",
                      cursor: "pointer",
                      marginRight: "1rem"
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{ph}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
