"use client";

import { useEffect, useRef } from "react";

type AdUnitProps = {
  adCode: string;
  className?: string;
};

export default function AdUnit({ adCode, className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    adRef.current.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.innerHTML = adCode;

    Array.from(wrapper.childNodes).forEach((node) => {
      if (node.nodeName !== "SCRIPT") {
        adRef.current?.appendChild(node.cloneNode(true));
      }
    });

    const scripts = wrapper.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      newScript.text = oldScript.innerHTML;
      adRef.current?.appendChild(newScript);
    });
  }, [adCode]);

  return <div ref={adRef} className={className} />;
}