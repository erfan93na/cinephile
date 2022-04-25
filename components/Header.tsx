import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
export const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className="flex h-auto flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex  justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItem Icon={HomeIcon} title="COLLECTIONS" />
        <HeaderItem Icon={CollectionIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <Image
        className="object-contain"
        src="/hulu-white.png"
        alt=""
        width={200}
        height={100}
      />
    </header>
  );
};
