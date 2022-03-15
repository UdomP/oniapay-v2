import React from 'react';
import HeroSection from '../../Herosection';
import {homeObjOne , homeObjTwo} from './Data';

function Data() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
        </div>
    )
}

export default Data
