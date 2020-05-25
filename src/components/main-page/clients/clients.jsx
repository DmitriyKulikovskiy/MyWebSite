import React from 'react';
import './clients.sass'
import client1 from '../../../assets/clients/client1.png'
import client2 from '../../../assets/clients/client2.png'
import client3 from '../../../assets/clients/client3.png'

const text = <p className="client-feedback">Give dry stars form. Us called an won't winged had land cru abundantly land Midst</p>

const Clients = () => {
    return (
        <div className="container">
            <div className="clients-title">HAPPY CLIENT SAYS</div>
            <div className="row justify-content-center clients-container">
                <div className="clients-box d-flex">
                    <div className="client-img">
                        <img src={client1} alt="client1"/>
                    </div>
                    <div className="feedback">
                        {text}
                        <div className="client-name">Moan Yard</div>
                        <div className="client-workplace">CEO & Founder</div>
                    </div>
                </div>

                <div className="clients-box d-flex">
                    <div className="client-img">
                        <img src={client2}alt="client2"/>
                    </div>
                    <div className="feedback">
                        {text}
                        <div className="client-name">Gerald Forster</div>
                        <div className="client-workplace">CEO & Founder</div>
                    </div>
                </div>

                <div className="clients-box d-flex">
                    <div className="client-img">
                        <img src={client3} alt="client3"/>
                    </div>
                    <div className="feedback">
                        {text}
                        <div className="client-name">Noah Cyrus</div>
                        <div className="client-workplace">CEO & Founder</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Clients;