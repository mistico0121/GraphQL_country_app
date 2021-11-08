import React from 'react';


/* Componente de los botones que se usan para filtrar ya sea por lenguaje o continentes */
function  ButtonsFilter ({group, setGroup}){

  return (
    
    <div key="buttons">
      <div>

        {
          (group === "continent")?
          <React.Fragment> 
              <button className = 'btn btn-primary' id = "cont">Continent</button>      
          </React.Fragment>:
          <React.Fragment>
              <button className = 'btn btn-deactivated' id = "cont" onClick={(e) => setGroup("continent")}  >Continent</button>      
          </React.Fragment>
        }

        {
          (group === "language")?
          <React.Fragment> 
              <button className = 'btn btn-primary' id = "cont">Language</button>      
          </React.Fragment>:
          <React.Fragment>
              <button className = 'btn btn-deactivated' id = "cont" onClick={(e) => setGroup("language")} >Language</button>      
          </React.Fragment>
        }

      </div>
    </div>
  )
}

export default ButtonsFilter;