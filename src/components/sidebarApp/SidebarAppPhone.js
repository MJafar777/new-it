import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import "./sidebarApp.css";

export default function SidebarAppPhone({ data, i }) {
  const [open, setOpen] = React.useState(false);
  console.log(data, "hhh");

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className="sidebar-phone-catalog-card">
      <ListItemButton
        sx={{
          backgroundColor: open && data.id < 27 && "blue",
          color:
            open && data.id < 27 ? "#fff" : data.id > 26 ? "blue" : "black",
          borderRadius: 4,
          ":hover": {
            backgroundColor: open && data.id < 27 && "blue",
          },
        }}
        onClick={handleClick}
      >
        <ListItemText
          sx={{
            marginX: data.id > 26 ? "40px" : "0",
            color:
              open && data.id < 27 ? "#fff" : data.id > 26 ? "blue" : "black",
          }}
          primary={data && data.name}
        />
        {data.id < 27 && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={open && data.id < 27} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box
            sx={{
              padding: "1px 30px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: 1,
            }}
          >
            {data &&
              data.nameCategory &&
              data.nameCategory.map((category3, indexC3) => {
                return (
                  <Box>
                    <ListItemButton
                      key={indexC3}
                      sx={{
                        color: "rgb(8, 10, 155)",
                        borderRadius: 4,
                        marginTop: 3
                      }}
                    >
                      {category3.nameLink}
                    </ListItemButton>
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
                                  <ListItemButton
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
        </List>
      </Collapse>
    </List>
  );
}
