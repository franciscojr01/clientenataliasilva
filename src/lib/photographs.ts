const portfolio = '/images/portfolio';

export const photos = {
  maternity: `${portfolio}/client/gestante-5.webp`,
  newborn: `${portfolio}/client/newborn-1.webp`,
  events: `${portfolio}/client/eventos-1.webp`,
  maternityPortrait: `${portfolio}/client/gestante-2.webp`,
  maternityGroup: `${portfolio}/client/gestante-1.webp`,
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
  { id: 'eventos-1', category: 'Festas e eventos', label: 'Casamento', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/eventos-1.webp`, alt: 'Colagem de momentos de um casamento ao ar livre' },
  { id: 'eventos-2', category: 'Festas e eventos', label: 'Festa', shape: 'tall', width: 1170, height: 1559, src: `${portfolio}/client/eventos-2.webp`, alt: 'Aniversariante com personagens em uma festa' },
  { id: 'eventos-3', category: 'Festas e eventos', label: 'Aniversário', shape: 'wide', width: 1170, height: 898, src: `${portfolio}/client/eventos-3.webp`, alt: 'Família reunida em uma festa infantil' },
  { id: 'eventos-4', category: 'Festas e eventos', label: 'Festa infantil', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/eventos-4.webp`, alt: 'Criança em festa infantil com decoração de balões' },
  { id: 'eventos-6', category: 'Festas e eventos', label: 'Aniversário', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/eventos-6.webp`, alt: 'Retrato de aniversariante com vestido preto e faíscas' },
  { id: 'gestante-1', category: 'Gestante', label: 'Ensaio gestante', shape: 'wide', width: 1170, height: 780, src: `${portfolio}/client/gestante-1.webp`, alt: 'Três gestantes em ensaio com vestidos vermelhos' },
  { id: 'gestante-2', category: 'Gestante', label: 'Ensaio gestante', shape: 'tall', width: 611, height: 846, src: `${portfolio}/client/gestante-2.webp`, alt: 'Gestante em vestido branco em fundo cinza' },
  { id: 'gestante-3', category: 'Gestante', label: 'Ensaio gestante', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/gestante-3.webp`, alt: 'Retrato dramático de gestante com roupa preta' },
  { id: 'gestante-5', category: 'Gestante', label: 'Ensaio gestante', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/gestante-5.webp`, alt: 'Gestante sentada com buquê de flores' },
  { id: 'gestante-6', category: 'Gestante', label: 'Ensaio gestante', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/gestante-6.webp`, alt: 'Gestante em pose reclinada em fundo escuro' },
  { id: 'newborn-1', category: 'Newborn', label: 'Newborn', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/newborn-1.webp`, alt: 'Recém-nascida em cesto com flores em fundo rosa' },
  { id: 'newborn-2', category: 'Newborn', label: 'Newborn', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/newborn-2.webp`, alt: 'Pais beijam a filha recém-nascida em ensaio de família' },
  { id: 'newborn-4', category: 'Newborn', label: 'Newborn', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/newborn-4.webp`, alt: 'Retrato próximo dos pais com a bebê recém-nascida' },
  { id: 'newborn-5', category: 'Newborn', label: 'Newborn', shape: 'square', width: 1170, height: 1170, src: `${portfolio}/client/newborn-5.webp`, alt: 'Recém-nascido em cenário azul com bichinhos de pelúcia' },
  { id: 'newborn-6', category: 'Newborn', label: 'Newborn', shape: 'square', width: 1170, height: 1170, src: `${portfolio}/client/newborn-6.webp`, alt: 'Close de recém-nascido em manta azul com pelúcias' },
];
