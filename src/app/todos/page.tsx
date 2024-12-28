/*eslint-disable*/
import Link from 'next/link';
import Footer from '@/components/todo/Footer';
import { TodoList } from '@/components/todo/TodoList';
import TodoActions from '@/components/todo/TodoActions';
import { SearchParams } from '@/types';

export default async function Todos(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex flex-col min-h-screen bg-repeat pb-2">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="bg-black outline hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Back
          </Link>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-8 tracking-wider text-shadow">
          List of sinister plans
        </h1>
        <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg">
          {/*<TodoActions searchParams={searchParams} />*/}
          <div className="mt-4 border-t border-gray-300 pt-4">
            {/*<TodoList searchParams={searchParams} />*/}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/todos/create"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Add new
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
