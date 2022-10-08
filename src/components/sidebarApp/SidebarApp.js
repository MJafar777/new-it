import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import { categoryLink } from "./SidebarData";
// import SidebarCategory from "./SidebarCategory";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { editDataIndex } from "../redux/testsSlice";
import "./sidebarApp.css";
import SidebarAppPhone from "./SidebarAppPhone";
import { Clear } from "@mui/icons-material";
import { Link } from "react-router-dom";
const drawerWidth = 240;

export default function SidebarApp() {
  // editDataIndex
  const indexData = useSelector((state) => state.test.dataIndex);
  console.log(indexData);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box role="presentation">
      <Divider />
      <List>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer
            className="sidebar-drawer "
            sx={{
              flexShrink: 0,
              width: '100%',
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                width: "100%",
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {categoryLink.map((text, textI) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ textAlign: "center", marginY: 2 }}
                  >
                    {text.nameChap}
                  </Typography>
                  {textI === 0 && (
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: -20,
                        right: 0,
                        color: "red",
                      }}
                      onClick={toggleDrawer(anchor, false)}
                    >
                      <Clear />
                    </IconButton>
                  )}
                  {text.categoryChap.map((item, i) => {
                    return (
                      <>
                        <SidebarAppPhone data={item} i={i} />
                      </>
                    );
                  })}
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>

          <Drawer
            sx={{
              flexShrink: 0,
              width: 400,
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                width: 400,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {categoryLink.map((text, textI) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ textAlign: "center", marginY: 2 }}
                  >
                    {text.nameChap}
                  </Typography>
                  {textI === 0 && (
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: -20,
                        right: 0,
                        color: "red",
                      }}
                      onClick={toggleDrawer(anchor, false)}
                    >
                      <Clear />
                    </IconButton>
                  )}

                  {text.categoryChap.map((item, i) => {
                    return (
                      <>
                        <ListItemButton
                          className="sidebar-catalog-card"
                          key={i}
                          onMouseEnter={(e) => dispatch(editDataIndex(item.id))}
                          sx={{
                            display: "block",
                            marginX: 6,
                            background:
                              indexData === item.id && item.id < 27
                                ? "blue"
                                : "none",
                            borderRadius: 5,
                            color:
                              indexData === item.id && item.id < 27
                                ? "#fff"
                                : item.id > 26
                                ? "blue"
                                : "black",
                            ":hover": {
                              background: item.id < 27 ? "blue" : "none",
                            },
                          }}
                        >
                          <ListItemText
                            primary={
                              <Typography component="div" variant="p">
                                {item.name}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </>
                    );
                  })}
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <Box
            component="main"
            className="sidebar-category-card"
            sx={{
              display: indexData > 26 ? "none" : "block",
              flexGrow: 1,
              bgcolor: "background.default",
              marginLeft: indexData > 26 && -20,
              p: 1,
            }}
          >
            <Toolbar />
            {categoryLink.map((category, indexC) => {
              return category.categoryChap.map((category2, indexC2) => {
                return (
                  <Box key={indexC2} className="sidebar-grid-card">
                    {category2.id === indexData &&
                      category2.nameCategory &&
                      category2.nameCategory.map((category3, indexC3) => {
                        return (
                          <Box>
                            <Link to={category3.nameLinkTo}>
                            <ListItemButton
                              onClick={toggleDrawer(anchor, false)}
                              key={indexC3}
                              sx={{
                                marginY: 1,
                                color: "rgb(8, 10, 155)",
                              }}
                              >
                              {category3.nameLink}
                            </ListItemButton>
                              </Link>
                            {category3.services &&
                              category3.services.map((category4, indexC) => {
                                return (
                                  <>
                                    <Typography
                                      key={indexC}
                                      component="div"
                                      variant="h6"
                                      sx={{ margin: 2 }}
                                    >
                                      {category4.servicesName}
                                    </Typography>
                                    {category4.servicesLink.map(
                                      (category5, indexC5) => {
                                        return (
                                        <Link to={category5.link}
                                        style={{textDecoration: "none"}}
                                        > <ListItemButton
                                        onClick={toggleDrawer(anchor, false)}
                                            key={indexC5}
                                            sx={{
                                              borderRadius: 5,
                                              color: "rgb(0, 10, 0, 0.5)",
                                              ":hover": {
                                                color: "blue",
                                                
                                              },
                                            }}
                                          >
                                            {category5.nameLinkDepartment}
                                          </ListItemButton>
                                          </Link> 
                                        );
                                      }
                                    )}
                                  </>
                                );
                              })}
                            <Divider />
                          </Box>
                        );
                      })}
                  </Box>
                );
              });
            })}
          </Box>
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box
          onClick={toggleDrawer("left", true)}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid ",
            padding: "5px 15px",
            borderRadius: "18px",
            justifyContent: "center",
          }}
        >
          <MenuIcon
            sx={{
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            Каталог
          </Typography>
        </Box>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
