"use client";

import { useTranslations } from "next-intl";

import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import BusinessDirectoryPagination from "./businessDirectoryPagination";
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
        setTotalPages(Math.ceil(count / 10));
      }
    };

    fetchBusinesses();
  }, [searchTerm, page]);

  return (
    <div className="container mx-auto mt-2 md:p-4">
      {/* Barre de recherche */}
      <Input
        type="text"
        placeholder={t("directory-search")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-2"
      />
      {businesses.length !== 0 ? (
        <>
          {/* Pagination du haut */}
          <BusinessDirectoryPagination
            page={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
          {/* Liste des résultats */}
          <div className="md:grid md:grid-cols-2 md:grid-rows-5 md:grid-flow-col items-center">
            {businesses.map((business) => (
              <BusinessCard key={business.id} {...business} />
            ))}
          </div>
          {/* Pagination du bas */}
          <BusinessDirectoryPagination
            page={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </>
      ) : searchTerm ===
        "" /* Si l'utilisateur a effectué une recherche, affiche aucun résultat, sinon affiche chargement en cas de liste d'entreprises vide... */ ? (
        <p className="mt-4">{t("directory-loading")}</p>
      ) : (
        <p className="mt-4">{t("directory-no-results")}</p>
      )}
    </div>
  );
}
