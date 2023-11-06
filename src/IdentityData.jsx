export default function IdentityData({contactInfo,setContactInfo})
{
  return(
    <>
      <fieldset>
        <legend>Profile</legend>
        <label htmlFor='name'>
          <input 
          type="text"
          className='Name'
          placeholder='Full Name:'
          id='name'
          onChange={(event) =>{setContactInfo({...contactInfo,name: event.target.value})}}
          value={contactInfo.name}
        />
      </label>

      <label htmlFor='email'>
          <input 
          type="text"
          className='Email'
          placeholder='Email:'
          id='email'
          onChange={(event) =>{setContactInfo({...contactInfo,email: event.target.value})}}
          value={contactInfo.email}
        />

      </label>

      <label htmlFor='phone'>
          <input 
          type="text"
          placeholder='Phone Number:'
          className='Phone'
          id='phone'
          onChange={(event) =>{setContactInfo({...contactInfo,phone: event.target.value})}}
          value={contactInfo.phone}
        />
      </label>

      <label htmlFor='adress'>
        <input
        placeholder='Adress:' 
        type="text"
        className='Adress'
        id='adress'
        onChange={(event) =>{setContactInfo({...contactInfo,adress: event.target.value})}}
        value={contactInfo.adress}
        />
      </label>

      <label htmlFor='position'>
        <input 
        placeholder='Current Job Position:'
        type="text"
        className='Position'
        id='position'
        onChange={(event) =>{setContactInfo({...contactInfo,position: event.target.value})}}
        value={contactInfo.position}
        />
      </label>
      </fieldset>
      

    </>
  )
}