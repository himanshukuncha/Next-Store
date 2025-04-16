import React from "react";
// import db from "@/app/utils/db";

const AboutPage = () => {
  // const profiles = await db.testProfile.create({
  //   data: {
  //     name: "random name ",
  //   },
  // });
  // const users = await db.testProfile.findMany();
  return (
    <div>
      {/* {users.map((user) => {
        return (
          <h2 key={user.id} className="text-2xl font-bold">
            {user.name}
          </h2>
        );
      })} */}
      <section>
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
          We love
          <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
            STORE
          </span>
        </h1>
        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
          distinctio ducimus temporibus nobis autem laboriosam repellat, magni
          fugiat minima excepturi neque, tenetur possimus nihil atque! Culpa
          nulla labore nam?
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
