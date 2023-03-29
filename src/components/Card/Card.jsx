import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {

  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/ai/tools')
    // .then(res => res.json())
    // .then(data => console.log(data))



    // Load data through asnc await: 
    const loadData = async () => {
      const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
      const data = await res.json();
      // console.log(data.data.tools);
      setData(data.data.tools)
    }


    loadData()
  }, []);


  return (
    <div className='my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-12 px-8'>

      {
        data.slice(0, showAll? 12 : 6).map(singleData => {
          return <SingleData 
          key = {singleData.id}
          singleData={singleData}></SingleData>
        })
      }



    </div>
  );
};

export default Card;