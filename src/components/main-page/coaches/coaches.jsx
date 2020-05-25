import React from 'react';
import './coaches.sass'
import coach1 from '../../../assets/coaches/coaches1.jpg'
import coach2 from '../../../assets/coaches/coaches2.jpg'
import coach3 from '../../../assets/coaches/coaches3.jpg'
import coach4 from '../../../assets/coaches/coaches4.jpg'

const Coaches = () => {
    return ( 
        <div className="container">
            <div className="title-coaches">OUR FITNESS COACHES</div>
            <div className="row justify-content-center coaches-box">
                <div className="col-lg-3 col-sm-6 expert-box">
                    <div className='shadow-coaches'>
                        <div className="coa-container">
                            <img className='coa1' alt='feature1' src={coach1}/>  
                            <div  className='hide-button'>
                                <a className='fa fa-facebook' href='#'></a>
                                <a className='fa fa-twitter' href='#'></a>
                                <a className='fa fa-linkedin' href='#'></a>
                            </div> 
                        </div>
                        <div className='coa-footer'>
                            <h4>David Williams</h4>
                            <h5>Fitness Trainer</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 expert-box">
                    <div className='shadow-coaches'>
                        <div className="coa-container">
                            <img className='coa2' alt='feature1' src={coach2}/>  
                            <div  className='hide-button'>
                                <a className='fa fa-facebook' href='#'></a>
                                <a className='fa fa-twitter' href='#'></a>
                                <a className='fa fa-linkedin' href='#'></a>
                            </div> 
                        </div>
                        <div className='coa-footer'>
                            <h4>Jacob Dare</h4>
                            <h5>Weight Loss</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 expert-box">
                    <div className='shadow-coaches'>
                        <div className="coa-container">
                            <img className='coa3' alt='feature1' src={coach3}/>  
                            <div  className='hide-button'>
                                <a className='fa fa-facebook' href='#'></a>
                                <a className='fa fa-twitter' href='#'></a>
                                <a className='fa fa-linkedin' href='#'></a>
                            </div> 
                        </div>
                        <div className='coa-footer'>
                            <h4>Alex Fall</h4>
                            <h5>Gym Fitness</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 expert-box">
                    <div className='shadow-coaches'>
                        <div className="coa-container">
                            <img className='coa4' alt='feature1' src={coach4}/>  
                            <div  className='hide-button'>
                                <a className='fa fa-facebook' href='#'></a>
                                <a className='fa fa-twitter' href='#'></a>
                                <a className='fa fa-linkedin' href='#'></a>
                            </div> 
                        </div>
                        <div className='coa-footer'>
                            <h4>Dan Abramov</h4>
                            <h5>Expert Gym</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Coaches;