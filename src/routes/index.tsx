import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { photos, photographs, whatsapp, instagram, type Photograph } from '@/lib/photographs';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Natália Silva | Fotografia com afeto em Nova Lima' },
      { name: 'description', content: 'Conheça o trabalho do Studio Natália Silva Fotografia: casamentos, família, gestante, newborn, retratos e eventos em Nova Lima, MG.' },
      { property: 'og:title', content: 'Natália Silva — Fotografia com afeto' },
      { property: 'og:description', content: 'Histórias reais. Memórias para sempre. Conheça o trabalho do Studio Natália Silva Fotografia.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
});

const filters = ['Todos', ...new Set(photographs.map(photo => photo.category))];

function Contact({ label = 'Fale com a Natália' }: { label?: string }) {
  return (
    <Button variant="editorial" asChild>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight aria-hidden="true" /></a>
    </Button>
  );
}

function touchDistance(touches: TouchList) {
  const first = touches[0];
  const second = touches[1];
  if (!first || !second) return 0;
  return Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY);
}

function Index() {
  const [filter, setFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPhotograph, setSelectedPhotograph] = useState<Photograph | null>(null);
  const [lightboxScale, setLightboxScale] = useState(1);
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);

  const galleryPhotographs = filter === 'Todos' ? photographs : photographs.filter(photo => photo.category === filter);
  const lightboxPhotographs = galleryPhotographs;
  const columns = [0, 1, 2].map(column => galleryPhotographs.filter((_, index) => index % 3 === column));
  const selectedIndex = selectedPhotograph
    ? lightboxPhotographs.findIndex(photo => photo.id === selectedPhotograph.id)
    : -1;

  const closePhotograph = () => {
    setSelectedPhotograph(null);
    setLightboxScale(1);
    pinchStart.current = null;
  };

  const movePhotograph = (direction: -1 | 1) => {
    if (lightboxPhotographs.length < 2 || selectedIndex < 0) return;
    const nextIndex = (selectedIndex + direction + lightboxPhotographs.length) % lightboxPhotographs.length;
    setSelectedPhotograph(lightboxPhotographs[nextIndex]);
    setLightboxScale(1);
    pinchStart.current = null;
  };

  useEffect(() => {
    if (!selectedPhotograph) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        movePhotograph(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        movePhotograph(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotograph, selectedIndex, lightboxPhotographs]);

  const navigation = <><a href="#portfolio" onClick={() => setMenuOpen(false)}>Ensaios</a><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a><a href="#natalia" onClick={() => setMenuOpen(false)}>O estúdio</a></>;

  return <>
    <header className="site-header">
      <a href="#inicio" className="wordmark" aria-label="Studio Natália Silva Fotografia, início">
        <span>Natália Silva</span><small>Fotografia com afeto</small>
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation}<Contact label="Vamos conversar" /></nav>
      <Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      {menuOpen && <nav className="menu-panel" aria-label="Navegação móvel">{navigation}<Contact /></nav>}
    </header>

    <main id="inicio">
      <section className="hero" aria-label="Natália Silva Fotografia">
        <div className="hero-content">
          <span className="eyebrow">ESTÚDIO DE FOTOGRAFIA · NOVA LIMA, MG</span>
          <h1>Histórias reais.<br /><em>Memórias para sempre.</em></h1>
          <p className="hero-tagline">Cada fase da vida merece ser lembrada com beleza, cuidado e verdade.</p>
          <div className="hero-actions">
            <Button variant="editorial" asChild><a href="#portfolio">Explore os ensaios<ArrowRight aria-hidden="true" /></a></Button>
            <Button variant="text" asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer">Fale com a Natália<ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
        </div>
        <picture className="hero-art"><img src={photos.heroImage} alt="Ensaio externo de casal entre as árvores" fetchPriority="high" width="432" height="566" /></picture>
        <span className="hero-location">Fotografia com afeto, em Nova Lima.</span>
      </section>

      <section className="introduction">
        <span className="eyebrow">O tempo passa. O amor permanece.</span>
        <h2>Um olhar atento para<br /><em>o que importa.</em></h2>
        <p>Da espera por um bebê às celebrações em família: fotografias feitas para trazer de volta a emoção de cada momento.</p>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="content-width">
          <div className="section-heading">
            <div><span className="eyebrow">PORTFÓLIO · STUDIO NATÁLIA SILVA</span><h2>Histórias em <em>cada detalhe.</em></h2></div>
            <p>Escolha um ensaio e explore o trabalho de perto.</p>
          </div>
          <div className="filters" role="group" aria-label="Filtrar portfólio">
            {filters.map(item => <Button variant="filter" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}
          </div>
          <div className={`editorial-grid ${filter !== 'Todos' ? 'filtered' : ''}`}>
            {columns.map((column, index) => (
              <div className="gallery-column" key={index}>
                {column.map(photo => (
                  <figure className="gallery-item" key={photo.id}>
                    <button type="button" className="gallery-photo-trigger" aria-label={`Ampliar ${photo.category.toLowerCase()}`} onClick={() => { setSelectedPhotograph(photo); setLightboxScale(1); }}>
                      <img src={photo.src} alt={photo.alt} loading="lazy" width={photo.width} height={photo.height} />
                    </button>
                    <figcaption className="gallery-caption"><span>{photo.label}</span><span>{photo.category}</span></figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="natalia" className="about content-width">
        <div className="about-copy">
          <span className="eyebrow">A FOTÓGRAFA · NOVA LIMA, MG</span>
          <h2>Natália Silva<br /><em>Um olhar para a sua história.</em></h2>
          <p>À frente do Studio Natália Silva Fotografia, Natália registra com sensibilidade as fases, encontros e celebrações que fazem parte da vida.</p>
          <div className="about-stat"><strong>Mais de 15 mil</strong><span>Histórias eternizadas ao longo de sua trajetória.</span></div>
          <Contact label="Converse sobre seu ensaio" />
        </div>
        <div className="about-note"><span>Fotografar é guardar</span><strong>um pedacinho<br />do que se sente.</strong><span>Studio Natália Silva · Nova Lima</span></div>
      </section>

      <section className="final-cta">
        <span className="eyebrow">STUDIO NATÁLIA SILVA FOTOGRAFIA</span>
        <h2>Vamos eternizar<br /><em>o seu momento?</em></h2>
        <p>Conte sua ideia para a Natália e encontre o ensaio ideal para a sua história.</p>
        <Contact />
      </section>
    </main>

    <footer>
      <div className="footer-top">
        <a className="wordmark" href="#inicio"><span>Natália Silva</span><small>Fotografia com afeto</small></a>
        <div className="footer-info"><span>Studio Natália Silva Fotografia</span><span>Nova Lima · MG</span><a href={instagram} target="_blank" rel="noopener noreferrer">@studionataliasilva.fotografia</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: +55 31 99145-8058</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Studio Natália Silva Fotografia</span><span>Momentos passam. As fotografias ficam.</span></div>
    </footer>
    <div className="floating-contact"><Button variant="floating" size="icon" asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Natália pelo WhatsApp" title="Falar com a Natália pelo WhatsApp"><MessageCircle aria-hidden="true" /></a></Button></div>

    <Dialog open={Boolean(selectedPhotograph)} onOpenChange={open => { if (!open) closePhotograph(); }}>
      <DialogContent className="lightbox-dialog max-w-[min(96vw,1100px)] border-0 bg-background p-4 sm:p-6">
        <DialogTitle className="sr-only">{selectedPhotograph?.category} — fotografia ampliada</DialogTitle>
        <DialogDescription className="sr-only">No celular, aproxime ou afaste dois dedos sobre a foto para ajustar a visualização. Use as setas para navegar entre as fotos.</DialogDescription>
        {selectedPhotograph && <div className="lightbox-content">
          <div
            className="lightbox-image-viewport"
            onTouchStart={event => {
              if (event.touches.length === 2 && window.matchMedia('(max-width: 760px) and (pointer: coarse)').matches) {
                pinchStart.current = { distance: touchDistance(event.touches), scale: lightboxScale };
              }
            }}
            onTouchMove={event => {
              const pinch = pinchStart.current;
              if (!pinch || event.touches.length !== 2) return;
              event.preventDefault();
              const distance = touchDistance(event.touches);
              if (pinch.distance > 0 && distance > 0) setLightboxScale(Math.min(4, Math.max(1, pinch.scale * (distance / pinch.distance))));
            }}
            onTouchEnd={event => { if (event.touches.length < 2) pinchStart.current = null; }}
            onTouchCancel={() => { pinchStart.current = null; }}
          >
            <img src={selectedPhotograph.src} alt={selectedPhotograph.alt} className="lightbox-image" style={{ transform: `scale(${lightboxScale})` }} />
          </div>
          <div className="lightbox-toolbar">
            <div className="lightbox-navigation">
              <Button variant="ghost" size="icon" aria-label="Foto anterior" onClick={() => movePhotograph(-1)} disabled={lightboxPhotographs.length < 2}><ChevronLeft aria-hidden="true" /></Button>
              <span>{selectedIndex + 1} / {lightboxPhotographs.length}</span>
              <Button variant="ghost" size="icon" aria-label="Próxima foto" onClick={() => movePhotograph(1)} disabled={lightboxPhotographs.length < 2}><ChevronRight aria-hidden="true" /></Button>
            </div>
            <span className="lightbox-category">{selectedPhotograph.category}</span>
          </div>
          <p className="lightbox-hint">No celular, use dois dedos para ampliar ou reduzir a foto.</p>
        </div>}
      </DialogContent>
    </Dialog>
  </>;
}
