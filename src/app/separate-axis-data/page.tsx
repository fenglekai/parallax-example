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
  const [parallaxInstance, setParallax] = useState<Parallax | null>(null);

  useEffect(() => {
    scene.current && setParallax(new Parallax(scene.current, {}));
  }, []);

  return (
    <main className="min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <div id="container" className="container">
        <div ref={scene} id="scene" className="scene">
          <div data-depth="1.00">
            <Image src={Layout1} alt="layer1" />
          </div>
          <div data-depth-x="0.80" data-depth-y="-0.80">
            <Image src={Layout2} alt="layer2" />
          </div>
          <div data-depth-x="-0.60" data-depth-y="-0.20">
            <Image src={Layout3} alt="layer3" />
          </div>
          <div data-depth="0.40" data-depth-y="-0.30">
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
