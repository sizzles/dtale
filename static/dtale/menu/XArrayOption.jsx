import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

import { openChart } from "../../actions/charts";
import { MenuItem } from "./MenuItem";

function renderDimensionSelection(dimensionSelection, t) {
  if (_.size(dimensionSelection)) {
    return _.join(
      _.map(dimensionSelection, (val, prop) => `${val} (${prop})`),
      ", "
    );
  }
  return t("menu:ALL DATA");
}

class ReactXArrayOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t, xarray, xarrayDim } = this.props;
    const openXArrayPopup = type => this.props.openChart(_.assignIn({ type }, this.props));
    if (xarray) {
      return (
        <MenuItem description={`${t("menu_description:xarray_dim_des")} ${renderDimensionSelection(xarrayDim, t)}`}>
          <span className="toggler-action">
            <button className="btn btn-plain" onClick={() => openXArrayPopup("xarray-dimensions")}>
              <i className="ico-key" />
              <span className="font-weight-bold">{t("menu:XArray Dimensions")}</span>
            </button>
          </span>
        </MenuItem>
      );
    }
    return (
      <MenuItem description={t("menu_description:xarray_conversion")}>
        <span className="toggler-action">
          <button className="btn btn-plain" onClick={() => openXArrayPopup("xarray-indexes")}>
            <i className="ico-tune" />
            <span className="font-weight-bold">{t("menu:Convert To XArray")}</span>
          </button>
        </span>
      </MenuItem>
    );
  }
}
ReactXArrayOption.displayName = "ReactXArrayOption";
ReactXArrayOption.propTypes = {
  columns: PropTypes.array, // eslint-disable-line react/no-unused-prop-types
  xarray: PropTypes.bool,
  xarrayDim: PropTypes.object,
  openChart: PropTypes.func,
  t: PropTypes.func,
};

const TranslatedReactXArrayOption = withTranslation(["menu", "menu_description"])(ReactXArrayOption);
const ReduxXArrayOption = connect(
  state => _.pick(state, ["xarray", "xarrayDim"]),
  dispatch => ({ openChart: chartProps => dispatch(openChart(chartProps)) })
)(TranslatedReactXArrayOption);

export { ReduxXArrayOption as XArrayOption, TranslatedReactXArrayOption as ReactXArrayOption };
