'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function deleteTodo(formData: FormData) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const todoId = formData.get('id')?.toString();

  if (!todoId) {
    console.warn('Todo ID is missing.');
    return;
  }

  const { data, error } = await supabase.from('todo').delete().eq('id', todoId);

  if (error) {
    throw new Error(`Failed to delete task: ${error.message}`);
  }

  console.log('Deleted task:', data);

  revalidatePath('/todos');

  redirect('/todos');
}
