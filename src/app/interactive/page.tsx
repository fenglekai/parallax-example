"use client";

import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef, useState } from "react";
import Layout2 from "@/assets/images/layer2.png";

export default function Callback() {
  const scene = useRef<HTMLDivElement | null>(null);
  const [parallaxInstance, setParallax] = useState<Parallax>();

  useEffect(() => {
    scene.current && setParallax(new Parallax(scene.current, {}));
  }, []);

  return (
    <main className="min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <div id="container" className="container">
        <Image src={Layout2} alt="layer2" className="aspect" />
        <div
          ref={scene}
          id="scene"
          className="scene border fill"
          data-pointer-events="true"
        >
          <div className="expand-width" data-depth="1.00">
            <button>layer[6]</button>
          </div>
          <div className="expand-width" data-depth="0.80">
            <button>layer[5]</button>
          </div>
          <div className="expand-width" data-depth="0.60">
            <button>layer[4]</button>
          </div>
          <div className="expand-width" data-depth="0.40">
            <button>layer[3]</button>
          </div>
          <div className="expand-width" data-depth="0.20">
            <button>layer[2]</button>
          </div>
          <div className="expand-width" data-depth="0.00">
            <button>layer[1]</button>
          </div>
        </div>
      </div>
    </main>
  );
}
