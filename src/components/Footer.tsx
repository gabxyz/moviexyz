const Footer = () => {
  return (
    <>
      <footer className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-mauve-11">
        <p>
          Made by{" "}
          <a
            className="cursor-pointer font-semibold text-mauve-12 hover:text-mauve-11 motion-safe:duration-200 motion-safe:ease-productive-standard"
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
