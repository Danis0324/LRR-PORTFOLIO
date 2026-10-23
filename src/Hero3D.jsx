import React from 'react';

/* ================= Hero3D — 黑粉科技风封面 3D 层 =================
   Aurora 渐变天空 + 加色发光粒子场 + 浮动线框几何体 + 鼠标视差 + 滚动退场
   - Canvas 2D 全屏图层,外层 CSS mix-blend-mode:screen 只增亮、不遮画面
   - 性能分级(高/中/低):粒子数 / 像素比 / 鼠标斥力 / 几何体数量自动降级
   - prefers-reduced-motion:静态构图,不跑 rAF,滚动只做透明度淡出
   - 离屏(IntersectionObserver)暂停渲染,卸载即清理,无外部依赖 */

/* ---------- 黑粉 palette ---------- */
const PALETTE = [
  [255, 77, 157],   // 主粉
  [255, 157, 196],  // 浅粉
  [247, 37, 133],   // 品红
  [255, 214, 232],  // 粉白
  [184, 41, 158],   // 紫粉
];
const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/* ---------- Aurora 渐变天空(低分辨率离屏渲染,放大铺满) ---------- */
const AURORA_BLOBS = [
  { color: [255, 77, 157], alpha: 0.20, ax: 0.30, ay: 0.32, rx: 0.34, ry: 0.30, sx: 0.05, sy: 0.04, sp: 0.045 },
  { color: [184, 41, 158], alpha: 0.17, ax: 0.72, ay: 0.62, rx: 0.36, ry: 0.32, sx: -0.04, sy: 0.05, sp: 0.031 },
  { color: [255, 157, 196], alpha: 0.11, ax: 0.52, ay: 0.80, rx: 0.30, ry: 0.24, sx: 0.06, sy: -0.03, sp: 0.052 },
  { color: [96, 24, 88], alpha: 0.20, ax: 0.18, ay: 0.74, rx: 0.32, ry: 0.28, sx: -0.05, sy: -0.04, sp: 0.026 },
];
const AURORA_W = 192;
const AURORA_H = 108;

function renderAurora(off, t) {
  const g = off.getContext('2d');
  g.clearRect(0, 0, AURORA_W, AURORA_H);
  g.globalCompositeOperation = 'lighter';
  for (const b of AURORA_BLOBS) {
    const cx = (b.ax + Math.sin(t * b.sp + b.sx * 10) * b.sx) * AURORA_W;
    const cy = (b.ay + Math.cos(t * b.sp * 0.8 + b.sy * 10) * b.sy) * AURORA_H;
    const rx = b.rx * AURORA_W;
    const ry = b.ry * AURORA_H;
    const grad = g.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
    grad.addColorStop(0, rgba(b.color, b.alpha));
    grad.addColorStop(0.55, rgba(b.color, b.alpha * 0.38));
    grad.addColorStop(1, rgba(b.color, 0));
    g.save();
    g.translate(cx, cy);
    g.scale(1, ry / Math.max(rx, ry));
    g.translate(-cx, -cy);
    g.fillStyle = grad;
    g.fillRect(cx - rx * 1.6, cy - Math.max(rx, ry) * 1.6, rx * 3.2, Math.max(rx, ry) * 3.2);
    g.restore();
  }
  g.globalCompositeOperation = 'source-over';
}

/* ---------- 粒子发光精灵(按颜色预渲染,避免每帧建渐变) ---------- */
function makeSprite(color) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, rgba(color, 1));
  grad.addColorStop(0.22, rgba(color, 0.6));
  grad.addColorStop(0.55, rgba(color, 0.16));
  grad.addColorStop(1, rgba(color, 0));
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}

/* ---------- 低多边形几何体(顶点 + 边) ---------- */
function normalize(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

function edgesByDistance(verts, factor = 1.25) {
  let min = Infinity;
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.hypot(verts[i][0] - verts[j][0], verts[i][1] - verts[j][1], verts[i][2] - verts[j][2]);
      if (d < min) min = d;
    }
  }
  const edges = [];
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.hypot(verts[i][0] - verts[j][0], verts[i][1] - verts[j][1], verts[i][2] - verts[j][2]);
      if (d < min * factor) edges.push([i, j]);
    }
  }
  return edges;
}

function makeIcosa() {
  const phi = (1 + Math.sqrt(5)) / 2;
  const raw = [];
  for (const a of [-1, 1]) {
    for (const b of [-phi, phi]) {
      raw.push([0, a, b], [b, 0, a], [a, b, 0]);
    }
  }
  const verts = raw.map(normalize);
  return { verts, edges: edgesByDistance(verts) };
}

