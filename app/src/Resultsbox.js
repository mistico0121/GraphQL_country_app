import React from 'react';


/* Componente se encarga de mostrar los datos de un país */
class Results extends React.Component{

    render(){
        return (

            <div key={this.props.countrydata.code} className = "countrybox">
                <h3>
                    <span> {this.props.countrydata.emoji} </span> {this.props.countrydata.name}
                </h3>

                <h4>Continent: {this.props.countrydata.continent.name} </h4>
                <h4>Languages:</h4>
                {
                    this.props.countrydata.languages.map((language)=>
                      <h5 key={this.props.countrydata.code + " " + language.name}> {language.name} </h5>         
                    )
                }

            </div>
                        
        )
    }
}

export default Results;