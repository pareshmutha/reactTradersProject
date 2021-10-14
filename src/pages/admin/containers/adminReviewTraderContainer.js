import React, { useState, useEffect } from 'react';
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useActions as useLoginActions } from '../../login/hooks';
import { useActions } from '../hooks';


const AdminReviewTraderContainer = (props) => {
  const [reviews, setReviews] = useState([]);
  const {getAllUnVerifiedTraders, approveTrader} = useActions();
  
  const history = useHistory();
    const { continueUserSession } = useLoginActions();
    useEffect(() => {
      if(localStorage.getItem('usersData')) {
          continueUserSession(JSON.parse(localStorage.getItem('usersData')));
      }
      getAllUnVerifiedTraders().then(response => {
        if(response.status === 0){
          alert(response.message)
        }
        setReviews(response.allTraders || [])
      })
  },[continueUserSession, history]);

  const reviewOperation = (userId, isApprove)=>{
      approveTrader({userId, isApprove}).then((response)=>{
        if(response.status === 0){
          alert(response.message)
        }
        getAllUnVerifiedTraders().then(response => {
          if(response.status === 0){
            alert(response.message)
          }
          setReviews(response.reviews || [])
        });
      })
  }
  return (
    <div className="maincontainer">
      <Table bordered hover responsive className="mb-3 mt-3">
                        <thead>
                            <tr>
                              <th>#</th>
                              <th>Trader Name</th>
                              <th>Mobile Number</th>
                              <th>State</th>
                              <th>District</th>
                              <th>Approve Rating</th>
                              <th>Discard Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{`${item.fname} ${item.lname}`}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.state || 'NA'}</td>
                                        <td>{item.district || 'NA'}</td>
                                        <td>
                                          <Button variant="info" onClick={reviewOperation.bind(this, item.id, 1)} className="btn-fill pull-right themeBtn">Approve</Button>
                                        </td>
                                        <td>
                                          <Button variant="danger" onClick={reviewOperation.bind(this, item.id, 0)} className="btn-fill pull-right">Discard</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
        </Table>
  </div>
  );
}

export default AdminReviewTraderContainer;