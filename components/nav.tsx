import Link from "next/link";
import { useRouter } from 'next/router';

const navbar = () => {
    const router = useRouter();
    
  return (
    <div className="flex h-16 bg-white items-center shadow-2xl border-b-0 border-gray-800 relative">
      <div className="flex ml-16">
        <div className="pr-5 h-full">
        <Link className={`text-2xl  text-black hover:border-b-4 hover:border-red-500 ${router.pathname === '/' ? 'border-b-4 border-red-500 font-bold' : ''}`} href="/">
          Book
        </Link>
        </div>
        <div className="pr-5">
        <Link className={`text-2xl  text-black hover:border-b-4 hover:border-red-500 ${router.pathname === '/checkin' ? 'border-b-4 border-red-500' : ''}`} href="/">
          Check-In
        </Link>
        </div>
        <div className="pr-5">
        <Link className={`text-2xl  text-black hover:border-b-4 hover:border-red-500 ${router.pathname === '/mytrips' ? 'border-b-4 border-red-500' : ''}`} href="/mytrips">
          My Trips
        </Link>
        </div>
        <div className="pr-5">
        <Link className={`text-2xl  text-black hover:border-b-4 hover:border-red-500  ${router.pathname === '/status' ? 'border-b-4 border-red-500' : ''}`} href="/">
          Flight Status
        </Link>
        </div>
      </div>
      <div className="ml-auto mr-16">
        <button className="bg-slate-700 hover:bg-slate-700 text-white py-2 px-6 font-semibold text-xl">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default navbar;