import React from 'react';
import './bmi.sass'
import bmi from '../../../assets/bmi/bmi.png'

const bmiDescr = <p className="description-bmi">Give dry stars form us called won't winged had abundantly land Midst a appear for you, good fill. Kind isn't form and their shall Whose them life be seed them green road bus away.</p>

const Bmi = () => {
    return ( 
        <div className="container main-bmi">
            <div className="row justify-content-center">
                <div className="col-lg-6 content-bmi">
                    <div className="title-bmi">
                        CALCULATE YOUR BMI
                    </div>
                    {bmiDescr}
                    <form className="form-bmi">
                        <div class="form-group first-b">
                            <label for="age">your age:</label>
                            <input class="calculations" type="text" name="age" size="10" max="4"/>
                        </div>
                        <div class="form-group first-b">
                            <label for="weight">your weight:</label>
                            <input class="calculations" type="text" name="weight" size="10" max="4"/>
                        </div>
                        <div class="form-group first-b">
                            <label for="height">your height:</label>
                            <input class="calculations" type="text" name="height" size="10" max="4"/>
                        </div>
                        <div class="form-group">
                            <label for="gender">your gender:</label>
                            <input class="calculations second-b" type="text" name="gender" size="10" max="4"/>
                        </div>
                        <div class="form-group">
                            <label for="bmi">your bmi:</label>
                            <input class="calculations second-b" type="text" name="bmi" size="10" max="4"/>
                        </div>
                        <button type='submit'>what is bmi</button>
                    </form>
                </div>
                <div className="col-lg-6 img-bmi-container">
                    <div className="img-bmi">
                        <img src={bmi} alt="bmi"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Bmi;