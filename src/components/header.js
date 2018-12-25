import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../assets/images/logo-white.svg';

export default class Header extends React.Component {
  constructor(context, props) {
    super(context, props);
    this.state = {
      isAffix: false,
    };
  }

  componentDidMount() {
    window.document.addEventListener('scroll', () => {
      const affix = window.scrollY > 100;
      const { isAffix } = this.state;
      if (affix !== isAffix) {
        this.setState({ isAffix: affix });
      }
    });
  }

  render() {
    const { isAffix } = this.state;
    const { siteTitle, siteMenu } = this.props;
    return (
      <nav className={isAffix ? 'site-navigation affix py-1' : 'site-navigation py-1'}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-5 pt-3 pb-3">
              <Link to="/" className="nav-logo-link">
                <img src={logo} alt="logo" />
                {siteTitle}
              </Link>
            </div>
            {siteMenu && (
              <div className="col-5 pt-3 pb-3 d-flex flex-column flex-md-row justify-content-between">
                {siteMenu.map(item => (
                  (item.type === 'link') ? (
                    <Link
                      key={item.key}
                      to={item.url}
                      className="nav-item"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <AnchorLink
                      offset={100}
                      className="nav-item"
                      key={item.key}
                      href={item.url}
                    >
                      {item.title}
                    </AnchorLink>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
};
