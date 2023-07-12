import React from 'react'

function FamilyInfo({data}) {
  const {fullname, fname, city, email} = data;

  return (
    <>  
                <tr>
                    <td>{fullname}</td>
                    <td>{fname}</td>
                    <td>{city}</td>
                    <td>{email}</td>
                </tr>   
    </>
  )
}

export default FamilyInfo