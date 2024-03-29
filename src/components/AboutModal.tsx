import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandTwitter,
  IconInfoCircle,
  IconX,
} from "@tabler/icons-react";
import clsx from "clsx";

import Modal from "@/components/Modal";

interface Tools {
  toolName: string;
  toolLink: string;
}

interface Stack {
  category: string;
  tools: Tools[];
}

const stack: Stack[] = [
  {
    category: "Main",
    tools: [
      {
        toolName: "Next.js",
        toolLink: "https://nextjs.org/",
      },
      {
        toolName: "Typescript",
        toolLink: "https://www.typescriptlang.org/",
      },
      {
        toolName: "TailwindCSS",
        toolLink: "https://tailwindcss.com/",
      },
    ],
  },
  {
    category: "UI/Design",
    tools: [
      {
        toolName: "Radix Primitives",
        toolLink: "https://www.radix-ui.com/",
      },
      {
        toolName: "Radix Colors",
        toolLink: "https://www.radix-ui.com/colors",
      },
      {
        toolName: "Framer Motion",
        toolLink: "https://www.framer.com/motion/",
      },
      {
        toolName: "Tabler Icons",
        toolLink: "https://tabler-icons.io/",
      },
    ],
  },
  {
    category: "Tailwind Plugins",
    tools: [
      {
        toolName: "windy-radix-palette",
        toolLink: "https://github.com/brattonross/windy-radix-palette",
      },
      {
        toolName: "tailwindcss-radix",
        toolLink: "https://github.com/ecklf/tailwindcss-radix",
      },
    ],
  },
  {
    category: "Data Fetching/State",
    tools: [
      {
        toolName: "TMDb API",
        toolLink:
          "https://developers.themoviedb.org/3/getting-started/introduction",
      },
      {
        toolName: "moviedb-promise",
        toolLink: "https://github.com/grantholle/moviedb-promise",
      },
      {
        toolName: "SWR",
        toolLink: "https://swr.vercel.app/",
      },
      {
        toolName: "Zustand",
        toolLink: "https://zustand-demo.pmnd.rs/",
      },
    ],
  },
  {
    category: "Utilities/Others",
    tools: [
      {
        toolName: "next-themes",
        toolLink: "https://github.com/pacocoursey/next-themes",
      },
      {
        toolName: "clsx",
        toolLink: "https://github.com/lukeed/clsx",
      },
      {
        toolName: "next-seo",
        toolLink: "https://github.com/garmeeh/next-seo",
      },
      {
        toolName: "vercel/og",
        toolLink:
          "https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation",
      },
    ],
  },
];

