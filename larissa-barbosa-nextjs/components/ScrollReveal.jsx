"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = new Set();

    // Sem suporte ao IntersectionObserver, o conteúdo permanece visível.
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
    );

    const observeElements = (scope = document) => {
      scope.querySelectorAll?.("[data-reveal]").forEach((element) => {
        if (!elements.has(element) && !element.classList.contains("is-visible")) {
          elements.add(element);
          observer.observe(element);
        }
      });
      if (scope.matches?.("[data-reveal]") && !elements.has(scope) && !scope.classList.contains("is-visible")) {
        elements.add(scope);
        observer.observe(scope);
      }
    };

    observeElements();
    // Ativa o efeito somente depois que o observador estiver configurado.
    root.classList.add("reveal-ready");

    // Também observa elementos inseridos posteriormente pelo React.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeElements(node);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
