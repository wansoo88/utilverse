import type { BlogPost } from '../types'

export const funPosts: BlogPost[] = [
  {
    slug: 'random-facts-about-randomness',
    category: 'fun',
    title: '12 fatos surpreendentes sobre aleatoriedade que você provavelmente não sabia',
    description: 'A aleatoriedade é mais estranha e fascinante do que você pensa. Aqui estão doze fatos que vão mudar como você vê o acaso.',
    publishedDate: '2026-01-16',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Achamos que entendemos a aleatoriedade. Jogamos uma moeda, rolamos um dado, embaralhamos um baralho — e assumimos que o resultado é imprevisível. Mas a aleatoriedade é muito mais estranha do que nossas intuições sugerem.",
    sections: [
      { heading: 'Fatos 1-4: A natureza contraintuitiva da aleatoriedade', body: ['Fato 1: A aleatoriedade verdadeira é extremamente rara. A maioria das coisas que chamamos de "aleatórias" são na verdade pseudo-aleatórias.', 'Fato 2: Humanos são péssimos em gerar números aleatórios. Quando pedidos para escrever uma sequência aleatória, as pessoas inconscientemente evitam repetir dígitos.', 'Fato 3: Um baralho embaralhado quase certamente nunca existiu antes. Um baralho padrão de 52 cartas pode ser organizado de 52! maneiras.', 'Fato 4: O paradoxo do aniversário. Em um grupo de apenas 23 pessoas, há 50% de chance de duas pessoas compartilharem um aniversário.'] },
      { heading: 'Fatos 5-8: Aleatoriedade na natureza e ciência', body: ['Fato 5: A mecânica quântica é genuinamente aleatória. No nível subatômico, eventos como decaimento radioativo são fundamentalmente aleatórios.', 'Fato 6: Mutações aleatórias impulsionam a evolução. As mutações genéticas que impulsionam a seleção natural são aleatórias.', 'Fato 7: O mercado de ações não é aleatório, mas está próximo. A "hipótese do passeio aleatório" sugere que as mudanças de preço das ações são essencialmente aleatórias.', 'Fato 8: A amostragem aleatória é mais precisa do que a enumeração completa para grandes populações.'] },
      { heading: 'Fatos 9-12: Aleatoriedade no comportamento humano', body: ['Fato 9: Vemos padrões em dados aleatórios. O cérebro humano é uma máquina de reconhecimento de padrões.', 'Fato 10: Recompensas aleatórias são mais viciantes do que as previsíveis. O reforço de razão variável produz o comportamento mais forte e persistente.', 'Fato 11: A falácia do jogador é universal. Após uma longa sequência de caras, a maioria das pessoas acredita que coroas está "devida".', 'Fato 12: Atos aleatórios de bondade têm efeitos mensuráveis na felicidade.'] }
    ],
    faqs: [
      { question: 'Qual é a diferença entre aleatório e pseudo-aleatório?', answer: 'Números verdadeiramente aleatórios são gerados a partir de processos físicos genuinamente imprevisíveis. Números pseudo-aleatórios são gerados por algoritmos determinísticos.' },
      { question: 'O universo é fundamentalmente aleatório?', answer: 'No nível quântico, sim — eventos quânticos são genuinamente aleatórios. No nível macro, o universo parece determinístico.' }
    ],
    relatedSlugs: ['famous-coin-flip-moments', 'lottery-number-myths', 'coin-flip-psychology'],
    relatedToolHrefs: ['/random-number-generator', '/coin-flip', '/dice-roller'],
    tags: ['aleatoriedade', 'fatos', 'ciência', 'psicologia']
  },
  {
    slug: 'famous-coin-flip-moments',
    category: 'fun',
    title: '7 momentos famosos na história decididos por cara ou coroa',
    description: 'De nomes de cidades a jogos de campeonato, esses sete momentos mostram como um único cara ou coroa mudou o curso da história.',
    publishedDate: '2026-01-24',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "Um cara ou coroa leva menos de um segundo. Mas os resultados de alguns lançamentos duraram séculos. Aqui estão sete momentos onde uma moeda determinou um nome de cidade, um campeonato, um voo e muito mais.",
    sections: [
      { heading: 'Portland vs. Boston: o lançamento do nome da cidade (1845)', body: ['Em 1845, dois colonos chamados Asa Lovejoy e Francis Pettygrove estavam estabelecendo uma nova cidade no Território do Oregon. Lovejoy queria chamá-la de Boston. Pettygrove queria chamá-la de Portland. Eles resolveram a disputa com um cara ou coroa.', 'Pettygrove venceu. A cidade se tornou Portland, Oregon — agora com mais de 650.000 habitantes.'] },
      { heading: 'Os Irmãos Wright: quem voa primeiro (1903)', body: ['Em 14 de dezembro de 1903, Orville e Wilbur Wright estavam prontos para tentar o primeiro voo motorizado. Ambos os irmãos queriam ser os primeiros a voar. Eles resolveram com um cara ou coroa.', 'Wilbur venceu o lançamento. Sua tentativa falhou. Três dias depois, Orville fez o primeiro voo bem-sucedido.'] },
      { heading: 'O Campeonato Europeu de 1968: Itália vs. União Soviética', body: ['Na semifinal do Campeonato Europeu da UEFA de 1968, Itália e União Soviética empataram 0-0 após a prorrogação. Não havia pênaltis em 1968 — o empate foi resolvido por cara ou coroa.', 'A Itália venceu o lançamento e avançou para a final, onde venceu o campeonato.'] },
      { heading: 'Mais lançamentos famosos', body: ['A Câmara dos Delegados da Virgínia de 2017: uma corrida foi decidida por sorteio aleatório que determinou o controle da Câmara.', 'Lançamentos do Super Bowl: o lançamento de moeda do Super Bowl da NFL foi chamado corretamente pelo time vencedor 28 de 57 vezes.'] },
      { heading: 'O que esses momentos nos dizem', body: ['Esses cara ou coroa famosos compartilham um fio comum: ocorreram em momentos de genuína igualdade, onde nenhum outro método poderia resolver o empate de forma justa.', 'Eles também revelam algo sobre a natureza da história: muitos resultados que tratamos como inevitáveis eram na verdade contingentes ao acaso.'] }
    ],
    faqs: [
      { question: 'É justo decidir eventos importantes por cara ou coroa?', answer: 'Quando duas opções são genuinamente iguais e nenhum outro método justo existe, um cara ou coroa é indiscutivelmente a resolução mais justa.' },
      { question: 'Por que os esportes pararam de usar cara ou coroa para desempates?', answer: 'Cara ou coroa foram substituídos por pênaltis e outros desempates baseados em habilidade porque o público os achava insatisfatórios.' }
    ],
    relatedSlugs: ['history-of-coin-flipping', 'random-facts-about-randomness', 'coin-flip-psychology'],
    relatedToolHrefs: ['/coin-flip', '/random-number-generator', '/yes-or-no'],
    tags: ['cara ou coroa', 'história', 'momentos famosos', 'curiosidades']
  },
  {
    slug: 'what-to-eat-decision-guide',
    category: 'fun',
    title: 'Não consegue decidir o que comer? Aqui está um sistema que realmente funciona',
    description: 'O loop "não sei, o que você quer?" termina aqui. Um sistema prático para decidir o que comer — sozinho ou com outras pessoas.',
    publishedDate: '2026-02-07',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "A conversa 'o que devemos comer?' tem uma capacidade única de consumir 20 minutos e produzir ressentimento. Aqui está um sistema que encerra o loop.",
    sections: [
      { heading: 'Por que decisões de comida são uniquamente difíceis', body: ['Decisões de comida são difíceis por três razões: elas recorrem várias vezes ao dia, envolvem dinâmicas sociais quando tomadas com outros, e têm consequências sensoriais imediatas.', 'A seleção aleatória é a solução mais eficiente para decisões de comida onde qualquer opção é aceitável.'] },
      { heading: 'O sistema de dois vetos', body: ['O sistema de dois vetos funciona para casais e pequenos grupos. Cada pessoa recebe dois vetos por refeição. Quando alguém sugere uma opção de comida, qualquer um pode usar um veto para eliminá-la.', 'Este sistema dá a todos uma contribuição significativa enquanto evita a deliberação interminável.'] },
      { heading: 'O método da roleta de comida', body: ['Crie uma roleta com suas opções de refeição regulares. Quando a pergunta "o que devemos comer?" surgir, gire a roleta.', 'A roleta funciona porque é rápida, visível e neutra.'] }
    ],
    faqs: [
      { question: 'E se a seleção aleatória escolher algo que eu não quero?', answer: 'Essa é uma informação útil. Se você se sentir desapontado com o resultado aleatório, esse desapontamento revela uma preferência que você não estava reconhecendo.' },
      { question: 'Como lido com restrições alimentares em um grupo?', answer: 'Filtre as opções antes de aplicar a seleção aleatória. Crie uma roleta ou lista que inclua apenas opções que funcionem para todos no grupo.' }
    ],
    relatedSlugs: ['random-facts-about-randomness', 'overthinking-decisions', 'daily-decision-routine'],
    relatedToolHrefs: ['/random-food-picker', '/spin-the-wheel', '/yes-or-no'],
    tags: ['decisões de comida', 'o que comer', 'seletor aleatório', 'vida cotidiana']
  },
  {
    slug: 'lottery-number-myths',
    category: 'fun',
    title: 'Mitos sobre números de loteria desmascarados: o que aleatório realmente significa',
    description: 'Números da sorte, números quentes, padrões de números — mitos de loteria estão em todo lugar. Aqui está o que a matemática realmente diz.',
    publishedDate: '2026-02-22',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "Jogadores de loteria gastam bilhões de dólares em estratégias baseadas em mitos sobre aleatoriedade. Números da sorte, números quentes, padrões de números — nenhuma dessas estratégias melhora suas chances.",
    sections: [
      { heading: 'Mito 1: Alguns números são mais sortudos que outros', body: ['Em uma loteria justa, cada número tem exatamente igual probabilidade de ser sorteado. O número 7 não é mais sortudo que o número 13.', 'A percepção de que alguns números são mais sortudos vem do viés de confirmação.'] },
      { heading: 'Mito 2: Números quentes e frios', body: ['Alguns jogadores rastreiam números "quentes" (sorteados frequentemente recentemente) e "frios" (não sorteados recentemente). Ambas as teorias estão erradas.', 'Sorteios de loteria são eventos independentes. Um número que apareceu cinco vezes nos últimos dez sorteios não é mais ou menos provável de aparecer no próximo.'] },
      { heading: 'Mito 3: Padrões de números melhoram suas chances', body: ['Alguns jogadores escolhem números em padrões. Esses padrões não afetam a probabilidade de ganhar.', 'No entanto, padrões afetam uma coisa: quanto você ganharia se ganhasse. Se muitos jogadores escolherem o mesmo padrão, o jackpot seria dividido entre mais vencedores.'] },
      { heading: 'O que a matemática realmente diz', body: ['O valor esperado de um bilhete de loteria é quase sempre negativo. A única maneira de melhorar seu valor esperado é jogar quando o jackpot é incomumente grande e escolher combinações de números incomuns.', 'Loterias são entretenimento, não investimento.'] }
    ],
    faqs: [
      { question: 'Existe alguma estratégia que realmente melhora as chances na loteria?', answer: 'Nenhuma estratégia melhora sua probabilidade de ganhar. A única abordagem matematicamente válida é escolher combinações de números incomuns para reduzir o compartilhamento do jackpot.' },
      { question: 'Os sorteios de loteria são verdadeiramente aleatórios?', answer: 'Loterias respeitáveis usam geradores de números aleatórios certificados ou máquinas de bolas físicas que são regularmente auditadas para equidade.' }
    ],
    relatedSlugs: ['random-facts-about-randomness', 'famous-coin-flip-moments', 'coin-flip-psychology'],
    relatedToolHrefs: ['/lottery-number-generator', '/random-number-generator', '/dice-roller'],
    tags: ['loteria', 'aleatoriedade', 'mitos', 'probabilidade']
  }
]
