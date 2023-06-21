import React, { useState } from "react";

import { Box, Button, Divider, Typography } from "@mui/material";

import FileComparator from "./components/FileComparator";
import FileEditor from "./components/FileEditor";

const App = () => {
  // State variables
  const [isComparing, setIsComparing] = useState(false);

  const handleCompare = () => {
    // Toggle the state to start or stop comparing
    setIsComparing(!isComparing);
  };

  return (
    <Box>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" m={2}>
        <Typography variant="h4" fontWeight="bold">
          WebViewer
        </Typography>
        <Button variant="outlined" onClick={handleCompare}>
          Compare file
        </Button>
      </Box>
      <Divider />

      {/* Main content */}
      <Box display="flex" flexDirection="row" mb={2}>
        {!isComparing ? (
          // Display the WebViewer when not comparing
          <FileEditor />
        ) : (
          // Display the Comparator component when comparing
          <FileComparator />
        )}
      </Box>
    </Box>
  );
};

export default App;
