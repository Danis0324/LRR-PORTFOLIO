import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Mail, Phone, Plus, Menu, X, SlidersHorizontal, RotateCcw, Download, Upload, Monitor, Palette, Zap } from 'lucide-react';
import TechText from './TechText';
import FeatureCard from './FeatureCard';
import GlowCursor from './GlowCursor';
import SpecularButton from './SpecularButton';
import Hero3D from './Hero3D';
import IdCardOverlay from './IdCardOverlay';
import './styles.css';

const A = './assets/';
const PUBLISH_MODE = true;
const PUBLISHED_SETTINGS = {"brandText":"LRR","brandAccent":"#ff4d9d","cover":{"mode":"video","video":"home-visual.mp4","image":"./assets/hero-ambient.webp","imagePosition":"50% 50%","bgScale":0.98,"bgX":72,"bgY":50,"bgOpacity":1,"bgSaturate":1.08,"headlineMain":"把内容","headlineAccent":"变成","headlineTail":"视觉","headlineSize":190,"intro":"平面视觉设计师,专注内容视觉、品牌表达与产品落地。","eyebrow":"Content Visual Designer","showBottomMeta":true,"vignette":0.72,"hero3d":true,"hero3dDensity":1,"hero3dQuality":"auto","parallax":true},"cursor":{"size":96,"opacity":100},"about":{"photo":"./assets/about-ambient.webp","bgScale":1,"bgX":50,"bgY":50,"bgOpacity":1,"bgSaturate":0.9,"overlay":0.72,"feather":26,"photoLayer":"under","blend":"normal","bgFit":"cover","maskStart":46},"pageBackgrounds":{"about":{"mode":"none","image":"./assets/hero-ambient.webp","video":"home-visual.mp4","bgScale":1,"bgX":50,"bgY":50,"bgOpacity":0.34,"bgSaturate":0.8,"overlay":0.72},"graphic":{"mode":"none","image":"./assets/hero-ambient.webp","video":"home-visual.mp4","bgScale":1,"bgX":50,"bgY":50,"bgOpacity":0.34,"bgSaturate":0.8,"overlay":0.72},"ipui":{"mode":"none","image":"./assets/hero-ambient.webp","video":"home-visual.mp4","bgScale":1,"bgX":50,"bgY":50,"bgOpacity":0.34,"bgSaturate":0.8,"overlay":0.72},"product":{"mode":"none","image":"./assets/hero-ambient.webp","video":"home-visual.mp4","bgScale":1,"bgX":50,"bgY":50,"bgOpacity":0.34,"bgSaturate":0.8,"overlay":0.72},"packaging":{"mode":"none","image":"./assets/hero-ambient.webp","video":"home-visual.mp4","bgScale":1,"bgX":50,"bgY":50,"bgOpacity":0.34,"bgSaturate":0.8,"overlay":0.72},"overview":{"mode":"none","image":"./assets/hero-ambient.webp","video":"home-visual.mp4","bgScale":1,"bgX":50,"bgY":50,"bgOpacity":0.34,"bgSaturate":0.8,"overlay":0.72}},"overview":{"wallScale":1.18,"wallX":50,"wallY":56,"tileWidth":220,"tileHeight":146,"gap":18,"headingY":0},"cards":{"graphic":[{"id":"kv-visual","title":"KV视觉 · 发布会背景","meta":"KV 主视觉 / 内容视觉","image":"./assets/asset-mvjszq9x-kq0td9.jpg","desc":"围绕内容主题建立的横版 KV 视觉系列，覆盖主画面、场景变化与系列化延展。","gallery":["./assets/kv-visual-78d3fcf699bb511ac6b8ce72d1818d52.jpg","./assets/kv-visual-08607edf0d1f0df1b7ed67b000640cf9.jpg","./assets/kv-visual-27afe0cfdf47e97882ba749b46cd11e6.jpg","./assets/asset-mvjszq9x-kq0td9.jpg"]},{"id":"custom-mvjsjfm5","title":"KV视觉 · 发布会背景","meta":"自定义作品","desc":"","image":"./assets/asset-mvjsjfjl-t3bocm.jpg","gallery":["./assets/asset-mvjsjfjl-t3bocm.jpg","./assets/asset-mvjsywtj-0w6e0s.jpg","./assets/asset-mvjsz67o-zfutk6.jpg"]},{"id":"custom-mvjskfl1","title":"KV视觉 · 课程主图","meta":"KV视觉 · 课程主图","desc":"","image":"./assets/asset-mvjskxgj-sh1s3s.jpg","gallery":["./assets/asset-mvjskklo-afdc08.jpg","./assets/asset-mvjskxgj-sh1s3s.jpg","./assets/asset-mvjsl31s-3z6q44.jpg"]},{"id":"custom-mvjsj5dg","title":"KV视觉 · 品牌联名","meta":"KV视觉 · 品牌联名","desc":"","image":"./assets/asset-mvjsj559-81o36u.jpg","gallery":["./assets/asset-mvjsj559-81o36u.jpg","./assets/asset-mvjtq8lw-snc6ud.jpg","./assets/asset-mvjsj581-86vqt5.jpg","./assets/asset-mvjsj4yo-ofa0oa.jpg","./assets/asset-mvjsj519-y0y69i.jpg"]},{"id":"wangyu-books","title":"王羽物理 · 教材封面","meta":"封面设计 / 教辅物料","image":"./assets/asset-mvjsu167-trrmzp.jpg","desc":"为王羽物理设计的高考教辅封面:同步讲义、题库解析、基础知识清单到经典 300 题,覆盖书脊、封套与内页版式。","gallery":["./assets/p-wangyu-sync.webp","./assets/p-wangyu-tiku.jpg","./assets/p-wangyu-list.jpg","./assets/p-wangyu-300.jpg","./assets/p-wangyu-notes.jpg","./assets/p-wangyu-gaoer.jpg","./assets/p-wangyu-lun3.jpg","./assets/asset-mvjsu167-trrmzp.jpg"]},{"id":"custom-mvjsv2x5","title":"王羽物理 · 课程套图","meta":"自定义作品","desc":"","image":"./assets/asset-mvjsv2po-nya5eq.jpg","gallery":["./assets/asset-mvjsv2po-nya5eq.jpg","./assets/asset-mvjsv2k6-kdy568.jpg","./assets/asset-mvjsv2u9-f51jo3.jpg"]},{"id":"custom-mvjt13l9","title":"王羽物理 · IP宣传海报","meta":"王羽物理 · IP宣传海报","desc":"","image":"./assets/asset-mvjt4a6i-ku5yrk.jpg","gallery":["./assets/asset-mvjt4a6i-ku5yrk.jpg","./assets/asset-mvjt4gul-530rz5.jpg"]},{"id":"festival-posters","title":"活动策划海报","meta":"活动海报 / 节点营销","image":"./assets/asset-mvjt3pw5-xftxls.jpg","desc":"元旦、春节、立春、元宵等节点海报与课程活动预告,兼顾节气美学与转化信息。","gallery":["./assets/p-poster-newyear.jpg","./assets/p-poster-sheyear.jpg","./assets/p-poster-chunjie.jpg","./assets/p-poster-lichun.jpg","./assets/p-poster-yuanxiao.jpg","./assets/asset-mvjt3pw5-xftxls.jpg"]},{"id":"jewelry-product-02","title":"珠宝设计 ·药师佛","meta":"珠宝视觉 / 产品展示","image":"./assets/asset-mvjsn4gp-5jhx58.jpg","desc":"以产品主视觉、完成效果与细节图组成的珠宝设计展示。","gallery":["./assets/asset-mvjsn41m-uqfbdv.jpg","./assets/asset-mvjsn4gp-5jhx58.jpg","./assets/asset-mvjsn4dp-raf17c.jpg","./assets/asset-mvjsn4ap-3tpt06.jpg","./assets/asset-mvjsn4ra-mvdz9h.jpg","./assets/asset-mvjsn4jw-9caket.jpg","./assets/asset-mvjsn4uy-74thjw.jpg","./assets/asset-mvjsn4nn-xfrpw0.jpg"]},{"id":"jewelry-gold","title":"珠宝设计 · 八宝罗盘吊坠","meta":"珠宝视觉 / 金色系列","image":"./assets/asset-mvjsov71-zwp3no.jpg","desc":"金色系列的正反面产品视觉与细节展示。","gallery":["./assets/asset-mvjsofnd-ll2x5z.jpg","./assets/asset-mvjsofr8-dnpqdg.jpg","./assets/asset-mvjsov71-zwp3no.jpg","./assets/asset-mvjsovek-p54dvg.jpg","./assets/asset-mvjsovid-dlt5xd.jpg"]},{"id":"jewelry-silver","title":"珠宝设计 · 扎基拉姆","meta":"珠宝视觉 / 银色系列","image":"./assets/asset-mvjspx13-nh76k2.jpg","desc":"银色系列的主视觉与成品细节展示。","gallery":["./assets/asset-mvjspwq8-t1et8e.jpg","./assets/asset-mvjspwml-cpxzbc.jpg","./assets/asset-mvjspx13-nh76k2.jpg","./assets/asset-mvjspwtz-c2hfnt.jpg","./assets/asset-mvjspwj1-ntk13a.jpg","./assets/asset-mvjsq6l7-zv0aps.jpg","./assets/asset-mvjsq6w6-fy80ev.jpg","./assets/asset-mvjsq73n-sqczee.jpg","./assets/asset-mvjsq707-irybl1.jpg"]},{"id":"jewelry-product-05","title":"珠宝设计 · 九曜宝石","meta":"珠宝视觉 / 产品展示","image":"./assets/asset-mvjst0z3-v9b24w.jpg","desc":"珠宝成品展示与产品细节。","gallery":["./assets/asset-mvjst03r-a83w0c.jpg","./assets/asset-mvjst0vh-8k3qt4.jpg","./assets/asset-mvjst12p-x75mqi.jpg","./assets/asset-mvjst0z3-v9b24w.jpg","./assets/asset-mvjst18g-3zzcch.jpg","./assets/asset-mvjst1hq-hqbhlq.jpg","./assets/asset-mvjst1kj-4740tv.jpg","./assets/asset-mvjst1el-h4s9xy.jpg","./assets/asset-mvjst1bs-z9fprs.jpg","./assets/asset-mvjst1o6-waqnt3.jpg","./assets/asset-mvjst15r-8vbise.jpg"]}],"ipui":[{"id":"huhu","title":"虎虎 · 非遗 IP 延展","meta":"IP 视觉 / 表情包 / 周边","image":"./assets/p-huhu-poster.webp","desc":"以虎为原型的非遗 IP,母版、表情、动作到周边海报的完整延展。","gallery":["./assets/p-huhu-master.webp","./assets/p-huhu-emoji.webp","./assets/p-huhu-action.webp","./assets/p-huhu-story.webp","./assets/p-huhu-poster.webp"]},{"id":"bunnies","title":"蹦蹦和跳跳 · IP周边","meta":"IP 形象 / 文创延展","image":"./assets/p-bunnies-goods.webp","desc":"双人 IP 的世界观故事板、场景应用与文创周边。","gallery":["./assets/p-bunnies-master.webp","./assets/p-bunnies-world.webp","./assets/p-bunnies-scene.webp","./assets/p-bunnies-goods.webp"]},{"id":"plush","title":"毛茸茸 · IP动物森林","meta":"IP 视觉 / 角色与品牌应用","image":"./assets/plush-social.jpg","desc":"从毛绒角色、表情贴纸到品牌主视觉与周边应用的完整 IP 延展。","gallery":["./assets/plush-brand-poster.jpg","./assets/plush-sticker-3d-v3.webp","./assets/plush-sticker-3d-v1.webp","./assets/plush-expression.jpg","./assets/plush-merchandise.jpg","./assets/plush-social.jpg","./assets/plush-doll.jpg"]},{"id":"ziyou-ui","title":"自游 App · 界面设计","meta":"界面视觉 / 自主项目","image":"./assets/asset-mvjti1gn-0cc1fi.jpg","desc":"旅行 App 的界面视觉重设计,覆盖首页、详情与规范。","gallery":["./assets/asset-mvjti238-4nssj4.jpg","./assets/asset-mvjti16b-130icu.jpg","./assets/asset-mvjti137-up9qzo.jpg","./assets/asset-mvjti1dm-urmv7f.jpg","./assets/asset-mvjti18j-mo2vg5.jpg","./assets/asset-mvjti1ls-eywcut.jpg","./assets/asset-mvjti1j2-ffswrf.jpg","./assets/asset-mvjti1bd-6bernh.jpg","./assets/asset-mvjti1gn-0cc1fi.jpg"]}],"product":[{"id":"fufu","title":"FUFU 智能儿童足球门","meta":"电商视觉 / 产品表达","image":"./assets/asset-mvjtjax8-7pfj8h.jpg","desc":"智能足球门投影仪的电商详情页,主视觉、品牌、功能与礼赠场景。","gallery":["./assets/asset-mvjtjax8-7pfj8h.jpg","./assets/asset-mvjtjaqf-9vodf0.jpg","./assets/asset-mvjtjatq-o3f7r5.jpg","./assets/asset-mvjtjb61-0ipgk3.jpg","./assets/asset-mvjtjb30-4zkp45.jpg","./assets/asset-mvjtjbei-x37t7c.jpg","./assets/asset-mvjtjb8u-qy0hp5.jpg","./assets/asset-mvjtjbbu-o9yi4y.jpg","./assets/asset-mvjtjb0a-vuvjob.jpg","./assets/asset-mvjtjbjy-88pp6a.jpg","./assets/asset-mvjtjc2d-2iwmqs.jpg"]},{"id":"sunfeel","title":"寻感白桃味气泡酒","meta":"产品视觉 / 详情页","image":"./assets/p-sunfeel-picnic.webp","desc":"白桃味气泡酒的主视觉与饮用场景系列。","gallery":["./assets/p-sunfeel-picnic.webp","./assets/asset-mvjtk4az-khhrlg.jpg","./assets/asset-mvjtk4fq-kpjqyp.jpg","./assets/asset-mvjtk4dx-awhxi4.jpg","./assets/asset-mvjtk4o8-a366fm.jpg","./assets/asset-mvjtk4ka-ea9l1d.jpg","./assets/asset-mvjtk4ui-d9epz5.jpg","./assets/asset-mvjtk4mf-3b1011.jpg","./assets/asset-mvjtk4qe-etncqy.jpg","./assets/asset-mvjtk4s1-9bh96s.jpg"]},{"id":"xiangshan","title":"香山 · 智能体重秤","meta":"产品视觉 / 场景表达","image":"./assets/p-xiangshan-hero.webp","desc":"围绕健康数据的体重秤主视觉与场景化表达。","gallery":["./assets/p-xiangshan-hero.webp","./assets/p-xiangshan-data.webp","./assets/p-xiangshan-fit.webp","./assets/p-xiangshan-home.webp"]}],"packaging":[{"id":"teawei","title":"茶薇花礼盒","meta":"包装视觉 / 礼盒详情页","image":"./assets/asset-mvjtlqcv-jyctfc.jpg","desc":"花茶礼盒的包装视觉与详情页表达。","gallery":["./assets/asset-mvjtlqg7-iau91k.jpg","./assets/asset-mvjtlqjy-05lpv9.jpg","./assets/asset-mvjtlq98-vqc2zl.jpg","./assets/asset-mvjtlqwe-n2mxeh.jpg","./assets/asset-mvjtlqcv-jyctfc.jpg","./assets/asset-mvjtlqps-234xem.jpg","./assets/asset-mvjtlqzy-zqmoxy.jpg","./assets/asset-mvjtlqt4-v3oi3u.jpg","./assets/asset-mvjtlqn1-hgsfs1.jpg"]},{"id":"xiangnong","title":"祥农臻汇 · 果味茶","meta":"包装表达 / 产品视觉","image":"./assets/asset-mvjtmr9f-y93jcn.jpg","desc":"三瓶装果味茶的主视觉与瓶身标签修正。","gallery":["./assets/asset-mvjtmr2r-8q63xv.jpg","./assets/asset-mvjtmqs6-gnzvup.jpg","./assets/asset-mvjtmqvp-27fko4.jpg","./assets/asset-mvjtmr9f-y93jcn.jpg","./assets/asset-mvjtmrd2-1twq9u.jpg","./assets/asset-mvjtmr5y-qvoyqu.jpg","./assets/asset-mvjtmrgo-l369ei.jpg","./assets/asset-mvjtmrkb-6r9s53.jpg"]},{"id":"custom-mvjttz8h","title":"非遗纸灯笼设计","meta":"扎基拉姆","desc":"","image":"./assets/asset-mvjttz4p-zdz4rd.jpg","gallery":["./assets/asset-mvjttz4p-zdz4rd.jpg","./assets/asset-mvjtuqbp-a32c7p.jpg","./assets/asset-mvjtuqq4-xmk3zl.jpg","./assets/asset-mvjtuqm6-z3hlss.jpg","./assets/asset-mvjtuqfc-29wrtc.jpg","./assets/asset-mvjtuqis-cafql5.jpg","./assets/asset-mvjtuqtx-mpxm6u.jpg"]}]},"frame":{"maxWidth":1700,"sideGutter":96,"topPadding":132},"blocks":{"pageBackground":"#0e0b10","accent":"#ff4d9d","text":"#f0ebee","muted":"#a89aa2","glassAlpha":0.58},"removedCards":["guo-chao","yinghua","ziyou","jewelry-product-06","guochao-gift","custom-mvjtu7mv","plush-sticker","plush-brand"]};

