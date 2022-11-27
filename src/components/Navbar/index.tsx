import { Link } from 'react-router-dom';
import {
  Nav,
  TabBadge,
  TabHighlightLine,
  TabItem,
  Tabs,
} from '../Navbar/Navbar.styled';
import useNavbarData from '../Navbar/useNavbarData';

const Navbar: React.FC = () => {
  const { items, highlightLine } = useNavbarData();

  return (
    <Nav>
      <Tabs>
        {items.map(({ path, title, count, selected }) => (
          <TabItem
            as={Link}
            key={path}
            to={path}
            css={{ width: `${title.length + 2}em` }}
            selected={selected}
          >
            {title} <TabBadge>{count}</TabBadge>
          </TabItem>
        ))}
        <TabHighlightLine
          css={{
            left: highlightLine.left,
            width: highlightLine.width,
          }}
        />
      </Tabs>
    </Nav>
  );
};

export default Navbar;
