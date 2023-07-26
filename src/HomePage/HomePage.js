import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { LiaShoppingBagSolid } from "react-icons/lia"
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
                        <AiOutlineSearch size={20} />
                        <input className='search__input' placeholder='Search for Products,brands & more'>
                        </input>
                    </div>
                    <div><FaRegUser /></div>
                    <div><FaRegHeart /></div>
                    <div><LiaShoppingBagSolid /></div>
                </div>
            </div>
            <div className='men__menu'>
                <div className='column__one'>
                    <span className='header__value'>Topwear</span>
                    <span>T-shirts</span>
                    <span>Casual Shirts</span>
                    <span>Formal Shirts</span>
                    <span>Sweatshirts</span>
                    <span>Sweaters</span>
                    <span>Jackets</span>
                    <span>Blazers & Coats</span>
                    <span>Suits</span>
                    <span>Rain Jackets</span>


                    <span className='header__value'>Indian & Festive Wear</span>
                    <span>Kurtas & Kurta Sets</span>
                    <span>Sherwanis</span>
                    <span>Nehru Jackets</span>
                    <span>Dhotis</span>
                </div>
                <div className='column__two'>
                    <span className='header__value'>Bottomwear</span>
                    <span>Jeans</span>
                    <span>Casual Trousers</span>
                    <span>Formal Trousers</span>
                    <span>Shorts</span>
                    <span>Track Pants & Joggers</span>


                    <span className='header__value'>Innerwear & Sleepwear</span>
                    <span>Brief & Trunks</span>
                    <span>Boxers</span>
                    <span>Vests</span>
                    <span>Sleepwear & Loungewear</span>
                    <span>Thermals</span>

                </div>
                <div className='column__three'>
                    <span className='header__value'>Footwear</span>
                    <span>Casual Shoes</span>
                    <span>Sport Shoes</span>
                    <span>Formal Shoes</span>
                    <span>Sneakers</span>
                    <span>Sandals & Floaters </span>
                    <span>Flip Flops</span>
                    <span>Socks</span>
                </div>
            </div>

        </div>
    )
}

export default HomePage