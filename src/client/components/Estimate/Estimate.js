import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Estimate({ medianPrice, dataCount }) {
    return (
        <div>
            { medianPrice ? (
                <div>
                    Your estimated monthly rental value is $
                    {medianPrice}
                    .00 based on&nbsp;
                    {dataCount}
                    &nbsp;data points
                </div>
            ) : (
                <div />
            )}
        </div>
    );
}

Estimate.propTypes = {
    medianPrice: PropTypes.number,
    dataCount: PropTypes.number,
};

Estimate.defaultProps = {
    medianPrice: null,
    dataCount: null,
};

const mapStateToProps = state => ({
    medianPrice: state.estimate.medianPrice,
    dataCount: state.estimate.dataCount,
});

export default connect(mapStateToProps)(Estimate);
