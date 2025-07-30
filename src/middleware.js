import { updateSession } from "@/lib/supabase/middleware";

/**
 * Middleware de l'application. Est appelé avant chaque requête HTTP, et peut modifier la requête ou la réponse.
 * @param request {Request} La requête HTTP entrante.
 * @returns {Promise<NextResponse<unknown>|*>} La réponse HTTP modifiée ou non.
 */
export async function middleware(request) {
  return await updateSession(request);
}

// Chemins à exclure du middleware.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
