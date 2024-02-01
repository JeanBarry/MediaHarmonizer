import { FirstDisplayWrapper } from "@/app/components/first-display-wrapper";
import { Hero } from "@/app/components/hero";

export default function Home() {
  const organizedDir = process.env.NEXT_PUBLIC_ORGANIZED_DIR;
  const unorganizedDir = process.env.NEXT_PUBLIC_UNORGANIZED_DIR;

  return (
    <main className={"light h-full w-full relative"}>
      {/*<FirstDisplayWrapper displayKey={"hero"}>*/}
      {/*  <Hero organizedDir={organizedDir} unorganizedDir={unorganizedDir} />*/}
      {/*</FirstDisplayWrapper>*/}
      <div>
        Hello, world!
      </div>
    </main>
  );
}
