
import React from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import Collection from './components/Collection';
import BrandSvg from './assets/images/brand.svg';
import PopularStyles from './components/PopularStyles';

const App = () => {
    return (
        <div className='container-fluid p-0'>
            <div className='header bg-secondary-subtle px-5'>
                <TopHeader />
                <Collection />
            </div>
            <div className="d-flex mt-3 justify-content-center">
                <img src={BrandSvg} className='w-75 '/>
            </div>
            <PopularStyles />
        </div>
    )
}

export default App;
