import React from "react";
import { Button, Modal, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Close } from "@mui/icons-material";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";

const ModalContainer = () => {
  const [open, setOpen] = React.useState(false);

  const StyleModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      display: "flex",
      postion: "sticky",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
      marginLeft: "10px",
    },
  }));

  return (
    <>
      <Button
        sx={{ color: "#2ECC71" }}
        variant="outlined"
        onClick={(e) => setOpen(true)}
      >
        <VerifiedUserTwoToneIcon style={{ color: "#2ECC71" }} />
        Shoppping kafolati
      </Button>
      <StyleModal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={800} height={400} bgcolor="white" p={3} borderRadius={5}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h6" fontWeight="500" color="#2d3092">
                Shoppping kafolati nima?
              </Typography>
              <Typography fontWeight="400" color="#2d3092">
                0% ortiqcha to'lov, 0% komissiya, tezkor qaror. Minimal buyurtma
                miqdori UZS 150000
              </Typography>
            </Box>
            <Close
              onClick={(e) => setOpen(false)}
              sx={{ cursor: "pointer", color: "#808080" }}
            />
          </Box>
        </Box>
      </StyleModal>
    </>
  );
};

export default ModalContainer;
