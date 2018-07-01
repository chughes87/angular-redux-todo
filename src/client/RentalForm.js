import React, { Component } from 'react';
import Estimate from './Estimate';

export default class RentalForm extends Component {
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
                    medianPrice: res.medianPrice,
                    dataCount: res.n,
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
        const { bedrooms, bathrooms, squareFoot, medianPrice, dataCount } = this.state;
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
                { medianPrice ? <Estimate medianPrice="medianPrice" dataCount="dataCount" /> : <div />}
            </div>
        );
    }
}