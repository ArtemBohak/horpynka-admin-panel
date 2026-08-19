import { createFileRoute } from "@tanstack/react-router";

import { PlaceholderPage } from "@/components/common/placeholder-page";

export const Route = createFileRoute("/panel/settings")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Налаштування — адмін-панель бістро та магазину" },
      { name: "description", content: "Користувачі та доступи до панелі." },
      { property: "og:title", content: "Налаштування — адмін-панель бістро та магазину" },
      { property: "og:description", content: "Користувачі та доступи до панелі." },
    ],
  }),
  component: () => (
    <PlaceholderPage title="Налаштування" description="Користувачі та доступи до панелі." />
  ),
});
