"use client";

import { Button, Spacer } from "@nextui-org/react";

export function Hero({
  organizedDir,
  unorganizedDir,
}: Readonly<{
  organizedDir: string;
  unorganizedDir: string;
}>) {
  return (
    <section className={"absolute top-0 left-0 w-full bg-white px-8"}>
      <h1 className={"text-3xl font-bold text-center pt-10"}>Welcome to Media Harmonizer</h1>
      <p className={"text-center text-lg pt-5 px-4"}>
        This is a simple web application that allows you to organize your media files.
      </p>
      <p className={"text-center text-lg pt-5 px-4"}>
        In order to use this application, you should have set your organized and unorganized media directories.
      </p>
      <p className={"text-center text-lg pt-5 px-4"}>
        Organized directory: <span className={"text-sm font-bold"}>{organizedDir}</span>
        <Spacer y={"2"} />
        Unorganized media directory: <span className={"text-sm font-bold"}>{unorganizedDir}</span>
      </p>
      <p className={"text-center text-lg pt-5 px-4"}>
        If these look good, you can start organizing your media files by clicking the button below.
      </p>
      <p className={"text-center text-lg pt-5 px-4"}>
        If not, you can change your directories in the .env file and restart the application.
      </p>
      <div className={"w-full flex justify-center py-10"}>
        <Button
          className={
            "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold p-6 px-12 w-2/3 md:w-fit"
          }
        >
          Continue
        </Button>
      </div>
    </section>
  );
}
