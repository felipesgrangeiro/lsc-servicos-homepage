"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Box, ChevronLeft, ChevronRight, Gauge, Weight } from "lucide-react";
import { equipmentSlides, type EquipmentSpec } from "./equipment/data";

const specIcon = {
  weight: Weight,
  gauge: Gauge,
  box: Box,
} as const;

function SpecRow({ spec }: { spec: EquipmentSpec }) {
  const Icon = specIcon[spec.icon];
  return (
    <div>
      <Icon />
      <span>
        <small>{spec.label}</small>
        <b>{spec.value}</b>
      </span>
    </div>
  );
}

export default function EquipmentCarousel() {
  const slides = equipmentSlides;
  const total = slides.length;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (total < 2) return;
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  if (total === 0) return null;

  const slide = slides[index];
  const multi = total > 1;

  return (
    <>
      <div
        className="productStage"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Equipamentos da frota"
      >
        <button
          type="button"
          className="slideArrow left"
          aria-label="Equipamento anterior"
          onClick={() => go(-1)}
          disabled={!multi}
        >
          <ChevronLeft />
        </button>

        <div className="specPanel" key={`${slide.id}-panel`}>
          <small>{slide.category}</small>
          <h4>{slide.name}</h4>
          <div className="machineSpecs">
            {slide.specs.map((s) => (
              <SpecRow key={`${slide.id}-${s.label}`} spec={s} />
            ))}
          </div>
          <a href={slide.href}>
            Ver detalhes <ArrowRight size={18} />
          </a>
        </div>

        <div
          className="productImage"
          key={`${slide.id}-image`}
          role="img"
          aria-label={`${slide.category} ${slide.name}`}
          style={{
            backgroundImage: `url("${slide.image}")`,
            backgroundPosition: slide.imagePosition ?? "center center",
          }}
        />

        <button
          type="button"
          className="slideArrow right"
          aria-label="Próximo equipamento"
          onClick={() => go(1)}
          disabled={!multi}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="dots" role="tablist" aria-label="Slides de equipamentos">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={i === index ? "is-active" : undefined}
            aria-label={`Ir para ${s.name}`}
            aria-selected={i === index}
            role="tab"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </>
  );
}
