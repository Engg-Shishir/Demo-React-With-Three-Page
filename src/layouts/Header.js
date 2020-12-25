import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <section id="header" className="d-flex align-items-center justify-content-center ">
      <div className="container nav_bg ">
        <div className="row">
            {/*############# col-md-6 Start ##############*/}
            <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column  justify-content-center align-items-center">
              <h1>{props.name} <strong className="brand-name">Shishir Bhuiyan</strong></h1>
              <h2 className="my-3"> We are the team of best website </h2>
              <div className="mt-3">
                <Link to={props.visit} className="btn get-started">{props.btnname}</Link>
              </div>
            </div>{/*########### col-md-6 End ##########*/}

            <div className=" col-md-6  order-1 order-lg-2 header-img">
              <img src={props.imgsrc} alt="Headerimg" className="img-fluid animated" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