const AboutModal = () => {
  return (
    <Modal
      triggerIcon={<IconInfoCircle size={20} stroke={2} />}
      closeIcon={<IconX size={18} />}
      title="About"
      description="Useful information and resources about this website"
    >
      <div className="my-2 divide-y divide-mauve-6">
        <div className="flex items-end justify-between">
          <div className="flex flex-col py-4">
            <h3 className="font-semibold">What and why</h3>
            <p className="text-sm text-mauve-11">
              This is a website I built for people that, just like me, have
              trouble choosing a movie to watch. My main motivation for building
              it was to learn new technologies, apply and improve my skills as a
              front-end developer, and build something on my own, from start to
              finish.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <h3 className="font-semibold">Built with</h3>
          <p className="text-sm text-mauve-11">
            Some of the tools I used to build moviexyz
          </p>
          <ul className="mt-2 text-sm">
            {stack.map(({ category, tools }) => (
              <li
                key={category}
                className="mt-1 flex flex-wrap items-center text-mauve-12"
              >
                <span className="flex items-center font-medium">
                  {category}
                  <IconArrowRight className="mx-1" size={16} />
                </span>
                {tools.map(({ toolName, toolLink }) => (
                  <div key={toolLink} className="text-mauve-11">
                    <a
                      key={toolLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={toolLink}
                      className="text-mauve-11 hover:text-mauve-12 motion-safe:duration-200 motion-safe:ease-productive-standard"
                    >
                      {toolName}
                    </a>
                    {tools[tools.length - 1]?.toolName !== toolName && (
                      <span className="mx-1 mb-0.5 inline-flex h-1 w-1 flex-none rounded-full bg-mauve-11"></span>
                    )}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-4">
          <h3 className="font-semibold">Me</h3>
          <p className="text-sm text-mauve-11">
            I'm Gabriel, an aspiring Front-end Developer with great interest in
            the UI/UX world and passionate about well-crafted, polished user
            interfaces and clean design.
          </p>
          <div className="mt-2 flex gap-2 text-sm font-medium text-mauve-11">
            <a
              className={clsx(
                "w-18 group flex h-8 items-center gap-1 px-3",
                "cursor-pointer rounded-lg border border-mauve-6 bg-mauve-3 shadow",
                "hover:border-mauve-8 hover:bg-mauve-4 hover:text-mauve-12",
                "motion-safe:duration-200 motion-safe:ease-productive-standard"
              )}
              aria-label="Gabriel's twitter profile link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/gabxyzz"
            >
              <IconBrandTwitter size={16} />
              <p>Twitter</p>
              <IconArrowUpRight
                size={16}
                className="text-mauve-11 group-hover:rotate-45 group-hover:text-mauve-11 motion-safe:duration-200 motion-safe:ease-productive-standard"
              />
            </a>
            <a
              className={clsx(
                "w-18 group flex h-8 items-center gap-1 px-3",
                "cursor-pointer rounded-lg border border-mauve-6 bg-mauve-3 shadow",
                "hover:border-mauve-8 hover:bg-mauve-4 hover:text-mauve-12",
                "motion-safe:duration-200 motion-safe:ease-productive-standard"
              )}
              aria-label="Gabriel's github profile link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gabxyz"
            >
              <IconBrandGithub size={16} />
              <p>GitHub</p>
              <IconArrowUpRight
                size={16}
                className="text-mauve-11 group-hover:rotate-45 group-hover:text-mauve-11 motion-safe:duration-200 motion-safe:ease-productive-standard"
              />
            </a>
          </div>
        </div>
        <div className="py-4">
          <h3 className="font-semibold">Notes</h3>
          <p className="text-sm text-mauve-11">
            You may have noticed that the text in this website is all lowercase.
            This is intentional. The reason is simply because I think it looks
            nicer. If you dislike this, you can change it in the settings menu.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-mauve-11">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.themoviedb.org/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 190.24 81.52"
            className="h-4 w-8"
          >
            <defs>
              <linearGradient
                id="a"
                y1={40.76}
                x2={190.24}
                y2={40.76}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#90cea1" />
                <stop offset={0.56} stopColor="#3cbec9" />
                <stop offset={1} stopColor="#00b3e5" />
              </linearGradient>
            </defs>
            <title>{"TMDB logo"}</title>
            <g data-name="Layer 2">
              <path
                d="M105.67 36.06h66.9a17.67 17.67 0 0 0 17.67-17.66A17.67 17.67 0 0 0 172.57.73h-66.9A17.67 17.67 0 0 0 88 18.4a17.67 17.67 0 0 0 17.67 17.66Zm-88 45h76.9a17.67 17.67 0 0 0 17.67-17.66 17.67 17.67 0 0 0-17.67-17.67h-76.9A17.67 17.67 0 0 0 0 63.4a17.67 17.67 0 0 0 17.67 17.66Zm-7.26-45.64h7.8V6.92h10.1V0h-28v6.9h10.1Zm28.1 0h7.8V8.25h.1l9 27.15h6l9.3-27.15h.1V35.4h7.8V0H66.76l-8.2 23.1h-.1L50.31 0h-11.8Zm113.92 20.25a15.07 15.07 0 0 0-4.52-5.52 18.57 18.57 0 0 0-6.68-3.08 33.54 33.54 0 0 0-8.07-1h-11.7v35.4h12.75a24.58 24.58 0 0 0 7.55-1.15 19.34 19.34 0 0 0 6.35-3.32 16.27 16.27 0 0 0 4.37-5.5 16.91 16.91 0 0 0 1.63-7.58 18.5 18.5 0 0 0-1.68-8.25ZM145 68.6a8.8 8.8 0 0 1-2.64 3.4 10.7 10.7 0 0 1-4 1.82 21.57 21.57 0 0 1-5 .55h-4.05v-21h4.6a17 17 0 0 1 4.67.63 11.66 11.66 0 0 1 3.88 1.87A9.14 9.14 0 0 1 145 59a9.87 9.87 0 0 1 1 4.52 11.89 11.89 0 0 1-1 5.08Zm44.63-.13a8 8 0 0 0-1.58-2.62 8.38 8.38 0 0 0-2.42-1.85 10.31 10.31 0 0 0-3.17-1v-.1a9.22 9.22 0 0 0 4.42-2.82 7.43 7.43 0 0 0 1.68-5 8.42 8.42 0 0 0-1.15-4.65 8.09 8.09 0 0 0-3-2.72 12.56 12.56 0 0 0-4.18-1.3 32.84 32.84 0 0 0-4.62-.33h-13.2v35.4h14.5a22.41 22.41 0 0 0 4.72-.5 13.53 13.53 0 0 0 4.28-1.65 9.42 9.42 0 0 0 3.1-3 8.52 8.52 0 0 0 1.2-4.68 9.39 9.39 0 0 0-.55-3.18Zm-19.42-15.75h5.3a10 10 0 0 1 1.85.18 6.18 6.18 0 0 1 1.7.57 3.39 3.39 0 0 1 1.22 1.13 3.22 3.22 0 0 1 .48 1.82 3.63 3.63 0 0 1-.43 1.8 3.4 3.4 0 0 1-1.12 1.2 4.92 4.92 0 0 1-1.58.65 7.51 7.51 0 0 1-1.77.2h-5.65Zm11.72 20a3.9 3.9 0 0 1-1.22 1.3 4.64 4.64 0 0 1-1.68.7 8.18 8.18 0 0 1-1.82.2h-7v-8h5.9a15.35 15.35 0 0 1 2 .15 8.47 8.47 0 0 1 2.05.55 4 4 0 0 1 1.57 1.18 3.11 3.11 0 0 1 .63 2 3.71 3.71 0 0 1-.43 1.92Z"
                style={{
                  fill: "url(#a)",
                }}
                data-name="Layer 1"
              />
            </g>
          </svg>
        </a>
        <p>
          moviexyz uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </Modal>
  );
};

export default AboutModal;
