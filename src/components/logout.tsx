"use client";

import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { clearUser } from "@/lib/store/features/userSlice";
import { LogOut } from "lucide-react";

export default function Logout() {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(clearUser());
    }
    return <Button onClick={logout} variant="destructive"><LogOut /> Logout</Button>
}