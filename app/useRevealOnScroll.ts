"use client";

import { useEffect, useRef } from "react";

/**
 * Acrescenta `visibleClass` ao elemento quando ele entra na tela, para
 * disparar a animacao de entrada em CSS. Observa uma vez e para.
 */
export function useRevealOnScroll<T extends HTMLElement>(visibleClass: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem suporte a IntersectionObserver, mostra direto em vez de esconder
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add(visibleClass);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add(visibleClass);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleClass]);

  return ref;
}
