import React from 'react';
import PhotoImg from "../../Asset/passport.jpg"

const ProfilePhoto = () => {
  return (

    <div className='foto'>
      <img  className="rounded" style={{width: "25rem"}} src={PhotoImg} alt="foto"/>
    </div>
    
  );
}

export default ProfilePhoto
