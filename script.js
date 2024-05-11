//************************************************************************************************************/
//************************************************************************************************************/
//*******************************SCRIPT EFECTOS PRECIOS EN MOVIMIENTO FC0004 *********************************/
//************************************************************************************************************/
//************************************************************************************************************/

const cryptos = [
    { name: "Bitcoin", price: 45000 },
    { name: "Ethereum", price: 3200 },
    { name: "Binance Coin", price: 400 },
    { name: "Solana", price: 180 },
    { name: "Cardano", price: 2.3 },
    { name: "XRP", price: 1.2 },
    { name: "Polkadot", price: 40 },
    { name: "Dogecoin", price: 0.3 },
    { name: "Avalanche", price: 70 },
    { name: "Chainlink", price: 25 },
    { name: "Litecoin", price: 180 },
    { name: "Algorand", price: 1.5 },
    { name: "Tezos", price: 6 },
    { name: "Filecoin", price: 70 },
    { name: "Stellar", price: 0.4 }
  ];
  
  function crearPrecioElemento(crypto) {
    const precioElemento = document.createElement('div');
    precioElemento.classList.add('EPM0001-precio');
    precioElemento.textContent = `${crypto.name}: $${crypto.price}`;
    return precioElemento;
  }
  
  const preciosContainer = document.getElementById('EPM0001-prices-container');
  
  // Agregar cada precio al contenedor y calcular el ancho total
  let totalWidth = 0;
  cryptos.forEach(crypto => {
    const precioElemento = crearPrecioElemento(crypto);
    preciosContainer.appendChild(precioElemento);
    totalWidth += precioElemento.offsetWidth;
  });
  
  // Calcular la anchura del contenedor para mostrar precios por la derecha
  preciosContainer.style.width = `${totalWidth}px`;
  
  // Mover los precios de manera uniforme
  let desplazamiento = 0;
  function moverPrecios() {
    desplazamiento--;
    preciosContainer.style.transform = `translateX(${desplazamiento}px)`;
  
    // Cuando los precios se desplazan completamente fuera del contenedor, los reposiciona
    if (desplazamiento <= -totalWidth) {
      desplazamiento = preciosContainer.offsetWidth;
    }
  
    // Continuar la animación
    requestAnimationFrame(moverPrecios);
  }
  
  // Iniciar el movimiento de los precios
  moverPrecios();
  