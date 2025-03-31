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
import { SquarePlus } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  const utils = api.useUtils();
  const [annuOpen, setAnnuOpen] = useState(false);
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
      setAnnuOpen(false);
    },
  });
  return (
    <header className="sticky top-5 z-40 mx-auto flex w-[90%] max-w-full flex-wrap items-center justify-between rounded-2xl border border-secondary bg-card bg-opacity-15 p-2 shadow-inner sm:flex-nowrap md:w-[80%] lg:w-[75%] lg:max-w-screen-xl">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center px-4 py-2 text-lg font-bold">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10">
            <Image fill src="/logo.png" alt="gemini logo" className="object-contain" />
          </div>
        </Link>
        <Annu open={annuOpen} onOpenChange={setAnnuOpen}>
          <AnnuTrigger asChild>
            <Button size="sm" variant="ghost" className="flex items-center px-2">
              <SquarePlus className="h-4 w-4" />
              <span className="hidden sm:inline px-2 text-sm">New Post</span>
            </Button>
          </AnnuTrigger>
          <AnnuContent>
            <AnnuHeader>
              <AnnuTitle>🌼 A Safe Space for Your Story</AnnuTitle>
              <AnnuDescription>
                Some things are too heavy to carry alone. You don’t have to.
                Whether it’s pain, joy, or everything in between, put it into
                words.
                <br />💡 Need a starting point?
                <br />
                {`I’ve never told anyone this, but...`}
                <br />
                {`If I could go back in time, I would tell myself...`}
                <br />
                {`The hardest thing I’ve ever had to do was...`}
                <br />
                {`The world sees me as ____, but inside I feel ____.`}
                <br />🔒 You are safe here. No names, no pressure—just truth.
                <br />🗣️ Let Her Speak. Because stories have power.
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
              <span className="text-sm text-muted-foreground">Let Her Speak ❤️</span>
            </AnnuFooter>
          </AnnuContent>
        </Annu>
      </div>
    </header>
  );
};