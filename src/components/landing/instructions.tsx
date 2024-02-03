"use client";

import { FirstDisplayWrapper } from "./first-display-wrapper";
import { Hero } from "./hero";

import { useState } from "react";

export function Instructions({
  organizedDir,
  unorganizedDir,
}: Readonly<{
  organizedDir: string;
  unorganizedDir: string;
}>) {
  const [agreement, setAgreement] = useState<boolean>(false);
  return (
    <FirstDisplayWrapper agreement={agreement}>
      <Hero organizedDir={organizedDir} unorganizedDir={unorganizedDir} setAgreement={setAgreement} />
    </FirstDisplayWrapper>
  );
}
