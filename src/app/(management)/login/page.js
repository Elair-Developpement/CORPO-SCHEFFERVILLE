"use client";

import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";

import PageTitle from "@/components/common/pageTitle";
import { signIn } from "./actions";

export default function Login() {
  const t = useTranslations("login-admin");
  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(event) {
    event.preventDefault();
    startTransition(async () => {
      setError(null);

      const formData = new FormData(event.target);
      const result = await signIn(formData);

      if (result.error) {
        setError(t("login-error"));
      }
    });
  }

  return (
    <main
      className={
        "container mx-auto min-h-[calc(100vh-249.27px)] flex flex-col items-center justify-center"
      }
    >
      <div className="w-full max-w-md">
        <PageTitle title={t("login-admin")} />
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              {t("email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onInvalid={() => setError(t("invalid-email-error"))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              {t("password")}
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
            type={"submit"}
            className="w-full bg-green_1 hover:bg-white hover:text-green_1 hover:border-green_1 text-white font-bold py-3 px-5 border-2 rounded"
          >
            {isPending ? t("login-button-loading") : t("login-button")}
          </button>
        </form>
      </div>
    </main>
  );
}
