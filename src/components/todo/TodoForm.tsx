"use client";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Priority } from '@/types';

type Props = {
  isUpdateTodo?: boolean;
  // todo?: Todo;
};

export const TodoForm: React.FC<Props> = ({ todo, isUpdateTodo = false }) => {
  return (
    <form
      // action={isUpdateTodo ? updateTodo : addTodo}
      className="max-w-2xl mx-auto p-8"
    >
      <input type="hidden" name="id" value={todo?.id} />

      <div className="mb-6">
        <Label htmlFor="title" className="block text-lg font-medium text-gray-900">
          Title
        </Label>
        <Input
          id="title"
          name="title"
          defaultValue={todo?.title}
          required
          className="mt-1 block w-full p-2 border border-gray-300 text-gray-600 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="description" className="block text-lg font-medium text-gray-900">
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={todo?.description}
          required
          className="mt-1 block w-full p-2 border border-gray-300 text-gray-600 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
        />
      </div>

      <div className="flex flex-row gap-4 mb-6">
        <div className="flex-1">
          <Label htmlFor="due_date" className="block text-lg font-medium text-gray-900">
            Due Date
          </Label>
          <Input
            id="due_date"
            name="due_date"
            type="date"
            defaultValue={todo?.due_date}
            required
            className="mt-1 block w-full p-2 border border-gray-300 text-gray-600 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900"
          />
        </div>

        <div className="flex-1">
          <Label htmlFor="priority" className="block text-lg font-medium text-gray-900">
            Priority
          </Label>
          <Select
            defaultValue={todo?.priority ?? Priority.ANY}
            name="priority"
            required
          >
            <SelectTrigger
              className="mt-1 w-full p-2 border border-gray-300 text-gray-600 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={Priority.HIGH}>{Priority.HIGH}</SelectItem>
              <SelectItem value={Priority.MEDIUM}>{Priority.MEDIUM}</SelectItem>
              <SelectItem value={Priority.LOW}>{Priority.LOW}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-6 flex items-center">
        <Checkbox
          id="completed"
          name="completed"
          defaultChecked={todo?.completed || false}
          className="mr-2"
        />
        <Label htmlFor="completed" className="text-lg font-medium text-gray-900">
          Is Completed
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-md shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      >
        {isUpdateTodo ? 'Update' : 'Add'}
      </Button>
    </form>
  );
};

export default TodoForm;