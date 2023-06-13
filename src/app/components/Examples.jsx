import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const reviews = [
  {
    title: "It really works.",
    body: "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
    author: "CrazyInvestor",
    rating: 5,
    img: "https://image.lexica.art/md/b7ca5e63-e446-45aa-b650-c7992705bb30",
  },
  {
    title: "You need this app.",
    body: "I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.",
    author: "CluelessButRich",
    rating: 5,
    img: "https://image.lexica.art/md/230f03ce-431e-444e-9a9c-f0255a26fc5f",
  },
  {
    title: "This shouldn’t be legal.",
    body: "Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.",
    author: "LivingDaDream",
    rating: 5,
    img: "https://image.lexica.art/md/0c1f5ddc-4697-4fee-8e7a-2520bc25a42d",
  },
  {
    title: "Screw financial advisors.",
    body: "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
    author: "JordanBelfort1962",
    rating: 5,
    img: "https://image.lexica.art/md/4512ca9e-3323-4554-80ca-c293a8c529ab",
  },
  {
    title: "I love it!",
    body: "I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!",
    author: "MrBurns",
    rating: 5,
    img: "https://image.lexica.art/md/4c5ae880-0975-41e4-a153-3bf52ee3d462",
  },
  {
    title: "Too good to be true.",
    body: "I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!",
    author: "LazyRich99",
    rating: 5,
    img: "https://image.lexica.art/md/1ffb0068-e7c0-4f9f-a137-7500e601e211",
  },
  {
    title: "Wish I could give 6 stars",
    body: "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
    rating: 5,
    img: "https://image.lexica.art/md/435374bd-f7dc-4612-aa90-54af2e491a4a",
  },
  {
    title: "Bought an island.",
    body: "Yeah, you read that right. Want your own island too? Get Pocket.",
    author: "ScroogeMcduck",
    rating: 5,
    img: "https://image.lexica.art/md/63c720a7-c9e8-4314-b9f3-d2ba23a09443",
  },
  {
    title: "No more debt!",
    body: "After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?",
    author: "BruceWayne",
    rating: 5,
  },
  {
    title: "I’m 13 and I’m rich.",
    body: "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
    author: "RichieRich",
    rating: 5,
    img: "https://image.lexica.art/md/02676b3d-3237-4c3f-9e63-a2360ad5bb3a",
  },
  {
    title: "Started an investment firm.",
    body: "I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!",
    author: "TheCountOfMonteChristo",
    rating: 5,
    img: "https://image.lexica.art/md/157d1215-b1bf-4b2c-a702-c1407e87be67",
  },
  {
    title: "It’s like a superpower.",
    body: "Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!",
    author: "ClarkKent",
    rating: 5,
    img: "https://image.lexica.art/md/0ef738d6-521f-4f9d-8e81-8e52cdb86fb6",
  },
  {
    title: "Quit my job.",
    body: "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
    author: "GeorgeCostanza",
    rating: 5,
    img: "https://image.lexica.art/md/0f179429-4fa1-49ca-9f38-a40fa22ddae8",
  },
  {
    title: "Don’t download this app",
    body: "Unless you want to have the best life ever! I am literally writing this from a yacht.",
    author: "JeffBezos",
    rating: 5,
    img: "https://image.lexica.art/md/1b168df3-9bcf-4f19-bcbc-748393f23db1",
  },
];

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            "h-5 w-5",
            rating > index ? "fill-cyan-500" : "fill-gray-300"
          )}
        />
      ))}
    </div>
  );
}

function Review({ title, body, author, rating, img, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <img className="rounded-3xl" src={img}></img>
    </figure>
  );
}

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef();
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(reviews, 3);
  columns = [columns[0], columns[1], splitArray(columns[2], 2)];

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  "md:hidden",
                reviewIndex >= columns[0].length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && "lg:hidden"
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
}

export function Examples() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <h2
        id="reviews-title"
        className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
      >
        Write a prompt and watch it come to life{" "}
        <span className="text-gray-400">*</span>
      </h2>
      <p className="mt-2 text-lg text-gray-600 sm:text-center">
        All these images were created with Stable Diffusion. And now, you can
        run it yourself.
      </p>
      <p className="mt-4 text-sm text-gray-500 sm:text-center">
        * Not literally
      </p>

      <ReviewGrid />
    </section>
  );
}
