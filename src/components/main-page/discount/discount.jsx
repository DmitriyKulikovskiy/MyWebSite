import React from 'react';
import './discount.sass'

const Discount = () => {
    return ( 
        <div className="container discount-block">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-smg-3">
                </div>
                <div className="col-lg-5 col-smg-5">
                    <div className="discount">
                        25% <span>discount</span>
                    </div>
                    <div className="description-discount">
                        Subscribe to our newsletter and get a coupon code!
                    </div>
                    <form className="form-discount">
                        <input type='text' placeholder='Your email...' />
                        <button>subscribe</button>
                    </form>
                </div>
                <div className="col-lg-3 col-smg-3">
                </div>
            </div>
        </div>
     );
}
 
export default Discount;