import React from 'react'
import './etk.css'

    


const etk = () => {
    return (
        <>
            <div className="etkinlikler">
            
                <div className="card shadow-lg border border-2 border-muted card-border-radius"><img className='card-border-radius' src="https://i.hizliresim.com/mn82e7j.jpg" alt="Girl in a jacket" width="100%" height="225"/>
                    <div className="card-body">
                        
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                       
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group my-3 px-4">
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