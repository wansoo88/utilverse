import type { BlogPost } from '../types'

export const toolPosts: BlogPost[] = [
  {
    slug: 'history-of-coin-flipping',
    category: 'tools',
    title: 'A história do cara ou coroa: da Roma Antiga ao seu navegador',
    description: 'Como o cara ou coroa evoluiu de rituais antigos para uma ferramenta digital moderna usada em esportes, direito e decisões cotidianas.',
    publishedDate: '2026-01-12',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "O cara ou coroa é uma das ferramentas de decisão mais antigas da humanidade. Muito antes da teoria das probabilidades, antes das estatísticas, antes dos computadores — as pessoas usavam objetos marcados para deixar o acaso resolver disputas.",
    sections: [
      { heading: 'Origens antigas: cara ou navio', body: ['Os romanos chamavam de "navia aut caput" — navios ou cabeças. Moedas romanas apresentavam a cabeça de um deus de um lado e um navio do outro. Os cidadãos usavam essas moedas para resolver disputas.', 'Práticas similares existiam em todas as culturas. Gregos antigos usavam fragmentos de cerâmica marcados. Chineses usavam moedas com hexagramas inscritos.'] },
      { heading: 'Europa medieval: cruz ou pilha', body: ['Na Inglaterra medieval, o cara ou coroa era chamado de "cruz ou pilha". Esta prática era tão comum que aparece nos Contos de Canterbury de Chaucer.', 'Tribunais medievais usavam cara ou coroa para resolver disputas de propriedade e determinar a ordem dos julgamentos.'] },
      { heading: 'Esportes e adoção institucional', body: ['O cara ou coroa moderno nos esportes foi formalizado no século XIX. O críquete o adotou na década de 1870. O futebol americano introduziu o cara ou coroa em 1892.', 'Sistemas legais também adotaram a seleção aleatória. O processo de seleção de júri federal dos EUA usa sorteios aleatórios.'] },
      { heading: 'A transição digital', body: ['As primeiras ferramentas digitais de cara ou coroa apareceram no início dos anos 2000 como simples funções JavaScript. Hoje, ferramentas baseadas em navegador oferecem aleatoriedade criptográfica.', 'A transição do físico para o digital não mudou o caso de uso fundamental. As pessoas ainda usam cara ou coroa para resolver disputas e quebrar empates.'] }
    ],
    faqs: [
      { question: 'O cara ou coroa é verdadeiramente aleatório?', answer: 'Um cara ou coroa físico não é perfeitamente aleatório — é influenciado pelas condições iniciais do lançamento. Um cara ou coroa digital usando aleatoriedade criptográfica é estatisticamente mais uniforme.' },
      { question: 'Qual é o cara ou coroa mais famoso da história?', answer: 'O cara ou coroa dos Irmãos Wright em 1903 para determinar quem tentaria o primeiro voo motorizado é frequentemente citado.' }
    ],
    relatedSlugs: ['coin-flip-psychology', 'coin-flip-vs-dice-roll', 'famous-coin-flip-moments'],
    relatedToolHrefs: ['/coin-flip', '/random-number-generator', '/yes-or-no'],
    tags: ['cara ou coroa', 'história', 'aleatoriedade', 'ferramentas de decisão']
  },
  {
    slug: 'coin-flip-vs-dice-roll',
    category: 'tools',
    title: 'Cara ou coroa vs. rolar dados: qual ferramenta aleatória usar?',
    description: 'Uma comparação prática de cara ou coroa e rolar dados — quando usar cada um e como escolher a ferramenta certa para sua decisão.',
    publishedDate: '2026-01-18',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Ambas as ferramentas são aleatórias. Ambas são justas. Mas elas servem a diferentes formas de decisão. Escolher a ferramenta errada não arruína sua decisão — mas escolher a certa torna o processo mais rápido e claro.",
    sections: [
      { heading: 'A diferença central: binário vs. múltiplos resultados', body: ['Um cara ou coroa produz exatamente dois resultados com probabilidade igual. Um dado de seis faces produz seis resultados.', 'Use cara ou coroa quando sua decisão tem exatamente duas opções. Use um dado quando você tem três a seis opções.'] },
      { heading: 'Quando usar cara ou coroa', body: ['Cara ou coroa é ideal para decisões binárias: sim ou não, opção A ou opção B, ir ou ficar.', 'Melhores casos de uso: seleção de restaurante entre duas opções, determinar quem vai primeiro em um jogo, quebrar um empate em votação.'] },
      { heading: 'Quando usar dados', body: ['Dados são ideais quando você tem três a seis opções, quando quer adicionar aleatoriedade a um jogo, ou quando precisa de um número dentro de um intervalo específico.', 'Diferentes tipos de dados estendem o intervalo: d4 para quatro opções, d6 para seis, d8 para oito, d20 para vinte.'] }
    ],
    faqs: [
      { question: 'Posso usar cara ou coroa para mais de duas opções?', answer: 'Sim, mas requer múltiplos lançamentos. Para três opções, lance duas vezes: CC=opção 1, CK=opção 2, KC=opção 3, KK=lance novamente. Para três ou mais opções, um dado ou roleta é mais eficiente.' },
      { question: 'Um cara ou coroa ou dado digital é mais aleatório que o físico?', answer: 'Sim. Ferramentas digitais usam geradores de números aleatórios criptograficamente seguros que produzem resultados estatisticamente uniformes.' }
    ],
    relatedSlugs: ['history-of-coin-flipping', 'coin-flip-psychology', 'dnd-dice-roller-guide'],
    relatedToolHrefs: ['/coin-flip', '/dice-roller', '/random-number-generator'],
    tags: ['cara ou coroa', 'rolar dados', 'ferramentas aleatórias', 'comparação']
  },
  {
    slug: 'dnd-dice-roller-guide',
    category: 'tools',
    title: 'Rolador de dados para D&D: o fluxo de trabalho prático do Mestre',
    description: 'Reduza o atrito na mesa e mantenha o momentum narrativo com um fluxo de trabalho claro de rolagem de dados para Mestres.',
    publishedDate: '2026-01-22',
    author: 'kimcomplete',
    readingTime: 7,
    intro: "Um Mestre toma centenas de micro-decisões por sessão. Cada uma é uma potencial interrupção narrativa: encontrar o dado certo, calcular modificadores, resolver disputas sobre resultados.",
    sections: [
      { heading: 'O problema dos dados do Mestre', body: ['A sessão média de D&D envolve 50-100 rolagens de dados. Cada rolagem requer encontrar o dado certo, aplicar modificadores e comunicar o resultado claramente.', 'Roladores de dados digitais reduzem isso para 2-5 segundos por rolagem. Mais importante, eliminam o problema do "dado errado".'] },
      { heading: 'Dados essenciais para D&D', body: ['D&D usa sete dados padrão: d4, d6, d8, d10, d12, d20 e d100. O d20 é o dado mais importante — determina sucesso ou falha para quase toda ação.', 'Vantagem e desvantagem — rolar dois d20s e pegar o maior ou menor resultado — são mecânicas centrais que um rolador digital deve suportar nativamente.'] },
      { heading: 'Configuração pré-sessão', body: ['Antes de cada sessão, configure seu rolador de dados com as combinações de rolagem mais comuns para aquela sessão.', 'Crie um sistema de notação abreviada: "2d6+3" significa rolar dois dados de seis faces e adicionar 3.'] }
    ],
    faqs: [
      { question: 'Os Mestres devem rolar dados em segredo ou abertamente?', answer: 'Ambas as abordagens têm méritos. Rolar abertamente constrói confiança e cria momentos dramáticos. Rolar em segredo dá flexibilidade para ajustar resultados para fins narrativos.' },
      { question: 'Qual é o melhor aplicativo de rolagem de dados para D&D?', answer: 'O melhor rolador de dados depende da sua configuração. Para jogo presencial, um conjunto de dados físicos mais um backup digital funciona bem.' }
    ],
    relatedSlugs: ['coin-flip-vs-dice-roll', 'random-number-generator-uses', 'party-games-spinner-wheel'],
    relatedToolHrefs: ['/dice-roller', '/random-number-generator', '/spin-the-wheel'],
    tags: ['rolador de dados', 'D&D', 'RPG de mesa', 'ferramentas aleatórias']
  },
  {
    slug: 'spin-wheel-streamer-guide',
    category: 'tools',
    title: 'Como streamers usam roletas para melhor interação com o público',
    description: 'Um guia prático de configuração para usar roletas para criar momentos de stream transparentes, envolventes e memoráveis.',
    publishedDate: '2026-01-28',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "A roleta é uma das ferramentas de interação com o público mais eficazes no streaming. O resultado é visível, incerto e imediato — três qualidades que impulsionam o engajamento.",
    sections: [
      { heading: 'Por que roletas funcionam para streaming', body: ['Roletas criam o que os psicólogos chamam de "excitação antecipatória" — o estado emocional de esperar por um resultado incerto.', 'Para streamers, isso se traduz diretamente em métricas de engajamento. Espectadores que estão esperando um resultado de roleta ficam mais tempo no stream.'] },
      { heading: 'Configurando sua roleta para máximo impacto', body: ['As roletas de stream mais eficazes têm 6-12 segmentos. Menos de seis parece limitado; mais de doze torna os segmentos individuais difíceis de ler na tela.', 'Codifique por cores seus segmentos por categoria: desafios em vermelho, recompensas em verde, interações com espectadores em azul.'] },
      { heading: 'Conteúdo de roleta que impulsiona o engajamento', body: ['Os melhores segmentos de roleta criam ação clara e imediata. "Espectador escolhe o próximo jogo", "Chat decide o nome do meu personagem".', 'Inclua uma mistura de resultados: alguns que beneficiam o streamer, alguns que o desafiam, e alguns que envolvem o público diretamente.'] }
    ],
    faqs: [
      { question: 'Qual é a melhor ferramenta de roleta para streaming?', answer: 'Ferramentas de roleta baseadas em navegador que podem ser capturadas como fonte de navegador no OBS ou Streamlabs funcionam melhor.' },
      { question: 'Posso pesar a roleta para que alguns resultados sejam mais prováveis?', answer: 'Sim, e isso é frequentemente apropriado. Se um segmento é um grande desafio, dar a ele um peso menor mantém o jogo equilibrado.' }
    ],
    relatedSlugs: ['party-games-spinner-wheel', 'wheel-spinner-complete-guide', 'random-number-generator-uses'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['roleta', 'streaming', 'interação com público', 'Twitch']
  },
  {
    slug: 'random-number-generator-uses',
    category: 'tools',
    title: '10 usos surpreendentes para um gerador de números aleatórios',
    description: 'Geradores de números aleatórios fazem muito mais do que gerar números. Aqui estão dez aplicações que você provavelmente não considerou.',
    publishedDate: '2026-02-03',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "A maioria das pessoas usa um gerador de números aleatórios para uma coisa: gerar um número aleatório. Mas a ferramenta é muito mais versátil do que isso.",
    sections: [
      { heading: 'Usos 1-3: Decisões cotidianas', body: ['1. Seleção de refeição: gere um número de 1 a 10 e mapeie para uma lista de opções de refeição. 2. Priorização de tarefas: quando todas as tarefas parecem igualmente urgentes, gere um número para selecionar por onde começar. 3. Seleção de exercício: crie uma lista de exercícios e use um número aleatório para selecionar sua rotina do dia.'] },
      { heading: 'Usos 4-6: Jogos e entretenimento', body: ['4. Criação de personagem de RPG: use múltiplos geradores de números aleatórios para gerar atributos de personagem. 5. Seleção de música: gere um número para selecionar uma faixa de uma playlist. 6. Escolha de filme: quando você não consegue decidir o que assistir, gere um número para selecionar de uma lista.'] },
      { heading: 'Usos 7-10: Profissional e educacional', body: ['7. Seleção de amostras de pesquisa: use números aleatórios para selecionar participantes de uma população maior. 8. Atribuição de tarefas: distribua tarefas aleatoriamente entre os membros da equipe. 9. Ordem de apresentação: determine a ordem de apresentação aleatoriamente para eliminar viés. 10. Geração de senhas: use números aleatórios como base para senhas seguras.'] }
    ],
    faqs: [
      { question: 'Um gerador de números aleatórios é verdadeiramente aleatório?', answer: 'Geradores de números aleatórios de software são tecnicamente pseudo-aleatórios — eles usam algoritmos determinísticos. Geradores criptograficamente seguros são suficientemente aleatórios para quase todos os propósitos.' },
      { question: 'Qual é a diferença entre aleatoriedade verdadeira e pseudo-aleatória?', answer: 'Aleatoriedade verdadeira vem de processos físicos genuinamente imprevisíveis. Pseudo-aleatoriedade vem de algoritmos determinísticos que produzem sequências que parecem aleatórias.' }
    ],
    relatedSlugs: ['coin-flip-vs-dice-roll', 'lottery-number-myths', 'random-facts-about-randomness'],
    relatedToolHrefs: ['/random-number-generator', '/dice-roller', '/coin-flip'],
    tags: ['gerador de números aleatórios', 'usos', 'ferramentas', 'produtividade']
  },
  {
    slug: 'name-picker-classroom',
    category: 'tools',
    title: 'Seletor de nomes aleatório para professores: um guia de equidade na sala de aula',
    description: 'Como usar um seletor de nomes aleatório para criar participação justa e reduzir o viés na sala de aula.',
    publishedDate: '2026-02-10',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Professores tomam dezenas de decisões de chamada por aula. Sem um processo estruturado, eles tendem a chamar os mesmos alunos repetidamente — geralmente os mais engajados ou os mais perturbadores.",
    sections: [
      { heading: 'O problema da chamada tendenciosa', body: ['Pesquisas mostram que professores tendem a chamar alunos que ficam na frente da sala, que levantam a mão com mais frequência, ou que parecem mais engajados.', 'Isso cria um ciclo: alunos que são chamados com mais frequência ficam mais engajados, enquanto aqueles que raramente são chamados se desengajam ainda mais.'] },
      { heading: 'Como um seletor de nomes aleatório resolve isso', body: ['Um seletor de nomes aleatório garante que todos os alunos tenham igual probabilidade de serem chamados, independentemente de onde sentam ou quão engajados parecem.', 'O processo visível também é importante: quando os alunos podem ver que a seleção é aleatória, eles aceitam o resultado sem questionar a equidade do professor.'] },
      { heading: 'Melhores práticas para uso em sala de aula', body: ['Use o modo sem repetição para garantir que todos os alunos sejam chamados antes que qualquer um seja chamado duas vezes.', 'Anuncie o nome antes de fazer a pergunta. Isso dá ao aluno um momento para se preparar e reduz a ansiedade.'] }
    ],
    faqs: [
      { question: 'O que faço se um aluno não souber a resposta?', answer: 'Normalize não saber: "Tudo bem não saber — vamos descobrir juntos." Nunca use a seleção aleatória como punição.' },
      { question: 'Posso usar um seletor de nomes para atribuição de grupos?', answer: 'Sim. Um seletor de nomes pode ser usado para criar grupos aleatórios, atribuir parceiros de revisão por pares, ou determinar a ordem de apresentação.' }
    ],
    relatedSlugs: ['classroom-random-activities', 'team-generator-guide', 'random-number-generator-uses'],
    relatedToolHrefs: ['/random-name-picker', '/team-generator', '/spin-the-wheel'],
    tags: ['seletor de nomes', 'sala de aula', 'educação', 'equidade']
  },
  {
    slug: 'team-generator-guide',
    category: 'tools',
    title: 'Gerador de equipes aleatório: a maneira mais justa de dividir grupos',
    description: 'Como usar um gerador de equipes aleatório para criar grupos justos e equilibrados para qualquer atividade.',
    publishedDate: '2026-02-17',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Dividir pessoas em equipes parece simples, mas raramente é. Deixar as pessoas escolherem cria exclusão social. Escolher você mesmo cria percepção de favoritismo. Um gerador de equipes aleatório resolve ambos os problemas.",
    sections: [
      { heading: 'Por que a divisão aleatória de equipes funciona', body: ['A divisão aleatória de equipes elimina a dinâmica social de "escolher equipes" que pode ser excludente e humilhante.', 'Também garante que as equipes sejam equilibradas ao longo do tempo — nenhuma equipe consistentemente recebe os melhores jogadores.'] },
      { heading: 'Quando usar divisão aleatória de equipes', body: ['Use divisão aleatória de equipes para: atividades de team building, projetos de sala de aula, torneios esportivos casuais, e qualquer situação onde a equidade do processo importa mais do que a otimização do resultado.', 'Evite divisão aleatória de equipes quando: as equipes precisam ser equilibradas por habilidade para competição séria, ou quando os membros da equipe precisam trabalhar juntos por um longo período.'] },
      { heading: 'Como usar um gerador de equipes efetivamente', body: ['Insira todos os nomes dos participantes. Especifique o número de equipes ou o tamanho da equipe. Gere as equipes e anuncie os resultados.', 'Para atividades recorrentes, use um modo de rotação que garanta que as pessoas trabalhem com diferentes companheiros de equipe ao longo do tempo.'] }
    ],
    faqs: [
      { question: 'O que faço se as equipes aleatórias parecerem desequilibradas?', answer: 'Para atividades casuais, aceite o desequilíbrio — é parte da aleatoriedade. Para competições sérias, use um gerador de equipes que equilibra por habilidade ou experiência.' },
      { question: 'Posso usar um gerador de equipes para grupos grandes?', answer: 'Sim. Geradores de equipes funcionam para qualquer tamanho de grupo. Para grupos muito grandes (50+), considere dividir em subgrupos primeiro.' }
    ],
    relatedSlugs: ['name-picker-classroom', 'classroom-random-activities', 'icebreaker-games-remote-teams'],
    relatedToolHrefs: ['/team-generator', '/random-name-picker', '/spin-the-wheel'],
    tags: ['gerador de equipes', 'divisão de grupos', 'equidade', 'atividades']
  },
  {
    slug: 'wheel-spinner-complete-guide',
    category: 'tools',
    title: 'O guia completo para girar a roleta: configuração, dicas e casos de uso',
    description: 'Tudo que você precisa saber para usar uma roleta de forma eficaz — desde a configuração básica até casos de uso avançados.',
    publishedDate: '2026-02-24',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Uma roleta é uma das ferramentas de decisão mais versáteis disponíveis. Ela pode ser usada para qualquer coisa, desde selecionar o que comer até facilitar atividades de team building complexas.",
    sections: [
      { heading: 'Configuração básica da roleta', body: ['Para configurar uma roleta eficaz: liste todas as opções que você quer incluir, atribua pesos se algumas opções devem ser mais prováveis, e escolha cores que tornem os segmentos facilmente distinguíveis.', 'Para a maioria dos casos de uso, 6-10 segmentos é o número ideal. Menos de seis parece limitado; mais de dez torna os segmentos difíceis de ler.'] },
      { heading: 'Casos de uso: decisões pessoais', body: ['Seleção de refeição: adicione suas opções de refeição favoritas e gire quando não conseguir decidir o que comer.', 'Seleção de atividade: adicione atividades de lazer e gire para decidir como passar seu tempo livre.'] },
      { heading: 'Casos de uso: grupo e trabalho', body: ['Facilitação de reuniões: use uma roleta para selecionar quem fala a seguir, qual tópico discutir, ou qual decisão tomar.', 'Team building: use uma roleta para selecionar atividades de team building, desafios ou perguntas de discussão.'] }
    ],
    faqs: [
      { question: 'Uma roleta digital é mais aleatória que uma física?', answer: 'Sim. Roletas digitais usam geradores de números aleatórios criptograficamente seguros que produzem resultados estatisticamente uniformes.' },
      { question: 'Posso salvar minha configuração de roleta para uso futuro?', answer: 'A maioria das ferramentas de roleta baseadas em navegador permite salvar configurações como um URL ou arquivo. Verifique a documentação da ferramenta específica que você está usando.' }
    ],
    relatedSlugs: ['spin-wheel-streamer-guide', 'party-games-spinner-wheel', 'coin-flip-vs-dice-roll'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['roleta', 'guia completo', 'ferramentas de decisão', 'configuração']
  }
]
