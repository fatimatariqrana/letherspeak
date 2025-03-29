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
<div className="relative flex w-full flex-col items-center justify-center px-4 sm:px-6">
      
      {/* Title with Responsive Gradient Text */}
      <span className="pointer-events-none mt-6 text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text py-6 text-center text-[clamp(2rem,5vw,4rem)] font-semibold leading-none">
        Let Her Speak
      </span>

      {/* Subtitle - Responsive & Max Width */}
      <div className="mt-6 max-w-xl text-center text-md text-white">
        When One Woman Speaks, a Thousand Find Their Voice.
      </div>

      {/* Description Section */}
      <div className="mt-6 max-w-2xl text-left text-md text-white leading-relaxed px-4 sm:px-6">
        <p>
          You are not alone in your story. Others have walked this road, felt this pain, fought this battle. 
          And here, you will find them. This is a space for truth, for courage, for women who have held 
          their stories in silence for too long.
        </p>

        <br />
        
        <p><strong>💬 Share your truth:</strong> Stories of resilience, injustice, gender bias, triumphs, or daily struggles. 
          Anonymously, without judgment.
        </p>

        <br />
        
        <p><strong>👂 Find support:</strong> A community that listens, understands, and stands with you. Your words will be felt, 
          your voice will inspire.
        </p>
      </div>

      <Post />
    </div>
    </HydrateClient>
  );
}
