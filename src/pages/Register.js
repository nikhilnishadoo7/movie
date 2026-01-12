import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#171717]">
      <form className="bg-[#050505] p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded text-black font-bold outline-none"
        />

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

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
