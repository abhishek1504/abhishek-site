export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Abhishek Sharma · Hyderabad, India</div>
        <div>
          <a href="mailto:abhisheksharma.dsc@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/abhishekmca" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/abhishek1504" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
