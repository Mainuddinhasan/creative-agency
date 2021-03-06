import React from 'react';

const FeedbackDetails = ({info}) => {
    return (
        <div style={{border: '1px solid #BFBFBF', boxSizing: 'border-box', borderRadius:'4px',width: '370px',
        height: '212px'}} className = "col-lg-3 col-md-4 m-3 mt-5">
              <div className = "d-flex justify-content-center ">
                    <img style= {{width: '85px', height: '80px'}} src={info.img} alt=""/>
                    <h4>{info.name} <br/> <small>{info.designation}</small> </h4>
                </div>
            
                <div>
                    <small>{info.description}</small>
                </div>
            </div>
        
    );
};

export default FeedbackDetails;