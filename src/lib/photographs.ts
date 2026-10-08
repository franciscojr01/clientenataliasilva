const portfolio = '/images/portfolio';

export const photos = {
  maternity: `${portfolio}/client/gestante-5.webp`,
  newborn: `${portfolio}/client/newborn-1.webp`,
  smash: `${portfolio}/client/smash-1.webp`,
  events: `${portfolio}/client/eventos-1.webp`,
  feminine: `${portfolio}/client/feminino-1.webp`,
  family: `${portfolio}/client/familia-1.webp`,
  maternityPortrait: `${portfolio}/client/gestante-2.webp`,
  maternityGroup: `${portfolio}/client/gestante-1.webp`,
  studio: `${portfolio}/client/natalia-studio.webp`,
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
  { id: 'eventos-1', category: 'Eventos', label: 'Casamento', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/eventos-1.webp`, alt: 'Colagem de momentos de um casamento ao ar livre' },
  { id: 'eventos-2', category: 'Eventos', label: 'Festa', shape: 'tall', width: 1170, height: 1559, src: `${portfolio}/client/eventos-2.webp`, alt: 'Aniversariante com personagens em uma festa' },
  { id: 'eventos-3', category: 'Eventos', label: 'Aniversário', shape: 'wide', width: 1170, height: 898, src: `${portfolio}/client/eventos-3.webp`, alt: 'Família reunida em uma festa infantil' },
  { id: 'eventos-4', category: 'Eventos', label: 'Festa infantil', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/eventos-4.webp`, alt: 'Criança em festa infantil com decoração de balões' },
  { id: 'eventos-6', category: 'Eventos', label: 'Aniversário', shape: 'tall', width: 1170, height: 1560, src: `${portfolio}/client/eventos-6.webp`, alt: 'Retrato de aniversariante com vestido preto e faíscas' },
  { id: 'familia-1', category: 'Família', label: 'Ensaio em família', shape: 'tall', width: 1440, height: 1800, src: `${portfolio}/client/familia-1.webp`, alt: 'Retrato de uma família com mãe, pai e filha' },
  { id: 'familia-2', category: 'Família', label: 'Ensaio em família', shape: 'tall', width: 1440, height: 1800, src: `${portfolio}/client/familia-2.webp`, alt: 'Três gerações de mulheres em um retrato familiar' },
  { id: 'familia-3', category: 'Família', label: 'Ensaio em família', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/familia-3.webp`, alt: 'Pais com os filhos em um retrato de família' },
  { id: 'familia-4', category: 'Família', label: 'Ensaio em família', shape: 'tall', width: 1440, height: 1654, src: `${portfolio}/client/familia-4.webp`, alt: 'Mãe, pai e filho em um momento afetuoso' },
  { id: 'familia-5', category: 'Família', label: 'Ensaio em família', shape: 'tall', width: 1440, height: 1504, src: `${portfolio}/client/familia-5.webp`, alt: 'Família reunida em um retrato divertido' },
  { id: 'feminino-1', category: 'Feminino', label: 'Retrato feminino', shape: 'tall', width: 1179, height: 1575, src: `${portfolio}/client/feminino-1.webp`, alt: 'Retrato feminino com vestido bordado e coroa' },
  { id: 'feminino-2', category: 'Feminino', label: 'Retrato feminino', shape: 'tall', width: 1179, height: 1572, src: `${portfolio}/client/feminino-2.webp`, alt: 'Retrato próximo com coroa e vestido bordado' },
  { id: 'feminino-3', category: 'Feminino', label: 'Retrato feminino', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/feminino-3.webp`, alt: 'Retrato feminino com roupa preta e cabelos longos' },
  { id: 'feminino-4', category: 'Feminino', label: 'Retrato feminino', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/feminino-4.webp`, alt: 'Retrato feminino sentada com buquê de flores' },
  { id: 'feminino-5', category: 'Feminino', label: 'Retrato feminino', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/feminino-5.webp`, alt: 'Retrato feminino com girassóis' },
  { id: 'feminino-6', category: 'Feminino', label: 'Retrato feminino', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/feminino-6.webp`, alt: 'Retrato feminino com blazer branco' },
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
  { id: 'smash-1', category: 'Smash', label: 'Smash the cake', shape: 'tall', width: 1440, height: 1800, src: `${portfolio}/client/smash-1.webp`, alt: 'Bebê em ensaio smash the cake com cenário amarelo' },
  { id: 'smash-2', category: 'Smash', label: 'Smash the cake', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/smash-2.webp`, alt: 'Bebê com bolo e balões prateados em ensaio smash the cake' },
  { id: 'smash-3', category: 'Smash', label: 'Smash the cake', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/smash-3.webp`, alt: 'Bebê sentado com bolo e balões prateados' },
  { id: 'smash-4', category: 'Smash', label: 'Smash the cake', shape: 'tall', width: 1385, height: 1800, src: `${portfolio}/client/smash-4.webp`, alt: 'Bebê em ensaio smash the cake com roupa rosa' },
  { id: 'smash-5', category: 'Smash', label: 'Smash the cake', shape: 'tall', width: 1350, height: 1800, src: `${portfolio}/client/smash-5.webp`, alt: 'Bebê com bolo em cenário colorido de aniversário' },
];
