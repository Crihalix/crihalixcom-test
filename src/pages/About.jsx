import React from 'react';
import PropTypes from 'prop-types';

function About(props) {
    return (
        <main id="about">
            <h1 className="mdc-typography--display1">{props.title}</h1>
            <p className="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet nostrum blanditiis omnis ipsam voluptate aliquid qui, labore voluptas. Quae est quia, sapiente dolorum dolore debitis animi nobis autem atque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eum eveniet provident ut dicta asperiores voluptatem esse sed adipisci saepe optio placeat, id libero, ducimus at ratione eos quidem ab?</p>
            <p className="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi alias officiis porro. Facere, odio nulla modi veniam consequatur! Unde, ipsam, accusantium. Accusamus ipsam soluta velit dolor animi incidunt doloremque quis?</p>
        </main>
    );
}

About.propTypes = {
    title: PropTypes.string.isRequired
}

export default About;