import { IoChevronForward } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { MdMonetizationOn } from "react-icons/md";
import { TbBrandDatabricks } from "react-icons/tb";
import { PiMoonFill } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";
import { MdRemoveModerator } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { useRef, useEffect } from "react";

interface accProp {
  accMenuIsActive: boolean;
  setAccMenuIsActive: (accMenuIsActive: boolean) => void;
}

const AccountSidePanel = ({ accMenuIsActive, setAccMenuIsActive }: accProp) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current === null) return;

    const handleCloseContainer = (e: Event) => {
      if (containerRef.current === null) return;
      if (!containerRef.current.contains(e.target as HTMLElement)) {
        setAccMenuIsActive(false);
      }
    };

    document.body.addEventListener("click", handleCloseContainer);
  });

  return (
    <div
      ref={containerRef}
      className={`text-white w-80 py-4 absolute right-16 shadow-xl shadow-gray-800 rounded-xl bg-[rgb(53,53,53)] transition origin-top-right z-10 ${
        accMenuIsActive ? "scale-100" : "scale-0"
      }`}
    >
      <header className="px-5 flex gap-x-4">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1701083266435-a56ea052fb60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
          alt="Unsplash"
        />
        <div className="font-medium leading-tight grid">
          <h2>TNY</h2>
          <span>tnycoder45525</span>
          <a href="#" className="font-normal my-2 text-teal-400">
            View your channel
          </a>
        </div>
      </header>

      <hr className="my-2 border-gray-400" />

      <main className="scrollbar-hidden h-[78vh] bg-[#353535] overflow-y-scroll">
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <FaGoogle className="w-5 h-5" />
              <span className="tracking-tight">Google Account</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <MdOutlineSwitchAccount className="w-5 h-5" />
                <span className="tracking-tight">Switch account</span>
              </article>
              <IoChevronForward className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <PiSignOutFill className="w-5 h-5" />
                <span className="tracking-tight">Sign out</span>
              </article>
              <IoChevronForward className="w-5 h-5" />
            </a>
          </li>
        </ul>

        <hr className="my-2 border-gray-400" />

        <ul>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <SiYoutubestudio className="w-5 h-5" />
                <span className="tracking-tight">YouTube Studio</span>
              </article>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <MdMonetizationOn className="w-5 h-5" />
                <span className="tracking-tight">
                  Purchases and memberships
                </span>
              </article>
            </a>
          </li>
        </ul>

        <hr className="my-2 border-gray-400" />

        <ul>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <TbBrandDatabricks className="w-5 h-5" />
                <span className="tracking-tight">Your data in YouTube</span>
              </article>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <PiMoonFill className="w-5 h-5" />
                <span className="tracking-tight">Appearance: Device theme</span>
              </article>
              <IoChevronForward className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <IoLanguageOutline className="w-5 h-5" />
                <span className="tracking-tight">Language: English</span>
              </article>
              <IoChevronForward className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <MdRemoveModerator className="w-5 h-5" />
                <span className="tracking-tight">Restricted Mode: Off</span>
              </article>
              <IoChevronForward className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <CiLocationOn className="w-5 h-5" />
                <span className="tracking-tight">Location: Kenya</span>
              </article>
              <IoChevronForward className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
            >
              <article className="flex items-center gap-x-4">
                <FaKeyboard className="w-5 h-5" />
                <span className="tracking-tight">Keyboard shortcuts</span>
              </article>
            </a>
          </li>
        </ul>

        <hr className="my-2 border-gray-400" />

        <a
          href="#"
          className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
        >
          <article className="flex items-center gap-x-4">
            <IoSettingsOutline className="w-5 h-5" />
            <span className="tracking-tight">Settings</span>
          </article>
        </a>

        <hr className="my-2 border-gray-400" />

        <a
          href="#"
          className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
        >
          <article className="flex items-center gap-x-4">
            <IoHelpCircleOutline className="w-5 h-5" />
            <span className="tracking-tight">Help</span>
          </article>
        </a>

        <a
          href="#"
          className="flex items-center justify-between gap-x-4 py-1.5 px-5 hover:bg-white/10 transition"
        >
          <article className="flex items-center gap-x-4">
            <MdOutlineFeedback className="w-5 h-5" />
            <span className="tracking-tight">Send feedback</span>
          </article>
        </a>
      </main>
    </div>
  );
};

export default AccountSidePanel;
