import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <section className="footer-container">
            <div className = "row m-5">
                <div className="col-md-5 ml-5 mt-5">
                    <h2> <b> Let us handle your <br/> project, professionally.</b> </h2>
                    <br/>
                    <p className = "text-secondary">With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general. </p>
                </div>
                <div className="col-md-6 mt-5">
                <textarea className="form-control" cols="30" rows="2" placeholder="Your Email address"></textarea>                    <br/>
                   
                    <textarea className="form-control" cols="30" rows="2" placeholder="Your name/company's name"></textarea>                    <br/>
   
                    <textarea className="form-control" cols="30" rows="10" placeholder="Your message"></textarea>                    <br/>

                    <div>
                        <button style = {{width: '25%'}} className="btn btn-dark">Send</button>
                    </div>
                </div>
            </div>
            <div className="text-center my-auto">
                <small >Copyright {(new Date()).getFullYear()} All Rights Reserved By The Organization</small>
            </div>
        </section>
    );
};

export default Footer;

// const Footer = () => {
//     return (
//         <section className="footer-container">
//             <div className = "row m-5 ">
//                 <div className="col-md-5 ml-5 mt-5">
//                     <h2>Let us handle your <br/> project, professionally. </h2>
//                     <small>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general. </small>
//                 </div>
//                 <div className="col-md-6  mt-5">
//                     <input class="form-control form-control-lg" type="text" placeholder="Your email address"/>
//                     <br/>
//                     <input class="form-control form-control-lg" type="text" placeholder="Your name/company's name"/>
//                     <br/>
//                     <input class="form-control form-control-lg" cols="30" rows="10" type="text" placeholder="Your message"/>
//                     <br/>

//                     <div>
//                         <button className="btn btn-dark" style={{width: '25%'}}>Send</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-center  my-auto">
//                     <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
//             </div>
//         </section>
//     );
// };

// export default Footer;