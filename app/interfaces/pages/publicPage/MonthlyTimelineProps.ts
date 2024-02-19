interface MonthlyActivityLogItem {
  kind:
    | "LEARNING"
    | "EXPLORING"
    | "DOCUMENTING"
    | "WORKING"
    | "DEBUGGING"
    | "REVISITING";
  topic: string;
  thoughts: string;
  category: "FRONTEND" | "BACKEND" | "FULLSTACK" | "OOP" | "DSA";
}

export interface MonthlyTimelineDataItem {
  month: string;
  activityLog: MonthlyActivityLogItem[];
}
