import maternityAsset from '@/assets/gestante-casal.jpg.asset.json';
import newbornAsset from '@/assets/newborn-pais.jpg.asset.json';
import childrenAsset from '@/assets/infantil-carro.jpg.asset.json';
import brideAsset from '@/assets/noiva-retrato.jpg.asset.json';
import celebrationAsset from '@/assets/evento-familia.jpg.asset.json';
import veilAsset from '@/assets/noiva-veu.jpg.asset.json';
import nataliaAsset from '@/assets/natalia.jpg.asset.json';
import feminineAsset from '@/assets/feminino.jpg.asset.json';

export const photos = {
  maternity: maternityAsset.url,
  newborn: newbornAsset.url,
  children: childrenAsset.url,
  bride: brideAsset.url,
  events: celebrationAsset.url,
  veil: veilAsset.url,
  natalia: nataliaAsset.url,
  feminine: feminineAsset.url,
};

export const whatsapp = 'https://wa.me/5531991458058?text=Ol%C3%A1%2C%20Nat%C3%A1lia!%20Gostaria%20de%20conhecer%20seus%20ensaios.';
export const instagram = 'https://www.instagram.com/studionataliasilva.fotografia/';

export const photographs = [
  { src: photos.newborn, category: 'Newborn', label: 'O começo de uma vida inteira de amor', shape: 'wide' },
  { src: photos.maternity, category: 'Gestante', label: 'A espera de um novo capítulo', shape: 'tall' },
  { src: photos.bride, category: 'Eventos', label: 'A delicadeza de um dia especial', shape: 'tall' },
  { src: photos.veil, category: 'Feminino', label: 'A beleza em cada fase da vida', shape: 'tall' },
  { src: photos.children, category: 'Família', label: 'Pequenos momentos, grandes memórias', shape: 'wide' },
  { src: photos.events, category: 'Eventos', label: 'Celebrar ao lado de quem se ama', shape: 'wide' },
];
