import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({ mode }: { mode: "login" | "signup" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const role = "user";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    let authParams = {};
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        authParams = { email, password };
      } else {
        authParams = { email, password, username, role };
      }

      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authParams),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || `${mode} failed`);
        console.error(`❌ ${mode} failed:`, data.error);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log(`✅ ${mode} successful, redirecting...`);
      router.push("/store");
    } catch (err) {
      console.error("💥 Fetch error:", err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100 py-12 md:py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === "signup" ? (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="username"
                />
              </div>
            ) : null}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded-md bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot your password?
            </a>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <a
                  href="/signup"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign up
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
