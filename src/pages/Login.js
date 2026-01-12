import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen h-54 flex items-center justify-center bg-[#171717]">
      <form className="bg-[#050505] h-full p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded text-black font-bold outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded text-black font-bold outline-none"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        <p className="text-sm text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
