import Link from "next/link"
import { Button } from "../ui/button"
import {Briefcase} from "lucide-react"
export default function Navbar(){

return <>

<nav className=" border-b border-gray-300">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center gap-5 sm:justify-between items-center flex-wrap ">
                <Link href={"/"}>
            <div className="logo flex gap-2 text-primary" >
                <Briefcase/>
                <h1 className="font-bold text-lg">Job Tracker</h1>
            </div>
                </Link>

            <div className="flex gap-4 ">
               <Link href={"/login"}> <Button variant={"outline"} className=" h-9 px-6">Login</Button></Link>
               <Link href={"/signup"}>
                <Button className="bg-primary-color h-9 px-4 py-2  bg-primary hover:bg-primary/90">Start For Free</Button>
               </Link>
            </div>

    </div>



</nav>




</>

}