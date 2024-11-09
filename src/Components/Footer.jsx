import React from 'react'
import { Container } from 'react-bootstrap'
import * as Icons from 'react-bootstrap-icons';
import TM1 from '../imgs/3m.png';
import TM2 from '../imgs/Debeer-Logo.png';
import TM3 from '../imgs/Logo-Nippon-Paint.png';
import TM4 from '../imgs/asianpaints.png';
import TM5 from '../imgs/castrol.png';
import TM6 from '../imgs/causway.png';
import TM7 from '../imgs/mobil-logo-1.png';
import TM8 from '../imgs/toyota.webp';
import TM9 from '../imgs/wuerth-logo.png';


const Footer = () => {
  return (
    <section className='f-sec '>

<div className="f-red px-3">
    <h4>PREMIUM AUTOCARE SERVICE PROVIDER</h4>
</div>

<div class="scroll-container">
        <div class="scrolling-images">
          
        <div class="scroll-img"><img src={TM1} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM2} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM3} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM4} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM5} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM1} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM6} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM7} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM8} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM9} alt="" srcset="" className='img-fluid text-dark' /></div>   
      
        <div class="scroll-img"><img src={TM1} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM2} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM3} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM4} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM5} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM1} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM6} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM7} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM8} alt="" srcset="" className='img-fluid text-dark' /></div>
        <div class="scroll-img"><img src={TM9} alt="" srcset="" className='img-fluid text-dark' /></div>

        </div>
    </div>

        <div className='cus'>
        
            <div className='footer-detail-container  d-lg-flex d-md-block'>

              <div className='footer-detail-1 text-light pt-5 mx-5'>
                <h4 className='fw-bold text-warning pb-2'> Sparkle Clean Car Wash</h4>
                <p className='f-detail-color '><span className='fw-bold'>Address:</span> 123 Main Street, Anytown, CA 12345</p>
                <p className='f-detail-color'><span  className='fw-bold'>Phone Number:</span> (123) 456-7890</p>
                <p className='f-detail-color'><span  className='fw-bold'>Email Address: </span>[email address removed]</p>
              </div>

              <div className='vertical-line'></div>

              <div className='footer-detail-1 text-light pt-5 mx-5 '>
                <h4 className='fw-bold text-warning pb-2 '> Openning Hours</h4>
                <p className='f-detail-color'><span className='fw-bold '>Mon - Fri:</span> 8.00 A.M - 6.00 P.M.</p>
                <p className='f-detail-color'><span className='fw-bold'>Sat - Sun:</span> 7.00 A.M - 6.00 P.M.</p>
              </div>

              <div className='vertical-line'></div>

              <div className='footer-detail-1 text-light pt-5 mx-5'>
                <h4 className='fw-bold text-warning pb-2'>Follow Us On</h4>
                <p className='f-detail-color'><Icons.Facebook className='fs-4'/><span className=' mx-2 fw-bold'>Facebook</span></p>
                <p className='f-detail-color'><Icons.Instagram className='fs-4'/><span className='mx-2 fw-bold'>Instagram</span></p>
              </div>

            </div>

        </div>
    </section>
  )
}

export default Footer
