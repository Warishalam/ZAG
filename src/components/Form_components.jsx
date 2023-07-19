import React from 'react'
import styles from "../components/Components.module.css"
import { useState } from 'react';
const Form_components = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [jsonFile, setJsonFile] = useState(null);
    const [formError, setFormError] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();

        if (fullName.trim() === '' || email.trim() === '' || !jsonFile) {
          setFormError(true);
        } else {

          setFormSubmitted(true);
          setFormError(false);
        }
    }
  return (
    <div id={styles.formInput}>
       <form action="" onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-12'>
             <label htmlFor="" style={{textAlign:"left"}}>Full Name</label>
              <input type="text" placeholder='Full Name' className='form-control' required 
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>
        </div>
        <div className='row'>
           <div className='col-12'>
              <label htmlFor="email" style={{textAlign:"left"}}>Email</label>
              <input type="text" id="email" placeholder='Email' className='form-control' required 
                 onChange={(event) => setEmail(event.target.value)}
              />
           </div>
        </div>
        <div className='row'>
           <div className='col-12'>
                <label htmlFor="">Upload JSON File</label>
                <input type="file" className='form-control' required
                     onChange={(event) => setJsonFile(event.target.files[0])}
                />
           </div>
        </div>
        <div className='row'>
           <div className='col-12' style={{marginTop:"30px"}}>
           <button type="button" class="btn btn-primary" style={{width:"100%",borderRadius:"30px"}}>SUBMIT</button>
           </div>
        </div>
        {formError && (
          <div className={styles.error}>Please fill all the fields and upload a file.</div>
        )}
        {formSubmitted && (
          <div className={styles.success}>Form submitted successfully!</div>
        )}
        </form>
    </div>
  )
}

export default Form_components