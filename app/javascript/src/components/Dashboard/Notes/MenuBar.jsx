import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { NOTES_MENUBAR_SEGMENTS, NOTES_MENUBAR_TAGS } from "./constants";

const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Notes">
        <MenuBar.Block active count={13} label="All" />
        <MenuBar.Block count={2} label="Users" />
        <MenuBar.Block count={7} label="Leads" />
        <MenuBar.Block count={4} label="Visitors" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {NOTES_MENUBAR_SEGMENTS.map(segment => (
          <MenuBar.Block
            count={segment.count}
            key={segment.title}
            label={segment.title}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        {NOTES_MENUBAR_TAGS.map(tag => (
          <MenuBar.Block count={tag.count} key={tag.title} label={tag.title} />
        ))}
      </MenuBar>
    </div>
  );
};

export default Menu;
