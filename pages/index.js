import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import SignupForm from "../components/Signup";
export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "LIVE",
          description: "We are changing the Auto Insurance Industry",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "Plutonium",
        }}
        twitter={{
          handle: "@saurishhh",
          site: "https://plutonium.vercel.app/",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link  rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="animate-typing overflow-hidden mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Building the  <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 dark:from-sky-500 dark:via-blue-400 dark:to-indigo-500">
              Future
            </span>
            
              <br />
              of&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
               Auto Insurance.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
            We are taking on a challenge – revolutionizing how the auto insurance industry operates.
            
            At LIVE, we&apos;re building an exciting new platform that puts users first. 
            Expect something truly transformative like never before.
            </p>
            <div className="mt-6 text-center md:ml-6">
            <SignupForm />
             
              <br className="sm:hidden" />
            
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/photos/the-toys-vintage-miniature-car-and-bus-on-trendy-colored-paper-the-pop-art-and-creativity-concept-the-vacation-trip-travel-weekend-holidays-concept-H8k5A-gTRf4"
              >
                <img
                  className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                  src="/images/car_yellow_bg.jpeg"
                  alt="Placeholder Image"
                />
              </a>
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
               We&apos;re bringing brightness to your life.
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>
     { /*<Sponsors /> */}
      <Features />
     {/* <Pricing /> */}
      <Footer />
    </div>
  );
}
