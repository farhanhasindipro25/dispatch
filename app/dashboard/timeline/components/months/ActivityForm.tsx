import AutoSizeTextAreaField from "@/app/components/ui/AutoSizeTextAreaField";
import Button from "@/app/components/ui/Button";
import SelectField from "@/app/components/ui/SelectField";
import TextInputField from "@/app/components/ui/TextInputField";
import React from "react";

export default function ActivityForm() {
  return (
    <div className="space-y-4">
      <SelectField
        label="Tag"
        name="tag"
        id="tag"
        options={[
          { label: "Frontend", value: "FRONTEND" },
          { label: "Backend", value: "BACKEND" },
          { label: "Fullstack", value: "Fullstack" },
          { label: "Database", value: "Database" },
          { label: "Machine Learning", value: "Machine Learning" },
          {
            label: "Artificial Intelligence",
            value: "Artificial Intelligence",
          },
          { label: "Data Science", value: "Data Science" },
          { label: "Devops", value: "Devops" },
          { label: "Quality Assurance", value: "Quality Assurance" },
          { label: "OOP", value: "OOP" },
          { label: "Data Structures", value: "Data Structures" },
          { label: "Algorithms", value: "Algorithms" },
          { label: "Cloud", value: "Cloud" },
        ]}
      />
      <TextInputField
        name="topic"
        id="topic"
        label="Topic"
        placeholder="Enter topic"
      />
      <AutoSizeTextAreaField
        name="thoughts"
        id="thoughts"
        label="Thoughts"
        placeholder="Add your thoughts on the topic"
        minRows={3}
        maxRows={5}
      />
      <Button variant="ACCENT" className="w-full justify-center">
        Add
      </Button>
    </div>
  );
}
