"use client";

import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef, useState } from "react";
import Layout1 from "@/assets/images/layer1.png";
import Layout2 from "@/assets/images/layer2.png";
import Layout3 from "@/assets/images/layer3.png";
import Layout4 from "@/assets/images/layer4.png";
import Layout5 from "@/assets/images/layer5.png";
import Layout6 from "@/assets/images/layer6.png";

export default function Destroy() {
  const scene = useRef<HTMLDivElement | null>(null);
  const deleteme = useRef<HTMLButtonElement | null>(null);
  const [parallaxInstance, setParallax] = useState<Parallax | null>(null);

  useEffect(() => {
    scene.current && setParallax(new Parallax(scene.current, {}));
  }, []);

  function onclick() {
    if (!parallaxInstance) return;
    parallaxInstance.destroy();
    setParallax(null);

    deleteme.current && (deleteme.current.style.display = "none");
  }

  return (
    <main className="min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <button ref={deleteme} id="deleteme" onClick={onclick}>
        Delete me!
      </button>

      <div id="container" className="container">
        <div ref={scene} id="scene" className="scene">
          <div data-depth="1.00">
            <Image src={Layout1} alt="layer1" />
          </div>
          <div data-depth="0.80">
            <Image src={Layout2} alt="layer2" />
          </div>
          <div data-depth="0.60">
            <Image src={Layout3} alt="layer3" />
          </div>
          <div data-depth="0.40">
            <Image src={Layout4} alt="layer4" />
          </div>
          <div data-depth="0.20">
            <Image src={Layout5} alt="layer5" />
          </div>
          <div data-depth="0.00">
            <Image src={Layout6} alt="layer6" />
          </div>
        </div>
      </div>
    </main>
  );
}
