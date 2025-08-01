"use client";

import {useTranslations} from "next-intl";

import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
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
    const fetchBusinesses = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("companies")
        .select("*")
        .ilike("name", `%${searchTerm}%`)
        .range((page - 1) * 10, page * 10 - 1);

      if (error) {
        console.error("Error fetching businesses:", error);
      } else {
        setBusinesses(data);
        // Assuming total count is returned in the response
        setTotalPages(Math.ceil(data.length / 10));
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
      <div className="md:grid md:grid-cols-2 md:grid-rows-5 md:grid-flow-col mt-4 items-center">
        {businesses.map((business) => (
          <BusinessCard key={business.id} {...business}/>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </PaginationPrevious>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index} onClick={() => setPage(index + 1)}>
              {index + 1}
            </PaginationItem>
          ))}
          <PaginationNext
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next
          </PaginationNext>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
