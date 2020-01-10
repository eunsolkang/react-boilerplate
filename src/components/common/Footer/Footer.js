import React from 'react'
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import Wapper from 'components/common/Wapper'
class Footer extends React.Component {
  render () {
    return(
      <Wapper>
        <footer>
          푸터
        </footer>
      </Wapper>

    )
  }
}

export default Footer;
