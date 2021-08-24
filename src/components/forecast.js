import axios from "axios";
import React, { useState } from "react";
import Input from "@material-ui/core/Input";

const Forecast = input => {
  const baseURL =
    "https://api.weatherbit.io/v2.0/current?key=e29b73c4b6ca4b6086a4feed4ebbf08f";

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL + "&city=" + input).then(response => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return post;
};

const WeatherSearch = () => {
  const handleChange = event => {
    return Forecast(event.target.value);
  };
  return <Input value={"Mars,TX"} onChange={handleChange} />;
};

export { Forecast, WeatherSearch };
