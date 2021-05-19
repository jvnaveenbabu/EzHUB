import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieIcon from "@material-ui/icons/Movie";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#141b29", //#141b29
    zIndex: 100,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Trending"
        className="btn"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Movies"
        className="btn"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Series"
        className="btn"
        icon={<LiveTvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        label="Search"
        className="btn"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
