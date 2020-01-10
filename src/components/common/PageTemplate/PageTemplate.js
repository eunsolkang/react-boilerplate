import React from 'react'

import styles from './PageTemplate.scss'
import classNames from 'classnames/bind'
import HeaderContainer from 'containers/common/HeaderContainer'

import Footer from 'components/common/Footer'



const cx = classNames.bind(styles);



class PageTemplate extends React.Component {
  render () {

    const { children } = this.props;
    return (
      <div className={cx('page-template')}>
          <HeaderContainer/>
          <main>
            {children}
          </main>
          <Footer></Footer>

      </div>
    )
  }
}



export default PageTemplate
