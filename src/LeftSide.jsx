import foxImage from './assets/Vulpes_vulpes_ssp_fulvus.jpg'
export default function LeftSide({contactInfo,educationInfo})
{
  return(

  <div className='LeftSide'>

    <div className="Profile">
      <img src={foxImage} alt="" className="profileImg" />
    </div>

    <div className="Contact">
      <h2>Contact</h2>
      <h3 className="Phone">
        Phone:
        <p>{contactInfo.phone}</p>
      </h3>
      <h3 className="Email">
        Email:
        <p>{contactInfo.email}</p>
      </h3>
      <h3 className="Adress">
        Adress:
        <p>{contactInfo.adress}</p>
      </h3>
    </div >

    <div className="Education">
      <h2>Education</h2>
      <h3 className="DegreeTime">
        Time:
        <p>{educationInfo.degreeDates}</p>
      </h3>
      <h3 className="School">
        School:
        <p>{educationInfo.school}</p>
      </h3>
      <h3 className="Degree">
        Degree:
        <p>{educationInfo.degree}</p>
      </h3>
    </div>

    <div className="MainLanguage">
      <h2 className='languageTitle'>Languages</h2>
      <h3>
        {educationInfo.language}
      </h3>
    </div>
  </div>)
}