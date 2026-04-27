import { useMemo, useState } from 'react';

type MediaItem = {
  id: number;
  label: string;
  tag: string;
  src: string;
};

const mediaItems: MediaItem[] = [
  { id: 1, label: 'Fachada do prédio', tag: 'VÍDEO', src: `${import.meta.env.BASE_URL}videos/fachada-predio.mp4` },
  { id: 2, label: 'Térreo', tag: 'VÍDEO', src: `${import.meta.env.BASE_URL}videos/terreo.mp4` },
  { id: 3, label: 'Escada interna', tag: 'VÍDEO', src: `${import.meta.env.BASE_URL}videos/escada.mp4` },
  { id: 4, label: 'Sala comercial 104', tag: 'VÍDEO', src: `${import.meta.env.BASE_URL}videos/sala-comercial-104.mp4` },
];

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedIds, setFailedIds] = useState<number[]>([]);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const prevIndex = useMemo(
    () => (currentIndex - 1 + mediaItems.length) % mediaItems.length,
    [currentIndex]
  );

  const nextIndex = useMemo(
    () => (currentIndex + 1) % mediaItems.length,
    [currentIndex]
  );

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handleTouchStart = (x: number) => {
    setTouchStartX(x);
    setTouchEndX(x);
  };

  const handleTouchMove = (x: number) => {
    setTouchEndX(x);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    if (distance > 40) goNext();
    if (distance < -40) goPrev();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleDesktopClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const center = rect.width / 2;

    if (clickX > center) goNext();
    else goPrev();
  };

  return (
    <section
      id="galeria"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #F0E4CC 0%, #FAF5EC 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] mb-3" style={{ color: '#C9A84C' }}>
            Galeria
          </p>
          <h2 className="font-serif text-[38px] md:text-[52px] font-light leading-tight mb-4" style={{ color: '#561525' }}>
            Conheça o espaço
          </h2>
          <hr className="gold-divider max-w-[200px] mx-auto mb-4" />
          <p className="font-sans text-[12px]" style={{ color: '#7a6a5a' }}>
            Roleta vertical 9:16. Arraste no celular ou clique para navegar.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto h-[540px] md:h-[640px]"
          onTouchStart={(e) => handleTouchStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleTouchMove(e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
          onClick={handleDesktopClick}
        >
          {mediaItems.map((item, index) => {
            const isCurrent = index === currentIndex;
            const isPrev = index === prevIndex;
            const isNext = index === nextIndex;

            let transform = 'translateX(-50%) scale(0.72)';
            let opacity = 0;
            let zIndex = 1;
            let pointerEvents: 'none' | 'auto' = 'none';

            if (isCurrent) {
              transform = 'translateX(-50%) scale(1)';
              opacity = 1;
              zIndex = 30;
              pointerEvents = 'auto';
            } else if (isPrev) {
              transform = 'translateX(calc(-50% - clamp(100px, 18vw, 220px))) scale(0.88) rotateY(12deg)';
              opacity = 0.72;
              zIndex = 20;
            } else if (isNext) {
              transform = 'translateX(calc(-50% + clamp(100px, 18vw, 220px))) scale(0.88) rotateY(-12deg)';
              opacity = 0.72;
              zIndex = 20;
            }

            return (
              <article
                key={item.id}
                className="absolute left-1/2 top-4 bottom-4 w-[52vw] max-w-[320px] min-w-[230px] rounded-xl overflow-hidden"
                style={{
                  aspectRatio: '9 / 16',
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transition: 'transform 420ms ease, opacity 320ms ease',
                  boxShadow: isCurrent
                    ? '0 24px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)'
                    : '0 14px 28px rgba(0,0,0,0.25)',
                }}
              >
                {failedIds.includes(item.id) ? (
                  <div
                    className="w-full h-full flex items-center justify-center px-6 text-center"
                    style={{ background: 'linear-gradient(145deg, #561525 0%, #3d0e19 100%)' }}
                  >
                    <p className="font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(240,228,204,0.9)' }}>
                      Este video .MOV nao abriu neste navegador.<br />
                      Se quiser, eu converto para .mp4 e fica 100% compativel.
                    </p>
                  </div>
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={item.src}
                    onError={() => {
                      setFailedIds((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]));
                    }}
                  />
                )}

                <div
                  className="absolute inset-0"
                  style={{
                    background: isCurrent
                      ? 'linear-gradient(180deg, rgba(61,14,25,0.12) 0%, rgba(61,14,25,0.45) 100%)'
                      : 'linear-gradient(180deg, rgba(61,14,25,0.2) 0%, rgba(61,14,25,0.62) 100%)',
                  }}
                />

                <span className="absolute top-3 left-3 badge-emboss font-sans text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-sm">
                  {item.tag}
                </span>

                <span
                  className="absolute bottom-3 left-3 right-3 font-sans text-[10px] uppercase tracking-widest"
                  style={{ color: 'rgba(240,228,204,0.95)' }}
                >
                  {item.label}
                </span>
              </article>
            );
          })}

          <button
            type="button"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-0 md:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full"
            style={{
              background: 'rgba(86,21,37,0.72)',
              border: '1px solid rgba(201,168,76,0.45)',
              color: '#F0E4CC',
            }}
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Próximo"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-0 md:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full"
            style={{
              background: 'rgba(86,21,37,0.72)',
              border: '1px solid rgba(201,168,76,0.45)',
              color: '#F0E4CC',
            }}
          >
            ›
          </button>
        </div>

        {/* Instrução */}
        <div
          className="mt-8 text-center py-5 px-6 rounded-sm"
          style={{
            background: 'rgba(201,168,76,0.1)',
            border: '1px dashed rgba(201,168,76,0.4)',
          }}
        >
          <p className="font-sans text-[11px]" style={{ color: '#7a6a5a' }}>
            No celular: arraste para os lados. No computador: clique nas laterais ou nas setas.
          </p>
        </div>
      </div>
    </section>
  );
}
