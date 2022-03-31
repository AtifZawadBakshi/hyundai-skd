import React from "react";
import Form from "../Form/Index";
import Table from "../Table/Index";
const Dashboard = () => {
  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3" />
        </a>
      </header>
      <div className="page-heading">
        <h3>FTL Hyundai SKD </h3>
      </div>
      <div className="page-content">
        <section className="row">
          <div className="col-12 ">
            <div className="row">
              <div className="col-12">
                <Form />
                <Table />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
