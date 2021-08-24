import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Typography from "@material-ui/core/Typography";
import ExploreIcon from "@material-ui/icons/Explore";
import Input from "@material-ui/core/Input";

const App = () => {
  const [location, setLocation] = useState(null);
  const [post, setPost] = React.useState(null);
  const baseURL =
    "https://api.weatherbit.io/v2.0/current?key=e29b73c4b6ca4b6086a4feed4ebbf08f";

  const Forecast = input => {
    React.useEffect(() => {
      axios.get(baseURL + "&city=" + input).then(response => {
        setPost(response.data);
        console.log(response.data);
      });
    }, []);

    return post;
  };

  const handleChange = event => {
    setLocation(event.target.value);
    axios.get(baseURL + "&city=" + location).then(response => {
      setPost(response.data);
      console.log(response.data);
    });
  };

  if (!post)
    return (
      <div className="App">
        <Grid container direction="column" spacing={1} maxWidth="xs">
          <Grid item>
            <Typography align="left">
              <CircularProgress />
            </Typography>
          </Grid>
          <Grid container item direction="row" spacing={1} maxWidth="xs">
            <Grid item>
              <WbSunnyIcon color="primary" />
            </Grid>
            <Grid item>
              <Typography>
                <CircularProgress />
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={1}>
            <Grid item>
              <ExploreIcon color="primary" />
            </Grid>
            <Grid item>
              <Input value={location} onChange={handleChange} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );

  return (
    <div className="App">
      <Grid container direction="column" spacing={1} maxWidth="xs">
        <Grid item>
          <Typography align="left">
            {post.data[0].city_name}, {post.data[0].state_code}
          </Typography>
        </Grid>
        <Grid container item direction="row" spacing={1} maxWidth="xs">
          <Grid item>
            <WbSunnyIcon color="primary" />
          </Grid>
          <Grid item>
            <Typography>{post.data[0].temp} C</Typography>
          </Grid>
        </Grid>
        <Grid container item direction="row" spacing={1}>
          <Grid item>
            <ExploreIcon color="primary" />
          </Grid>
          <Grid item>
            <Input value={location} onChange={handleChange} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
