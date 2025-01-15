import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // since we are on the server side, we dont have to useState, useEffect.. we can just fetch data
  // nextjs comes with build in data cache:
  // whenever we fetch some data, nextjs will automatically store it inside data cache which is based on file system
  // so next time we hit the same URL, it wont got to that URL to get the data, it will get the data from data cache
  // we have a full controll over that data cache

  // if we have data that changes frequently, we can disable caching
  // example in second argument of fetch:

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" } // this will disable caching,
    // this is usefull if we have data that changes frequently (in those situations we always want to show fresh data to our users)
    // this is one option

    // the other option is to keep data fresh for certain period of a time:
    // { next: { revalidate: 10 } } // -> this means that nextjs is gonna run a background job and get fresh data every 10 sec
  );
  const users: User[] = await res.json();

  // Statis rendering -> rendering at build time.. if we have pages or components that have static data we can have nextjs render them once when we build our application for production, so next time those pages/components are needed it's not gona rerender them, it's gonna get their payload/content from its cache which is based on file syste,
  // Dynamic rendering -> happends at request time

  return (
    <>
      <h1>Users:</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
