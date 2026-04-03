const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4 text-center">
      <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary">Local Arena</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
