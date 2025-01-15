import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>

      {/* Navigation implementation: */}
      {/* <a href="/users">Users</a> */}
      {/* not using anchor (<a></a>) tag because in out network tab all the resources gets donwloaded again when we click on the Users tag */}
      {/* this is not the optimal way to implement navigation */}
      {/* as the user navigates from one page to another, we dont want to reload all the repetative parts */}
      {/* we only want to replace the content area */}
      {/* this is where we use Link component in nextjs: */}
      <Link href={"/users"}>Users</Link>
      {/* with Link component we are not redownloading all the fonts, css files, js files.. */}
      {/* this is called client side navigation */}

      <ProductCard />
    </main>
  );
}
