import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "GPT4",
    description: "writes the script.",
    icon: "4️⃣",
    link: "https://platform.openai.com/docs/guides/gpt",
  },
  {
    name: "Suno AI Bark",
    description: "reads the script.",
    icon: "🐕",
    link: "https://replicate.com/suno-ai/bark?utm_source=project&utm_campaign=teachomatic",
  },
  {
    name: "Damo Text-to-Video",
    description: "creates the videos.",
    icon: "📹",
    link: "https://replicate.com/cjwbw/damo-text-to-video?utm_source=project&utm_campaign=teachomatic",
  },
  {
    name: "Riffusion",
    description: "writes the music.",
    icon: "🎶",
    link: "https://replicate.com/riffusion/riffusion?utm_source=project&utm_campaign=teachomatic",
  },
  {
    name: "Stable Diffusion",
    description: "creates the cover images.",
    icon: "🖼️",
    link: "https://replicate.com/stability-ai/stable-diffusion?utm_source=project&utm_campaign=teachomatic",
  },
  {
    name: "LangChain",
    description: "chains it all together!",
    icon: "🔗",
    link: "https://python.langchain.com/en/latest?utm_source=project&utm_campaign=teachomatic",
  },
];

export default function How() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-orange-600">
                No dev environment required
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How does it work?
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <a
                      className="hover:text-orange-600 text-gray-900"
                      href={feature.link}
                    >
                      <dt className="inline font-semibold ">
                        <span className="text-xl mr-2">{feature.icon}</span>

                        {feature.name}
                      </dt>{" "}
                    </a>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <img className="rounded-lg" src="/demo.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