// 刷新时禁止浏览器恢复上次滚动位置，避免长页面中的个人介绍区抢先闪现。
// 注：#root 在 index.html 中默认 visibility:hidden，由 App 首帧归零滚动后加 app-ready 才显示。
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
try { window.scrollTo(0, 0); } catch (e) {}

/* ---------- 素材清单 ---------- */
const IMAGE_LIBRARY = [
  { id: 'about-ambient', label: '个人介绍氛围(工具方块)', url: A + 'about-ambient.webp' },
  { id: 'hero-ambient', label: 'Hero 氛围帧', url: A + 'hero-ambient.webp' },
  { id: 'cover-figure', label: '封面人物(举笔)', url: A + 'cover-figure.webp' },
  { id: 'profile-character', label: '角色·街头运动', url: A + 'profile-character.webp' },
  { id: 'profile-character-biker', label: '角色·机车皮衣', url: A + 'profile-character-biker.webp' },
  { id: 'sign-start', label: '签名·首帧', url: A + 'sign-start.webp' },
  { id: 'sign-end', label: '签名·尾帧', url: A + 'sign-end.webp' },
  { id: 'project-tea', label: '国潮茶香 KV', url: A + 'project-tea.webp' },
  { id: 'project-huhu', label: '虎虎 IP', url: A + 'project-huhu.webp' },
  { id: 'project-bunnies', label: '蹦蹦跳跳 IP', url: A + 'project-bunnies.webp' },
  { id: 'project-sunfeel', label: '寻感气泡酒', url: A + 'project-sunfeel.webp' },
  { id: 'project-fufu', label: 'FUFU 足球门', url: A + 'project-fufu.webp' },
  { id: 'project-ui', label: '自游 App UI', url: A + 'project-ui.webp' },
  { id: 'project-teawei', label: '茶薇花礼盒', url: A + 'project-teawei.webp' },
  { id: 'project-xiangnong', label: '祥农果味茶', url: A + 'project-xiangnong.webp' },
];

const VIDEO_SOURCES = [
  { id: 'home-visual.mp4', label: '首页视觉 2.0(优化版)' },
  { id: 'intro-visual.mp4', label: '介绍页视觉 2.0(优化版)' },
];

const PAGE_IDS = ['about', 'graphic', 'ipui', 'product', 'packaging', 'overview'];
const isCustomBackground = (settings, id) => {
  const mode = settings.pageBackgrounds?.[id]?.mode;
  return mode === 'image' || mode === 'video';
};
const DEFAULT_PAGE_BACKGROUND = {
  mode: 'none',
  image: A + 'hero-ambient.webp',
  video: 'home-visual.mp4',
  bgScale: 1,
  bgX: 50,
  bgY: 50,
  bgOpacity: 0.34,
  bgSaturate: 0.8,
  overlay: 0.72,
};

/* ---------- 光标变体(尺寸 × 不透明度,由工作台驱动) ---------- */
const CURSOR_SIZES = [32, 48, 64, 80, 96, 112, 128];
const CURSOR_OPS = [40, 60, 80, 100];
const nearestIn = (list, v) => list.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));
function cursorAsset(size, opacity) {
  const s = nearestIn(CURSOR_SIZES, size);
  const o = nearestIn(CURSOR_OPS, opacity);
  const k = s / 96;
  return { url: `/assets/cursor-kitty-${s}-${o}.png`, x: Math.round(24 * k), y: Math.round(7 * k) };
}

const navItems = [
  { id: 'cover', label: '封面页', en: 'Cover' },
  { id: 'about', label: '个人介绍', en: 'About' },
  { id: 'graphic', label: '平面设计', en: 'Graphic' },
  { id: 'ipui', label: 'IP&UI设计', en: 'IP & UI' },
  { id: 'product', label: '产品设计', en: 'Product' },
  { id: 'packaging', label: '包装设计', en: 'Packaging' },
  { id: 'overview', label: '作品总览', en: 'Overview' },
];

const categoryData = {
  graphic: {
    number: '03', label: 'Graphic Design',
    title: '平面设计',
    intro: '以版式、节奏和信息层级为基础,把复杂内容整理成清晰、有效、可落地的视觉表达。',
    cards: [
      { id: 'guo-chao', title: '国潮茶香 · 品牌视觉', meta: '品牌视觉系统 / KV 主视觉', image: A + 'p-guo-chao-overview.webp', desc: '从总览到 KV、产品特写、礼盒系列的成套品牌视觉。', gallery: [A + 'p-guo-chao-overview.webp', A + 'p-guo-chao-kv.webp', A + 'p-guo-chao-gift.webp'] },
      { id: 'kv-visual', title: 'KV视觉 · 内容主视觉', meta: 'KV 主视觉 / 内容视觉', image: A + 'kv-visual-b050f888b0e57566ddd7ef0e9b444b34.webp', desc: '围绕内容主题建立的横版 KV 视觉系列，覆盖主画面、场景变化与系列化延展。', gallery: [A + 'kv-visual-b050f888b0e57566ddd7ef0e9b444b34.webp', A + 'kv-visual-894c59c8a76467fa595fce0c5a40f323.webp', A + 'kv-visual-17a86643a0a083e2e9c5e86160666f8b.webp', A + 'kv-visual-2bc5e4526f82f89ddd2a6f229b48acea.webp', A + 'kv-visual-f00d92f0bc71b2f2b395a665dd2ebf1c.jpg', A + 'kv-visual-78d3fcf699bb511ac6b8ce72d1818d52.jpg', A + 'kv-visual-08607edf0d1f0df1b7ed67b000640cf9.jpg', A + 'kv-visual-27afe0cfdf47e97882ba749b46cd11e6.jpg', A + 'kv-visual-2da9beb4dd4c74742b1ac9f0e995be2a.jpg', A + 'kv-visual-b0596d844980a26ac5a4be39316b263a.jpg', A + 'kv-visual-1be66cd9584905f1319a61312277d699.jpg', A + 'kv-visual-e71dac87cf8fdf9326b4ac6c5055c2e5.jpg', A + 'kv-visual-710bc9cddcb898c44f02b1e3e84f7445.jpg'] },
      { id: 'yinghua', title: '映画 · 非遗灯笼海报', meta: '文化海报 / 非遗工艺', image: A + 'p-yinghua-poster.webp', desc: '把传统光影与当代设计结合的非遗主题系列海报。', gallery: [A + 'p-yinghua-poster.webp', A + 'p-yinghua-story.webp', A + 'p-yinghua-inspire.webp'] },
      { id: 'wangyu-books', title: '王羽物理 · 教材封面', meta: '封面设计 / 教辅物料', image: A + 'p-wangyu-sync.webp', desc: '为王羽物理设计的高考教辅封面:同步讲义、题库解析、基础知识清单到经典 300 题,覆盖书脊、封套与内页版式。', gallery: [A + 'p-wangyu-sync.webp', A + 'p-wangyu-tiku.jpg', A + 'p-wangyu-list.jpg', A + 'p-wangyu-300.jpg', A + 'p-wangyu-notes.jpg', A + 'p-wangyu-gaoer.jpg', A + 'p-wangyu-lun3.jpg'] },
      { id: 'festival-posters', title: '节日活动海报', meta: '活动海报 / 节点营销', image: A + 'p-poster-newyear.jpg', desc: '元旦、春节、立春、元宵等节点海报与课程活动预告,兼顾节气美学与转化信息。', gallery: [A + 'p-poster-newyear.jpg', A + 'p-poster-sheyear.jpg', A + 'p-poster-chunjie.jpg', A + 'p-poster-lichun.jpg', A + 'p-poster-yuanxiao.jpg', A + 'p-poster-live.jpg'] },
      { id: 'ziyou', title: '自游 App · 界面视觉', meta: '界面视觉 / 设计规范', image: A + 'p-ziyou-overview.webp', desc: '从首页到个人中心的界面重设计练习与规范板。', gallery: [A + 'p-ziyou-overview.webp', A + 'p-ziyou-home.webp', A + 'p-ziyou-spec.webp', A + 'p-ziyou-weather.webp'] },
      { id: 'jewelry-product-02', title: '珠宝设计 · 产品二', meta: '珠宝视觉 / 产品展示', image: A + 'jewelry-product-02-master.jpg', desc: '以产品主视觉、完成效果与细节图组成的珠宝设计展示。', gallery: [A + 'jewelry-product-02-master.jpg', A + 'jewelry-product-02-detail-1.jpg', A + 'jewelry-product-02-detail-2.jpg'] },
      { id: 'jewelry-gold', title: '珠宝设计 · 金色系列', meta: '珠宝视觉 / 金色系列', image: A + 'jewelry-gold-front.jpg', desc: '金色系列的正反面产品视觉与细节展示。', gallery: [A + 'jewelry-gold-front.jpg', A + 'jewelry-gold-back.jpg', A + 'jewelry-gold-detail.jpg'] },
      { id: 'jewelry-silver', title: '珠宝设计 · 银色系列', meta: '珠宝视觉 / 银色系列', image: A + 'jewelry-silver-master.jpg', desc: '银色系列的主视觉与成品细节展示。', gallery: [A + 'jewelry-silver-master.jpg', A + 'jewelry-silver-detail-1.jpg', A + 'jewelry-silver-detail-2.jpg'] },
      { id: 'jewelry-product-05', title: '珠宝设计 · 产品五', meta: '珠宝视觉 / 产品展示', image: A + 'jewelry-product-05.jpg', desc: '珠宝成品展示与产品细节。', gallery: [A + 'jewelry-product-05.jpg'] },
      { id: 'jewelry-product-06', title: '珠宝设计 · 产品六', meta: '珠宝视觉 / 产品展示', image: A + 'jewelry-product-06.jpg', desc: '珠宝成品展示与产品细节。', gallery: [A + 'jewelry-product-06.jpg'] },
    ],
  },
  ipui: {
    number: '04', label: 'IP&UI设计',
    title: 'IP&UI设计',
    intro: '从角色设定、动作延展到界面视觉,关注视觉系统如何在不同触点中保持一致。',
    cards: [
      { id: 'huhu', title: '虎虎 · 非遗 IP 延展', meta: 'IP 视觉 / 表情包 / 周边', image: A + 'p-huhu-master.webp', desc: '以虎为原型的非遗 IP,母版、表情、动作到周边海报的完整延展。', gallery: [A + 'p-huhu-master.webp', A + 'p-huhu-emoji.webp', A + 'p-huhu-action.webp', A + 'p-huhu-story.webp', A + 'p-huhu-poster.webp'] },
      { id: 'bunnies', title: '蹦蹦和跳跳 · IP 世界观', meta: 'IP 形象 / 文创延展', image: A + 'p-bunnies-master.webp', desc: '双人 IP 的世界观故事板、场景应用与文创周边。', gallery: [A + 'p-bunnies-master.webp', A + 'p-bunnies-world.webp', A + 'p-bunnies-scene.webp', A + 'p-bunnies-goods.webp'] },
      { id: 'ziyou-ui', title: '自游 App · 界面练习', meta: '界面视觉 / 自主项目', image: A + 'p-ziyou-home.webp', desc: '旅行 App 的界面视觉重设计,覆盖首页、详情与规范。', gallery: [A + 'p-ziyou-home.webp', A + 'p-ziyou-spec.webp'] },
      { id: 'plush', title: '毛茸茸 · IP 延展', meta: 'IP 视觉 / 角色与品牌应用', image: A + 'plush-brand-poster.jpg', desc: '从毛绒角色、表情贴纸到品牌主视觉与周边应用的完整 IP 延展。', gallery: [A + 'plush-brand-poster.jpg', A + 'plush-sticker-3d-v3.webp', A + 'plush-sticker-3d-v1.webp', A + 'plush-expression.jpg', A + 'plush-merchandise.jpg', A + 'plush-social.jpg', A + 'plush-doll.jpg'] },
    ],
  },
  product: {
    number: '05', label: 'Product Design',
    title: '产品设计',
    intro: '围绕产品卖点、使用场景与信息节奏,完成从主视觉到详情页的成套表达。',
    cards: [
      { id: 'fufu', title: 'FUFU 智能儿童足球门', meta: '电商视觉 / 产品表达', image: A + 'p-fufu-hero.webp', desc: '智能足球门投影仪的电商详情页,主视觉、品牌、功能与礼赠场景。', gallery: [A + 'p-fufu-hero.webp', A + 'p-fufu-brand.webp', A + 'p-fufu-voice.webp', A + 'p-fufu-gift.webp'] },
      { id: 'sunfeel', title: '寻感白桃味气泡酒', meta: '产品视觉 / 详情页', image: A + 'p-sunfeel-hero.webp', desc: '白桃味气泡酒的主视觉与饮用场景系列。', gallery: [A + 'p-sunfeel-hero.webp', A + 'p-sunfeel-intro.webp', A + 'p-sunfeel-scene.webp', A + 'p-sunfeel-picnic.webp'] },
      { id: 'xiangshan', title: '香山 · 智能体重秤', meta: '产品视觉 / 场景表达', image: A + 'p-xiangshan-hero.webp', desc: '围绕健康数据的体重秤主视觉与场景化表达。', gallery: [A + 'p-xiangshan-hero.webp', A + 'p-xiangshan-data.webp', A + 'p-xiangshan-fit.webp', A + 'p-xiangshan-home.webp'] },
    ],
  },
  packaging: {
    number: '06', label: 'Packaging Design',
    title: '包装设计',
    intro: '关注包装的造型、材质、工艺与视觉识别,让设计从屏幕走向真实的产品触点。',
    cards: [
      { id: 'teawei', title: '茶薇花礼盒', meta: '包装视觉 / 礼盒详情页', image: A + 'p-teawei-01.webp', desc: '花茶礼盒的包装视觉与详情页表达。', gallery: [A + 'p-teawei-01.webp', A + 'p-teawei-04.webp', A + 'p-teawei-08.webp'] },
      { id: 'guochao-gift', title: '国潮茶香 · 礼盒系列', meta: '概念包装 / 品牌延展', image: A + 'p-guo-chao-gift.webp', desc: '品牌礼盒系列的包装 KV 与产品特写。', gallery: [A + 'p-guo-chao-gift.webp', A + 'p-guo-chao-kv.webp'] },
      { id: 'xiangnong', title: '祥农臻汇 · 果味茶', meta: '包装表达 / 产品视觉', image: A + 'p-xiangnong-hero.webp', desc: '三瓶装果味茶的主视觉与瓶身标签修正。', gallery: [A + 'p-xiangnong-hero.webp', A + 'p-xiangnong-fixed.webp'] },
    ],
  },
};

