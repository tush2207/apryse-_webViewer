import React, { useMemo, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import useFileEditor from "./useFileEditor";
import { FILES_LIST } from "../config/constants";

const FileEditor = () => {
  // Ref to the WebViewer component
  const viewerRef = useRef(null);
  // State variables
  const { selectedPDF, handleRowClick } = useFileEditor(viewerRef);

  // Generate the list of PDF files to display in the Contracts List
  const pdfFiles = useMemo(
    () =>
      FILES_LIST?.map((file) => (
        <Box key={file.name} onClick={() => handleRowClick(file.url)}>
          <Typography variant="h6" style={{ cursor: "pointer" }}>
            <li>{file.name}</li>
          </Typography>
        </Box>
      )),
    [handleRowClick]
  );
  return (
    <>
      <Box
        className="webviewer"
        ref={viewerRef}
        style={{ width: "75%", height: "90vh", position: "relative" }}
      />
      <Stack width="25%" ml={10}>
        <Typography variant="h4">Contracts List</Typography>
        {pdfFiles}
      </Stack>
    </>
  );
};

export default FileEditor;
