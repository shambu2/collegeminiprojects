import LeftPanel from "@/components/home/left-panel";
import Image from "next/image";
import profilePicture from "/public/imageprofile.jpeg";
import { Video, X } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="m-5">
      <div className="flex  overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel">
        {/* Green background decorator for Light Mode */}
        <div className="fixed top-0 left-0 w-full h-36 bg-green-primary dark:bg-transparent -z-30" />
        <LeftPanel />
        <div className="w-full">
          <div className="flex  border-b-2 border-gray-600 w-auto justify-between gap-10 items-center  pl-4 mb-4 ">
            <div>
              <Image
                src={profilePicture}
                width={50}
                height={50}
                alt="Picture of the author"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold  justify-between text-start text-nowrap text-xl pt-2 ">
                John paul
              </p>
            </div>
            <div className=" ">
              <Link href="/video-call">
              <Video size={23} className="mr-10" />
              </Link>
              
            </div>
            
          </div>
          <div>
              <p>the end of it</p>
            </div>
        </div>
      </div>
    </main>
  );
}
