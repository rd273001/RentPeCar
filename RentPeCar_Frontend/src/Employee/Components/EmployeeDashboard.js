import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Homefragment from "../Fragments/Homefragment";
import CarFragment from "../Fragments/CarFregment";

// import Restaurantfragment from "../Fragment/Restaurantfragment";
// import Orderfragment from "../Fragment/orderfragment";
// import Deliveryboyfragment from "../Fragment/deliveryboyfragment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useState } from "react";
import Logout from "../Fragments/Logout";
import Bookings from "../Fragments/Bookings";
import CarTypeFragment from "../Fragments/CarTypeFragment";
import CarCategoriesFragment from "../Fragments/CarCategoriesFragment";
import DriverFragment from "../Fragments/DriverFragment";
//import NewBookingsFragment from "../Fragments/NewBookingFragment";

import { DirectionsCarRounded } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "black",
    color: "rgb(255, 64, 0);",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(),
  },
}));

export default function EmployeeDashboard() {
  const history = useHistory();
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));

    if (user === null || user.data.role !== "employee") {
      history.push("/error");
      //history.goBack();
    } else return;
  }, []);

  const classes = useStyles();

  const [fragment, setfragment] = useState("HOME");

  const loadFragment = () => {
    switch (fragment) {
      case "HOME":
        return <Homefragment />;
      case "Bookings":
        return <Bookings />;

        case "CarTypesFragment":
          return <CarTypeFragment />;
    
      case "Logout":
        return <Logout />;

        case "CarCategoriesFragment":
          return < CarCategoriesFragment />
        case "DriverFragment":
        return <DriverFragment/>
         case "CarFragment":
           return <CarFragment />;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            <strong>Employee Dashboard</strong>
          </Typography>
          <Typography>
            <SupervisorAccountIcon style={{color:"white",fontSize:"30px",margine:"20px"}}/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List style={{ position: "absolute" }}>
            <ListItem button onClick={(e) => setfragment("HOME")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={(e) => setfragment("Bookings")}>
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText primary="Total Bookings" />
            </ListItem>
            <ListItem button onClick={(e) => setfragment("CarTypesFragment")}>
              <ListItemIcon>
                <DirectionsCarRounded />
              </ListItemIcon>
              <ListItemText primary="Car Types" />
            </ListItem>

            <ListItem button onClick={(e) => setfragment("CarCategoriesFragment")}>
              <ListItemIcon>
                <DirectionsCarRounded />
              </ListItemIcon>
              <ListItemText primary="Car Categories" />
            </ListItem>

            <ListItem button onClick={(e) => setfragment("DriverFragment")}>
              <ListItemIcon>
                <DirectionsCarRounded />
              </ListItemIcon>
              <ListItemText primary="Driver" />
            </ListItem>

             <ListItem button onClick={(e) => setfragment("CarFragment")}>
              <ListItemIcon>
                <DirectionsCarRounded />
              </ListItemIcon>
              <ListItemText primary="Cars" />
            </ListItem>
            <Divider />
            <ListItem
              style={{ position: "relative", bottom: "0" }}
              button
              onClick={(e) => setfragment("Logout")}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {loadFragment()}
      </main>
    </div>
  );
}
