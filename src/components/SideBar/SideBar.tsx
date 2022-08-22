import React, { ReactElement } from "react";
import { GiPokecog, GiTeamUpgrade, GiDiceFire } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex flex-col h-screen w-16 m-0 bg-gray-600 text-white shadow-lg">
      <IconSideBar icon={<MdHome size={32} />} text="Pokedex Review" link="" />
      <IconSideBar
        icon={<GiPokecog size={32} />}
        text="Pokedex Review"
        link="pokemon"
      />
      <IconSideBar
        icon={<GiTeamUpgrade size={32} />}
        text="Trainer Management"
        link="trainer"
      />
      <IconSideBar
        icon={<GiDiceFire size={32} />}
        text="Battle Manager"
        link="battle"
      />
    </div>
  );
}

export const IconSideBar = ({
  icon,
  text,
  link,
}: {
  icon: ReactElement<any, any>;
  text: string;
  link: string;
}) => {
  return (
    <Link to={`/${link}`}>
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </Link>
  );
};
