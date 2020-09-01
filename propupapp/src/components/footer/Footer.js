import React from "react";
import "./Footer.css";

const footer = () => {

return(
<footer className="footer">
<div className="upper-footer">  
<div className="columns is-mobile">
    <hr />
        <div className="column"><h5 class="white-text"><u><strong>Team Bio</strong></u></h5>
          <p className="grey-text text-lighten-4">We are a team of students from Vanderbilt Bootcamp working on
            this project like it's our full time job. We love to code and are always looking for better and 
            more innovatie ways to improve our applications.</p>
        </div>
        <div className="column"> <h5 class="white-text"><u><strong>Quick Links</strong></u></h5>
          <ul>
            <li><a className="white-text" href="/Signup"><i class="fas fa-user-plus"></i>&nbsp;Login / Sign Up</a></li>
            <li><a className="white-text" href="/Owner"><i class="fas fa-home"></i>&nbsp;Property Owner</a></li>
            <li><a className="white-text" href="/Renter"><i class="fas fa-door-open"></i>&nbsp;Renter</a></li>
            <li><a className="white-text" href="/Who"><i class="fas fa-users"></i>&nbsp;Who we are</a></li>               
          </ul>
        </div>
        <div className="column"> 
          <h5 className="white-text"><u><strong>Connect</strong></u></h5>
          <ul>
            <li><a className="white-text" target="blank" href="mailto:jaswhitehead@gmail.com"><i class="fa fa-envelope"></i>&nbsp;Email Us</a></li>
            <li><a className="white-text" target="blank"
                href="https://github.com/jaswhitehead/propUp"><i class="fab fa-github"></i>&nbsp;GitHub Repo</a></li>
            <li><a className="white-text" target="blank"
                href="https://www.facebook.com/jaswhitehead"><i class="fab fa-facebook"></i>&nbsp;Facebook</a></li>
            <li><a className="white-text" target="blank"
                href="https://www.linkedin.com/in/jasonwhitehead1/"><i class="fab fa-linkedin"></i>&nbsp;LinkedIn</a></li>
          </ul>
        </div>
      </div>  
  </div>
  <div className="content has-text-centered level-item">
    <p>
      <strong>PropUp</strong> by <a href="https://github.com/jaswhitehead" target="blank">JSON Whitehead, </a>
      <a href="https://github.com/micahslea" target="blank">Micah Lea, </a>
      <a href="https://github.com/Mason-Shadrick" target="blank">Mason Shadrick &amp; </a>
      <a href="https://github.com/cjohnson1580" target="blank">Chip Johnson</a>. The PropUp website content is &#169; 2020
    </p>
  </div>
  
</footer>

);
}
export default footer;