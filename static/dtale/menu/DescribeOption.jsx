import PropTypes from "prop-types";
import React from "react";

import { MenuItem } from "./MenuItem";
import { withTranslation } from "react-i18next";

class DescribeOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MenuItem description={this.props.t("menu_description:describe")}>
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={this.props.open}>
            <i className="ico-view-column" />
            <span className="font-weight-bold">{this.props.t("menu:Describe")}</span>
          </button>
        </span>
      </MenuItem>
    );
  }
}
DescribeOption.displayName = "DescribeOption";
DescribeOption.propTypes = {
  open: PropTypes.func,
  t: PropTypes.func,
};

export default withTranslation(["menu", "menu_description"])(DescribeOption);
