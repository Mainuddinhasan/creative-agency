import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        
            <div style={{boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px', width: '350px',height: '320px'}} 
                className = "col-lg-3 col-md-4 col-sm-6 text-center mt-5 mb-5 p-4 mx-auto ">
                
                <img style= {{height:'80px'}} src={service.img} alt=""/>
                
                <h5 className="mt-3">{service.name}</h5>
                <br/>
                <p className= "text-secondary">{service.description}</p>
            
            </div>
       
    );
};

export default ServiceDetails;