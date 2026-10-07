import family from '@/assets/familia.jpg.asset.json';
import babyFamily from '@/assets/familia-bebe.jpg.asset.json';
import graduation from '@/assets/formatura.jpg.asset.json';
import natalia from '@/assets/natalia.jpg.asset.json';
import feminine from '@/assets/feminino.jpg.asset.json';
import portrait from '@/assets/feminino-retrato.jpg.asset.json';
import newborn from '@/assets/newborn.jpg.asset.json';

export const photos = { family: family.url, babyFamily: babyFamily.url, graduation: graduation.url, natalia: natalia.url, feminine: feminine.url, portrait: portrait.url, newborn: newborn.url };
export const whatsapp = 'https://wa.me/5531991458058?text=Ol%C3%A1%2C%20Nat%C3%A1lia!%20Gostaria%20de%20conhecer%20seus%20ensaios.';
export const instagram = 'https://www.instagram.com/studionataliasilva.fotografia/';
export const photographs = [
  { src: photos.family, category: 'Família', label: 'Onde o amor se encontra', shape: 'wide' },
  { src: photos.feminine, category: 'Feminino', label: 'A beleza de ser você', shape: 'tall' },
  { src: photos.babyFamily, category: 'Família', label: 'Uma vida inteira de amor', shape: 'tall' },
  { src: photos.graduation, category: 'Eventos', label: 'Conquistas que ficam', shape: 'tall' },
  { src: photos.portrait, category: 'Feminino', label: 'Sua essência em cada detalhe', shape: 'tall' },
  { src: photos.newborn, category: 'Newborn', label: 'Os primeiros instantes', shape: 'detail' },
];