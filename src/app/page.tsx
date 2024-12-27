import Link from 'next/link';
import Footer from '@/components/todo/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/stars.png')] bg-repeat pb-2">
      <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 text-center mb-8 tracking-wider text-shadow">
          Darth Vader's super plan
        </h1>
        <Link
          href="/todos"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-full transition-colors duration-300 text-lg"
        >
          Explore the plan
        </Link>
      </main>
      <Footer />
    </div>
  );
}
