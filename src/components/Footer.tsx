const Footer = () => {
  return (
    <>
      <footer className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-slate-11">
        <p>
          Made by{" "}
          <a
            className="cursor-pointer font-semibold text-slate-12 duration-300 ease-productive-standard hover:text-slate-11"
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
