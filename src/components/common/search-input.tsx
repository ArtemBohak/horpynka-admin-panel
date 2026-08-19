import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Пошук...",
  className,
}: SearchInputProps) {
  return (
    <div className={`relative ${className ?? "w-full max-w-xs"}`}>
      <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Пошук"
        className="h-9 pl-8"
      />
    </div>
  );
}
