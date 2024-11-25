"use client";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    if (pageNumber == 1) {
      params.delete("page");
    }
    return `${pathname}?${params.toString()}`;
  }

  return (
    <>
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageUrl(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <p>{currentPage}</p>
        <PaginationArrow
          direction="right"
          href={createPageUrl(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const styles = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md border",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon = direction === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />;

  return isDisabled ? (
    <div className={styles}>{icon}</div>
  ) : (
    <Link href={href} className={styles}>{icon}</Link>
  )
}
