"use client";

import LoginForm from "@/components/login-form"
import SignupForm from "@/components/signup-form"
import { StoreState } from "@/lib/store";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)
    const user = useSelector((state:StoreState) => state.user)
    const router = useRouter()
    useEffect(() => {
        if (user?._id) {
            router.replace("/")
        }
    }, [user, router])
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
            {
                !user?._id && (<div className="w-full max-w-md">
                {isLogin ? (
                <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
                ) : (
                <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
                )}
            </div>)
            }
        </main>
    )
}