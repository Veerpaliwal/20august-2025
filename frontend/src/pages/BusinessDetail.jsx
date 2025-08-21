import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../Helper/Helper';
import axios from 'axios';

export default function BusinessDetail() {
  const [businessdetail, setBusinessDetail] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
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
     <ul className="list-inline d-flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <li
          key={star}
          className="list-inline-item"
          style={{ cursor: "pointer", fontSize: "30px" }}
          onClick={() => setRating(star)}             // click se rating set
          onMouseEnter={() => setHover(star)}         // hover se highlight
          onMouseLeave={() => setHover(0)}            // hover hatane par reset
        >
          <i
            className={
              (hover || rating) >= star
                ? "fas fa-star text-warning"   // filled star (yellow)
                : "far fa-star text-warning"   // blank star
            }
          ></i>
        </li>
      ))}
    </ul>

    <p>Selected Rating: {rating}</p>


    </>
    
  )
}
