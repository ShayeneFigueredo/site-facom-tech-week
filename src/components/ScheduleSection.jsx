import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  MapPin, 
  Users, 
  Search, 
  Tag, 
  Coffee, 
  Award, 
  Code2, 
  Flame, 
  Sparkles,
  Filter,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const OFFICIAL_DAYS = [
  { dayNumber: 1, date: '21/10', weekDay: 'Quarta-feira', label: 'Dia 01 - 21/10', subtitle: 'Abertura & IA Aplicada' },
  { dayNumber: 2, date: '22/10', weekDay: 'Quinta-feira', label: 'Dia 02 - 22/10', subtitle: 'Carreiras, Automação & IA' },
  { dayNumber: 3, date: '23/10', weekDay: 'Sexta-feira', label: 'Dia 03 - 23/10', subtitle: 'Cloud, Cyber & AgroTech' },
  { dayNumber: 4, date: '24/10', weekDay: 'Sábado', label: 'Dia 04 - 24/10', subtitle: 'Hackathon' },
];

export const SCHEDULE_LEGEND = [
  { label: 'Patrocinadores', color: '#00d2ff', bg: 'rgba(0, 210, 255, 0.12)', border: 'rgba(0, 210, 255, 0.45)' },
  { label: 'Meninas na Computação', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.12)', border: 'rgba(244, 63, 94, 0.45)' },
  { label: 'WTDCC', color: '#f97316', bg: 'rgba(249, 115, 22, 0.12)', border: 'rgba(249, 115, 22, 0.45)' },
  { label: 'Aberto ao público', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.45)' },
];

