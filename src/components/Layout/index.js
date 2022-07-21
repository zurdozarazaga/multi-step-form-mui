import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer";
import Header from "../Header";
import { Container, Stack } from "@mui/material";

function Layout({ children }) {
  return (
    <Container sx={{ background: "whitesmoke", }}>
      <Header />
        {children}
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
