import { useEffect, useRef } from 'react';
import './Achievement.css';

const achievements = [
    {
        year: '2025',
        title: 'Best Presenter',
        event: 'Seminar Nasional Penelitian (SEMNASLIT) 2025',
        org: 'Universitas Muhammadiyah Jakarta',
        detailLabel: 'Paper',
        detailText: 'Prediksi Gaji Karyawan dengan Machine Learning menggunakan Teknik Linear Regression dan Decision Tree',
        link: 'https://www.linkedin.com/posts/rayhan-christian-57b4b5366_umj-machinelearning-semnaslit-activity-7388957462139289600-mkx0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrXr-8BtWV9T5Ny8reJdbHow993JQUTkuM',
    },
    {
        year: '2025',
        title: 'Participant',
        event: 'Hackfest International UI/UX Competition 2025',
        org: 'Universitas Ciputra Surabaya',
        detailLabel: 'Project',
        detailText: ' Mengembangkan aplikasi UI/UX dengan mengusung tema recycling oil from household. Fokus pada user research dan prototyping.',
        link: 'https://www.figma.com/proto/E3LGiRf8K56L3tMwGTtRFV/Cosmos_Technology-for-Enviroment_OilKu?node-id=17-737&p=f&t=njEDIzVOs6w9Uxws-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=17%3A737',
    },
];

export default function Achievement() {
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
        <section className="achievement section" id="achievement" ref={sectionRef}>
            <div className="container">
                <span className="section-label reveal">Recognition</span>
                <h2 className="section-heading reveal reveal-delay-1">
                    Achievement & <em>Experience</em>
                </h2>

                <div className="achievement__list">
                    {achievements.map((item, index) => {
                        const ItemTag = item.link ? 'a' : 'div';
                        return (
                            <ItemTag
                                key={index}
                                href={item.link}
                                target={item.link ? "_blank" : undefined}
                                rel={item.link ? "noopener noreferrer" : undefined}
                                className={`achievement__item reveal reveal-delay-${index + 2}`}
                                data-cursor={item.link ? "view" : ""}
                            >
                                <div className="achievement__top">
                                    <span className="achievement__year">{item.year}</span>
                                    <div className="achievement__badge">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 15l-3.5 2 .67-3.89L6 10.11l3.91-.57L12 6l2.09 3.54 3.91.57-2.83 2.76.67 3.89L12 15z" />
                                        </svg>
                                        <span>{item.title}</span>
                                    </div>
                                </div>

                                <h3 className="achievement__event">{item.event}</h3>
                                <p className="achievement__org">{item.org}</p>

                                <p className="achievement__paper">
                                    <span className="achievement__paper-label">{item.detailLabel}:</span> "{item.detailText}"
                                </p>

                                {item.link && (
                                    <div className="achievement__cta">
                                        <span>{item.link.includes('figma.com') ? 'View Prototype' : 'View on LinkedIn'}</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </div>
                                )}

                                <div className="achievement__accent-line" />
                            </ItemTag>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
