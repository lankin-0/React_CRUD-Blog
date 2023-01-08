const Footer = () => {
  const today = new Date();

  return (
    <footer className="Footer">
      <h3>Copyrights &copy; {today.getFullYear()}</h3>
    </footer>
  );
};

export default Footer;
