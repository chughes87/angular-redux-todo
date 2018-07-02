import React from 'react';
import PropTypes from 'prop-types';

function Estimate({ medianPrice, dataCount }) {
    return (
        <div>
            Your estimated rental value is $
            {medianPrice}
            .00 based on&nbsp;
            {dataCount}
            &nbsp;datapoints
        </div>
    );
}

Estimate.propTypes = {
    medianPrice: PropTypes.number.isRequired,
    dataCount: PropTypes.number.isRequired,
};

export default Estimate;
