import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { photos, photographs, whatsapp, instagram } from '@/lib/photographs';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Natália Silva | Fotógrafa em Nova Lima — Gestante, Newborn e Família' },
    { name: 'description', content: 'Studio Natália Silva Fotografia em Nova Lima, MG. Mais de 15 mil histórias eternizadas. Conheça ensaios gestante, newborn, família e feminino.' },
    { property: 'og:title', content: 'Natália Silva — Histórias eternizadas em fotografias' },
    { property: 'og:description', content: 'Fotógrafa em Nova Lima, MG. Conheça o trabalho do Studio Natália Silva Fotografia e eternize a sua história.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});
const filters = ['Todos', 'Gestante', 'Newborn', 'Smash', 'Família', 'Feminino'];
const experiences = [
  { name: 'Gestante', image: photos.maternity },
  { name: 'Newborn', image: photos.newborn },
  { name: 'Família', image: photos.children },
  { name: 'Feminino', image: photos.feminineEditorial },
];
function Contact({ label = 'Falar com a Natália', light = false }: { label?: string; light?: boolean }) {
  return <Button variant={light ? 'light' : 'editorial'} asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight aria-hidden="true" /></a></Button>;
}
function Index() {
  const [filter, setFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = filter === 'Todos' ? photographs : photographs.filter(photo => photo.category === filter);
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
        <picture><img src={photos.newborn} alt="Murilo em ensaio infantil com tema de fazendinha para celebrar seu primeiro ano" fetchPriority="high" width="657" height="918" /></picture>
        <div className="hero-content"><span className="eyebrow">GESTANTE • NEWBORN • FAMÍLIA • FEMININO</span><h1>Natália Silva</h1><p className="hero-tagline">Fotógrafa especialista em eternizar momentos</p><p className="hero-stat">Mais de 15 mil histórias eternizadas.</p><div className="hero-actions"><Button variant="editorial" asChild><a href="#portfolio">Conhecer o trabalho<ArrowRight aria-hidden="true" /></a></Button><Button variant="text" asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer">Falar com a Natália<ArrowUpRight aria-hidden="true" /></a></Button></div></div>
        <span className="hero-location">Nova Lima · Minas Gerais</span>
      </section>
      <section className="introduction"><span className="eyebrow">O tempo passa. O amor permanece.</span><h2>Momentos passam.<br /><em>As fotografias ficam.</em></h2><p>Cada fase da vida carrega histórias que merecem ser lembradas. Meu propósito é transformar esses momentos em imagens que você vai querer guardar para sempre.</p></section>
      <section id="experiencias" className="experiences content-width"><div className="section-heading"><div><span className="eyebrow">Para cada capítulo da sua vida</span><h2>Experiências fotográficas</h2></div><p>Diferentes momentos.<br />O mesmo cuidado em eternizar.</p></div><div className="experience-grid">{experiences.map(item => <a className="experience-item" key={item.name} href="#portfolio" onClick={() => setFilter(item.name)}><div className="experience-photo"><img src={item.image} alt={`Fotografia de ${item.name.toLowerCase()} por Natália Silva`} loading="lazy" /></div><div className="experience-caption"><h3>{item.name}</h3><ArrowUpRight aria-hidden="true" /></div></a>)}</div><div className="other-experiences"><p>Outros capítulos para eternizar</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">Smash ↗</a></div></section>
      <section className="portfolio" id="portfolio"><div className="content-width"><div className="section-heading"><div><span className="eyebrow">Um olhar. Muitas histórias.</span><h2>Memórias que <em>permanecem.</em></h2></div><p>Um pouco das histórias que passaram pelas minhas lentes.</p></div><div className="filters" role="group" aria-label="Filtrar portfólio">{filters.map(item => <Button variant="filter" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</Button>)}</div>{visible.length ? <div className={`editorial-grid ${filter !== 'Todos' ? 'filtered' : ''}`}>{visible.map(photo => <figure className={`gallery-item ${photo.shape}`} key={photo.src}><div className="gallery-photo"><img src={photo.src} alt={`${photo.label} — fotografia de ${photo.category.toLowerCase()} por Natália Silva`} loading="lazy" /></div><figcaption className="gallery-caption"><span>{photo.label}</span><span>{photo.category}</span></figcaption></figure>)}</div> : <div className="empty-gallery"><h3>Smash em Nova Lima</h3><p>Converse com a Natália para conhecer as fotografias e os detalhes deste ensaio.</p><Contact label="Conhecer os ensaios" /></div>}</div></section>
      <section id="natalia" className="about content-width"><div className="about-photo"><img src={photos.natalia} alt="Natália Silva, fotógrafa e proprietária do Studio Natália Silva Fotografia" loading="lazy" width="768" height="1024" /><span className="about-signature">Natália Silva</span></div><div className="about-copy"><span className="eyebrow">A fotógrafa · Nova Lima, MG</span><h2>Natália Silva<br /><em>Um olhar para a sua história.</em></h2><p>À frente do Studio Natália Silva Fotografia, em Nova Lima, Natália é especialista em eternizar momentos — da espera por um bebê aos encontros em família e às celebrações da vida.</p><p>Seu trabalho reúne diferentes fases e histórias, sempre com a fotografia como uma lembrança do que merece permanecer.</p><div className="about-stat"><strong>Mais de 15 mil</strong><span>Histórias eternizadas ao longo de sua trajetória.</span></div><Contact label="Conversar sobre meu ensaio" /></div></section>
      <section className="studio-experience"><span className="eyebrow">Studio Natália Silva Fotografia</span><h2>Mais do que fotografar.<br /><em>Eternizar.</em></h2><p>Um espaço pensado para que cada ensaio seja vivido com leveza, carinho e atenção aos detalhes.</p></section>
      {/* Depoimentos: inserir aqui somente avaliações reais fornecidas pela cliente. */}
      <section className="instagram-section content-width"><div className="section-heading"><div><span className="eyebrow">@studionataliasilva.fotografia</span><h2>A história continua.</h2><p className="mt-3 text-xs text-muted-foreground">Mais histórias, bastidores e momentos eternizados.</p></div><Button variant="text" asChild><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" />Conhecer o Instagram<ArrowUpRight aria-hidden="true" /></a></Button></div><div className="instagram-strip">{[photos.maternity, photos.maternityPortrait, photos.feminineEditorial, photos.children].map((src,i) => <a key={src} href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Conhecer mais fotografias no Instagram"><img src={src} alt={['Ensaio gestante em casal','Ensaio gestante individual','Ensaio feminino','Ensaio em família'][i]} loading="lazy" /></a>)}</div></section>
      <section className="final-cta"><img src={photos.maternity} alt="Casal à espera de um bebê fotografado por Natália Silva" loading="lazy" /><div className="final-content"><h2>Qual momento você<br /><em className="text-inherit">quer eternizar?</em></h2><p>Vamos transformar esse momento em uma lembrança para a vida inteira.</p><Contact label="Falar com a Natália" light /></div></section>
    </main>
    <footer><div className="footer-top"><a className="wordmark" href="#inicio"><span>Natália Silva</span><small>Studio de fotografia</small></a><div className="footer-info"><span>Studio Natália Silva Fotografia</span><span>Nova Lima - MG</span><a href={instagram} target="_blank" rel="noopener noreferrer">@studionataliasilva.fotografia</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: +55 31 99145-8058</a></div></div><div className="footer-bottom"><span>© 2026 Studio Natália Silva Fotografia</span><span>Momentos passam. As fotografias ficam.</span></div></footer>
    <div className="floating-contact"><Button variant="floating" size="icon" asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Natália pelo WhatsApp" title="Falar com a Natália pelo WhatsApp"><MessageCircle aria-hidden="true" /></a></Button></div>
  </>;
}
