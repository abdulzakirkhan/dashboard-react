import React from 'react'
import { brand, notifications, rumi, star } from '../images'

export default function Header() {
  return (
    <header className="header-bg p-2">
        <div className="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav d-flex align-items-center gap-5 me-auto p-0 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="navbar-brand text-white d-flex align-items-center gap-3" href="#">
                            <span><img src={brand} alt="" className="img-fluid" width={25} /></span>
                            <span className="text-white">Pixel.Co.</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <span className="text-white fw-semibold">Good Morning Rumi</span>
                    </li>
                </ul>
                <ul className="d-flex align-items-center list-unstyled p-0">
                    <li className="p-0 m-0">
                        <div className="card card-bg-color bg-transparent p-0 border-0 px-2 py-1">
                            <div className="card-body d-flex align-items-center gap-3 p-0">
                                <span><img src={star} alt="" className="img-fluid" width={25} /></span>
                                <span className="t">GET BUSINESS</span>
                            </div>
                        </div>
                    </li>
                    <li className="px-3">
                        <div className="d-flex justify-content-between gap-3">
                            <span><img src={notifications} alt="" className="img-fluid" width={40} /></span>
                            <span type="button"><img src={rumi} alt="" className="img-fluid" width={40} /></span>
                        </div>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}
