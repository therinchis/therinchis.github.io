import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
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
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">About</span>

                <div className="about__content">
                    <h2 className="about__headline reveal reveal-delay-1">
                        Saya percaya bahwa desain yang baik bukan soal estetika —
                        tetapi tentang <em>menciptakan pengalaman</em> yang bermakna
                        dan <em>intuitif</em> bagi pengguna.
                    </h2>

                    <div className="about__bottom reveal reveal-delay-3">
                        <div className="about__image-wrap">
                            <img
                                src="/images/sequence/frame-001.jpg"
                                alt="Rayhan Christian"
                                className="about__image"
                            />
                        </div>

                        <div className="about__meta">
                            <div className="about__meta-item">
                                <span className="about__meta-label">Study</span>
                                <span className="about__meta-value">Sistem Informasi</span>
                            </div>
                            <div className="about__meta-item">
                                <span className="about__meta-label">University</span>
                                <span className="about__meta-value">Universitas Pembangunan Jaya</span>
                            </div>
                            <div className="about__meta-item">
                                <span className="about__meta-label">Focus</span>
                                <span className="about__meta-value">UI/UX & Graphic Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
