import React, { useEffect, useState } from 'react'

export default function Partners() {
  const BaseURL ="https://dummyjson.com/";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}users`)
    .then(res => res.json())
    .then((response)=>{
      setUsers(response.users)
    });
}, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-lg border-0 bg-transparent">
            <div className="card-header border border-black rounded-4">
              <div className="card-title fs-1 fw-bold text-white">Users</div>
            </div>
            <div className="card-body card-users">
            <div className="row g-3">
            {users.map((user,index) => (
                  <div className="col-lg-12">
                  <div className="card bg-transparent border-0" key={index}>
                    <div className="card-body d-flex justify-content-between body-bg">
                      <p className="d-flex align-items-center gap-5"><span className="text-white">Name: {user.firstName}</span><span className="text-white">Email: {user.email}</span></p>
                      <div className="profile"><img src={user.image} alt="" className="img-fluid" width={60} /></div>
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
