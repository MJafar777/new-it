import { Box, Skeleton, styled } from "@mui/material";
import React from "react";

const SkeletonImg = () => {
  const SekeletonImg = styled(Skeleton)(({ theme }) => ({
    width: "410px",
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "350px",
    },
  }));

  return (
    <div>
      <SekeletonImg
        style={{ borderRadius: "10px" }}
        animation="wave"
        variant="rectangular"
      />
      <Box display="flex" mt={1} gap={1}>
        <Skeleton
          style={{ borderRadius: "10px" }}
          animation="wave"
          variant="rectangular"
          width={85}
          height={85}
        />
        <Skeleton
          style={{ borderRadius: "10px" }}
          animation="wave"
          variant="rectangular"
          width={85}
          height={85}
        />
        <Skeleton
          style={{ borderRadius: "10px" }}
          animation="wave"
          variant="rectangular"
          width={85}
          height={85}
        />
      </Box>
    </div>
  );
};

export default SkeletonImg;
