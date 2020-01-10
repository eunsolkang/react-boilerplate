import React from 'react'
import styles from './Header.modules.scss';
import classNames from 'classnames/bind';
import { NavLink, Link } from 'react-router-dom'
import Wapper from 'components/common/Wapper'

const cx = classNames.bind(styles);


const Header = () => {

  return (
    <Wapper>
      <header className={cx('header')}>
        Header
      </header>
    </Wapper>

  )
}

export default Header
