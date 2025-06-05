"use client";

import { SplashCursor } from "@/registry/new-york-v4/ui/splash-cursor";
import { useEffect, useState } from "react";

export function CursorLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <SplashCursor
          SIM_RESOLUTION={64}
          DYE_RESOLUTION={512}
          SPLAT_RADIUS={0.08}
          SPLAT_FORCE={1500}
          DENSITY_DISSIPATION={4.5}
          VELOCITY_DISSIPATION={3}
          PRESSURE={0.05}
          COLOR_UPDATE_SPEED={2}
          BACK_COLOR={{ r: 0, g: 0, b: 0 }}
        />
      )}
      {children}
    </>
  );
}