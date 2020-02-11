import React from "react";
import axios from "axios";

import { generateFullUrl } from "./util/urlutil";
import * as apiConstants from "./util/apiConstants";
import { updateObject } from "./util/utility";
import { validateInput } from "./util/Validation";

class InviteForm extends React.Component {
  state = {
    showSuccess: false,
    showError: true,
    show: false,
    controls: {
      name: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      title: {
        value: "",
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      email: {
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      details: {
        value: "",
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      company: {
        value: "",
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      website: {
        value: "",
        validation: {
          required: true
        },
        valid: true,
        touched: false
      }
    }
  };

  inputChangedHandler = controlName => event => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: validateInput(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      })
    });
    this.setState({ controls: updatedControls });
  };

  isSubmitButtonDisabled = () => {
    for (var control in this.state.controls) {
      if (!this.state.controls[control].valid) {
        return true; /* button should be disabled*/
      }
    }
    return false;
  };

  /**
   * To show the error view of the textfield. Only do so if there is content.
   */
  isEmailError = () => {
    return (
      !this.state.controls["email"].valid &&
      this.state.controls["email"].value.length !== 0
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    let url = generateFullUrl(apiConstants.INVITE_SERVLET_PATH);
    let newInvite = {
      name: this.state.controls.name.value,
      title: this.state.controls.title.value,
      email: this.state.controls.email.value,
      details: this.state.controls.details.value,
      company: this.state.controls.company.value,
      website: this.state.controls.website.value
    };

    axios
      .post(url, newInvite)
      .then(response => {
        this.setState({ showSuccess: true, showError: false, show: true });
        this.resetForm();
        setTimeout(() => {
          this.setState({ show: false, showSuccess: false });
        }, 4000);
      })
      .catch(error => {
        this.setState({ showSuccess: false, showError: true, show: true });
        setTimeout(() => {
          this.setState({ show: false, showError: false });
        }, 4000);
      });
  };

  resetForm = () => {
    let newcontrols = {};
    for (var control in this.state.controls) {
      newcontrols[control] = updateObject(this.state.controls[control], {
        value: "",
        valid: !this.state.controls[control].validation.required,
        touched: false
      });
    }
    this.setState({ controls: newcontrols });
  };

  render() {
    let butterbar = null;
    if (this.state.showError) {
      butterbar = (
        <div className={`notification error ${this.state.show ? "show" : ""}`}>
          Submission failed. Please email jad@terratrue.com.
        </div>
      );
    } else if (this.state.showSuccess) {
      butterbar = (
        <div
          className={`notification success ${this.state.show ? "show" : ""}`}
        >
          Success! We'll be in touch.
        </div>
      );
    }
    return (
      <form noValidate autoComplete="off">
        {butterbar}
        <label>
          Name
          <input
            id="name"
            label="Name"
            placeholder="Full name"
            value={this.state.controls.name.value}
            onChange={this.inputChangedHandler("name")}
          />
        </label>
        <label>
          Email
          <input
            id="email"
            label="Email"
            placeholder="Work email address"
            value={this.state.controls.email.value}
            onChange={this.inputChangedHandler("email")}
          />
        </label>
        <label className="half">
          Company
          <input
            id="company"
            label="Company"
            placeholder="Company"
            value={this.state.controls.company.value}
            onChange={this.inputChangedHandler("company")}
          />
        </label>
        <label className="half">
          Title
          <input
            id="title"
            label="Title"
            placeholder="Your title (optional)"
            value={this.state.controls.title.value}
            onChange={this.inputChangedHandler("title")}
          />
        </label>
        <label>
          Website
          <input
            id="website"
            label="Website"
            placeholder="Website"
            value={this.state.controls.website.value}
            onChange={this.inputChangedHandler("website")}
          />
        </label>
        <label>
          Additional Information
          <input
            id="details"
            label="Additional Information"
            placeholder="Additional information (optional)"
            value={this.state.controls.details.value}
            onChange={this.inputChangedHandler("details")}
          />
        </label>
        <button
          className="btn orange"
          type="submit"
          disabled={this.isSubmitButtonDisabled()}
          onClick={this.handleSubmit}
          to={this.props.to}
          title="Submit Interest"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default InviteForm;
