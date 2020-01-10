import React from 'react'

import styles from './Wapper.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Wapper = ({children}) => {
  return (
    <div className={cx('wapper')} >
      {children}
    </div>
  )
}

export default Wapper
