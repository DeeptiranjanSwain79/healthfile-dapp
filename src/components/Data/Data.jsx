import React, { useContext, useEffect, useState } from "react";
import "./Data.css";
import { HealthFileContext } from "../../contexts/HealthFileContext";

const Data = () => {
  const { currentUser, getAllRecords, deleteRecord } =
    useContext(HealthFileContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const getData = getAllRecords();

    return async () => {
      const allData = await getData;
      setOrderData(allData);
    };
  }, [getAllRecords]);

  const deleteRecordhandler = async (e, id) => {
    e.preventDefault();
    await deleteRecord(id);
  };

  return (
    <>
      {currentUser ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Data and Time</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Allergies</th>
                <th>Diagnosis</th>
                <th>Treatment</th>

                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orderData &&
                orderData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.recordId}</td>
                      <td>{data.timestamp}</td>
                      <td>{data.name}</td>
                      <td>{data.ageNew} </td>
                      <td>{data.gender}</td>
                      <td>{data.bloodGroup}</td>
                      <td>{data.allergies}</td>
                      <td>{data.diagnosis}</td>
                      <td>{data.treatment}</td>

                      <td>
                        <button
                          className="delete-button"
                          onClick={(e) => deleteRecordhandler(e, data.recordId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Connect the account</h1>
      )}
    </>
  );
};

export default Data;
