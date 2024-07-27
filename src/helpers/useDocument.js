import React, { useEffect } from "react";

export default function useDocument(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}
