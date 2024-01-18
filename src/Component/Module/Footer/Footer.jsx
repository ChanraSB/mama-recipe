import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <section>
        <div id="footer" className={`container-fluid ${style.footer}`}>
          <h3 className={style.footerTitle}>Eat, Cook, Repeat</h3>
          <p className={style.footerText}> Share your best recipe by uploading here !</p>
          <div className={style.footerNav}>
            <a className={style.footerLink} href="#">
              Product{" "}
            </a>
            <a className={style.footerLink} href="#">
              Company
            </a>
            <a className={style.footerLink} href="#">
              Learn more{" "}
            </a>
            <a className={style.footerLink} href="#">
              Get in touch
            </a>
          </div>
          <p className={style.footerCopyright}>&copy; Arkademy</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
