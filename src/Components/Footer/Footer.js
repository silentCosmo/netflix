import React from 'react'
import './Footer.css'

function Footer() {
  return (
      <footer className="footer">
          <div className="social">
              <a href="https://github.com/silentCosmo/">
                  <i class="fa-brands fa-github soci"></i>
              </a>
              <a href="https://www.instagram.com/silentcosmo_/?hl=en">
                  <i class="fa-brands fa-instagram soci"></i>
              </a>
              <a href="https://www.linkedin.com/in/silentcosmo/">
                  <i class="fa-brands fa-linkedin soci"></i>
              </a>
          </div>

          <div className="bottom">

              <p className="ftext"> &#169;2023  SilentCosmo </p>
          </div>
      </footer>
  )
}

export default Footer