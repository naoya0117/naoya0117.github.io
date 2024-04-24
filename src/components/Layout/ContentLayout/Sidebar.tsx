import { Link } from 'react-scroll';

type SidebarProps = {
    items: {
        id: string;
        name: string;
    }[];
};

export const Sidebar = ( { items }: SidebarProps ) => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      {items.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer p-4 hover:bg-gray-200"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
