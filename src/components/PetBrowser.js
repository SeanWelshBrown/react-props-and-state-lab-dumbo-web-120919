import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {

    // let petCards = this.props.petData.map( pet => 
    //   <Pet 
    //     key={pet.id}
    //     petID={pet.id}
    //     type={pet.type}
    //     gender={pet.gender}
    //     age={pet.age}
    //     weight={pet.weight}
    //     name={pet.name}
    //     adoptedStatus={pet.isAdopted}
    //     onAdoptPet={this.props.onAdoptPet}
    //   />
    // )

    let petCards = this.props.pets.map( pet => 
      <Pet 
        key={pet.id}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
      />
    )

    return (
      <div className="ui cards">
        {petCards}
      </div>
    )
  }
}

export default PetBrowser
