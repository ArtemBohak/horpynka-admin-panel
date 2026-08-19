import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Розділ готується</CardTitle>
          <CardDescription>
            Дані вже доступні у mock-репозиторіях — таблиці та форми додаємо наступним кроком.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Скористайтеся боковим меню, щоб перейти до інших розділів панелі.
        </CardContent>
      </Card>
    </div>
  );
}
