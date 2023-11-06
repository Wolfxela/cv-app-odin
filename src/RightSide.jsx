export default function RightSide({contactInfo,careerInfo})
{
  return(
    <div className='RightSide'>
      
        <div className="Description">
          <h1 className="Name">{contactInfo.name}</h1>
          <h2 className="JobPosition">{contactInfo.position}</h2>
          <p className="SelfDescription">{careerInfo.description}</p>
        </div>

        <div className="Experience">
          <h2 className="ExperienceTitle">Experience</h2>
        </div>

        <div className="Reference">
        <h2 className="ReferenceTitle">Reference</h2>
        <div className="pastJob">

          <h3 className="PastJobRef">
            Company Time:
            <p className="PastJobRefText">{careerInfo.jobDate}</p>
          </h3>

          <h3 className="PastJobRef">
            Company Name:
            <p className="PastJobRefText">{careerInfo.company}</p>
          </h3>

          <h3 className="PastJobRef">
            Company Title:
            <p className="PastJobRefText">{careerInfo.jobPosition}</p>
          </h3>

        </div>
        </div>

    </div>
  )
}