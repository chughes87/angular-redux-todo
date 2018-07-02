import React from 'react';
import { connect } from 'react-redux';
import '../styles/app.css';
import PropTypes from 'prop-types';
import ScatterPlot from '../libs/Scatter';

const Chart = ({ data, isLoading }) => (
    <div>
        {data ? (
            <div>
                <div>
                    Rental pricing data for selected number of bedrooms
                </div>
                <ScatterPlot
                    width={400}
                    height={200}
                    marginTop={40}
                    marginLeft={50}
                    x={d => +d.squareFoot}
                    y={d => +d.price}
                    r={d => 2}
                    fill={d => '#00F' }
                    xDomain={[1, Math.max(...data.map(d => +d.squareFoot))]}
                    yDomain={[0, Math.max(...data.map(d => +d.price))]}
                    xTickArguments={[5]}
                    yTickArguments={[5]}
                    data={data}
                />
            </div>
        ) : (
            <div>
                { isLoading ? (
                    <div>
                        Loading.. please wait!
                    </div>
                ) : (
                    <div />
                )}
            </div>
        )}
    </div>
);

Chart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
};

Chart.defaultProps = { data: null };

const mapStateToProps = state => ({
    data: state.explanatoryData.data,
    isLoading: state.explanatoryData.isLoading,
});

export default connect(mapStateToProps)(Chart);
