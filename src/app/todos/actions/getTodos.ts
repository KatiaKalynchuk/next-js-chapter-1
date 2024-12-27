"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Priority, SearchParams, SortBy, Todo } from '@/types';

export async function getTodos(searchParams: SearchParams): Promise<{ data: Todo[] }> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { sortBy, priority: priorityValue, completed, dueDate: dueDateValue } = await searchParams;

  let query = supabase
    .from("todo")
    .select()
    .order(getSortBy(sortBy), { ascending: true });

  const priority = getPriority(priorityValue);

  if (priority !== Priority.ANY) {
    query = query.eq("priority", priority);
  }

  if (completed !== undefined && completed !== 'All') {
    query = query.eq("completed", completed === "Completed");
  }

  const dueDate = getDueDate(dueDateValue);
  if (dueDate) {
    const formattedDate = formatDate(dueDate);
    query = query.eq("due_date", formattedDate);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Failed to fetch todos: ${error.message}`);
  }

  return { data: data as Todo[] };
}

const getSortBy = (sortBy: SortBy): SortBy =>
  Object.values(SortBy).includes(sortBy) ? sortBy : SortBy.TITLE;

const getPriority = (priority: Priority): Priority => {
  return Object.values(Priority).includes(priority) ? priority : Priority.ANY;
};

const getDueDate = (dueDate: string): Date | null => {
  return typeof dueDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dueDate)
    ? new Date(dueDate)
    : null;
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
