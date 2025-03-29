"use client";
import {
  Annu,
  AnnuBody,
  AnnuContent,
  AnnuDescription,
  AnnuFooter,
  AnnuHeader,
  AnnuTitle,
  AnnuTrigger,
} from "~/components/ui/annu";
import { useState } from "react";
import Image from "next/image";
import { Textarea } from "~/components/ui/textarea";

import { api } from "~/trpc/react";
import { Github, SquarePlus } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ToggleTheme } from "~/components/toogle-theme";

export const Navbar = () => {
  const utils = api.useUtils();
  const [annuOpen, setAnnuOpen] = useState(false);
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
      // Close the Annu create form
      setAnnuOpen(false);
    },
  });
  return (
    <header className="sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border border-secondary bg-card bg-opacity-15 p-2 shadow-inner md:w-[70%] lg:w-[75%] lg:max-w-screen-xl">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center space-y-1 px-4 py-2 text-lg font-bold"
        >
          <div className="relative size-6">
            <Image fill src="/logo.png" alt="gemini logo" />
          </div>
        </Link>
        <Annu open={annuOpen} onOpenChange={setAnnuOpen}>
          <AnnuTrigger asChild>
            <Button size="sm" variant="ghost">
              <SquarePlus className="h-4 w-4" />
              <div className="px-2 text-sm">New Post</div>
            </Button>
          </AnnuTrigger>
          <AnnuContent>
            <AnnuHeader>
              <AnnuTitle>    🌼 A Safe Space for Your Story </AnnuTitle>
              <AnnuDescription>
          
              Some things are too heavy to carry alone. You don’t have to. Whether it’s pain, joy, or everything in between, put it into words. 

<br></br>💡 Need a starting point? <br></br>

{`I’ve never told anyone this, but...`}<br></br>

{`If I could go back in time, I would tell myself...`}<br></br>

{`The hardest thing I’ve ever had to do was...`}<br></br>

{`The world sees me as ____, but inside I feel ____.`}<br></br>

🔒 You are safe here. No names, no pressure—just truth.<br></br>

🗣️ Let Her Speak. Because stories have power.
              </AnnuDescription>
            </AnnuHeader>
            <AnnuBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createPost.mutate({ name });
                }}
                className="flex flex-col gap-4"
              >
                <Textarea
                  placeholder="Write your story here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md px-4 py-2"
                />
                <Button type="submit" disabled={createPost.isPending}>
                  {createPost.isPending ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </AnnuBody>
            <AnnuFooter>
              <span className="text-sm text-muted-foreground">
                Let Her Speak ❤️
              </span>
            </AnnuFooter>
          </AnnuContent>
        </Annu>
      </div>


    </header>
  );
};
