import React, {useState} from 'react';
import './App.css';
import FamilyForm from './FamilyForm';
import FamilyInfo from './FamilyInfo';
import { v4 as uuid } from 'uuid';

function App() {
const INITIAL_STATE = [
  {id: uuid(),
    fullname: "Bishnu Thapa",
    fname: "Ran B Thapa",
    city: "Arghakhanchi",
    email: "ran@gmail.com"
  },
  {id: uuid(),
    fullname: "Basundhara Thapa",
    fname: "Ran B Thapa",
    city: "kingston",
    email: "basundhara@gmail.com"
  }
]
const [state, setState] = useState(INITIAL_STATE);

const addFamily = (inputForm)=>{
  setState(prev=>[{id: uuid(), ...inputForm}, ...prev])
}


  return (
    <div className="container text-center mt-4">
      <div className='family'>
        <FamilyForm addFamily={addFamily} />
      </div>
        <div className="p1 bg-success w-100 mt-3 text-white fw-bold fs-2">My Family Details</div>
        <div className='family mt-3 container table-form'>
             <div>
             <div className="table table-hover">
                  <thead>
                      <tr className='bg-warning text-center'> 
                          <th>Fullname</th>
                          <th>Father Name</th>
                          <th>City</th>
                          <th>Email</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                      state.map(data=>( <FamilyInfo data={data} key={data.id} />))
                  }
                  </tbody>
        </div>
             </div>
        </div>
    </div>
  );
}

export default App;
