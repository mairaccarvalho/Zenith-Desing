// Botão para voltar ao início
{
    const btn = document.querySelector('.button-top');

    btn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

    document.addEventListener('scroll', () => {
        btn.classList.toggle('btn-active', window.scrollY > 100);
    });
}

// Menu nav - Efeito fade-in/fade-out
{
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });
}


// Menu mobile
{
    const menu = document.querySelector('.menu-icon');
    const icon = document.querySelector('.icon-ham');
    const iconClose = document.querySelector('.icon-close');
    const navlist = document.querySelector('.navlist');
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('main');

    menu.addEventListener('click', () => {
    navlist.classList.toggle('open');
    navbar.classList.toggle('active');
    main.classList.toggle('blur')

    if (navlist.classList.contains('open')) {
        icon.classList.toggle('none');
        iconClose.classList.toggle('active')
    } else {
        icon.classList.remove('none');
        iconClose.classList.remove('active')
    }
    })
}

// Animações ao rolar página (ScrollReveal)
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 700
})
scrollReveal.reveal (
    `#home .home-text, #about .about-img,
    #about .about-text, #about .box-button-rm,
    #projects .projects title, #projects .row,
    #testimony .testimony-title, #testimony .testimony-box,
    #contacts .map-container, #contacts .form-container`, {interval:50}
)

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.servico-card');
  const modal = document.getElementById('modal-servico');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close-btn');

  const detalhesServicos = [
    {
      titulo: "Consultoria em Design Sustentável",
      descricao: "Análise e desenvolvimento de estratégias personalizadas para integrar práticas sustentáveis em projetos de interiores e arquitetura. A consultoria abrange seleção de materiais de baixo impacto, gestão de resíduos, eficiência energética e viabilidade ambiental, garantindo conformidade com normativas ecológicas e certificações ambientais (como LEED e AQUA-HQE).",
      imagem: "img/servicos/servico1.jpg"
    },
    {
      titulo: "Design de Interiores Eco-friendly",
      descricao: "Projetos de interiores que priorizam materiais renováveis, recicláveis ou reciclados, com baixa emissão de compostos orgânicos voláteis (COVs). O foco é otimizar o conforto térmico, acústico e visual do espaço, reduzindo o consumo de energia e melhorando a qualidade ambiental interna (IEQ - Indoor Environmental Quality).",
      imagem: "img/servicos/servico2.jpg"
    },
    {
      titulo: "Planejamento de Ambientes Sustentáveis",
      descricao: "Desenvolvimento de plantas e fluxogramas que consideram ventilação cruzada, aproveitamento máximo da luz natural, uso eficiente da água e escolha estratégica de vegetação para sombreamento passivo. O objetivo é criar ambientes termicamente eficientes e com menor dependência de sistemas artificiais de climatização.",
      imagem: "img/servicos/servico3.jpg"
    },
    {
      titulo: "Eficiência Energética e Sustentabilidade",
      descricao: "Implementação de soluções para redução de consumo energético por meio de sistemas de iluminação LED, sensores de presença, automação de dispositivos e integração com fontes renováveis (fotovoltaica, solar térmica, etc). Também inclui estudo de balanço energético e simulações térmicas computacionais (EnergyPlus, DesignBuilder).",
      imagem: "img/servicos/servico4.jpg"
    },
    {
      titulo: "Design de Produtos Sustentáveis",
      descricao: "Desenvolvimento de produtos de mobiliário e objetos funcionais utilizando princípios de ecodesign e análise do ciclo de vida (ACV). São priorizados materiais certificados (FSC, reciclados, biodegradáveis), modularidade, desmontabilidade e durabilidade, reduzindo a obsolescência programada.",
      imagem: "img/servicos/servico5.jpg"
    },
    {
      titulo: "Assessoria para Certificação Ambiental",
      descricao: "Apoio técnico na documentação, especificação de sistemas e processos sustentáveis para obtenção de certificações como LEED, WELL, BREEAM e Selo Casa Azul (CEF). A assessoria cobre desde a fase de projeto até a operação, incluindo auditorias, checklist de pré-requisitos e simulações ambientais.",
      imagem: "img/servicos/servico6.jpg"
    }
  ];

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      modalTitle.textContent = detalhesServicos[index].titulo;
      modalDescription.textContent = detalhesServicos[index].descricao;
      modalImage.src = detalhesServicos[index].imagem;
      modalImage.alt = detalhesServicos[index].titulo;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.projectVerMais');
  const modalProjeto = document.getElementById('modalProjeto');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');
  const modalFeatures = document.getElementById('modal-features');
  const closeBtn = document.querySelector('.modal .close');

  const detalhesProjetos = [
    {
     
  titulo: "Reflexos Naturais",
  descricao: "Projeto de arquitetura biofílica com foco na sustentabilidade passiva. Utiliza materiais recicláveis e soluções construtivas que maximizam o uso da iluminação e ventilação naturais. A implementação de painéis fotovoltaicos reduz significativamente a dependência energética de fontes não-renováveis, promovendo conforto ambiental e eficiência energética de forma integrada ao ecossistema local.\n\n",
  imagem: "img/projeto1Luzes.webp",
  caracteristicas: [

    "Materiais recicláveis",
    "Design biofílico",
    "Geração de energia solar",
    "Ventilação e iluminação natural"
  ]
}
    ,
    {
      titulo: "Vanguardistas Sustentáveis",
  descricao: "Projeto arquitetônico de estética contemporânea com enfoque em tecnologias limpas e gestão automatizada de recursos. Integra sistemas inteligentes para controle de iluminação, climatização e consumo energético, aliados ao uso de materiais certificados e de baixa emissão de carbono. O layout flexível e modular permite reconfiguração de espaços com impacto ambiental reduzido.\n\n",
  imagem: "img/projetoVangarda.png",
  caracteristicas: [
    "Design contemporâneo",
    "Materiais certificados",
    "Automação integrada",
    "Alta eficiência energética"
  ]
    },
    {
      titulo: "Espaço Verde Inteligente",
  descricao: "Ambiente projetado com foco em sustentabilidade ativa, incorporando automação para controle de sistemas de irrigação, iluminação e climatização. O uso de sensores ambientais permite a gestão eficiente de recursos hídricos e energéticos. O paisagismo funcional é integrado ao edifício como elemento de desempenho ambiental, contribuindo para conforto térmico, retenção de água da chuva e redução de ilhas de calor.\n\n",
  imagem: "img/projetoEspacoVerde.webp",
  caracteristicas: [
    "Automação ambiental",
    "Paisagismo funcional",
    "Gestão hídrica e energética",
    "Eficiência operacional"
  ]
    },
    {
     titulo: "Harmonia no Design",
  descricao: "Desenvolvido com princípios de arquitetura sustentável e uso consciente de recursos naturais, este projeto valoriza técnicas passivas de climatização e iluminação. Emprega materiais naturais e de origem renovável, priorizando o reaproveitamento e a baixa pegada de carbono. A integração paisagística garante simbiose entre edificação e ambiente natural, promovendo um ecossistema construído harmônico e resiliente.\n\n",
  imagem: "img/projetoHarmonia.webp",
  caracteristicas: [
    "Materiais naturais e renováveis",
    "Técnicas passivas de conforto térmico",
    "Integração com o ecossistema local",
    "Baixa pegada de carbono"
  ]
    }
  ];

  projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const projeto = detalhesProjetos[index];
      modalTitle.textContent = projeto.titulo;
      modalDesc.textContent = projeto.descricao;
      modalImg.src = projeto.imagem;
      modalImg.alt = projeto.titulo;

      // Limpar lista anterior
      modalFeatures.innerHTML = '';

      // Preencher com novas características
      projeto.caracteristicas.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
      });

      modalProjeto.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modalProjeto.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalProjeto) {
      modalProjeto.style.display = 'none';
    }
  });
});
