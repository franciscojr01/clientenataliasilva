export const photos = {
  maternity: '/images/gestante-casal.webp',
  newborn: '/images/ensaio-smash-murilo-1-ano.png',
  smash: '/images/ensaio-smash-murilo-1-ano.png',
  children: '/images/familia-com-criancas.webp',
  maternityPortrait: '/images/gestante-retrato.jpg',
  maternityGroup: '/images/gestantes-em-grupo.webp',
  natalia: '/images/retrato-feminino.jpg',
  femininePortrait: '/images/retrato-feminino.jpg',
  feminineEditorial: '/images/ensaio-feminino.webp',
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
  src?: string;
  alt?: string;
}

export const photographs: Photograph[] = [
  { id: 'gestante-1', category: 'Gestante', label: 'Foto — Gestante', shape: 'tall', width: 1440, height: 1920, src: photos.maternity, alt: 'Ensaio gestante em casal por Natália Silva' },
  { id: 'gestante-2', category: 'Gestante', label: 'Foto — Gestante', shape: 'wide', width: 1440, height: 960, src: photos.maternityPortrait, alt: 'Ensaio gestante em retrato por Natália Silva' },
  { id: 'gestante-3', category: 'Gestante', label: 'Foto — Gestante', shape: 'tall', width: 1440, height: 1800, src: photos.maternityGroup, alt: 'Ensaio de gestantes em grupo por Natália Silva' },
  { id: 'gestante-4', category: 'Gestante', label: 'Foto — Gestante', shape: 'tall', width: 1440, height: 1920 },
  { id: 'gestante-5', category: 'Gestante', label: 'Foto — Gestante', shape: 'wide', width: 1440, height: 960 },
  { id: 'gestante-6', category: 'Gestante', label: 'Foto — Gestante', shape: 'tall', width: 1440, height: 1800 },

  { id: 'newborn-1', category: 'Newborn', label: 'Foto — Newborn', shape: 'tall', width: 1440, height: 1920 },
  { id: 'newborn-2', category: 'Newborn', label: 'Foto — Newborn', shape: 'wide', width: 1440, height: 960 },
  { id: 'newborn-3', category: 'Newborn', label: 'Foto — Newborn', shape: 'tall', width: 1440, height: 1800 },
  { id: 'newborn-4', category: 'Newborn', label: 'Foto — Newborn', shape: 'tall', width: 1440, height: 1920 },
  { id: 'newborn-5', category: 'Newborn', label: 'Foto — Newborn', shape: 'wide', width: 1440, height: 960 },
  { id: 'newborn-6', category: 'Newborn', label: 'Foto — Newborn', shape: 'tall', width: 1440, height: 1800 },

  { id: 'familia-1', category: 'Família', label: 'Foto — Família', shape: 'tall', width: 1440, height: 1920, src: photos.children, alt: 'Ensaio de família por Natália Silva' },
  { id: 'familia-2', category: 'Família', label: 'Foto — Família', shape: 'wide', width: 1440, height: 960 },
  { id: 'familia-3', category: 'Família', label: 'Foto — Família', shape: 'tall', width: 1440, height: 1800 },
  { id: 'familia-4', category: 'Família', label: 'Foto — Família', shape: 'tall', width: 1440, height: 1920 },
  { id: 'familia-5', category: 'Família', label: 'Foto — Família', shape: 'wide', width: 1440, height: 960 },
  { id: 'familia-6', category: 'Família', label: 'Foto — Família', shape: 'tall', width: 1440, height: 1800 },

  { id: 'feminino-1', category: 'Feminino', label: 'Foto — Feminino', shape: 'tall', width: 1440, height: 1920, src: photos.feminineEditorial, alt: 'Ensaio feminino por Natália Silva' },
  { id: 'feminino-2', category: 'Feminino', label: 'Foto — Feminino', shape: 'wide', width: 1440, height: 960 },
  { id: 'feminino-3', category: 'Feminino', label: 'Foto — Feminino', shape: 'tall', width: 1440, height: 1800 },
  { id: 'feminino-4', category: 'Feminino', label: 'Foto — Feminino', shape: 'tall', width: 1440, height: 1920 },
  { id: 'feminino-5', category: 'Feminino', label: 'Foto — Feminino', shape: 'wide', width: 1440, height: 960 },
  { id: 'feminino-6', category: 'Feminino', label: 'Foto — Feminino', shape: 'tall', width: 1440, height: 1800 },

  { id: 'smash-1', category: 'Smash', label: 'Foto — Smash', shape: 'tall', width: 1440, height: 1920, src: photos.smash, alt: 'Ensaio smash de aniversário por Natália Silva' },
  { id: 'smash-2', category: 'Smash', label: 'Foto — Smash', shape: 'wide', width: 1440, height: 960 },
  { id: 'smash-3', category: 'Smash', label: 'Foto — Smash', shape: 'tall', width: 1440, height: 1800 },
  { id: 'smash-4', category: 'Smash', label: 'Foto — Smash', shape: 'tall', width: 1440, height: 1920 },
  { id: 'smash-5', category: 'Smash', label: 'Foto — Smash', shape: 'wide', width: 1440, height: 960 },
  { id: 'smash-6', category: 'Smash', label: 'Foto — Smash', shape: 'tall', width: 1440, height: 1800 },

  { id: 'eventos-1', category: 'Eventos', label: 'Foto — Eventos', shape: 'tall', width: 1440, height: 1920 },
  { id: 'eventos-2', category: 'Eventos', label: 'Foto — Eventos', shape: 'wide', width: 1440, height: 960 },
  { id: 'eventos-3', category: 'Eventos', label: 'Foto — Eventos', shape: 'tall', width: 1440, height: 1800 },
  { id: 'eventos-4', category: 'Eventos', label: 'Foto — Eventos', shape: 'tall', width: 1440, height: 1920 },
  { id: 'eventos-5', category: 'Eventos', label: 'Foto — Eventos', shape: 'wide', width: 1440, height: 960 },
  { id: 'eventos-6', category: 'Eventos', label: 'Foto — Eventos', shape: 'tall', width: 1440, height: 1800 },
];
