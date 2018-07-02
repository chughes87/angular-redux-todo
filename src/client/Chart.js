import React, { Component } from 'react';
import './app.css';
import PropTypes from 'prop-types';
import ScatterPlot from './Scatter';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                'black',
                'blue',
                'red',
                'purple',
            ]
        };
    }

    render() {
        const { colors } = this.state;
        const { data } = this.props;
        return (
            <div>
                {data ? (
                    <ScatterPlot
                        width={600}
                        height={300}
                        marginTop={40}
                        marginLeft={50}
                        x={d => +d.squareFoot}
                        y={d => +d.price}
                        r={d => 2}
                        fill={d => colors[d.bathrooms]}
                        xDomain={[1, Math.max(...data.map(d => +d.squareFoot))]}
                        yDomain={[0, Math.max(...data.map(d => +d.price))]}
                        xTickArguments={[5]}
                        yTickArguments={[5]}
                        data={data}
                    />
                ) : (
                    <div>Loading.. please wait!</div>
                )}
            </div>
        );
    }
}


Chart.propTypes = {
    data: PropTypes.array.isRequired,
};
