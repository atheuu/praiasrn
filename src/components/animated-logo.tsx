"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Componente que controla a animação da logo
function AnimatedLogo() {
  // Definindo os textos completos para cada parte
  const fullBlue = "praias"; // parte azul
  const fullYellow = "rn";   // parte amarela

  // Estados para cada parte do texto
  const [blueText, setBlueText] = useState("p"); // inicia com "p"
  const [yellowText, setYellowText] = useState("rn"); // inicia com "rn" para formar "prn"
  /**
   * As fases da animação:
   * - "displayShort": mostra a versão curta ("prn") por um tempo
   * - "removeSuffix": remove a parte amarela (rn) para iniciar a expansão da parte azul
   * - "expandBlue": expande a parte azul de "p" para "praias" (um caractere a cada 150ms)
   * - "addSuffixFull": adiciona a parte amarela de forma animada para formar "praiasrn"
   * - "displayFull": mantém a versão completa por um tempo
   * - "removeSuffixFull": remove a parte amarela (rn) de forma animada
   * - "contractBlue": retrai a parte azul de "praias" para "p"
   * - "addSuffixShort": readiciona a parte amarela para voltar à versão curta ("prn")
   */
  const [phase, setPhase] = useState("displayShort");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (phase === "displayShort") {
      // Exibe "prn" por 1 segundo
      timeout = setTimeout(() => {
        setPhase("removeSuffix");
      }, 1000);
    } else if (phase === "removeSuffix") {
      // Remove a parte amarela instantaneamente para iniciar a expansão
      if (yellowText !== "") {
        setYellowText("");
      }
      setPhase("expandBlue");
    } else if (phase === "expandBlue") {
      // Expande a parte azul: adiciona um caractere de cada vez
      if (blueText.length < fullBlue.length) {
        timeout = setTimeout(() => {
          setBlueText(fullBlue.substring(0, blueText.length + 1));
        }, 150);
      } else {
        setPhase("addSuffixFull");
      }
    } else if (phase === "addSuffixFull") {
      // Adiciona a parte amarela de forma animada
      if (yellowText.length < fullYellow.length) {
        timeout = setTimeout(() => {
          setYellowText(fullYellow.substring(0, yellowText.length + 1));
        }, 150);
      } else {
        setPhase("displayFull");
      }
    } else if (phase === "displayFull") {
      // Exibe a versão completa por 1 segundo
      timeout = setTimeout(() => {
        setPhase("removeSuffixFull");
      }, 1000);
    } else if (phase === "removeSuffixFull") {
      // Remove a parte amarela letra por letra
      if (yellowText.length > 0) {
        timeout = setTimeout(() => {
          setYellowText(fullYellow.substring(0, yellowText.length - 1));
        }, 150);
      } else {
        setPhase("contractBlue");
      }
    } else if (phase === "contractBlue") {
      // Retrai a parte azul letra por letra até voltar a "p"
      if (blueText.length > 1) {
        timeout = setTimeout(() => {
          setBlueText(blueText.substring(0, blueText.length - 1));
        }, 150);
      } else {
        setPhase("addSuffixShort");
      }
    } else if (phase === "addSuffixShort") {
      // Readiciona a parte amarela para formar novamente "prn"
      if (yellowText.length < fullYellow.length) {
        timeout = setTimeout(() => {
          setYellowText(fullYellow.substring(0, yellowText.length + 1));
        }, 150);
      } else {
        setPhase("displayShort");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, blueText, yellowText, fullBlue, fullYellow]);

  return (
    <div className="text-2xl font-bold">
      <span className="text-blue-600">{blueText}</span>
      <span className="text-yellow-500">{yellowText}</span>
    </div>
  );
}

export default AnimatedLogo;
