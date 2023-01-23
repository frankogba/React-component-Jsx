import React from 'react';
import FullName from "./Componet/profile/FullName";
import Address from "./Componet/profile/Address";
import ProfilePhoto from "./Componet/profile/ProfilePhoto";
import  Carousel1 from '../src/Componet/profile/slideShow';

import './App.css';



function App() {
  return (
    <div className='container'>

      <ProfilePhoto />
      <FullName />
      <Address />
       <Carousel1 /> 
       {/* <Carousel2 />  */}

      <h1>Image uploading ...</h1>
      
    </div>
  );
}

export default App;
