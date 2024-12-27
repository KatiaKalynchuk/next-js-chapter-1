import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TodoForm from '@/components/todo/TodoForm';

export default function AddTodo() {
  return (
    <Card  className="bg-gray-100">
      <CardHeader>
        <CardTitle className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-8 tracking-wider">
          Add new task
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TodoForm />
      </CardContent>
    </Card>
  );
}
