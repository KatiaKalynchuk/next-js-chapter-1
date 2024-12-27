export enum Priority {
  ANY = "Any",
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

export enum SortBy {
  PRIORITY = "priority",
  DUE_DATE = "due_date",
  TITLE = "title",
}

export type Todo = {
  id: string;
  title: string;
  due_date: string;
  description: string;
  priority: string;
  completed: boolean;
};

export type SearchParams = {
  dueDate: string;
  completed: string;
  priority: Priority;
  sortBy: SortBy;
};
