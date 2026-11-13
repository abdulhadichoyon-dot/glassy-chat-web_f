const words = ['Creative technology', 'Web experiments', 'Thoughtful interfaces', 'Learning by building'];

export default function Marquee() {
  const loop = [...words, ...words];
  return (
    <div className="marquee-band" aria-label="Interests">
      <div className="marquee-track" aria-hidden="true">
        {loop.map((word, index) => (
          <span className="marquee-item" key={`${word}-${index}`}>
            {word}<i />
          </span>
        ))}
      </div>
    </div>
  );
}