/* ---------- 工作台默认配置 ---------- */
const DEFAULT_SETTINGS = {
  brandText: 'LRR',
  brandAccent: '#ff4d9d',
  cover: {
    mode: 'video',
    video: 'home-visual.mp4',
    image: A + 'hero-ambient.webp',
    imagePosition: '50% 50%',
    bgScale: 1.0,
    bgX: 50,
    bgY: 50,
    bgOpacity: 1,
    bgSaturate: 0.7,
    headlineMain: '把内容',
    headlineAccent: '变成',
    headlineTail: '视觉。',
    headlineSize: 190,
    intro: '平面视觉设计师,专注内容视觉、品牌表达与产品落地。',
    eyebrow: 'Content Visual Designer',
    showBottomMeta: true,
    vignette: 0.72,
    hero3d: true,
    hero3dDensity: 1,
    hero3dQuality: 'auto',
    parallax: true,
  },
  cursor: {
    size: 96,
    opacity: 100,
  },
  about: {
    photo: A + 'about-ambient.webp',
    bgScale: 1.0,
    bgX: 50,
    bgY: 50,
    bgOpacity: 1,
    bgSaturate: 0.9,
    overlay: 0.72,
    feather: 26,
    photoLayer: 'under',
    blend: 'normal',
    bgFit: 'cover',
    maskStart: 46,
  },
  pageBackgrounds: {
    about: { ...DEFAULT_PAGE_BACKGROUND, mode: 'none' },
    graphic: { ...DEFAULT_PAGE_BACKGROUND },
    ipui: { ...DEFAULT_PAGE_BACKGROUND },
    product: { ...DEFAULT_PAGE_BACKGROUND },
    packaging: { ...DEFAULT_PAGE_BACKGROUND },
    overview: { ...DEFAULT_PAGE_BACKGROUND },
  },
  overview: {
    wallScale: 1.18,
    wallX: 50,
    wallY: 56,
    tileWidth: 220,
    tileHeight: 146,
    gap: 18,
    headingY: 0,
  },
  /* 作品卡片:默认值来自 categoryData,工作台可增删图/设封面/新建,保存后以本地为准 */
  cards: {
    graphic: categoryData.graphic.cards,
    ipui: categoryData.ipui.cards,
    product: categoryData.product.cards,
    packaging: categoryData.packaging.cards,
  },
  frame: {
    maxWidth: 1700,
    sideGutter: 96,
    topPadding: 132,
  },
  blocks: {
    pageBackground: '#0e0b10',
    accent: '#ff4d9d',
    text: '#f0ebee',
    muted: '#a89aa2',
    glassAlpha: 0.58,
  },
  removedCards: [],
};

const STORAGE_KEY = 'lrr-workbench-settings-v3';
const WORKBENCH_VIEW_KEY = 'lrr-workbench-view-v1';
const CARD_SYNC_VERSION = 6;

function deepMerge(base, patch) {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) return patch === undefined ? base : patch;
  const out = Array.isArray(base) ? [...base] : { ...base };
  Object.keys(patch).forEach((k) => {
    const bv = base ? base[k] : undefined;
    const pv = patch[k];
    out[k] = (pv && typeof pv === 'object' && !Array.isArray(pv) && bv && typeof bv === 'object' && !Array.isArray(bv))
      ? deepMerge(bv, pv) : pv;
  });
  return out;
}

function finiteNumber(value, fallback, min = -Infinity, max = Infinity) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function normalizeBackgroundConfig(bg, fallback = DEFAULT_PAGE_BACKGROUND) {
  const next = { ...fallback, ...(bg || {}) };
  next.mode = ['none', 'image', 'video'].includes(next.mode) ? next.mode : fallback.mode;
  next.bgScale = finiteNumber(next.bgScale, fallback.bgScale, 0.1, 5);
  next.bgX = finiteNumber(next.bgX, fallback.bgX, 0, 100);
  next.bgY = finiteNumber(next.bgY, fallback.bgY, 0, 100);
  next.bgOpacity = finiteNumber(next.bgOpacity, fallback.bgOpacity, 0, 1);
  next.bgSaturate = finiteNumber(next.bgSaturate, fallback.bgSaturate, 0, 3);
  next.overlay = finiteNumber(next.overlay, fallback.overlay, 0, 1);
  return next;
}

function normalizeSettings(settings) {
  const next = structuredClone(settings || DEFAULT_SETTINGS);
  next.cover = { ...DEFAULT_SETTINGS.cover, ...(next.cover || {}) };
  next.cover.bgScale = finiteNumber(next.cover.bgScale, DEFAULT_SETTINGS.cover.bgScale, 0.1, 5);
  next.cover.bgX = finiteNumber(next.cover.bgX, DEFAULT_SETTINGS.cover.bgX, 0, 100);
  next.cover.bgY = finiteNumber(next.cover.bgY, DEFAULT_SETTINGS.cover.bgY, 0, 100);
  next.cover.bgOpacity = finiteNumber(next.cover.bgOpacity, DEFAULT_SETTINGS.cover.bgOpacity, 0, 1);
  next.cover.bgSaturate = finiteNumber(next.cover.bgSaturate, DEFAULT_SETTINGS.cover.bgSaturate, 0, 3);
  next.cover.vignette = finiteNumber(next.cover.vignette, DEFAULT_SETTINGS.cover.vignette, 0, 1);
  next.about = { ...DEFAULT_SETTINGS.about, ...(next.about || {}) };
  next.about.bgScale = finiteNumber(next.about.bgScale, DEFAULT_SETTINGS.about.bgScale, 0.1, 5);
  next.about.bgX = finiteNumber(next.about.bgX, DEFAULT_SETTINGS.about.bgX, 0, 100);
  next.about.bgY = finiteNumber(next.about.bgY, DEFAULT_SETTINGS.about.bgY, 0, 100);
  next.about.bgOpacity = finiteNumber(next.about.bgOpacity, DEFAULT_SETTINGS.about.bgOpacity, 0, 1);
  next.about.bgSaturate = finiteNumber(next.about.bgSaturate, DEFAULT_SETTINGS.about.bgSaturate, 0, 3);
  next.about.overlay = finiteNumber(next.about.overlay, DEFAULT_SETTINGS.about.overlay, 0, 1);
  next.about.feather = finiteNumber(next.about.feather, DEFAULT_SETTINGS.about.feather, 0, 100);
  next.overview = { ...DEFAULT_SETTINGS.overview, ...(next.overview || {}) };
  next.overview.wallScale = finiteNumber(next.overview.wallScale, DEFAULT_SETTINGS.overview.wallScale, 0.7, 2.2);
  next.overview.wallX = finiteNumber(next.overview.wallX, DEFAULT_SETTINGS.overview.wallX, 35, 65);
  next.overview.wallY = finiteNumber(next.overview.wallY, DEFAULT_SETTINGS.overview.wallY, 35, 75);
  next.overview.tileWidth = finiteNumber(next.overview.tileWidth, DEFAULT_SETTINGS.overview.tileWidth, 120, 320);
  next.overview.tileHeight = finiteNumber(next.overview.tileHeight, DEFAULT_SETTINGS.overview.tileHeight, 80, 220);
  next.overview.gap = finiteNumber(next.overview.gap, DEFAULT_SETTINGS.overview.gap, 8, 40);
  next.overview.headingY = finiteNumber(next.overview.headingY, DEFAULT_SETTINGS.overview.headingY, -80, 160);
  next.pageBackgrounds = { ...DEFAULT_SETTINGS.pageBackgrounds, ...(next.pageBackgrounds || {}) };
  Object.keys(next.pageBackgrounds).forEach((id) => { next.pageBackgrounds[id] = normalizeBackgroundConfig(next.pageBackgrounds[id]); });
  return next;
}

function migrateAboutBackgroundChoice(settings) {
  const next = structuredClone(settings);
  const aboutBg = next.pageBackgrounds?.about;
  // 回滚本次误改写的默认视频；用户在工作台主动切换后写入 userChoice，不再覆盖。
  if (aboutBg && aboutBg.mode === 'video' && aboutBg.video === 'intro-visual.mp4' && !aboutBg.userChoice) aboutBg.mode = 'none';
  return next;
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return normalizeSettings(migrateAboutBackgroundChoice(migrateCards(migrateToPink(deepMerge(DEFAULT_SETTINGS, JSON.parse(raw))))));
  } catch (e) { /* ignore */ }
  return normalizeSettings(structuredClone(DEFAULT_SETTINGS));
}

function loadWorkbenchView() {
  try {
    const raw = localStorage.getItem(WORKBENCH_VIEW_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { category: 'graphic', scrollTop: 0, groups: ['作品管理 · 增删图 / 设封面'], subgroups: [], cardDetails: [] };
}

function saveWorkbenchView(view) {
  try { localStorage.setItem(WORKBENCH_VIEW_KEY, JSON.stringify(view)); } catch (e) { /* ignore */ }
}

/* 默认作品卡补进旧本地配置:本机保存的卡片列表会整体覆盖默认值,
   否则代码里新增的作品在已有配置的浏览器里不会显示。
   用户主动删掉的卡记在 removedCards,不会被补回来。 */
function migrateCards(s) {
  const next = structuredClone(s);
  const removed = new Set(next.removedCards || []);
  if (!next.cards || typeof next.cards !== 'object') next.cards = {};

  // 将旧版拆开的两个毛茸茸卡片合并为一个项目,保留用户对卡片的自定义字段。
  const savedIpui = Array.isArray(next.cards.ipui) ? next.cards.ipui : [];
  const oldPlush = savedIpui.filter((c) => c && (c.id === 'plush-sticker' || c.id === 'plush-brand'));
  const mergedPlush = categoryData.ipui.cards.find((c) => c.id === 'plush');
  if (oldPlush.length && mergedPlush && !savedIpui.some((c) => c && c.id === 'plush')) {
    const preferred = oldPlush.find((c) => c.id === 'plush-brand') || oldPlush[0];
    next.cards.ipui = savedIpui
      .filter((c) => c && c.id !== 'plush-sticker' && c.id !== 'plush-brand')
      .concat([{ ...mergedPlush, ...preferred, id: mergedPlush.id, title: mergedPlush.title, meta: mergedPlush.meta, desc: mergedPlush.desc, image: mergedPlush.image, gallery: mergedPlush.gallery }]);
  } else {
    next.cards.ipui = savedIpui.filter((c) => c && c.id !== 'plush-sticker' && c.id !== 'plush-brand');
  }
  removed.delete('plush');
  removed.add('plush-sticker');
  removed.add('plush-brand');

  Object.keys(categoryData).forEach((key) => {
    const defaults = new Map(categoryData[key].cards.map((card) => [card.id, card]));
    const saved = Array.isArray(next.cards[key]) ? next.cards[key] : [];
    const normalized = saved.map((card) => {
      const base = defaults.get(card && card.id);
      if (!base) return card;
      return {
        ...base,
        ...card,
        gallery: card.gallery === null ? [...base.gallery] : (Array.isArray(card.gallery) ? card.gallery : [...base.gallery]),
      };
    });
    const has = new Set(normalized.map((c) => c && c.id));
    const missing = categoryData[key].cards.filter((c) => !has.has(c.id) && !removed.has(c.id));
    if (key === 'graphic' && missing.some((c) => c.id === 'kv-visual')) {
      const kv = missing.find((c) => c.id === 'kv-visual');
      const rest = missing.filter((c) => c.id !== 'kv-visual');
      // KV视觉是平面设计中的第二个子项目；只在首次导入时插入，不重排用户已有作品。
      next.cards[key] = [normalized[0], { ...kv }, ...normalized.slice(1), ...rest.map((c) => ({ ...c }))].filter(Boolean);
    } else {
      next.cards[key] = missing.length ? normalized.concat(missing.map((c) => ({ ...c }))) : normalized;
    }
  });
  next.removedCards = [...removed].filter((id) => id !== 'plush');
  next.cardSyncVersion = CARD_SYNC_VERSION;
  return next;
}

/* 旧版「酸绿」默认值 → 黑粉默认值;仅当用户没手动改过该项时才覆盖,保留自定义选择 */
function migrateToPink(s) {
  const next = structuredClone(s);
  const legacy = { '#d8ff43': '#ff4d9d' };
  if (legacy[next.blocks.accent]) next.blocks.accent = legacy[next.blocks.accent];
  if (legacy[next.brandAccent]) next.brandAccent = legacy[next.brandAccent];
  if (next.blocks.pageBackground === '#111110') next.blocks.pageBackground = '#0e0b10';
  if (next.blocks.text === '#ebe8e1') next.blocks.text = '#f0ebee';
  if (next.blocks.muted === '#9b9992') next.blocks.muted = '#a89aa2';
  return next;
}

/* 读取本地图片 → 等比缩放 → JPEG dataURL(工作台上传作品图/背景图用,控制体积防爆 localStorage) */
const ASSET_DB_NAME = 'lrr-portfolio-assets-v1';
const ASSET_STORE_NAME = 'assets';

function openAssetDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject(new Error('indexeddb-unavailable'));
    const request = indexedDB.open(ASSET_DB_NAME, 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(ASSET_STORE_NAME)) db.createObjectStore(ASSET_STORE_NAME);
      if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings');
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('indexeddb-open-failed'));
  });
}
function saveAsset(dataUrl) {
  const key = 'asset-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  return openAssetDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(ASSET_STORE_NAME, 'readwrite');
    tx.objectStore(ASSET_STORE_NAME).put(dataUrl, key);
    tx.oncomplete = () => { db.close(); resolve('idb:' + key); };
    tx.onerror = () => { db.close(); reject(tx.error || new Error('indexeddb-write-failed')); };
  }));
}
function saveSettingsSnapshot(settings) {
  return openAssetDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction('settings', 'readwrite');
    tx.objectStore('settings').put(settings, 'latest');
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error || new Error('settings-snapshot-failed')); };
  }));
}
function loadSettingsSnapshot() {
  return openAssetDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction('settings', 'readonly');
    const request = tx.objectStore('settings').get('latest');
    request.onsuccess = () => { db.close(); resolve(request.result || null); };
    request.onerror = () => { db.close(); reject(request.error || new Error('settings-snapshot-read-failed')); };
  }));
}

function loadAsset(key) {
  return openAssetDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(ASSET_STORE_NAME, 'readonly');
    const request = tx.objectStore(ASSET_STORE_NAME).get(key.replace(/^idb:/, ''));
    request.onsuccess = () => { db.close(); resolve(request.result || ''); };
    request.onerror = () => { db.close(); reject(request.error || new Error('indexeddb-read-failed')); };
  }));
}
function collectAssetRefs(value, out = new Set()) {
  if (typeof value === 'string' && value.startsWith('idb:')) out.add(value);
  else if (Array.isArray(value)) value.forEach((item) => collectAssetRefs(item, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => collectAssetRefs(item, out));
  return out;
}
function replaceAssetRefs(value, assets) {
  if (typeof value === 'string' && value.startsWith('idb:')) return assets[value] || value;
  if (Array.isArray(value)) return value.map((item) => replaceAssetRefs(item, assets));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, replaceAssetRefs(item, assets)]));
  return value;
}
function useAssetSrc(src) {
  const [resolved, setResolved] = React.useState(src || '');
  React.useEffect(() => {
    let alive = true;
    if (!src || !src.startsWith('idb:')) { setResolved(src || ''); return () => { alive = false; }; }
    loadAsset(src).then((value) => { if (alive) setResolved(value || ''); }).catch(() => { if (alive) setResolved(''); });
    return () => { alive = false; };
  }, [src]);
  return resolved;
}
function AssetImage({ src, alt = '', className, loading, style }) {
  const resolved = useAssetSrc(src);
  return resolved ? <img src={resolved} alt={alt} className={className} loading={loading} style={style} /> : null;
}
function storeCompressedImages(files, max = 1280, quality = 0.82) {
  return Promise.all(files.map((file) => compressImage(file, max, quality).then(saveAsset)));
}
async function externalizeEmbeddedAssets(value) {
  if (typeof value === 'string' && value.startsWith('data:image/')) return saveAsset(value);
  if (Array.isArray(value)) return Promise.all(value.map((item) => externalizeEmbeddedAssets(item)));
  if (value && typeof value === 'object') {
    const entries = await Promise.all(Object.entries(value).map(async ([key, item]) => [key, await externalizeEmbeddedAssets(item)]));
    return Object.fromEntries(entries);
  }
  return value;
}