/* 
  Official Schedule Grouped by Time Slots
  Unifies unified space name: "Auditório 1 & 2 (Hall 5R)"
  Identifies official sponsors: Kanastra, BIP, Bayer, Aimirim, Hyperflow, Bradesco
*/
export const GROUPED_SCHEDULE_DATA = {
  // ========================== DIA 01 ==========================
  1: [
    {
      time: '08:00 - 08:30',
      sessions: [
        {
          title: 'Abertura Oficial Manhã - 1º Dia',
          speaker: 'Comissão Organizadora FACOM / UFU',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Cerimônia',
          tag: null,
          description: 'Credenciamento, recepção de boas-vindas e início oficial da FACOM TechWeek 2026.',
        },
      ],
    },
    {
      time: '08:30 - 12:30',
      sessions: [
        {
          title: 'Mostra de Software',
          speaker: 'Estudantes, Pesquisadores & Comunidade Tech',
          location: 'Auditório 1 (5R - AB)',
          type: 'Exposição',
          tag: null,
          badgeNote: 'Aberto ao público',
          description: 'Apresentação e mostra de trabalhos, softwares e pesquisas de graduação e pós-graduação.',
          isHighlight: true,
        },
        {
          title: 'Da dor à startup: ideação e protótipo com IA como Copiloto Criativo',
          speaker: 'Frederico Vilela',
          location: 'Lab 4',
          type: 'Workshop Hands-on',
          tag: null,
          timeOverride: '09:00 - 12:00',
          description: 'Metodologias práticas para identificar problemas reais e construir protótipos funcionais com IA generativa.',
        },
      ],
    },
    {
      time: '12:30 - 13:30',
      isBreak: true,
      sessions: [
        {
          title: 'Intervalo de Almoço',
          speaker: 'Pausa Geral',
          location: 'Campus Santa Mônica',
          type: 'Intervalo',
          description: 'Pausa para almoço e descanso para as trilhas da tarde.',
        },
      ],
    },
    {
      time: '13:30 - 14:00',
      sessions: [
        {
          title: 'Abertura Tarde - 1º Dia',
          speaker: 'Comissão Organizadora',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Recepção',
          tag: null,
          description: 'Recepção e avisos sobre as sessões técnicas do período vespertino.',
        },
      ],
    },
    {
      time: '14:00 - 15:30',
      sessions: [
        {
          title: 'Inteligência Artificial na Indústria Aeronáutica: Da Pesquisa à Aplicação Real',
          speaker: 'Me. Renan Garcia Rosa',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra Magna',
          tag: 'WTDCC',
          tagColor: '#f97316',
          timeOverride: '14:00 - 15:20',
          description: 'Desafios críticos de engenharia, sistemas embarcados e aplicação prática de IA no setor aeroespacial.',
          isHighlight: true,
        },
        {
          title: 'Diálogo Meninas na Computação: #Include <Girls> e Gurias na Computação UNIPAMPA',
          speaker: '#Include <Girls> & Gurias na Computação',
          location: 'Sala 1B126',
          type: 'Roda de Conversa',
          tag: 'Meninas na Computação',
          tagColor: '#f43f5e',
          timeOverride: '14:00 - 15:30',
          description: 'Troca de vivências, iniciativas de acolhimento e incentivo à presença feminina na computação.',
        },
      ],
    },
    {
      time: '15:30 - 17:00',
      sessions: [
        {
          title: 'Arquitetura de Dados Moderna: Data Lake, Data Warehouse e Lakehouse na Prática',
          speaker: 'Especialistas em Engenharia de Dados',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra Técnica',
          tag: null,
          description: 'Conceitos fundamentais e aplicados de engenharia de dados: comparativo prático entre Data Lake, Data Warehouse e a arquitetura unificada de Lakehouse, abordando governança, performance e casos reais.',
          isHighlight: true,
        },
        {
          title: 'Apresentações de Pôsteres',
          speaker: 'WTDCC - IC/TCC',
          location: 'Bloco 5R-B - Saguão Principal',
          type: 'Apresentação de Pôsteres',
          tag: 'WTDCC',
          tagColor: '#f97316',
          timeOverride: '15:30 - 17:30',
          description: 'Sessão de Pôsteres do WTDCC (Iniciação Científica e TCC).',
          isHighlight: true,
        },
      ],
    },
    {
      time: '16:30 - 18:00',
      sessions: [
        {
          title: 'Palestra Magna: Dra. Daniela Ushizima (Berkeley Institute for Data Science)',
          speaker: 'Daniela Ushizima, PhD',
          location: 'Auditório 1 (5R-AB)',
          type: 'Palestra',
          tag: null,
          description: 'Pesquisa avançada em ciência de dados e inteligência artificial pelo renomado instituto da UC Berkeley.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '17:00 - 18:30',
      sessions: [
        {
          title: 'Seu aplicativo viralizou. E agora? Você decide se ele sobrevive.',
          speaker: 'Especialistas em Engenharia de Software',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra de Engenharia de Software',
          tag: null,
          description: 'O que acontece quando o tráfego explode da noite para o dia? Estratégias reais de infraestrutura, mitigação de gargalos de banco de dados, observabilidade e tomada de decisão sob alta pressão.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '17:30 - 19:00',
      sessions: [
        {
          title: 'Palestra do VI Meninas na Computação',
          speaker: 'Profa. Dra. Maria da Graça Campos Pimentel (ICMC / USP)',
          location: 'Auditório 1 (5R - AB)',
          type: 'Palestra Convidada',
          tag: 'Meninas na Computação',
          tagColor: '#f43f5e',
          badgeNote: 'Aberto ao público',
          description: 'História, protagonismo científico e os horizontes da pesquisa em ciência da computação no Brasil.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '18:30 - 19:00',
      isBreak: true,
      sessions: [
        {
          title: 'Abertura Coffee',
          speaker: 'Recepção & Confraternização',
          location: 'Hall 5R',
          type: 'Coffee Break',
          description: 'Coffee break de boas-vindas e momento de networking e recepção dos participantes antes da Solenidade Oficial.',
        },
      ],
    },
    {
      time: '19:00 - 20:30',
      sessions: [
        {
          title: 'Mesa de Abertura Solene da FACOM TechWeek',
          speaker: 'Diretoria FACOM, Reitoria UFU & Convidados de Honra',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Sessão Solene',
          tag: null,
          description: 'Abertura oficial solene do evento com representantes acadêmicos e do setor produtivo de tecnologia. Contará com uma apresentação especial da Orquestra Popular do Cerrado.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '21:00 - 22:30',
      sessions: [
        {
          title: 'Product Engineering na Kanastra: da Ideia ao Código com IA',
          speaker: 'Lucas Azambuja (Partner @ Kanastra)',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Keynote de Engenharia',
          tag: 'Patrocinador',
          sponsorName: 'Kanastra',
          tagColor: '#00d2ff',
          description: 'Como uma fintech de alto crescimento estrutura seus times de engenharia e potencializa a entrega com IA. Lucas Azambuja é Associate Partner da Kanastra. Com mais de 15 anos de carreira e passagens por PagBank e Pravaler, é especialista em performance e sistemas escaláveis.',
          isHighlight: true,
          isSponsor: true,
        },
      ],
    },
  ],

  // ========================== DIA 02 ==========================
  2: [
    {
      time: '08:00 - 08:30',
      sessions: [
        {
          title: 'Abertura Manhã - 2º Dia',
          speaker: 'Comissão Organizadora',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Recepção',
          tag: null,
          description: 'Início do segundo dia de atividades com comunicados e direcionamentos das salas.',
        },
      ],
    },
    {
      time: '09:00 - 12:30',
      sessions: [
        {
          title: 'Construindo o Futuro com Dados e IA usando Databricks e PySpark',
          speaker: 'Pedro Henrique Magalhães de Souza',
          location: 'Lab 4',
          type: 'Workshop Técnico',
          tag: null,
          description: 'Hands-on com processamento massivo de dados distribuídos, arquitetura Lakehouse e pipelines com PySpark.',
          isHighlight: true,
        },
        {
          title: 'Mesa Redonda sobre Estágio, Carreira e Mercado de Trabalho',
          speaker: 'Líderes de Tech & Recrutadores Convidados',
          location: 'Auditório 1 (5R - AB)',
          type: 'Mesa Redonda',
          tag: 'Aberto ao público',
          tagColor: '#10b981',
          timeOverride: '10:30 - 12:30',
          description: 'Orientações práticas de contratação, competências mais buscadas e caminhos de inserção profissional.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '12:30 - 13:30',
      isBreak: true,
      sessions: [
        {
          title: 'Intervalo de Almoço',
          speaker: 'Pausa Geral',
          location: 'Campus Santa Mônica',
          type: 'Intervalo',
          description: 'Pausa para almoço.',
        },
      ],
    },
    {
      time: '13:30 - 14:00',
      sessions: [
        {
          title: 'Abertura Tarde - 2º Dia',
          speaker: 'Comissão Organizadora',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Recepção',
          tag: null,
          description: 'Recepção dos participantes para a grade de palestras da tarde e início do minicurso online da LEVTY (13h30 às 15h30).',
        },
      ],
    },
    {
      time: '14:00 - 15:30',
      sessions: [
        {
          title: 'Metodologias ágeis: teoria e prática na LEVTY',
          speaker: 'Izabela Brant & Samara Lobato (Agile Masters @ LEVTY)',
          location: 'Online',
          type: 'Minicurso Online',
          tag: null,
          timeOverride: '13:30 - 15:30',
          badgeNote: 'Online (Ao Vivo)',
          isHighlight: true,
          description: `O minicurso “Metodologias ágeis: teoria e prática na LEVTY” tem o objetivo de discutir os conceitos teóricos, principalmente do framework Scrum, que orientam a gestão dos projetos dentro da empresa, e propor uma dinâmica prática, abordando a ferramenta do planning poker, para mostrar a aplicabilidade no dia a dia dos times de desenvolvimento de software.

Duração (2 horas):
• 45 minutos - parte teórica
• 10 minutos - pausa
• 45 minutos - dinâmica
• 20 minutos - perguntas

Minibiografia das Ministrantes:
• Izabela Brant: Agile Master na LEVTY desde outubro de 2021. Formada em Engenharia de Sistemas pela UFMG, possui certificação PSM1 (Professional Scrum Master). Atua na gestão de times e de projetos dos setores de telecom e de finanças em grandes clientes como: Alloha, Master Internet e BS2.
• Samara Lobato: Agile Master na LEVTY desde novembro de 2023. Formada em Letras pela UFMG, possui certificação PSM1 (Professional Scrum Master) e KSD (Kanban System Design). Atua na gestão de times e de projetos do setor industrial em grandes clientes como: Axia Energia, Certisign, CSN, Petrobras, Serasa, entre outros.`,
        },
        {
          title: 'RESERVA BIP - Sessão Corporativa de Tecnologia',
          speaker: 'Equipe de Consultoria & Engenharia BIP',
          location: 'Auditório 1 (5R - AB)',
          type: 'Palestra Corporativa',
          tag: 'Patrocinador',
          sponsorName: 'BIP',
          tagColor: '#00d2ff',
          description: 'Apresentação exclusiva da consultoria global BIP sobre inovação, transformação digital e cases complexos.',
          isSponsor: true,
          isHighlight: true,
        },
        {
          title: 'Um doutor no mercado: o que a pós-graduação me ensinou, o que o mercado exigiu e caminhos para pesquisadores em Computação',
          speaker: 'Dr. Dalí Freire Dias dos Santos',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra',
          tag: 'WTDCC',
          tagColor: '#f97316',
          timeOverride: '14:00 - 15:20',
          description: 'O valor da pesquisa acadêmica aplicada ao mercado corporativo de alta tecnologia e liderança técnica.',
          isHighlight: true,
        },
        {
          title: 'SEBRAE - Mercado Digital de Pequenos Negócios',
          speaker: 'SEBRAE',
          location: 'Outros Espaços / Salas',
          type: 'Workshop de Empreendedorismo',
          tag: null,
          description: 'Modelos de negócios inovadores, canais digitais e estratégia de crescimento para startups e microempresas.',
        },
      ],
    },
    {
      time: '15:30 - 17:00',
      sessions: [
        {
          title: 'Software-Defined Automation: como atualizar uma fábrica que não pode desligar',
          speaker: 'Equipe Técnica Aimirim',
          location: 'Auditório 1 (5R - AB)',
          type: 'Palestra de Automação',
          tag: 'Patrocinador',
          sponsorName: 'Aimirim',
          tagColor: '#00d2ff',
          description: 'Automação industrial crítica controlada por software, edge computing e estratégias reais de zero downtime.',
          isSponsor: true,
          isHighlight: true,
        },
        {
          title: 'Depois do Deploy: IA generativa para entender mudanças e incidentes em produção',
          speaker: 'Especialistas de Engenharia e IA (Bradesco)',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra Corporativa',
          tag: null,
          isSponsor: false,
          description: 'Observabilidade avançada com LLMs, análise de incidentes em tempo real e confiabilidade em sistemas bancários.',
          isHighlight: true,
        },
        {
          title: 'SEBRAE - Comportamento Empreendedor na Era Digital',
          speaker: 'SEBRAE',
          location: 'Outros Espaços / Salas',
          type: 'Workshop de Empreendedorismo',
          tag: null,
          description: 'Postura ágil, inteligência emocional e resolução criativa de problemas no setor tecnológico.',
        },
        {
          title: 'Apresentações de Pôsteres',
          speaker: 'WTDCC - ESP/MS/DR',
          location: 'Bloco 5R-B - Saguão Principal',
          type: 'Apresentação de Pôsteres',
          tag: 'WTDCC',
          tagColor: '#f97316',
          timeOverride: '15:30 - 17:30',
          description: 'Sessão de Pôsteres do WTDCC (Especialização, Mestrado e Doutorado).',
          isHighlight: true,
        },
      ],
    },
    {
      time: '17:00 - 18:30',
      sessions: [
        {
          title: 'Segurança de IA',
          speaker: 'Daniela (LuizaLabs)',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra de Cibersegurança',
          tag: 'Meninas na Computação',
          tagColor: '#f43f5e',
          description: 'Vulnerabilidades em pipelines de modelos de linguagem, proteção de dados e governança em IA corporativa.',
          isHighlight: true,
        },
        {
          title: 'HyperFlow',
          speaker: 'Equipe Hyperflow',
          location: 'Lab 4',
          type: 'Workshop Hands-on',
          tag: 'Patrocinador',
          sponsorName: 'Hyperflow',
          tagColor: '#00d2ff',
          description: 'Sessão prática no laboratório Lab 4 com a equipe da Hyperflow sobre automação inteligente de processos, orquestração de fluxos e integração de modelos de IA.',
          isSponsor: true,
          isHighlight: true,
        },
        {
          title: 'SEBRAE pela sua Carreira Profissional',
          speaker: 'SEBRAE',
          location: 'Outros Espaços / Salas',
          type: 'Palestra de Carreira',
          tag: null,
          description: 'Construção de autoridade, posicionamento profissional e planejamento estratégico de carreira tech.',
        },
      ],
    },
    {
      time: '18:30 - 19:00',
      isBreak: true,
      sessions: [
        {
          title: 'Intervalo Coffee Break & Networking',
          speaker: 'Confraternização Geral',
          location: 'Hall 5R',
          type: 'Coffee Break',
          description: 'Recarga com café e bate-papo no hall principal.',
        },
      ],
    },
    {
      time: '19:00 - 20:30',
      sessions: [
        {
          title: 'Painel do VI Meninas na Computação - Empreendedorismo Feminino na Computação',
          speaker: 'Maria Camila & Convidadas',
          location: 'Auditório 1 (5R - AB)',
          type: 'Painel Especial',
          tag: 'Meninas na Computação',
          tagColor: '#f43f5e',
          description: 'Mulheres empreendedoras compartilhando desafios, trajetórias e estratégias de liderança no setor de tecnologia.',
          isHighlight: true,
        },
        {
          title: 'Dev que aparece cresce',
          speaker: 'Samuel Amorim',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra de Carreira',
          tag: null,
          description: 'Dicas práticas para desenvolvedores ampliarem seu impacto, visibilidade e crescimento na carreira de software.',
        },
      ],
    },
    {
      time: '20:30 - 22:00',
      sessions: [
        {
          title: 'Carreira na AWS e a Influência da IA',
          speaker: 'Helio Soares',
          location: 'Auditório 1 (5R-AB)',
          type: 'Palestra',
          tag: null,
          description: 'A influência da Inteligência Artificial no mercado e nas carreiras dentro da AWS.',
          isHighlight: true,
        },
        {
          title: 'Lucas Democh IA - O Estado da Arte em Inteligência Artificial',
          speaker: 'Lucas Democh',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra Magna',
          tag: null,
          description: 'Uma imersão nas mais recentes fronteiras de IA generativa e suas aplicações no mercado moderno.',
          isHighlight: true,
        },
      ],
    },
  ],

  // ========================== DIA 03 ==========================
  3: [
    {
      time: '08:00 - 08:30',
      sessions: [
        {
          title: 'Abertura Manhã - 3º Dia',
          speaker: 'Comissão Organizadora',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Recepção',
          tag: null,
          description: 'Abertura do terceiro dia com instruções para as trilhas de sexta e preparação do Hackathon.',
        },
      ],
    },
    {
      time: '08:30 - 10:00',
      sessions: [
        {
          title: 'Painel: Trabalhando como Dev na Gringa',
          speaker: 'Devs Brasileiros em Empresas Globais',
          location: 'Auditório 1 (5R - AB)',
          type: 'Painel Internacional',
          tag: null,
          description: 'Processos seletivos no exterior, trabalho remoto internacional, remuneração em dólar e adaptação cultural.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '10:00 - 12:30',
      sessions: [
        {
          title: 'Minicurso Prático de Programação & Ferramentas Modernas',
          speaker: 'Instrutores Técnicos Convidados',
          location: 'Lab 4',
          type: 'Minicurso Hands-on',
          tag: null,
          description: 'Sessão intensiva em laboratório aplicando ferramentas e frameworks atuais do mercado.',
        },
      ],
    },
    {
      time: '12:30 - 13:30',
      isBreak: true,
      sessions: [
        {
          title: 'Intervalo de Almoço',
          speaker: 'Pausa Geral',
          location: 'Campus Santa Mônica',
          type: 'Intervalo',
          description: 'Pausa para almoço.',
        },
      ],
    },
    {
      time: '13:30 - 14:00',
      sessions: [
        {
          title: 'Abertura Tarde - 3º Dia',
          speaker: 'Comissão Organizadora',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Recepção',
          tag: null,
          description: 'Boas-vindas da tarde e orientações sobre os desafios técnicos.',
        },
      ],
    },
    {
      time: '14:00 - 15:30',
      sessions: [
        {
          title: 'Além da VPS: Como construir arquiteturas que escalam com Google Cloud',
          speaker: 'Montanha (LayerX)',
          location: 'Auditório 1 (5R - AB)',
          type: 'Palestra de Cloud',
          tag: null,
          description: 'Práticas de arquitetura em nuvem no GCP, microserviços em containers, resiliência e alta disponibilidade.',
          isHighlight: true,
        },
        {
          title: 'O impacto da ciência para além dos artigos e indicadores',
          speaker: 'Dra. Danielli Araújo Lima',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra',
          tag: 'WTDCC',
          tagColor: '#f97316',
          timeOverride: '14:00 - 15:20',
          description: 'Como transformar produção acadêmica e pesquisa de pós-graduação em inovação palpável na sociedade.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '15:30 - 17:00',
      sessions: [
        {
          title: 'Kanastra: DevOps e Dados',
          speaker: 'Henrique Brito Silva (Lead Engineer) & Odelmo Junior (Data Engineer)',
          location: 'Auditório 1 (5R - AB)',
          type: 'Palestra Técnica',
          tag: 'Patrocinador',
          sponsorName: 'Kanastra',
          tagColor: '#00d2ff',
          description: 'Henrique Brito é Engineering Lead da Kanastra, onde entrou em 2022 como o primeiro membro do time de dados. Ex-aluno da UFU (Engenharia Mecatrônica), atua com infraestrutura e plataforma. Odelmo Junior é Senior Data Engineer da Kanastra e especialista em Apache Spark e dados em larga escala. Ex-aluno da UFU (graduação e mestrado em IA), passou por Ambev e Databricks.',
          isSponsor: true,
          isHighlight: true,
        },
        {
          title: 'Carreira em Cyber',
          speaker: 'Gustavo Pinto',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra de Cibersegurança',
          tag: null,
          description: 'Oportunidades em cibersegurança, certificações essenciais, times defensivos e ofensivos no Brasil e no exterior.',
        },
        {
          title: 'Apresentações de Pôsteres',
          speaker: 'WTDCC - IC/TCC',
          location: 'Bloco 5R-B - Saguão Principal',
          type: 'Apresentação de Pôsteres',
          tag: 'WTDCC',
          tagColor: '#f97316',
          timeOverride: '15:30 - 17:30',
          description: 'Sessão de Pôsteres do WTDCC (Iniciação Científica e TCC).',
          isHighlight: true,
        },
      ],
    },
    {
      time: '17:00 - 18:30',
      sessions: [
        {
          title: 'Impacto da Transformação Digital e da IA no Agronegócio',
          speaker: 'Especialistas de Inovação Digital (Bayer)',
          location: 'Auditório 1 (5R - AB)',
          type: 'Palestra Corporativa',
          tag: 'Patrocinador',
          sponsorName: 'Bayer',
          tagColor: '#00d2ff',
          description: 'Visão computacional no campo, análise preditiva, biotecnologia e a força da computação no agronegócio moderno.',
          isSponsor: true,
          isHighlight: true,
        },
        {
          title: 'Trabalhando com Produto',
          speaker: 'Danielle Ceretta',
          location: 'Auditório 2 (Hall 5R)',
          type: 'Palestra de Gestão de Produto',
          tag: null,
          description: 'Rotina de Product Management, priorização de funcionalidades, métricas de resultado e alinhamento com stakeholders.',
        },
      ],
    },
    {
      time: '18:30 - 19:00',
      isBreak: true,
      sessions: [
        {
          title: 'Intervalo Geral',
          speaker: 'Pausa Geral',
          location: 'Hall 5R',
          type: 'Intervalo',
          description: 'Intervalo antes da grande plenária da noite.',
        },
      ],
    },
    {
      time: '19:00 - 20:30',
      sessions: [
        {
          title: 'PAINEL: O Futuro & Fronteiras da Inteligência Artificial - De UberlândIA ao Vale do Silício: como a Langflow se tornou referência mundial em Inteligência Artificial e foi reconhecida pela NVIDIA, IBM e outros gigantes da tecnologia',
          speaker: 'Ferdinando Kun & Rodrigo Nader',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Painel Magna Plenário',
          tag: null,
          description: 'Debate com Ferdinando Kun e Rodrigo Nader sobre a trajetória da Langflow, inovação em IA, parcerias com gigantes globais da tecnologia e as novas fronteiras do mercado.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '20:30 - 21:30',
      sessions: [
        {
          title: 'Mesa de Encerramento e Apresentação dos Desafios do Hackathon',
          speaker: 'Comissão Organizadora, Patrocinadores & Mentores',
          location: 'Auditório 1 & 2 (Hall 5R)',
          type: 'Sessão Plenária',
          tag: null,
          description: 'Apresentação detalhada dos regulamentos, APIs, problemas reais e critérios de avaliação do Hackathon.',
          isHighlight: true,
        },
      ],
    },
    {
      time: '21:30 - 22:30',
      sessions: [
        {
          title: 'Happy Hour Oficial TechWeek',
          speaker: 'Confraternização Geral',
          location: 'Espaço Convivência FACOM / UFU',
          type: 'Networking & Festa',
          tag: null,
          description: 'Música, interação e comemoração do encerramento das palestras com todos os inscritos e parceiros.',
          isHighlight: true,
        },
      ],
    },
  ],

  // ========================== DIA 04 (HACKATHON) ==========================
  4: [
    {
      time: '08:00 - 22:00',
      sessions: [
        {
          title: 'Hackathon',
          speaker: 'Maratona de Programação & Inovação',
          location: 'SEBRAE',
          type: 'Hackathon',
          tag: 'Aberto ao público',
          tagColor: '#10b981',
          badgeNote: 'Aberto ao público',
          description: 'Maratona presencial de ideação, prototipação e desenvolvimento de soluções tecnológicas, com mentorias de especialistas, apresentação de pitches diante da banca e premiação.',
          isHighlight: true,
        },
      ],
    },
  ],
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);
  const [locationFilter, setLocationFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const currentDaySlots = GROUPED_SCHEDULE_DATA[activeDay] || [];

  // Unified available locations for filtering (clean list without duplicates)
  const availableLocations = useMemo(() => {
    const locs = new Set();
    currentDaySlots.forEach((slot) => {
      slot.sessions.forEach((s) => {
        if (s.location && !slot.isBreak) {
          locs.add(s.location);
        }
      });
    });
    return Array.from(locs);
  }, [currentDaySlots]);

  // Filter time slots and their inner sessions
  const filteredSlots = useMemo(() => {
    return currentDaySlots
      .map((slot) => {
        // Filter sessions within this slot
        const validSessions = slot.sessions.filter((session) => {
          // Location filter
          if (locationFilter !== 'all' && session.location !== locationFilter) {
            return false;
          }

          // Category / Tag filter
          if (tagFilter !== 'all') {
            if (tagFilter === 'Patrocinadores') {
              const sponsorKeywords = ['bip', 'kanastra', 'bayer', 'aimirim', 'hyperflow'];
              const sessionText = `${session.title || ''} ${session.speaker || ''} ${session.description || ''} ${session.sponsorName || ''}`.toLowerCase();
              const involvesSponsor = session.isSponsor || 
                                      session.tag === 'Patrocinador' || 
                                      sponsorKeywords.some((sp) => sessionText.includes(sp));
              if (!involvesSponsor) return false;
            } else if (tagFilter === 'Aberto ao público') {
              if (session.tag !== 'Aberto ao público' && !session.badgeNote?.includes('Aberto')) {
                return false;
              }
            } else if (session.tag !== tagFilter && session.badgeNote !== tagFilter) {
              return false;
            }
          }

          // Search term filter
          if (searchTerm.trim() !== '') {
            const query = searchTerm.toLowerCase();
            const matchesTitle = session.title?.toLowerCase().includes(query);
            const matchesSpeaker = session.speaker?.toLowerCase().includes(query);
            const matchesLocation = session.location?.toLowerCase().includes(query);
            const matchesDesc = session.description?.toLowerCase().includes(query);
            const matchesSponsor = session.sponsorName?.toLowerCase().includes(query);
            if (!matchesTitle && !matchesSpeaker && !matchesLocation && !matchesDesc && !matchesSponsor) {
              return false;
            }
          }

          return true;
        });

        if (validSessions.length === 0) {
          return null;
        }

        return {
          ...slot,
          sessions: validSessions,
        };
      })
      .filter(Boolean);
  }, [currentDaySlots, locationFilter, tagFilter, searchTerm]);

  return (
    <section
      id="programacao"
      style={{
        padding: '6.5rem 0',
        position: 'relative',
        background:
          'radial-gradient(circle at 50% 20%, #082159 0%, #04143d 50%, #020b24 100%), #030e2c',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 153, 255, 0.2)',
        borderBottom: '1px solid rgba(0, 153, 255, 0.2)',
      }}
    >
      {/* Background Matrix Pattern */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative ambient glows */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px' }}>
        {/* Section Title */}
        <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-tag">
            <Clock size={13} style={{ marginRight: '6px' }} />
            GRADE OFICIAL 2026
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginTop: '0.75rem',
              marginBottom: 0,
            }}
          >
            PROGRAMAÇÃO <span style={{ color: '#00d2ff' }}>OFICIAL</span>
          </h2>
          <p
            style={{
              color: '#cbd5e1',
              marginTop: '0.85rem',
              fontSize: '1.02rem',
              maxWidth: '680px',
              margin: '0.85rem auto 0 auto',
              lineHeight: 1.6,
            }}
          >
            Navegue pelos horários e confira as palestras, workshops e trilhas simultâneas em cada espaço do evento.
          </p>
        </div>

        {/* Legend Filter Bar (Without generic 'Confirmado') */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto 2.25rem auto',
            padding: '0.9rem 1.4rem',
            background: 'rgba(6, 18, 52, 0.75)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.82rem', fontWeight: 600 }}>
            <Tag size={15} color="#38bdf8" />
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Categorias em Destaque:</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.65rem' }}>
            {SCHEDULE_LEGEND.map((leg, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTagFilter(tagFilter === leg.label ? 'all' : leg.label)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: tagFilter === leg.label ? leg.bg : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${tagFilter === leg.label ? leg.border : 'rgba(255, 255, 255, 0.12)'}`,
                  color: tagFilter === leg.label ? leg.color : '#cbd5e1',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: leg.color,
                    boxShadow: `0 0 6px ${leg.color}`,
                  }}
                />
                {leg.label}
              </button>
            ))}

            {tagFilter !== 'all' && (
              <button
                type="button"
                onClick={() => setTagFilter('all')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: '0.2rem 0.4rem',
                  fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Limpar filtro
              </button>
            )}
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div
          className="day-tabs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            margin: '0 auto 2.25rem auto',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          {OFFICIAL_DAYS.map((day) => {
            const isActive = activeDay === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => {
                  setActiveDay(day.dayNumber);
                  setLocationFilter('all');
                }}
                className="day-tab-btn"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  padding: '1.2rem 1.35rem',
                  borderRadius: '1rem',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(0, 153, 255, 0.28) 0%, rgba(6, 18, 52, 0.95) 100%)'
                    : 'rgba(6, 18, 52, 0.55)',
                  border: isActive
                    ? '1.5px solid #00d2ff'
                    : '1px solid rgba(56, 189, 248, 0.2)',
                  boxShadow: isActive
                    ? '0 10px 25px rgba(0, 153, 255, 0.25), inset 0 0 15px rgba(0, 210, 255, 0.1)'
                    : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #00d2ff, #7928ca)',
                    }}
                  />
                )}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.4rem' }}>
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: isActive ? '#00d2ff' : '#ffffff',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {day.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.55rem',
                      borderRadius: '9999px',
                      background: isActive ? 'rgba(0, 210, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      color: isActive ? '#38bdf8' : '#94a3b8',
                      fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                    }}
                  >
                    {day.weekDay}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: isActive ? '#e2e8f0' : '#94a3b8',
                    lineHeight: 1.4,
                    fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {day.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            margin: '0 auto 2.25rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Space / Location Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={13} color="#38bdf8" />
              Filtrar Espaço:
            </span>
            <button
              type="button"
              onClick={() => setLocationFilter('all')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: locationFilter === 'all' ? 'rgba(0, 210, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: locationFilter === 'all' ? '1px solid #00d2ff' : '1px solid rgba(255, 255, 255, 0.1)',
                color: locationFilter === 'all' ? '#00d2ff' : '#cbd5e1',
                transition: 'all 0.2s ease',
                fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              Todos os Espaços
            </button>
            {availableLocations.map((loc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLocationFilter(locationFilter === loc ? 'all' : loc)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: locationFilter === loc ? 'rgba(0, 210, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: locationFilter === loc ? '1px solid #00d2ff' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: locationFilter === loc ? '#00d2ff' : '#cbd5e1',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            className="schedule-search-wrap"
            style={{
              position: 'relative',
              minWidth: '240px',
              flex: '1 1 240px',
              maxWidth: '360px',
            }}
          >
            <Search
              size={15}
              color="#94a3b8"
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <input
              type="text"
              placeholder="Buscar tema, palestrante ou patrocinador..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 1rem 0.55rem 2.25rem',
                borderRadius: '8px',
                background: 'rgba(6, 18, 52, 0.75)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#ffffff',
                fontSize: '0.84rem',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
                fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = '#00d2ff')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(56, 189, 248, 0.3)')}
            />
          </div>
        </div>

        {/* Schedule Timeline Grouped by Time Block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {filteredSlots.length === 0 ? (
            <div
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                background: 'rgba(6, 18, 52, 0.5)',
                borderRadius: '1rem',
                border: '1px dashed rgba(56, 189, 248, 0.25)',
              }}
            >
              <Search size={36} color="#38bdf8" style={{ marginBottom: '1rem', opacity: 0.7 }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.1rem', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-heading)' }}>
                Nenhuma atividade encontrada com os filtros selecionados
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0, fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>
                Tente ajustar a busca ou limpar os filtros de categoria e espaço.
              </p>
            </div>
          ) : (
            filteredSlots.map((slot, sIdx) => {
              // Special display for Coffee Break or Lunch
              if (slot.isBreak) {
                const brk = slot.sessions[0];
                return (
                  <div
                    key={sIdx}
                    className="timeline-slot-row"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '170px 1fr',
                      gap: '1.75rem',
                      alignItems: 'center',
                    }}
                  >
                    {/* Time Column (Left) - Clean Typography without card */}
                    <div
                      className="time-col-left"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingTop: '0.2rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#f59e0b',
                          fontWeight: 900,
                          fontSize: '1.05rem',
                          fontFamily: 'var(--font-heading)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        <Coffee size={17} color="#f59e0b" style={{ flexShrink: 0 }} />
                        <span>{slot.time}</span>
                      </div>
                    </div>

                    {/* Break Card (Right) */}
                    <div
                      style={{
                        padding: '1rem 1.4rem',
                        background: 'rgba(15, 23, 42, 0.65)',
                        border: '1px dashed rgba(245, 158, 11, 0.4)',
                        borderRadius: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '1rem',
                      }}
                    >
                      <div>
                        <h4 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.02rem', margin: 0, fontFamily: 'var(--font-heading)' }}>
                          {brk.title}
                        </h4>
                        <p style={{ color: '#94a3b8', fontSize: '0.84rem', margin: '0.25rem 0 0 0', fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>
                          {brk.description}
                        </p>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: '#cbd5e1',
                          fontSize: '0.8rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '9999px',
                          fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                        }}
                      >
                        <MapPin size={13} color="#f59e0b" />
                        <span>{brk.location}</span>
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard Time Slot with parallel sessions
              const sessionCount = slot.sessions.length;

              return (
                <div
                  key={sIdx}
                  className="timeline-slot-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '170px 1fr',
                    gap: '1.75rem',
                    alignItems: 'start',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {/* Left Column: Time Header - Clean Typography without card */}
                  <div
                    className="time-col-left"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '0.35rem',
                      position: 'sticky',
                      top: '100px',
                      paddingTop: '0.35rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#00d2ff',
                        fontWeight: 900,
                        fontSize: '1.08rem',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      <Clock size={17} color="#00d2ff" style={{ flexShrink: 0 }} />
                      <span>{slot.time}</span>
                    </div>

                    {sessionCount > 1 && (
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: '#94a3b8',
                          fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                          paddingLeft: '1.5rem',
                        }}
                      >
                        {sessionCount} atividades simultâneas
                      </span>
                    )}
                  </div>

                  {/* Right Column: Sessions occurring in this time slot */}
                  <div
                    className="slot-sessions-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: sessionCount === 1 ? '1fr' : sessionCount === 2 ? 'repeat(auto-fit, minmax(290px, 1fr))' : 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.25rem',
                      width: '100%',
                      minWidth: 0,
                    }}
                  >
                    {slot.sessions.map((item, idx) => {
                      const isSponsorSession = Boolean(item.isSponsor || item.sponsorName);

                      return (
                        <div
                          key={idx}
                          className="glass-card slot-session-card"
                          style={{
                            padding: '1.6rem 1.65rem',
                            borderRadius: '1rem',
                            background: isSponsorSession
                              ? 'linear-gradient(135deg, rgba(8, 30, 90, 0.9) 0%, rgba(4, 18, 55, 0.95) 100%)'
                              : item.isHighlight
                              ? 'linear-gradient(135deg, rgba(8, 25, 75, 0.85) 0%, rgba(4, 15, 45, 0.95) 100%)'
                              : 'rgba(6, 18, 52, 0.75)',
                            border: isSponsorSession
                              ? '1.5px solid rgba(0, 210, 255, 0.6)'
                              : item.isHighlight
                              ? '1px solid rgba(0, 210, 255, 0.35)'
                              : '1px solid rgba(56, 189, 248, 0.2)',
                            boxShadow: isSponsorSession
                              ? '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 210, 255, 0.2)'
                              : item.isHighlight
                              ? '0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 153, 255, 0.1)'
                              : '0 6px 20px rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'all 0.25s ease',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Accent bar on top */}
                          <div
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '3px',
                              background: isSponsorSession
                                ? 'linear-gradient(90deg, #00d2ff, #7928ca)'
                                : item.tagColor
                                ? `linear-gradient(90deg, ${item.tagColor}, transparent)`
                                : 'linear-gradient(90deg, #38bdf8, transparent)',
                            }}
                          />

                          <div>
                            {/* Card Header: Space / Room Badge (using Montserrat font) & Category Tag */}
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                                marginBottom: '0.85rem',
                              }}
                            >
                              {/* Space / Room Badge with Montserrat font */}
                              <div
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.4rem',
                                  color: '#e2e8f0',
                                  fontSize: '0.82rem',
                                  fontWeight: 700,
                                  background: 'rgba(255, 255, 255, 0.08)',
                                  border: '1px solid rgba(255, 255, 255, 0.15)',
                                  padding: '0.32rem 0.75rem',
                                  borderRadius: '8px',
                                  fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                                  letterSpacing: '0.01em',
                                }}
                              >
                                <MapPin size={13} color="#00d2ff" />
                                <span>{item.location}</span>
                              </div>

                              {/* Tags container */}
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                                {/* Sponsor Badge */}
                                {isSponsorSession && (
                                  <span
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '0.35rem',
                                      padding: '0.28rem 0.75rem',
                                      borderRadius: '9999px',
                                      fontSize: '0.74rem',
                                      fontWeight: 800,
                                      textTransform: 'uppercase',
                                      letterSpacing: '0.06em',
                                      color: '#00d2ff',
                                      background: 'rgba(0, 210, 255, 0.18)',
                                      border: '1px solid rgba(0, 210, 255, 0.55)',
                                      fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                                      boxShadow: '0 0 10px rgba(0, 210, 255, 0.25)',
                                    }}
                                  >
                                    <Building2 size={12} color="#00d2ff" />
                                    Patrocinador {item.sponsorName ? `• ${item.sponsorName}` : ''}
                                  </span>
                                )}

                                {/* Categorical Tag (Only if NOT 'Confirmado') */}
                                {item.tag && item.tag !== 'Patrocinador' && (
                                  <span
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '0.35rem',
                                      padding: '0.26rem 0.7rem',
                                      borderRadius: '9999px',
                                      fontSize: '0.73rem',
                                      fontWeight: 700,
                                      textTransform: 'uppercase',
                                      letterSpacing: '0.04em',
                                      color: item.tagColor || '#00d2ff',
                                      background: `${item.tagColor || '#00d2ff'}18`,
                                      border: `1px solid ${item.tagColor || '#00d2ff'}45`,
                                      fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                                    }}
                                  >
                                    <span
                                      style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: item.tagColor || '#00d2ff',
                                      }}
                                    />
                                    {item.tag}
                                  </span>
                                )}

                                {item.badgeNote && (
                                  <span
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '0.3rem',
                                      padding: '0.25rem 0.65rem',
                                      borderRadius: '9999px',
                                      fontSize: '0.72rem',
                                      fontWeight: 700,
                                      color: '#10b981',
                                      background: 'rgba(16, 185, 129, 0.15)',
                                      border: '1px solid rgba(16, 185, 129, 0.4)',
                                      fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                                    }}
                                  >
                                    {item.badgeNote}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Specific Time Override if different from slot */}
                            {item.timeOverride && (
                              <div
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.35rem',
                                  color: '#38bdf8',
                                  fontSize: '0.76rem',
                                  fontWeight: 700,
                                  marginBottom: '0.5rem',
                                  fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                <Clock size={12} />
                                <span>Horário específico: {item.timeOverride}</span>
                              </div>
                            )}

                            {/* Session Title */}
                            <h3
                              style={{
                                fontSize: '1.18rem',
                                fontWeight: 800,
                                color: '#ffffff',
                                margin: '0 0 0.65rem 0',
                                lineHeight: 1.4,
                                letterSpacing: '0.01em',
                              }}
                            >
                              {item.title}
                            </h3>

                            {/* Speaker / Presenter */}
                            {item.speaker && (
                              <div
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                  color: '#38bdf8',
                                  fontSize: '0.88rem',
                                  fontWeight: 600,
                                  marginBottom: '0.75rem',
                                  fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                <Users size={14} color="#38bdf8" />
                                <span>{item.speaker}</span>
                              </div>
                            )}

                            {/* Description */}
                            <p
                              style={{
                                color: '#94a3b8',
                                fontSize: '0.88rem',
                                margin: 0,
                                lineHeight: 1.6,
                                whiteSpace: 'pre-line',
                                fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                              }}
                            >
                              {item.description}
                            </p>
                          </div>

                          {/* Footer Info / Type */}
                          <div
                            style={{
                              marginTop: '1.25rem',
                              paddingTop: '0.75rem',
                              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '0.74rem',
                                fontWeight: 700,
                                color: '#64748b',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                              }}
                            >
                              {item.type}
                            </span>

                            {item.isHighlight && (
                              <span
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.35rem',
                                  color: '#00d2ff',
                                  fontSize: '0.74rem',
                                  fontWeight: 700,
                                  fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                                }}
                              >
                                <Sparkles size={12} />
                                Destaque
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Day 4 Special Hackathon Banner if active */}
        {activeDay === 4 && (
          <div
            className="glass-card"
            style={{
              maxWidth: '1000px',
              margin: '3rem auto 0 auto',
              padding: '2.5rem',
              borderRadius: '1.25rem',
              background: 'linear-gradient(135deg, rgba(8, 28, 80, 0.95) 0%, rgba(16, 185, 129, 0.15) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(16, 185, 129, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                }}
              >
                <Code2 size={24} color="#10b981" />
              </div>
              <div>
                <span
                  style={{
                    color: '#10b981',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  MARATONA DE DESENVOLVIMENTO
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.45rem', fontWeight: 900, margin: '0.2rem 0 0 0', fontFamily: 'var(--font-heading)' }}>
                  Desafios Reais com Premiação
                </h3>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 1.5rem 0', fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>
              O Hackathon FACOM TechWeek 2026 reúne mentes inovadoras durante 14 horas de programação intensiva. Os participantes contam com mentorias dedicadas de profissionais das empresas patrocinadoras, APIs corporativas exclusivas e banca avaliadora para eleger os melhores projetos.
            </p>

            <div
              className="hackathon-perks-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '1.5rem',
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Award size={20} color="#10b981" />
                <span style={{ color: '#e2e8f0', fontSize: '0.88rem', fontWeight: 600, fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>Troféus & Premiações</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Users size={20} color="#10b981" />
                <span style={{ color: '#e2e8f0', fontSize: '0.88rem', fontWeight: 600, fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>Mentores de Big Techs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Flame size={20} color="#10b981" />
                <span style={{ color: '#e2e8f0', fontSize: '0.88rem', fontWeight: 600, fontFamily: "'Montserrat', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>Pitches & Demo Day</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .timeline-slot-row {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          .time-col-left {
            position: static !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .slot-sessions-grid {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .slot-session-card {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
        }
        @media (max-width: 640px) {
          #programacao {
            padding: 4rem 0 !important;
            overflow: hidden !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .day-tabs-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .day-tab-btn {
            padding: 1rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .schedule-search-wrap {
            min-width: unset !important;
            width: 100% !important;
            max-width: 100% !important;
            flex: 1 1 100% !important;
          }
          .hackathon-perks-grid {
            grid-template-columns: 1fr !important;
          }
          .slot-session-card {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
