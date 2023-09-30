"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const LoginModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          className="hover:bg-gray-300 cursor-pointer p-2 rounded-md transition-all"
          onClick={() => setOpen(true)}
        >
          Login
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex items-center justify-between">
              <span>Login</span>
              <X onClick={() => setOpen(false)} />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email:</Label>
                <Input placeholder="enter you email" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Password:</Label>
                <Input placeholder="password" />
              </div>
              <Button className="bg-brand">Login</Button>
              <div className="w-full text-center font-bold">--OR--</div>
              <Button className="" variant="outline">
                <Image
                  src="/images/google.png"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Login with google
              </Button>
              <Button className="" variant="outline">
                <Image
                  src="/images/github.png"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Login with github
              </Button>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginModal;
