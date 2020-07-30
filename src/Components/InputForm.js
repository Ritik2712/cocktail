import React, { Component } from 'react'
import Cocktail from './Cocktails2'
import Btn from './Btn'
import TextField from '@material-ui/core/TextField';
const axios = require("axios");


export class InputForm extends Component {
    constructor() {
        super()
        this.state = {
            alcoholic: "Alcoholic",
            category: "Cocktail",
            search: "",
            isloading: false,
            images: []
        }
    }


    render() {
        const { category, alcoholic, search, isloading, images } = this.state
        let a, s, d, f, g, h
        h = []
        function api() {
            axios({
                "method": "GET",
                "url": "https://the-cocktail-db.p.rapidapi.com/filter.php",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "1a2058a4d4msh294a4f020889205p10aa5bjsn2821980a3789",
                    "useQueryString": true
                }, "params": {
                    "a": "Alcoholic",
                }
            })
                .then(response => {
                    a = response.data.drinks
                    // console.log(a)
                })
                .catch((error) => {
                    console.log(error)
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
                    "c": "Cocktail"
                }
            })
                .then(response => {
                    s = response.data.drinks
                    // console.log(s)
                })
                .catch((error) => {
                    console.log(error)
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
                    "c": "Ordinary_Drink"
                }
            })
                .then(response => {
                    d = response.data.drinks
                    // console.log(d)
                })
                .catch((error) => {
                    console.log(error)
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
                    "a": "Non_Alcoholic"
                }
            })
                .then(response => {
                    f = response.data.drinks
                    // console.log(f)
                })
                .catch((error) => {
                    console.log(error)
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
                    g = response.data.drinks
                    // console.log(g)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        api()

        const handlechange = (e) => {
            const { name, value } = e.target
            this.setState({
                [name]: value,
            })
        }
        function findCommon(ar1, ar2, ar3) {
            var z = ar1.length
            var x = ar2.length
            var c = ar3.length
            var b = 0
            var m = 0
            var n = 0
            var l = []
            while (b < z && n < x && m < c) {
                if (ar1[b] == ar2[n] && ar2[n] == ar3[m]) {
                    l = l.concat([b])
                    b += 1
                    n += 1
                    m += 1
                } else if (ar1[b] < ar2[n]) {
                    b += 1
                } else if (ar2[n] < ar3[m]) {
                    n += 1
                } else {
                    m += 1
                }
            }
            return (l)
        }
        var ids = []
        const clicked = (e) => {
            // console.log("alcohol", a, "cocktail", s, "normal", d, "non alc", f, "search", g)
            function name(arrs) {
                var arr = arrs.map(function (ar) {
                    return (ar.strDrink)
                })
                return (arr)
            }
            var an = name(a)
            var cn = name(s)
            var nn = name(d)
            var nan = name(f)
            var sn = name(g)

            if (alcoholic == "Alcoholic" && category == "Cocktail") {
                console.log("working1")
                h = findCommon(sn, an, cn)
            } else if (alcoholic == "Alcoholic" && category == "Ordinary_Drink") {
                console.log("working2")
                h = findCommon(sn, an, nn)
            } else if (alcoholic == "Non_Alcoholic" && category == "Ordinary_Drink") {
                console.log("working3")
                h = findCommon(sn, nan, nn)
            } else {
                console.log("working4")
                h = findCommon(sn, nan, cn)
            }
            var imgs = []
            for (var i = 0; i < h.length; i++) {
                ids = ids.concat([g[h[i]].idDrink])
            }
            this.setState({ images: ids })
            console.log(images)
            this.setState({ isloading: false })
        }
        const clickeds = () => {
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
                    g = response.data.drinks
                    // console.log(g)
                })
                .catch((error) => {
                    console.log(error)
                })
            setTimeout(() => {
                this.setState({ isloading: true })
                clicked()
            }, 2000);
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
                    onChange={handlechange}
                    fullWidth={true}
                />
                <div className="buttons">
                    <Btn clicked={clickeds} onchange={handlechange} state={this.state} />
                </div>
                <br />
                {isloading ? <h1>Loading....</h1> : <Cocktail state={this.state} searchre={g} />}

            </div>
        )
    }
}

export default InputForm
