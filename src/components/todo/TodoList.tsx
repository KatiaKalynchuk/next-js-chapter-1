import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import TodoForm from '@/components/todo/TodoForm';
import { getTodos } from '@/app/todos/actions/getTodos';
import { SearchParams } from '@/types';
import { formatDate } from '@/utils';
import { deleteTodo } from '@/app/todos/actions/deleteTodo';

export async function TodoList({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { data: todos } = await getTodos(searchParams);

  if (!todos?.length) {
    return null;
  }

  return (
    <section>
      <div className="overflow-hidden">
        <div className="text-2xl font-bold ml-6">Tasks</div>
        <Accordion type="single" collapsible className="space-y-4 p-4">
          {todos?.map((todo) => (
            <AccordionItem
              value={todo.id}
              key={todo.id}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="flex justify-between items-center p-4 text-lg font-semibold  hover:bg-gray-700 transition-colors duration-300">
                <span
                  className={`mr-4 text-sm font-light ${todo.completed ? 'text-green-500' : 'text-yellow-500'}`}
                >
                  {todo.completed ? 'Completed' : 'In Progress'}
                </span>
                <span className="flex-1 hover:underline">{todo.title}</span>
                <span className="ml-52 flex-1 text-sm font-light">
                  <p>Priority: {todo.priority}</p>
                  <p>Due: {formatDate(todo.due_date)}</p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-gray-100">
                <form
                  action={deleteTodo}
                  className="flex items-center justify-between space-x-4"
                >
                  <input type="hidden" name="id" value={todo.id} />
                  <Button variant="destructive" type="submit">
                    Delete
                  </Button>
                </form>
                <div className="mt-4 border-t border-gray-300 pt-4">
                  <TodoForm todo={todo} isUpdateTodo />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
