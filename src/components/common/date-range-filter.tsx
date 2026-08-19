import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface DateRange {
  from: string;
  to: string;
}

interface DateRangeFilterProps {
  value: DateRange;
  onChange: (value: DateRange) => void;
}

export function DateRangeFilter({ value, onChange }: DateRangeFilterProps) {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <div className="grid gap-1">
        <Label htmlFor="date-from" className="text-xs text-muted-foreground">
          Дата від
        </Label>
        <Input
          id="date-from"
          type="date"
          className="h-9 w-[150px]"
          value={value.from}
          onChange={(event) => onChange({ ...value, from: event.target.value })}
        />
      </div>
      <div className="grid gap-1">
        <Label htmlFor="date-to" className="text-xs text-muted-foreground">
          Дата до
        </Label>
        <Input
          id="date-to"
          type="date"
          className="h-9 w-[150px]"
          value={value.to}
          onChange={(event) => onChange({ ...value, to: event.target.value })}
        />
      </div>
      {value.from || value.to ? (
        <Button variant="ghost" size="sm" onClick={() => onChange({ from: "", to: "" })}>
          Очистити дати
        </Button>
      ) : null}
    </div>
  );
}

export function isWithinRange(iso: string, range: DateRange): boolean {
  const time = new Date(iso).getTime();
  if (range.from) {
    const from = new Date(`${range.from}T00:00:00`).getTime();
    if (time < from) return false;
  }
  if (range.to) {
    const to = new Date(`${range.to}T23:59:59`).getTime();
    if (time > to) return false;
  }
  return true;
}