function compressImage(file, max = 1280, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        try {
          const scale = Math.min(1, max / Math.max(img.width, img.height));
          const cw = Math.max(1, Math.round(img.width * scale));
          const ch = Math.max(1, Math.round(img.height * scale));
          const canvas = document.createElement('canvas');
          canvas.width = cw;
          canvas.height = ch;
          canvas.getContext('2d').drawImage(img, 0, 0, cw, ch);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (err) { reject(err); }
      };
      img.onerror = () => reject(new Error('decode-failed'));
      img.src = reader.result;
    };
    reader.onerror = () => reject(new Error('read-failed'));
    reader.readAsDataURL(file);
  });
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const offset = 26;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

const pageSequence = navItems.map((item) => item.id);

/* 只有一级页面的空白区域负责翻页,所有二级交互和内容本身保持原行为。 */
function isBlankPageClick(event) {
  if (event.defaultPrevented) return false;
  const target = event.target;
  if (!(target instanceof Element)) return false;
  return !target.closest([
    'button',
    'a',
    'input',
    'textarea',
    'select',
    'summary',
    '[role="button"]',
    '[tabindex]',
    '[contenteditable="true"]',
    '.category-card',
    '.project-modal',
    '.site-nav',
    '.workbench',
    '.wb-toggle',
    '.id-card-overlay',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'li',
    'span',
    'img',
    'svg',
    'canvas',
  ].join(','));
}

function createPageAdvanceHandler(id) {
  const index = pageSequence.indexOf(id);
  const nextId = pageSequence[index + 1];
  if (!nextId) return undefined;
  return (event) => {
    if (isBlankPageClick(event)) scrollToSection(nextId);
  };
}

