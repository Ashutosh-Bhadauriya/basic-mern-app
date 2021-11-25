import React from "react";
import { Card, Typography } from "@material-ui/core";

import { useDispatch } from "react-redux";

import useStyles from "./styles";

const Form = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Card className={classes.card}>
      <div>
        <Typography variant="text">{post.name}</Typography>

        <Typography gutterBottom variant="h6" component="h2">
          {post.title}
        </Typography>
      </div>
    </Card>
  );
};

export default Form;
