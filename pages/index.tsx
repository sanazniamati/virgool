// component
import Logo from "../components/icons/Logo";
import Search from "../components/Search";

// library
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="main_container" className="w-screen flex flex-col">
        <div id="topbar" className="w-full  py-4 text-base flex justify-center">
          <div className="flex justify-between  h-full w-[970px] max-w-[970px]">
            <div id="logo_block" className="flex items-center py-2.5">
              <Logo />
              <div className="pr-[5px] pl-[10px] py-[5px] mr-[8px] text-[13.33px] text-[#107abe]">
                ویرگول چیست ؟
              </div>
            </div>
            <div
              id="user_option"
              className="flex items-center py-[10px] gap-[15px] "
            >
              <div id="search_icon">
                <Search />
              </div>
              <div className="flex gap-[15px] p-[5px]   ">
                <div className="pl-[10px] text-[#107abe] text-[13.3px]">
                  ورود
                </div>
                <button className="w-[90px] h-[30px] py-[5px] px-[25px] bg-blue-light rounded-[4px] text-[13.3px] text-[#fff]">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center bg-blue-light">
          <div className="h-full w-[1000px] max-w-[1000px] flex items-center justify-between">
            <div
              id="navbar"
              className="w-full h-[55.6px] bg-blue-light text-[#fff]  flex  items-center px-[12px]"
            >
              <ul className="flex    gap-[15px] list-none">
                {listOfNavButtons.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <a className="text-[12.8px] text-white text-opacity-[84%]">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="content" className="w-full bg-green-400">
          3
        </div>
      </div>
    </>
  );
}
const listOfNavButtons = [
  { id: 0, title: "جدیدترین پست‌ها", link: "/" },
  { id: 1, title: "پست‌های دوستان", link: "/feeds" },
  { id: 2, title: "استارتاپ", link: "/tag/startup" },
  { id: 3, title: "کسب و کار", link: "/tag/kasbokar" },
  { id: 4, title: "موفقیت", link: "/successfull" },
  { id: 5, title: "زندگی", link: "/live" },
  { id: 6, title: "کتاب", link: "/book" },
  { id: 7, title: "خلاقیت", link: "/Creativity" },
  { id: 8, title: "طنز", link: "/fun" },
  { id: 9, title: "روانشناسی", link: "/psychology" },
  { id: 10, title: " حال خوبتو با من تقسیم کن", link: "/goodlife" },
];
