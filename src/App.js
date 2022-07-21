import { Grid } from "@mui/material";
import Layout from "./components/Layout";
import BodyFormContainer from "./containers/BodyForm.container";

import CardForm from "./containers/Card.form";

function App() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BodyFormContainer />
        </Grid>
        <Grid item xs={6}>
          <CardForm />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
