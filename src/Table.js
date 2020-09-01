import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buttom from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Table extends Component {
  state = {
    name: "",
    height: "",
    age: "",
  };

  handleSubmit = () =>{
      this.props.updateData([ ...this.props.data, this.state ]);
      this.setState({
          name: "",
          height: "",
          age: ""
      })
  }

  handleChange = (event) => {
    // this.setState({ name: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state);
  };

  handleRemove = (event) => {
    const newData = this.props.data.filter((d) => {
      // event.target.name
      return d.name != event.target.name;
    });
    this.props.updateData(newData);
  };

  renderRows() {
    return this.props.data.map((student) => {
      return (
        <Row
          key={student.name + student.height + student.age}
          style={{ marginTop: "10px" }}
        >
          <Col xs={3}>{student.name}</Col>
          <Col xs={3}>{student.height}</Col>
          <Col xs={3}>{student.age}</Col>
          <Col xs={3}>
            <Button
              variant={"danger"}
              type={"button"}
              style={{ width: "100%" }}
              name={student.name}
              onClick={this.handleRemove}
            >
              Remove
            </Button>
          </Col>
        </Row>
      );
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>
            <Form.Control
              placeholder={"Name"}
              name={"name"}
              style={{ fontSize: "0.8em" }}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs={3}>
            <Form.Control
              placeholder={"Height"}
              name={"height"}
              style={{ fontSize: "0.8em" }}
              value={this.state.height}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs={3}>
            <Form.Control
              placeholder={"Age"}
              name={"age"}
              style={{ fontSize: "0.8em" }}
              value={this.state.age}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs={3}>
            <Buttom
              variant={"primary"}
              type={"buttom"}
              style={{ width: "100%" }}
              onClick={this.handleSubmit}
            >
              Add
            </Buttom>
          </Col>
        </Row>
        {this.renderRows()}
      </div>
    );
  }
}
