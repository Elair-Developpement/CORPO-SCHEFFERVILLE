"use client";

import { useTranslations } from "next-intl";

import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BusinessCard from "@/app/business/(components)/businessCard";

export default function BusinessDirectorySearch() {
  const t = useTranslations("business");

  const [searchTerm, setSearchTerm] = useState("");
  const [businesses, setBusinesses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const supabase = await createClient();
      const { data, error, count } = await supabase
        .from("companies")
        .select("*", { count: "exact" })
        .order(`name`, { ascending: true })
        .or(`name.ilike.%${searchTerm}%,category.ilike.%${searchTerm}%`)
        .range((page - 1) * 10, page * 10 - 1);

      if (error) {
        console.error("Error fetching businesses:", error);
      } else {
        setBusinesses(data);
        // Assuming total count is returned in the response
        setTotalPages(Math.ceil(count / 10));
      }
    };

    fetchBusinesses();
  }, [searchTerm, page]);

  return (
    <div className="container mx-auto p-4">
      <Input
        type="text"
        placeholder={t("directory-search")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {businesses.length !== 0 ? (
        <>
          <Pagination className="mt-2">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="hover:cursor-pointer"
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  {page === index + 1 ? (
                    <PaginationLink
                      onClick={() => setPage(index + 1)}
                      className="hover:cursor-pointer"
                      isActive
                    >
                      {index + 1}
                    </PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={() => setPage(index + 1)}
                      className="hover:cursor-pointer"
                    >
                      {index + 1}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="hover:cursor-pointer"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <div className="md:grid md:grid-cols-2 md:grid-rows-5 md:grid-flow-col items-center">
            {businesses.map((business) => (
              <BusinessCard key={business.id} {...business} />
            ))}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="hover:cursor-pointer"
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  {page === index + 1 ? (
                    <PaginationLink
                      onClick={() => setPage(index + 1)}
                      className="hover:cursor-pointer"
                      isActive
                    >
                      {index + 1}
                    </PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={() => setPage(index + 1)}
                      className="hover:cursor-pointer"
                    >
                      {index + 1}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="hover:cursor-pointer"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : searchTerm === "" ? (
        <p className="mt-4">{t("directory-loading")}</p>
      ) : (
        <p className="mt-4">{t("directory-no-results")}</p>
      )}
    </div>
  );
}
