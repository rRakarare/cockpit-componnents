import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components-v2/ui/breadcrumb"
import React from "react"
  import { Link } from "react-router-dom"
import { LoadingDataIcon } from "./loader"
  
  interface CustomBreadcrumbProps {
    links: {
      href?: string
      text?: string | null
    }[]
  }
  
  export default function CustomBreadcrumb({ links }: CustomBreadcrumbProps) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <BreadcrumbItem>
                {link.href ? (
                  <BreadcrumbLink asChild>
                    <Link to={link.href}>{link.text ? link.text : <LoadingDataIcon className="size-4" />}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{link.text ? link.text : <LoadingDataIcon className="size-4" />}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {i < links.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
  }