import PageTitle from "@/components/common/pageTitle";
import LoginForm from "@/components/auth/loginForm";

export default function Login() {
  return (
    <main
      className={
        "container mx-auto min-h-[calc(100vh-249.27px)] flex flex-col items-center justify-center"
      }
    >
      <div className="w-full max-w-md">
        <PageTitle title={"Connexion Admin"} />
        <LoginForm />
      </div>
    </main>
  );
}
