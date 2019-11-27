import React, { Component } from 'react'
import './App.css'
import ArtApp from './components/AnotherArtApp/RijksMuseumApi'
export default class App extends Component {
  render() {
    return (
      <div>
        <ArtApp />
      </div>
    )
  }
}
