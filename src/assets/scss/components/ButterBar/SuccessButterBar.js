import React from "react";
import close from "../../assets/icon-close.svg";
import Notification from "../Notification/Notification";

class SuccessButterBar extends React.Component {
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

  /**
   * Receives:
   *   message: string to display
   *   afterClose: callback after we close the butterbar.
   */
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

export default SuccessButterBar;
