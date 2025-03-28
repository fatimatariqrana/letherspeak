import dynamic from "next/dynamic";
import { api, HydrateClient } from "~/trpc/server";
import { ReloadIcon } from "@radix-ui/react-icons";

const Post = dynamic(() => import("~/components/post"), {
  ssr: false,
  loading: () => (
    <>
      <div className="relative flex h-[40vh] md:hidden">
        <ReloadIcon className="mr-2 mt-4 h-8 w-8 animate-spin" />
      </div>
      <div className="relative hidden h-[40vh] w-full max-w-12 md:flex">
        <ReloadIcon className="mr-2 mt-4 h-8 w-8 animate-spin" />
      </div>
    </>
  ),
});

export default async function Home() {
  void api.post.getPosts.prefetch();

  return (
    <HydrateClient>
      <div className="relative flex w-full flex-col items-center justify-center">
        <span className="pointer-events-none mt-6 text-white whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text py-6 text-center text-5xl font-semibold leading-none dark:from-white dark:to-slate-900/10">
          Let Her Speak
        </span>
        <div className="mt-6 max-w-xl text-left text-md text-white">
        When One Woman Speaks, a Thousand Find Their Voice.
        </div>

        <div className="mt-6 max-w-xl text-left text-md text-white">
        <p className="mt-2"> You are not alone in your story. Others have walked this road, felt this pain, fought this battle. 
          And here, you will find them. This is a space for truth, for courage, for women who have held 
          their stories in silence for too long.</p>
          <br></br>
          <p><strong>💬 Share your truth:</strong> Stories of resilience, injustice, gender bias, triumphs, or daily struggles. 
          Anonymously, without judgment.</p>
          <br></br>
          <p className="mt-2"><strong>👂 Find support:</strong> A community that listens, understands, and stands with you. Your words will be felt, 
          your voice will inspire.</p>
      </div>


        <Post />
      </div>
    </HydrateClient>
  );
}
