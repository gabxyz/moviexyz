const Footer = () => {
  return (
    <>
      <footer className="mt-6 flex items-center justify-center gap-2 text-[15px] font-medium text-mauve-11">
        <p>
          made by{" "}
          <a
            className="cursor-pointer font-semibold text-mauve-12 underline underline-offset-2 opacity-90 hover:opacity-75 motion-safe:duration-200 motion-safe:ease-productive-standard"
            aria-label="Gabriel's twitter profile link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/gabxyzz"
          >
            gabxyz
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
