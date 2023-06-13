import { Box, Container, Grid, Paper, Typography } from "@mui/material";

function PageOne() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "30vh" }} />
      </Container>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "30vh" }} />
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper>
              <Typography variant="body1">xs=8</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper><Typography variant="caption">xs=4</Typography></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper><Typography variant="h1">xs=4</Typography></Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper><Typography variant="h2">xs=8</Typography></Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PageOne;
