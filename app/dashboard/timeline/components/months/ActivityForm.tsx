import AutoSizeTextAreaField from "@/app/components/ui/AutoSizeTextAreaField";
import Button from "@/app/components/ui/Button";
import SelectField from "@/app/components/ui/SelectField";
import TextInputField from "@/app/components/ui/TextInputField";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React, { useState } from "react";
import { LogType } from "@/types";
import toast from "react-hot-toast";

export default function ActivityForm({ onSubmit }) {
  const createLog = useMutation(api.logs.createLog);
  const tags = useQuery(api.logs.getTags);
  const [selTags, setTags] = useState([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const submitForm = () => {
    createLog({ body, title, type: Number(type), tag_id_list: selTags });
    onSubmit();
    toast("Activity added");
  };

  return (
    <div className="space-y-4">
      <SelectField
        label="Tag *"
        name="tag"
        id="tag"
        isMulti
        options={tags}
        getOptionLabel={(o) => o.name}
        getOptionValue={(o) => o._id}
        onChange={(e) => setTags(e.map((a) => a._id))}
      />
      {/* <SelectField
        label="Type"
        name="type"
        id="type"
        options={Object.keys(LogType).filter(key => !isNaN(Number(key))).map(k => ({
          label: LogType[k],
          value: k
        }))}
        onChange={e => setType(e.value)}
      /> */}
      <TextInputField
        name="topic"
        id="topic"
        label="Topic *"
        placeholder="Enter topic"
        onChange={(e) => setTitle(e.target.value)}
      />
      <AutoSizeTextAreaField
        name="thoughts"
        id="thoughts"
        label="Thoughts *"
        placeholder="Add your thoughts on the topic"
        minRows={3}
        maxRows={5}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        variant="ACCENT"
        className="w-full justify-center"
        onClick={submitForm}
        disabled={
          title.length === 0 || body.length === 0 || selTags.length === 0
            ? true
            : false
        }
      >
        Add
      </Button>
      <p className="text-sm font-semibold text-neutral-400 text-center">
        * All fields are required
      </p>
    </div>
  );
}
