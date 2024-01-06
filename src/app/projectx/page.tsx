import { FacebookSVG, InstagramSVG, LinkedinSVG, TwitterSVG } from "@/components/Icon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Home() {
  const currentYear = new Date().getFullYear()
  // const {
  //   sitename,
  //   sitetagline,
  //   description,
  //   copyrightText,
  //   newsletterheading,
  //   sitelogo,
  //   socialIcons,
  //   socialIconsHeading,
  //   title,
  // } = data

  return (
    <>
      {/* <ThemeSwitcher /> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-12">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">

          <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">

            <div className='flex flex-col text-center'>
              <h1 className='text-2xl lgtext-4xl text-sky-400/100 font-semibold	'>ProjectX - Unleash Your Creativity</h1>
              <p className='text-2 font-medium m-2 text-slate-800 dark:text-slate-100'>Embark on a journey with our Build Your Own series, offering hands-on experiences to create something extraordinary from the ground up.</p>
            </div>

          </div>
        </div>

        <div className="relative flex flex-col  place-items-center ">
          <h2 className='text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 '>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Exciting News Coming Soon!</span>
            <span className=''>⏳</span>
          </h2>
          <p className='text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin'>
            Our dedicated team is working tirelessly to bring ProjectX to life. Be the first to know when we launch by subscribing below. Get ready to dive into a world of creativity and innovation!
          </p>
        </div>

        <div className='text-center lg:m-7 mt-10 w-80 p-3' >
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-slate-800 dark:text-slate-100  font-light text-sm leading-6">Subscribe to know when we launch it</label>
              <div className="mt-2 flex-col flex lg:flex md:flex-row">
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full rounded-md"
                  placeholder="Email Address"
                />

              </div>
              <button className={cn("font-semibold p-2 w-full rounded-md mt-4", buttonVariants({ variant: 'default' }))}>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
