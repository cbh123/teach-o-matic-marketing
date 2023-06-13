import Link from "next/link";
import Image from "next/image";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const linkStyles =
  "inline-block relative w-12 h-12 mx-2 opacity-30 hover:opacity-100 transition-all duration-200";
const imageStyles =
  "p-3 hover:p-1  transition-all duration-200  saturate-0 hover:saturate-100";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-white">
      <div className="flex justify-center">
        <p className="text-lg text-gray-700">
          Teach-O-Matic is an open source project from{" "}
          <Link
            className="underline"
            href="https://replicate.com?utm_source=project&utm_campaign=teachomatic"
          >
            Replicate
          </Link>
          .
        </p>
      </div>

      <div className="flex justify-center mt-4">
        <Tooltip id="replicate-tooltip" />
        <Tooltip id="youtube-tooltip" />

        <Link
          className={linkStyles}
          href="https://replicate.com?utm_source=project&utm_campaign=teachomatic"
        >
          <Image
            src="/logomarks/replicate.svg"
            alt="Replicate"
            data-tooltip-id="replicate-tooltip"
            data-tooltip-content="Built by Replicate"
            className={imageStyles}
            fill={true}
            unoptimized={true}
          />
        </Link>

        <Link
          className={linkStyles}
          href="https://github.com/replicate/teachomatic"
        >
          <Image
            src="/logomarks/youtube.svg"
            data-tooltip-id="youtube-tooltip"
            data-tooltip-content="Check out the channel"
            alt="Open-source repository on GitHub"
            className={imageStyles}
            fill={true}
            unoptimized={true}
          />
        </Link>
      </div>
    </footer>
  );
}
