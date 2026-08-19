import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/panel/")({
  ssr: false,
  beforeLoad: () => {
    throw redirect({ to: "/panel/dashboard" });
  },
  component: () => null,
});
