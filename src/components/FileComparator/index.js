import React, { useRef } from "react";

import { Box } from "@mui/material";

import useFileComparator from "./useFileComparator";

const FileComparator = () => {
  const ComparatorViewerRef = useRef(null);

  useFileComparator(ComparatorViewerRef);

  return (
    <Box
      ref={ComparatorViewerRef}
      display="flex"
      width="100%"
      height="98vh"
      flexDirection="row"
      m={4}
    />
  );
};

export default FileComparator;
