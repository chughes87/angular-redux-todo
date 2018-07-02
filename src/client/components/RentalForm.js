import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Estimate from './Estimate/Estimate';
import Chart from './Chart';
import rentalDataUtils from '../rentalDataUtils';
import actions from '../actions';

class RentalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBedrooms = this.updateBedrooms.bind(this);
        this.updateBathrooms = this.updateBathrooms.bind(this);
        this.updateSquareFoot = this.updateSquareFoot.bind(this);
    }

    handleSubmit() {
        const { bedrooms, bathrooms, squareFoot } = this.state;
        const { errorTriggered, estimateUpdated, estimateUpdating, explanatoryDataUpdated, explanatoryDataUpdating } = this.props;

        estimateUpdating();
        // TODO: throw 400 error on backend for catch
        rentalDataUtils.getEstimate(bedrooms, bathrooms, squareFoot)
            .then(estimateUpdated)
            .catch(() => errorTriggered('Sorry, we do not have enough data for that kind of property to give you an estimate.'));

        explanatoryDataUpdating();
        rentalDataUtils.getExplanatoryData(bedrooms)
            .then(explanatoryDataUpdated);
    }

    updateBedrooms(event) {
        this.setState({ bedrooms: +event.target.value });
    }

    updateBathrooms(event) {
        this.setState({ bathrooms: +event.target.value });
    }

    updateSquareFoot(event) {
        this.setState({ squareFoot: +event.target.value });
    }

    render() {
        const { bedrooms, bathrooms, squareFoot, errorMsg } = this.state;

        return (
            <div>
                <div className="form-horizontal">
                    <div className="control-group">
                        <label className="control-label" htmlFor="bedrooms">
                            Bedrooms:&nbsp;
                        </label>
                        <div className="controls">
                            <input id="bedrooms" type="number" name="Bedrooms" value={bedrooms} onChange={this.updateBedrooms} />
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="bathrooms">
                            Bathrooms:&nbsp;
                        </label>
                        <div className="controls">
                            <input id="bathrooms" type="number" name="Bathrooms" value={bathrooms} onChange={this.updateBathrooms} />
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="square-feet">
                            Square Feet:&nbsp;
                        </label>
                        <div className="controls">
                            <input id="square-feet" type="number" name="Square Feet" value={squareFoot} onChange={this.updateSquareFoot} />
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <button type="button" className="btn" onClick={this.handleSubmit}>
                                Check
                            </button>
                        </div>
                    </div>
                </div>
                { !errorMsg ? (
                    <div>
                        <Estimate />
                        <Chart />
                    </div>
                ) : (
                    <span className="error-message">
                        {errorMsg}
                    </span>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({ errorMsg: state.errorMessage });

const mapDispatchToProps = dispatch => ({
    errorTriggered: errorMessage => dispatch(actions.errorTriggered(errorMessage)),
    estimateUpdating: () => dispatch(actions.estimateUpdating()),
    estimateUpdated: estimate => dispatch(actions.estimateUpdated(estimate)),
    explanatoryDataUpdating: () => dispatch(actions.explanatoryDataUpdating()),
    explanatoryDataUpdated: explanatoryData => dispatch(actions.explanatoryDataUpdated(explanatoryData)),
});

RentalForm.propTypes = {
    errorTriggered: PropTypes.func.isRequired,
    estimateUpdated: PropTypes.func.isRequired,
    estimateUpdating: PropTypes.func.isRequired,
    explanatoryDataUpdated: PropTypes.func.isRequired,
    explanatoryDataUpdating: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RentalForm);
