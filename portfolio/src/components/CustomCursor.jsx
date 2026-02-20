import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const [cursorText, setCursorText] = useState('');
    const [isHovering, setIsHovering] = useState(false);
    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const dot = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Hide on touch devices
        if ('ontouchstart' in window) return;

        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e) => {
            const target = e.target.closest('[data-cursor]');
            if (target) {
                setIsHovering(true);
                setCursorText(target.dataset.cursor === 'view' ? 'View' : '');
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target.closest('[data-cursor]');
            if (target) {
                setIsHovering(false);
                setCursorText('');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        let raf;
        const lerp = (a, b, n) => a + (b - a) * n;

        const animate = () => {
            pos.current.x = lerp(pos.current.x, mouse.current.x, 0.08);
            pos.current.y = lerp(pos.current.y, mouse.current.y, 0.08);
            dot.current.x = lerp(dot.current.x, mouse.current.x, 0.6);
            dot.current.y = lerp(dot.current.y, mouse.current.y, 0.6);

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
            }
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
            }

            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(raf);
        };
    }, []);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor ${isHovering ? 'custom-cursor--hover' : ''}`}
            >
                {cursorText && <span className="custom-cursor__text">{cursorText}</span>}
            </div>
            <div ref={cursorDotRef} className="custom-cursor__dot" />
        </>
    );
}
