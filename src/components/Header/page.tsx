import { UserButton, auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const { userId } = auth();

  return (
    <div className='bg-transprant text-primaryho'>
      <div className='container mx-auto flex items-center justify-between py-4 px-4'>
        <Link href='/'>
          <Image
              src="/images/logos/header/header-logo.png"
              alt="logo"
              width={130}
              height={35}
              className="w-48"
            />
     
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-0" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-primary md:hover:text-primaryho">ACCUEIL</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-primary  md:hover:text-primaryho">VIRTULE-ZX10</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-primary md:hover:text-primaryho">NOS CARACTÉRISTIQUES</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-primary  md:hover:text-primaryho">À PROPOS</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-primary  md:hover:text-primaryho">TUTORIELS</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-primary  md:hover:text-primaryho">CONTACT</a>
      </li>
    </ul>
  </div>
        <div>
          {userId ? (
            <div className='flex gap-4 items-center'>
              <Link href='/dashboard'>Dashboard</Link>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <div className='flex gap-4 items-baseline underline'>
              <Link href='/sign-up'>S'inscrire</Link>
              <Link href='/sign-in'>
              <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                S'identifier
              </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";

// const Header = () => {
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [dropdownToggler, setDropdownToggler] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);

//   const pathUrl = usePathname();

//   // Sticky menu
//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//   });

//   return (
//     <header
//       className={`fixed left-0 top-0 z-99999 w-full py-7 ${
//         stickyMenu
//           ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
//           : ""
//       }`}
//     >
//       <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
//         <div className="flex w-full items-center justify-between xl:w-1/4">
//           <a href="/">
//             <Image
//               src="/images/logos/header/header-logo.png"
//               alt="logo"
//               width={119.03}
//               height={35}
//               className="hidden w-full dark:block"
//             />
//             <Image
//               src="/images/logos/header/header-logo.png"
//               alt="logo"
//               width={119.03}
//               height={35}
//               className="w-full dark:hidden"
//             />
            
//           </a>

//           {/* <!-- Hamburger Toggle BTN --> */}
//           <button
//             aria-label="hamburger Toggler"
//             className="block xl:hidden"
//             onClick={() => setNavigationOpen(!navigationOpen)}
//           >
//             <span className="relative block h-5.5 w-5.5 cursor-pointer">
//               <span className="absolute right-0 block h-full w-full">
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!w-full delay-300" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "delay-400 !w-full" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!w-full delay-500" : "w-0"
//                   }`}
//                 ></span>
//               </span>
//               <span className="du-block absolute right-0 h-full w-full rotate-45">
//                 <span
//                   className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!h-0 delay-[0]" : "h-full"
//                   }`}
//                 ></span>
//                 <span
//                   className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
//                     !navigationOpen ? "!h-0 delay-200" : "h-0.5"
//                   }`}
//                 ></span>
//               </span>
//             </span>
//           </button>
//           {/* <!-- Hamburger Toggle BTN --> */}
//         </div>

//         {/* Nav Menu Start   */}
//         <div
//           className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
//             navigationOpen &&
//             "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
//           }`}
//         >
//           <nav>
//             <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
//               {menuData.map((menuItem, key) => (
//                 <li key={key} className={menuItem.submenu && "group relative"}>
//                   {menuItem.submenu ? (
//                     <>
//                       <button
//                         onClick={() => setDropdownToggler(!dropdownToggler)}
//                         className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
//                       >
//                         {menuItem.title}
//                         <span>
//                           <svg
//                             className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512"
//                           >
//                             <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                           </svg>
//                         </span>
//                       </button>

//                       <ul
//                         className={`dropdown ${dropdownToggler ? "flex" : ""}`}
//                       >
//                         {menuItem.submenu.map((item, key) => (
//                           <li key={key} className="hover:text-primary">
//                             <Link href={item.path || "#"}>{item.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={`${menuItem.path}`}
//                       className={
//                         pathUrl === menuItem.path
//                           ? "text-primary hover:text-primary"
//                           : "hover:text-primary"
//                       }
//                     >
//                       {menuItem.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <div className="mt-7 flex items-center gap-6 xl:mt-0">
//             <ThemeToggler />

//             {/* <Link
//               href="https://github.com/NextJSTemplates/solid-nextjs"
//               className="text-regular font-medium text-waterloo hover:text-primary"
//             >
//               GitHub Repo 🌟
//             </Link> */}

//             <Link
//               href="https://nextjstemplates.com/templates/solid"
//               className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// // w-full delay-300

// export default Header;


// // import { UserButton, auth } from '@clerk/nextjs';
// // import Link from 'next/link';

// // export default async function Header() {
// //   const { userId } = auth();

// //   return (
// //     <div className='bg-gray-600 text-neutral-100'>
// //       <div className='container mx-auto flex items-center justify-between py-4'>
// //         <Link href='/'>Home</Link>
// //         <div>
// //           {userId ? (
// //             <div className='flex gap-4 items-center'>
// //               <Link href='/dashboard'>Dashboard</Link>
// //               <UserButton afterSignOutUrl='/' />
// //             </div>
// //           ) : (
// //             <div className='flex gap-4 items-center'>
// //               <Link href='/sign-up'>Sign up</Link>
// //               <Link href='/sign-in'>Sign In</Link>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
