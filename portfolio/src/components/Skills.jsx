import { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
    {
        num: '01',
        title: 'Graphic Design',
        description:
            'Membuat visual yang menarik dan komunikatif. Adobe Photoshop untuk editing, retouching, dan konten visual.',
        icon: (
            <svg className="skills__icon" viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5 0h155C220.4 0 240 19.6 240 42.5v149c0 22.9-19.6 42.5-42.5 42.5h-155C19.6 234 0 214.4 0 191.5v-149C0 19.6 19.6 0 42.5 0z" fill="#001E36" />
                <path d="M54 164.1V75.3c0-.6.3-.9.9-.9 3.7-.1 7.5-.2 12.5-.3 5-.1 10.3-.2 15.8-.2 11.2 0 19.6 2.4 25.4 7 5.6 4.4 8.6 11 8.6 19.5 0 5.6-1.4 10.5-4.2 14.6-2.8 4.1-6.7 7.3-11.6 9.5-4.9 2.2-10.5 3.3-16.8 3.3-3.3 0-5.6-.1-7-.2v36.5c.1.5-.3.9-.8.9H55c-.6 0-.9-.3-1-.9zm22.2-69.2v23.4c2 .3 4.3.4 6.9.4 4.5 0 8.1-1.2 10.8-3.5 2.6-2.3 3.9-5.6 3.9-9.7 0-3.7-1.2-6.5-3.5-8.6-2.2-2-5.7-3-10.2-3-2.6 0-5 .1-7 .3-.5-.1-.9.3-.9.7z" fill="#31A8FF" />
                <path d="M161.3 99.7c-4.1-2-8.6-3-13.5-3-4.5 0-6.7 1.6-6.7 4.3 0 2.8 2 4.3 7.4 6.2 10.4 3.6 16.2 8.8 16.2 18.3 0 12-9.2 18.4-24.1 18.4-6.7 0-12.5-1.2-16.7-3.3-.5-.3-.7-.6-.7-1.2v-16.5c0-.5.3-.7.7-.5 4.8 3 10.4 4.7 15.3 4.7 4.7 0 7-1.5 7-4.6s-2.4-4.7-8.2-6.9c-9.4-3.5-15.1-8.1-15.1-17.8 0-11.3 8.6-18.1 22.8-18.1 6.5 0 11.4.9 15.1 2.6.6.3.8.7.8 1.3V99c0 .5-.4.9-.8.9-.2 0-.4 0-.5-.1z" fill="#31A8FF" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description:
            'Merancang antarmuka yang intuitif melalui riset pengguna, wireframing, prototyping, dan usability testing.',
        icon: (
            <svg className="skills__icon" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
                <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
                <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
                <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
                <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'AI Engineering',
        description:
            'Eksplorasi teknologi AI untuk solusi cerdas — machine learning, NLP, dan computer vision menggunakan Python.',
        icon: (
            <svg className="skills__icon" viewBox="0 0 256 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.9.1C62.3.1 66.4 28.2 66.4 28.2l.1 29.2h61.5v8.7H39.6S0 61.7 0 127.3c0 65.6 34.5 63.3 34.5 63.3h20.6v-30.5s-1.1-34.5 33.9-34.5h58.4s32.8.5 32.8-31.7V34.1S185 .1 126.9.1zm-32.4 19.7a10.5 10.5 0 1 1 0 21.1 10.5 10.5 0 0 1 0-21.1z" fill="#366A96" />
                <path d="M128.8 254.1c64.6 0 60.5-28.1 60.5-28.1l-.1-29.2h-61.5v-8.7h88.4s39.6 4.4 39.6-61.2c0-65.6-34.5-63.3-34.5-63.3h-20.6v30.5s1.1 34.5-33.9 34.5H109s-32.8-.5-32.8 31.7v59.8s-5 34 54.7 34zm32.4-19.7a10.5 10.5 0 1 1 0-21.1 10.5 10.5 0 0 1 0 21.1z" fill="#FFC331" />
            </svg>
        ),
    },
];

export default function Skills() {
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
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills section" id="skills" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">Services</span>
                <h2 className="section-heading reveal reveal-delay-1">
                    What I <em>do</em>
                </h2>

                <div className="skills__list">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.num}
                            className={`skills__item reveal reveal-delay-${index + 2}`}
                            data-cursor="link"
                        >
                            {/* Left: number + icon */}
                            <div className="skills__left">
                                <span className="skills__num">{skill.num}</span>
                                <div className="skills__icon-wrap">{skill.icon}</div>
                            </div>

                            {/* Center: title + description */}
                            <div className="skills__center">
                                <h3 className="skills__title">{skill.title}</h3>
                                <p className="skills__desc">{skill.description}</p>
                            </div>

                            {/* Right: arrow */}
                            <div className="skills__right">
                                <svg className="skills__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                </svg>
                            </div>

                            <div className="skills__accent-line" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