function makeOcta() {
  const verts = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  const edges = [];
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.hypot(verts[i][0] - verts[j][0], verts[i][1] - verts[j][1], verts[i][2] - verts[j][2]);
      if (d < 1.9) edges.push([i, j]);
    }
  }
  return { verts, edges };
}

function makeTetra() {
  const verts = [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]];
  const edges = [];
  for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) edges.push([i, j]);
  return { verts, edges };
}

function makeCube() {
  const verts = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) verts.push([x, y, z]);
  const edges = [];
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const diff = verts[i].filter((v, k) => v !== verts[j][k]).length;
      if (diff === 1) edges.push([i, j]);
    }
  }
  return { verts, edges };
}

function makeTorus(M = 16, N = 8, R = 1, r = 0.38) {
  const verts = [];
  const edges = [];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const u = (i / M) * Math.PI * 2;
      const v = (j / N) * Math.PI * 2;
      verts.push([(R + r * Math.cos(v)) * Math.cos(u), (R + r * Math.cos(v)) * Math.sin(u), r * Math.sin(v)]);
    }
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const a = i * N + j;
      edges.push([a, ((i + 1) % M) * N + j]);
      edges.push([a, i * N + ((j + 1) % N)]);
    }
  }
  return { verts, edges };
}

/* ---------- 场景物件(位置为屏幕比例,世界坐标) ---------- */
function buildObjects() {
  const icosa = makeIcosa();
  const octa = makeOcta();
  const tetra = makeTetra();
  const cube = makeCube();
  const torus = makeTorus();
  return [
    { geo: icosa, x: -0.30, y: -0.26, z: 210, scale: 130, color: PALETTE[0], mode: 'wire', ax: 0.11, ay: 0.17, az: 0.05, bob: 14, bobSp: 0.5, phase: 0.4, alpha: 0.85 },
    { geo: octa, x: 0.34, y: 0.30, z: 120, scale: 92, color: PALETTE[2], mode: 'fill', ax: -0.14, ay: 0.1, az: 0.12, bob: 18, bobSp: 0.42, phase: 2.1, alpha: 0.9 },
    { geo: torus, x: 0.40, y: -0.34, z: 60, scale: 118, color: PALETTE[1], mode: 'wire', ax: 0.08, ay: -0.12, az: 0.06, bob: 12, bobSp: 0.6, phase: 1.2, alpha: 0.75 },
    { geo: tetra, x: -0.40, y: 0.38, z: 30, scale: 74, color: PALETTE[3], mode: 'wire', ax: 0.19, ay: 0.14, az: -0.1, bob: 16, bobSp: 0.55, phase: 3.4, alpha: 0.8 },
    { geo: cube, x: 0.16, y: -0.44, z: 300, scale: 66, color: PALETTE[4], mode: 'wire', ax: 0.06, ay: 0.09, az: 0.04, bob: 10, bobSp: 0.48, phase: 5.0, alpha: 0.6 },
    { geo: icosa, x: -0.12, y: 0.46, z: 240, scale: 58, color: PALETTE[2], mode: 'fill', ax: -0.1, ay: -0.15, az: 0.08, bob: 12, bobSp: 0.62, phase: 1.8, alpha: 0.55 },
    { geo: octa, x: 0.52, y: 0.06, z: 340, scale: 46, color: PALETTE[1], mode: 'wire', ax: 0.13, ay: 0.11, az: -0.06, bob: 9, bobSp: 0.7, phase: 4.2, alpha: 0.5 },
  ];
}

const FOV = 860;
const CAM_Z = 640;
const TIER_PARTICLE = { high: 1500, medium: 760, low: 240 };
const TIER_DPR = { high: 2, medium: 1.5, low: 1 };
const TIER_OBJECTS = { high: 7, medium: 6, low: 4 };
const REDUCED_PARTICLES = 220;

function rotatePoint(x, y, z, ax, ay, az) {
  const y1 = y * Math.cos(ax) - z * Math.sin(ax);
  const z1 = y * Math.sin(ax) + z * Math.cos(ax);
  const x2 = x * Math.cos(ay) + z1 * Math.sin(ay);
  const z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
  return [x2 * Math.cos(az) - y1 * Math.sin(az), x2 * Math.sin(az) + y1 * Math.cos(az), z2];
}

