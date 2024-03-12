import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "", zipcode: "" },
    phone: "",
    website: "",
    company: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://jsonplaceholder.typicode.com/users', inputData)
      .then(() => {
        alert("Data Added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-center align-items-center w-200 vh-200 my-3">
          <div className="w-50 p-5 border bg-light">
            <form className="form-group" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">NAME:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">USERNAME:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, username: e.target.value })
                  }
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">EMAIL:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, email: e.target.value })
                  }
                ></input>
              </div>
              <br></br>
              <br></br>

              <div>
                <div>
                  <p>ADDRESS</p>
                  <label htmlFor="name">STREET:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: {
                          ...inputData.address,
                          street: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">SUITE:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: {
                          ...inputData.address,
                          suite: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">CITY:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: { ...inputData.address, city: e.target.value },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">ZIPCODE:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        address: {
                          ...inputData.address,
                          zipcode: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>

              <div>
                <label htmlFor="name">PHONE:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">WEBSITE:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                ></input>
              </div>
              <br></br>
              <br></br>

              <div>
                <div>
                  <p>COMPANY DETAILS</p>
                  <label htmlFor="name">COMPANY NAME:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        company: { ...inputData.company, name: e.target.value },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">ROLE:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        company: {
                          ...inputData.company,
                          catchPhrase: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
                <br></br>

                <div>
                  <label htmlFor="name">DETAILS:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        company: { ...inputData.company, bs: e.target.value },
                      })
                    }
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
