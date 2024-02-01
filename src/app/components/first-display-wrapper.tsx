"use client";

import React, { useEffect, useState } from "react";

export function FirstDisplayWrapper({
  children,
  displayKey,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    const hasRendered = localStorage.getItem(displayKey);
    if (!hasRendered) {
      setRender(true);
      localStorage.setItem(displayKey, "true");
    }
  }, [displayKey]);

  return <>{render && children}</>;
}
