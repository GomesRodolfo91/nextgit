'use client'; 
 import { useState } from "react"; 
 import estilos from "./barbearia.module.css"; 
 import Image from "next/image"; 
 import Logo from './assets/barbearia-logo.png'; 
 import Sun from './assets/sun.png'; 
 import Moon from './assets/moon.png'; 
 
 export default function Barbearia() { 
 
    const [alterarIcon, setAlterarIcon] = useState(false) 
    function FuncaoAlteraTema() { 
        setAlterarIcon(!alterarIcon) 
    } 
 
    return ( 
        <main id={estilos.principal} className={alterarIcon ? estilos.preto : estilos.branco}> 
            <div className={estilos.topo}> 
             <Image src={Logo} className={estilos.logo_img} /> 
                <div > 
                    <button onClick={FuncaoAlteraTema} className={alterarIcon ? estilos.botao_preto : estilos.botao_branco}> 
                        {alterarIcon ? <Image src={Sun} className={estilos.button_img} /> : <Image src={Moon} className={estilos.button_img} />} 
                    </button> 
                </div> 
            </div> 
            <div className={estilos.banner}></div> 
            <div className={estilos.textos}> 
                <h1>Bem-vindo a Barber Shop</h1> 
                <h3>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</h3> 
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p> 
                <p>S. Kelly</p> 
            </div> 
        </main> 
    ); 
 }