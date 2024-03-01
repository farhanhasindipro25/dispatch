import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { LogType } from "@/types";

export default function DashboardPage() {
  const createLogMutation = useMutation(api.logs.createLog);
  const tags = useQuery(api.logs.getTags);
  const [body] = useState('');
  const [title] = useState('');
  const [type] = useState<LogType>(LogType.Achievements);
  const types = Object.entries(LogType);
  const [selectedTags, setTags] = useState<number | undefined>();
  const user = "jh70f4pqejada669kwy5v73a0s6kqq5q" as Id<"users">;
  const handleTypeChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => parseInt(option.value));
    setTags(selectedOptions);
  };
  return <div>
    DashboardPage
    <form onSubmit={createLogMutation({user, body, title, type, tag_id_list: selectedTags})}>
    <p> Select Tag Type</p>
      <select>
        {tags?.map((tag) => {
          return <option value={tag.value} key={value}>{key}</option>
        })}
      </select>
      <p> Select Log Type</p>
      <select>
        {types.map(([key, value]) => {
          return <option value={value} key={value}>{key}</option>
        })}
      </select>
    </form>
    </div>;
}
