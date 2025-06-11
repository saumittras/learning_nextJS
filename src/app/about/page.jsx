'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
  const routerX = useRouter();
  const isLoggedin = false;
  const handleNavigation = () => {
    if(isLoggedin){
      routerX.push("/about/address")
    }else{
      routerX.push("/")
    }
  };
  return (
    <div>
      <h2 className="text-5xl">About Pages </h2>
      <Link href="/about/address">Address</Link>
      <br />
      <button className="btn" type="button" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
}
