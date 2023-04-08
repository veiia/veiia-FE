import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Menu } from '.';

type itemstype = 'settings' | 'projectSettings';

interface MenuSettingsProps {
  type: itemstype;
}

const MenuSettings: FC<MenuSettingsProps> = ({ type = 'settings' }) => {
  const { application } = useParams();

  const items = useMemo(() => {
    switch (type) {
      case 'settings':
        return [
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
      case 'projectSettings':
        return [
          {
            label: 'General',
            key: 'projectGeneral',
            link: '/overview/project-settings/project-general-settings',
          },
          {
            label: 'Domains',
            key: 'domains',
            link: '/overview/project-settings/domains',
          },
        ];
    }
  }, [type]);
  return <Menu items={items} defaultSelectedKey={application} />;
};

export default MenuSettings;
