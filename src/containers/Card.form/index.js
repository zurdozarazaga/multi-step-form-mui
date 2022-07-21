import React from "react";
import CardContainer from "../Card.container";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText, Grid, InputLabel, TextField } from "@mui/material";
import InputText from "../../components/InputText";

const CardForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <CardContainer>
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <InputText
              label={"Email Adress"}
              formHelperText={"Ingrese su correo electrónico"}
              variant={'outlined'}
              size={'small'}
              marginVertical={'normal'}
              field={field}
            />
          )}
          name="TextField"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <InputText
              label={"Email Adress"}
              formHelperText={"Ingrese su correo electrónico"}
              variant={'outlined'}
              size={'small'}
              marginVertical={'normal'}
              fullWidth={true}
              field={field}
            />
          )}
          name="TextField"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <InputText
              label={"Email Adress"}
              formHelperText={"Ingrese su correo electrónico"}
              variant={'outlined'}
              size={'small'}
              marginVertical={'normal'}
              field={field}
            />
          )}
          name="TextField"
          control={control}
        />
      </form>
    
    </CardContainer>
  );
};

export default CardForm;
