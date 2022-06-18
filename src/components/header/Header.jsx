import React from 'react'
import logo from '../../assets/images/logo.svg'
import basket from '../../assets/images/basket.svg'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className={s.menu}>
                <div>
                    <NavLink to='/'>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className={s.basket}>
                    <NavLink to='/basket'>
                        <img src={basket} alt="basket" />
                    </NavLink>
                    <span>
                        1205 руб.
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header