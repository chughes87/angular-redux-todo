import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

function Estimate({ estimate, dataCount, bedrooms }) {
    return (
        <div>
            Your estimated rental value is $
            {estimate}
            .00 based on&nbsp;
            {dataCount}
            &nbsp;datapoints
            <Chart bedrooms={bedrooms} />
        </div>
    );
}

Estimate.propTypes = {
    estimate: PropTypes.number.isRequired,
    dataCount: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
};
