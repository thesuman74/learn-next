import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import Image from 'next/image'; // Import Image component

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' });
  };
  return (
    <button
      onClick={handleClick}
      className="focus:shadow-outline border-gray mt-4 flex h-14 w-full items-center justify-center rounded-lg border
    bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200"
    >
      <Image src="/google-logo.png" alt="Google Logo" width={20} height={20} />{' '}
      <span className="ml-4"> Sign In with Google</span>
    </button>
  );
}
