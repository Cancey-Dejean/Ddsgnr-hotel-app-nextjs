"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export function PaginationBlock({
  maxPages,
  numberOfPosts,
}: {
  maxPages: number
  numberOfPosts: number
}) {
  const pathName = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const [pageNum, setPageNum] = useState(1)

  const previousPage = () => {
    setPageNum((prev) => prev - 1)
    const params = new URLSearchParams(searchParams)
    params.set("page", (pageNum - 1).toString())
    replace(`${pathName}?${params}`)
  }

  const nextPage = () => {
    setPageNum((prev) => prev + 1)
    const params = new URLSearchParams(searchParams)
    params.set("page", (pageNum + 1).toString())
    replace(`${pathName}?${params}`)
  }

  return (
    <Pagination>
      <PaginationContent>
        {pageNum > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious onClick={previousPage} />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink>{pageNum}</PaginationLink>
            </PaginationItem>
          </>
        )}

        {pageNum < numberOfPosts && (
          <PaginationItem>
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        )}

        {/* {numberOfPosts}
        <span className="text-red-500">{pageNum}</span> */}
      </PaginationContent>
    </Pagination>
  )
}
