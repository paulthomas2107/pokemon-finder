import { PokemonCard } from '@/components/pokemon-card';
import { PokemonGrid } from '@/components/pokemon-grid';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <PokemonGrid />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
}
