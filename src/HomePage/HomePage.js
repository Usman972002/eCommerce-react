import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import {FaRegUser} from "react-icons/fa"
import {FaRegHeart} from "react-icons/fa"
import {LiaShoppingBagSolid} from "react-icons/lia"
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home__page'>
            <div className='navbar__full'>
                <div className='list__items'>
                <div></div>
                <div>Men</div>
                <div>Women</div>
                <div>Kids</div>
                <div>Electronics</div>
                <div>Beauty</div>
                <div>Home & Living</div>
                <div className='search__icon__input'>
                    <AiOutlineSearch />
                    <input className='search__input' placeholder='Search for Products,brands & more'>
                    </input>
                </div>
                <div><FaRegUser/></div>
                <div><FaRegHeart/></div>
                <div><LiaShoppingBagSolid/></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage