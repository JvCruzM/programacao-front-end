'use client'

import { useState } from "react";

export default function RandomButton() {
  const [number, setNumber] = useState(0);

  function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    setNumber(randomNum);
    document.getElementById("numero").textContent = randomNum; // Atualiza o conteúdo do elemento com id "numero"
  }

  return (
    <button
      onClick={generateRandomNumber}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Gerar Número Aleatório
    </button>
  );
}