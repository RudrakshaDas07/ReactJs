import "./App.css";
import { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);

  let getvalue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };

    if (formData.index === "") {
      let checkFilteruser = userData.filter(
        (v) => v.uemail === formData.uemail || v.uphone === formData.uphone
      );

      if (checkFilteruser.length >= 1) {
        alert("Email or Phone already exists...");
        return;
      }

      setUserData([...userData, currentUserFormdata]);
    } else {
      let editIndex = formData.index;

      let checkFilteruser = userData.filter(
        (v, i) =>
          (v.uemail === formData.uemail || v.uphone === formData.uphone) &&
          i !== parseInt(editIndex)
      );

      if (checkFilteruser.length >= 1) {
        alert("Email or Phone already exists...");
        return;
      }

      let updatedUserData = [...userData];
      updatedUserData[editIndex] = currentUserFormdata;
      setUserData(updatedUserData);
    }

    setFormData({
      uname: "",
      uemail: "",
      uphone: "",
      umessage: "",
      index: "",
    });
  };

  let deleteRow = (indexNumber) => {
    let filteredData = userData.filter((_, i) => i !== indexNumber);
    setUserData(filteredData);
  };

  let editRow = (indexNumber) => {
    let editData = { ...userData[indexNumber], index: indexNumber };
    setFormData(editData);
  };

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="pb-3">
                <label className="form-label" htmlFor="uname">
                  Name
                </label>
                <input
                  type="text"
                  name="uname"
                  id="uname"
                  onChange={getvalue}
                  value={formData.uname}
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label className="form-label" htmlFor="uemail">
                  Email
                </label>
                <input
                  type="email"
                  name="uemail"
                  id="uemail"
                  onChange={getvalue}
                  value={formData.uemail}
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label className="form-label" htmlFor="uphone">
                  Phone
                </label>
                <input
                  type="text"
                  name="uphone"
                  id="uphone"
                  onChange={getvalue}
                  value={formData.uphone}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="umessage" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="umessage"
                  id="umessage"
                  onChange={getvalue}
                  value={formData.umessage}
                  rows="3"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {formData.index !== "" ? "Update" : "Save"}
              </button>
            </form>
          </Col>

          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((userobj, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{userobj.uname}</td>
                      <td>{userobj.uemail}</td>
                      <td>{userobj.uphone}</td>
                      <td>{userobj.umessage}</td>
                      <td>
                        <button
                          onClick={() => deleteRow(index)}
                          className="btn btn-danger btn-sm me-2">
                          Delete
                        </button>
                        <button
                          onClick={() => editRow(index)}
                          className="btn btn-warning btn-sm">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
