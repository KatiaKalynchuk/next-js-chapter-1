'use server';

import { Priority } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function updateTodo(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const id = formData.get('id')?.toString();
  if (!id) {
    throw new Error('Todo ID is missing');
  }

  const todoData = {
    title: formData.get('title')?.toString() || '',
    description: formData.get('description')?.toString() || '',
    due_date: formData.get('dueDate'),
    priority: formData.get('priority')?.toString() || Priority.MEDIUM,
    completed: Boolean(formData.get('completed')),
  };

  const { data, error } = await supabase
    .from('todo')
    .update(todoData)
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to update task: ${error.message}`);
  }

  console.log('Updated task:', data);

  revalidatePath('/todos');
  redirect('/todos');
}
