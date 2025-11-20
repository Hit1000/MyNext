import "client-only";

// This file is only meant to be used in a client-side context
// have to npm install client-only for this to work

export const clientSideFunction = () => {
  console.log(
    `use browser-only APIs,`
  );
  return "client result";
};