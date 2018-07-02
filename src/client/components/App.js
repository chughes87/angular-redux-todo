import React, { Component } from 'react';
import '../styles/app.css';
import RentalForm from './RentalForm';

export default class App extends Component {
    
    render() {
        return (
            <div className="app-container">
                <RentalForm />
            </div>
        );
    }
}
