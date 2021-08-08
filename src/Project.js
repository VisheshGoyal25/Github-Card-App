import React from 'react'

function Project({data}) {
    return (
        <div style={{color:"DarkGreen"}}>
            <hr/>
          Project Name: {data.name}<br/>Language used: {data.language}<br/>
          <a href={data.html_url} target="_blank.">Link of Repository</a>
          
          
        </div>
    )
}

export default Project
