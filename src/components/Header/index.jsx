import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

import "./header.scss";
import { NavLink } from "react-router-dom";
Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <div className="header__title-left">
              <img
                className="header__img"
                src="https://media.istockphoto.com/photos/speech-bubble-with-social-network-like-icons-picture-id1202912871?b=1&k=20&m=1202912871&s=170667a&w=0&h=UYa1hEM5dUJzuihXpf0WDUguDbF7yfBbKZKPtBoFv1w="
                alt=""
              />
              <a
                className="header__link header__title"
                href="https://github.com/ThanhTai46/ThanhTai46"
                target="_blank"
                rel="noopener noreferrer"
              >
                Photo App
              </a>
            </div>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
