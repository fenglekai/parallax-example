"use client";

import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scene = useRef<HTMLDivElement | null>(null);
  const [parallaxInstance, setParallax] = useState<Parallax>();

  useEffect(() => {
    scene.current &&
      setParallax(
        new Parallax(scene.current, {
          relativeInput: true,
        })
      );
    parallaxInstance && parallaxInstance.friction(0.2, 0.2);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div ref={scene} id="scene">
          <div data-depth="0">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div data-depth="0.6">
            <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2 tracking-[-.01em]">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li className="tracking-[-.01em]">
                Save and see your changes instantly.
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
