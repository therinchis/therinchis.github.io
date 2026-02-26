import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
    {
        num: '01',
        title: 'Oilku',
        description:
            'Mengembangkan aplikasi UI/UX dengan mengusung tema recycling oil from household. Fokus pada user research dan prototyping.',
        tags: ['UI/UX', 'Figma', 'Research'],
        year: '2025',
        link: 'https://www.figma.com/proto/E3LGiRf8K56L3tMwGTtRFV/Cosmos_Technology-for-Enviroment_OilKu?node-id=17-737&p=f&t=njEDIzVOs6w9Uxws-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=17%3A737',
    },
    {
        num: '02',
        title: 'Nusaquest',
        description:
            'Membuat asset game design dengan Blender 3D dan menyusun UI/UX dengan Figma. Game bertema petualangan budaya Nusantara.',
        tags: ['Game Design', 'Blender 3D', 'Figma'],
        year: '2025',
    },
    {
        num: '03',
        title: 'Penum GO',
        description:
            'Mendesain UI/UX aplikasi mobile pemesanan tiket pesawat dengan fitur pencarian penerbangan, pemilihan kursi, boarding pass digital, dan tracking penerbangan real-time.',
        tags: ['UI/UX', 'Mobile App', 'Figma'],
        year: '2025',
        link: 'https://www.figma.com/proto/GdsckI1U7C9s13re0EqbQC/Penum-Go?page-id=4%3A51&node-id=765-759&p=f&viewport=-1785%2C-682%2C0.04&t=Xu8J5oHeUsHS0azg-1&scaling=min-zoom&content-scaling=fixed',
    },
    {
        num: '04',
        title: 'SI TA',
        description:
            'Membangun aplikasi website berbasis MVC untuk mengelola Tugas Akhir di Sistem Informasi UPJ.',
        tags: ['Web App', 'MVC', 'FULL-STACK', 'MySQL', 'Bootstrap'],
        year: '2026',
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
                    {projects.map((project, index) => {
                        const ItemTag = project.link ? 'a' : 'div';
                        return (
                            <ItemTag
                                key={project.num}
                                href={project.link}
                                target={project.link ? "_blank" : undefined}
                                rel={project.link ? "noopener noreferrer" : undefined}
                                className={`projects__item reveal reveal-delay-${index + 2}`}
                                data-cursor={project.link ? "view" : ""}
                                style={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
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
                            </ItemTag>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
