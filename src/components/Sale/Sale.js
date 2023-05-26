import React, { useState } from "react";
import axios from 'axios'
import { useEffect} from "react";
import "./Sale.scss";

function Sale() {
  const [number, setNumber] = useState("one");
  const [currentPage, setCurrentPage] = useState(1);
// No of Records to be displayed on each page   
  const [recordsPerPage] = useState(3);
  const [Data,setData] = useState([]);
  const config = {
    headers:{
      'Access-Control-Allow-Origin': '*',
    }
  };
  const fetchExcuse = () => {
         axios.get(`http://localhost:5000/properties/sale`,config).then(
        (res) => {
            console.log(res)
            setData(res.data);
        }
        )
        .catch(err => {
            console.log(err);
        // some error handling
      });;
    };
    useEffect(()=>{
        fetchExcuse();
    },[])
    var length = Data.length / 3;
    console.log(length);
  return (
    <div className="sale">
      <div className="container">
        <div className="top">
          <span>Properties</span>
          <h3>For Sale</h3>
          <p>Check out latest properties for sale.</p>
        </div>
          <div className="sale-row">
            {Data.map(object => 
              <div className="sale-box">
              <div className="img">
                <a>
                  <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2015/07/property-10-exterior-488x326.jpg" />
                </a>
                <div className="overlay"></div>
                <button>View Proprties</button>
              </div>
              <div className="title">
                <h2>{object.name}</h2>
                <p>
                  {object.description}
                </p>
                <ul>
                  <li>
                    <span>Bedrooms</span>
                    <div><i className="fas fa-th-large"></i><span>{object.rooms}</span></div>
                  </li>
                  <li>
                    <span>Bathrooms</span>
                    <div><i className="fas fa-shower"></i><span>{object.baths}</span></div>
                  </li>
                  <li>
                    <span>Area</span>
                    <div>
                      <i className="fas fa-vector-square"></i
                      ><span>{object.size}<span>M <sup>2</sup></span></span>
                    </div>
                  </li>
                </ul>
                <div className="price">
                  For Sale<span> {object.price}</span>
                </div>
              </div>
            </div>
            )}
          </div>
        
      </div>
    </div>
  );
}

export default Sale;