/* ================= 玻璃导航(SpecularButton 高光按钮 + 滚动监听 active) ================= */
function GlassNav({ settings, mobileOpen, setMobileOpen, go }) {
  const [activeId, setActiveId] = React.useState('cover');

  /* 滚动监听:哪一屏占据视口中部,哪一项就高亮(autoAnimate 光圈环绕) */
  React.useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const mid = window.innerHeight * 0.42;
      let best = 'cover';
      let bestDist = Infinity;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom < 60 || r.top > window.innerHeight - 60) continue;
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) { bestDist = d; best = item.id; }
      }
      setActiveId(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(compute); };
    window.addEventListener('scroll', onScroll, { passive: true });
    compute();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const specLink = (item) => {
    const active = activeId === item.id;
    return (
      <SpecularButton
        key={item.id}
        size="sm"
        radius={999}
        tint="#ff4d9d"
        tintOpacity={active ? 0.13 : 0.045}
        textColor={active ? '#ffffff' : 'rgba(240,235,238,.72)'}
        lineColor="#ffb9d6"
        baseColor="#4a2f3c"
        intensity={1.15}
        idleIntensity={active ? 0.55 : 0.22}
        shineSize={16}
        shineFade={46}
        thickness={1.1}
        glow={0.95}
        followMouse
        proximity={130}
        autoAnimate={active}
        speed={0.5}
        onClick={() => go(item.id)}
        className="nav-spec"
        aria-current={active ? 'page' : undefined}
      >
        {item.label}
      </SpecularButton>
    );
  };

  return (
    <nav className={`site-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="主导航">
      <button className="nav-brand" onClick={() => go('cover')} aria-label="返回封面页">
        {settings.brandText}<span>.</span>
      </button>
      <div className="nav-links">
        {navItems.map(specLink)}
      </div>
      <SpecularButton
        size="sm"
        radius={999}
        tint="#ff4d9d"
        tintOpacity={0.16}
        textColor="#ffffff"
        lineColor="#ffd9e8"
        baseColor="#8a3358"
        intensity={1.3}
        idleIntensity={0.42}
        shineSize={18}
        shineFade={52}
        thickness={1.2}
        glow={1.05}
        followMouse
        proximity={170}
        onClick={() => go('about')}
        className="nav-spec nav-spec-contact"
      >
        联系我 <ArrowUpRight size={15} />
      </SpecularButton>
      <button className="mobile-menu" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-label={mobileOpen ? '关闭导航菜单' : '打开导航菜单'}>
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {mobileOpen && <div className="mobile-links">{navItems.map((item) => <button key={item.id} onClick={() => go(item.id)}><span>{item.en}</span>{item.label}<ArrowUpRight size={15} /></button>)}</div>}
    </nav>
  );
}

/* ================= 封面页 ================= */
function PageBackground({ settings, id, assetsReady = true }) {
  const bg = normalizeBackgroundConfig(settings.pageBackgrounds?.[id]);
  if (!assetsReady && id !== 'cover') return null;
  const coverMode = id === 'cover' && bg.mode === 'none' ? settings.cover.mode : null;
  const mode = coverMode || bg.mode;
  if (mode === 'none') return null;
  const image = id === 'cover' && bg.mode === 'none' ? settings.cover.image : bg.image;
  const video = id === 'cover' && bg.mode === 'none' ? settings.cover.video : bg.video;
  const resolvedImage = useAssetSrc(image);
  const style = {
    opacity: bg.bgOpacity,
    transform: `scale(${bg.bgScale}) translate(${bg.bgX - 50}%, ${bg.bgY - 50}%)`,
    filter: `saturate(${bg.bgSaturate})`,
  };
  return <div className={`page-custom-background page-custom-background-${id}`} aria-hidden="true">
    {mode === 'video'
      ? <video src={id === 'about' && video.startsWith('blob:') ? video : A + video} autoPlay muted loop playsInline preload="metadata" style={style} />
      : <img src={resolvedImage} alt="" style={style} />}
    <div className="page-custom-overlay" style={{ background: `rgba(14,11,16,${bg.overlay})` }} />
  </div>;
}

function Cover({ settings, onDirectEnter, active }) {
  const c = { ...DEFAULT_SETTINGS.cover, ...(settings.cover || {}) };
  const customCoverBackground = isCustomBackground(settings, 'cover');
  const headlineStyle = { fontSize: `clamp(74px, 10.8vw, ${c.headlineSize}px)` };
  const videoRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const safeCover = normalizeBackgroundConfig(c, { ...DEFAULT_PAGE_BACKGROUND, ...DEFAULT_SETTINGS.cover });
  const bgTransform = {
    transform: `scale(${safeCover.bgScale}) translate(${safeCover.bgX - 50}%, ${safeCover.bgY - 50}%)`,
    objectPosition: c.imagePosition,
    opacity: c.bgOpacity,
    filter: `saturate(${c.bgSaturate}) contrast(1.06)`,
  };

  React.useEffect(() => {
    if (c.mode !== 'video') return undefined;
    const v = videoRef.current;
    if (!v) return undefined;
    if (active) {
      v.pause();
    } else {
      try { v.currentTime = 0; } catch (e) {}
      v.loop = true;
      v.play().catch(() => {});
    }
    return () => v.pause();
  }, [c.mode, c.video, active]);

  // Parallax scroll effect
  React.useEffect(() => {
    const onScroll = () => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / window.innerHeight));
      wrapRef.current.style.setProperty('--scroll-progress', progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* 鼠标视差:标题/眉标/引言按不同深度随指针漂移(尊重 reduced-motion) */
  const [ptr, setPtr] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    if (c.parallax === false) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; setPtr({ x: tx, y: ty }); });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [c.parallax]);
  const ptrStyle = { '--px': ptr.x.toFixed(3), '--py': ptr.y.toFixed(3) };

  const handleDirectEnter = (event) => {
    event?.stopPropagation();
    const v = videoRef.current;
    if (v) v.pause();
    onDirectEnter();
  };

  const handleCoverClick = () => onDirectEnter();

  return (
    <section className="page cover-page" id="cover" onClick={handleCoverClick}>
      {!customCoverBackground && <div ref={wrapRef} className="cover-video-wrap" aria-hidden="true">
        {c.mode === 'video'
          ? <video ref={videoRef} className="cover-video" style={bgTransform} muted loop playsInline preload="auto" poster={c.image} key={c.video}><source src={A + c.video} type="video/mp4" /></video>
          : <img className="cover-image" src={c.image} alt="" style={bgTransform} />}
        {c.mode === 'video' && <div className="cover-blur-layer"><video src={A + c.video} muted loop playsInline preload="auto" aria-hidden="true" /></div>}
        <div className="cover-video-vignette" style={{ background: `linear-gradient(90deg, rgba(10,10,10,.95) 0%, rgba(10,10,10,.66) 48%, rgba(10,10,10,.2) 100%), linear-gradient(0deg, rgba(10,10,10,${c.vignette}), transparent 45%)` }} />
        <div className="cover-noise" />
      </div>}
      {customCoverBackground && <PageBackground settings={settings} id="cover" />}

      {/* 3D 封面层:Aurora + 粒子场 + 浮动线框几何体(screen 混合只增亮) */}
      {c.hero3d !== false && <Hero3D density={c.hero3dDensity ?? 1} quality={c.hero3dQuality ?? 'auto'} />}

      <div className="cover-hero-content page-inner" style={ptrStyle}>
        <div className="eyebrow"><span className="eyebrow-dot" style={{ background: settings.blocks.accent }} /> {c.eyebrow} <span className="eyebrow-line" /> 01 / 07</div>
        <h1 style={headlineStyle}>{c.headlineMain}<br /><em>{c.headlineAccent}</em>{c.headlineTail}</h1>
        <p className="hero-intro">{c.intro}</p>

        {c.showBottomMeta && <div className="hero-bottom"><div className="hero-note">Scroll to explore <ArrowDownRight size={20} /></div><div className="hero-meta"><span>Based in Guangzhou</span><span>Available for work · 2026</span></div></div>}
      </div>
    </section>
  );
}

/* ================= 个人介绍(第二页 · 照片前置 + 左侧内容栏 + scroll-triggered 渐显) ================= */
function About({ settings, onContact, onAdvance, assetsReady, entered }) {
  const a = { ...DEFAULT_SETTINGS.about, ...(settings.about || {}) };
  const contentRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.34 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const aboutBackgroundMode = settings.pageBackgrounds?.about?.mode || 'none';
  const aboutUsesVideo = aboutBackgroundMode === 'video';
  const over = a.photoLayer === 'over';
  const maskStart = Math.max(0, Math.min(70, Number(a.maskStart ?? 46)));
  const resolvedPhoto = useAssetSrc(a.photo);
  const photoStyle = {
    backgroundImage: `url('${resolvedPhoto}')`,
    transform: `scale(${a.bgScale}) translate(${a.bgX - 50}%, ${a.bgY - 50}%)`,
    filter: `saturate(${a.bgSaturate}) contrast(1.05)`,
    mixBlendMode: a.blend,
    '--photo-op': String(a.bgOpacity),
    '--photo-fit': a.bgFit === 'contain' ? 'contain' : 'cover',
    '--mask-start': `${maskStart}%`,
  };
  const blurStyle = {
    ...photoStyle,
    zIndex: 0,
    transform: `scale(${(a.bgScale * 1.1).toFixed(3)}) translate(${a.bgX - 50}%, ${a.bgY - 50}%)`,
    filter: `blur(${a.feather}px) saturate(${a.bgSaturate}) contrast(1.05)`,
  };

  return (
    <section className="page about-page" id="about" onClick={onAdvance}>
      {assetsReady && aboutUsesVideo && <PageBackground settings={settings} id="about" assetsReady={assetsReady} />}
      {assetsReady && !aboutUsesVideo && <>
        {a.feather > 2 && <div className="about-photo about-photo-blur" style={blurStyle} aria-hidden="true" />}
        <div className="about-overlay" style={{ background: `linear-gradient(90deg, rgba(18,12,19,.94) 0%, rgba(18,12,19,.72) 38%, rgba(18,12,19,.34) 62%, rgba(18,12,19,.16) 100%), linear-gradient(0deg, rgba(18,12,19,${a.overlay}), rgba(18,12,19,.18) 55%, rgba(18,12,19,.5))` }} />
        <div className="about-photo about-photo-sharp" style={{ ...photoStyle, zIndex: over ? 5 : 2 }} aria-hidden="true" />
        <div className="about-edge-shade" style={{ zIndex: over ? 6 : 3, background: over ? 'linear-gradient(180deg, rgba(22,15,23,.85) 0%, transparent 7%)' : undefined }} aria-hidden="true" />
      </>}

      <div ref={contentRef} className={`page-inner about-inner ${inView ? 'is-revealed' : ''}`}>
        <div className="page-topline"><span>02 / 07</span><span>About Ruiru</span></div>

        <div className="about-hero">
          <div className="about-name-row">
            <div className="about-name-tech">
              <TechText
                text="林瑞如"
                fontWeight={700}
                fontSize={120}
                color={settings.blocks.text}
                accentColor={settings.blocks.accent}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={10}
                sweep={true}
                speed={0.8}
              />
            </div>
            <button className="about-contact-trigger" type="button" onClick={(event) => { event.stopPropagation(); onContact(); }} aria-label="点击联系我,打开身份 ID 卡">
              <span className="about-contact-trigger-dot" aria-hidden="true" />
              <span className="about-contact-trigger-copy"><strong>点击联系我</strong><small>OPEN ID CARD</small></span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </div>
          <p className="about-tagline">平面视觉设计师 · 让信息被看见</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>教育背景</h3>
            <p><strong>电子科技大学中山学院</strong><br />产品设计 · 本科 · 2020–2024</p>
          </div>
          <div className="about-card">
            <h3>擅长领域</h3>
            <p>平面版式 · 品牌视觉<br />电商详情页 · IP 延展 · 短视频</p>
          </div>
          <div className="about-card">
            <h3>为什么选择我</h3>
            <p>在线教育内容行业全流程经验,反应快上手快;能把 AI 用进真实流程,批量起稿、人工精修定稿。</p>
          </div>
        </div>

        <div className="about-feature-cards">
          <FeatureCard
            title="平面设计"
            description="版式、节奏与信息层级,让复杂内容清晰有效。"
            icon={Monitor}
            gradient="linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)"
            delay={0.1}
          />
          <FeatureCard
            title="IP&UI设计"
            description="从角色设定到界面视觉,保持跨触点的一致性格。"
            icon={Palette}
            gradient="linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)"
            delay={0.2}
          />
          <FeatureCard
            title="产品设计"
            description="围绕卖点与场景,完成主视觉到详情页的成套表达。"
            icon={Zap}
            gradient="linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)"
            delay={0.3}
          />
        </div>

        <div className="about-contact-row">
          <div className="about-contact-bar">
            <a href="mailto:773614142@qq.com"><Mail size={16} /> 773614142@qq.com</a>
            <a href="tel:14718546719"><Phone size={16} /> 147-1854-6719</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DriftWallOverview({ settings, assetsReady, onSelect }) {
  const overview = { ...DEFAULT_SETTINGS.overview, ...(settings.overview || {}) };
  const cards = React.useMemo(() => Object.keys(categoryData).flatMap((key) => {
    const saved = settings?.cards?.[key];
    const categoryCards = Array.isArray(saved) ? saved : categoryData[key].cards;
    return categoryCards.map((card) => ({ card, category: key }));
  }), [settings?.cards]);
  const seen = React.useRef(new Set());
  const items = React.useMemo(() => {
    seen.current = new Set();
    return cards.filter(({ card }) => {
      if (!card?.image || seen.current.has(card.image)) return false;
      seen.current.add(card.image);
      return true;
    }).map(({ card, category }) => ({ image: card.image, title: card.title, card, category }));
  }, [cards]);
  return <section className="page overview-page" id="overview" aria-label="作品总览" onClick={createPageAdvanceHandler('overview')}>
    <PageBackground settings={settings} id="overview" assetsReady={assetsReady} />
    <div className="overview-heading page-inner" style={{ '--overview-heading-y': `${overview.headingY}px` }}>
      <div className="page-topline"><span>07 / 07</span><span>Portfolio Overview</span></div>
      <h2>作品总览</h2>
    </div>
    {assetsReady && <DriftWall items={items} onSelect={onSelect} columns={5} tileWidth={overview.tileWidth} tileHeight={overview.tileHeight} gap={overview.gap} tilt={16} turn={-14} perspective={1200} depth={120} speed={42} direction="up" variance={0.45} parallax={0.6} lift={64} fade={0.6} dim={0.55} overlayColor="#060010" scale={overview.wallScale} x={overview.wallX} y={overview.wallY} />}
  </section>;
}

function DriftWallTile({ id, item, columnIndex, active, onFocus, onBlur, onSelect }) {
  const activate = (event) => {
    event?.stopPropagation();
    onSelect?.(item);
  };
  return <div className={`drift-wall__tile${active ? ' is-active' : ''}`} data-tile-id={id} data-col={columnIndex} tabIndex="0" role="button" aria-label={`查看项目: ${item.title || '作品'}`} onPointerDown={activate} onFocus={onFocus} onBlur={onBlur} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(event); } }}><span className="drift-wall__inner"><AssetImage src={item.image} alt={item.title || ''} loading="lazy" /><span className="drift-wall__overlay" aria-hidden="true" /></span></div>;
}

function DriftWall({ items, onSelect, columns = 5, tileWidth = 200, tileHeight = 132, gap = 18, radius = 14, tilt = 16, turn = -14, roll = 0, perspective = 1200, depth = 120, speed = 42, direction = 'up', variance = 0.45, parallax = 0.6, pauseOnHover = false, lift = 64, fade = 0.6, dim = 0.55, grayscale = false, overlayColor = '#060010', scale = 1.18, x = 50, y = 50 }) {
  const containerRef = React.useRef(null);
  const planeRef = React.useRef(null);
  const trackRefs = React.useRef([]);
  const rafRef = React.useRef(null);
  const offsetsRef = React.useRef([]);
  const velocitiesRef = React.useRef([]);
  const hoveredColRef = React.useRef(-1);
  const wallHoveredRef = React.useRef(false);
  const pointerRef = React.useRef({ x: 0, y: 0 });
  const pointerDampedRef = React.useRef({ x: 0, y: 0 });
  const lastTsRef = React.useRef(null);
  const activeIdRef = React.useRef(null);
  const [containerHeight, setContainerHeight] = React.useState(600);
  const [activeId, setActiveId] = React.useState(null);
  const [reduced, setReduced] = React.useState(false);
  const [resolvedItems, setResolvedItems] = React.useState(items || []);
  React.useEffect(() => {
    let alive = true;
    Promise.all((items || []).map(async (item) => ({ ...item, image: item.image?.startsWith('idb:') ? await loadAsset(item.image).catch(() => '') : item.image })))
      .then((next) => { if (alive) setResolvedItems(next); });
    return () => { alive = false; };
  }, [items]);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event) => setReduced(event.matches);
    setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  const columnItems = React.useMemo(() => {
    const cols = Array.from({ length: columns }, () => []);
    (resolvedItems || []).forEach((item, index) => cols[index % columns].push(item));
    return cols.map((col) => (col.length ? col : (items || []).slice(0, 1)));
  }, [resolvedItems, columns]);
  const columnMeta = React.useMemo(() => {
    const unit = tileHeight + gap;
    return columnItems.map((col) => {
      const copyHeight = Math.max(unit, col.length * unit);
      return { copyHeight, copies: Math.max(2, Math.ceil((containerHeight * 1.6) / copyHeight) + 1) };
    });
  }, [columnItems, tileHeight, gap, containerHeight]);
  React.useLayoutEffect(() => {
    if (!containerRef.current) return undefined;
    const ro = new ResizeObserver(([entry]) => setContainerHeight(entry.contentRect.height || 600));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);
  const baseVelocities = React.useMemo(() => {
    const dirSign = direction === 'up' ? 1 : -1;
    return columnItems.map((_, index) => {
      const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
      return speed * (1 + variance * pseudo) * dirSign * (index % 2 === 0 ? 1 : -1);
    });
  }, [columnItems, speed, direction, variance]);
  React.useEffect(() => {
    offsetsRef.current = columnMeta.map((meta, index) => meta.copyHeight * ((index * 0.37) % 1));
    velocitiesRef.current = columnItems.map(() => 0);
  }, [columnMeta, columnItems]);
  const applyPlaneTransform = React.useCallback((px, py) => {
    if (!planeRef.current) return;
    planeRef.current.style.left = `${x}%`;
    planeRef.current.style.top = `${y}%`;
    planeRef.current.style.transform = `translate(-50%, -50%) scale(${scale}) rotateX(${tilt + py}deg) rotateY(${turn + px}deg) rotateZ(${roll}deg) translateZ(${-depth}px)`;
  }, [tilt, turn, roll, depth, scale, x, y]);
  React.useEffect(() => {
    const animate = (ts) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.min(0.05, Math.max(0, ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;
      const maxTilt = parallax * 8;
      const targetX = pointerRef.current.x * maxTilt;
      const targetY = -pointerRef.current.y * maxTilt;
      const damp = 1 - Math.exp(-dt / 0.12);
      pointerDampedRef.current.x += (targetX - pointerDampedRef.current.x) * damp;
      pointerDampedRef.current.y += (targetY - pointerDampedRef.current.y) * damp;
      applyPlaneTransform(pointerDampedRef.current.x, pointerDampedRef.current.y);
      columnMeta.forEach((meta, index) => {
        const el = trackRefs.current[index];
        if (!el || !meta) return;
        const paused = wallHoveredRef.current && pauseOnHover;
        const factor = paused || hoveredColRef.current === index ? 0 : 1;
        const target = reduced ? 0 : baseVelocities[index] * factor;
        const ease = 1 - Math.exp(-dt / (target === 0 ? 0.16 : 0.28));
        velocitiesRef.current[index] += (target - velocitiesRef.current[index]) * ease;
        const next = ((offsetsRef.current[index] + velocitiesRef.current[index] * dt) % meta.copyHeight + meta.copyHeight) % meta.copyHeight;
        offsetsRef.current[index] = next;
        el.style.transform = `translate3d(0, ${-next}px, 0)`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); rafRef.current = null; lastTsRef.current = null; };
  }, [applyPlaneTransform, baseVelocities, columnMeta, pauseOnHover, parallax, reduced]);
  const release = () => { activeIdRef.current = null; hoveredColRef.current = -1; setActiveId(null); };
  const handlePointerMove = (event) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    if (parallax > 0 && !reduced) pointerRef.current = { x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 };
    const tile = event.target.closest?.('[data-tile-id]');
    if (!tile) return;
    const id = tile.dataset.tileId;
    if (id === activeIdRef.current) return;
    activeIdRef.current = id;
    hoveredColRef.current = Number(tile.dataset.col);
    setActiveId(id);
  };
  return <div ref={containerRef} className={`drift-wall${reduced ? ' drift-wall--reduced' : ''}`} style={{ '--dw-tile-w': `${tileWidth}px`, '--dw-tile-h': `${tileHeight}px`, '--dw-gap': `${gap}px`, '--dw-radius': `${radius}px`, '--dw-perspective': `${perspective}px`, '--dw-lift': `${lift}px`, '--dw-dim': dim, '--dw-gray': grayscale ? 1 : 0, '--dw-overlay': overlayColor, '--dw-edge': `${Math.max(0, (1 - fade) * 100)}%` }} onPointerMove={handlePointerMove} onPointerEnter={() => { wallHoveredRef.current = true; }} onPointerLeave={() => { wallHoveredRef.current = false; pointerRef.current = { x: 0, y: 0 }; release(); }} role="group" aria-label="作品总览漂浮墙">
    <div ref={planeRef} className="drift-wall__plane">
      {columnItems.map((col, columnIndex) => {
        const meta = columnMeta[columnIndex];
        return <div className="drift-wall__col" key={`col-${columnIndex}`}><div className="drift-wall__track" ref={(el) => { trackRefs.current[columnIndex] = el; }}>{Array.from({ length: meta.copies }).map((_, copyIndex) => col.map((item, itemIndex) => {
          const id = `${columnIndex}-${copyIndex}-${itemIndex}`;
          return <DriftWallTile key={id} id={id} item={item} columnIndex={columnIndex} active={activeId === id} onSelect={onSelect} onFocus={() => { activeIdRef.current = id; hoveredColRef.current = columnIndex; setActiveId(id); }} onBlur={release} />;
        }))}</div></div>;
      })}
    </div>
  </div>;
}

function ProjectCard({ card, index, onOpen }) {
  const [pointer, setPointer] = React.useState({ x: 50, y: 50, active: false });

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const handlePointerLeave = () => setPointer({ x: 50, y: 50, active: false });

  const cardStyle = {
    '--tilt-x': `${(50 - pointer.y) * 0.08}deg`,
    '--tilt-y': `${(pointer.x - 50) * 0.1}deg`,
    '--glare-x': `${pointer.x}%`,
    '--glare-y': `${pointer.y}%`,
  };

  return (
    <article
      className={`category-card ${pointer.active ? 'is-hovered' : ''}`}
      style={cardStyle}
      onClick={() => onOpen(card)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      tabIndex="0"
      onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpen(card); } }}
      aria-label={`查看项目: ${card.title}`}
    >
      <div className="category-image">
        {card.image ? <AssetImage src={card.image} alt={card.title} loading="lazy" /> : <div className="category-image-empty">暂无图片</div>}
        <div className="category-glare" aria-hidden="true" />
        <div className="category-hover"><Plus size={22} /></div>
        <span className="category-count">{String((card.gallery || []).length).padStart(2, '0')} frames</span>
      </div>
      <div className="category-card-info"><span>0{index + 1} / {card.meta}</span><h3>{card.title}</h3><ArrowUpRight size={17} /></div>
    </article>
  );
}

function CategoryPage({ id, settings, onAdvance, assetsReady, activeProject, activeIndex, onOpenProject, onCloseProject, onSetActiveIndex }) {
  const data = categoryData[id];
  /* 卡片列表以工作台设置为准(可增删图/设封面),无设置时回退到默认数据 */
  const cards = (settings && settings.cards && Array.isArray(settings.cards[id])) ? settings.cards[id] : data.cards;
  const innerRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  /* 每次分类页重新进入视口时重播标题与作品卡片的渐显动画。 */
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false);
          requestAnimationFrame(() => setInView(true));
        } else {
          setInView(false);
        }
      },
      { threshold: 0.15 }
    );
    if (innerRef.current) observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!activeProject) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onCloseProject();
      if (e.key === 'ArrowRight') onSetActiveIndex((i) => Math.min((activeProject.gallery.length - 1), i + 1));
      if (e.key === 'ArrowLeft') onSetActiveIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => { window.removeEventListener('keydown', onKey); document.body.classList.remove('modal-open'); };
  }, [activeProject, onCloseProject, onSetActiveIndex]);

  return (
    <section className={`page category-page category-${id}`} id={id} onClick={onAdvance}>
      <PageBackground settings={settings} id={id} assetsReady={assetsReady} />
      <div ref={innerRef} className={`page-inner category-inner ${inView ? 'is-revealed' : ''}`}>
        <div className="page-topline"><span>{data.number} / 07</span><span>{data.label}</span></div>
        <div className="category-heading"><h2>{data.title}</h2><p>{data.intro}</p></div>
        <div className="category-grid">
          {cards.map((card, index) => <ProjectCard key={card.id} card={card} index={index} onOpen={onOpenProject} />)}
        </div>
      </div>

      {activeProject && (
        <div className="project-modal" onClick={onCloseProject}>
          <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={onCloseProject} aria-label="关闭"><X size={22} /></button>
            <div className="project-modal-stage">
              <AssetImage key={activeIndex} src={activeProject.gallery[activeIndex]} alt={activeProject.title} />
              {activeProject.gallery.length > 1 && (
                <>
                  <button className="project-modal-nav prev" onClick={() => onSetActiveIndex((i) => Math.max(0, i - 1))} disabled={activeIndex === 0} aria-label="上一张">‹</button>
                  <button className="project-modal-nav next" onClick={() => onSetActiveIndex((i) => Math.min(activeProject.gallery.length - 1, i + 1))} disabled={activeIndex === activeProject.gallery.length - 1} aria-label="下一张">›</button>
                </>
              )}
              <div className="project-modal-count">{activeIndex + 1} / {activeProject.gallery.length}</div>
            </div>
            <div className="project-modal-info">
              <span className="project-modal-meta">{activeProject.meta}</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.desc}</p>
              <div className="project-modal-thumbs">
                {activeProject.gallery.map((g, i) => <button key={g} className={i === activeIndex ? 'is-active' : ''} onClick={() => onSetActiveIndex(i)}><AssetImage src={g} alt="" /></button>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= 工作台 ================= */
function Field({ label, children }) {
  return <label className="wb-field"><span className="wb-field-label">{label}</span>{children}</label>;
}

function ImagePicker({ label, value, onChange }) {
  return (
    <Field label={label}>
      <select className="wb-select" value={value} onChange={(e) => onChange(e.target.value)}>
        {IMAGE_LIBRARY.map((img) => <option key={img.id} value={img.url}>{img.label}</option>)}
      </select>
      <div className="wb-thumb"><img src={value} alt="" /></div>
    </Field>
  );
}

function VideoPicker({ label, value, onChange }) {
  return (
    <Field label={label}>
      <select className="wb-select" value={value} onChange={(e) => onChange(e.target.value)}>
        {VIDEO_SOURCES.map((v) => <option key={v.id} value={v.id}>{v.label}</option>)}
      </select>
    </Field>
  );
}

function Workbench({ settings, setSettings, onReset, onImport, onExport, onSave, saveState, view, setView }) {
  const setAboutBackgroundMode = (mode) => {
    setSettings((prev) => {
      const next = structuredClone(prev);
      next.pageBackgrounds.about = { ...DEFAULT_PAGE_BACKGROUND, ...(next.pageBackgrounds.about || {}), mode, userChoice: true };
      if (mode === 'video' && !next.pageBackgrounds.about.video) next.pageBackgrounds.about.video = 'intro-visual.mp4';
      return normalizeSettings(next);
    });
  };
  const set = (path, value) => {
    setSettings((prev) => {
      const next = structuredClone(prev);
      const keys = path.split('.');
      let node = next;
      for (let i = 0; i < keys.length - 1; i++) node = node[keys[i]];
      node[keys[keys.length - 1]] = value;
      return normalizeSettings(next);
    });
  };
  const c = settings.cover;
  const a = settings.about;
  const pageBg = settings.pageBackgrounds || {};
  const f = settings.frame;
  const b = settings.blocks;

  /* ---------- 层级折叠:一级手风琴(同时只开一个) + 页内二级手风琴 ----------
     坑:不能用受控 open={state} + onToggle 里读 e.currentTarget.open。
     Chrome 挂载期派发的 toggle 事件里 open 还是旧值(false),会把默认展开的分组误关。
     改用非受控 details + 「打开时 imperative 收起同胞」,时序无关,行为稳定。 */
  const wbBodyRef = React.useRef(null);
  const cardPointerDragRef = React.useRef(null);
  const beginCardPointerDrag = (cardId, e) => {
    if (e.pointerType === 'mouse') return;
    const node = e.currentTarget;
    const drag = { cardId, pointerId: e.pointerId, active: false, timer: null, targetId: cardId };
    drag.timer = setTimeout(() => {
      drag.active = true;
      node.closest('.wb-card-item')?.classList.add('is-dragging');
      node.setPointerCapture(e.pointerId);
    }, 360);
    cardPointerDragRef.current = drag;
  };
  const updateCardPointerDrag = (e) => {
    const drag = cardPointerDragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    if (!drag.active) {
      if (Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0) > 12) {
        clearTimeout(drag.timer);
        cardPointerDragRef.current = null;
      }
      return;
    }
    e.preventDefault();
    document.querySelectorAll('.wb-card-item.is-drop-target').forEach((el) => el.classList.remove('is-drop-target'));
    const target = document.elementFromPoint(e.clientX, e.clientY)?.closest('.wb-card-item');
    if (target && target.dataset.cardId !== drag.cardId) {
      drag.targetId = target.dataset.cardId;
      target.classList.add('is-drop-target');
    }
  };
  const finishCardPointerDrag = (e) => {
    const drag = cardPointerDragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    clearTimeout(drag.timer);
    document.querySelectorAll('.wb-card-item.is-dragging,.wb-card-item.is-drop-target').forEach((el) => el.classList.remove('is-dragging', 'is-drop-target'));
    if (drag.active && drag.targetId !== drag.cardId) reorderCard(drag.cardId, drag.targetId);
    cardPointerDragRef.current = null;
  };
  const detailLabel = (el) => (el.querySelector(':scope > summary')?.textContent || '').replace(/^[▸▾]\s*/, '').trim();
  const onGroupToggle = (e) => {
    const el = e.currentTarget;
    const label = detailLabel(el);
    rememberOpen('groups', label, el.open);
    if (!el.open) return;
    const body = wbBodyRef.current;
    if (body) body.querySelectorAll(':scope > .wb-group').forEach((g) => { if (g !== el) g.open = false; });
  };
  const onSubToggle = (e) => {
    const el = e.currentTarget;
    const label = `${detailLabel(el.closest('.wb-group'))}/${detailLabel(el)}`;
    rememberOpen('subgroups', label, el.open);
    if (!el.open) return;
    const parent = el.closest('.wb-group');
    if (parent) parent.querySelectorAll(':scope > .wb-subgroup').forEach((g) => { if (g !== el) g.open = false; });
  };

  React.useEffect(() => {
    const body = wbBodyRef.current;
    if (!body) return undefined;
    const restore = () => {
      body.scrollTop = Number(view.scrollTop) || 0;
      body.querySelectorAll(':scope > .wb-group').forEach((el) => { el.open = isOpen('groups', detailLabel(el)); });
      body.querySelectorAll('.wb-subgroup').forEach((el) => { el.open = isOpen('subgroups', `${detailLabel(el.closest('.wb-group'))}/${detailLabel(el)}`); });
      body.querySelectorAll('.wb-card-details').forEach((el) => { el.open = isOpen('cardDetails', `${wbCat}/${el.closest('.wb-card-item')?.dataset.cardId || ''}`); });
    };
    const timer = setTimeout(restore, 0);
    const saveScroll = () => setView((prev) => ({ ...prev, scrollTop: body.scrollTop }));
    body.addEventListener('scroll', saveScroll, { passive: true });
    return () => { clearTimeout(timer); body.removeEventListener('scroll', saveScroll); };
  }, [view.category]);

  /* 配色预设:一键切换整套色板(黑粉为默认) */
  const PRESETS = {
    '黑粉 · 默认': { accent: '#ff4d9d', pageBackground: '#0e0b10', text: '#f0ebee', muted: '#a89aa2' },
    '酸性绿': { accent: '#d8ff43', pageBackground: '#111110', text: '#ebe8e1', muted: '#9b9992' },
    '电光青': { accent: '#22d3ee', pageBackground: '#0a0f14', text: '#e8f4f6', muted: '#93a7ad' },
  };
  const applyPreset = (name) => {
    const p = PRESETS[name];
    if (!p) return;
    Object.keys(p).forEach((k) => set('blocks.' + k, p[k]));
  };

  /* ---------- 作品卡片管理:增删图 / 设封面 / 新建作品 ---------- */
  const wbCat = view.category || 'graphic';
  const setWbCat = (category) => setView((prev) => ({ ...prev, category }));
  const catCards = (settings.cards && Array.isArray(settings.cards[wbCat])) ? settings.cards[wbCat] : [];
  const isOpen = (kind, key) => (view[kind] || []).includes(key);
  const rememberOpen = (kind, key, open) => setView((prev) => {
    const current = new Set(prev[kind] || []);
    if (open) current.add(key); else current.delete(key);
    return { ...prev, [kind]: [...current] };
  });
  const updateCatCards = (updater) => {
    setSettings((prev) => {
      const next = structuredClone(prev);
      if (!next.cards || typeof next.cards !== 'object') next.cards = {};
      const list = Array.isArray(next.cards[wbCat]) ? next.cards[wbCat].slice() : [];
      next.cards[wbCat] = updater(list);
      return next;
    });
  };
  const setCover = (cardId, url) => updateCatCards((list) => list.map((c2) => (c2.id === cardId ? { ...c2, image: url } : c2)));
  const reorderImage = (cardId, sourceIndex, targetIndex) => updateCatCards((list) => list.map((card) => {
    if (card.id !== cardId || sourceIndex === targetIndex) return card;
    const gallery = Array.isArray(card.gallery) ? card.gallery.slice() : [];
    if (sourceIndex < 0 || targetIndex < 0 || sourceIndex >= gallery.length || targetIndex >= gallery.length) return card;
    const [moved] = gallery.splice(sourceIndex, 1);
    gallery.splice(targetIndex, 0, moved);
    return { ...card, gallery };
  }));
  const imagePointerDragRef = React.useRef(null);
  const beginImagePointerDrag = (cardId, imageIndex, e) => {
    if (e.pointerType === 'mouse') return;
    const node = e.currentTarget;
    const drag = { cardId, imageIndex, pointerId: e.pointerId, active: false, targetIndex: imageIndex, timer: null };
    drag.timer = setTimeout(() => {
      drag.active = true;
      node.classList.add('is-dragging');
      node.setPointerCapture(e.pointerId);
    }, 360);
    imagePointerDragRef.current = drag;
  };
  const updateImagePointerDrag = (e) => {
    const drag = imagePointerDragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    if (!drag.active) {
      if (Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0) > 12) {
        clearTimeout(drag.timer);
        imagePointerDragRef.current = null;
      }
      return;
    }
    e.preventDefault();
    document.querySelectorAll('.wb-gallery-item.is-drop-target').forEach((el) => el.classList.remove('is-drop-target'));
    const target = document.elementFromPoint(e.clientX, e.clientY)?.closest('.wb-gallery-item');
    if (target && target.dataset.cardId === drag.cardId) {
      drag.targetIndex = Number(target.dataset.imageIndex);
      target.classList.add('is-drop-target');
    }
  };
  const finishImagePointerDrag = (e) => {
    const drag = imagePointerDragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    clearTimeout(drag.timer);
    document.querySelectorAll('.wb-gallery-item.is-dragging,.wb-gallery-item.is-drop-target').forEach((el) => el.classList.remove('is-dragging', 'is-drop-target'));
    if (drag.active && Number.isInteger(drag.targetIndex)) reorderImage(drag.cardId, drag.imageIndex, drag.targetIndex);
    imagePointerDragRef.current = null;
  };
  const removeImage = (cardId, url) => updateCatCards((list) => list.map((c2) => {
    if (c2.id !== cardId) return c2;
    const gallery = (c2.gallery || []).filter((g) => g !== url);
    return { ...c2, gallery, image: c2.image === url ? (gallery[0] || '') : c2.image };
  }));
  const deleteCard = (cardId) => {
    updateCatCards((list) => list.filter((c2) => c2.id !== cardId));
    setSettings((prev) => {
      if ((prev.removedCards || []).includes(cardId)) return prev;
      const next = structuredClone(prev);
      next.removedCards = (next.removedCards || []).concat([cardId]);
      return next;
    });
  };
  const updateCard = (cardId, patch) => updateCatCards((list) => list.map((c2) => (c2.id === cardId ? { ...c2, ...patch } : c2)));
  const reorderCard = (sourceId, targetId) => {
    if (!sourceId || !targetId || sourceId === targetId) return;
    updateCatCards((list) => {
      const sourceIndex = list.findIndex((card) => card.id === sourceId);
      const targetIndex = list.findIndex((card) => card.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) return list;
      const next = list.slice();
      const [moved] = next.splice(sourceIndex, 1);
      next.splice(targetIndex, 0, moved);
      return next;
    });
  };
  const moveCard = (cardId, direction) => {
    const index = catCards.findIndex((card) => card.id === cardId);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= catCards.length) return;
    reorderCard(cardId, catCards[target].id);
  };
  const handleCardUpload = (cardId, e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    if (!files.length) return;
    storeCompressedImages(files)
      .then((refs) => updateCatCards((list) => list.map((c2) => {
        if (c2.id !== cardId) return c2;
        const gallery = (c2.gallery || []).concat(refs);
        return { ...c2, gallery, image: c2.image || refs[0] };
      })))
      .catch(() => alert('图片存储失败,请确认浏览器允许网站使用本地存储'));
  };
  const handleNewCard = (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    if (!files.length) return;
    storeCompressedImages(files)
      .then((refs) => updateCatCards((list) => list.concat([{
        id: 'custom-' + Date.now().toString(36),
        title: '新作品 ' + (list.length + 1),
        meta: '自定义作品',
        desc: '',
        image: refs[0],
        gallery: refs,
      }])))
      .catch(() => alert('图片存储失败,请确认浏览器允许网站使用本地存储'));
  };

  /* 自定义上传介绍页背景图:读取 → 缩放至 1600px → JPEG dataURL 写入 about.photo,并切完整显示 */
  const handleAboutUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    compressImage(file, 1600, 0.85)
      .then(saveAsset)
      .then((assetRef) => { set('about.photo', assetRef); set('about.bgFit', 'contain'); })
      .catch(() => alert('图片存储失败,请确认浏览器允许网站使用本地存储'));
  };
  const handlePageBackgroundUpload = (pageId, e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    if (file.type.startsWith('video/')) {
      const objectUrl = URL.createObjectURL(file);
      setSettings((prev) => {
        const next = structuredClone(prev);
        const oldUrl = next.pageBackgrounds?.[pageId]?.video;
        if (typeof oldUrl === 'string' && oldUrl.startsWith('blob:')) URL.revokeObjectURL(oldUrl);
        next.pageBackgrounds[pageId] = { ...DEFAULT_PAGE_BACKGROUND, ...(next.pageBackgrounds[pageId] || {}), mode: 'video', video: objectUrl, userChoice: true };
        return normalizeSettings(next);
      });
      return;
    }
    compressImage(file, 1800, 0.86)
      .then(saveAsset)
      .then((assetRef) => setSettings((prev) => {
        const next = structuredClone(prev);
        if (pageId === 'about') next.about.photo = assetRef;
        next.pageBackgrounds[pageId] = { ...DEFAULT_PAGE_BACKGROUND, ...(next.pageBackgrounds[pageId] || {}), mode: 'image', image: assetRef, userChoice: true };
        return normalizeSettings(next);
      }))
      .catch(() => alert('图片存储失败,请确认浏览器允许网站使用本地存储'));
  };

  const handleAboutVideoUpload = (e) => handlePageBackgroundUpload('about', e);

  return (
    <aside className="workbench">
      <div className="wb-head">
        <div className="wb-heading">
          <span className="wb-title"><SlidersHorizontal size={15} /> 编辑工作台</span>
          <span className={`wb-save-state is-${saveState}`} role="status" aria-live="polite">
            {saveState === 'saving' ? '正在保存…' : saveState === 'saved' ? '已保存' : saveState === 'error' ? '保存失败' : '自动保存开启'}
          </span>
        </div>
        <div className="wb-actions">
          <button className="wb-save-button" onClick={onSave} title="立即保存当前全部修改"><span>保存</span></button>
          <button onClick={onImport} title="导入配置"><Upload size={15} /></button>
          <button onClick={onExport} title="导出配置备份"><Download size={15} /></button>
          <button onClick={onReset} title="重置为默认"><RotateCcw size={15} /></button>
        </div>
      </div>
      <div className="wb-body" ref={wbBodyRef}>
        <details className="wb-group" onToggle={onGroupToggle}>
          <summary>品牌 / 色块</summary>
          <Field label="品牌文字"><input className="wb-input" value={settings.brandText} onChange={(e) => set('brandText', e.target.value)} /></Field>
          <Field label="配色预设">
            <div className="wb-preset-row">
              {Object.keys(PRESETS).map((name) => <button key={name} type="button" className="wb-preset" onClick={() => applyPreset(name)}>{name}</button>)}
            </div>
          </Field>
          <Field label="强调色"><div className="wb-color-row"><input type="color" value={b.accent} onChange={(e) => set('blocks.accent', e.target.value)} /><code>{b.accent}</code></div></Field>
          <Field label="页面背景"><div className="wb-color-row"><input type="color" value={b.pageBackground} onChange={(e) => set('blocks.pageBackground', e.target.value)} /><code>{b.pageBackground}</code></div></Field>
          <Field label="正文色"><div className="wb-color-row"><input type="color" value={b.text} onChange={(e) => set('blocks.text', e.target.value)} /><code>{b.text}</code></div></Field>
          <Field label="次要文字色"><div className="wb-color-row"><input type="color" value={b.muted} onChange={(e) => set('blocks.muted', e.target.value)} /><code>{b.muted}</code></div></Field>
        </details>

        <details className="wb-group" onToggle={onGroupToggle}>
          <summary>鼠标光标</summary>
          <Field label={`光标大小 ${settings.cursor.size}px`}><input type="range" min="32" max="128" step="16" value={settings.cursor.size} onChange={(e) => set('cursor.size', Number(e.target.value))} /></Field>
          <Field label={`光标不透明度 ${settings.cursor.opacity}%`}><input type="range" min="40" max="100" step="20" value={settings.cursor.opacity} onChange={(e) => set('cursor.opacity', Number(e.target.value))} /></Field>
        </details>

        <details className="wb-group" onToggle={onGroupToggle}>
          <summary>封面页</summary>
          <details className="wb-subgroup" defaultOpen onToggle={onSubToggle}>
            <summary>背景与媒体</summary>
            <Field label="背景类型">
              <select className="wb-select" value={c.mode} onChange={(e) => set('cover.mode', e.target.value)}>
                <option value="video">视频</option>
                <option value="image">图片</option>
              </select>
            </Field>
            {c.mode === 'video' ? (
              <VideoPicker label="视频源" value={c.video} onChange={(v) => set('cover.video', v)} />
            ) : (
              <ImagePicker label="背景图" value={c.image} onChange={(v) => set('cover.image', v)} />
            )}
            <Field label="图片焦点(图片模式)"><input className="wb-input" value={c.imagePosition} onChange={(e) => set('cover.imagePosition', e.target.value)} placeholder="50% 50%" /></Field>
          </details>
          <details className="wb-subgroup" onToggle={onSubToggle}>
            <summary>标题文案</summary>
            <Field label="眉标文字"><input className="wb-input" value={c.eyebrow} onChange={(e) => set('cover.eyebrow', e.target.value)} /></Field>
            <Field label="主标题 · 第一行"><input className="wb-input" value={c.headlineMain} onChange={(e) => set('cover.headlineMain', e.target.value)} /></Field>
            <Field label="主标题 · 强调词"><input className="wb-input" value={c.headlineAccent} onChange={(e) => set('cover.headlineAccent', e.target.value)} /></Field>
            <Field label="主标题 · 结尾"><input className="wb-input" value={c.headlineTail} onChange={(e) => set('cover.headlineTail', e.target.value)} /></Field>
            <Field label={`标题字号 ${c.headlineSize}px`}><input type="range" min="120" max="240" step="5" value={c.headlineSize} onChange={(e) => set('cover.headlineSize', Number(e.target.value))} /></Field>
            <Field label="副标题文字"><textarea className="wb-textarea" rows="2" value={c.intro} onChange={(e) => set('cover.intro', e.target.value)} /></Field>
            <Field label="显示底部信息"><input type="checkbox" checked={c.showBottomMeta} onChange={(e) => set('cover.showBottomMeta', e.target.checked)} /></Field>
          </details>
          <details className="wb-subgroup" onToggle={onSubToggle}>
            <summary>3D 粒子层</summary>
            <Field label="3D 粒子层(Aurora/粒子/几何体)"><input type="checkbox" checked={c.hero3d !== false} onChange={(e) => set('cover.hero3d', e.target.checked)} /></Field>
            <Field label={`粒子密度 ${(c.hero3dDensity ?? 1).toFixed(2)}×`}><input type="range" min="0.3" max="1.6" step="0.05" value={c.hero3dDensity ?? 1} onChange={(e) => set('cover.hero3dDensity', Number(e.target.value))} /></Field>
            <Field label="3D 画质">
              <select className="wb-select" value={c.hero3dQuality ?? 'auto'} onChange={(e) => set('cover.hero3dQuality', e.target.value)}>
                <option value="auto">自动(按性能)</option>
                <option value="high">高(全粒子)</option>
                <option value="medium">中</option>
                <option value="low">低(流畅优先)</option>
              </select>
            </Field>
            <Field label="鼠标视差"><input type="checkbox" checked={c.parallax !== false} onChange={(e) => set('cover.parallax', e.target.checked)} /></Field>
          </details>
          <details className="wb-subgroup" onToggle={onSubToggle}>
            <summary>画面调整</summary>
            <Field label={`背景缩放 ${c.bgScale.toFixed(2)}×`}><input type="range" min="0.6" max="3" step="0.01" value={c.bgScale} onChange={(e) => set('cover.bgScale', Number(e.target.value))} /></Field>
            <Field label={`背景水平位移 ${c.bgX}%`}><input type="range" min="0" max="100" step="1" value={c.bgX} onChange={(e) => set('cover.bgX', Number(e.target.value))} /></Field>
            <Field label={`背景垂直位移 ${c.bgY}%`}><input type="range" min="0" max="100" step="1" value={c.bgY} onChange={(e) => set('cover.bgY', Number(e.target.value))} /></Field>
            <Field label={`背景饱和度 ${c.bgSaturate.toFixed(2)}`}><input type="range" min="0" max="1.6" step="0.02" value={c.bgSaturate} onChange={(e) => set('cover.bgSaturate', Number(e.target.value))} /></Field>
            <Field label={`背景透明度 ${(c.bgOpacity * 100).toFixed(0)}%`}><input type="range" min="5" max="100" step="5" value={c.bgOpacity * 100} onChange={(e) => set('cover.bgOpacity', Number(e.target.value) / 100)} /></Field>
            <Field label={`暗角强度 ${c.vignette.toFixed(2)}`}><input type="range" min="0" max="0.95" step="0.05" value={c.vignette} onChange={(e) => set('cover.vignette', Number(e.target.value))} /></Field>
          </details>
        </details>

        <details className="wb-group" onToggle={onGroupToggle}>
          <summary>个人介绍(第二页)</summary>
          <details className="wb-subgroup" defaultOpen onToggle={onSubToggle}>
            <summary>背景媒体</summary>
            <Field label="背景类型">
              <select className="wb-select" value={pageBg.about?.mode || 'none'} onChange={(e) => setAboutBackgroundMode(e.target.value)}>
                <option value="none">默认图片</option>
                <option value="image">图片</option>
                <option value="video">视频</option>
              </select>
            </Field>
            {(pageBg.about?.mode || 'none') !== 'video' ? <>
              <Field label="背景图片">
                <select className="wb-select" value={a.photo} onChange={(e) => set('about.photo', e.target.value)}>
                  {IMAGE_LIBRARY.map((img) => <option key={img.id} value={img.url}>{img.label}</option>)}
                  {(a.photo.startsWith('data:') || a.photo.startsWith('idb:')) && <option value={a.photo}>自定义上传</option>}
                </select>
                <div className="wb-thumb"><AssetImage src={a.photo} alt="" /></div>
              </Field>
              <Field label="添加自定义图片"><input type="file" accept="image/*" className="wb-file" onChange={handleAboutUpload} /></Field>
              {a.photo !== A + 'about-ambient.webp' && <button type="button" className="wb-button" onClick={() => set('about.photo', A + 'about-ambient.webp')}>恢复默认图片</button>}
            </> : <>
              <VideoPicker label="选择网站视频素材" value={pageBg.about?.video || 'intro-visual.mp4'} onChange={(video) => {
                setSettings((prev) => {
                  const next = structuredClone(prev);
                  next.pageBackgrounds.about = { ...DEFAULT_PAGE_BACKGROUND, ...(next.pageBackgrounds.about || {}), mode: 'video', video, userChoice: true };
                  return normalizeSettings(next);
                });
              }} />
              <Field label="添加自定义视频"><input type="file" accept="video/*" className="wb-file" onChange={handleAboutVideoUpload} /></Field>
            </>}
            <Field label="照片适应方式">
              <select className="wb-select" value={a.bgFit ?? 'cover'} onChange={(e) => set('about.bgFit', e.target.value)}>
                <option value="cover">填满 · 会裁切边缘</option>
                <option value="contain">完整 · 显示全图</option>
              </select>
            </Field>
          </details>
          <details className="wb-subgroup" onToggle={onSubToggle}>
            <summary>遮罩与混合</summary>
            <Field label={`左侧淡出起点 ${a.maskStart ?? 46}%`}><input type="range" min="0" max="70" step="2" value={a.maskStart ?? 46} onChange={(e) => set('about.maskStart', Number(e.target.value))} /></Field>
            <Field label="图层位置">
              <select className="wb-select" value={a.photoLayer} onChange={(e) => set('about.photoLayer', e.target.value)}>
                <option value="under">内容下方(推荐)</option>
                <option value="over">置顶 · 压在内容上</option>
              </select>
            </Field>
            <Field label="图层混合">
              <select className="wb-select" value={a.blend} onChange={(e) => set('about.blend', e.target.value)}>
                <option value="normal">正常</option>
                <option value="screen">滤色(融入暗背景)</option>
                <option value="lighten">变亮</option>
                <option value="overlay">叠加</option>
                <option value="soft-light">柔光</option>
              </select>
            </Field>
          </details>
          <details className="wb-subgroup" onToggle={onSubToggle}>
            <summary>画面调整</summary>
            <Field label={`照片缩放 ${a.bgScale.toFixed(2)}×`}><input type="range" min="0.6" max="3" step="0.01" value={a.bgScale} onChange={(e) => set('about.bgScale', Number(e.target.value))} /></Field>
            <Field label={`照片水平位移 ${a.bgX}%`}><input type="range" min="0" max="100" step="1" value={a.bgX} onChange={(e) => set('about.bgX', Number(e.target.value))} /></Field>
            <Field label={`照片垂直位移 ${a.bgY}%`}><input type="range" min="0" max="100" step="1" value={a.bgY} onChange={(e) => set('about.bgY', Number(e.target.value))} /></Field>
            <Field label={`照片饱和度 ${a.bgSaturate.toFixed(2)}`}><input type="range" min="0" max="1.6" step="0.02" value={a.bgSaturate} onChange={(e) => set('about.bgSaturate', Number(e.target.value))} /></Field>
            <Field label={`照片不透明度 ${(a.bgOpacity * 100).toFixed(0)}%`}><input type="range" min="5" max="100" step="5" value={a.bgOpacity * 100} onChange={(e) => set('about.bgOpacity', Number(e.target.value) / 100)} /></Field>
            <Field label={`暗角强度 ${a.overlay.toFixed(2)}`}><input type="range" min="0.2" max="0.95" step="0.05" value={a.overlay} onChange={(e) => set('about.overlay', Number(e.target.value))} /></Field>
            <Field label={`边缘羽化 ${a.feather}px`}><input type="range" min="0" max="48" step="2" value={a.feather} onChange={(e) => set('about.feather', Number(e.target.value))} /></Field>
          </details>
        </details>

        <details className="wb-group" onToggle={onGroupToggle}>
          <summary>页面背景 · 图片 / 视频</summary>
          {PAGE_IDS.filter((pageId) => pageId !== 'about').map((pageId) => {
            const page = normalizeBackgroundConfig(pageBg[pageId]);
            const label = navItems.find((item) => item.id === pageId)?.label || pageId;
            const isLegacyPage = pageId === 'about';
            return <details className="wb-subgroup" key={pageId} onToggle={onSubToggle}>
              <summary>{label}</summary>
              {isLegacyPage && <div className="wb-hint">个人介绍页的视频可在本组上传，也可在本组素材列表选择。</div>}
              <Field label="背景类型">
                <select className="wb-select" value={page.mode} onChange={(e) => {
                  const mode = e.target.value;
                  setSettings((prev) => {
                    const next = structuredClone(prev);
                    next.pageBackgrounds[pageId] = { ...DEFAULT_PAGE_BACKGROUND, ...(next.pageBackgrounds[pageId] || {}), mode };
                    if (pageId === 'about' && mode === 'video' && !next.pageBackgrounds.about.video) next.pageBackgrounds.about.video = 'intro-visual.mp4';
                    return next;
                  });
                }}>
                  <option value="none">沿用当前背景</option><option value="video">自定义视频</option>
                </select>
              </Field>
              {page.mode === 'video' && <>
                <VideoPicker label="选择网站视频素材" value={page.video?.startsWith('blob:') ? 'intro-visual.mp4' : (page.video || 'intro-visual.mp4')} onChange={(video) => {
                  setSettings((prev) => {
                    const next = structuredClone(prev);
                    const oldUrl = next.pageBackgrounds[pageId]?.video;
                    if (typeof oldUrl === 'string' && oldUrl.startsWith('blob:')) URL.revokeObjectURL(oldUrl);
                    next.pageBackgrounds[pageId] = { ...DEFAULT_PAGE_BACKGROUND, ...(next.pageBackgrounds[pageId] || {}), mode: 'video', video };
                    return next;
                  });
                }} />
                {pageId === 'about' && <Field label="上传自定义视频文件"><input type="file" accept="video/*" className="wb-file" onChange={(e) => handlePageBackgroundUpload(pageId, e)} /></Field>}
              </>}
              <Field label={`画面缩放 ${page.bgScale.toFixed(2)}×`}><input type="range" min="0.6" max="2.5" step="0.05" value={page.bgScale} onChange={(e) => set(`pageBackgrounds.${pageId}.bgScale`, Number(e.target.value))} /></Field>
              <Field label={`水平焦点 ${page.bgX}%`}><input type="range" min="0" max="100" step="1" value={page.bgX} onChange={(e) => set(`pageBackgrounds.${pageId}.bgX`, Number(e.target.value))} /></Field>
              <Field label={`垂直焦点 ${page.bgY}%`}><input type="range" min="0" max="100" step="1" value={page.bgY} onChange={(e) => set(`pageBackgrounds.${pageId}.bgY`, Number(e.target.value))} /></Field>
              <Field label={`媒体透明度 ${Math.round(page.bgOpacity * 100)}%`}><input type="range" min="5" max="100" step="5" value={page.bgOpacity * 100} onChange={(e) => set(`pageBackgrounds.${pageId}.bgOpacity`, Number(e.target.value) / 100)} /></Field>
              <Field label={`暗色遮罩 ${Math.round(page.overlay * 100)}%`}><input type="range" min="0" max="95" step="5" value={page.overlay * 100} onChange={(e) => set(`pageBackgrounds.${pageId}.overlay`, Number(e.target.value) / 100)} /></Field>
            </details>;
          })}
        </details>

        <details className="wb-group" defaultOpen onToggle={onGroupToggle}>
          <summary>作品管理 · 增删图 / 设封面</summary>
          <Field label="作品分类">
            <select className="wb-select" value={wbCat} onChange={(e) => setWbCat(e.target.value)}>
              {Object.keys(categoryData).map((k) => <option key={k} value={k}>{categoryData[k].label}</option>)}
            </select>
          </Field>
          <details className="wb-group" onToggle={onGroupToggle}>
            <summary>作品总览画面</summary>
            <Field label={`作品墙放大 ${Number(settings.overview.wallScale).toFixed(2)}×`}><input type="range" min="0.7" max="2.2" step="0.05" value={settings.overview.wallScale} onChange={(e) => set('overview.wallScale', Number(e.target.value))} /></Field>
            <Field label={`作品墙水平位置 ${settings.overview.wallX}%`}><input type="range" min="35" max="65" step="1" value={settings.overview.wallX} onChange={(e) => set('overview.wallX', Number(e.target.value))} /></Field>
            <Field label={`作品墙垂直位置 ${settings.overview.wallY}%`}><input type="range" min="35" max="75" step="1" value={settings.overview.wallY} onChange={(e) => set('overview.wallY', Number(e.target.value))} /></Field>
            <Field label={`单张图片宽度 ${settings.overview.tileWidth}px`}><input type="range" min="120" max="320" step="4" value={settings.overview.tileWidth} onChange={(e) => set('overview.tileWidth', Number(e.target.value))} /></Field>
            <Field label={`单张图片高度 ${settings.overview.tileHeight}px`}><input type="range" min="80" max="220" step="2" value={settings.overview.tileHeight} onChange={(e) => set('overview.tileHeight', Number(e.target.value))} /></Field>
            <Field label={`图片间距 ${settings.overview.gap}px`}><input type="range" min="8" max="40" step="1" value={settings.overview.gap} onChange={(e) => set('overview.gap', Number(e.target.value))} /></Field>
            <Field label={`标题上下位置 ${settings.overview.headingY}px`}><input type="range" min="-80" max="160" step="4" value={settings.overview.headingY} onChange={(e) => set('overview.headingY', Number(e.target.value))} /></Field>
            <div className="wb-hint">调整只影响最后一页《作品总览》，会自动保存。</div>
          </details>
          <div className="wb-hint wb-order-hint">按住作品左侧“按住拖动”区域，可直接拖到目标位置；排序会自动保存。也可用上移 / 下移微调。</div>
          <div className="wb-card-manager">
            {catCards.length === 0 && <div className="wb-gallery-empty">该分类暂无作品,点下方"新建作品"添加</div>}
            {catCards.map((card, cardIndex) => (
              <div
                className="wb-card-item"
                key={card.id}
                data-card-id={card.id}
                onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }}
                onDrop={(e) => { e.preventDefault(); reorderCard(e.dataTransfer.getData('text/plain'), card.id); }}
              >
                <div className="wb-card-item-head">
                  <div
                    className="wb-card-order"
                    aria-label={`作品位置 ${cardIndex + 1}，可按住拖动排序`}
                    draggable
                    onDragStart={(e) => { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', card.id); e.currentTarget.closest('.wb-card-item')?.classList.add('is-dragging'); }}
                    onDragEnd={(e) => e.currentTarget.closest('.wb-card-item')?.classList.remove('is-dragging')}
                    title="按住这里拖动作品排序"
                    onPointerDown={(e) => beginCardPointerDrag(card.id, e)}
                    onPointerMove={updateCardPointerDrag}
                    onPointerUp={finishCardPointerDrag}
                    onPointerCancel={finishCardPointerDrag}
                  >
                    <span className="wb-card-order-label">按住拖动</span>
                    <button type="button" onClick={() => moveCard(card.id, -1)} disabled={cardIndex === 0} title="上移子项目">↑ 上移</button>
                    <span className="wb-card-order-number">{String(cardIndex + 1).padStart(2, '0')}</span>
                    <button type="button" onClick={() => moveCard(card.id, 1)} disabled={cardIndex === catCards.length - 1} title="下移子项目">↓ 下移</button>
                  </div>
                  {card.image
                    ? <AssetImage className="wb-card-cover" src={card.image} alt="" />
                    : <span className="wb-card-cover wb-card-cover-empty" />}
                  <label className="wb-card-title-field">
                    <span>页面标题（粉色字）</span>
                    <input className="wb-input wb-card-title" value={card.title} onChange={(e) => updateCard(card.id, { title: e.target.value })} placeholder="输入页面上显示的粉色标题" title="编辑页面粉色标题" aria-label="页面标题（粉色字）" />
                  </label>
                  <button type="button" className="wb-card-del" onClick={() => deleteCard(card.id)} title="删除整个作品">×</button>
                </div>
                <div className="wb-card-name-tip">↑ 这里直接改名字,页面标题会同步更新</div>
                  <details className="wb-card-details" onToggle={(e) => rememberOpen('cardDetails', `${wbCat}/${card.id}`, e.currentTarget.open)}>
                    <summary>图库 / 标签 / 加图</summary>
                  <input className="wb-input wb-card-meta" value={card.meta} onChange={(e) => updateCard(card.id, { meta: e.target.value })} placeholder="分类标签,如:品牌视觉 / KV" />
                  <div className="wb-gallery">
                    {(card.gallery || []).map((g, gi) => (
                      <div
                        className={`wb-gallery-item${g === card.image ? ' is-cover' : ''}`}
                        key={`${gi}-${String(g).slice(-24)}`}
                        data-card-id={card.id}
                        data-image-index={gi}
                        draggable
                        onDragStart={(e) => { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', String(gi)); e.currentTarget.classList.add('is-dragging'); }}
                        onDragEnd={(e) => e.currentTarget.classList.remove('is-dragging')}
                        onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }}
                        onDrop={(e) => { e.preventDefault(); const from = Number(e.dataTransfer.getData('text/plain')); if (Number.isInteger(from)) reorderImage(card.id, from, gi); }}
                        onPointerDown={(e) => beginImagePointerDrag(card.id, gi, e)}
                        onPointerMove={updateImagePointerDrag}
                        onPointerUp={finishImagePointerDrag}
                        onPointerCancel={finishImagePointerDrag}
                        title={`按住拖动图片调整顺序，当前位置 ${gi + 1}`}
                      >
                        <button type="button" className="wb-gallery-set" onClick={() => setCover(card.id, g)} title="设为封面">
                          <AssetImage src={g} alt="" />
                        </button>
                        <button type="button" className="wb-gallery-del" onClick={() => removeImage(card.id, g)} title="删除这张图片">×</button>
                        {g === card.image && <span className="wb-gallery-badge">封面</span>}
                      </div>
                    ))}
                  </div>
                  {(card.gallery || []).length === 0 && <div className="wb-gallery-empty">暂无图片,点下方添加</div>}
                  <input type="file" accept="image/*" multiple className="wb-file" onChange={(e) => handleCardUpload(card.id, e)} />
                </details>
              </div>
            ))}
          </div>
          <div className="wb-card-new">
            <input type="file" accept="image/*" multiple className="wb-file" onChange={handleNewCard} />
            <span className="wb-hint">新建作品:一次选中多张图,第一张即为封面;已有作品可直接在卡片内加图。</span>
          </div>
        </details>

        <details className="wb-group" onToggle={onGroupToggle}>
          <summary>排版框架</summary>
          <Field label={`版心宽度 ${f.maxWidth}px`}><input type="range" min="1200" max="2000" step="50" value={f.maxWidth} onChange={(e) => set('frame.maxWidth', Number(e.target.value))} /></Field>
          <Field label={`左右留白 ${f.sideGutter}px`}><input type="range" min="40" max="180" step="4" value={f.sideGutter} onChange={(e) => set('frame.sideGutter', Number(e.target.value))} /></Field>
          <Field label={`顶部内距 ${f.topPadding}px`}><input type="range" min="80" max="220" step="4" value={f.topPadding} onChange={(e) => set('frame.topPadding', Number(e.target.value))} /></Field>
          <Field label={`玻璃透明 ${(b.glassAlpha * 100).toFixed(0)}%`}><input type="range" min="20" max="90" step="5" value={b.glassAlpha * 100} onChange={(e) => set('blocks.glassAlpha', Number(e.target.value) / 100)} /></Field>
        </details>
      </div>
      <div className="wb-foot">改动实时生效并自动保存到本机</div>
    </aside>
  );
}

function App() {
  React.useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    // 首帧布局归零滚动后，才让整站可见；此前 #root 一直隐藏，杜绝恢复旧位置时闪出介绍背景。
    document.getElementById('root').classList.add('app-ready');
  }, []);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [settings, setSettings] = React.useState(() => normalizeSettings(migrateAboutBackgroundChoice(migrateCards(deepMerge(DEFAULT_SETTINGS, PUBLISHED_SETTINGS)))));
  const [wbOpen, setWbOpen] = React.useState(false);
  const [workbenchView, setWorkbenchView] = React.useState(loadWorkbenchView);
  const updateWorkbenchView = React.useCallback((updater) => {
    setWorkbenchView((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveWorkbenchView(next);
      return next;
    });
  }, []);
  const [entered, setEntered] = React.useState(false);
  const [directEntry, setDirectEntry] = React.useState(false);
  const [saveError, setSaveError] = React.useState(false);
  const [saveState, setSaveState] = React.useState('idle');
  const saveTimerRef = React.useRef(null);
  const [assetsReady, setAssetsReady] = React.useState(false);
  const [idCardOpen, setIdCardOpen] = React.useState(false);
  const [activeProject, setActiveProject] = React.useState(null);
  const [activeProjectCategory, setActiveProjectCategory] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const openIdCard = React.useCallback(() => setIdCardOpen(true), []);
  const closeIdCard = React.useCallback(() => setIdCardOpen(false), []);
  const closeProject = React.useCallback(() => setActiveProject(null), []);
  const openProject = React.useCallback((card, category) => {
    if (!card?.gallery?.length) return;
    const start = card.image ? Math.max(0, card.gallery.indexOf(card.image)) : 0;
    setActiveProject(card);
    setActiveProjectCategory(category);
    setActiveIndex(start);
  }, []);

  React.useEffect(() => {
    if (!activeProject) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') closeProject();
      if (event.key === 'ArrowRight') setActiveIndex((index) => Math.min(activeProject.gallery.length - 1, index + 1));
      if (event.key === 'ArrowLeft') setActiveIndex((index) => Math.max(0, index - 1));
    };
    window.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [activeProject, closeProject]);

  React.useEffect(() => {
    if (PUBLISH_MODE) {
      setAssetsReady(true);
      return undefined;
    }
    let alive = true;
    Promise.all([externalizeEmbeddedAssets(settings), loadSettingsSnapshot().catch(() => null)])
      .then(([migrated, snapshot]) => {
        if (!alive) return;
        const hasLocalConfig = !!localStorage.getItem(STORAGE_KEY);
        const backup = snapshot && snapshot.settings ? snapshot.settings : snapshot;
        const source = hasLocalConfig || !backup ? migrated : migrateCards(deepMerge(DEFAULT_SETTINGS, backup));
        const candidate = normalizeSettings(migrateAboutBackgroundChoice(source));
        setSettings((current) => JSON.stringify(current) === JSON.stringify(candidate) ? current : candidate);
        setAssetsReady(true);
      })
      .catch(() => { if (alive) setAssetsReady(true); });
    return () => { alive = false; };
  }, []);

  React.useEffect(() => {
    if (PUBLISH_MODE || !assetsReady) return;
    try {
      const persistent = structuredClone(settings);
      Object.keys(persistent.pageBackgrounds || {}).forEach((id) => {
        const video = persistent.pageBackgrounds[id]?.video;
        if (typeof video === 'string' && video.startsWith('blob:')) persistent.pageBackgrounds[id].video = '';
      });
      Object.keys(persistent.cards || {}).forEach((category) => {
        const defaults = new Map((categoryData[category]?.cards || []).map((card) => [card.id, card]));
        persistent.cards[category] = (persistent.cards[category] || []).map((card) => {
          const base = defaults.get(card.id);
          if (!base) return card;
          const isDefaultGallery = JSON.stringify(card.gallery) === JSON.stringify(base.gallery);
          return isDefaultGallery ? { ...card, gallery: undefined } : card;
        });
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistent));
      setSaveState('saving');
      saveSettingsSnapshot({ settings: persistent, savedAt: Date.now() })
        .then(() => { setSaveError(false); setSaveState('saved'); })
        .catch(() => { setSaveError(true); setSaveState('error'); });
      setSaveError(false);
    } catch (e) {
      if (e?.name === 'QuotaExceededError' || e?.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        try {
          const compact = structuredClone(settings);
          Object.keys(compact.pageBackgrounds || {}).forEach((id) => {
            const video = compact.pageBackgrounds[id]?.video;
            if (typeof video === 'string' && video.startsWith('blob:')) compact.pageBackgrounds[id].video = '';
          });
          Object.keys(compact.cards || {}).forEach((category) => {
            const defaults = new Map((categoryData[category]?.cards || []).map((card) => [card.id, card]));
            compact.cards[category] = (compact.cards[category] || []).map((card) => {
              const base = defaults.get(card.id);
              if (!base) return card;
              const isDefaultGallery = JSON.stringify(card.gallery) === JSON.stringify(base.gallery);
              return isDefaultGallery ? { ...card, gallery: undefined } : card;
            });
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(compact));
          saveSettingsSnapshot({ settings: compact, savedAt: Date.now() }).catch(() => {});
          setSaveError(false);
        } catch (retryError) { setSaveError(true); }
      } else setSaveError(true);
    }
  }, [settings]);

  React.useEffect(() => () => clearTimeout(saveTimerRef.current), []);
  const onSave = React.useCallback(async () => {
    if (!assetsReady) return;
    clearTimeout(saveTimerRef.current);
    setSaveState('saving');
    try {
      const persistent = structuredClone(settings);
      Object.keys(persistent.pageBackgrounds || {}).forEach((id) => {
        const video = persistent.pageBackgrounds[id]?.video;
        if (typeof video === 'string' && video.startsWith('blob:')) persistent.pageBackgrounds[id].video = '';
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistent));
      await saveSettingsSnapshot({ settings: persistent, savedAt: Date.now() });
      setSaveError(false);
      setSaveState('saved');
    } catch (error) {
      setSaveError(true);
      setSaveState('error');
    }
  }, [assetsReady, settings]);

  /* 深度链接:带 #锚点 打开时直接滚动到对应区块(SPA 首屏根节点为空,浏览器原生锚点会失效) */
  React.useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (id && document.getElementById(id)) {
      const timer = setTimeout(() => scrollToSection(id), 150);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  /* 往上滚回顶部（首页）时，重置流程：封面视频重播，介绍页回到初始态 */
  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 80 && entered) {
        setEntered(false);
        setDirectEntry(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [entered]);

  const directEnter = React.useCallback(() => {
    setDirectEntry(true);
    setEntered(true);
    setTimeout(() => scrollToSection('about'), 400);
  }, []);

  const doEnter = React.useCallback(() => {
    setDirectEntry(false);
    setEntered(true);
    setTimeout(() => scrollToSection('about'), 600);
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    if (id === 'cover') { window.scrollTo({ top: 0, behavior: 'smooth' }); setEntered(false); setDirectEntry(false); return; }
    if (!entered && id === 'about') { doEnter(); return; }
    scrollToSection(id);
  };

  const pageAdvanceHandlers = React.useMemo(() => Object.fromEntries(
    pageSequence.map((id) => [id, createPageAdvanceHandler(id)])
  ), []);

  const cu = cursorAsset(settings.cursor.size, settings.cursor.opacity);
  const rootStyle = {
    '--acid': settings.blocks.accent,
    '--ink': settings.blocks.pageBackground,
    '--paper': settings.blocks.text,
    '--muted': settings.blocks.muted,
    '--glass': `rgba(24,24,22,${settings.blocks.glassAlpha})`,
    '--max': `${settings.frame.maxWidth}px`,
    '--gutter': `${settings.frame.sideGutter}px`,
    '--top-pad': `${settings.frame.topPadding}px`,
    '--brand-accent': settings.brandAccent,
    cursor: `url("${cu.url}") ${cu.x} ${cu.y}, auto`,
  };

  const onReset = () => { setSettings(normalizeSettings(structuredClone(DEFAULT_SETTINGS))); setEntered(false); setDirectEntry(false); window.scrollTo({ top: 0 }); };
  const downloadJson = (payload, filename) => {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const el = document.createElement('a');
    el.href = url; el.download = filename; el.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const onExport = async () => {
    try {
      await onSave();
      const refs = [...collectAssetRefs(settings)];
      const assets = {};
      for (const ref of refs) {
        const value = await loadAsset(ref);
        if (value) assets[ref] = value;
      }
      downloadJson({ version: 2, exportedAt: new Date().toISOString(), settings, assets }, 'workbench-backup.json');
      alert(`备份已导出: 配置 ${refs.length ? `及 ${Object.keys(assets).length} 个上传素材` : ''}`);
    } catch (error) {
      setSaveError(true);
      alert('导出失败，请先确认浏览器允许本地存储');
    }
  };
  const onImport = () => {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const bundle = JSON.parse(reader.result);
          const rawSettings = bundle.settings || bundle;
          const assets = bundle.assets || {};
          const refMap = {};
          for (const [oldRef, dataUrl] of Object.entries(assets)) refMap[oldRef] = await saveAsset(dataUrl);
          const remap = (value) => {
            if (typeof value === 'string' && refMap[value]) return refMap[value];
            if (Array.isArray(value)) return value.map(remap);
            if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, remap(item)]));
            return value;
          };
          setSettings(normalizeSettings(migrateCards(deepMerge(DEFAULT_SETTINGS, remap(rawSettings)))));
          alert(`导入成功${Object.keys(refMap).length ? `，已恢复 ${Object.keys(refMap).length} 个上传素材` : ''}`);
        } catch (err) { alert('导入失败:JSON 格式不正确或素材无法写入'); }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <div className={`app-root${assetsReady ? ' is-ready' : ' is-booting'}${entered ? ' has-entered' : ''}`} style={rootStyle}>
      <GlowCursor
        className="site-glow-cursor"
        color="#ff9dc4"
        secondaryColor="#d6337e"
        intensity={1.15}
        trailWidth={3}
        linger={1.2}
        glow={1.1}
        clickBurst={true}
        quality="medium"
        theme="dark"
      />
      <GlassNav settings={settings} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} go={go} onContact={openIdCard} />

      <Cover settings={settings} onDirectEnter={directEnter} active={entered} />
      <About settings={settings} onContact={openIdCard} onAdvance={pageAdvanceHandlers.about} assetsReady={assetsReady} entered={entered} />

      {['graphic', 'ipui', 'product', 'packaging'].map((id) => <CategoryPage key={id} id={id} settings={settings} onAdvance={pageAdvanceHandlers[id]} assetsReady={assetsReady} activeProject={activeProjectCategory === id ? activeProject : null} activeIndex={activeIndex} onOpenProject={(card) => openProject(card, id)} onCloseProject={closeProject} onSetActiveIndex={setActiveIndex} />)}
      <DriftWallOverview settings={settings} assetsReady={assetsReady} onSelect={(item) => {
        if (!item?.card || !item.category) return;
        openProject(item.card, item.category);
        requestAnimationFrame(() => scrollToSection(item.category));
      }} />
      <footer className="site-footer"><span>林瑞如 · 平面视觉设计师</span><span>Thanks for scrolling.</span><span>© 2026 LRR Portfolio</span></footer>

      <IdCardOverlay open={idCardOpen} onClose={closeIdCard} />

      {saveError && <div className="wb-storage-warn">⚠ 本地存储空间不足,最新改动可能未保存,请删除部分作品图片或先用「导出配置」备份</div>}

      {!PUBLISH_MODE && <>
        <button className="wb-toggle" onClick={() => setWbOpen((v) => !v)} aria-label={wbOpen ? '收起工作台' : '展开工作台'}>
          <SlidersHorizontal size={18} />
        </button>
        {wbOpen && <Workbench settings={settings} setSettings={setSettings} onReset={onReset} onImport={onImport} onExport={onExport} onSave={onSave} saveState={saveState} view={workbenchView} setView={updateWorkbenchView} />}
      </>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
