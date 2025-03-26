import PageTitle from "@/components/common/pageTitle";
import { signIn } from "./actions";

export default function Login() {
  return (
    <main
      className={
        "container mx-auto min-h-[calc(100vh-249.27px)] flex flex-col items-center justify-center"
      }
    >
      <div className="w-full max-w-md">
        <PageTitle title="Connexion Admin" />
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Adresse courriel:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Mot de passe:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            formAction={signIn}
            className="w-full bg-green_1 hover:bg-white hover:text-green_1 hover:border-green_1 text-white font-bold py-3 px-5 border-2 rounded"
          >
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}
