import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMessage,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import portfolio1 from "../public/portfolio1.jpg";
import portfolio2 from "../public/portfolio2.jpg";
import portfolio3 from "../public/portfolio3.jpg";
import portfolio4 from "../public/portfolio4.jpg";
import portfolio5 from "../public/portfolio5.jpg";
import portfolio6 from "../public/portfolio6.jpg";
import banner from "../public/hero-banner.png";
import shape from "../public/hero-shape.svg";
import shape2 from "../public/about-shape-3.svg";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Personal Portfolio</title>
        <meta
          name="Personal Portfolio"
          content="photographer Personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-7 mb-12 flex justify-end dark:text-white">
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="p-5 py-10">
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-3/4 flex-1 ">
                <h1 className="text-4xl py-2 mt-5 text-zinc-800 font-medium dark:text-white md:text-8xl">
                  Amelia Watson
                </h1>
                <h2 className="text-2xl py-2 dark:text-white md:text-4xl">
                  Photographer
                </h2>
                <p className="py-2 dark:text-white">
                  I approach photography with a romantic, impressionist
                  sensibility. Over the past decade, I have had the pleasure of
                  documenting some of the most iconic and exclusive celebrations
                  for discerning patrons in over twenty countries and six
                  continents.
                </p>
      
                <div className="fixed left-0 mt-5">
                <Image width={100} src={shape}  alt="shape"/>
                </div>
                <div className="fixed right-0 top-1/4">
                <Image width={110} src={shape2}  alt="shape"/>
                </div>
              </div>
              <div className="basis-1/5 flex-1 ">
                <Image src={banner}  alt="banner "/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 md:text-5xl dark:text-white ">
              About Me
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              A passionate photograher who are working in this field for last 10
              years. I’m ready to give you my best.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I approach photography with a romantic, impressionist sensibility.
              Over the past decade, I have had the pleasure of documenting some
              of the most iconic and exclusive celebrations for discerning
              patrons in over twenty countries and six continents. I have been
              named one of the top film photographers in the world and featured
              in numerous prestigious publications such as Harpers Bazaar, Elle,
              Town & Country and Martha Stewart Weddings.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I approach photography with a romantic, impressionist sensibility.
              Over the past decade, I have had the pleasure of documenting some
              of the most iconic and exclusive celebrations for discerning
              patrons in over twenty countries and six continents. I have been
              named one of the top film photographers in the world and featured
              in numerous prestigious publications such as Harpers Bazaar, Elle,
              Town & Country and Martha Stewart Weddings.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl md:text-5xl py-1 mt-20 dark:text-white ">
              Portofolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio1}
                alt="portfolio "
              />
            </div>
            <div className="basis-1/4 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio2}
                alt="portfolio "
              />
            </div>
            <div className="basis-1/4 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio3}
                alt="portfolio "
              />
            </div>
            <div className="basis-1/4 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio5}
                alt="portfolio "
              />
            </div>
            <div className="basis-1/4 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio6}
                alt="portfolio "
              />
            </div>
            <div className="basis-1/4 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio4}
                alt="portfolio "
              />
            </div>
          </div>
        </section>
        <section className="py-3">
          <div>
            <div className="text-3xl flex justify-center gap-2 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillYoutube />
              <AiFillLinkedin />
              <AiFillMessage />
              <AiFillInstagram />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
