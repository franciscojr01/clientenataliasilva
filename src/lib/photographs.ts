const portfolio = '/images/portfolio';

export const photos = {
  maternity: `${portfolio}/18-gestante.webp`,
  newborn: `${portfolio}/08-newborn.webp`,
  smash: `${portfolio}/09-smash-cake.webp`,
  children: `${portfolio}/13-familia.webp`,
  maternityPortrait: `${portfolio}/18-gestante.webp`,
  maternityGroup: `${portfolio}/12-casal.webp`,
  natalia: `${portfolio}/19-studio-natalia.webp`,
  femininePortrait: `${portfolio}/15-feminino.webp`,
  feminineEditorial: `${portfolio}/15-feminino.webp`,
  studio: `${portfolio}/19-studio-natalia.webp`,
};

export const whatsapp = 'https://wa.me/5531991458058?text=Ol%C3%A1%2C%20Nat%C3%A1lia!%20Gostaria%20de%20conhecer%20seus%20ensaios.';
export const instagram = 'https://www.instagram.com/studionataliasilva.fotografia/';

export interface Photograph {
  id: string;
  category: string;
  label: string;
  shape: string;
  width: number;
  height: number;
  src: string;
  alt: string;
}

const studioPortrait = { width: 1170, height: 1560 };

export const photographs: Photograph[] = [
  { id: 'externos', category: 'Externos', label: 'Ensaio externo', shape: 'tall', ...studioPortrait, src: `${portfolio}/01-externos.webp`, alt: 'Ensaio externo de casal, gestante e retrato feminino' },
  { id: 'festas-eventos', category: 'Festas e eventos', label: 'Festas e eventos', shape: 'tall', ...studioPortrait, src: `${portfolio}/02-festas-eventos.webp`, alt: 'Cobertura fotográfica de festa de debutante' },
  { id: 'casamento', category: 'Casamento', label: 'Casamento', shape: 'tall', ...studioPortrait, src: `${portfolio}/03-casamento.webp`, alt: 'Fotografia de casamento durante a cerimônia' },
  { id: 'batizado', category: 'Batizado', label: 'Batizado', shape: 'tall', ...studioPortrait, src: `${portfolio}/04-batizado.webp`, alt: 'Registro de batizado em família' },
  { id: 'casamento-civil', category: 'Casamento civil', label: 'Casamento civil', shape: 'tall', ...studioPortrait, src: `${portfolio}/05-casamento-civil.webp`, alt: 'Ensaio de casamento civil' },
  { id: 'revelacao', category: 'Revelação', label: 'Revelação', shape: 'tall', ...studioPortrait, src: `${portfolio}/06-revelacao.webp`, alt: 'Ensaio de revelação do bebê' },
  { id: 'aniversario', category: 'Aniversário', label: 'Aniversário', shape: 'tall', ...studioPortrait, src: `${portfolio}/07-aniversario.webp`, alt: 'Ensaio de aniversário em estúdio' },
  { id: 'newborn', category: 'Newborn', label: 'Newborn', shape: 'tall', ...studioPortrait, src: `${portfolio}/08-newborn.webp`, alt: 'Ensaio newborn com recém-nascido' },
  { id: 'smash-cake', category: 'Smash the cake', label: 'Smash the cake', shape: 'tall', ...studioPortrait, src: `${portfolio}/09-smash-cake.webp`, alt: 'Ensaio smash the cake de bebê' },
  { id: 'infantil-juvenil', category: 'Infantil e juvenil', label: 'Infantil e juvenil', shape: 'tall', ...studioPortrait, src: `${portfolio}/10-infantil-juvenil.webp`, alt: 'Retrato infantil e juvenil em estúdio' },
  { id: 'mesversario', category: 'Mesversário', label: 'Mesversário', shape: 'tall', ...studioPortrait, src: `${portfolio}/11-mesversario.webp`, alt: 'Ensaio de mesversário de bebê' },
  { id: 'casal', category: 'Casal', label: 'Casal', shape: 'tall', ...studioPortrait, src: `${portfolio}/12-casal.webp`, alt: 'Ensaio fotográfico de casal' },
  { id: 'familia', category: 'Família', label: 'Família', shape: 'tall', ...studioPortrait, src: `${portfolio}/13-familia.webp`, alt: 'Ensaio fotográfico em família' },
  { id: 'masculino', category: 'Masculino', label: 'Masculino', shape: 'tall', ...studioPortrait, src: `${portfolio}/14-masculino.webp`, alt: 'Retrato masculino em estúdio' },
  { id: 'feminino', category: 'Feminino', label: 'Feminino', shape: 'tall', ...studioPortrait, src: `${portfolio}/15-feminino.webp`, alt: 'Ensaio feminino em estúdio' },
  { id: 'formatura', category: 'Formatura', label: 'Formatura', shape: 'tall', ...studioPortrait, src: `${portfolio}/16-formatura.webp`, alt: 'Retrato de formatura' },
  { id: 'corporativo', category: 'Corporativo', label: 'Corporativo', shape: 'tall', ...studioPortrait, src: `${portfolio}/17-corporativo.webp`, alt: 'Retrato profissional corporativo' },
  { id: 'gestante', category: 'Gestante', label: 'Gestante', shape: 'tall', ...studioPortrait, src: `${portfolio}/18-gestante.webp`, alt: 'Ensaio fotográfico gestante' },
  { id: 'studio', category: 'Studio', label: 'Studio Natália Silva', shape: 'tall', ...studioPortrait, src: `${portfolio}/19-studio-natalia.webp`, alt: 'Natália Silva, fotógrafa do estúdio' },
];
