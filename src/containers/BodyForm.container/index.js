import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Title from "../../components/Title";
import Description from "../../components/Description";
import CardContainer from "../Card.container";
import ImageBody from "../../assets/images/backgroundImageBody.jpg";

const BodyFormContainer = () => {
  return (
    <CardContainer backgroundImage={ImageBody}>
      <Title />
      <Description />
    </CardContainer>
  );
};

export default BodyFormContainer;
