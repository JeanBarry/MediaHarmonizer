"use client";

import React, { useEffect, useState } from "react";

export function FirstDisplayWrapper({
  children,
  agreement,
}: Readonly<{
  children: React.ReactNode;
  agreement: boolean;
}>) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem("agreement");
    if (!hasAgreed) {
      setRender(true);
    }

    if (agreement) {
      localStorage.setItem("agreement", "true");
      setRender(false);
    }
  }, [agreement]);

  return <>{render && children}</>;
}
