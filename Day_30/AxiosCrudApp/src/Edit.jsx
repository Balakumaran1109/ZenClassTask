import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://65f1213ada8c6584131cea32.mockapi.io/users/" + id)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        err;
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("https://65f1213ada8c6584131cea32.mockapi.io/users/" + id, data)
      .then(() => {
        alert("Data Updated Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-center align-items-center w-200 vh-200 my-3">
          <div className="w-50 p-5 border bg-light">
            <form className="form-group" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">ID:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  disabled
                  value={data.id}
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">NAME:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">USERNAME:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
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
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
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
                    value={data?.address?.street}
                    onChange={(e) =>
                      setData({
                        ...data,
                        address: { ...data.address, street: e.target.value },
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
                    value={data?.address?.suite}
                    onChange={(e) =>
                      setData({
                        ...data,
                        address: { ...data.address, suite: e.target.value },
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
                    value={data?.address?.city}
                    onChange={(e) =>
                      setData({
                        ...data,
                        address: { ...data.address, city: e.target.value },
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
                    value={data?.address?.zipcode}
                    onChange={(e) =>
                      setData({
                        ...data,
                        address: { ...data.address, zipcode: e.target.value },
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
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                ></input>
              </div>
              <br></br>

              <div>
                <label htmlFor="name">WEBSITE:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  value={data.website}
                  onChange={(e) =>
                    setData({ ...data, website: e.target.value })
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
                    value={data?.company?.name}
                    onChange={(e) =>
                      setData({
                        ...data,
                        company: { ...data.company, name: e.target.value },
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
                    value={data?.company?.catchPhrase}
                    onChange={(e) =>
                      setData({
                        ...data,
                        company: {
                          ...data.company,
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
                    value={data?.company?.bs}
                    onChange={(e) =>
                      setData({
                        ...data,
                        company: { ...data.company, bs: e.target.value },
                      })
                    }
                  ></input>
                </div>
              </div>
              <br></br>
              <br></br>
              <button className="btn btn-success" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
