import { CogIcon, CloudUploadIcon,PencilAltIcon,FireIcon,PresentationChartBarIcon,ShoppingCartIcon,BellIcon,InformationCircleIcon} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col-reverse sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-5">
        <HeaderItem title="Settings" Icon={CogIcon} />
        <HeaderItem title="MasterData" Icon={PencilAltIcon} />
        <HeaderItem title="Production" Icon={FireIcon} />
        <HeaderItem title="Transactions" Icon={CloudUploadIcon} />
        <HeaderItem title="Sales" Icon={ShoppingCartIcon} />
        <HeaderItem title="Reports" Icon={PresentationChartBarIcon} />
        <HeaderItem title="Notificatins" Icon={BellIcon} />
        <HeaderItem title="Support" Icon={InformationCircleIcon} />
      </div>

      <Image
      className="object-contain"
        src="/android-chrome-192x192.png"
        alt="logo"
        width={300}
        height={100}
      />
    </header>
  );
}

export default Header;
