import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from './Styled';

export default function LandingPage(){
    return (
        <Div>
        <div>
            <div className='divTitle'>
                <h1> Welcome to the adventure! </h1>
            </div>
            <div className='divButton'>
                <Link to = '/home'>
                    <button className='buttonLanding'> Let's go!</button>
                </Link>
            </div>
        </div>
        </Div>
    )
}