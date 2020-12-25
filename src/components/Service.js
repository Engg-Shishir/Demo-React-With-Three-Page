import React from 'react';
import Card from './Card';
import Sdata from './Sdata'

const Service = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row mt-2">
          <div className="col-10 m-auto">
            <div className="row mt-2">
              {
                Sdata.map((val,ind) => {
                  return <Card key={ind} 
                  imgsrc={val.imgsrc}
                  title={val.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
