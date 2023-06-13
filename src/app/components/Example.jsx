import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-video h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <iframe
                className="w-full aspect-video rounded-xl"
                src="https://www.youtube.com/embed/mZoGDUckhOE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <CodeBracketIcon className="absolute left-0 top-0 -z-10 h-12 stroke-white/20" />

              <blockquote className="text-sm font-semibold leading-8 text-white">
                <pre>
                  <code>
                    TOPIC = "how to make spaghetti" <br />
                    NARRATOR_ADJECTIVES = "shakespearean" <br />
                    MUSIC_STYLE = "disco" <br />
                  </code>
                </pre>{" "}
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
