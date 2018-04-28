import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo-white.svg';

export default class Header extends React.Component {
  constructor(context, props) {
    super(context, props);
    this.state = {
      isAffix: false
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isAffix = window.scrollY > 100;
      if(isAffix !== this.state.isAffix) {
        this.setState({ isAffix })
      }
    })
  }

  render() {
    return (  
      <nav className={this.state.isAffix?'site-navigation affix py-1':'site-navigation py-1'}>
        <div className="container">

          <div className="row justify-content-between">
            <div className="col-5 pt-3 pb-3">
              <Link to="/" className="nav-logo-link">
                <img src={logo} alt="logo"/>
                {this.props.siteTitle}
              </Link>
            </div>
            {this.props.siteMenu?
            <div className="col-5 pt-3 pb-3 d-flex flex-column flex-md-row justify-content-between">
              {this.props.siteMenu.map((item) => (          
                <Link key={item.key} to={item.url}
                  className='nav-item'>
                  {item.title}
                </Link>
              ))}
            </div>:undefined}
          </div>
        </div>
      </nav>      
    )
  }
}