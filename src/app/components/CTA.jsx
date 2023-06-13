export default function CTA() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to make your own videos?
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://colab.research.google.com/drive/1pykPRbF0PhMdmUi3X-i8sCL5jnUQxSwb?usp=sharing"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Run the notebook
            </a>
            <a
              href="https://www.youtube.com/@teach-o-matic"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold border text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Check out YouTube Channel &rarr;
            </a>
          </div>
        </div>

        <p className="text-gray-700 font-medium text-center mt-12">
          Teach-O-Matic is an open source project from{" "}
          <a
            className="hover:text-orange-700"
            href="https://replicate.com?utm_source=project&utm_campaign=teachomatic"
          >
            Replicate
          </a>
          .
        </p>
      </div>
    </div>
  );
}
