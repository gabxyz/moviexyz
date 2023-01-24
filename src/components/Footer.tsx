const Footer = () => {
  return (
    <>
      <footer className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-11">
        <p>
          Made by{" "}
          <a
            className="cursor-pointer font-semibold text-slate-12 hover:text-slate-11 motion-safe:duration-300 motion-safe:ease-expressive-standard"
            aria-label="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/gabxyzdev"
          >
            gabxyz
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
