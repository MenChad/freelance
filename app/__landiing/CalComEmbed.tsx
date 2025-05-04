"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalComEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "tarik.dev/30min",
        config: { layout: "month_view", theme: "auto" },
        buttonColor: "#126a00",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Retourne un élément JSX valide
  return <div id="calcom-embed-container"></div>;
}
