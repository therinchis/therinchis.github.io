import './Marquee.css';

export default function Marquee({ items, speed = 30, separator = '✦' }) {
    const content = items.join(` ${separator} `) + ` ${separator} `;

    return (
        <div className="marquee" aria-hidden="true">
            <div
                className="marquee__track"
                style={{ animationDuration: `${speed}s` }}
            >
                <span className="marquee__content">{content}</span>
                <span className="marquee__content">{content}</span>
            </div>
        </div>
    );
}
