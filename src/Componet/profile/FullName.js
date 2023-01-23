import React from 'react'

const FullName = () => {
  const linkedinProfile ="https://www.linkedin.com/in/frank-ogba"
  return (
    <div className='link'>
      
        <a href={linkedinProfile} alt ='/'><h1>FrankOcean</h1> <i style={{color:"blue"}} class = "bi bi-linkedin"></i></a>
      
    </div>
  )
}

export default FullName;
