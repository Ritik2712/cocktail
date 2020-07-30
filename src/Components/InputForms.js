import React, { Component } from 'react'
import Cocktail from './Cocktail'
import Btn from './Btn'
import TextField from '@material-ui/core/TextField';
const axios = require("axios");

export class InputForms extends Component {
    constructor() {
        super()
        this.state = {
            category: "Cocktail",
            alcoholic: "Alcoholic",
            search: "vodka",
            images: []
        }

    }


    render() {
        const { category, alcoholic, search, images } = this.state
        const handlechange = (e) => {
            this.setState({ images: [] })
            const { name, value } = e.target
            this.setState({
                [name]: value,
            })
            axios({
                "method": "GET",
                "url": "https://the-cocktail-db.p.rapidapi.com/filter.php",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "1a2058a4d4msh294a4f020889205p10aa5bjsn2821980a3789",
                    "useQueryString": true
                }, "params": {
                    "c": category
                }
            })
                .then(response => {
                    this.setState({
                        images: response.data.drinks
                    })
                    console.log(images)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        const handlechangees = (e) => {
            this.setState({ images: [] })
            const { name, value } = e.target
            this.setState({
                [name]: value,
            })
        }
        const handlechanges = (e) => {
            this.setState({ images: [] })
            const { name, value } = e.target
            this.setState({
                [name]: value,
            })
            axios({
                "method": "GET",
                "url": "https://the-cocktail-db.p.rapidapi.com/filter.php",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "1a2058a4d4msh294a4f020889205p10aa5bjsn2821980a3789",
                    "useQueryString": true
                }, "params": {
                    "a": alcoholic
                }
            })
                .then(response => {
                    this.setState({
                        images: response.data.drinks,
                    })
                    console.log(images)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        const clicked = (e) => {
            this.setState({ images: [] })
            const { name, value } = e.target
            this.setState({
                [name]: value,
            })
            axios({
                "method": "GET",
                "url": "https://the-cocktail-db.p.rapidapi.com/filter.php",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "1a2058a4d4msh294a4f020889205p10aa5bjsn2821980a3789",
                    "useQueryString": true
                }, "params": {
                    "i": search
                }
            })
                .then(response => {
                    this.setState({
                        images: response.data.drinks
                    })
                    console.log(images)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        return (
            <div>
                <TextField
                    id="standard-password-input"
                    label="Search Image"
                    type="text"
                    autoFocus={true}
                    defaultValue={search}
                    name="search"
                    onChange={handlechangees}
                    fullWidth={true}
                />
                <div className="buttons">
                    <Btn clicked={clicked} onchange={handlechange} onchanges={handlechanges} state={this.state} />
                </div>
                <br />
                <h1>{search}</h1>
                {images.length == 0 ? <h1>Search Something</h1> : <Cocktail images={images} state={this.state} />}

            </div>
        )
    }
}

export default InputForms
