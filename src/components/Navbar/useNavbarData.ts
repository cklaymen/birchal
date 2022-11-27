import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import useFilms from '../../hooks/useFilms';
import usePeople from '../../hooks/usePeople';
import usePlanets from '../../hooks/usePlanets';
import routePaths from '../../routePaths';

interface Item {
  path: string;
  title: string;
  count: number | string;
  selected: boolean;
}

const navbarItems = [
  { path: routePaths.films, title: 'Films' },
  { path: routePaths.people, title: 'People' },
  { path: routePaths.planets, title: 'Planets' },
];

function getHighlightLineData(items: Item[]) {
  let chars = 0;
  let i = 0;
  while (i < items.length && !items[i].selected) {
    chars += navbarItems[i].title.length + 2;
    i++;
  }
  if (i >= navbarItems.length) {
    return { left: '0', width: '0' };
  }
  return {
    left: `calc(${chars}em + ${i * 16}px)`,
    width: `${navbarItems[i].title.length + 2}em`,
  };
}

const useNavbarData = () => {
  const location = useLocation();
  const films = useFilms();
  const people = usePeople();
  const planets = usePlanets();
  const swDatas = useMemo(
    () => [films, people, planets],
    [films, people, planets]
  );
  const items = useMemo(
    () =>
      navbarItems.map<Item>((item, i) => ({
        ...item,
        count: swDatas[i].isLoading ? '...' : swDatas[i].data?.count || '--',
        selected: !!matchPath(item.path, location.pathname),
      })),
    [swDatas, location.pathname]
  );
  const highlightLine = useMemo(() => getHighlightLineData(items), [items]);

  return { items, highlightLine };
};

export default useNavbarData;