export default function Hero3D({ density = 1, quality = 'auto' }) {
  const wrapRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const stateRef = React.useRef(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const sprites = PALETTE.map(makeSprite);
    const aurora = document.createElement('canvas');
    aurora.width = AURORA_W;
    aurora.height = AURORA_H;
    const objects = buildObjects();

    /* ---- 可变状态(闭包内,随效果销毁) ---- */
    const st = {
      w: 0, h: 0, dpr: 1,
      particles: [],
      tier: quality === 'auto' ? 'medium' : quality,
      tierLocked: quality !== 'auto',
      frameTimes: [],
      mouse: { x: 0, y: 0, tx: 0, ty: 0, known: false },
      scrollP: 0,
      time: 0,
      last: 0,
      raf: 0,
      visible: true,
      auroraTick: 0,
    };
    stateRef.current = st;

    const targetCount = () => {
      const base = reduce ? REDUCED_PARTICLES : TIER_PARTICLE[st.tier];
      return Math.round(base * Math.max(0.2, Math.min(1.8, density)));
    };

    const makeParticle = (fromTop) => ({
      x: Math.random() * st.w,
      y: fromTop ? -12 - Math.random() * 40 : Math.random() * st.h,
      z: 0.22 + Math.random() * 0.78,
      size: 1 + Math.random() * 3.2,
      op: 0.16 + Math.random() * 0.62,
      ci: Math.floor(Math.random() * PALETTE.length),
      phase: Math.random() * Math.PI * 2,
      swirl: 0.4 + Math.random() * 1.1,
    });

    const syncParticles = () => {
      const n = targetCount();
      while (st.particles.length < n) st.particles.push(makeParticle(false));
      if (st.particles.length > n) st.particles.length = n;
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dprCap = reduce ? 1 : TIER_DPR[st.tier];
      st.w = Math.max(1, rect.width);
      st.h = Math.max(1, rect.height);
      st.dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      canvas.width = Math.round(st.w * st.dpr);
      canvas.height = Math.round(st.h * st.dpr);
      canvas.style.width = st.w + 'px';
      canvas.style.height = st.h + 'px';
      syncParticles();
    };

    /* ---- 绘制一帧 ---- */
    const drawFrame = (dt) => {
      const { w, h } = st;
      const cx = w / 2;
      const cy = h / 2;
      const p = st.scrollP;
      ctx.setTransform(st.dpr, 0, 0, st.dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      /* 1. Aurora 天空(每 3 帧重绘一次离屏层,放大铺满) */
      if (st.auroraTick % 3 === 0) renderAurora(aurora, st.time);
      st.auroraTick++;
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = 0.95 * (1 - p * 0.4);
      ctx.drawImage(aurora, 0, 0, w, h);
      ctx.globalAlpha = 1;

      /* 2. 鼠标视差(带惯性) */
      st.mouse.x += (st.mouse.tx - st.mouse.x) * Math.min(1, dt * 5);
      st.mouse.y += (st.mouse.ty - st.mouse.y) * Math.min(1, dt * 5);
      const camX = st.mouse.x * 90;
      const camY = st.mouse.y * 55;

      /* 3. 粒子场:上升涡旋 + 湍流 + 鼠标斥力 + 滚动加速外扩 */
      const R = 110;
      const R2 = R * R;
      const repulse = st.tier !== 'low' && !reduce;
      for (const pt of st.particles) {
        const ang = Math.atan2(pt.y - cy, pt.x - cx);
        const out = (5 + 9 * pt.z) * (1 + p * 2.6);
        pt.x += Math.cos(ang) * out * dt;
        pt.y += Math.sin(ang) * out * dt - (7 + 15 * pt.z) * dt;
        pt.x += Math.sin(st.time * 0.7 + pt.phase) * 7 * dt;
        pt.y += Math.cos(st.time * 0.6 + pt.phase * 1.3) * 7 * dt;
        if (repulse && st.mouse.known) {
          const dx = pt.x - st.mouse.px;
          const dy = pt.y - st.mouse.py;
          const d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = (1 - d / R) * 240 * dt;
            pt.x += (dx / d) * f;
            pt.y += (dy / d) * f;
          }
        }
        if (pt.y < -16) { pt.y = h + 14; pt.x = Math.random() * w; }
        if (pt.x < -16) pt.x = w + 14;
        if (pt.x > w + 16) pt.x = -14;
        const s = pt.size * pt.z * (1 + p * 0.5) * st.dpr * 0.9 + 4;
        ctx.globalAlpha = Math.max(0, pt.op * pt.z * (1 - p * 0.85));
        ctx.drawImage(sprites[pt.ci], pt.x - s / 2, pt.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;

      /* 4. 浮动线框几何体(远→近排序,透视投影 + 视差) */
      const count = reduce ? TIER_OBJECTS.low : TIER_OBJECTS[st.tier];
      const list = objects.slice(0, count).map((o, i) => ({ o, i }));
      list.sort((a, b) => b.o.z - a.o.z);
      for (const { o } of list) {
        const spread = 1 + p * 0.55;
        const ox = cx + o.x * w * spread;
        const oy = cy + o.y * h * spread + Math.sin(st.time * o.bobSp + o.phase) * o.bob;
        const ax = st.time * o.ax;
        const ay = st.time * o.ay;
        const az = st.time * o.az;
        const alpha = Math.max(0, o.alpha * (1 - p));
        if (alpha <= 0.01) continue;
        const layer = (o.z + CAM_Z) / CAM_Z;
        const shiftX = -camX * layer;
        const shiftY = -camY * layer;
        const proj = [];
        for (const v of o.geo.verts) {
          const rp = rotatePoint(v[0] * o.scale, v[1] * o.scale, v[2] * o.scale, ax, ay, az);
          const zz = rp[2] + o.z + CAM_Z;
          if (zz < 24) { proj.push(null); continue; }
          const s = FOV / zz;
          proj.push([ox + shiftX + rp[0] * s, oy + shiftY + rp[1] * s, s]);
        }
        const depthFade = Math.max(0.25, Math.min(1, 1.25 - (o.z + 200) / 900));
        ctx.globalAlpha = alpha * depthFade;
        if (o.mode === 'fill') {
          ctx.beginPath();
          let started = false;
          for (const e of o.geo.edges) {
            const a = proj[e[0]];
            const b = proj[e[1]];
            if (!a || !b) continue;
            if (!started) { ctx.moveTo(a[0], a[1]); started = true; }
            ctx.lineTo(b[0], b[1]);
          }
          ctx.closePath();
          ctx.fillStyle = rgba(o.color, 0.1);
          ctx.fill();
        }
        ctx.beginPath();
        for (const e of o.geo.edges) {
          const a = proj[e[0]];
          const b = proj[e[1]];
          if (!a || !b) continue;
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(b[0], b[1]);
        }
        ctx.lineWidth = Math.max(0.7, 1.5 * (FOV / (o.z + CAM_Z)) * 0.12 + 0.5);
        ctx.strokeStyle = rgba(o.color, o.mode === 'fill' ? 0.85 : 0.6);
        ctx.shadowColor = rgba(o.color, 0.8);
        ctx.shadowBlur = st.tier === 'low' ? 0 : 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    /* ---- 静态帧(reduced-motion) ---- */
    const drawStatic = () => {
      st.time = 6;
      st.mouse.x = st.mouse.tx;
      st.mouse.y = st.mouse.ty;
      drawFrame(0.016);
    };

    /* ---- 主循环 ---- */
    const frame = (now) => {
      st.raf = 0;
      if (!st.visible) return;
      const dt = st.last ? Math.min(0.05, (now - st.last) / 1000) : 0.016;
      st.last = now;
      st.time += dt;

      /* 性能分级:前 60 帧测速,未锁定则定档 */
      if (!st.tierLocked && !reduce) {
        st.frameTimes.push(dt);
        if (st.frameTimes.length >= 60) {
          const avg = st.frameTimes.reduce((a, b) => a + b, 0) / st.frameTimes.length;
          const next = avg < 0.019 ? 'high' : avg < 0.032 ? 'medium' : 'low';
          if (next !== st.tier) {
            st.tier = next;
            resize();
          }
          st.tierLocked = true;
        }
      }

      st.mouse.px = (st.mouse.x * 0.5 + 0.5) * st.w;
      st.mouse.py = (st.mouse.y * 0.5 + 0.5) * st.h;
      drawFrame(dt);
      st.raf = requestAnimationFrame(frame);
    };

    const wake = () => { if (!st.raf && st.visible) st.raf = requestAnimationFrame(frame); };

    /* ---- 滚动退场:封面滚出视口时粒子外扩 + 整体淡出 ---- */
    const applyScroll = () => {
      const rect = wrap.getBoundingClientRect();
      st.scrollP = Math.max(0, Math.min(1, 1 - rect.bottom / window.innerHeight));
      wrap.style.opacity = String(1 - st.scrollP * 0.98);
      if (reduce) drawStatic();
    };
    const onScroll = () => { applyScroll(); };

    /* ---- 鼠标视差目标 ---- */
    const onPointerMove = (e) => {
      st.mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      st.mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
      st.mouse.known = true;
      if (reduce) { st.mouse.x = st.mouse.tx; st.mouse.y = st.mouse.ty; applyScroll(); }
    };
    const onPointerLeave = () => { st.mouse.known = false; };

    /* ---- 监听 ---- */
    const io = new IntersectionObserver((entries) => {
      st.visible = entries.some((en) => en.isIntersecting);
      if (st.visible) { st.last = 0; wake(); }
    }, { threshold: 0.01 });
    io.observe(wrap);
    const ro = new ResizeObserver(() => { resize(); if (reduce) drawStatic(); });
    ro.observe(wrap);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);

    resize();
    applyScroll();
    if (reduce) drawStatic(); else wake();

    return () => {
      cancelAnimationFrame(st.raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      stateRef.current = null;
    };
  }, [density, quality]);

  return (
    <div className="hero-3d-layer" ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} className="hero-3d-canvas" />
    </div>
  );
}
