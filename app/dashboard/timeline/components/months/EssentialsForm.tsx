import Button from "@/app/components/ui/Button";
import SelectField from "@/app/components/ui/SelectField";
import TextInputField from "@/app/components/ui/TextInputField";
import React from "react";

export default function EssentialsForm() {
  return (
    <div className="space-y-4">
      <TextInputField
        name="Experience"
        id="Experience"
        label="Experience"
        placeholder="Years of Experience"
      />
      <SelectField
        label="Open for work"
        name="open_for_work"
        id="open_for_work"
        options={[
          { label: "Yes", value: "YES" },
          { label: "No", value: "NO" },
        ]}
      />
      <TextInputField
        name="worked_at"
        id="worked_at"
        label="Worked At"
        placeholder="Riot Games"
      />
      <TextInputField
        name="working_at"
        id="working_at"
        label="Working At"
        placeholder="Riot Games"
      />
      <TextInputField
        name="location"
        id="location"
        label="Location"
        placeholder="Bangladesh"
      />
      <Button variant="ACCENT" className="w-full justify-center">
        Add
      </Button>
    </div>
  );
}
