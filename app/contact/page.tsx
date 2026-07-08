"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import {
  Loader2,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CallToActionSection from "../components/Footer";
import Navbar from "../components/Navbar";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const sendOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/lead/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Unable to send OTP. Please try again.");
      }

      setOtpSent(!data.alreadyRegistered);
      setStatus({
        type: "success",
        message: data.alreadyRegistered
          ? data.message || "This email is already registered."
          : "OTP sent to your email. Please enter it below to submit.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send OTP. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/lead/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });
      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Invalid OTP. Please try again.");
      }

      setStatus({
        type: "success",
        message: "Thanks, your inquiry has been submitted successfully.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setOtp("");
      setOtpSent(false);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Invalid OTP. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="  bg-white min-h-screen text-white">
      <Navbar />

      <section className="w-full md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-8 mt-10  text-black">
        <div className="pt-4">
          <h2 className="text-2xl mb-2 font-semibold">Dubai</h2>
          <hr />
          <h2 className="text-xl mb-2 font-semibold">Head Office</h2>
          <p className="mb-1 text-lg">Dubai</p>
          <p className="mb-4">
            1703, Damac XL tower, Marasi Drive, Business bay, Dubai, UAE.
          </p>
          <h2 className="text-2xl mb-2 font-semibold">India</h2>
          <hr />
          <h2 className="text-xl mb-2 font-semibold">Branch Offices</h2>
          <p className="mb-1 text-lg font-semibold">Delhi</p>
          <p className="mb-4">
            Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
          </p>
          <p className="mb-1 text-lg font-semibold">Delhi</p>
          <p className="mb-4">
            S-1, 3rd Floor, Janta Market, Rajouri Garden New Delhi - 110027
          </p>
          <h2 className="text-2xl mb-2 font-semibold">Australia</h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Melbourne</p>
          <p className="mb-4">80 Lsabella way, Tarneit 3029 Melbourne</p>

          <h2 className="text-2xl mb-2 font-semibold">New Zealand</h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Auckland</p>
          <p className="mb-4">
            9/136 Marua Road, Mount Wellington, Auckland 1051
          </p>

          <p className="text-gray-600 mt-8">
            Our business operating hours are as follows:
          </p>
          <p className="mt-2">Monday to Saturday: 10:30am - 7:30pm</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 font-sans">Get in Touch</h2>
          <p className="mb-4 text-gray-600 font-sans">
            Please contact us via phone or email below or visit us at our Head
            Office in Business Bay during operating hours.
          </p>

          <div className="flex flex-col gap-4">
            {/* Phone Button */}
            <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+918368573451"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:vipul@bigwigmedia.in"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <Mail className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">
                vipul@bigwigmedia.in
              </span>
            </a>

            {/* SMS Button */}
            <a
              href="sms:+918368573451"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <MessageSquareText className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </a>
          </div>

          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-black">
              Send us a message
            </h3>
            <p className="mb-5 text-sm text-gray-600">
              Fill the form and verify your email with OTP to submit your
              inquiry.
            </p>

            {!otpSent ? (
              <form onSubmit={sendOtp} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  placeholder="Name"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={updateField}
                  placeholder="Email"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={updateField}
                  placeholder="Phone"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  placeholder="Message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-black px-5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Send OTP
                </button>
              </form>
            ) : (
              <form onSubmit={verifyOtp} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(event) => setOtp(event.target.value)}
                  placeholder="Enter OTP"
                  inputMode="numeric"
                  maxLength={6}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-black px-5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ShieldCheck className="h-4 w-4" />
                    )}
                    Verify OTP
                  </button>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setOtpSent(false);
                      setOtp("");
                      setStatus(null);
                    }}
                    className="h-11 rounded-md border border-gray-300 px-5 text-sm font-semibold text-black transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    Edit details
                  </button>
                </div>
              </form>
            )}

            {status && (
              <p
                className={`mt-4 rounded-md px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </section>

      <h2 className="px-5 w-full md:w-[90%] mx-auto text-lg text-[var(--secondary-color)]">
        Have questions, need marketing advice, or interested in growing your
        brand online?
      </h2>
      <p className="px-5 w-full md:w-[90%] mx-auto text-md text-gray-600">
        Reach out to us via email, phone, or simply fill out the form below.
        Your inquiry will be directed to the right Bigwig Digital marketing
        expert, and we’ll get back to you within 24 hours.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start w-full md:w-[90%] mx-auto px-6 py-8 gap-10 mb-7 bg-white">
        {/* Map Section */}
        <div className="w-full  h-[450px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.668560792657!2d55.264871674024235!3d25.18066683237258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69004a524faf%3A0x13d5b1575adb574a!2sBusiness%20Bay!5e0!3m2!1sen!2sin!4v1744201890505!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <CallToActionSection />
    </div>
  );
}
