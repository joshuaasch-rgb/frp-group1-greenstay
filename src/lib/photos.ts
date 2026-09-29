import type { ImageMetadata } from 'astro';
import photos from '../data/photos.json';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

export type PhotoKey = keyof typeof photos;

export interface Photo {
  src: ImageMetadata;
  alt: string;
  author: string;
  url: string;
}

/** Look up a photo by its key in src/data/photos.json. */
export function getPhoto(key: string): Photo {
  const entry = (photos as Record<string, { file: string; alt: string; author: string; url: string }>)[key];
  if (!entry) throw new Error(`Unknown photo "${key}" – add it to src/data/photos.json`);
  const mod = files[`../assets/photos/${entry.file}`];
  if (!mod) throw new Error(`Photo file "${entry.file}" not found in src/assets/photos/`);
  return { src: mod.default, alt: entry.alt, author: entry.author, url: entry.url };
}

export const photoCredits = Object.values(photos).map(({ author, url }) => ({ author, url }));
