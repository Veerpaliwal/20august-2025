//1. import area
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../Helper/Helper';
import { Link } from 'react-router-dom';
//2. function definaction area

export default function BusinessCategory() {

    //2.1 hook variable
    const [BusinessCategory,setBusinessCategory] = useState([]);

    useEffect(() => {
        try {
            // PO.then().then().catch().finally()
            axios.get(`${BASE_URL}/api/business-categories`)
            .then(function (response) {
                // handle success
                console.log(response?.data?.data);
                setBusinessCategory(response?.data?.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
                        
          } catch (error) {
              console.log(error)
            
          }
      },[]);

    //2.2 function definaction area


    //2.3 return statement
    

    return (
        
      
    <>
            <div>BusinessCategory</div>    
            <table className="table">
                <thead>
                    <tr>
                        <th>BusinessID</th>
                        <th>BusinessName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //array.map(cv,idx,array=>{},this)
                        BusinessCategory.map((cv,idx,arr) => {
                            return (
                                <tr key={idx}>
                                    <td>{cv.id}</td>
                                    <td>
                                        <Link to={`/business_listing/${cv.documentId}`}>{cv.name}</Link>
                                        
                                    </td>
                                </tr>
                            )
                        })

                    }
                    
                </tbody>
            </table>     
    </>
    
  )
}


