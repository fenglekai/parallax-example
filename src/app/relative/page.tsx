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

export default function Callback() {
  const scene = useRef<HTMLDivElement | null>(null);
  const relativeCheckbox = useRef<HTMLInputElement | null>(null);
  const clipCheckbox = useRef<HTMLInputElement | null>(null);
  const [parallaxInstance, setParallax] = useState<
    Parallax & { relativeInput?: boolean; clipRelativeInput?: boolean }
  >();

  useEffect(() => {
    scene.current &&
      relativeCheckbox.current &&
      clipCheckbox.current &&
      setParallax(
        new Parallax(scene.current, {
          relativeInput: relativeCheckbox.current.checked,
          clipRelativeInput: clipCheckbox.current.checked,
        })
      );
  }, []);

  function relativeCheckboxChange() {
    parallaxInstance &&
      relativeCheckbox.current &&
      (parallaxInstance.relativeInput = relativeCheckbox.current.checked);
  }
  function clipCheckboxChange() {
    parallaxInstance &&
      clipCheckbox.current &&
      (parallaxInstance.clipRelativeInput = clipCheckbox.current.checked);
  }

  return (
    <main className="min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <div id="container" className="container">
        <div ref={scene} id="scene" className="scene border">
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
        <br />
        <input
          ref={relativeCheckbox}
          type="checkbox"
          id="relative"
          defaultChecked
          onChange={relativeCheckboxChange}
        />
        <label htmlFor="relative">relativeInput</label>
        <input
          ref={clipCheckbox}
          type="checkbox"
          id="clip"
          onChange={clipCheckboxChange}
        />
        <label htmlFor="clip">clipRelativeInput</label>
      </div>
    </main>
  );
}
