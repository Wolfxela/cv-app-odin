import { useState } from 'react'
import './App.css'
import IdentityData from './IdentityData'
import EducationData from './EducationData'
import CareerData from './CareerData'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Restart({setContactInfo,setCareerInfo,setEducationInfo,contactInfo,educationInfo,careerInfo})
{
  setContactInfo({...contactInfo, name:'', email:'',phone:'',adress:'',position:''})
  setCareerInfo({...careerInfo, description:'', company:'',jobPosition:'',jobDate:''})
  setEducationInfo({...educationInfo,school:'', degree:'',degreeDates:'',language:''})
}
function CvForm({contactInfo,educationInfo,careerInfo,setContactInfo,setEducationInfo,setCareerInfo,setDisplay,display})
{
  return(
    <>
    <form action="" onSubmit={(e)=>{e.preventDefault()}}>
      <IdentityData contactInfo = {contactInfo} setContactInfo = {setContactInfo}/>
      <EducationData educationInfo = {educationInfo} setEducationInfo = {setEducationInfo}/>
      <CareerData careerInfo = {careerInfo} setCareerInfo = {setCareerInfo}/>
      <div className="buttons">
      <button  onClick={()=>{Restart({contactInfo,educationInfo,careerInfo,setContactInfo,setEducationInfo,setCareerInfo})}}>Restart</button>
      <button onClick={()=>{setDisplay({...display,ison:true})}}>Complete!</button>
      </div>
      
      
    </form>
    </>
  )
}
function CvOutput({contactInfo,educationInfo,careerInfo,display})
{
  const SideStyle = 
  {
    visibility: display.ison === true ?  'visible' : 'hidden'
  }
  return(
    <div style={SideStyle} className='CV'>
     <LeftSide contactInfo = {contactInfo} educationInfo = {educationInfo} careerInfo = {careerInfo}/>
     <RightSide contactInfo = {contactInfo} careerInfo = {careerInfo}/>
    </div>
  )
}

function App() {
  const [contactInfo,setContactInfo] = useState({name:'', email:'',phone:'',adress:'',position:''})
  const [educationInfo,setEducationInfo] = useState({school:'', degree:'',degreeDates:'',language:''})
  const [careerInfo,setCareerInfo] = useState({description:'', company:'',jobPosition:'',jobDate:''})
  const [display,setDisplay] = useState({ison:false})
  return(
  <>
    <CvForm contactInfo = {contactInfo} educationInfo = {educationInfo} careerInfo = {careerInfo} setContactInfo = {setContactInfo} setEducationInfo = {setEducationInfo} setCareerInfo = {setCareerInfo} setDisplay={setDisplay} display={display} />
    <CvOutput contactInfo = {contactInfo} educationInfo = {educationInfo} careerInfo = {careerInfo} display={display}/>

  </>
  )
}

export default App