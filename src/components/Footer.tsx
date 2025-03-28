
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
      <div className="container-custom">
        <p className="mb-2">Thanks for visiting and happy coding!</p>
        <p>© Copyright {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
