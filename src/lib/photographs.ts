const portfolio = '/images/portfolio/clean';

export const photos = {
  heroImage: `${portfolio}/01-externos.webp`,
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

export const photographs: Photograph[] = [
  { id: 'externos', category: 'Externos', label: 'Ensaio externo', shape: 'tall', width: 432, height: 566, src: `${portfolio}/01-externos.webp`, alt: 'Ensaio externo de casal entre as árvores' },
  { id: 'festas-eventos', category: 'Festas e eventos', label: 'Festas e eventos', shape: 'wide', width: 870, height: 418, src: `${portfolio}/02-festas-eventos.webp`, alt: 'Casal dançando durante uma festa' },
  { id: 'casamento', category: 'Casamento', label: 'Casamento', shape: 'wide', width: 968, height: 908, src: `${portfolio}/03-casamento.webp`, alt: 'Noivos celebrando o casamento com familiares e convidados' },
  { id: 'batizado', category: 'Batizado', label: 'Batizado', shape: 'wide', width: 850, height: 885, src: `${portfolio}/04-batizado.webp`, alt: 'Família reunida na celebração de batizado' },
  { id: 'casamento-civil', category: 'Casamento civil', label: 'Casamento civil', shape: 'wide', width: 832, height: 492, src: `${portfolio}/05-casamento-civil.webp`, alt: 'Casal em ensaio de casamento civil' },
  { id: 'revelacao', category: 'Revelação', label: 'Revelação', shape: 'tall', width: 804, height: 948, src: `${portfolio}/06-revelacao.webp`, alt: 'Casal celebra a revelação do bebê' },
  { id: 'aniversario', category: 'Aniversário', label: 'Aniversário', shape: 'tall', width: 732, height: 805, src: `${portfolio}/07-aniversario.webp`, alt: 'Retrato de aniversário com balões e bolo' },
  { id: 'newborn', category: 'Newborn', label: 'Newborn', shape: 'wide', width: 822, height: 425, src: `${portfolio}/08-newborn.webp`, alt: 'Mãe e recém-nascido em ensaio newborn' },
  { id: 'smash-cake', category: 'Smash the cake', label: 'Smash the cake', shape: 'tall', width: 805, height: 1075, src: `${portfolio}/09-smash-cake.webp`, alt: 'Bebê em ensaio smash the cake' },
  { id: 'infantil-juvenil', category: 'Infantil e juvenil', label: 'Infantil e juvenil', shape: 'wide', width: 772, height: 875, src: `${portfolio}/10-infantil-juvenil.webp`, alt: 'Retrato de duas crianças em estúdio' },
  { id: 'mesversario', category: 'Mesversário', label: 'Mesversário', shape: 'wide', width: 860, height: 845, src: `${portfolio}/11-mesversario.webp`, alt: 'Bebê sorrindo em ensaio de mesversário' },
  { id: 'casal', category: 'Casal', label: 'Casal', shape: 'tall', width: 580, height: 1165, src: `${portfolio}/12-casal.webp`, alt: 'Retrato de casal em estúdio' },
  { id: 'familia', category: 'Família', label: 'Família', shape: 'tall', width: 620, height: 1056, src: `${portfolio}/13-familia.webp`, alt: 'Retrato de família em estúdio' },
  { id: 'masculino', category: 'Masculino', label: 'Masculino', shape: 'wide', width: 605, height: 820, src: `${portfolio}/14-masculino.webp`, alt: 'Retrato masculino em estúdio' },
  { id: 'feminino', category: 'Feminino', label: 'Feminino', shape: 'tall', width: 619, height: 870, src: `${portfolio}/15-feminino.webp`, alt: 'Retrato feminino em estúdio' },
  { id: 'formatura', category: 'Formatura', label: 'Formatura', shape: 'tall', width: 562, height: 1040, src: `${portfolio}/16-formatura.webp`, alt: 'Retrato de formatura com capelo e diploma' },
  { id: 'corporativo', category: 'Corporativo', label: 'Corporativo', shape: 'wide', width: 654, height: 990, src: `${portfolio}/17-corporativo.webp`, alt: 'Retrato profissional para perfil corporativo' },
  { id: 'gestante', category: 'Gestante', label: 'Gestante', shape: 'tall', width: 663, height: 1025, src: `${portfolio}/18-gestante.webp`, alt: 'Retrato de gestante em ensaio de maternidade' },
  { id: 'studio', category: 'Studio', label: 'Studio Natália Silva', shape: 'tall', width: 730, height: 850, src: `${portfolio}/19-studio-natalia.webp`, alt: 'Natália Silva em retrato segurando sua câmera' },
];
