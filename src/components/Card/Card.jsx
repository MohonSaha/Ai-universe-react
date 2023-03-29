import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';
import './Cart.css'

const Card = () => {

  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
      const data = await res.json()
      setData(data.data.tools)
    }
    loadData()
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  }


  return (

    <>
      <div className='my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-12 px-8'>

        {
          data.slice(0, showAll ? 12 : 6).map(singleData => {
            return <SingleData
              key={singleData.id}
              singleData={singleData}></SingleData>
          })
        }
      </div>

      {/* <p style={{display: 'inline-block'}} className="btn-showAll" onClick={handleShowAll}>
        <Button>See More</Button>
      </p> */}

      {
        !showAll && <span className="btn-showAll" onClick={handleShowAll}>
        <Button>See More</Button>
        </span>
      }

      </>
      );
};

      export default Card;