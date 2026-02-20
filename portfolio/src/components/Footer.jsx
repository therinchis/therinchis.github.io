import './Footer.css';

export default function Footer() {
    const handleBackToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__copyright">
                    © {new Date().getFullYear()} Rayhan Christian
                </p>
                <a
                    href="#"
                    className="footer__top"
                    data-cursor="link"
                    onClick={handleBackToTop}
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}
