import React from 'react'
import { blueDot, chart, iconbg, paypal, s, slalesbtn, sym, url, yellowDot } from '../images';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-flex flex-column"><span className="text-white fw-bold">Sales</span><span className="text-white-grey">This Month</span></p>
                <p><span><img src={slalesbtn} alt="" className="img-fluid" width={50} /></span></p>
              </div>
              <div className="row g-1 px-3">
                <div className="col-md-12">
                  <div className="card borders border-0 bg-transparent">
                    <div className="card-header border-0">
                      <span className="position-relative">
                        <span><img src={paypal} alt="" className="img-fluid position-absolute" width={16} style={{top:"25%",left:"35%"}}/></span>
                        <span><img src={iconbg} alt="" className="img-fluid" width={40} /></span>
                      </span>
                    </div>
                    <div className="card-body">
                      <span className="text-white mt-3 fw-bold">PayPal Balance</span>
                      <h6 className="text-white mt-3 fw-bold">$6478388</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card borders border-0 bg-transparent">
                    <div className="card-header border-0">
                      <span className="position-relative">
                        <span><img src={s} alt="" className="img-fluid position-absolute" width={16} style={{top:"12%",left:"35%"}}/></span>
                        <span><img src={iconbg} alt="" className="img-fluid" width={40} /></span>
                      </span>
                    </div>
                    <div className="card-body">
                      <span className="text-white mt-3 fw-bold">Stripe Balance</span>
                      <h6 className="text-white mt-3 fw-bold">$6478388</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="card gcard border-0 bg-transparent">
                    <div className="card-body d-flex gap-3 align-items-center">
                      <span className="position-relative"><img src={url} alt="" className="img-fluid" width={50}/> <img src={sym} alt="" className="img-fluid position-absolute" width={20} style={{top:17,left:12}} /></span>
                        <div className="d-flex flex-column">
                          <span className="text-white">Total balance</span>
                          <h5 className="text-white fw-bold">$221,810,12</h5>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card bg-transparent border-0">
            <div className="card-header border-0 bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-flex flex-column"><span className="text-white fw-bold">Visitors</span><span className="text-white-grey">This Month</span></p>
                <p><span><img src={slalesbtn} alt="" className="img-fluid" width={50} /></span></p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-white fs-2 fw-bold">227,067</span>
                <div className="d-flex justify-content-between gap-3">
                  <span className="d-flex gap-1 align-items-center"><img src={blueDot} alt="" className="img-fluid" width={8} /> <span className="text-white">This month</span> </span>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <span className="d-flex gap-1 align-items-center"><img src={yellowDot} alt="" className="img-fluid" width={8} /> <span className="text-white">Last month</span> </span>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <span className="text-white">782 396</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <img src={chart} alt="" className="img-fluid"  />
            </div>
          </div>
          <div className="card bg-transparent border-0">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between align-items-center">
                <p className="d-flex flex-column"><span className="text-white fw-bold">Statics</span><span className="text-white-grey">This Month</span></p>
                <p><span><img src={slalesbtn} alt="" className="img-fluid" width={50} /></span></p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </div>
  )
}


export default Dashboard;