import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Instagram, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { photos, photographs, whatsapp, instagram, type Photograph } from '@/lib/photographs';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Natália Silva | Fotógrafa em Nova Lima — Gestante, Newborn e Família' },
    { name: 'description', content: 'Studio Natália Silva Fotografia em Nova Lima, MG. Conheça os ensaios de casamento, família, gestante, newborn, retrato e eventos.' },
    { property: 'og:title', content: 'Natália Silva — Histórias eternizadas em fotografias' },
    { property: 'og:description', content: 'Fotógrafa em Nova Lima, MG. Conheça o trabalho do Studio Natália Silva Fotografia e eternize a sua história.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});
const categories = ['Gestante', 'Newborn', 'Smash', 'Família', 'Feminino', 'Eventos'];
const filters = ['Todos', ...categories];
const experiences = [
  { name: 'Gestante', image: photos.maternity },
  { name: 'Newborn', image: photos.newborn },
  { name: 'Smash', image: photos.smash },
  { name: 'Família', image: photos.family },
  { name: 'Feminino', image: photos.feminine },
  { name: 'Eventos', image: photos.events },
];
function Contact({ label = 'Falar com a Natália', light = false }: { label?: string; light?: boolean }) {
  return <Button variant={light ? 'light' : 'editorial'} asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight aria-hidden="true" /></a></Button>;
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

  const visible = filter === 'Todos' ? photographs : photographs.filter(photo => photo.category === filter);

  const galleryPhotographs = visible;
  const lightboxPhotographs = galleryPhotographs.filter(photo => Boolean(photo.src));

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

  const navigation = <><a href="#experiencias" onClick={() => setMenuOpen(false)}>Experiências</a><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a><a href="#natalia" onClick={() => setMenuOpen(false)}>A fotógrafa</a></>;
  return <>
    <header className="site-header">
      <a href="#inicio" className="wordmark" aria-label="Studio Natália Silva Fotografia, início"><span>Natália Silva</span><small>Studio de fotografia</small></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navigation}<Contact label="Vamos conversar" /></nav>
      <Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      {menuOpen && <nav className="menu-panel" aria-label="Navegação móvel">{navigation}<Contact /></nav>}
    </header>
    <main id="inicio">
      <section className="hero" aria-label="Natália Silva Fotografia">
        <div className="hero-content"><span className="eyebrow">CASAMENTOS • FAMÍLIA • RETRATOS • EVENTOS</span><h1>Natália Silva</h1><p className="hero-tagline">Fotógrafa especialista em eternizar momentos</p><p className="hero-stat">Mais de 15 mil histórias eternizadas.</p><div className="hero-actions"><Button variant="light" asChild><a href="#portfolio">Conhecer o trabalho<ArrowRight aria-hidden="true" /></a></Button><Button variant="text" asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer">Falar com a Natália<ArrowUpRight aria-hidden="true" /></a></Button></div></div>
        <picture><img src={photos.studio} alt="Natália Silva Fotografia — conheça os ensaios do estúdio" fetchPriority="high" width="1170" height="1560" /></picture>
        <span className="hero-location">Nova Lima · Minas Gerais</span>
      </section>
      <section className="introduction"><span className="eyebrow">O tempo passa. O amor permanece.</span><h2>Momentos passam.<br /><em>As fotografias ficam.</em></h2><p>Cada fase da vida carrega histórias que merecem ser lembradas. Meu propósito é transformar esses momentos em imagens que você vai querer guardar para sempre.</p></section>
      <section id="experiencias" className="experiences content-width"><div className="section-heading"><div><span className="eyebrow">Um portfólio feito de histórias reais</span><h2>Encontre seu momento</h2></div><p>Uma seleção especial dos trabalhos do estúdio.</p></div><div className="experience-grid">{experiences.map(item => <a className="experience-item" key={item.name} href="#portfolio" onClick={event => { event.preventDefault(); setFilter(item.name); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}><div className={`experience-photo ${item.image ? '' : 'experience-photo-empty'}`}>{item.image && <img src={item.image} alt={`Fotografia de ${item.name.toLowerCase()} por Natália Silva`} loading="lazy" />}</div><div className="experience-caption"><h3>{item.name}</h3><ArrowUpRight aria-hidden="true" /></div></a>)}</div></section>
      <section className="portfolio" id="portfolio"><div className="content-width"><div className="section-heading"><div><span className="eyebrow">31 imagens · 6 categorias</span><h2>Memórias que <em>permanecem.</em></h2></div><Button variant="text" asChild><a href="#experiencias">Voltar às experiências</a></Button></div><div className="filters" role="group" aria-label="Filtrar portfólio">{filters.map(item => <Button variant="filter" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}</div>{galleryPhotographs.length ? <div className={`editorial-grid ${filter !== 'Todos' ? 'filtered' : ''}`}>{columns.map((column, index) => <div className="gallery-column" key={index}>{column.map(photo => <figure className={`gallery-item ${photo.shape}`} key={photo.id}><div className="gallery-photo"><button type="button" className="gallery-photo-trigger" aria-label={`Ampliar ${photo.category.toLowerCase()}`} onClick={() => { setSelectedPhotograph(photo); setLightboxScale(1); }}><img src={photo.src} alt={photo.alt} loading="lazy" width={photo.width} height={photo.height} /></button></div><figcaption className="gallery-caption"><span>{photo.label}</span><span>{photo.category}</span></figcaption></figure>)}</div>)}</div> : <div className="empty-gallery"><h3>{filter} em Nova Lima</h3><p>Ainda não há fotos desta categoria no portfólio.</p><Contact label="Conhecer os ensaios" /></div>}</div></section>
      <section id="natalia" className="about content-width"><div className="about-photo"><img src={photos.studio} alt="Natália Silva, fotógrafa e proprietária do Studio Natália Silva Fotografia" loading="lazy" width="1170" height="1560" /></div><div className="about-copy"><span className="eyebrow">A fotógrafa · Nova Lima, MG</span><h2>Natália Silva<br /><em>Um olhar para a sua história.</em></h2><p>À frente do Studio Natália Silva Fotografia, em Nova Lima, Natália é especialista em eternizar momentos — da espera por um bebê aos encontros em família e às celebrações da vida.</p><div className="about-stat"><strong>Mais de 15 mil</strong><span>Histórias eternizadas ao longo de sua trajetória.</span></div><Contact label="Conversar sobre meu ensaio" /></div></section>
      <section className="studio-experience"><span className="eyebrow">Studio Natália Silva Fotografia</span><h2>Mais do que fotografar.<br /><em>Eternizar.</em></h2><p>Um espaço pensado para que cada ensaio seja vivido com leveza, carinho e atenção aos detalhes.</p></section>
      {/* Depoimentos: inserir aqui somente avaliações reais fornecidas pela cliente. */}
      <section className="instagram-section content-width"><div className="section-heading"><div><span className="eyebrow">@studionataliasilva.fotografia</span><h2>A história continua.</h2><p className="mt-3 text-xs text-muted-foreground">Mais histórias, bastidores e momentos eternizados.</p></div><Button variant="text" asChild><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" />Conhecer o Instagram<ArrowUpRight aria-hidden="true" /></a></Button></div><div className="instagram-strip">{[photos.maternity, photos.maternityPortrait, photos.events, photos.newborn].map((src,i) => <a key={src} href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Conhecer mais fotografias no Instagram"><img src={src} alt={['Ensaio gestante','Retrato gestante individual','Fotografia de evento','Ensaio newborn'][i]} loading="lazy" /></a>)}</div></section>
      <section className="final-cta"><img src={photos.maternity} alt="Casal à espera de um bebê fotografado por Natália Silva" loading="lazy" /><div className="final-content"><h2>Qual momento você<br /><em className="text-inherit">quer eternizar?</em></h2><p>Vamos transformar esse momento em uma lembrança para a vida inteira.</p><Contact label="Falar com a Natália" light /></div></section>
    </main>
    <footer><div className="footer-top"><a className="wordmark" href="#inicio"><span>Natália Silva</span><small>Studio de fotografia</small></a><div className="footer-info"><span>Studio Natália Silva Fotografia</span><span>Nova Lima - MG</span><a href={instagram} target="_blank" rel="noopener noreferrer">@studionataliasilva.fotografia</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: +55 31 99145-8058</a></div></div><div className="footer-bottom"><span>© 2026 Studio Natália Silva Fotografia</span><span>Momentos passam. As fotografias ficam.</span></div></footer>
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
              if (pinch.distance > 0 && distance > 0) {
                setLightboxScale(Math.min(4, Math.max(1, pinch.scale * (distance / pinch.distance))));
              }
            }}
            onTouchEnd={event => {
              if (event.touches.length < 2) pinchStart.current = null;
            }}
            onTouchCancel={() => { pinchStart.current = null; }}
          >
            <img
              src={selectedPhotograph.src}
              alt={selectedPhotograph.alt ?? selectedPhotograph.label}
              className="lightbox-image"
              style={{ transform: `scale(${lightboxScale})` }}
            />
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
