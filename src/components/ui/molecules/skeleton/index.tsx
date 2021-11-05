import React, { Fragment } from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const YSkeleton = (): JSX.Element => {
  return (
    <Fragment>
      <Stack>
        <Skeleton animation={false} variant="rectangular" height={100} />
        <Skeleton
          animation={false}
          variant="rectangular"
          height={1}
          sx={{ bgcolor: "grey.400" }}
        />
        <Skeleton animation={false} variant="rectangular" height={400} />
      </Stack>
    </Fragment>
  );
};

export default YSkeleton;
