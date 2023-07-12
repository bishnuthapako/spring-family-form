import React, {useState} from 'react'
import "./FamilyForm.css"


function FamilyForm({addFamily}) {
    const INITIALSTATE = {
        fullname: "",
        fname: "",
        city: "",
        email: ""
    }
    const [formData, setFormData] = useState(INITIALSTATE);

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setFormData((data)=>({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e)=>{
        const {fullname, fname, city, email} = formData;
        e.preventDefault();
        addFamily({...formData})
    }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <div className="mb-2 mt-2">
                <label htmlFor='fullname'>FullName:</label>
                <input id='fullname' type="text" onChange={handleInput} name="fullname" className='form-control' value={formData.fullname} placeholder='Enter Full Name' />
            </div>
            <div className="mb-2">
                <label htmlFor='fname'>Father Name:</label>
                <input id='fname' type="text" onChange={handleInput} name="fname" className='form-control' value={formData.fname} placeholder='Enter Father Name' />
            </div>
            <div className="mb-2">
                <label htmlFor='city'>City:</label>
                <input id='city' type="text" onChange={handleInput} name="city" className='form-control' value={formData.city} placeholder='Enter Your City' />
            </div>
            <div className="mb-2">
                <label htmlFor='email'>Email:</label>
                <input id='email' type="email" onChange={handleInput} name="email" className='form-control' value={formData.email} placeholder='Enter Your Email' />
            </div>
            <button type='submit' className='btn btn-info btn-lg'>Add Info</button>
        </form>
    </div>
  )
}

export default FamilyForm