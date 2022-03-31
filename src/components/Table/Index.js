import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Table = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className="card">
      <div className="card-header">
        <h4>Raw Material Inward Chech</h4>
      </div>
      <div className="card-body">
        <div id="chart-profile-visit">
          <section id="multiple-column-form">
            <div className="row match-height">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="form-group">
                      <label htmlFor="first-name-column">Inward Date</label>
                      <div className="form-control" style={{ display: "flex" }}>
                        <span
                          className="fa-fw select-all fas"
                          style={{
                            marginTop: "10px",
                            marginRight: "10px",
                          }}
                        >
                          
                        </span>

                        <DatePicker
                          selectsRange={true}
                          startDate={startDate}
                          endDate={endDate}
                          onChange={(update) => {
                            setDateRange(update);
                          }}
                          isClearable={true}
                          className="form-control"
                          placeholderText="MM-DD-YYYY"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="form-group">
                      <label htmlFor="last-name-column">Model</label>
                      <fieldset className="form-group">
                        <select className="form-select" id="basicSelect">
                          <option>IT</option>
                          <option>Blade Runner</option>
                          <option>Thor Ragnarok</option>
                        </select>
                      </fieldset>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="form-group">
                      <label htmlFor="city-column">Status</label>
                      <fieldset className="form-group">
                        <select className="form-select" id="basicSelect">
                          <option selected>Select Status</option>
                          <option>Processed</option>
                          <option>Storage</option>
                        </select>
                      </fieldset>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="form-group">
                      <button
                        style={{ marginTop: "20px" }}
                        type="button"
                        className="btn btn-success btn-icon icon-left"
                      >
                        Excel Download
                        <span className="badge bg-transparent">
                          <i className="fas fa-download" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div id="chart-profile-visit">
                        <div className="table-responsive">
                          <table className="table table-striped " id="table1">
                            <thead>
                              <tr>
                                <th>SN</th>
                                <th>VIN</th>
                                <th>W/Order</th>
                                <th>Lot No.</th>
                                <th>Date & Time</th>
                                <th>Model</th>
                                <th>color</th>
                                <th>Trim</th>
                                <th>color</th>
                                <th>Fuel</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>MA3ENGL1S678899</td>
                                <td>E2104B010A03A</td>
                                <td>BGH2100015</td>
                                <td>07-02-22 15:22:56</td>
                                <td>CRETA 1.6 GL</td>
                                <td>R4G</td>
                                <td>HIGH</td>
                                <td>SINGLE</td>
                                <td>GASOLINE</td>
                                <td>
                                  <span className="badge bg-success">
                                    Processed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>MA3ENGL1S678899</td>
                                <td>E2104B010A03A</td>
                                <td>BGH2100015</td>
                                <td>07-02-22 15:22:56</td>
                                <td>CRETA 1.6 GL</td>
                                <td>R4G</td>
                                <td>HIGH</td>
                                <td>SINGLE</td>
                                <td>GASOLINE</td>
                                <td>
                                  <span className="badge bg-primary">
                                    Processed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>MA3ENGL1S678899</td>
                                <td>E2104B010A03A</td>
                                <td>BGH2100015</td>
                                <td>07-02-22 15:22:56</td>
                                <td>CRETA 1.6 GL</td>
                                <td>R4G</td>
                                <td>HIGH</td>
                                <td>SINGLE</td>
                                <td>GASOLINE</td>
                                <td>
                                  <span className="badge bg-secondary">
                                    Processed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>MA3ENGL1S678899</td>
                                <td>E2104B010A03A</td>
                                <td>BGH2100015</td>
                                <td>07-02-22 15:22:56</td>
                                <td>CRETA 1.6 GL</td>
                                <td>R4G</td>
                                <td>HIGH</td>
                                <td>SINGLE</td>
                                <td>GASOLINE</td>
                                <td>
                                  <span className="badge bg-danger">
                                    Processed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>MA3ENGL1S678899</td>
                                <td>E2104B010A03A</td>
                                <td>BGH2100015</td>
                                <td>07-02-22 15:22:56</td>
                                <td>CRETA 1.6 GL</td>
                                <td>R4G</td>
                                <td>HIGH</td>
                                <td>SINGLE</td>
                                <td>GASOLINE</td>
                                <td>
                                  <span className="badge bg-warning">
                                    Processed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>MA3ENGL1S678899</td>
                                <td>E2104B010A03A</td>
                                <td>BGH2100015</td>
                                <td>07-02-22 15:22:56</td>
                                <td>CRETA 1.6 GL</td>
                                <td>R4G</td>
                                <td>HIGH</td>
                                <td>SINGLE</td>
                                <td>GASOLINE</td>
                                <td>
                                  <span className="badge bg-info">
                                    Processed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>MA3ENGL1S678899</td>
                                <td>E2104B010A03A</td>
                                <td>BGH2100015</td>
                                <td>07-02-22 15:22:56</td>
                                <td>CRETA 1.6 GL</td>
                                <td>R4G</td>
                                <td>HIGH</td>
                                <td>SINGLE</td>
                                <td>GASOLINE</td>
                                <td>
                                  <span className="badge bg-dark">
                                    Processed
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Table;
