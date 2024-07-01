import Link from "next/link";

const SignIn = () => {
  return (
    <Link href="/auth/login" className="">
      <button className="px-4 py-2 bg-red-700 shadow-xl rounded-md text-white md:px-4 md:py-3 border-none text-xs font-medium">
        Sign In
      </button>
    </Link>
  );
};

export default SignIn;
