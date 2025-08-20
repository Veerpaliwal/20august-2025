import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../Helper/Helper';
import axios from 'axios';

export default function BusinessListing() {
    // hook variable
    const [businesslisting,setBusinesslisting] = useState([]);

    // Destrcution of js object
    const { b_listing_id } = useParams();

    useEffect(() => {
        try {
           // PO.then().then().catch().finally()
            axios.get(`${BASE_URL}/api/business-details?populate=*&filters[business_categories][documentId][$eq]=${b_listing_id }`)
            .then(function (response) {
                // handle success
                console.log(response?.data?.data);
                setBusinesslisting(response?.data?.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
            
        } catch (error) {
            console.log(error);
            
        }
    },[])

    return (
            <>
            <div>BusinessListing</div>
            <p>ID :{b_listing_id}</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>BusinessId</th>
                        <th>BusinessName</th>
                   </tr>                    
                </thead>
                <tbody>
                    {
                        // array.map((cv,idx,arr)=>{})
                        businesslisting.map((cv,idx,arr) => {
                            return (
                                 <tr key={idx}>
                                    <td>{cv.id}</td>
                                    <td>
                                       <a href={`/business_detail/${cv.documentId}`}>{cv.name} </a> 
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
