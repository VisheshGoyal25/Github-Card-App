import React from 'react'
import Project from './Project.js'
function Projects({data}) {
   
    return (
        <div className="card">
            <br/>
               <h2 style={{textAlign:'center'}}>Projects</h2>
              {data.map((d)=><div className="card-body"><Project data={d}></Project> </div>)}
              <hr></hr>
       </div>
    )
}

export default Projects
