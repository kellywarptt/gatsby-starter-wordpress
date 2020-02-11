import React from "react";
import close from "../../assets/icon-close.svg";
import Notification from "../Notification/Notification";

class ErrorButterBar extends React.Component {
  state = {
    open: true
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
    this.props.afterClose();
  };

  render() {
    return (
      <div>
        <Notification
          open={this.state.open}
          onClose={this.handleClose}
          action={[<img src={close} key="close" onClick={this.handleClose} />]}
        />
      </div>
    );
  }
}

export default ErrorButterBar;
