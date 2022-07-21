import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import CardForm from "../Card.form";


//card Container
const CardContainer = ({ children, backgroundImage }) => {
  return (
    
      <Card
        sx={{
          width: "100%",
          height: "100%",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:`url(${backgroundImage})`,backgroundSize: "cover",backgroundPosition: "center",
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    
  );
};

export default CardContainer;
