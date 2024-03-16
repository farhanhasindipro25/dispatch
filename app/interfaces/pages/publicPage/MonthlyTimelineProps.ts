interface MonthlyActivityLogItem {
  kind:
    | "LEARNING"
    | "EXPLORING"
    | "DOCUMENTING"
    | "WORKING"
    | "DEBUGGING"
    | "REVISITING"
    | "COMFORTABLE"
    | "PARTICIPATED";
  topic: string;
  thoughts: string;
  category: "FRONTEND" | "BACKEND" | "FULLSTACK" | "OOP" | "DSA";
}

export interface MonthlyTimelineDataItem {
  month: string;
  activityLog: MonthlyActivityLogItem[];
}
