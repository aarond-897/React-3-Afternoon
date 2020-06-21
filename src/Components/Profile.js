import React from 'react';

const Profile =(props)=>{
  return (
    <div className="profile">
      <h1 className='count'>{props.count}/25</h1>
      <div className='profile-data'>
      <h3 className="name">{props.data.name.first} {props.data.name.last}</h3>
      <h3><span className='profile-category'>From:</span> {props.data.city},{props.data.country}</h3>
      <h3> <span className='profile-category'>Job Title:</span> {props.data.city},{props.data.country}</h3>
      <h3> <span className='profile-category'>Title:</span> {props.data.title}</h3>
      <h3> <span className='profile-category'>Employer:</span> {props.data.employer}</h3>
      <br />
      <h3> <span className='profile-category'>Favorite Movies:</span></h3>
      <ol className="movie-list">
        <li>1. {props.data.favoriteMovies[0]}</li>
        <li>2. {props.data.favoriteMovies[1]}</li>
        <li>3. {props.data.favoriteMovies[2]}</li>
      </ol>
      </div>
    </div>
  )
}

export default Profile;