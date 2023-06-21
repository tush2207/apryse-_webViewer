import { useEffect, useState, useCallback } from "react";

import WebViewer from "@pdftron/webviewer";

import { WEB_VIEWER_ENTITIES } from "../config/constants";

function useFileEditor(viewerRef) {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [response, setResponse] = useState(null);
  const [documentViewer, setDocumentViewer] = useState(null);

  const handleDocumentLoaded = useCallback(
    (documentViewer, annotationManager, Annotations) => {
      const rectangleAnnotate = new Annotations.RectangleAnnotation({
        Author: annotationManager.getCurrentUser(),
      });

      annotationManager.addAnnotation(rectangleAnnotate);
      annotationManager.redrawAnnotation(rectangleAnnotate);
    },
    []
  );

  const handleMouseLeftDown = useCallback(() => {
    console.log("Mouse left button down");
  }, []);

  const handleRowClick = (pdfUrl) => {
    // Set the selected PDF when a row is clicked
    setSelectedPDF(pdfUrl);
  };
  useEffect(() => {
    // Load the selected PDF when it changes
    if (selectedPDF && documentViewer) {
      documentViewer?.loadDocument(selectedPDF).then(() => {});
    }
  }, [selectedPDF, documentViewer]);

  useEffect(() => {
    const initializationConfig = {
      preloadWorker: WebViewer.WorkerTypes.CONTENT_EDIT,
      path: WEB_VIEWER_ENTITIES.PATH,
      licenseKey: WEB_VIEWER_ENTITIES.LICENSE_KEY,
      extension: WEB_VIEWER_ENTITIES.EXTENSION,
    };

    WebViewer(initializationConfig, viewerRef.current).then((instance) => {
      instance.UI.disableElements(["leftPanel", "leftPanelButton"]);
      instance.UI.enableElements(["leftPanel", "leftPanelButton"]);

      const { documentViewer, annotationManager, Annotations } = instance.Core;
      setDocumentViewer(documentViewer);

      instance.UI.enableFeatures([instance.UI.Feature.ContentEdit]);
      instance.UI.disableElements(["toolbarGroup-Shapes"]);

      const handleDocumentLoadedEvent = () => {
        handleDocumentLoaded(documentViewer, annotationManager, Annotations);
        // Set the response state with the documentViewer, annotationManager, and Annotations
        setResponse(documentViewer);
      };
      console.log("resz", response);

      documentViewer?.addEventListener?.(
        "documentLoaded",
        handleDocumentLoadedEvent
      );

      const eventHandler = instance.Core.EventHandler;
      eventHandler?.attach?.("mouseLeftDown", handleMouseLeftDown);
    });
  }, [viewerRef, handleDocumentLoaded, handleMouseLeftDown]);

  // Return the response state along with other values
  return { selectedPDF, handleRowClick, response };
}

export default useFileEditor;
