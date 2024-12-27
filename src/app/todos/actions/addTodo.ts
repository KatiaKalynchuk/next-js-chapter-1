'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { Priority } from '@/types';

export async function addTodo(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const todoData = {
    title: formData.get('title')?.toString() || '',
    description: formData.get('description')?.toString() || '',
    due_date: formData.get('due_date'),
    priority: formData.get('priority')?.toString() || Priority.MEDIUM,
    completed: Boolean(formData.get('completed')),
  };

  const { error } = await supabase.from('todo').insert([todoData]);

  if (error) {
    throw new Error(`Failed to add a new task: ${error.message}`);
  }

  revalidatePath('/todos');

  redirect('/todos');
}
