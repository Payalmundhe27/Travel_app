import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div className='Footer-top'>
            <div className="logo">
                <img src='logo.png' alt='Goyatre Tours and Travel'/>
                <p>Goyatre Holiday Pvt Ltd is a Vashi navi-mumbai based Loading travel brand that found its humble beginnings in 2019.</p>
                <div className="social-icons">
                    <a href='#'><i className="instagram"></i></a>
                    <a href='#'><i className="facebook"></i></a>
                    <a href='#'><i className="Tiwtter"></i></a>
                     </div>
                     </div>

                     <div className='Packages'>
                        <h4>Packages</h4>
                        <ul>
                            <li><a href='#'>Domestic Tour</a></li>
                            <li><a href='#'>Family Tour</a></li>
                            <li><a href='#'>Educational Tour</a></li>
                        </ul>
                     </div>
                     <div className='Address'>
                        <h4>Address</h4>
                        <p>801,1st st,G Block,Ranganathana Garden, Nagar,Vashi NAvi mumbai 402116.</p>
                        <p>mail@GoyatretourTravels.com</p>
                        <p>+91 8156725289</p>
                
                     </div>
            
                </div>
                <div className="Footer-bottom">
                    <p>&copy; 2025 All rights reserved-Goyatre Holiday pvt Ltd</p>
                    <a href='#'>Terms and Conditions</a>
                    <p>Developed By Brand Hungers</p>
                    
                </div>

                <div className='Footer-Contact'>
                    <h4>Get In Touch</h4>
                    <p>Feel free to contact Us: 790082762 (10:30 AM TO 6:30 PM)</p>
                    <div className='Address-info'>
                        <h5>Address</h5>
                        <p>Coporate office : Go Holidays Private Limited, 5f,Acre Scheme,97 Ranjit Avenue, SCO 54-55,D-Block,Amritsar,punjab 143002</p>
                        <p>Register Office: Go Holidays Rpivate Limited, Level 13, Platinum Techno Park,Plot No 17 & 18,Sector 30A, vashi,Navi mumbai,Maharashtra 400703</p>

                    </div>
                    <div className='NewsLetter'>
                        <h5>NewsLatter</h5>
                        <p>Subscribe to our newsletter to get all offers and upadtes</p>
                        <input  type="email" placeholder='Your email'></input>
                        <button>Subscribe</button>
                    </div>

                </div>
            
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;