import React, { useState, useEffect } from 'react';
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useActions as useLoginActions } from '../../login/hooks';
import { useActions } from '../hooks';


const AdminReviewCustomerContainer = (props) => {
  const [reviews, setReviews] = useState([]);
  const {getAllCustomers, deleteUser} = useActions();
  
  const history = useHistory();
    const { continueUserSession } = useLoginActions();
    useEffect(() => {
      if(localStorage.getItem('usersData')) {
          continueUserSession(JSON.parse(localStorage.getItem('usersData')));
      }
      getAllCustomers().then(response => {
        if(response.status === 0){
          alert(response.message)
        }
        setReviews(response.allCustomers || [])
      })
  },[continueUserSession, history]);

  const reviewOperation = (userId)=>{
      deleteUser({userId}).then((response)=>{
        if(response.status === 0){
          alert(response.message)
        }
        getAllCustomers().then(response => {
          if(response.status === 0){
            alert(response.message)
          }
          setReviews(response.allCustomers || [])
        });
      })
  }
  return (
    <div className="maincontainer">
      <Table bordered hover responsive className="mb-3 mt-3">
                        <thead>
                            <tr>
                              <th>Customer Id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile Number</th>
                              <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{`${item.fname} ${item.lname}`}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                          <Button variant="info" onClick={reviewOperation.bind(this, item.id, 1)} className="btn-fill pull-right themeBtn">Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
        </Table>
  </div>
  );
}

export default AdminReviewCustomerContainer;