import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
  ];
};

export default function Index() {
  return (

    <>
      
      <h1>hellow</h1>
      <Link to="/about">Dashboard</Link>
      <Link to="/contact">go to contact</Link>
      
      
    </>
    
  );
}
