import React, { useState } from 'react'
import './Contact.css'
function Contact() {
const[effect ,setEffect]=useState(false)
  const handelform=()=>{
    if( effect===false){
            setEffect(true)
    }
    else{
        setEffect(false)
    }
    
  }

  const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1bb67ac8-117e-4379-a07c-00615445835a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div id='Contact'>
      <div className='contactimage' onClick={()=>{handelform()}}><img src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt32prodlp/banners/thank_you_d_banners_830_1756493641603" alt="" /></div>
      <div>
        
           <form action=""onSubmit={onSubmit} className={effect ? 'formapper' : 'notapper'}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Name' required /><br />
            <label htmlFor="">Phone NO.</label>
             <input type='tel' name='phone no' placeholder='Phone No.' required/><br />
             <label htmlFor="">Quentity</label>
             <textarea name="quentity" id="" placeholder='quentity' required></textarea><br />
               <label htmlFor="">Address</label>
              <input type="text" name='address' placeholder='enter your address' required/>

              <button>Submit</button>
           </form>
           <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
