import React, { FunctionComponent } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText
} from "@material-ui/core";

import User from "../../types/user.interface";

import { styles } from "./SingleUser.style";

const SingleUser: FunctionComponent<{ user: User }> = ({ user }) => {
  const style = styles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.profile} />
      </ListItemAvatar>
      <ListItemText
        primary={`${user.firstName} ${user.lastName}`}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={style.inline}
              color="textPrimary"
            >
              {`${user.address.state}, ${user.address.country}`}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
export default SingleUser;
