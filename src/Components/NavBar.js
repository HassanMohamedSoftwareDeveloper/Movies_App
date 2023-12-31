import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../Images/logo.png";
import { useDispatch } from "react-redux";
import { GetAllMovies, SearchMovies } from "../Redux/Actions/MoviesAction";

const NavBar = () => {
  const dispatch = useDispatch();

  const search = async (query) => {
    if (query === "") {
      dispatch(GetAllMovies());
    } else {
      dispatch(SearchMovies(query));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => search(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
