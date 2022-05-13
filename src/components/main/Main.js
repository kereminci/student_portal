import React from 'react'
import './list-groups.css';
import './blog.css';
import './img/etkinlik1.jpg';
import './img/etkinlik2.png';
import './img/etkinlik3.jpg';

const Main = () => {
    return (
        <>
            <div className="App">
                
                <div className="container">
                    <div className="row">

                        <div className="col-md-7">
                            <h1 className="h1font text-center">HABERLER</h1>
                            <hr className="border-2 border-top border-primary w-100 "></hr>
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col-6 p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary">World</strong>
                                    <h3 class="mb-0">Featured post</h3>
                                    <div class="mb-1 text-muted">Nov 12</div>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="stretched-link">Continue reading</a>
                                </div>
                                <div class="col-6 d-none d-lg-block" style={{float:'right'}}>
                                <img src="https://i.hizliresim.com/mn82e7j.jpg" alt="Girl in a jacket" width="100%" height="250"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5" >
                            <h1 className="h1font text-center">DUYURULAR</h1>
                            <hr className="border-2 border-top border-primary w-100 "></hr>
                            <div className="list-group overflow-auto">
                                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">

                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 class="mb-0">Another title here</h6>
                                            <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                                        </div>
                                        <small class="opacity-50 text-nowrap">3d</small>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">

                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 class="mb-0">Another title here</h6>
                                            <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                                        </div>
                                        <small class="opacity-50 text-nowrap">3d</small>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">

                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 class="mb-0">Another title here</h6>
                                            <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                                        </div>
                                        <small class="opacity-50 text-nowrap">3d</small>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">

                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 class="mb-0">Another title here</h6>
                                            <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                                        </div>
                                        <small class="opacity-50 text-nowrap">3d</small>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">

                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 class="mb-0">Another title here</h6>
                                            <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                                        </div>
                                        <small class="opacity-50 text-nowrap">3d</small>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <main>

<h1 className="h1font">ETKİNLİKLER</h1>

<div className="album">
    
    <div className="container">
    <hr className="border-2 border-top border-primary w-100 "></hr>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
            <div className="col">
                
                <div className="card shadow-sm"><img src="https://i.hizliresim.com/mn82e7j.jpg" alt="Girl in a jacket" width="100%" height="225"/>
                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-primary">View</button>

                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://i.hizliresim.com/mn82e7j.jpg" alt="Girl in a jacket" width="100%" height="225"/>
                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                               
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-sm">
                    <img src="https://i.hizliresim.com/mn82e7j.jpg" alt="Girl in a jacket" width="100%" height="225"/>

                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</main>
                
            </div>
        </>
    )
}

export default Main