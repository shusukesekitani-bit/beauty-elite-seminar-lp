(() => {
  const workstyle = new URLSearchParams(window.location.search).get("ad") === "workstyle";
  const variant = workstyle ? "workstyle" : "profit";
  document.documentElement.dataset.lpVariant = variant;

  const lineLinks = document.querySelectorAll("a[data-line-cta]");

  if (workstyle) {
    const lineUrl = "https://liff.line.me/2012736889-bjLj1CGU/landing?follow=%40088myrmz&lp=mXvfJn&liff_id=2012736889-bjLj1CGU";
    const image = document.getElementById("hero-ad");
    image.src = "workstyle.png";
    image.alt = "フェイシャルサロンオーナーへ。現場に立ち続ける働き方を見直す、30名限定の無料セミナー";
    document.getElementById("hero-heading").innerHTML =
      "これからも必死に、<br><em>現場に立ち続けますか？</em><br>その働き方を見直すために。";

    for (const link of lineLinks) link.href = lineUrl;
  }

  if (window.location.hostname !== "meta.laviora-clinical.jp" || !/^\/seminar(?:\/|$)/.test(window.location.pathname)) return;

  const containerId = "GTM-NP4CRQFF";
  const dataLayer = (window.dataLayer = window.dataLayer || []);
  dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js", lp_variant: variant });

  const tagManager = document.createElement("script");
  tagManager.async = true;
  tagManager.src = "https://www.googletagmanager.com/gtm.js?id=" + containerId;
  document.head.appendChild(tagManager);

  for (const link of lineLinks) {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented) return;

      const message = {
        event: "seminar_line_click",
        lp_variant: variant,
        cta_position: link.dataset.lineCta
      };

      const opensInSameTab =
        event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
      if (!opensInSameTab || !window.google_tag_manager?.[containerId]) {
        dataLayer.push(message);
        return;
      }

      // Give GTM time to run the click tag. Keep the link usable if a tag stalls.
      event.preventDefault();
      let navigating = false;
      const navigate = () => {
        if (navigating) return;
        navigating = true;
        window.location.assign(link.href);
      };

      window.setTimeout(navigate, 500);
      dataLayer.push({ ...message, eventCallback: navigate, eventTimeout: 400 });
    });
  }
})();
