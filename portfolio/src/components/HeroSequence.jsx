import { useEffect, useRef, useState } from 'react';
import './HeroSequence.css';

const FRAME_COUNT = 5;
const FRAME_PATHS = Array.from(
    { length: FRAME_COUNT },
    (_, i) => `/images/sequence/frame-${String(i + 1).padStart(3, '0')}.jpg`
);

export default function HeroSequence() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const images = [];

        FRAME_PATHS.forEach((src, index) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    imagesRef.current = images;
                    setLoaded(true);
                    drawFrame(0);
                }
            };
            images[index] = img;
        });
    }, []);

    const drawFrame = (index) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const img = imagesRef.current[index];
        if (!img) return;

        const dpr = window.devicePixelRatio || 1;
        const w = canvas.parentElement.offsetWidth;
        const h = canvas.parentElement.offsetHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.scale(dpr, dpr);

        const scale = Math.max(w / img.width, h / img.height);
        const x = (w - img.width * scale) / 2;
        const y = (h - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useEffect(() => {
        if (!loaded) return;

        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const scrollHeight = container.offsetHeight - window.innerHeight;
            const progress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);
            const frameIndex = Math.min(Math.floor(progress * FRAME_COUNT), FRAME_COUNT - 1);
            drawFrame(frameIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [loaded]);

    const nameLetters = 'Rayhan'.split('');
    const lastLetters = 'Christian'.split('');

    return (
        <section className="hero" ref={containerRef} id="hero">
            <div className="hero__sticky">
                {/* Image side */}
                <div className="hero__image-col">
                    <canvas
                        ref={canvasRef}
                        className={`hero__canvas ${loaded ? 'loaded' : ''}`}
                    />
                    <div className="hero__image-overlay" />
                </div>

                {/* Text side */}
                <div className="hero__text-col">
                    <div className="hero__text-inner">
                        <p className="hero__label">Portfolio © 2026</p>

                        <h1 className="hero__name">
                            <span className="hero__name-line">
                                {nameLetters.map((l, i) => (
                                    <span
                                        key={i}
                                        className="hero__char"
                                        style={{ animationDelay: `${0.6 + i * 0.04}s` }}
                                    >{l}</span>
                                ))}
                            </span>
                            <span className="hero__name-line hero__name-line--serif">
                                {lastLetters.map((l, i) => (
                                    <span
                                        key={i}
                                        className="hero__char"
                                        style={{ animationDelay: `${0.85 + i * 0.04}s` }}
                                    >{l}</span>
                                ))}
                            </span>
                        </h1>

                        <div className="hero__info">
                            <p className="hero__role">
                                UI/UX Designer &<br />
                                Graphic Designer
                            </p>
                            <p className="hero__location">
                                Based in Jakarta,<br />
                                Indonesia
                            </p>
                        </div>

                        <div className="hero__scroll-cue">
                            <span className="hero__scroll-text">Scroll to explore</span>
                            <svg className="hero__scroll-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
