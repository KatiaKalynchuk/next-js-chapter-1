"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Priority, SortBy } from "@/types";
import { useRouter } from 'next/navigation'

export function TodoActions({ searchParams }: any) {
  const router = useRouter();


  const handleReset = () => {
    router.push("/todos");
  };

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Filters</CardTitle>
        </CardHeader>
        <form>
          <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="due_date" className="block text-lg font-medium text-gray-300">
                Due date
              </Label>
              <Input
                id="due_date"
                name="due_date"
                type="date"
                // defaultValue={searchParams.due_date}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <Label htmlFor="priority" className="block text-lg font-medium text-gray-300">
                Priority
              </Label>
              <Select
                // defaultValue={searchParams.priority ?? Priority.MEDIUM}
                name="priority"
              >
                <SelectTrigger className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Priority.ANY}>Not Selected</SelectItem>
                  <SelectItem value={Priority.HIGH}>{Priority.HIGH}</SelectItem>
                  <SelectItem value={Priority.MEDIUM}>{Priority.MEDIUM}</SelectItem>
                  <SelectItem value={Priority.LOW}>{Priority.LOW}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="completed" className="block text-lg font-medium text-gray-300">
                Completion status
              </Label>
              <Select
                // defaultValue={searchParams.completed ?? "All"}
                name="completed"
              >
                <SelectTrigger className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="sortBy" className="block text-lg font-medium text-gray-300">
                Sort by
              </Label>
              <Select
                // defaultValue={searchParams.sortBy?.toString() ?? SortBy.TITLE.toString()}
                name="sortBy"
              >
                <SelectTrigger className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={SortBy.TITLE}>Title</SelectItem>
                  <SelectItem value={SortBy.PRIORITY}>Priority</SelectItem>
                  <SelectItem value={SortBy.DUE_DATE}>Due Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end mt-6 space-x-4">
            <Button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 text-gray-900 py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Apply
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

export default TodoActions;
