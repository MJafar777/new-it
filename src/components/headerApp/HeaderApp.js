import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "./images/logo.svg";
import "./headerApp.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Call } from "@mui/icons-material";
import { FormControlLabel, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

// import ImgCall from "../../img/Vector.svg";
// import ImgCall2 from "../../img/call2.svg";
// import ImgCall3 from "../../img/call3.svg";
// import ImgTg from "../../img/tg.svg";

const pages = ["Акции", "Vacancy", "Контакты"];

const HeaderApp = () => {
  const [selectValue, setSelectValue] = React.useState("Uz");

  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="header-container">
          <img className="logo" width="180px" alt="logo" src={Logo} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              margin: "0 3% 0 13%",
            }}
          >
            {pages.map((page, i) => (
              <>
                {i === 0 ? (
                  <>
                    <Button
                      key={page}
                      // onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        mx: 1,
                        color: "red",
                        display: "flex",
                        // fontSize: "14px",
                        alignItems: "center",
                        transition: "1s",
                        ":hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Typography variant="p" component="div">
                        {page}
                      </Typography>
                    </Button>
                  </>
                ) : (
                  <Button
                    key={page}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 1,
                      fontSize: "14px",
                      color: "black",
                      display: "flex",
                      transition: "1s",
                      ":hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Typography variant="p" component="div">
                      {page}
                    </Typography>
                  </Button>
                )}
              </>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Call
              sx={{
                color: "blue",
                fontSize: 18,
              }}
            />
            <Typography
              component="div"
              variant="p"
              sx={{
                fontSize: "15px",
                marginLeft: "5px",
                // width: "150px",
              }}
            >
              +38 (056) 767-23-25
            </Typography>
            <Box
              sx={{
                marginRight: 1,
              }}
            ></Box>
          </Box>
          <Select
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <MenuItem value="Uz">Uz</MenuItem>
            <MenuItem value="Py">Py</MenuItem>
            <MenuItem value="En">En</MenuItem>
          </Select>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // border: "1px solid ",
              padding: "5px 10px",
              borderRadius: "18px",
              borderBottom: '1px solid'
            }}
          >
            <PermIdentityIcon
              sx={{
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Запросит званок
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderApp;
