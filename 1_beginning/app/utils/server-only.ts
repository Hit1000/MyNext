import "server-only";

// for server-only utilities
// have to npm install server-only for this to work

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
       use environment variables,
       interact with a database,
       process confidential information`
  );
  return "server result";
};