import React from 'react'

function Profile({data}) {
    return (
        <div className="card " >
  <img src={data.dp} className="card-img-top" alt="..."></img>
  <div className="card-body">
      <p className="card-text" style={{textAlign:'center'}}>{data.name}</p>
   <pre><button type='button' className="btn" >Followers: {data.followers}  </button>   <button type='button' className="btn"  >Following: {data.following}  </button></pre>
  </div>
</div>
    )
}

export default Profile
