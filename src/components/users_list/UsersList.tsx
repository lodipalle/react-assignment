import React, { FunctionComponent, useState, useEffect, Fragment } from "react";
import {
  Button,
  CircularProgress,
  List,
  Typography,
  Divider
} from "@material-ui/core";
import { useQuery } from "react-query";

import SingleUser from "../single_user/SingleUser";

import { fetchUser } from "../../services/fetchUser";

import User from "../../types/user.interface";
import { styles } from "./UsersList.style";

const UsersList: FunctionComponent = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const { data, status, refetch } = useQuery("user", fetchUser);

  const style = styles();

  useEffect(() => {
    if (data && data.data) {
      const loadedUsers: User[] = [...usersList];
      const tempUser: any = data.data.results[0];
      const newUser: User = {
        firstName: tempUser.name.first,
        lastName: tempUser.name.last,
        profile: tempUser.picture.thumbnail,
        address: {
          state: tempUser.location.state,
          country: tempUser.location.country
        }
      };

      loadedUsers.unshift(newUser);
      setUsersList(loadedUsers);
    }
  }, [data]);

  return (
    <div className="users-list">
      <Typography component="h1" variant="h4" color="textPrimary">
        Available Users
      </Typography>
      <Button
        variant="contained"
        color="primary"
        disabled={status === "loading"}
        onClick={() => {
          refetch();
        }}
      >
        Load Another User
        {status === "loading" && <CircularProgress size={15} />}
      </Button>
      <List className={style.root}>
        {usersList.map((user, index) => (
          <Fragment key={index}>
            <SingleUser user={user} />
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
      {usersList.length === 0 && (
        <Typography component="p" variant="h6" color="textPrimary">
          There is no user to display
        </Typography>
      )}
    </div>
  );
};
export default UsersList;
