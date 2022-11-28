
alert("Bienvenido a tu compra")



const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt("¿Queres comprar alfajores, tortas o ambos?");
        cantidad = parseInt(prompt("¿Cuantos queres comprar?"));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case "alfajores":
                precio = 150;
                break;
            case "tortas":
                precio = 500;
                break;
            case "ambos":
                precio = 650;
                break;
            default:
                alert("Algun dato fue mal ingresado");
                precio = 0;
                cantidadValidada = 0;
        }


        totalCompra += precio * cantidadValidada;

        seguirComprando = confirm("Quiere seguir comprando?");

    } while (seguirComprando);

    const totalConDescuento = realizarDescuento(totalCompra);
    calcularEnvio(totalConDescuento);
   
    

    const totalConCuotas = calcularCuotas(totalCompra);

    confirm("Presiona aceptar para terminar tu compra")

};

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        if (cantidad <= 0) {
            alert("Debe ingresar una cantidad válida.")
        } else {
            alert("Debe agregar un número.")
        }
        cantidad = parseInt(prompt("¿Cuántos quiere comprar?"));
    }

    return cantidad;
};

const realizarDescuento = (totalCompra) => {
    let totalConDescuento = 0;

    if (totalCompra >= 3000) {
        totalConDescuento = totalCompra * 0.30;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
};

const calcularEnvio = (totalCompra) => {
    let tieneEnvioADomicilio = false;

    tieneEnvioADomicilio = confirm("¿Queres envío a domicilio?");

    if (tieneEnvioADomicilio && totalCompra >= 3000) {
        alert("Tenes envío gratis. El total de tu compra es $"+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 3000 && totalCompra !== 0) {
        totalCompra += 700;
        alert("El envío cuesta $700. El total de tu compra es $"+totalCompra);
    } else {
        alert("El total de tu compra es $"+totalCompra);
    }
};

const calcularCuotas = (totalCompra) => {
    let totalConCuotas = 0;

    
    parseInt(prompt("¿Queres pagar en 1, 3 o 6 cuotas?"))

 
    if (totalConCuotas = 1) {
        totalConCuotas = totalCompra * 0.10;
        alert("El total de tu compra es $"+totalCompra);
        return totalConCuotas
        
    }
    
    else if (totalConCuotas = 3) {
        totalConCuotas = totalCompra * 0.25; 
        alert("El total de tu compra es $"+totalCompra);
        
        
       
    }

    else if (totalConCuotas = 6) {
        totalConCuotas = totalCompra * 0.80;
        alert("El total de tu compra es $"+totalCompra);
        
        
    }           

    else {
        return totalConDescuento ;
    }
}



comprarProductos()