"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function LoginButton() {
    const router = useRouter()
    const navigateToLogin = () => router.push('/login');

    return (
        <Button onClick={navigateToLogin}>Login</Button>
    );
}