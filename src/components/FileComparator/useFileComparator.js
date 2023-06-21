import { useEffect } from "react";

import WebViewer from "@pdftron/webviewer";

import { green, red } from "@mui/material/colors";

import { WEB_VIEWER_ENTITIES } from "../config/constants";

const useFileComparator = (ComparatorViewerRef) => {
  useEffect(() => {
    WebViewer(
      {
        path: WEB_VIEWER_ENTITIES.PATH,
        licenseKey: WEB_VIEWER_ENTITIES.LICENSE_KEY,
        fullAPI: true,
        disableMultiViewerComparison: true, // Disable default compare buttons
      },
      ComparatorViewerRef?.current
    ).then((instance) => {
      const { UI, Core } = instance;
      const { Annotations } = Core;
      const { Color } = Annotations;

      // 1. Event listener to wait for the multi-viewer to be ready
      UI?.addEventListener(UI.Events.MULTI_VIEWER_READY, () => {
        // 2. Get the document viewers for both sides of the comparison
        const [viewDocumentOne, viewDocumentTwo] = Core.getDocumentViewers();

        // 3. Function to start the comparison
        const compareFiles = async () => {
          // 4. Check if both documents are loaded before comparing
          const shouldCompare =
            viewDocumentOne?.getDocument() && viewDocumentTwo?.getDocument();

          if (shouldCompare) {
            // 5. Define the colors for highlighting differences
            const afterColor = new Color(green[300]);
            const beforeColor = new Color(red[300]);

            const options = { beforeColor, afterColor };

            // 6. Start the semantic diff and get the annotation differences
            const { docOneAnnotations, doc2Annotations, diffCount } =
              await viewDocumentOne?.startSemanticDiff(
                viewDocumentTwo,
                options
              );

            // 7. You can use the annotation differences as needed
            console.log(
              "Annotation Differences on Document 1:",
              docOneAnnotations
            );
            console.log(
              "Annotation Differences on Document 2:",
              doc2Annotations
            );
            console.log("Total Differences Found:", diffCount);
          }
        };

        // 8. Add documentLoaded event listeners to both viewers to trigger the comparison
        viewDocumentOne?.addEventListener("documentLoaded", compareFiles);
        viewDocumentTwo?.addEventListener("documentLoaded", compareFiles);

        // // 9. Load the documents to be compared
        // viewDocumentOne?.loadDocument(
        //   process.env.PUBLIC_URL + "/files/Agreement-Purchase-MBRS-project.pdf"
        // );
        // viewDocumentTwo?.loadDocument(
        //   process.env.PUBLIC_URL + "/files/Agreement-Purchase-MBRS-project.pdf"
        // );
      });

      // 10. Enable the multi-viewer mode
      UI.enableFeatures([UI.Feature.MultiViewerMode]);
    });
  }, [ComparatorViewerRef]);

  return ComparatorViewerRef;
};

export default useFileComparator;
