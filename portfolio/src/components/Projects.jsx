import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
    {
        num: '01',
        title: 'Oilku',
        description:
            'Mengembangkan aplikasi UI/UX dengan mengusung tema recycling oil from household. Fokus pada user research dan prototyping.',
        tags: ['UI/UX', 'Figma', 'Research'],
        year: '2024',
    },
    {
        num: '02',
        title: 'Nusaquest',
        description:
            'Membuat asset game design dengan Blender 3D dan menyusun UI/UX dengan Figma. Game bertema petualangan budaya Nusantara.',
        tags: ['Game Design', 'Blender 3D', 'Figma'],
        year: '2024',
    },
    {
        num: '03',
        title: 'SI TA',
        description:
            'Membangun aplikasi website berbasis CRM untuk mengelola Tugas Akhir di Sistem Informasi UPJ.',
        tags: ['Web App', 'CRM', 'Full Stack'],
        year: '2025',
    },
];

export default function Projects() {
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
        <section className="projects section" id="projects" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">Selected Work</span>
                <h2 className="section-heading reveal reveal-delay-1">
                    Featured <em>Projects</em>
                </h2>

                <div className="projects__list">
                    {projects.map((project, index) => (
                        <div
                            key={project.num}
                            className={`projects__item reveal reveal-delay-${index + 2}`}
                            data-cursor="view"
                        >
                            <div className="projects__item-header">
                                <span className="projects__num">{project.num}</span>
                                <span className="projects__year">{project.year}</span>
                            </div>

                            <h3 className="projects__title">{project.title}</h3>

                            <p className="projects__desc">{project.description}</p>

                            <div className="projects__tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="projects__tag">{tag}</span>
                                ))}
                            </div>

                            <div className="projects__hover-line" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
