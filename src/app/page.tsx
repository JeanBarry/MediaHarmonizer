import { Instructions } from "@/components/landing/instructions";

export default function Home() {
  const organizedDir = process.env.NEXT_PUBLIC_ORGANIZED_DIR;
  const unorganizedDir = process.env.NEXT_PUBLIC_UNORGANIZED_DIR;

  return (
    <main className={"light h-full w-full relative"}>
      <Instructions organizedDir={organizedDir} unorganizedDir={unorganizedDir} />
    </main>
  );
}
