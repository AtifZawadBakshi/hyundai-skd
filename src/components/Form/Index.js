import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [schedule, setSchedule] = useState(new Date());
  return (
    <div className="card">
      <div className="card-header">
        <h4> Raw Meterial Kits Inward</h4>
      </div>
      <div className="card-body">
        <div id="chart-profile-visit">
          <section id="multiple-column-form">
            <div className="row match-height">
              <div className="col-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <form className="form">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="first-name-column">
                                Inward Date
                              </label>
                              <div
                                className="form-control"
                                style={{ display: "flex" }}
                              >
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
                                  selected={schedule}
                                  onChange={(date) => setSchedule(date)}
                                  dateFormat="MMMM d, yyyy"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="last-name-column">Model</label>

                              <fieldset className="form-group">
                                <select
                                  className="form-select"
                                  id="basicSelect"
                                >
                                  <option selected>Select Model</option>
                                  <option>IT</option>
                                  <option>Blade Runner</option>
                                  <option>Thor Ragnarok</option>
                                </select>
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="city-column">W/Order No.</label>
                              <input
                                type="text"
                                id="city-column"
                                className="form-control"
                                placeholder="W/Order No."
                                name="city-column"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="country-floating">Body No.</label>
                              <input
                                type="text"
                                id="country-floating"
                                className="form-control"
                                name="country-floating"
                                placeholder="Body No."
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="company-column">Variant</label>
                              <fieldset className="form-group">
                                <select
                                  className="form-select"
                                  id="basicSelect"
                                >
                                  <option selected>Select Variant</option>
                                  <option>IT</option>
                                  <option>Blade Runner</option>
                                  <option>Thor Ragnarok</option>
                                </select>
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12">
                            <div className="form-group">
                              <label htmlFor="email-id-column">Lot No.</label>
                              <input
                                type="text"
                                id="email-id-column"
                                className="form-control"
                                name="email-id-column"
                                placeholder="Lot No."
                              />
                            </div>
                          </div>

                          <div className="col-12 d-flex justify-content-end">
                            <button
                              type="submit"
                              className="btn btn-primary me-1 mb-1"
                            >
                              Add
                            </button>
                            <button
                              type="reset"
                              className="btn btn-light-secondary me-1 mb-1"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      </form>
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

export default Form;
