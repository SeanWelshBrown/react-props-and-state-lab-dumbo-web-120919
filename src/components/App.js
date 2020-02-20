import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilters = (event) => {
    this.setState({
      ...this.state,
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPets = () => {
    console.log(this.state.filters)
    switch(this.state.filters.type) {
      case 'all':
        fetch('/api/pets')
        .then( r => r.json() )
        .then( all => this.setState({pets: all}))
        break;
      case 'cat':
        fetch('/api/pets?type=cat')
        .then( r => r.json() )
        .then( cats => this.setState({pets: cats}))
        break;
        case 'dog':
          fetch('/api/pets?type=dog')
          .then( r => r.json() )
          .then( cats => this.setState({pets: cats}))
          break;
        case 'micropig':
          fetch('/api/pets?type=micropig')
          .then( r => r.json() )
          .then( micropigs => this.setState({pets: micropigs}))
          break;
        default:
          return "this is a default, silly";
    }
  }

  adoptPet = (petID) => {
    let petIndex = this.state.pets.findIndex( index => index.id === petID)
    let newPets = this.state.pets.slice()
    newPets[petIndex].isAdopted = true
    this.setState({pets: newPets}, () => console.log(this.state.pets))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.changeFilters}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
