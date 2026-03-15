import './redesignHost.css';

export default function RedesignHost() {
  return (
    <main className="redesign-host" aria-label="T2MED redesign layout">
      <iframe
        title="T2MED 2026 redesign"
        src={`${process.env.PUBLIC_URL}/redesign-layout.html`}
        className="redesign-frame"
      />
    </main>
  );
}
