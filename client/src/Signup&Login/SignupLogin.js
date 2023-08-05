import React from 'react'
import "./SignupLogin.css"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { BsCart4 } from "react-icons/bs"
import { RiLockPasswordLine } from "react-icons/ri"
import {Link} from "react-router-dom"
import myImage from '../companylogo.jpg';

const SignupLogin = () => {
    return (
        <>
            <div className='login__page'>
                <div className='signup__info'>
                    <div className='company__logo'>
                        <img src={myImage} alt='loading' width={250}></img>
                    </div>
                    <div className='company__description'>
                        <span>Whatever you’ve got in mind</span><br/>
                        <span>we’ve got inside.</span><br/>
                        <span>Explore BeYou!</span>
                    </div>
                    <span>don't have an account, Create one</span>
                        <Link to={'/signup'}>
                        <button className='signup__button'>SignUp</button>
                        </Link>
                    
                        
                </div>
                <div className='login__main__section'>
                    <div className='cart__welcome'>
                        <BsCart4 size={50} />
                        <label className='welcome__tag'>BeYou</label>
                    </div>
                    <div className='login__form'>
                        <form>
                            <label>email</label><br />
                            <div className='input__with__icon'>
                                <MdOutlineAlternateEmail />
                                <input className='login__email' placeholder='enter your email..'>
                                </input>
                            </div><br />
                            <label>password</label><br />
                            <div className='input__with__icon'>
                                <RiLockPasswordLine />
                                <input className='login__password' placeholder='enter your password..'>
                                </input>
                            </div><br />
                            <div className='forgot__password'>
                                <Link>
                                <span>Forgot Password ?</span>
                                </Link>
                            </div>
                            <button type='submit' className='login__submit__button'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupLogin