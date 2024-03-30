import React, { useEffect, useState } from 'react';
import './boo.css'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';




 function Main(){
  console.log("welcome home");

  const navigate=useNavigate()

  const [cat,setCat]=useState('madhan')


  

 

  

  const main=()=>{

    navigate('/')

  }

  const about=()=>{

    navigate('/about')

  }

  const order=()=>{

    navigate('/orh')

  }

  


  const cart=()=>{
    navigate('/cah')
  }


  
  

    return(

        <html>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
        <body>
        

        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Maddy's Spot</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link"  href="#" onClick={main}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#about" onClick={about}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#Product" onClick={order}>Order History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#contact" onClick={cart}>Cart History</a>
              </li>
              
            </ul>

            <ul class="li2 ">
                    <li class="nav-item  "><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                      </svg></a></li>
                    <li class="nav-item  "><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg></a></li>
                    <li class="nav-item  "><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg></a></li>
                  </ul>
            <button className="btn p-2 my-lg-0 my-2">Sign-in</button>
          </div>
        </div>
      </nav>

      <section id="home">
      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="Tha.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Tha.webp"class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Tha.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>


    <h1  className="text-center my-3">CATEGORIES</h1>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
                <div className="col">
                    <div className="card">
                        <img src="Tha.webp" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                          <h5 className="card-title"></h5>
                          <h4>MOBILES</h4>
                          <a href="#" className="btn signin " value="mobile" onClick={(event)=>
    {
     
   navigate('/cat',setCat(event.target.value),{replace:true},{state:{cat:cat}})
    }} >mobile</a>
                        
                        </div>
                    </div>

                      

                </div>

                <div className="col">
                    <div className="card" >
                        <img src="Tha.webp" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                          <h5 className="card-title"></h5>
                          <h4>AIRDOPES</h4>
                          <a href="#" className="btn signin" onClick={(event)=>
    {
     
   navigate('/cat',setCat(event.target.value),{replace:true},{state:{cat:cat}})
    }} value="airpod" >airpod</a>
                          
                        </div>
                    </div>

                      

                </div>

                <div className="col">
                    <div className="card" >
                        <img src="Tha.webp" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                          <h5 className="card-title"></h5>
                          <h4>POWER BANKS</h4>
                          <a href="#" className="btn signin " value="powerbank" onClick={(event)=>
    {
     
   navigate('/cat',setCat(event.target.value),{replace:true},{state:{cat:cat}})
    }}>powerbank</a>
                          
                        </div>
                      </div>

                      </div>

                </div>
  
  <section id="map">
            
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31442.769761898042!2d78.08724675819495!3d9.905095172498115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf8131bcf3a9%3A0xd627eeea47e41684!2sLakshmipuram%2C%20Jaihindpuram%2C%20Tamil%20Nadu%20625011!5e0!3m2!1sen!2sin!4v1708608195640!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </section>

    <section id="footer" class="bg-dark text-white text-start py-5 ps-5">

        <div class="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 me-5">


          <div class="a col col-10 col-md-6 col-lg-4   mx-auto me-md-auto my-3 ">
            <h1 class="ms-3  mx-sm-auto ms-md-5">Main Link</h1>
            
            <div class="d-flex my-3 justify-content-around ">
                <ul class="navbar-nav">
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                </ul>

                <ul class="navbar-nav ms-1">
                    <li>HOME</li>
                    <li>HOME</li>
                    <li>HOME</li>
                </ul>
            </div>
          </div>

          <div class="a col  col-10 col-md-6 col-lg-4  mx-auto mx-md-auto mx-lg-auto my-3">
            <h1 class="ms-3 mx-sm-auto ms-md-5">Main Link</h1>
            
            <div class="d-flex my-3 justify-content-around">
                <ul class="navbar-nav  ">
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                </ul>

                <ul class="navbar-nav ms-1">
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                </ul>
            </div>
          </div>

          <div class="w a col col-10 col-md-6 col-lg-4  mx-auto ms-md-auto ms-lg-auto my-3 border-dark">
            <h1 class="ms-3  mx-sm-auto ms-md-5">Main Link</h1>
            
            <div class="d-flex my-3 justify-content-around">

                
                <ul class="navbar-nav">
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                </ul>

                <ul class="navbar-nav ms-1">
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">HOME</li>
                </ul>
            </div>
          </div>
        </div>
       
        
    </section>

    <footer>Copyrights for my project@2024 MadhanKumar</footer>



   
    

 

    
 



 </body>

 </html>  
        

        

    )
}

export default Main