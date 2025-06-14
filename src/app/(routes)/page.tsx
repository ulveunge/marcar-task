import { getCars } from '@/entities/car';
import { Home } from '@/views/Home';

type Props = {
  searchParams: PageParams;
};

export default async function HomePage({ searchParams }: Props) {
  const params = await searchParams;

  const cars = await getCars({ _limit: 12, _page: 1, ...params });

  if (!cars) return null;

  return (
    <Home
      data={{
        cars,
      }}
    />
  );
}
