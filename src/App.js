import React from 'react';
import Header from './components/header/header';
import Banner from './components/main-page/body/body';
import About from './components/main-page/about/about';
import Featured from './components/main-page/featured/featured';
import Service from './components/main-page/service/service';
import Coaches from './components/main-page/coaches/coaches';
import Discount from './components/main-page/discount/discount';
import Bmi from './components/main-page/bmi/bmi';
import Clients from './components/main-page/clients/clients';
import Discount50 from './components/main-page/discount50/discount50';
import Footer from './components/main-page/footer/footer';


const App = () => {
  return (
    <div className="App">
     <Header />
     <Banner/>
     <About />
     <Featured />
     <Service />
     <Coaches />
     <Discount />
     <Bmi />
     <Clients />
     <Discount50 />
     <Footer />
    </div>
  );
}

export default App;
