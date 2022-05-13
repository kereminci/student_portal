import React from 'react'
import './list-groups.css';
import './blog.css';
import './img/etkinlik1.jpg';
import './img/etkinlik2.png';
import './img/etkinlik3.jpg';

const etk = () => {
    return (
        <>
            <div className="etkinlikler">
                
        
            
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
        </>
    )
}

export default etk