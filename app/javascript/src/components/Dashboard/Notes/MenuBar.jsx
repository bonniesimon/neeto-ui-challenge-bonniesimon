import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";

import {
  NOTES_MENUBAR_SEGMENTS,
  NOTES_MENUBAR_TAGS,
  NOTES_MENUBAR_OPTIONS,
} from "./constants";

// TODO: Rename to Menu since the default
// exported function and filename should have same name
const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <NeetoUIMenuBar showMenu={showMenu} title="Notes">
        {NOTES_MENUBAR_OPTIONS.map(option => (
          <NeetoUIMenuBar.Block
            active={option.active}
            count={option.count}
            key={option.title}
            label={option.title}
          />
        ))}
        <NeetoUIMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
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
        </NeetoUIMenuBar.SubTitle>
        <NeetoUIMenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {NOTES_MENUBAR_SEGMENTS.map(segment => (
          <NeetoUIMenuBar.Block
            count={segment.count}
            key={segment.title}
            label={segment.title}
          />
        ))}
        <NeetoUIMenuBar.SubTitle
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
        </NeetoUIMenuBar.SubTitle>
        {NOTES_MENUBAR_TAGS.map(tag => (
          <NeetoUIMenuBar.Block
            count={tag.count}
            key={tag.title}
            label={tag.title}
          />
        ))}
      </NeetoUIMenuBar>
    </div>
  );
};

export default Menu;
