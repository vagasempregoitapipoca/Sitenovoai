import { Job, CarouselItem } from './types';

export const JOB_DATA: Job[] = [
  {
    id: '1',
    title: 'Assistente Administrativo',
    company: 'Distribuidora Itapipoca',
    location: 'Centro, Itapipoca - CE',
    type: 'Tempo Integral',
    datePosted: 'Hoje',
    salary: 'R$ 1.800,00',
    description: 'Estamos buscando um assistente administrativo organizado para auxiliar nas rotinas do escritório, controle de planilhas e atendimento ao cliente.',
    requirements: [
      'Ensino Médio Completo',
      'Experiência com Excel',
      'Boa comunicação',
      'Disponibilidade de horário'
    ]
  },
  {
    id: '2',
    title: 'Vendedor Interno',
    company: 'Moda Center',
    location: 'Itapipoca - CE',
    type: 'Tempo Integral',
    datePosted: 'Ontem',
    salary: 'Comissão + Salário Mínimo',
    description: 'Vaga para vendedor(a) com experiência em confecção. Necessário ser proativo e gostar de lidar com o público.',
    requirements: [
      'Experiência em vendas',
      'Simpatia e proatividade',
      'Ensino médio completo'
    ]
  },
  {
    id: '3',
    title: 'Entregador (Moto)',
    company: 'Express Logística',
    location: 'Itapipoca e Região',
    type: 'Freelance',
    datePosted: 'Há 2 dias',
    salary: 'Por entrega',
    description: 'Precisamos de entregadores com moto própria para entregas de pequenos volumes na região.',
    requirements: [
      'CNH A em dia',
      'Moto própria',
      'Conhecimento das rotas da cidade'
    ]
  },
  {
    id: '4',
    title: 'Recepcionista de Clínica',
    company: 'Clínica Saúde Total',
    location: 'Flores, Itapipoca - CE',
    type: 'Tempo Integral',
    datePosted: 'Há 3 dias',
    salary: 'R$ 1.600,00',
    description: 'Atendimento telefônico e presencial, agendamento de consultas e organização da recepção.',
    requirements: [
      'Informática básica',
      'Experiência em atendimento',
      'Organização'
    ]
  },
  {
    id: '5',
    title: 'Estagiário de Direito',
    company: 'Escritório Silva & Associados',
    location: 'Centro, Itapipoca - CE',
    type: 'Estágio',
    datePosted: 'Há 4 dias',
    salary: 'Bolsa R$ 800,00',
    description: 'Acompanhamento de processos, elaboração de peças simples e ida ao fórum.',
    requirements: [
      'Cursando Direito a partir do 4º semestre',
      'Boa escrita',
      'Proatividade'
    ]
  }
];

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/1200/400?random=1',
    title: 'Oportunidades em Itapipoca',
    subtitle: 'Encontre a vaga ideal para o seu perfil profissional.'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/1200/400?random=2',
    title: 'Grupos de Emprego VIP',
    subtitle: 'Receba vagas exclusivas diretamente no seu WhatsApp.'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/1200/400?random=3',
    title: 'Dicas de Carreira',
    subtitle: 'Melhore seu currículo e se prepare para entrevistas.'
  }
];
