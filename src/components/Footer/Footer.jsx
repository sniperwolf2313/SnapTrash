import React from 'react'


function Footer() {
 return (
   <div className='pt-5'>
   <footer className="bg-dark text-white pt-2 pb-4">
   <div className="container">
       <div className="row py-4 d-flex- align-items-center ">
       <div className="col md-12 text-center bg-dark mr-4">
           <a href="/" ><img src="/img/fb.png" width={40} alt=""/></a>
           <a href="/" ><img src="/img/whatsapp.png" width={40} alt=""/></a>
           <a href="/" ><img src="/img/twitter.png" width={40} alt=""/></a>
           <a href="/" ><img src="/img/ig.png" width={40} alt=""/></a>
           <a href="/" ><img src="/img/email.png" width={40} alt=""/></a>
       </div>
       </div>
   </div>
       <hr className="mb-4"/>


   <div className="container text-center text-md-start">
       <div className="row text-center text-md-start">
       <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
           <h6 className="text-uppercase mb-4 font-monospace text-info">SnapTrash</h6>
           <p>Descripción</p>
       </div>


       <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
           <h6 className="text-uppercase mb-4 font-monospace text-info">Menú</h6>
           <p>
           <a href="/" class="text-white">Inicio</a>
           </p>
           <p>
           <a href="/login" class="text-white">Iniciar Sesión</a>
           </p>
           <p>
           <a href="/signup" class="text-white">Registrarse</a>
           </p>
           <p>
           <a href="/help" class="text-white">Ayuda</a>
           </p>
           <p>
           <a href="/report" class="text-white">Nueva Solicitud</a>
           </p>
       </div>
       <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
           <h6 class="text-uppercase mb-4 font-monospace text-info">Contacto</h6>
           <p>snaptrash@dominio.com</p>
           <p>Teléfono: 265 98 32</p>
           <p>Celular: 300 702 46 70</p>
           <p>Calle 43 # 45-96</p>
       </div>
       </div>


       <hr className="mb-1"/>
       <div className="row align-items-center">
       <div className="col-md-8 col-lg-8">
           <p>Copyright 2023 © All rights reserved by:</p>
           <br/>
           <a href="/"><strong class="text-info">SnapTrash</strong></a>
       </div>
       </div>
   </div>
</footer>
</div>
 )
}


export default Footer