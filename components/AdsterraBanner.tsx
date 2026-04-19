"use client";

import Script from "next/script";

type Props = {
  scriptUrl: string;
  containerId: string;
};

export default function AdsterraBanner({ scriptUrl, containerId }: Props) {
  return (
    <div className="min-h-30 rounded-[28px] border border-gray-200/50 bg-white p-6 shadow-lg">
      <div id={containerId} />
      <Script
        id={`adsterra-banner-${containerId}`}
        src={scriptUrl}
        strategy="afterInteractive"
      />
    </div>
  );
}