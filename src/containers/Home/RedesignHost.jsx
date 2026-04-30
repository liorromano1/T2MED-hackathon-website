import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import StoryScroller from '../../components/StoryScroller';
import './redesignHost.css';

export default function RedesignHost() {
  const iframeRef = useRef(null);
  const [storyMountNode, setStoryMountNode] = useState(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return undefined;
    }

    const syncStoryMount = () => {
      const document = iframe.contentDocument;
      setStoryMountNode(document ? document.getElementById('story-scroller-root') : null);
    };

    syncStoryMount();
    iframe.addEventListener('load', syncStoryMount);

    return () => {
      iframe.removeEventListener('load', syncStoryMount);
    };
  }, []);

  return (
    <>
      <main className="redesign-host" aria-label="T2MED redesign layout">
        <iframe
          ref={iframeRef}
          title="T2MED 2026 redesign"
          src={`${process.env.PUBLIC_URL}/redesign-layout.html`}
          className="redesign-frame"
        />
      </main>
      {storyMountNode ? ReactDOM.createPortal(<StoryScroller />, storyMountNode) : null}
    </>
  );
}
