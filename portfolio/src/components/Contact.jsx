import { useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
                    }
                });
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="contact section" id="contact" ref={sectionRef}>
            <div className="container">
                <div className="contact__content">
                    <span className="section-label reveal">Contact</span>
                    <h2 className="contact__heading reveal reveal-delay-1">
                        Let's <em>talk.</em>
                    </h2>
                    <p className="contact__sub reveal reveal-delay-2">
                        Punya ide project atau ingin berkolaborasi?<br />
                        Mari terhubung.
                    </p>

                    <div className="contact__buttons reveal reveal-delay-3">
                        <a
                            href="https://www.linkedin.com/in/rayhan-christian-57b4b5366/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__cta"
                            data-cursor="link"
                        >
                            <span className="contact__cta-text">LinkedIn</span>
                            <span className="contact__cta-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </a>

                        <a
                            href="https://www.behance.net/rayhanchristian3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__cta contact__cta--outline"
                            data-cursor="link"
                        >
                            <span className="contact__cta-text">Behance</span>
                            <span className="contact__cta-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
