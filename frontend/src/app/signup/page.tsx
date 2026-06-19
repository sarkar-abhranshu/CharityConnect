"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <div>
      <Header />
      <AuthForm mode="signup" />
      <Footer />
    </div>
  );
}
