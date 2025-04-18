import Image from "next/image"

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
                <BreadcrumbPage>Subjects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 bg-gray-300 flex-col  gap-4 p-4">
        <div className="bg-muted/50 bg-purple-800 min-h-[100vh] flex-1 flex rounded-xl md:min-h-min">
         <div className="grid">
            <h1 className="text-white font-semibold p-4 text-[20px]">HELLO MR. CLEMENT JOSIAH</h1>
              <p className="text-white font-semibold mt-[-11rem] p-4 text-[14px]">Phone number: +233541833813</p>
         </div>
    {/* image */}
                         <Image
                            src="/img4.png"
                            width={200}
                            height={200}
                            alt=""
                            className="object-contain place-content-end items-end absolute mt-10 ml-[60rem] "
                          />
        </div> 
          <div className="grid auto-rows-min  gap-4 md:grid-cols-3">
            <div className="bg-muted/50 bg-white aspect-video rounded-xl" />
            <div className="bg-muted/50 bg-white aspect-video rounded-xl" />
            <div className="bg-muted/50 bg-white aspect-video rounded-xl" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
