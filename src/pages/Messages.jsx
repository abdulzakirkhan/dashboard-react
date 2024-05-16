import React, { useEffect, useState } from "react";

export default function Messages() {
  const BaseURL ="https://dummyjson.com/";
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}comments`)
    .then(res => res.json())
    .then((response)=>{
      setComments(response.comments)
      console.log(response.comments)
    });
}, []);
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card bg-transparent border-0">
            <div className="card-header border-0">
              <div className="card-title fs-2 fw-bold text-white">Messages</div>
            </div>
            <div className="card-body comments">
              <div className="row">
                {comments.map((comment,index) => (
                  <div className="col-md-12">
                  <div className="card shadow-lg bg-transparent border-0" key={index}>
                    <div className="card-body">
                       <div className="pro d-flex gap-2 align-items-center py-3">
                        <span className="ico rounded-circle"></span>
                          <span className="text-white">{comment.user.username}</span>
                       </div>
                       <div className="comment text-white">{comment.body}</div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
