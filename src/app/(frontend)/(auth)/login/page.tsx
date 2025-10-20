"use client";

import LoginForm from "@/components/login-form"
import SignupForm from "@/components/signup-form"
import { useState } from "react"

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {isLogin ? (
                <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
                ) : (
                <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
                )}
            </div>
        </main>
    )
}