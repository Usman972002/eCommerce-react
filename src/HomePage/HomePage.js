import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { LiaShoppingBagSolid } from "react-icons/lia"
import './HomePage.css';
import logo from "./homepagelogo.png"
import { Link } from 'react-router-dom'
import AllProducts from '../Products/AllProducts'

const HomePage = () => {
    return (
        <div className='home__page'>
            <div className='navbar__full'>
                <div className='list__items'>
                    <div className='logo__home'>
                        <Link to={'/'}>
                        <img src={logo} alt='loading' width={50} height={50}></img>
                        </Link>
                        </div>
                    <div className='men__hover' style={{borderBottomColor:"red"}}>Men</div>
                    <div className='men__menu'>
                        <div className='column__one'>
                            <span className='header__value'><b>Topwear</b></span>
                            <span>T-shirts</span>
                            <span>Casual Shirts</span>
                            <span>Formal Shirts</span>
                            <span>Sweatshirts</span>
                            <span>Sweaters</span>
                            <span>Jackets</span>
                            <span>Blazers & Coats</span>
                            <span>Suits</span>
                            <span>Rain Jackets</span>

                            <hr></hr>
                            <span className='header__value'><b>Indian & Festive Wear</b></span>
                            <span>Kurtas & Kurta Sets</span>
                            <span>Sherwanis</span>
                            <span>Nehru Jackets</span>
                            <span>Dhotis</span>
                        </div>
                        <div className='column__two'>
                            <span className='header__value'><b>Bottomwear</b></span>
                            <span>Jeans</span>
                            <span>Casual Trousers</span>
                            <span>Formal Trousers</span>
                            <span>Shorts</span>
                            <span>Track Pants & Joggers</span>

                            <hr></hr>
                            <span className='header__value'><b>Innerwear & Sleepwear</b></span>
                            <span>Brief & Trunks</span>
                            <span>Boxers</span>
                            <span>Vests</span>
                            <span>Sleepwear & Loungewear</span>
                            <span>Thermals</span>
                            <hr></hr>
                            <span className='header__value'><b>Plus Size</b></span>

                        </div>
                        <div className='column__three'>
                            <span className='header__value'><b>Footwear</b></span>
                            <span>Casual Shoes</span>
                            <span>Sport Shoes</span>
                            <span>Formal Shoes</span>
                            <span>Sneakers</span>
                            <span>Sandals & Floaters </span>
                            <span>Flip Flops</span>
                            <span>Socks</span>
                            <hr></hr>
                            <span className='header__value'><b>Personal Care & Grooming</b></span>
                            <span className='header__value'><b>Sunglasses & Frames</b></span>
                            <span className='header__value'><b>Watches</b></span>
                        </div>

                        <div className='column__four'>
                            <span className='header__value'><b>Sports & Active Wear</b></span>
                            <span>Sport Shoes</span>
                            <span>Sports Sandals</span>
                            <span>Active T-Shirts</span>
                            <span>Track Pants & Shorts</span>
                            <span>Tracksuits</span>
                            <span>Jackets & Sweatshirts</span>
                            <span>Sports Accessories</span>
                            <span>Swimwear</span>
                            <hr></hr>
                            <span className='header__value'><b>Gadgets</b></span>
                            <span>Smart Warables</span>
                            <span>Fitness Gadgets</span>
                            <span>Headphones</span>
                            <span>Speakers</span>
                        </div>

                        <div className='column__five'>
                            <span className='header__value'><b>Fashion Accessories</b></span>
                            <span>Wallets</span>
                            <span>Belts</span>
                            <span>Perfumes & Body Mists</span>
                            <span>Trimmers</span>
                            <span>Deodrants</span>
                            <span>Ties,Cufflinks&Pocket Squares</span>
                            <span>Accessory Gift Sets</span>
                            <span>Caps & Hats</span>
                            <span>Mufflers,Scarves & Gloves</span>
                            <span>Phone Cases</span>
                            <span>Rings & Wristwear</span>
                            <span>Helmets</span>
                            <hr></hr>
                            <span className='header__value'><b>Bags & Backpacks</b></span>
                            <span className='header__value'><b>Luggages & Trolleys</b></span>
                        </div>
                    </div>

                    <div className='women__hover'>Women</div>
                    <div className='women__menu'>
                        <div className='column__one'>
                            <span className='header__value'><b>Topwear</b></span>
                            <span>T-shirts</span>
                            <span>Casual Shirts</span>
                            <span>Formal Shirts</span>
                            <span>Sweatshirts</span>
                            <span>Sweaters</span>
                            <span>Jackets</span>
                            <span>Blazers & Coats</span>
                            <span>Suits</span>
                            <span>Rain Jackets</span>

                            <hr></hr>
                            <span className='header__value'><b>Indian & Festive Wear</b></span>
                            <span>Kurtas & Kurta Sets</span>
                            <span>Sherwanis</span>
                            <span>Nehru Jackets</span>
                            <span>Dhotis</span>
                        </div>
                        <div className='column__two'>
                            <span className='header__value'><b>Bottomwear</b></span>
                            <span>Jeans</span>
                            <span>Casual Trousers</span>
                            <span>Formal Trousers</span>
                            <span>Shorts</span>
                            <span>Track Pants & Joggers</span>

                            <hr></hr>
                            <span className='header__value'><b>Innerwear & Sleepwear</b></span>
                            <span>Brief & Trunks</span>
                            <span>Boxers</span>
                            <span>Vests</span>
                            <span>Sleepwear & Loungewear</span>
                            <span>Thermals</span>
                            <hr></hr>
                            <span className='header__value'><b>Plus Size</b></span>

                        </div>
                        <div className='column__three'>
                            <span className='header__value'><b>Footwear</b></span>
                            <span>Casual Shoes</span>
                            <span>Sport Shoes</span>
                            <span>Formal Shoes</span>
                            <span>Sneakers</span>
                            <span>Sandals & Floaters </span>
                            <span>Flip Flops</span>
                            <span>Socks</span>
                            <hr></hr>
                            <span className='header__value'><b>Personal Care & Grooming</b></span>
                            <span className='header__value'><b>Sunglasses & Frames</b></span>
                            <span className='header__value'><b>Watches</b></span>
                        </div>

                        <div className='column__four'>
                            <span className='header__value'><b>Sports & Active Wear</b></span>
                            <span>Sport Shoes</span>
                            <span>Sports Sandals</span>
                            <span>Active T-Shirts</span>
                            <span>Track Pants & Shorts</span>
                            <span>Tracksuits</span>
                            <span>Jackets & Sweatshirts</span>
                            <span>Sports Accessories</span>
                            <span>Swimwear</span>
                            <hr></hr>
                            <span className='header__value'><b>Gadgets</b></span>
                            <span>Smart Warables</span>
                            <span>Fitness Gadgets</span>
                            <span>Headphones</span>
                            <span>Speakers</span>
                        </div>

                        <div className='column__five'>
                            <span className='header__value'><b>Fashion Accessories</b></span>
                            <span>Wallets</span>
                            <span>Belts</span>
                            <span>Perfumes & Body Mists</span>
                            <span>Trimmers</span>
                            <span>Deodrants</span>
                            <span>Ties,Cufflinks&Pocket Squares</span>
                            <span>Accessory Gift Sets</span>
                            <span>Caps & Hats</span>
                            <span>Mufflers,Scarves & Gloves</span>
                            <span>Phone Cases</span>
                            <span>Rings & Wristwear</span>
                            <span>Helmets</span>
                            <hr></hr>
                            <span className='header__value'><b>Bags & Backpacks</b></span>
                            <span className='header__value'><b>Luggages & Trolleys</b></span>
                        </div>
                    </div>

                    <div className='kids__hover'>Kids</div>
                    <div className='kids__menu'>
                        <div className='column__one'>
                            <span className='header__value'><b>Topwear</b></span>
                            <span>T-shirts</span>
                            <span>Casual Shirts</span>
                            <span>Formal Shirts</span>
                            <span>Sweatshirts</span>
                            <span>Sweaters</span>
                            <span>Jackets</span>
                            <span>Blazers & Coats</span>
                            <span>Suits</span>
                            <span>Rain Jackets</span>

                            <hr></hr>
                            <span className='header__value'><b>Indian & Festive Wear</b></span>
                            <span>Kurtas & Kurta Sets</span>
                            <span>Sherwanis</span>
                            <span>Nehru Jackets</span>
                            <span>Dhotis</span>
                        </div>
                        <div className='column__two'>
                            <span className='header__value'><b>Bottomwear</b></span>
                            <span>Jeans</span>
                            <span>Casual Trousers</span>
                            <span>Formal Trousers</span>
                            <span>Shorts</span>
                            <span>Track Pants & Joggers</span>

                            <hr></hr>
                            <span className='header__value'><b>Innerwear & Sleepwear</b></span>
                            <span>Brief & Trunks</span>
                            <span>Boxers</span>
                            <span>Vests</span>
                            <span>Sleepwear & Loungewear</span>
                            <span>Thermals</span>
                            <hr></hr>
                            <span className='header__value'><b>Plus Size</b></span>

                        </div>
                        <div className='column__three'>
                            <span className='header__value'><b>Footwear</b></span>
                            <span>Casual Shoes</span>
                            <span>Sport Shoes</span>
                            <span>Formal Shoes</span>
                            <span>Sneakers</span>
                            <span>Sandals & Floaters </span>
                            <span>Flip Flops</span>
                            <span>Socks</span>
                            <hr></hr>
                            <span className='header__value'><b>Personal Care & Grooming</b></span>
                            <span className='header__value'><b>Sunglasses & Frames</b></span>
                            <span className='header__value'><b>Watches</b></span>
                        </div>

                        <div className='column__four'>
                            <span className='header__value'><b>Sports & Active Wear</b></span>
                            <span>Sport Shoes</span>
                            <span>Sports Sandals</span>
                            <span>Active T-Shirts</span>
                            <span>Track Pants & Shorts</span>
                            <span>Tracksuits</span>
                            <span>Jackets & Sweatshirts</span>
                            <span>Sports Accessories</span>
                            <span>Swimwear</span>
                            <hr></hr>
                            <span className='header__value'><b>Gadgets</b></span>
                            <span>Smart Warables</span>
                            <span>Fitness Gadgets</span>
                            <span>Headphones</span>
                            <span>Speakers</span>
                        </div>

                        <div className='column__five'>
                            <span className='header__value'><b>Fashion Accessories</b></span>
                            <span>Wallets</span>
                            <span>Belts</span>
                            <span>Perfumes & Body Mists</span>
                            <span>Trimmers</span>
                            <span>Deodrants</span>
                            <span>Ties,Cufflinks&Pocket Squares</span>
                            <span>Accessory Gift Sets</span>
                            <span>Caps & Hats</span>
                            <span>Mufflers,Scarves & Gloves</span>
                            <span>Phone Cases</span>
                            <span>Rings & Wristwear</span>
                            <span>Helmets</span>
                            <hr></hr>
                            <span className='header__value'><b>Bags & Backpacks</b></span>
                            <span className='header__value'><b>Luggages & Trolleys</b></span>
                        </div>
                    </div>

                    <div className='bty__hover'>Beauty</div>
                    <div className='bty__menu'>
                        <div className='column__one'>
                            <span className='header__value'><b>Topwear</b></span>
                            <span>T-shirts</span>
                            <span>Casual Shirts</span>
                            <span>Formal Shirts</span>
                            <span>Sweatshirts</span>
                            <span>Sweaters</span>
                            <span>Jackets</span>
                            <span>Blazers & Coats</span>
                            <span>Suits</span>
                            <span>Rain Jackets</span>

                            <hr></hr>
                            <span className='header__value'><b>Indian & Festive Wear</b></span>
                            <span>Kurtas & Kurta Sets</span>
                            <span>Sherwanis</span>
                            <span>Nehru Jackets</span>
                            <span>Dhotis</span>
                        </div>
                        <div className='column__two'>
                            <span className='header__value'><b>Bottomwear</b></span>
                            <span>Jeans</span>
                            <span>Casual Trousers</span>
                            <span>Formal Trousers</span>
                            <span>Shorts</span>
                            <span>Track Pants & Joggers</span>

                            <hr></hr>
                            <span className='header__value'><b>Innerwear & Sleepwear</b></span>
                            <span>Brief & Trunks</span>
                            <span>Boxers</span>
                            <span>Vests</span>
                            <span>Sleepwear & Loungewear</span>
                            <span>Thermals</span>
                            <hr></hr>
                            <span className='header__value'><b>Plus Size</b></span>

                        </div>
                        <div className='column__three'>
                            <span className='header__value'><b>Footwear</b></span>
                            <span>Casual Shoes</span>
                            <span>Sport Shoes</span>
                            <span>Formal Shoes</span>
                            <span>Sneakers</span>
                            <span>Sandals & Floaters </span>
                            <span>Flip Flops</span>
                            <span>Socks</span>
                            <hr></hr>
                            <span className='header__value'><b>Personal Care & Grooming</b></span>
                            <span className='header__value'><b>Sunglasses & Frames</b></span>
                            <span className='header__value'><b>Watches</b></span>
                        </div>

                        <div className='column__four'>
                            <span className='header__value'><b>Sports & Active Wear</b></span>
                            <span>Sport Shoes</span>
                            <span>Sports Sandals</span>
                            <span>Active T-Shirts</span>
                            <span>Track Pants & Shorts</span>
                            <span>Tracksuits</span>
                            <span>Jackets & Sweatshirts</span>
                            <span>Sports Accessories</span>
                            <span>Swimwear</span>
                            <hr></hr>
                            <span className='header__value'><b>Gadgets</b></span>
                            <span>Smart Warables</span>
                            <span>Fitness Gadgets</span>
                            <span>Headphones</span>
                            <span>Speakers</span>
                        </div>

                        <div className='column__five'>
                            <span className='header__value'><b>Fashion Accessories</b></span>
                            <span>Wallets</span>
                            <span>Belts</span>
                            <span>Perfumes & Body Mists</span>
                            <span>Trimmers</span>
                            <span>Deodrants</span>
                            <span>Ties,Cufflinks&Pocket Squares</span>
                            <span>Accessory Gift Sets</span>
                            <span>Caps & Hats</span>
                            <span>Mufflers,Scarves & Gloves</span>
                            <span>Phone Cases</span>
                            <span>Rings & Wristwear</span>
                            <span>Helmets</span>
                            <hr></hr>
                            <span className='header__value'><b>Bags & Backpacks</b></span>
                            <span className='header__value'><b>Luggages & Trolleys</b></span>
                        </div>
                    </div>

                    <div className='hl__hover'>Home & Living</div>
                    <div className='hl__menu'>
                        <div className='column__one'>
                            <span className='header__value'><b>Topwear</b></span>
                            <span>T-shirts</span>
                            <span>Casual Shirts</span>
                            <span>Formal Shirts</span>
                            <span>Sweatshirts</span>
                            <span>Sweaters</span>
                            <span>Jackets</span>
                            <span>Blazers & Coats</span>
                            <span>Suits</span>
                            <span>Rain Jackets</span>

                            <hr></hr>
                            <span className='header__value'><b>Indian & Festive Wear</b></span>
                            <span>Kurtas & Kurta Sets</span>
                            <span>Sherwanis</span>
                            <span>Nehru Jackets</span>
                            <span>Dhotis</span>
                        </div>
                        <div className='column__two'>
                            <span className='header__value'><b>Bottomwear</b></span>
                            <span>Jeans</span>
                            <span>Casual Trousers</span>
                            <span>Formal Trousers</span>
                            <span>Shorts</span>
                            <span>Track Pants & Joggers</span>

                            <hr></hr>
                            <span className='header__value'><b>Innerwear & Sleepwear</b></span>
                            <span>Brief & Trunks</span>
                            <span>Boxers</span>
                            <span>Vests</span>
                            <span>Sleepwear & Loungewear</span>
                            <span>Thermals</span>
                            <hr></hr>
                            <span className='header__value'><b>Plus Size</b></span>

                        </div>
                        <div className='column__three'>
                            <span className='header__value'><b>Footwear</b></span>
                            <span>Casual Shoes</span>
                            <span>Sport Shoes</span>
                            <span>Formal Shoes</span>
                            <span>Sneakers</span>
                            <span>Sandals & Floaters </span>
                            <span>Flip Flops</span>
                            <span>Socks</span>
                            <hr></hr>
                            <span className='header__value'><b>Personal Care & Grooming</b></span>
                            <span className='header__value'><b>Sunglasses & Frames</b></span>
                            <span className='header__value'><b>Watches</b></span>
                        </div>

                        <div className='column__four'>
                            <span className='header__value'><b>Sports & Active Wear</b></span>
                            <span>Sport Shoes</span>
                            <span>Sports Sandals</span>
                            <span>Active T-Shirts</span>
                            <span>Track Pants & Shorts</span>
                            <span>Tracksuits</span>
                            <span>Jackets & Sweatshirts</span>
                            <span>Sports Accessories</span>
                            <span>Swimwear</span>
                            <hr></hr>
                            <span className='header__value'><b>Gadgets</b></span>
                            <span>Smart Warables</span>
                            <span>Fitness Gadgets</span>
                            <span>Headphones</span>
                            <span>Speakers</span>
                        </div>

                        <div className='column__five'>
                            <span className='header__value'><b>Fashion Accessories</b></span>
                            <span>Wallets</span>
                            <span>Belts</span>
                            <span>Perfumes & Body Mists</span>
                            <span>Trimmers</span>
                            <span>Deodrants</span>
                            <span>Ties,Cufflinks&Pocket Squares</span>
                            <span>Accessory Gift Sets</span>
                            <span>Caps & Hats</span>
                            <span>Mufflers,Scarves & Gloves</span>
                            <span>Phone Cases</span>
                            <span>Rings & Wristwear</span>
                            <span>Helmets</span>
                            <hr></hr>
                            <span className='header__value'><b>Bags & Backpacks</b></span>
                            <span className='header__value'><b>Luggages & Trolleys</b></span>
                        </div>
                    </div>

                    <div className='search__icon__input'>
                        <AiOutlineSearch size={20} />
                        <input className='search__input' placeholder='Search for Products,brands & more'>
                        </input>
                    </div>
                    <div className='profile__ll'>
                        <FaRegUser size={20} />
                        <label style={{ "font-size": "12px" }}>Profile</label>
                    </div>
                    <div className='wishlist__ll'>
                        <FaRegHeart size={20} />
                        <label style={{ "font-size": "12px" }}>Wishlist</label>
                    </div>
                    <div className='bag__ll'>
                        <LiaShoppingBagSolid size={20} />
                        <label style={{ "font-size": "12px" }}>Bag</label>
                    </div>
                </div>
            </div>
            <AllProducts/>
        </div>
    )
}

export default HomePage