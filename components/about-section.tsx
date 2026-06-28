"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { AnimatedSection } from "@/components/animated-section";
import { StaggeredChildren } from "@/components/staggered-children";

export function AboutSection() {
  const settings = useQuery(api.settings.getSettings);

  return (
    <AnimatedSection
      id="about"
      className="py-10 md:py-12 bg-gradient-to-b from-background via-background/98 to-background/95 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-3xl rounded-full smoke-drift"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 blur-3xl rounded-full smoke-drift-slow"></div>
      </div>
      <div className="max-w-[1000px] mx-auto px-5 md:px-10 relative z-10">
        <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          <h2 className="flex items-center justify-center gap-3 md:gap-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            <div className="hidden md:flex items-center mt-2">
              <div className="w-14 lg:w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-primary"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary ml-1"></div>
              <div className="w-1 h-1 rounded-full bg-primary/70 ml-1"></div>
            </div>
            <span className="text-gradient">About</span>
            <div className="hidden md:flex items-center mt-2">
              <div className="w-1 h-1 rounded-full bg-primary/70 mr-1"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-1"></div>
              <div className="w-14 lg:w-20 h-[1px] bg-gradient-to-l from-transparent via-primary/40 to-primary"></div>
            </div>
          </h2>
        </div>
        <StaggeredChildren className="bg-card/75 backdrop-blur-md p-7 rounded-lg">
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {settings?.aboutText ||
              "Write your bio here. Tell visitors who you are, what you do, and why they should work with you."}
          </p>
        </StaggeredChildren>
      </div>
    </AnimatedSection>
  );
}
