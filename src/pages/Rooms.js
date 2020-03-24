import React from 'react';
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import {Link} from 'react-router-dom';
import RoomContainer from "../component/RoomContainer";

const Rooms = () => {
    return(
     <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to='/'>
                    <button>
                        return home
                    </button>
                </Link>
            </Banner>
        </Hero>
         <RoomContainer/>
     </>
    );
};

export default Rooms;