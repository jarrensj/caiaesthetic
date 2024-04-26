import Image from "next/image";
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-pink-50">
      <h1 className="text-2xl font-bold mb-2">caiaesthetic</h1>
      <Image
        src="/caiaesthetic.png"
        alt="pfp"
        width={100}
        height={100}
        className="shadow-lg rounded-full"
      />
      <div className="mt-4 flex space-x-4">
        <Link href="https://www.instagram.com/thecaiaesthetic/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
          <FaInstagram className="h-6 w-6" />
        </Link>
        <Link href="https://twitter.com/MysterionKc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
          <FaTwitter className="h-6 w-6" />
        </Link>
        <Link href="https://discord.gg/6pApVZdNvK" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
          <FaDiscord className="h-6 w-6" />
        </Link>
      </div>
    </main>
  );
}