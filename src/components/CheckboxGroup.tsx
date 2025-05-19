
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxGroupProps {
  items: { id: number | string; name: string }[];
  selectedIds: (number | string)[];
  onChange: (selectedIds: (number | string)[]) => void;
}

export const CheckboxGroup = ({
  items,
  selectedIds,
  onChange,
}: CheckboxGroupProps) => {
  const handleCheckboxChange = (id: number | string, checked: boolean) => {
    if (checked) {
      onChange([...selectedIds, id]);
    } else {
      onChange(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <CheckboxItem
          key={item.id}
          id={item.id}
          label={item.name}
          checked={selectedIds.includes(item.id)}
          onCheckedChange={(checked) => handleCheckboxChange(item.id, checked)}
        />
      ))}
    </div>
  );
};

interface CheckboxItemProps {
  id: number | string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const CheckboxItem = ({
  id,
  label,
  checked,
  onCheckedChange,
}: CheckboxItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`checkbox-${id}`}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={`checkbox-${id}`} className="text-sm font-normal">
        {label}
      </Label>
    </div>
  );
};
