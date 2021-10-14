import React, { useState, useEffect } from 'react';
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useActions as useLoginActions } from '../../login/hooks';
import { useActions } from '../hooks';

const reviewData = [
  {id : 1, review : "review from customer", stars : 2},
  {id : 2, review : "review from customer", stars : 3},
  {id : 3, review : "review from customer", stars : 4},
  {id : 4, review : "review from customer", stars : 5},
  {id : 5, review : "review from customer", stars : 1}

]

const AdminReviewContainer = (props) => {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState(0);
  const {getAllUnVerifiedReviews, approveReview} = useActions();
  
  const history = useHistory();
    const { continueUserSession } = useLoginActions();
    useEffect(() => {
      if(localStorage.getItem('usersData')) {
          continueUserSession(JSON.parse(localStorage.getItem('usersData')));
      }
      getAllUnVerifiedReviews().then(response => {
        if(response.status === 0){
          alert(response.message)
        }
        setReviews(response.reviews || [])
      })
  },[continueUserSession, history]);

  const reviewOperation = (reviewId, isApprove)=>{
      approveReview({reviewId, isApprove}).then((response)=>{
        if(response.status === 0){
          alert(response.message)
        }
        getAllUnVerifiedReviews().then(response => {
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
                              <th>Review</th>
                              <th>Customer Id</th>
                              <th>Review By</th>
                              <th>Trader Name</th>
                              <th>Approve Rating</th>
                              <th>Discard Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.review}</td>
                                        <td>{item.customerId}</td>
                                        <td>{`${item.reviewBy_fname} ${item.reviewBy_lname}`}</td>
                                        <td>{`${item.trader_fname} ${item.trader_lname}`}</td>
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

export default AdminReviewContainer;