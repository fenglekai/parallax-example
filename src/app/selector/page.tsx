"use client";

import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef, useState } from "react";
import Layout1 from "@/assets/images/layer1.png";
import Layout4 from "@/assets/images/layer4.png";
import Layout6 from "@/assets/images/layer6.png";

export default function Destroy() {
  const scene = useRef<HTMLDivElement | null>(null);
  const [parallaxInstance, setParallax] = useState<Parallax | null>(null);

  useEffect(() => {
    scene.current &&
      setParallax(
        new Parallax(scene.current, {
          selector: ".layer",
        })
      );
  }, []);

  return (
    <main className="min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <div id="container" className="container">
        <div id="container" className="container">
          <div ref={scene} id="scene" className="scene">
            <div className="layer" data-depth="1.00">
              <Image src={Layout1} alt="layer1" />
            </div>
            <div className="layer" data-depth="0.80">
              <Image src={Layout4} alt="layer4" />
            </div>
            <div className="layer" data-depth="0.60">
              <Image src={Layout6} alt="layer6" />
            </div>
            <div data-depth="0.40">I am not a Parallax Layer</div>
            <div data-depth="0.20">I am not a Parallax Layer</div>
            <div data-depth="0.00">I am not a Parallax Layer</div>
          </div>
        </div>
      </div>
    </main>
  );
}
