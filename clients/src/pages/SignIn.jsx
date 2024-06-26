import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold'>Login</h1>
      <form className='flex flex-col gap-5'>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-blue-900 text-white p-2 rounded-sm'>Login</button>
      </form>
      <div className='flex gap-1 nt-5'>
        <p>Don't Have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-900'>Register</span>
        </Link>
      </div>
    </div>
  )
}
