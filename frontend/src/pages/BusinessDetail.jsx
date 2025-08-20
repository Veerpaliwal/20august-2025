import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../Helper/Helper';
import axios from 'axios';

export default function BusinessDetail() {
  const [businessdetail,setBusinessDetail] = useState();
  const { b_detail_id } = useParams();
  // call the api after page reload
  useEffect(() => {
            try {
              axios.get(`${BASE_URL}/api/business-details?populate=*&filters[documentId][$eq]=${b_detail_id}`)
          .then(function (response) {
            // handle success
            console.log(response?.data?.data);
            setBusinessDetail(response?.data?.data);
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
  },[])
  return (
    <>
      <div>BusinessDetail</div>
      <p>{b_detail_id}</p>
      {
        // (businessDetail !== undefined)&&  ? <h1>   </h1>
        (BusinessDetail !== undefined) &&
        <h1>WELCOME TO BUSINESSDETAIL PAGE</h1>
      }
      <h1>review</h1>
            
      <ul class="list-inline">
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
        <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
      </ul>

    </>
    
  )
}
