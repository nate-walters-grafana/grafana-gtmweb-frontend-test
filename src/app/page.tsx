import Image from "next/image";
import Intro from "@/markdown/intro.mdx";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
          <svg
            className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id={`glow-desktop`} cx="100%">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
                <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
              </radialGradient>
              <radialGradient id={`glow-mobile`} cy="100%">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
                <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
              </radialGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#glow-desktop)`}
              className="hidden lg:block"
            />
            <rect
              width="100%"
              height="100%"
              fill={`url(#glow-mobile)`}
              className="lg:hidden"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
        </div>
        <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
          <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col items-center justify-center">
            <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
              <div className="relative">
                <div>
                  <Image
                    src="/grafana-logo.svg"
                    alt="Grafana logo"
                    width={200}
                    height={34}
                    priority
                  />
                </div>
                <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
                  Marketing Website{' '}
                  <span className="text-sky-300">Skills Assessment</span>
                </h1>
                <p className="mt-4 text-sm/6 text-gray-300">
                  Please read the assessment instructions to the right carefully. When you're ready, hit the button below to begin the test. You'll have 60 minutes to complete the challenge, but we're not gonna be mad if you go over a little bit. We're not monsters! We're just trying to get a sense of how you work under a little bit of pressure.
                </p>
                <Link href="/test" className="inline-block mt-8 px-6 py-3 text-sm/6 font-semibold text-white bg-sky-500 rounded-full hover:bg-sky-600 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 focus-visible:ring-opacity-60">
                    Start the test
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-auto">
        <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
          <svg
            className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
            aria-hidden="true"
          >
            <defs>
              <pattern id="pattern" width="6" height="8" patternUnits="userSpaceOnUse">
                <path
                  d="M0 0H6M0 8H6"
                  className="stroke-sky-900/10 xl:stroke-white/10 dark:stroke-white/10"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#rect)`} />
          </svg>
        </div>
        <main className="space-y-20 py-20 sm:space-y-32 sm:pb-32">
          <article id="commit-message-suggestions" className="scroll-mt-16">
            <div>
              <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                  <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto flex-col typography text-slate-900" data-mdx-content="true">
                    <Image
                      src="/grot-test-icon.svg"
                      alt="Grot taking a test"
                      width={250}
                      height={185}
                      priority
                    />
                    <Intro />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}