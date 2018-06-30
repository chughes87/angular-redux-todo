import React, { Component } from 'react';
import './app.css';
import Chart from './Chart';

export default class App extends Component {
    render() {
        const charts = [];
            for (let i = 0; i < 5; i++) {
                // for (let j = 0; j < 5; j++) {
                    charts.push((<Chart bedrooms={i}/>));
                // }
            }
        return (
            <div>
                {charts}
            </div>
        );
    }
}
