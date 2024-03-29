"use client";
import How from "./components/How";
import CTA from "./components/CTA";
import Example from "./components/Example";
import Footer from "./components/Footer";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function Home() {
  return (
    <div>
      <div className="bg-white text-gray-900">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="text-4xl">📚</span>{" "}
                <span className="text-black ml-4 font-mono font-medium">
                  Teach-O-Matic
                </span>
              </a>
            </div>

            <div className="flex flex-1 justify-end">
              <a
                href="https://colab.research.google.com/drive/1pykPRbF0PhMdmUi3X-i8sCL5jnUQxSwb?usp=sharing"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Make a video <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>
        <main>
          <div className="relative isolate">
            <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              />
            </svg>
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h5 className="text-base font-semibold leading-7 text-orange-600">
                      Powered by{" "}
                      <a
                        className="hover:text-orange-400"
                        href="https://replicate.com?utm_source=project&utm_campaign=teachomatic"
                      >
                        Replicate
                      </a>{" "}
                      +{" "}
                      <a
                        className="hover:text-orange-400"
                        href="https://langchain.com"
                      >
                        LangChain
                      </a>
                    </h5>
                    <h1 className="text-xl mt-2 font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Create how-to videos with AI.
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      Teach-O-Matic is an open source Jupyter notebook that lets
                      you create AI how-to videos from text instructions. It
                      runs on{" "}
                      <a
                        className="font-medium"
                        href="https://replicate.com?utm_source=project&utm_campaign=teachomatic"
                      >
                        Replicate
                      </a>
                      ,{" "}
                      <a className="font-medium" href="https://langchain.com">
                        LangChain
                      </a>
                      , and{" "}
                      <a
                        className="font-medium"
                        href="https://platform.openai.com/docs/guides/gpt"
                      >
                        GPT-4
                      </a>
                      .
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="https://colab.research.google.com/drive/1pykPRbF0PhMdmUi3X-i8sCL5jnUQxSwb?usp=sharing"
                        className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                      >
                        Make a video &rarr;
                      </a>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-52 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36">
                      <div className="relative">
                        <a
                          href="https://youtu.be/h3FLPlDGgRM"
                          className="hover:opacity-50"
                        >
                          <img
                            src="/previews/aliens.png"
                            alt=""
                            className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </a>
                      </div>
                    </div>

                    <div className="mr-auto w-52 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <a
                          href="https://youtu.be/lJ0lxl7O1IE"
                          className="hover:opacity-50"
                        >
                          <img
                            src="/previews/meditate.png"
                            alt=""
                            className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </a>
                      </div>
                      <div className="relative">
                        <a
                          href="https://youtu.be/mZoGDUckhOE"
                          className="hover:opacity-50"
                        >
                          <img
                            src="/previews/spaghetti.png"
                            alt=""
                            className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </a>
                      </div>
                    </div>
                    <div className="w-52 flex-none space-y-8 pt-32 sm:pt-0">
                      <div>
                        <a
                          href="https://youtu.be/T_uuclvs5Dw"
                          className="relative hover:opacity-50"
                        >
                          <img
                            src="/previews/iphone.png"
                            alt=""
                            className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </a>
                      </div>

                      <div>
                        <a
                          href="https://www.youtube.com/watch?v=3Ff9CwnavfE"
                          className="relative mt-4 hover:opacity-50"
                        >
                          <img
                            src="/previews/sheet.png"
                            alt=""
                            className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Example />
      <How />

      <div className="py-16 text-center w-full bg-white">
        <div className="text-center justify-center max-w-lg mx-auto">
          <h2 className="text-base font-semibold leading-7 text-orange-600">
            We Have Fans
          </h2>
          <TwitterTweetEmbed
            onLoad={function noRefCheck() {}}
            tweetId={"1655687955493830657"}
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}
