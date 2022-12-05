import React, { useState } from 'react';

const List = (props) => {
 

const [enteredLoad, setEnteredLoad] = useState('');

const loadChangeHandler = (event) => {
    setEnteredLoad(event.target.value);
    };

const [enteredCarton, setEnteredCarton] = useState('');

const cartonChangeHandler = (event) => {
    setEnteredCarton(event.target.value);
    };


const [enteredPhysical, setEnteredPhysical] = useState('');


const physicalChangeHandler = (event) => {
    setEnteredPhysical(event.target.value);
    };

const submitHandler = (event) => {
  event.preventDefault();

    const mylist = {
      carton : enteredCarton,
      load : enteredLoad,
      physical : enteredPhysical
    };

    props.onSave(mylist);

    setEnteredCarton('');
    setEnteredLoad('');
    setEnteredPhysical('');
    
}
   
  return (
    
      <form  onSubmit={submitHandler}>
        <div className='enteries'>
          <label>Total Load</label>
          <input type='number'  value={enteredLoad}  onChange=  {loadChangeHandler} />
        </div>
         <div>
          <label>Total Carton </label>
          <input type='number' value={enteredCarton} onChange=  {cartonChangeHandler} />
        </div>
         <div>
          <label>Physically Closing Paste </label>
          <input type='number' value={enteredPhysical} onChange=  {physicalChangeHandler} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        
     </form>
     
    
  );
}

export default List;