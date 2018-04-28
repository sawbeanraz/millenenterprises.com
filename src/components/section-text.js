import React from 'react';
import PropTypes from 'prop-types';


const SectionText = ({id, title, content, shaded}) => (



  <section className={shaded?'page-section grey':'page-section'} id={id}>
    <div className="container">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML = {{ __html: content}} />
    </div>
  </section>
)

SectionText.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  shaded: PropTypes.bool
}

export default SectionText;