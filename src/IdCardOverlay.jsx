import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import LetterGlitch from './LetterGlitch';
import Lanyard from './Lanyard';
import './IdCardOverlay.css';

const CARD_IMAGE = './assets/idcard-linruiru-transparent.png';

export default function IdCardOverlay({ open, onClose }) {
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const onKey = event => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('id-card-open');
    requestAnimationFrame(() => dialogRef.current?.focus());
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('id-card-open');
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="id-card-overlay"
      role="presentation"
      onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="id-card-glitch-bg" aria-hidden="true">
        <LetterGlitch
          glitchColors={['#ffffff', '#ff4d9d', '#ffb9d6']}
          baseColor="#ffffff"
          fontSize={14}
          spacing={0.6}
          density={0.9}
          baseOpacity={0.07}
          glitchAmount={0.34}
          speed={1}
          flow={0.5}
          smooth={true}
          interactive={true}
          cursorRadius={140}
          clickEffect="tear"
          edgeFade={0.08}
          centerFade={0.14}
          intro={true}
          backgroundColor="#050205"
        />
      </div>
      <div className="id-card-vignette" aria-hidden="true" />
      <div className="id-card-scene" ref={dialogRef} tabIndex="-1" role="dialog" aria-modal="true" aria-label="林瑞如身份 ID 卡">
        <div className="id-card-scene-kicker">IDENTITY / 2026 / LRR</div>
        <div className="id-card-lanyard-stage">
          <Lanyard
            frontImage={CARD_IMAGE}
            backImage={CARD_IMAGE}
            imageFit="contain"
            cardColor="rgba(14, 11, 16, 0)"
            orientation="portrait"
            finish="matte"
            cornerRadius={0.22}
            size={0.8}
            anchor="center"
            strapLength={0.3}
            strapColor="#171019"
            strapWidth={0.72}
            metal="silver"
            gravity={1}
            damping={0.48}
            elasticity={0.56}
            breeze={0.42}
            interactive={true}
            intro={true}
          />
        </div>
      </div>
      <button className="id-card-close" type="button" onClick={onClose} aria-label="关闭身份 ID 卡"><X size={20} /><span>关闭</span></button>
      <a className="id-card-mail" href="mailto:773614142@qq.com">联系林瑞如 <ArrowUpRight size={16} /></a>
    </div>
  );
}
