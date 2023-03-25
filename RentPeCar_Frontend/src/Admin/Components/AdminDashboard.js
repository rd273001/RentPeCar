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
// import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";



import Homefragment from "../Fragments/Homefragment";
// import Restaurantfragment from "../Fragment/Restaurantfragment";
// import Orderfragment from "../Fragment/orderfragment";
// import Deliveryboyfragment from "../Fragment/deliveryboyfragment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useState } from "react";

import Logout from "../Fragments/Logout";
import Employees from "../Fragments/Employees";
import Users from "../Fragments/Users";
import Bookings from "../Fragments/Bookings";
import EmployeeDashboard from "../../Employee/Components/EmployeeDashboard";
import Feedback from "../../../src/Feedback/component/feedback";

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

export default function AdminDashboard() {
  const history = useHistory();
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));

    if (user === null || user.data.role !== "admin") {
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
      case "Employees":
        return <Employees />;
        case "Users":
          return <Users />;
      case "Bookings":
        return <Bookings />;
      case "Logout":
        return <Logout />;
        case "Feedback":
        return <Feedback />;
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
            <strong>Admin Dashboard</strong>
          </Typography>
          <Typography>
            <SupervisorAccountIcon />
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
            <ListItem button onClick={(e) => setfragment("Employees")}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItem>
 

            <ListItem button onClick={(e) => setfragment("Users")}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>



            <ListItem button onClick={(e) => setfragment("Bookings")}>
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText primary="Total Bookings" />
            </ListItem>
            
            
            {/*<ListItem button onClick={(e) => setfragment("Deliveryboy")}>
              <ListItemIcon>
                <DirectionsBikeIcon />
              </ListItemIcon>
              <ListItemText primary="Delivery Boy" />
            </ListItem>
            <Divider /> */}

<ListItem
              style={{ position: "relative", bottom: "0" }}
              button
              onClick={(e) => setfragment("Feedback")}
            >
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItem>
                     

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
