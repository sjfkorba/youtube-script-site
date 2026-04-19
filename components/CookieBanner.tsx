"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  advertising: boolean;
};

const STORAGE_KEY = "yttoscript_cookie_preferences";

const defaultPreferences: ConsentPreferences = {
  essential: true,
  analytics: false,
  advertising: false,
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

function updateGoogleConsent(preferences: ConsentPreferences) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.advertising ? "granted" : "denied",
    ad_user_data: preferences.advertising ? "granted" : "denied",
    ad_personalization: preferences.advertising ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setShowBanner(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved) as ConsentPreferences;
      setPreferences(parsed);
      updateGoogleConsent(parsed);
    } catch {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: ConsentPreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    updateGoogleConsent(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      advertising: true,
    });
  };

  const declineAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      advertising: false,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!mounted || !showBanner) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]" />

      <div className="fixed bottom-4 left-4 right-4 z-50">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
          <div className="p-6 md:p-8">
            {!showSettings ? (
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600">
                    Cookie Preferences
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-gray-900">
                    We use cookies and similar technologies
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    We use essential cookies to keep the website secure and working properly. With your
                    permission, we also use analytics cookies to understand usage and advertising cookies
                    to support relevant ads and measurement. Read our{" "}
                    <Link href="/cookie-policy" className="font-semibold text-red-600 hover:text-red-700">
                      Cookie Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="font-semibold text-red-600 hover:text-red-700">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-wrap lg:justify-end">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Customize
                  </button>

                  <button
                    onClick={declineAll}
                    className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Decline
                  </button>

                  <button
                    onClick={acceptAll}
                    className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                      Manage Preferences
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-gray-900">
                      Customize your consent
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
                      Essential storage is always active because it is required for core site functionality.
                      You can choose whether to allow analytics and advertising cookies.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowSettings(false)}
                    className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                </div>

                <div className="mt-8 space-y-4">
                  <PreferenceRow
                    title="Essential"
                    description="Required for security, consent saving, and core website functionality."
                    checked={true}
                    disabled={true}
                    onChange={() => {}}
                  />

                  <PreferenceRow
                    title="Analytics"
                    description="Helps us understand traffic, popular pages, and performance so we can improve the website."
                    checked={preferences.analytics}
                    onChange={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: !prev.analytics,
                      }))
                    }
                  />

                  <PreferenceRow
                    title="Advertising"
                    description="Supports advertising measurement, ad delivery, and personalization where applicable."
                    checked={preferences.advertising}
                    onChange={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        advertising: !prev.advertising,
                      }))
                    }
                  />
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={declineAll}
                    className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Reject Non-Essential
                  </button>

                  <button
                    onClick={saveCustomPreferences}
                    className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
                  >
                    Save Preferences
                  </button>

                  <button
                    onClick={acceptAll}
                    className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

type PreferenceRowProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
};

function PreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: PreferenceRowProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:flex-row md:items-center md:justify-between">
      <div className="pr-4">
        <h4 className="text-base font-bold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`${title} cookies`}
        disabled={disabled}
        onClick={onChange}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
          checked ? "bg-red-600" : "bg-gray-300"
        } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}