import { useEffect, useRef } from 'react';
import './TechStack.css';

const tools = [
    { name: 'Photoshop', img: '/images/Adobe_Photoshop_CC_icon.svg (1).png' },
    { name: 'Illustrator', img: '/images/Adobe_Illustrator_CC_icon.svg.png' },
    { name: 'Figma', img: '/images/Figma-logo.svg.png' },
    { name: 'VS Code', img: '/images/Visual_Studio_Code_1.35_icon.svg.png' },
    { name: 'Antigravity', img: '/images/antigravity.jpg' },
];

const techStack = [
    { name: 'HTML', img: '/images/HTML5_logo_and_wordmark.svg.png' },
    { name: 'CSS', img: '/images/CSS3_logo_and_wordmark.svg.png' },
    { name: 'JavaScript', img: '/images/JavaScript-logo.png' },
    { name: 'React', img: '/images/React-icon.svg.png' },
    { name: 'Laravel', img: '/images/Laravel-Logo.wine.png' },
    { name: 'PHP', img: '/images/PHP-logo.svg.png' },
    { name: 'MySQL', img: '/images/MySQL-Logo.wine.png' },
    { name: 'Java', img: '/images/Java_(programming_language)-Logo.wine.png' },
    { name: 'Python', img: '/images/Python-logo-notext.svg.png' },
];

export default function TechStack() {
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
        <section className="techstack section" id="techstack" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">Stack</span>
                <h2 className="section-heading reveal reveal-delay-1">
                    Tech Stack & <em>Tools</em>
                </h2>

                <div className="techstack__group reveal reveal-delay-2">
                    <h3 className="techstack__group-title">Tools</h3>
                    <div className="techstack__grid">
                        {tools.map((item) => (
                            <div key={item.name} className="techstack__item">
                                <div className="techstack__icon">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <span className="techstack__name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="techstack__group reveal reveal-delay-3">
                    <h3 className="techstack__group-title">Tech Stack</h3>
                    <div className="techstack__grid">
                        {techStack.map((item) => (
                            <div key={item.name} className="techstack__item">
                                <div className="techstack__icon">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <span className="techstack__name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
