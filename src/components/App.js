import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component  {
    state = { images: [] };
    

    onSearchSubmit = async (term) => {
        console.log(API_KEY);

        const response = await axios.get('https://api.unsplash.com/search/photos?page=5&per_page=30', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID RuNwRut6syrdoLMirt1OHZT3_upvFTMkYy5RyvxzAyo'
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div>
                <SearchBar userSubmit={this.onSearchSubmit}/>
                <span>Found: {this.state.images.length}</span>
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }

}

export default App;