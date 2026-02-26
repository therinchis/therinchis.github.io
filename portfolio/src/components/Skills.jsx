import { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
    {
        num: '01',
        title: 'UI/UX Design',
        description:
            'Merancang antarmuka yang intuitif melalui riset pengguna, wireframing, prototyping, dan usability testing.',
        icon: '/images/Figma-logo.svg.png',
    },
    {
        num: '02',
        title: 'Front-End Development',
        description:
            'Membangun website modern dan responsif dengan HTML, CSS, JavaScript, dan React menggunakan Visual Studio Code.',
        icon: '/images/Visual_Studio_Code_1.35_icon.svg.png',
    },
    {
        num: '03',
        title: 'Machine Learning',
        description:
            'Eksplorasi teknologi AI untuk solusi cerdas — machine learning, NLP, dan computer vision menggunakan Python.',
        icon: '/images/Python-logo-notext.svg.png',
    },
    {
        num: '04',
        title: 'Graphic Design',
        description:
            'Membuat visual yang menarik dan komunikatif. Adobe Photoshop untuk editing, retouching, dan konten visual.',
        icon: '/images/Adobe_Photoshop_CC_icon.svg (1).png',
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
                            <div className="skills__left">
                                <span className="skills__num">{skill.num}</span>
                                <div className="skills__icon-wrap">
                                    <img className="skills__icon" src={skill.icon} alt={skill.title} />
                                </div>
                            </div>

                            <div className="skills__center">
                                <h3 className="skills__title">{skill.title}</h3>
                                <p className="skills__desc">{skill.description}</p>
                            </div>

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
