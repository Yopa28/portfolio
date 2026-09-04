# 🚀 Quick Start Guide - GSAP Portfolio

Panduan cepat untuk menjalankan portfolio dengan animasi GSAP yang spektakuler!

## 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka browser di `http://localhost:4321` 🎉

## 🎯 Available Pages

### 1. **Homepage** - `/`
Portfolio utama dengan semua komponen GSAP terintegrasi:
- Hero section dengan magnetic buttons
- Animated stats counters
- Project cards dengan scroll reveals
- Contact section dengan magnetic cards

### 2. **GSAP Demo** - `/gsap-demo`
Showcase lengkap semua animasi GSAP:
- Hero animations
- Stats counters
- Animation showcase library
- Project grid
- Contact cards

### 3. **Vibrant Demo** - `/vibrant-demo`
Design system klasik dengan starfield dan abstract shapes

### 4. **Experience Demo** - `/experience-demo`
Experience cards dengan gradient borders

## 🎨 Key Components

### HeroGSAP
```astro
<HeroGSAP
  title="Creative Developer"
  subtitle="Hello, I'm"
  description="Your description here"
/>
```

**Features:**
- 3D text rotation entrance
- Floating gradient orbs
- Magnetic button effects
- Parallax scroll effects

### StatsGSAP
```astro
<StatsGSAP />
```

**Features:**
- Animated counters from 0
- Scroll-triggered reveals
- Hover glow effects
- Parallax movements

### ProjectsGSAP
```astro
<ProjectsGSAP />
```

**Features:**
- Staggered card animations
- Image scale on hover
- Overlay fade effects
- Parallax scrolling

### AnimationShowcase
```astro
<AnimationShowcase />
```

**Features:**
- 12 different animation effects
- Interactive hover demos
- All GSAP techniques demonstrated

## 🎬 Animation Highlights

### 1. Magnetic Effect
Buttons dan cards mengikuti cursor dengan elastic bounce:
```javascript
element.addEventListener('mousemove', (e) => {
  gsap.to(element, {
    x: x * 0.3,
    y: y * 0.3,
    ease: 'power2.out'
  });
});
```

### 2. Scroll Triggered
Animasi muncul saat scroll ke viewport:
```javascript
gsap.from('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%'
  },
  y: 50,
  opacity: 0
});
```

### 3. Counter Animation
Numbers count up dari 0:
```javascript
gsap.to(counter, {
  value: target,
  duration: 2.5,
  onUpdate: () => {
    element.textContent = Math.ceil(counter.value);
  }
});
```

### 4. Stagger Animations
Sequential reveals dengan delay:
```javascript
gsap.from('.items', {
  y: 50,
  opacity: 0,
  stagger: 0.1
});
```

## 🎯 Customization

### Change Colors
Edit di `src/pages/index.astro`:
```css
:root {
  --bg-primary: #0a0a0f;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
}
```

### Modify Animations
All animations in component `<script>` tags:
- Duration: `duration: 1`
- Easing: `ease: 'power4.out'`
- Delay: `delay: 0.2`
- Stagger: `stagger: 0.1`

### Add New Effects
Check `AnimationShowcase.astro` for all available effects:
- Fade In
- Slide Up
- Scale
- Rotate
- Elastic
- Stagger
- Magnetic
- Parallax
- Morph
- Text Reveal
- Counter
- Path Draw

## 🛠️ Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Documentation

- **Full Documentation**: [README.md](./README.md)
- **Design System**: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- **GSAP Guide**: [GSAP_GUIDE.md](./GSAP_GUIDE.md)
- **Customization**: [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

## ⚡ Performance Tips

1. **Use will-change** for animated elements:
```css
.animated {
  will-change: transform, opacity;
}
```

2. **Transform over position**:
```javascript
// ✅ Good
gsap.to(el, { x: 100, y: 100 });

// ❌ Avoid
gsap.to(el, { left: 100, top: 100 });
```

3. **Kill unused animations**:
```javascript
const tween = gsap.to(el, { x: 100 });
tween.kill(); // when not needed
```

## 🎨 Animation Presets

### Smooth Fade In
```javascript
gsap.from(el, {
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
});
```

### Bouncy Entrance
```javascript
gsap.from(el, {
  scale: 0,
  duration: 0.8,
  ease: 'elastic.out(1, 0.5)'
});
```

### 3D Flip
```javascript
gsap.from(el, {
  rotateY: 180,
  duration: 1,
  ease: 'power2.inOut'
});
```

### Smooth Slide
```javascript
gsap.from(el, {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power4.out'
});
```

## 🐛 Troubleshooting

### Animations not working?
1. Check GSAP is imported: `import { gsap } from 'gsap';`
2. Register plugins: `gsap.registerPlugin(ScrollTrigger);`
3. Check browser console for errors

### ScrollTrigger issues?
1. Refresh after resize: `ScrollTrigger.refresh();`
2. Add markers for debugging: `markers: true`
3. Check start/end positions

### Performance issues?
1. Reduce number of animated elements
2. Use `will-change` CSS property
3. Simplify complex animations
4. Use `scrub: true` for scroll animations

## 🎓 Learning Resources

- [GSAP Official Docs](https://greensock.com/docs/)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [Easing Visualizer](https://greensock.com/ease-visualizer/)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)

## 🚀 Deploy

### Vercel
```bash
# Push to GitHub then import in Vercel
vercel
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
netlify deploy
```

### GitHub Pages
```bash
npm run build
# Upload dist/ folder
```

## 💡 Pro Tips

1. **Timeline for sequences** - Easier to control
2. **Stagger for lists** - Beautiful reveals
3. **once: true** - Animate only once
4. **Elastic for playful** - Fun bounce effects
5. **Power4 for smooth** - Professional feel

## 🎉 You're Ready!

Sekarang Anda siap untuk:
- ✅ Customize colors dan content
- ✅ Add your projects
- ✅ Modify animations
- ✅ Deploy to production

**Selamat berkreasi dengan GSAP!** 🎨✨

---

Need help? Check [GSAP_GUIDE.md](./GSAP_GUIDE.md) for detailed documentation.