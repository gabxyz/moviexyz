import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <>
      <footer className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-11">
        <p>
          Made by <span className="font-medium text-slate-12">gabxyz</span>
        </p>
        <div className="mt-0.5 inline-flex h-1 w-1 flex-none rounded-full bg-slate-11" />
        <div className="flex items-center gap-1.5">
          <a
            className="cursor-pointer hover:text-slate-12 motion-safe:duration-300 motion-safe:ease-expressive-standard"
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/gabxyz"
          >
            <GitHubLogoIcon />
          </a>
          <a
            className="cursor-pointer hover:text-slate-12 motion-safe:duration-300 motion-safe:ease-expressive-standard"
            aria-label="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/gabxyzdev"
          >
            <TwitterLogoIcon />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
