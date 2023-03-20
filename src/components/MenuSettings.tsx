import { useParams } from 'react-router-dom';
import { Menu } from '.';

const MenuSettings = () => {
  const { application } = useParams();

  const items = [
    {
      label: 'General',
      key: 'general',
      link: '/settings/general',
    },
    {
      label: 'General2',
      key: 'general2',
      link: '/settings/general2',
    },
  ];

  return <Menu items={items} defaultSelectedKey={application} />;
};

export default MenuSettings;
