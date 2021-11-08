import React from 'react';
import Results from './Resultsbox';
import ButtonsFilter  from './GroupButtons';

import { useStateWithCallbackLazy } from 'use-state-with-callback';

/*Crea arrays de lenguajes a partir de data para despues agrupar*/
function separateByLanguage(arrayOfCountries){
  if (arrayOfCountries){
    const languages = new Set();

    arrayOfCountries.map((element) => element.languages.forEach(lang => languages.add(lang.name)))

    return languages
  }
}

/*Crea arrays de continentes a partir de data para despues agrupar*/
function separateByContinents(arrayOfCountries){
  if (arrayOfCountries){
    const continents = new Set();

    arrayOfCountries.map((element) => continents.add(element.continent.name))

    return continents
  }
}


/*Componente React que se encarga de manejar búsqueda y mostrar resultados*/
function Searchbar ({data, client ,keyword, setKeyword, group, setGroup}) {

    const [filteredData, setFilteredData] = useStateWithCallbackLazy({countries:[]});
    const langArray = separateByLanguage(data.countries)
    const contArray = separateByContinents(data.countries)


    /*Filtra los paises de acuerdo al contenido de la barra de búsqueda*/
    function filterCountries (value) {

      let arrayFilteredByName = {"countries":[]}
      arrayFilteredByName.countries = data.countries.filter((country) => country.name.startsWith(value));
      setFilteredData(arrayFilteredByName)
    }


    /* Usando el largo de este array se determina si se muestra un lenguaje o no a la hora de filtrar*/
    const c1 = []
    filteredData.countries.map((country) => country.languages.map((language)=>c1.push(language.name)))


    return (
      <div>

          <div key = "SearchBar">
              <input
               className="BarStyling"
               key="random1"
               value={keyword}
               placeholder={"Search country"}
               onChange={(e) => setKeyword(e.target.value, (value) => {filterCountries(value);})}
              />
          </div>
          
          <div key = "Buttons">
            <h2>Group By:</h2>
            <ButtonsFilter group = {group} setGroup = {setGroup}></ButtonsFilter>
          </div>

          <div>

            <div className='grid'>
              {
                (group === "continent")?
                <React.Fragment> 
                    {
                      [...contArray].map((continentName) => 

                        <div key = {continentName}>

                          {(filteredData.countries.filter(country => country.continent.name === continentName).length) > 0 &&
                            <div>
                            <h2>{continentName}</h2>
                            
                            {filteredData.countries.filter(country => country.continent.name === continentName).map((countryy)=>
                              <div key = {"Countrybox: "+countryy.code} >
                                <Results countrydata = {countryy}></Results>
                              </div>               
                              )
                            }
                            </div>
                          }
                        </div>
                      )
                    }
                </React.Fragment>:
                <React.Fragment>
                    {
                      [...langArray].map((langName) => 
                        <div key = {langName}>

                          {(c1.includes(langName)) &&

                          <div>
                            <h2>{langName}</h2>

                            {filteredData.countries.map((countryy)=>
                              <div key = {"Countrybox: "+countryy.code} >
                                {countryy.languages.map((languagee)=>
                                  <div key = {"Box"+languagee+countryy.name}>
                                    {(languagee.name === langName) &&
                                      <Results countrydata = {countryy}></Results>
                                    }
                                  </div>
                                  )
                                }
                              </div>               
                              )
                            }
                          </div>
                         }
                        </div>
                      )
                    }

                </React.Fragment>
              }
            </div>
          </div>
      </div>
    );
}

export default Searchbar;