import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';
import { apiKey } from '../api/config'

class App extends React.Component  {
    state = { images: [] };
    

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos?page=1&per_page=100', {
            params: { query: term},
            headers: {
                Authorization: `Client-ID ${apiKey}`
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="waves">
                    
                    <SearchBar userSubmit={this.onSearchSubmit}/>
                    <span></span>
                    <ImageList foundImages={this.state.images} />
                    
                </div>
            </div>
        )
    }

}

export default App;