import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { register, getAllUsers } from "../Redux/Actions/ActLoginRegister";
import { getAllMessages } from "../Redux/Actions/ActSendMessage";
import { getAllBooks } from "../Redux/Actions/ActBooks";

const initialState = {
  displayName: "",
  username: "",
  password: "",
  reenterPassword: ""
};
class Register extends Component {
  state = {
    ...initialState
  };

  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllMessages();
    this.props.getAllBooks();
  }

  handleSubmit = () => {
    const { username } = this.state;

    const checkExistingUsers = this.props.allUsers.filter(
      user => username === user.username
    );

    checkExistingUsers.length > 0 ? alert("username exists") : this.addUser();
  };

  addUser() {
    const { displayName, username, password, reenterPassword } = this.state;
    if (this.lengthofFieldsValid() === false) {
      return;
    }
    if (password === reenterPassword) {
      this.props.register(displayName, username, password);
      this.setState({ ...initialState });
      return;
    } else {
      alert("Passwords don't match!");
      this.setState({ password: "", reenterPassword: "" });
    }
  }

  lengthofFieldsValid = () => {
    const { displayName, username, password, reenterPassword } = this.state;
    const checkField = [displayName, username, password, reenterPassword];
    const lengthRequired = checkField.filter(item => item.length < 3);

    if (lengthRequired.length > 0) {
      alert(
        "Please make sure all fields are input fields are longer than 2 characters"
      );
      return false;
    }
    return true;
  };

  updateUserInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Form style={{ padding: "1vh", margin: "auto" }}>
        <p
          className="profileHeader"
          style={{ color: "#61892F", textAlign: "center" }}
        >
          <b>STILL NEED AN ACCOUNT? &ensp; SIGN UP BELOW.</b>
        </p>

        <Form.Input
          className="displayName"
          placeholder="Display Name"
          type="text"
          name="displayName"
          value={this.state.displayName}
          onChange={this.updateUserInput}
        />
        <Form.Input
          className="username"
          autoComplete="username"
          placeholder="Username"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.updateUserInput}
        />
        <Form.Input
          className="password"
          placeholder="Password"
          autoComplete="new-password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.updateUserInput}
        />
        <Form.Input
          className="reenterPassword"
          placeholder="Re-Enter Password"
          autoComplete="new-password"
          type="password"
          name="reenterPassword"
          value={this.state.reenterPassword}
          onChange={this.updateUserInput}
        />
        <Form.Button
          style={{ backgroundColor: "#86C232", color: "white" }}
          className="submit"
          onClick={this.handleSubmit}
        >
          Sign Up
        </Form.Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

function mapDispatchToProps(dispatch) {
  return {
    register: (displayname, username, password) => {
      dispatch(register(displayname, username, password));
    },
    getAllUsers: () => {
      dispatch(getAllUsers());
    },
    getAllMessages: () => {
      dispatch(getAllMessages());
    },
    getAllBooks: () => {
      dispatch(getAllBooks());
    }
  };
}
const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
export default Connect;
