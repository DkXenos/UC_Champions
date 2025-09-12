import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              Footer elemen1
            </Link>
            <Link href="/Competitions" className="text-gray-400 hover:text-gray-500">
              Competitions
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              footer elemen3 
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; copyright @ucchampion 2026 dll
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}