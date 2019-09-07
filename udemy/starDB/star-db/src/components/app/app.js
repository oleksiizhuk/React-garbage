import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from "../error-button";

import './app.css'

export default class app extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
            selectedPerson: 5,
            hasError: false
        };
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch");
        this.setState({hasError: true})
    }

    toggleRandomPlanet = () => {

    }

    render() {
        const {selectedPerson} = this.state;
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails
                            personId={selectedPerson}/>
                        <ErrorButton/>
                    </div>
                </div>
            </div>
        )
    }
}