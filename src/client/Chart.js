import React, { Component } from 'react';
import './app.css';
import PropTypes from 'prop-types';
import ScatterPlot from './Scatter';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            colors: [
                'black',
                'blue',
                'red',
                'purple',
            ]
        };
    }

    componentDidMount() {
        const { bedrooms } = this.props;
        fetch(`/api/rentalData?bedrooms=${bedrooms}`)
            .then(res => res.json())
            .then(data => this.setState({ data }));
    }

    render() {
        const { colors, data } = this.state;
        const { bedrooms } = this.props;
        return (
            <div>
                <div>
                    {bedrooms}
                </div>
                {data ? (
                    <ScatterPlot
                        width={600}
                        height={300}
                        marginTop={40}
                        marginLeft={50}
                        x={d => +d['square-foot']}
                        y={d => +d.price}
                        r={d => 2}
                        fill={d => colors[d.bathrooms]}
                        xDomain={[1, Math.max(...data.map(d => +d['square-foot']))]}
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
    bedrooms: PropTypes.number.isRequired
};
