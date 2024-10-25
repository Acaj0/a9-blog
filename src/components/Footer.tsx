"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-between">
        <div className="text-md text-muted-foreground">
          ©A9 Agência de Cargas {new Date().getFullYear()}
        </div>
        <div>
          <Link href="/rss">
            <Button variant="ghost" className="p-2">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
          <a href="https://www.lumenweb.com.br/" className="hover:underline" target="_blank">Lumen Desenvolvimento Web</a>
        </div>
      <div className="text-xs text-muted-foreground ">
        <Link
          href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
        >
          & powered by wisp
        </Link>
      </div>
    </section>
  );
};
