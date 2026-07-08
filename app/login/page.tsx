"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // ADMIN LOGIN

      if (
        email === process.env.NEXT_PUBLIC_ADMIN_USER &&
        password === process.env.NEXT_PUBLIC_ADMIN_PASS
      ) {
        Cookies.set("adminAuth", "true", {
          expires: 1,
          sameSite: "strict",
        });

        router.push("/admin");
        return;
      }

      // EMPLOYEE LOGIN

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/employee/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok || !data.success) {
        setError(data.message || "Invalid credentials");
        return;
      }

      Cookies.set("employeeAuth", data.token, {
        expires: 1,
        sameSite: "strict",
      });

      localStorage.setItem("employeeToken", data.token);

      Cookies.set("employee", JSON.stringify(data.employee), {
        expires: 1,
        sameSite: "strict",
      });

      router.push("/employee");
    } catch (error) {
      console.error(error);

      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="mt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-gray-200 grid md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="hidden md:flex flex-col justify-center bg-[#25258E] p-12 text-white">
            <span className="mb-5 w-fit rounded-full bg-[#EE3D49] px-4 py-2 text-xs font-semibold tracking-wider">
              SECURE ACCESS
            </span>

            <h2 className="text-4xl font-bold leading-tight">
              Admin Control
              <br />
              Panel
            </h2>

            <div className="h-1 w-20 bg-[#EE3D49] rounded-full mt-6 mb-8"></div>

            <p className="text-white/80 leading-8">
              Access your administrative dashboard to manage content, client
              inquiries, employees, blogs, leads and website settings securely.
            </p>

            <div className="mt-10 space-y-5 text-white/90">
              <div className="flex items-center gap-3">
                <span className="text-[#EE3D49] text-xl">✓</span>
                Secure administrator access
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#EE3D49] text-xl">✓</span>
                Employee Management
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#EE3D49] text-xl">✓</span>
                Lead & Client Dashboard
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#EE3D49] text-xl">✓</span>
                Real-time Content Management
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25258E]/10">
                <Lock size={28} className="text-[#25258E]" />
              </div>

              <h1 className="mt-5 text-3xl font-bold text-[#25258E]">
                Admin / Employee Login
              </h1>

              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#EE3D49]" />

              <p className="mt-5 text-gray-500">Sign in to continue</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* EMAIL */}

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@company.com"
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 transition-all outline-none focus:border-[#25258E] focus:ring-4 focus:ring-[#25258E]/10"
                  />
                </div>
              </div>

              {/* PASSWORD */}

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-12 transition-all outline-none focus:border-[#25258E] focus:ring-4 focus:ring-[#25258E]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#25258E]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-xl border border-red-300 bg-red-50 p-3 text-center text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-xl bg-[#EE3D49] font-semibold text-white transition-all duration-300 hover:bg-[#25258E] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Authenticating..." : "Login to Dashboard"}
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} BigWig Media. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
