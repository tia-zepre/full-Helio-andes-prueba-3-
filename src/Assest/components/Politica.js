
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





function Politica() {

   return (
      <div className="container mt-4">
         <h2 className="mb-3">Política de Privacidad y Condiciones de Uso</h2>

         <p>
            Bienvenido a nuestra plataforma de venta e información de paneles solares y soluciones fotovoltaicas. Al utilizar nuestro sitio web, usted acepta las condiciones descritas a continuación. 
         </p>

         <h4>1. Privacidad de Datos</h4>
         <p>
            Respetamos su privacidad y nos comprometemos a proteger la información personal que nos proporciona. Los datos recopilados (como nombre, correo electrónico y teléfono) se utilizan únicamente para procesar pedidos, mejorar nuestros servicios y enviar comunicaciones relacionadas con nuestros productos. No compartimos su información con terceros sin su consentimiento explícito.
         </p>

         <h4>2. Uso de la Información</h4>
         <p>
            Podemos utilizar datos agregados y anónimos para análisis estadísticos, mejorar la experiencia del usuario y optimizar nuestras campañas de marketing. Toda la información personal se almacena de manera segura y conforme a la normativa vigente sobre protección de datos.
         </p>

         <h4>3. Devoluciones y Garantías</h4>
         <p>
            - Los productos adquiridos tienen un plazo de devolución de <b>15 días hábiles</b> desde la fecha de recepción, siempre que se encuentren en su empaque original y sin uso. <br/>
            - Los paneles solares cuentan con garantía de <b>5 años</b> sobre defectos de fabricación y <b>25 años</b> de desempeño sobre generación energética, según especificaciones del fabricante. <br/>
            - Para realizar una devolución, por favor contáctenos a nuestro correo o número de soporte indicando el motivo y número de pedido. Los gastos de envío pueden ser asumidos por el cliente, salvo en casos de defecto del producto.
         </p>

         <h4>4. Seguridad</h4>
         <p>
            Implementamos medidas de seguridad para proteger su información personal y de pago. Sin embargo, ningún sistema de transmisión por internet o almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar seguridad absoluta.
         </p>

         <h4>5. Uso del Sitio</h4>
         <p>
            Usted se compromete a utilizar nuestro sitio web de manera responsable, sin realizar actividades fraudulentas o ilegales. Queda prohibida la copia no autorizada de contenido, imágenes o información del sitio para fines comerciales sin nuestro consentimiento.
         </p>

         <h4>6. Cambios en la Política</h4>
         <p>
            Nos reservamos el derecho de modificar esta política en cualquier momento. Cualquier cambio será publicado en esta página y entrará en vigor inmediatamente después de su publicación. Recomendamos revisar periódicamente esta sección.
         </p>

         <h4>7. Contacto</h4>
         <p>
            Si tiene alguna duda o inquietud sobre esta política o sobre nuestros productos, puede contactarnos a través de nuestro correo electrónico de soporte o por teléfono.
         </p>

         <p>
            <b>Correo:</b> soporte@tupanelsolar.cl <br/>
            <b>Teléfono:</b> +56 9 1234 5678
         </p>
      </div>
   );


}

export default Politica;