import React from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md"
import { BsCart4 } from "react-icons/bs"
import { RiLockPasswordLine } from "react-icons/ri"
import myImage from '../companylogo.jpg';
import { Link } from 'react-router-dom';
import './LoginSignUp.css';

const LoginSignUp = () => {
  return (
    <div className='signup__page'>
        <div className='login__info'>
                    <div className='company__logo'>
                        <img src={myImage} alt='loading' width={250}></img>
                    </div>
                    <div className='company__description'>
                        <span>Whatever you’ve got in mind</span><br/>
                        <span>we’ve got inside.</span><br/>
                        <span>Explore BeYou!</span>
                    </div>
                        <span>If you have an account, already</span>
                        <Link to={'/login'}>
                        <button className='login__button'>Login</button>
                        </Link>                
                </div>
                <div className='signup__main__section'>
                    <div className='cart__welcome'>
                        <BsCart4 size={50} />
                        <label className='welcome__tag'>BeYou</label>
                    </div>
                    <div className='signup__form'>
                        <form>
                            <label>email</label><br />
                            <div className='input__with__icon'>
                                <MdOutlineAlternateEmail />
                                <input className='signup__email' placeholder='enter your email..'>
                                </input>
                            </div><br />
                            <label>password</label><br />
                            <div className='input__with__icon'>
                                <RiLockPasswordLine />
                                <input className='signup__password' placeholder='enter your password..'>
                                </input>
                            </div><br />
                            <label>confirm password</label><br />
                            <div className='input__with__icon'>
                                <RiLockPasswordLine />
                                <input className='signup__password' placeholder='confirm your password..'>
                                </input>
                            </div><br />
                            <button type='submit' className='signup__submit__button'>Signup</button>
                        </form>
                    </div>
                </div>
    </div>
  )
}

export default LoginSignUp