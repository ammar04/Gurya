import { Link } from "react-router-dom";

export default function SignOut() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold'>Register</h1>
      <form className='flex flex-col gap-5'>
        <input type="text" placeholder='usernaame' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-blue-900 text-white p-4 rounded-lg'>Sign Up</button>
      </form>
      <div className='flex gap-1 nt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-900'>Login</span>
        </Link>
      </div>
    </div>
  )
}
