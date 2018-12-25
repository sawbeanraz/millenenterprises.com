import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Jumbotorn = ({
  image,
  title,
  text,
  id,
}) => (
  <section
    className="jumbotorn"
    style={{ backgroundImage: `url(${image})` }}
    id={id}
  >
    <div className="content">
      {title && <h1 className="display-1 jumbotorn__title">{title}</h1>}
      {text && <p className="lead font-weight-normal">{text}</p>}
      <Link className="btn btn-outline-light" to="#about">
        Learn more
      </Link>
    </div>
  </section>
);

Jumbotorn.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Jumbotorn;
