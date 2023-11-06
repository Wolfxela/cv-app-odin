export default function EducationData({educationInfo,setEducationInfo})
{
  return(
    <>
      <fieldset>
        <legend>Education</legend>
        <label htmlFor='School'>
          <input 
          type="text"
          className='School'
          placeholder='Finished School:'
          id='school'
          onChange={(event) =>{setEducationInfo({...educationInfo,school: event.target.value})}}
          value={educationInfo.school}
        />
      </label>

      <label htmlFor='Degree'>
          <input 
          type="text"
          className='Degree'
          placeholder='Current Degree:'
          id='degree'
          onChange={(event) =>{setEducationInfo({...educationInfo,degree: event.target.value})}}
          value={educationInfo.degree}
        />

      </label>

      <label htmlFor='degreeDate'>
          <input 
          type="text"
          placeholder='Graduation Date:'
          className='DegreeDate'
          id='degreeDate'
          onChange={(event) =>{setEducationInfo({...educationInfo,degreeDates: event.target.value})}}
          value={educationInfo.degreeDates}
        />
      </label>

      <label htmlFor='language'>
        <input 
        placeholder='Main Language'
        type="text"
        className='Language'
        id='language'
        onChange={(event) =>{setEducationInfo({...educationInfo,language: event.target.value})}}
        value={educationInfo.language}
        />
      </label>

      </fieldset>
    </>
  )
}