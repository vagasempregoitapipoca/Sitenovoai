import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Sobre Nós</h1>
        <div className="prose text-slate-600">
          <p className="mb-4">
            Bem-vindo ao <strong>Vagas Itapipoca Connect</strong>, o seu portal de confiança para encontrar oportunidades de emprego em Itapipoca e região.
          </p>
          <p className="mb-4">
            Nossa missão é conectar talentos locais às empresas que movem a economia da nossa cidade. Sabemos o quanto é difícil encontrar a vaga certa, por isso centralizamos as melhores oportunidades em um só lugar.
          </p>
          <p className="mb-4">
            Além de listar vagas, oferecemos ferramentas modernas, como grupos de WhatsApp para alertas rápidos e inteligência artificial para ajudar na elaboração do seu currículo e preparação para entrevistas.
          </p>
          <h2 className="text-xl font-bold text-slate-800 mt-6 mb-3">Nossos Valores</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Transparência nas informações.</li>
            <li>Apoio ao crescimento local.</li>
            <li>Inovação tecnológica acessível a todos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
