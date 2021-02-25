import PropTypes from "prop-types";
import React from "react";

import { MenuItem } from "./MenuItem";
import { withTranslation } from "react-i18next";

class NetworkOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MenuItem description={this.props.t("menu_description:network")}>
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={this.props.open}>
            <i className="fas fa-project-diagram ml-2 mr-4" />
            <span className="font-weight-bold">{this.props.t("menu:Network Viewer")}</span>
          </button>
        </span>
      </MenuItem>
    );
  }
}
NetworkOption.displayName = "NetworkOption";
NetworkOption.propTypes = {
  open: PropTypes.func,
  t: PropTypes.func,
};

export default withTranslation(["menu", "menu_description"])(NetworkOption);
