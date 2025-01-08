import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-3">
        <a
          className="social-icon"
          href="https://github.com/fumusGeek"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/hanif-ifran-a-18684528a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0i2AqQWrRKSkJQyvXDsQBg%3D%3D"
          target="_blank"
        >
          <img
            src="/assets/linkedin-square-icon.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.instagram.com/hnif088"
          className="social-icon"
          target="_blank"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">© 2024 Hanif. All rights reserved.</p>
    </section>
  );
};

export default Footer;
