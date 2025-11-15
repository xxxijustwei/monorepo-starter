"use client";

import { UnoptimizedLazyImage } from "@repo/ui/components/lazy-image";
import { ModeToggle } from "@repo/ui/components/mode-toggle";
import { useTranslations } from "next-intl";
import { ViewTransition } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { OptimizeLink } from "@/components/optimize-link";

const Page = () => {
  const t = useTranslations("intro");
  return (
    <ViewTransition>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
        <main className="w-full max-w-md text-center space-y-3">
          <h1 className="text-6xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("description")}</p>

          <div className="aspect-18/13 cursor-zoom-in">
            <OptimizeLink href="/view">
              <ViewTransition name="image">
                <UnoptimizedLazyImage
                  src="https://github.com/xxxijustwei/monorepo-starter/raw/main/apps/web/public/asahi.webp"
                  alt="asahi"
                  className="w-full h-full rounded-2xl overflow-hidden"
                  imgClassName="object-contain"
                />
              </ViewTransition>
            </OptimizeLink>
          </div>
        </main>
      </div>
    </ViewTransition>
  );
};

export default Page;
