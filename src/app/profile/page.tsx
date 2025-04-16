import Image from "next/image"
import Form from 'next/form'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Profile</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 bg-gray-300 flex-col  gap-4 p-4">
           
           <div className="flex gap-4 m-auto">
 {/* container1 */}
                <div className="h-[28rem] w-[17rem] rounded-md bg-white ">
                   <div className="rounded-full bg-gray-300 h-16 w-16 mt-5 m-auto"></div>
                     <div className="grid mt-6 place-content-center">
                        <button className="text-center h-8 place-content-center m-auto  bg-gray-300 p-1 border-1 border-slate-900/10 font-semibold">
                            Choose a file
                        </button>
                     </div>

                     <div className="grid place-content-center m-auto mt-6">
                        <button className="text-center grid place-content-center hover:bg-red-600/90 cursor-pointer m-auto rounded-md w-[7rem] h-10  text-white bg-red-500 p-1 border-1 border-slate-900/10 font-semibold">
                            Upload
                        </button>
                        <h1 className="text-center font-semibold">
                            MISS JANE FRANCIS
                        </h1>

                        <div className="flex gap-2 mt-5 font-semibold">
                            <h1>Admission number:</h1>
                            <h2 className="text-gray-400">0000</h2>
                        </div>

                        <div className="flex gap-2 font-semibold">
                            <h1>Class:</h1>
                            <h2 className="text-gray-400">basic 3</h2>
                        </div>

                        <div className="flex gap-2 font-semibold">
                            <h1>Category:</h1>
                            <h2 className="text-gray-400">Day</h2>
                        </div>

                        <div className="flex gap-2 font-semibold">
                            <h1>Address:</h1>
                            <h2 className="text-gray-400">EN-002-222</h2>
                        </div>



                     </div>

                     {/* forms (contains details of students to be uploaded) */}
             

                </div>


{/* container2 */}
                <div className="h-[28rem] w-[34rem] rounded-md bg-white ">
                        <div className="flex m-auto place-content-center mt-4 gap-3">
                           <button className="bg-blue-400 w-[16rem] text-white rounded-sm">About</button>
                           <button className="bg-blue-200 w-[16rem] rounded-sm">Settings</button>
                        </div>
                               {/* forms */}



                </div>

           </div>
        



        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
