export default function CareerData({careerInfo,setCareerInfo})
{

  return(
    <>
      <fieldset>
        <legend>Career</legend>
        <label htmlFor='description'>
          <input 
          type="text"
          className='JobSelfDescription'
          id='description'
          placeholder='Self description:'
          onChange={(event) =>{setCareerInfo({...careerInfo, description: event.target.value})}}
          value={careerInfo.description}
          />
        </label>

        <label htmlFor='company'>
          <input 
          type="text"
          className='Company'
          id='company'
          placeholder='Past Company Worked At:'
          onChange={(event) =>{setCareerInfo({...careerInfo, company: event.target.value})}}
          value={careerInfo.company}
          />

        </label>

        <label htmlFor='jobPosition'>
          <input 
          type="text"
          className='PastJobPosition'
          placeholder='Past Job Position:'
          id='jobPosition'
          onChange={(event) =>{setCareerInfo({...careerInfo, jobPosition: event.target.value})}}
          value={careerInfo.jobPosition}
          />
        </label>

        <label htmlFor='jobDate'>
          <input 
          type="text"
          className='JobDate'
          id='jobDate'
          placeholder='Past Job Date:'
          onChange={(event) =>{setCareerInfo({...careerInfo, jobDate: event.target.value})}}
          value={careerInfo.jobDate}
          />
        </label>
      </fieldset>
    </>
  )
}