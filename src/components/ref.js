import React, { Component } from "react";

/**
 * In this example, the createRef() method is used to create a reference
 * to the input element in the constructor() method. The ref attribute
 * is then used to assign the reference to the input element. When the
 * clickHandler() method is called, it calls the focus() method on the
 * this.inputRef object to set the focus on the input element.
 */
class Ref extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.inputRef.current.focus();
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          ref={this.inputRef}
        />
        <button onClick={this.clickHandler}>Get ref value</button>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}

export default Ref;
