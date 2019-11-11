import React, { Component } from 'react';

class RecipeSearcher extends Component {

    getRandomRecipe = () => {
        axios({
            // We can configure everything we need to know about the HTTP request in here
            method: 'GET',
            url: 'https://www.themealdb.com/api/json//v1/1/random.php'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        
    }
    render() {
        return (
            <div></div>
        );
    }
}


export default RecipeSearcher;