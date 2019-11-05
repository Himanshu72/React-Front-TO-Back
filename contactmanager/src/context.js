import React, { Component } from "react";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Himanshu Joshi",
        email: "hjoshi115@gmail.com",
        ph: "767688008"
      },
      {
        id: 2,
        name: "Himan Joshi",
        email: "hjoshi115@gmail.com",
        ph: "767688008"
      },
      {
        id: 3,
        name: "H Joshi",
        email: "hjoshi115@gmail.com",
        ph: "767688008"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
