import React from 'react'
import Layout from '../Portfolio/Layout';
import {homeObjOne, homeObjTwo} from '../Portfolio/Data';


function Portfolio() {
    return (
        <>
        <Layout {...homeObjOne}/>
        <Layout {...homeObjTwo}/>
        </>
        
    )
}

export default Portfolio