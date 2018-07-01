import React, { Component } from 'react';
import './app.css';
import Chart from './Chart';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { bedrooms: 1, bathrooms: 1, squareFoot: 500, estimate: 3333, n: 33 };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBedrooms = this.updateBedrooms.bind(this);
        this.updateBathrooms = this.updateBathrooms.bind(this);
        this.updateSquareFoot = this.updateSquareFoot.bind(this);

        this.handleSubmit();
    }

    handleSubmit() {
        const { bedrooms, bathrooms, squareFoot } = this.state;

        fetch(`/api/rentalEstimate?bedrooms=${bedrooms}&bathrooms=${bathrooms}&squareFoot=${squareFoot}`)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    estimate: res.medianPrice,
                    n: res.n,
                });
            });
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
        const { bedrooms, bathrooms, squareFoot, estimate, n } = this.state;
        return (
            <div>
                <input type="number" name="Bedrooms" value={bedrooms} onChange={this.updateBedrooms} />
                <input type="text" name="Bathrooms" value={bathrooms} onChange={this.updateBathrooms} />
                <input type="text" name="Square Feet" value={squareFoot} onChange={this.updateSquareFoot} />
                <button type="button" onClick={this.handleSubmit}>
                    Check
                </button>
                {estimate ? (
                    <div>
                        Your estimated rental value is $
                        {estimate}
                        .00 based on&nbsp;
                        {n}
                        &nbsp;datapoints
                        <Chart bedrooms={bedrooms} />
                    </div>
                ) : (
                    <div />
                )}
            </div>
        );
    }
}
