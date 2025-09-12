import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function BusinessDirectoryPagination({
  page,
  totalPages,
  onPageChange,
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange((prev) => Math.max(prev - 1, 1))}
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) =>
          /* N'affiche un numéro de pagination seulement pour premiere et derniere page, ainsi que les pages avant et apres la page actuelle */
          index === 0 ||
          index === totalPages - 1 ||
          index === page ||
          index === page - 2 ||
          index === page - 1 ? (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => onPageChange(index + 1)}
                /* Si la page est la page actuelle, affiche la page comme active */
                isActive={page === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ) : (
            /* Affiche l'ellipsis seulement après le premier et dernier résultat */
            (index === 1 || index === totalPages - 2) && (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          )
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              onPageChange((next) => Math.min(next + 1, totalPages))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
