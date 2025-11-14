const quizQuestions = [
  // Martinópole (Cultura, Administração, Geografia)
  {
    question:
      "Qual importante evento cultural Martinópole celebrou em Março de 2025?",
    options: [
      {
        text: "O Festival Municipal de Quadrilhas Juninas.",
        isCorrect: false,
        rationale:
          "O foco principal da celebração de março foi o aniversário da cidade.",
      },
      {
        text: "A celebração de seus 68 anos de emancipação com uma grande festa.",
        isCorrect: true,
        rationale:
          "Martinópole comemorou seus 68 anos de emancipação em Março de 2025.",
      },
      {
        text: "A inauguração do Centro de Esportes e Lazer Urbano (CELU).",
        isCorrect: false,
        rationale:
          "Essa inauguração é uma ação administrativa, mas não o evento principal de março.",
      },
      {
        text: "O aniversário do poeta e escritor Martinopolense, João de Deus.",
        isCorrect: false,
        rationale:
          "Embora seja um evento cultural, a data principal de Março é o aniversário da cidade.",
      },
    ],
    topic: "Martinópole/Cultura",
  },
  {
    question:
      "Em 2025, a Prefeitura de Martinópole lançou um Concurso Público. Quantas vagas foram anunciadas, segundo as últimas notícias?",
    options: [
      {
        text: "50 vagas em áreas de saúde e educação.",
        isCorrect: false,
        rationale:
          "O número correto de vagas anunciado pelo município é superior a 50.",
      },
      {
        text: "142 vagas em diversas áreas, com inscrições em Outubro.",
        isCorrect: true,
        rationale:
          "As notícias da Prefeitura de Martinópole em 2025 anunciaram 142 vagas para diversas áreas do serviço público.",
      },
      {
        text: "200 vagas exclusivas para a Guarda Municipal.",
        isCorrect: false,
        rationale:
          "O concurso não é exclusivo para a Guarda Municipal e o número é diferente.",
      },
      {
        text: "75 vagas para o setor administrativo.",
        isCorrect: false,
        rationale:
          "A oferta total de vagas cobre diversas áreas e é maior do que 75.",
      },
    ],
    topic: "Martinópole/Administração",
  },
  {
    question:
      "Historicamente, a principal bacia hidrográfica que abrange parte do território de Martinópole, Ceará, é a Bacia do Rio...",
    options: [
      {
        text: "Parnaíba.",
        isCorrect: false,
        rationale:
          "O Rio Parnaíba é um grande rio do Nordeste, mas não é a principal bacia de Martinópole.",
      },
      {
        text: "Jaguaribe.",
        isCorrect: false,
        rationale:
          "O Rio Jaguaribe é o maior do Ceará, mas Martinópole está mais próxima de outra bacia importante da região norte.",
      },
      {
        text: "Acaraú.",
        isCorrect: true,
        rationale:
          "A Bacia do Rio Acaraú é a principal bacia que banha a região de Martinópole.",
      },
      {
        text: "Curú.",
        isCorrect: false,
        rationale: "O Rio Curú está localizado em outra região do Ceará.",
      },
    ],
    topic: "Martinópole/Geografia",
  },
  // Martinópole (Adicional)
  {
    question:
      "Qual o nome da padroeira do município de Martinópole, Ceará, celebrada anualmente?",
    options: [
      {
        text: "Nossa Senhora de Fátima.",
        isCorrect: false,
        rationale:
          "Nossa Senhora de Fátima é venerada em várias cidades, mas não é a padroeira de Martinópole.",
      },
      {
        text: "Nossa Senhora da Conceição.",
        isCorrect: true,
        rationale:
          "A padroeira de Martinópole é Nossa Senhora da Conceição, cuja festa é celebrada em dezembro.",
      },
      {
        text: "Santa Teresinha.",
        isCorrect: false,
        rationale:
          "Santa Teresinha é padroeira de muitas cidades cearenses, mas não de Martinópole.",
      },
      {
        text: "São José.",
        isCorrect: false,
        rationale: "São José é o padroeiro do Ceará, mas não o de Martinópole.",
      },
    ],
    topic: "Martinópole/História-Cultura",
  },

  // Ceará (Política, Social, Economia)
  {
    question:
      "Qual conquista importante na área de políticas públicas para crianças e adolescentes a cidade de Martinópole recebeu recentemente?",
    options: [
      {
        text: "O Prêmio Lixo Zero da COELCE.",
        isCorrect: false,
        rationale:
          "O reconhecimento social principal citado nas notícias foi outro.",
      },
      {
        text: "O Selo UNICEF, pelo avanço em políticas para crianças e adolescentes.",
        isCorrect: true,
        rationale:
          "Martinópole foi reconhecida com o Selo UNICEF, destacando seus avanços na garantia de direitos de crianças e adolescentes.",
      },
      {
        text: "A Medalha de Mérito Educacional do Ceará.",
        isCorrect: false,
        rationale:
          "O reconhecimento recebido não foi uma medalha de mérito educacional específica.",
      },
      {
        text: "A certificação de 'Melhor Cidade para Morar' pela FIEC.",
        isCorrect: false,
        rationale:
          "Não há menção dessa certificação específica para Martinópole.",
      },
    ],
    topic: "Ceará/Social",
  },
  {
    question:
      "Qual foi o movimento armado no Ceará, liderado por líderes como o Padre Cícero, que impactou profundamente a política regional na Primeira República?",
    options: [
      {
        text: "Guerra de Canudos.",
        isCorrect: false,
        rationale: "Canudos ocorreu na Bahia.",
      },
      {
        text: "Revolta da Vacina.",
        isCorrect: false,
        rationale: "A Revolta da Vacina foi no Rio de Janeiro.",
      },
      {
        text: "Sedição de Juazeiro (ou Revolta de Juazeiro).",
        isCorrect: true,
        rationale:
          "A Sedição de Juazeiro, em 1914, foi um confronto armado em defesa de Padre Cícero, alterando a política cearense.",
      },
      {
        text: "Revolta dos Malês.",
        isCorrect: false,
        rationale: "Este evento ocorreu na Bahia no século XIX.",
      },
    ],
    topic: "Ceará/História",
  },
  {
    question:
      "Além do turismo, qual é o setor de base da economia cearense que tem grande destaque nacional, principalmente na exportação de calçados e vestuário?",
    options: [
      {
        text: "Indústria de Metalurgia de Base.",
        isCorrect: false,
        rationale: "Embora exista, não é o setor de calçados e vestuário.",
      },
      {
        text: "Agroindústria de Frutas Tropicais (exceto caju).",
        isCorrect: false,
        rationale:
          "O Ceará tem grande produção de frutas, mas o destaque na exportação industrial é outro.",
      },
      {
        text: "Setor Industrial Têxtil e de Confecções (Calçadista).",
        isCorrect: true,
        rationale:
          "O Ceará é um dos maiores polos de produção de calçados e vestuário do Brasil.",
      },
      {
        text: "Extração de Petróleo e Gás Natural.",
        isCorrect: false,
        rationale:
          "O petróleo e gás não são a base principal do Ceará no cenário nacional de exportação industrial.",
      },
    ],
    topic: "Ceará/Economia",
  },

  // Brasil (Social, Tecnologia, Economia)
  {
    question:
      "Em Julho de 2025, a ONU anunciou que o Brasil saiu novamente do Mapa da Fome. Qual o principal indicador para essa exclusão?",
    options: [
      {
        text: "O aumento da produção agrícola de grãos em mais de 10%.",
        isCorrect: false,
        rationale:
          "O critério principal é a proporção da população subnutrida.",
      },
      {
        text: "A redução da desigualdade de renda para o índice Gini de 0.4.",
        isCorrect: false,
        rationale:
          "A redução da desigualdade contribui, mas o indicador de subnutrição é o critério direto.",
      },
      {
        text: "A universalização do saneamento básico em todas as capitais.",
        isCorrect: false,
        rationale:
          "O saneamento é um fator de saúde pública, não o indicador direto para o Mapa da Fome.",
      },
      {
        text: "A queda do percentual da população em risco de subnutrição para abaixo de 2,5%.",
        isCorrect: true,
        rationale:
          "O critério da FAO para sair do Mapa da Fome é ter menos de 2,5% da população em risco de subnutrição.",
      },
    ],
    topic: "Brasil/Social",
  },
  {
    question:
      "Um tema quente no Brasil em 2025 foi o aumento de casos de Deep Fake sexuais em escolas. Qual entidade de referência na defesa dos direitos humanos na internet realiza o levantamento desses crimes digitais no país?",
    options: [
      {
        text: "O Ministério da Educação (MEC).",
        isCorrect: false,
        rationale: "O MEC é o órgão regulador da educação.",
      },
      {
        text: "A Safernet Brasil.",
        isCorrect: true,
        rationale:
          "A Safernet Brasil é a organização que revelou um cenário preocupante de Deep Fakes sexuais no ambiente escolar em 2025.",
      },
      {
        text: "O Tribunal Superior Eleitoral (TSE).",
        isCorrect: false,
        rationale: "O TSE lida com questões eleitorais.",
      },
      {
        text: "O Instituto Nacional de Pesquisas Espaciais (INPE).",
        isCorrect: false,
        rationale: "O INPE é focado em pesquisa espacial.",
      },
    ],
    topic: "Brasil/Tecnologia",
  },
  {
    question:
      "Em 2025, a China manteve sua posição como principal parceiro comercial do Brasil. Qual é a principal característica da relação comercial Brasil-China?",
    options: [
      {
        text: "O Brasil exporta principalmente produtos manufaturados de alto valor agregado.",
        isCorrect: false,
        rationale: "O Brasil ainda é um exportador de bens primários.",
      },
      {
        text: "O Brasil importa principalmente bens primários e comodities.",
        isCorrect: false,
        rationale:
          "O Brasil exporta commodities para a China e importa bens industrializados.",
      },
      {
        text: "O Brasil exporta majoritariamente bens primários (commodities) e importa bens industrializados.",
        isCorrect: true,
        rationale:
          "A relação é marcada pela exportação brasileira de commodities (soja, minério) e importação de produtos industrializados chineses.",
      },
      {
        text: "A balança comercial é equilibrada, sem assimetria de valor agregado.",
        isCorrect: false,
        rationale: "A balança comercial é assimétrica.",
      },
    ],
    topic: "Brasil/Economia",
  },

  // Mundo (Meio Ambiente, Política, Ciência/Social)
  {
    question:
      "Em Novembro de 2025, a Conferência das Partes sobre Mudança do Clima (COP 30) está sendo realizada no Brasil. Em qual cidade do país ela está sediada?",
    options: [
      {
        text: "Rio de Janeiro (RJ).",
        isCorrect: false,
        rationale:
          "O Rio de Janeiro é um polo turístico, mas não é a cidade-sede da COP 30.",
      },
      {
        text: "São Paulo (SP).",
        isCorrect: false,
        rationale:
          "São Paulo é o centro financeiro, mas a COP 30 foi marcada para uma cidade na região Norte.",
      },
      {
        text: "Belém (PA).",
        isCorrect: true,
        rationale:
          "A cidade de Belém, no Pará, é a sede oficial da COP 30, com foco na Amazônia.",
      },
      {
        text: "Salvador (BA).",
        isCorrect: false,
        rationale: "Salvador é a capital da Bahia.",
      },
    ],
    topic: "Mundo/Meio Ambiente",
  },
  {
    question:
      "De acordo com o relatório da Organização Meteorológica Mundial (OMM), como o ano de 2025 foi preliminarmente classificado em termos de temperatura global?",
    options: [
      {
        text: "O ano mais frio da última década, devido ao La Niña.",
        isCorrect: false,
        rationale:
          "O aquecimento global manteve a temperatura em patamares recordes.",
      },
      {
        text: "O ano de maior estabilidade climática, sem recordes.",
        isCorrect: false,
        rationale:
          "As temperaturas permaneceram altas, quebrando recordes mensais.",
      },
      {
        text: "O segundo ou terceiro ano mais quente já registrado.",
        isCorrect: true,
        rationale:
          "Apesar de levemente abaixo de 2024, 2025 manteve-se entre os anos mais quentes da história, segundo a OMM.",
      },
      {
        text: "Um ano de anomalia negativa, com temperaturas abaixo da média.",
        isCorrect: false,
        rationale:
          "O relatório indica anomalia positiva (acima da média) de temperatura.",
      },
    ],
    topic: "Mundo/Clima",
  },
  {
    question:
      "Qual organização internacional, criada em 1945 com o objetivo de promover a paz e a cooperação, é foco de debates atuais sobre a necessidade de reforma de seu Conselho de Segurança?",
    options: [
      {
        text: "Organização Mundial do Comércio (OMC).",
        isCorrect: false,
        rationale: "A OMC é focada em comércio.",
      },
      {
        text: "Organização do Tratado do Atlântico Norte (OTAN).",
        isCorrect: false,
        rationale: "A OTAN é uma aliança militar.",
      },
      {
        text: "Organização das Nações Unidas (ONU).",
        isCorrect: true,
        rationale:
          "A ONU, criada em 1945, é o principal foro de paz, e seu Conselho de Segurança é frequentemente debatido.",
      },
      {
        text: "Cúpula da Juventude do BRICS.",
        isCorrect: false,
        rationale: "O BRICS é um bloco econômico e político.",
      },
    ],
    topic: "Mundo/Política",
  },
  {
    question:
      "Na área de tecnologia e inovação, qual evento global realizado em Lisboa, Portugal, em Novembro de 2025, teve uma grande delegação de startups do Brasil?",
    options: [
      {
        text: "CES 2025.",
        isCorrect: false,
        rationale: "A CES é realizada nos EUA (Las Vegas).",
      },
      {
        text: "World Economic Forum (Davos).",
        isCorrect: false,
        rationale: "O Fórum de Davos foca em economia e política.",
      },
      {
        text: "Web Summit Lisboa 2025.",
        isCorrect: true,
        rationale:
          "O Web Summit é um dos maiores encontros de tecnologia e startups do mundo.",
      },
      {
        text: "GITEX Global.",
        isCorrect: false,
        rationale:
          "O GITEX Global é um evento de tecnologia realizado em Dubai.",
      },
    ],
    topic: "Mundo/Tecnologia",
  },
  {
    question:
      "Qual o principal foco da Organização Mundial da Saúde (OMS) em 2025, após a pandemia de COVID-19, em termos de preparo global de saúde pública?",
    options: [
      {
        text: "A criação de um Tratado Pandêmico para prevenção e resposta a futuras pandemias.",
        isCorrect: true,
        rationale:
          "O principal esforço global da OMS em 2025 foi negociar um Tratado Pandêmico para garantir uma resposta coordenada a futuras crises de saúde global.",
      },
      {
        text: "A campanha global de erradicação da Malária até o fim da década.",
        isCorrect: false,
        rationale:
          "A erradicação da Malária é um objetivo, mas o foco principal em 2025 foi a preparação para pandemias.",
      },
      {
        text: "A padronização das vacinas de gripe em todos os países membros.",
        isCorrect: false,
        rationale:
          "Essa é uma atividade de rotina, não o foco principal da agenda de saúde global pós-pandemia.",
      },
      {
        text: "A criação de um imposto global sobre refrigerantes para combater a obesidade.",
        isCorrect: false,
        rationale:
          "Embora seja uma discussão de saúde pública, não é o foco principal da agenda da OMS em 2025.",
      },
    ],
    topic: "Mundo/Saúde",
  },
  // ATENÇÃO: A vírgula é essencial para conectar com o array anterior!
  // --- NOVAS QUESTÕES DE MARTINÓPOLE (História e Geografia) ---
  {
    question:
      "Qual era o nome original do povoado que deu origem a Martinópole, antes da homenagem ao Padre Vicente Martins?",
    options: [
      {
        text: "Riachão.",
        isCorrect: false,
        rationale: "Riachão era o antigo nome de Uruoca, município vizinho.",
      },
      {
        text: "Angica.",
        isCorrect: true,
        rationale:
          "O município se originou de uma fazenda nas proximidades da Lagoa Angica, nome popular de uma árvore.",
      },
      {
        text: "Sobral Velho.",
        isCorrect: false,
        rationale:
          "Sobral é uma cidade maior na região, não a origem de Martinópole.",
      },
      {
        text: "Jaguaribe Mirim.",
        isCorrect: false,
        rationale: "Nome não relacionado à história da cidade.",
      },
    ],
    topic: "Martinópole/História",
  },
  {
    question:
      "A emancipação política de Martinópole ocorreu em 26 de Março de 1957. Qual município deu origem ao território de Martinópole?",
    options: [
      {
        text: "Senador Sá.",
        isCorrect: false,
        rationale: "Senador Sá é um município limítrofe, mas não o de origem.",
      },
      {
        text: "Granja.",
        isCorrect: true,
        rationale:
          "Martinópole era um distrito pertencente ao município de Granja antes de sua emancipação.",
      },
      {
        text: "Uruoca.",
        isCorrect: false,
        rationale: "Uruoca também foi desmembrado de Granja posteriormente.",
      },
      {
        text: "Santana do Acaraú.",
        isCorrect: false,
        rationale:
          "Santana do Acaraú é uma das cidades de origem dos migrantes da seca, mas não o município-mãe.",
      },
    ],
    topic: "Martinópole/História-Geografia",
  },
  {
    question:
      "Qual a microrregião do Ceará onde Martinópole está inserida, segundo a divisão geográfica do estado?",
    options: [
      {
        text: "Microrregião de Sobral.",
        isCorrect: false,
        rationale: "Sobral é vizinha, mas não a microrregião de Martinópole.",
      },
      {
        text: "Microrregião do Litoral de Camocim e Acaraú.",
        isCorrect: true,
        rationale:
          "Martinópole faz parte desta microrregião no Noroeste Cearense.",
      },
      {
        text: "Microrregião de Baturité.",
        isCorrect: false,
        rationale: "Localizada em outra região do estado.",
      },
      {
        text: "Microrregião da Serra da Ibiapaba.",
        isCorrect: false,
        rationale:
          "A Ibiapaba é uma serra próxima, mas não a microrregião de Martinópole.",
      },
    ],
    topic: "Martinópole/Geografia",
  },
  {
    question:
      "Qual o principal tipo de vegetação predominante no território de Martinópole, característico da região semiárida do Ceará?",
    options: [
      {
        text: "Mata Atlântica.",
        isCorrect: false,
        rationale: "Não é a vegetação predominante da região.",
      },
      {
        text: "Floresta Amazônica.",
        isCorrect: false,
        rationale: "Completamente incorreto para o Ceará.",
      },
      {
        text: "Caatinga Arbustiva Aberta.",
        isCorrect: true,
        rationale:
          "A Caatinga é o bioma predominante, com a classificação de Caatinga Arbustiva Aberta sendo comum na área.",
      },
      {
        text: "Cerrado.",
        isCorrect: false,
        rationale:
          "O Cerrado é encontrado mais ao sul do Ceará e em outros estados.",
      },
    ],
    topic: "Martinópole/Geografia",
  },
  {
    question:
      "Em Outubro de 2024, Martinópole realizou eleições municipais. Quem foi eleito Prefeito(a) para o mandato 2025-2028?",
    options: [
      {
        text: "Filipão (UNIÃO).",
        isCorrect: false,
        rationale: "Foi o candidato que obteve o segundo lugar.",
      },
      {
        text: "Betão Do James Bel (PP).",
        isCorrect: true,
        rationale:
          "Betão Do James Bel foi eleito prefeito de Martinópole nas eleições de 2024.",
      },
      {
        text: "Dra. Larissa Linhares (PSB).",
        isCorrect: false,
        rationale: "Foi a vereadora mais votada nas eleições de 2024.",
      },
      {
        text: "O pleito foi anulado e haverá eleição suplementar em 2025.",
        isCorrect: false,
        rationale: "O pleito foi validado com a eleição de Betão.",
      },
    ],
    topic: "Martinópole/Política",
  },
  {
    question:
      "O Hospital Municipal de Martinópole, batizado com o nome de qual santa, foi destaque em 2025 por realizar procedimentos de Artroscopia e Reconstrução de LCA?",
    options: [
      {
        text: "Hospital São Francisco.",
        isCorrect: false,
        rationale: "Não é o nome do hospital municipal.",
      },
      {
        text: "Hospital Imaculada Conceição.",
        isCorrect: true,
        rationale:
          "O Hospital Imaculada Conceição, em Martinópole, realizou procedimentos de alta complexidade como Artroscopia em 2025.",
      },
      {
        text: "Hospital Nossa Senhora da Saúde.",
        isCorrect: false,
        rationale: "Não é o nome correto.",
      },
      {
        text: "Hospital Monsenhor Vicente Martins.",
        isCorrect: false,
        rationale:
          "Embora o Monsenhor seja homenageado no nome da cidade, não é o nome do hospital.",
      },
    ],
    topic: "Martinópole/Saúde",
  },
  {
    question:
      "Em Dezembro de 2024, Martinópole foi reconhecida com o Selo UNICEF por seus avanços. Qual foi o principal foco das políticas públicas reconhecidas pelo Selo?",
    options: [
      {
        text: "Expansão da rede de saneamento básico e coleta de lixo.",
        isCorrect: false,
        rationale:
          "O foco principal do Selo UNICEF é em direitos de crianças e adolescentes.",
      },
      {
        text: "Avanços em políticas para crianças e adolescentes.",
        isCorrect: true,
        rationale:
          "O Selo UNICEF reconhece municípios que demonstram progressos concretos na garantia dos direitos de crianças e adolescentes.",
      },
      {
        text: "Promoção de eventos culturais e turísticos.",
        isCorrect: false,
        rationale: "Não é a área de foco do Selo UNICEF.",
      },
      {
        text: "Reforma do Código Tributário Municipal.",
        isCorrect: false,
        rationale: "É uma questão administrativa, não social.",
      },
    ],
    topic: "Martinópole/Social",
  },
  {
    question:
      "Qual a rodovia federal que passa próxima ou conecta a região de Martinópole a outras importantes cidades do Ceará e ao litoral?",
    options: [
      {
        text: "BR-116.",
        isCorrect: false,
        rationale: "A BR-116 corta o Ceará, mas em outra região.",
      },
      {
        text: "BR-304.",
        isCorrect: false,
        rationale: "A BR-304 liga o Ceará ao Rio Grande do Norte.",
      },
      {
        text: "BR-222.",
        isCorrect: true,
        rationale:
          "A BR-222 é uma importante rodovia que passa pelo Noroeste Cearense, ligando a região de Sobral e Acaraú.",
      },
      {
        text: "Transamazônica (BR-230).",
        isCorrect: false,
        rationale: "Não passa na região.",
      },
    ],
    topic: "Martinópole/Geografia",
  },

  // --- NOVAS QUESTÕES SOBRE CEARÁ E BRASIL (Atualidades e Conhecimentos Gerais) ---
  {
    question:
      "Qual é a principal característica climática da maior parte do território cearense, que inclui a região de Martinópole?",
    options: [
      {
        text: "Tropical Úmido Litorâneo.",
        isCorrect: false,
        rationale: "Ocorre apenas na faixa costeira.",
      },
      {
        text: "Subtropical de Altitude.",
        isCorrect: false,
        rationale: "Não existe no Ceará.",
      },
      {
        text: "Tropical Quente Semiárido Brando.",
        isCorrect: true,
        rationale:
          "Esta é a classificação predominante, caracterizada por chuvas irregulares e altas temperaturas.",
      },
      {
        text: "Equatorial.",
        isCorrect: false,
        rationale: "Ocorre na região amazônica.",
      },
    ],
    topic: "Ceará/Geografia",
  },
  {
    question:
      "Em 2025, o Ceará continuou sendo um destaque na produção de energia renovável. Qual é a principal fonte de energia limpa produzida na costa cearense, com parques eólicos 'offshore' em planejamento?",
    options: [
      {
        text: "Energia Geotérmica.",
        isCorrect: false,
        rationale: "Não é a principal fonte de energia limpa no litoral.",
      },
      {
        text: "Energia Nuclear.",
        isCorrect: false,
        rationale: "Não é energia limpa e não é produzida no Ceará.",
      },
      {
        text: "Energia Eólica (dos ventos).",
        isCorrect: true,
        rationale:
          "O Ceará é um dos líderes nacionais em produção de energia eólica, e a costa tem potencial para parques offshore (no mar).",
      },
      {
        text: "Biomassa (cana-de-açúcar).",
        isCorrect: false,
        rationale:
          "A biomassa é importante, mas a energia eólica é a que se destaca na costa.",
      },
    ],
    topic: "Ceará/Economia",
  },
  {
    question:
      "Qual termo define o fenômeno político-social no Ceará do século XX, especialmente na Primeira República, onde grandes famílias controlavam a política local em troca de votos?",
    options: [
      {
        text: "Reforma Agrária.",
        isCorrect: false,
        rationale: "Não é o termo correto para o fenômeno político.",
      },
      {
        text: "Coronelismo.",
        isCorrect: true,
        rationale:
          "O Coronelismo foi o sistema de poder local baseado na troca de favores (clientelismo) e controle do voto de cabresto.",
      },
      {
        text: "Tenentismo.",
        isCorrect: false,
        rationale: "O Tenentismo foi um movimento militar.",
      },
      {
        text: "Movimento Abolicionista.",
        isCorrect: false,
        rationale:
          "O Ceará foi o primeiro a abolir a escravidão, mas não define a política da Primeira República.",
      },
    ],
    topic: "Ceará/História",
  },
  {
    question:
      "Em 2025, o Brasil alcançou um superávit recorde na Balança Comercial. Qual commodity agrícola, historicamente ligada ao agronegócio, foi a principal responsável por este resultado positivo?",
    options: [
      {
        text: "Café.",
        isCorrect: false,
        rationale:
          "O café é importante, mas não é a commodity mais exportada atualmente.",
      },
      {
        text: "Soja.",
        isCorrect: true,
        rationale:
          "A soja, e o complexo da soja, são a principal commodity brasileira de exportação, sendo o maior motor do superávit.",
      },
      {
        text: "Carne Bovina.",
        isCorrect: false,
        rationale:
          "A carne é importante, mas fica atrás da soja em valor total de exportação.",
      },
      {
        text: "Manga e Uva.",
        isCorrect: false,
        rationale: "Embora importantes, são nichos regionais.",
      },
    ],
    topic: "Brasil/Economia",
  },
  {
    question:
      "Em 2025, o debate sobre o Marco Civil da Internet no Brasil foi retomado. Qual é o principal objetivo desta lei?",
    options: [
      {
        text: "Impor censura prévia em conteúdos políticos.",
        isCorrect: false,
        rationale:
          "O Marco Civil visa a liberdade de expressão e a neutralidade.",
      },
      {
        text: "Regulamentar exclusivamente o uso de Pix e transações financeiras.",
        isCorrect: false,
        rationale: "O Pix é regulado pelo Banco Central.",
      },
      {
        text: "Estabelecer princípios, garantias, direitos e deveres para o uso da Internet no Brasil.",
        isCorrect: true,
        rationale:
          "O Marco Civil é a 'Constituição da Internet', garantindo neutralidade de rede e privacidade.",
      },
      {
        text: "Proibir o uso de Inteligência Artificial em serviços públicos.",
        isCorrect: false,
        rationale: "A IA está sendo debatida em leis separadas.",
      },
    ],
    topic: "Brasil/Tecnologia",
  },
  {
    question:
      "Qual o evento geopolítico de maior destaque em 2025, que manteve a tensão global entre grandes potências, envolvendo a Ucrânia e países ocidentais?",
    options: [
      {
        text: "A guerra civil na Síria.",
        isCorrect: false,
        rationale: "Embora exista, não foi o maior destaque global em 2025.",
      },
      {
        text: "O conflito entre Rússia e Ucrânia.",
        isCorrect: true,
        rationale:
          "A guerra na Ucrânia continuou sendo o principal ponto de tensão geopolítica entre potências globais em 2025.",
      },
      {
        text: "O plebiscito sobre a reunificação das Coreias.",
        isCorrect: false,
        rationale: "Não ocorreu em 2025.",
      },
      {
        text: "A criação de uma moeda única para o Mercosul.",
        isCorrect: false,
        rationale: "É um tema econômico regional, não o maior conflito global.",
      },
    ],
    topic: "Mundo/Política",
  },
  {
    question:
      "Qual é a principal organização internacional responsável pela coordenação global de ações contra as mudanças climáticas, sendo a sede das COPs (Conferências das Partes)?",
    options: [
      { text: "G20.", isCorrect: false, rationale: "O G20 foca em economia." },
      {
        text: "Organização Mundial do Comércio (OMC).",
        isCorrect: false,
        rationale: "Focada em comércio.",
      },
      {
        text: "ONU - Convenção-Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC).",
        isCorrect: true,
        rationale:
          "A UNFCCC é a entidade da ONU que coordena as negociações e organiza as COPs.",
      },
      {
        text: "Organização Mundial da Saúde (OMS).",
        isCorrect: false,
        rationale: "Focada em saúde.",
      },
    ],
    topic: "Mundo/Meio Ambiente",
  },
  {
    question:
      "Qual cidade cearense, conhecida por seu turismo de praia e destino internacional, está sediando importantes eventos e debates sobre sustentabilidade e economia azul em 2025?",
    options: [
      {
        text: "Juazeiro do Norte.",
        isCorrect: false,
        rationale: "Localizada no interior e conhecida pelo turismo religioso.",
      },
      {
        text: "Fortaleza.",
        isCorrect: true,
        rationale:
          "Fortaleza, a capital, é o principal polo de eventos internacionais e debates econômicos do Ceará.",
      },
      {
        text: "Crato.",
        isCorrect: false,
        rationale: "Localizada no Cariri, interior do estado.",
      },
      {
        text: "Sobral.",
        isCorrect: false,
        rationale:
          "Importante centro educacional do interior, mas não o principal polo de eventos de economia azul.",
      },
    ],
    topic: "Ceará/Atualidades",
  },
  {
    question:
      "Qual o principal critério utilizado pelo IBGE para classificar um domicílio como 'urbano' ou 'rural' em Martinópole?",
    options: [
      {
        text: "Presença de internet de banda larga.",
        isCorrect: false,
        rationale:
          "Critério de infraestrutura, não de classificação demográfica principal.",
      },
      {
        text: "Localização dentro dos limites da sede municipal ou de um distrito, conforme lei municipal.",
        isCorrect: true,
        rationale:
          "A delimitação legal da área urbana (sede e distritos) é o critério básico do IBGE.",
      },
      {
        text: "Rendimento médio mensal per capita dos moradores.",
        isCorrect: false,
        rationale: "É um critério econômico, não de localização.",
      },
      {
        text: "Existência de mais de 100 habitantes.",
        isCorrect: false,
        rationale:
          "O critério é legal e administrativo, não apenas populacional.",
      },
    ],
    topic: "Martinópole/Demografia",
  },
  {
    question:
      "Em Martinópole, o Plano Plurianual (PPA) é um instrumento de gestão pública. Qual o período de vigência de um PPA, conforme a legislação federal?",
    options: [
      {
        text: "Um ano (coincidindo com o exercício financeiro).",
        isCorrect: false,
        rationale: "Isso é o que o orçamento (LOA) faz.",
      },
      {
        text: "Quatro anos, iniciando no segundo ano do mandato do prefeito.",
        isCorrect: true,
        rationale:
          "O PPA é quadrienal, começando no segundo ano do mandato e terminando no primeiro ano do mandato seguinte.",
      },
      {
        text: "Três anos, coincidindo com o mandato do Legislativo.",
        isCorrect: false,
        rationale: "Não coincide com o mandato do Legislativo.",
      },
      {
        text: "Cinco anos, para permitir um planejamento de longo prazo.",
        isCorrect: false,
        rationale: "A vigência é de quatro anos.",
      },
    ],
    topic: "Martinópole/Administração",
  },
  {
    question:
      "O Índice de Desenvolvimento da Educação Básica (IDEB) é uma meta importante para Martinópole. Qual o nível de escolaridade que o IDEB avalia nos municípios?",
    options: [
      {
        text: "Apenas Ensino Médio.",
        isCorrect: false,
        rationale: "O Ensino Médio é de responsabilidade majoritária estadual.",
      },
      {
        text: "Apenas Ensino Superior.",
        isCorrect: false,
        rationale: "Não é foco do IDEB.",
      },
      {
        text: "Ensino Fundamental (Anos Iniciais e Finais) e Ensino Médio.",
        isCorrect: true,
        rationale:
          "O IDEB é calculado para os anos iniciais e finais do Ensino Fundamental e para o Ensino Médio.",
      },
      {
        text: "Apenas Educação Infantil (Creche e Pré-escola).",
        isCorrect: false,
        rationale: "A Educação Infantil não é contemplada no cálculo do IDEB.",
      },
    ],
    topic: "Ceará/Educação",
  },
  {
    question:
      "Qual o bioma brasileiro que concentra a maior biodiversidade do planeta e cuja preservação é central nas negociações climáticas globais de 2025?",
    options: [
      {
        text: "Caatinga.",
        isCorrect: false,
        rationale:
          "A Caatinga é importante, mas a Amazônia tem a maior biodiversidade.",
      },
      {
        text: "Cerrado.",
        isCorrect: false,
        rationale:
          "O Cerrado é a savana mais biodiversa, mas fica atrás da Amazônia.",
      },
      {
        text: "Mata Atlântica.",
        isCorrect: false,
        rationale: "Muito desmatada, mas não é a maior do mundo.",
      },
      {
        text: "Floresta Amazônica.",
        isCorrect: true,
        rationale:
          "A Amazônia é o bioma mais biodiverso e fundamental no combate à crise climática.",
      },
    ],
    topic: "Brasil/Meio Ambiente",
  },
  {
    question:
      "Qual a principal causa histórica do êxodo rural (migração do campo para a cidade) no Ceará e em Martinópole, especialmente no século XX?",
    options: [
      {
        text: "O crescimento acelerado do turismo na capital.",
        isCorrect: false,
        rationale:
          "Embora seja um atrativo, não é a causa histórica principal do êxodo.",
      },
      {
        text: "A falta de acesso à internet de banda larga no interior.",
        isCorrect: false,
        rationale: "Fator recente, não histórico.",
      },
      {
        text: "As secas cíclicas e a concentração de terras (questão agrária).",
        isCorrect: true,
        rationale:
          "As grandes secas e a estrutura fundiária concentrada são os motores históricos do êxodo rural cearense.",
      },
      {
        text: "A proibição da caça e da pesca em lagoas do interior.",
        isCorrect: false,
        rationale: "Não é a principal causa.",
      },
    ],
    topic: "Ceará/História-Social",
  },
  {
    question:
      "Qual a Organização Internacional que, em 2025, tem focado em alertar sobre a necessidade de um sistema de saúde global resiliente, após o impacto da COVID-19?",
    options: [
      {
        text: "OTAN (Organização do Tratado do Atlântico Norte).",
        isCorrect: false,
        rationale: "É uma aliança militar.",
      },
      {
        text: "Banco Mundial (BM).",
        isCorrect: false,
        rationale: "Focada em desenvolvimento econômico.",
      },
      {
        text: "Organização Mundial da Saúde (OMS).",
        isCorrect: true,
        rationale: "A OMS é a agência especializada da ONU em saúde.",
      },
      {
        text: "Agência Espacial Europeia (ESA).",
        isCorrect: false,
        rationale: "Focada em espaço e ciência.",
      },
    ],
    topic: "Mundo/Saúde",
  },
  {
    question:
      "O Índice de Pobreza Multidimensional (IPM) é um indicador social que mede as carências de uma população. O que o IPM considera, além da renda?",
    options: [
      {
        text: "Apenas o número de veículos por família.",
        isCorrect: false,
        rationale: "É muito mais abrangente.",
      },
      {
        text: "Acesso a saúde, educação, padrão de vida (água, eletricidade) e outros.",
        isCorrect: true,
        rationale:
          "O IPM mede a pobreza por meio de múltiplas privações além da falta de dinheiro.",
      },
      {
        text: "Apenas a participação política e a liberdade de expressão.",
        isCorrect: false,
        rationale: "Esses são critérios de liberdade civil.",
      },
      {
        text: "Somente a taxa de desemprego dos jovens.",
        isCorrect: false,
        rationale: "É uma métrica específica de mercado de trabalho.",
      },
    ],
    topic: "Brasil/Social",
  },
  {
    question:
      "Em 2025, o Vale-Gás Social continuou sendo um importante benefício social do Governo do Ceará. Qual a finalidade deste programa?",
    options: [
      {
        text: "Oferecer crédito para a compra de eletrodomésticos.",
        isCorrect: false,
        rationale: "Não é o objetivo do Vale-Gás.",
      },
      {
        text: "Fornecer um auxílio financeiro para a compra de gás de cozinha (GLP).",
        isCorrect: true,
        rationale:
          "O Vale-Gás Social garante a compra do Gás Liquefeito de Petróleo para famílias vulneráveis.",
      },
      {
        text: "Garantir a matrícula em escolas da rede estadual.",
        isCorrect: false,
        rationale: "É uma política de assistência social, não de educação.",
      },
      {
        text: "Doar cestas básicas mensais para a população rural.",
        isCorrect: false,
        rationale: "A doação de cestas básicas é outra política social.",
      },
    ],
    topic: "Ceará/Social",
  },
  {
    question:
      "Qual a principal função da Secretaria Municipal de Administração de Martinópole, conforme a estrutura administrativa da prefeitura?",
    options: [
      {
        text: "Realizar cirurgias e procedimentos de alta complexidade no Hospital.",
        isCorrect: false,
        rationale: "Função da Secretaria de Saúde.",
      },
      {
        text: "Cuidar da gestão de pessoas, material, patrimônio e serviços internos do Município.",
        isCorrect: true,
        rationale:
          "A Secretaria de Administração é o órgão de apoio e gestão interna da máquina pública.",
      },
      {
        text: "Elaborar o Código de Trânsito Municipal e multar veículos.",
        isCorrect: false,
        rationale: "Função da Secretaria de Segurança Pública e Trânsito.",
      },
      {
        text: "Promover eventos de forró e quadrilhas juninas.",
        isCorrect: false,
        rationale: "Função da Secretaria de Cultura, Esporte e Turismo.",
      },
    ],
    topic: "Martinópole/Administração",
  },
  {
    question:
      "Em Outubro de 2025, a Câmara Municipal de Martinópole decretou luto oficial. Qual a principal função do Poder Legislativo Municipal?",
    options: [
      {
        text: "Administrar o orçamento do município e nomear secretários.",
        isCorrect: false,
        rationale: "Função do Poder Executivo (Prefeito).",
      },
      {
        text: "Julgar o Prefeito e os Secretários por crimes de responsabilidade.",
        isCorrect: false,
        rationale:
          "Função do Judiciário e, em parte, da Câmara, mas não é a principal.",
      },
      {
        text: "Elaborar, votar leis e fiscalizar os atos do Poder Executivo (Prefeitura).",
        isCorrect: true,
        rationale:
          "A principal função da Câmara de Vereadores é legislar e fiscalizar o Executivo.",
      },
      {
        text: "Controlar o sistema de iluminação pública.",
        isCorrect: false,
        rationale: "Função do Poder Executivo ou de concessionárias.",
      },
    ],
    topic: "Martinópole/Política",
  },
  {
    question:
      "Qual o significado da segunda parte do nome 'Martinópole' ('póle'), que vem do grego, e que foi adotado após a mudança de 'Martinópolis'?",
    options: [
      {
        text: "Terra do sol.",
        isCorrect: false,
        rationale: "Não é o significado de 'póle'.",
      },
      {
        text: "Rio.",
        isCorrect: false,
        rationale: "Não é o significado de 'póle'.",
      },
      {
        text: "Povoado (ou aldeia).",
        isCorrect: false,
        rationale: "O termo correto em grego tem sentido de centro urbano.",
      },
      {
        text: "Cidade.",
        isCorrect: true,
        rationale:
          "Pólis (ou 'póle' na forma combinada) significa 'Cidade' em grego, homenageando o Padre Martins: 'Cidade de Martins'.",
      },
    ],
    topic: "Martinópole/História",
  },
  {
    question:
      "Em 2025, o BRICS, bloco que inclui o Brasil, realizou uma importante reunião. Qual é o principal objetivo geopolítico do BRICS?",
    options: [
      {
        text: "Criar uma moeda única mundial.",
        isCorrect: false,
        rationale: "Ainda não é um objetivo formal e único.",
      },
      {
        text: "Expandir o Tratado de Não Proliferação Nuclear.",
        isCorrect: false,
        rationale: "Não é o foco principal do bloco.",
      },
      {
        text: "Promover a cooperação e aumentar a influência de economias emergentes no cenário global.",
        isCorrect: true,
        rationale:
          "O BRICS é um agrupamento de economias emergentes que buscam maior representatividade global.",
      },
      {
        text: "Desenvolver tecnologia de foguetes para o espaço.",
        isCorrect: false,
        rationale: "Não é o foco principal.",
      },
    ],
    topic: "Mundo/Política",
  },
  {
    question:
      "Qual dos seguintes elementos geográficos NÃO é limítrofe (vizinho) do município de Martinópole?",
    options: [
      {
        text: "Uruoca.",
        isCorrect: false,
        rationale: "Uruoca é um município vizinho.",
      },
      {
        text: "Granja.",
        isCorrect: false,
        rationale: "Granja, município-mãe, é vizinho.",
      },
      {
        text: "Senador Sá.",
        isCorrect: false,
        rationale: "Senador Sá é um município vizinho.",
      },
      {
        text: "Jijoca de Jericoacoara.",
        isCorrect: true,
        rationale:
          "Jijoca está mais distante, com outros municípios entre ele e Martinópole.",
      },
    ],
    topic: "Martinópole/Geografia",
  },
  {
    question:
      "Qual é a principal característica da estrutura fundiária no Ceará, que historicamente contribui para a desigualdade social e o êxodo rural?",
    options: [
      {
        text: "A predominância de pequenas propriedades de agricultura familiar (minifúndios).",
        isCorrect: false,
        rationale:
          "Há minifúndios, mas a característica principal é a concentração.",
      },
      {
        text: "A ausência de terras cultiváveis devido à seca extrema.",
        isCorrect: false,
        rationale: "Há terras cultiváveis, mas o problema é a distribuição.",
      },
      {
        text: "A alta concentração de terras nas mãos de poucos proprietários (latifúndios).",
        isCorrect: true,
        rationale:
          "A concentração fundiária histórica é um grande fator de desigualdade no Ceará.",
      },
      {
        text: "A estatização de todas as grandes fazendas.",
        isCorrect: false,
        rationale: "Isto não ocorreu.",
      },
    ],
    topic: "Ceará/Social",
  },
  {
    question:
      "Qual o evento esportivo que movimentou Martinópole no início de 2025 e que foi promovido pela Secretaria de Cultura, Esporte e Turismo?",
    options: [
      {
        text: "Campeonato Martinopolense de Vôlei de Areia.",
        isCorrect: false,
        rationale: "Não foi o principal campeonato divulgado.",
      },
      {
        text: "Campeonato Martinopolense de Futsal Master.",
        isCorrect: true,
        rationale:
          "O Campeonato Martinopolense de Futsal Master teve seu início divulgado no calendário de 2025.",
      },
      {
        text: "Maratona Aquática da Lagoa da Angica.",
        isCorrect: false,
        rationale:
          "Não há menção de uma maratona aquática como principal evento.",
      },
      {
        text: "Copa Martinopolense de Futebol de Campo.",
        isCorrect: false,
        rationale: "O Futsal foi o evento Master de destaque.",
      },
    ],
    topic: "Martinópole/Cultura-Esporte",
  },
  {
    question:
      "A Organização das Nações Unidas (ONU) tem como um de seus principais objetivos os Objetivos de Desenvolvimento Sustentável (ODS). Qual o prazo final para que esses objetivos sejam alcançados globalmente?",
    options: [
      {
        text: "2030.",
        isCorrect: true,
        rationale: "Os ODS são parte da Agenda 2030 da ONU.",
      },
      {
        text: "2050.",
        isCorrect: false,
        rationale: "Prazo mais associado à neutralidade de carbono.",
      },
      { text: "2040.", isCorrect: false, rationale: "Prazo incorreto." },
      { text: "2028.", isCorrect: false, rationale: "Prazo incorreto." },
    ],
    topic: "Mundo/Social",
  },
  {
    question:
      "Qual o índice mais utilizado no Brasil para medir a concentração de renda, onde o valor '0' representa a igualdade perfeita?",
    options: [
      {
        text: "IPCA (Índice Nacional de Preços ao Consumidor Amplo).",
        isCorrect: false,
        rationale: "Mede a inflação.",
      },
      {
        text: "PIB per capita (Produto Interno Bruto por pessoa).",
        isCorrect: false,
        rationale: "Mede a riqueza, não a distribuição.",
      },
      {
        text: "Coeficiente de Gini.",
        isCorrect: true,
        rationale:
          "O Coeficiente de Gini é o padrão mundial para medir a desigualdade de renda ou riqueza, com '0' sendo igualdade máxima.",
      },
      {
        text: "IDH (Índice de Desenvolvimento Humano).",
        isCorrect: false,
        rationale:
          "Mede desenvolvimento em três dimensões: renda, saúde e educação.",
      },
    ],
    topic: "Brasil/Economia",
  },
  // ATENÇÃO: A vírgula é essencial para conectar com o array anterior!
  // --- QUESTÕES SOBRE CEARÁ (Hidrogênio Verde, Economia, Ciência) ---
  {
    question:
      "Qual é o principal polo industrial e portuário do Ceará que está sendo ativamente desenvolvido como um hub de Hidrogênio Verde (H2V) em 2025?",
    options: [
      {
        text: "Porto do Mucuripe (Fortaleza).",
        isCorrect: false,
        rationale:
          "O Porto do Mucuripe é importante, mas o polo de H2V está concentrado em outra área metropolitana.",
      },
      {
        text: "Complexo Industrial e Portuário do Pecém (CIPP).",
        isCorrect: true,
        rationale:
          "O CIPP, em São Gonçalo do Amarante/Caucaia, é o principal polo cearense para a produção e exportação de Hidrogênio Verde.",
      },
      {
        text: "Porto de Camocim.",
        isCorrect: false,
        rationale: "É um porto secundário, não o hub de H2V.",
      },
      {
        text: "Complexo Industrial do Cariri.",
        isCorrect: false,
        rationale: "O Cariri é um polo de serviços, mas não o hub de H2V.",
      },
    ],
    topic: "Ceará/Economia-Meio Ambiente",
  },
  {
    question:
      "Qual gás é considerado 'verde' quando é produzido a partir da eletrólise da água utilizando energia de fontes renováveis (eólica/solar), sendo o foco do Ceará?",
    options: [
      {
        text: "Metano (CH4).",
        isCorrect: false,
        rationale: "O Metano é um gás de efeito estufa.",
      },
      {
        text: "Dióxido de Carbono (CO2).",
        isCorrect: false,
        rationale: "É o principal gás do aquecimento global.",
      },
      {
        text: "Nitrogênio (N2).",
        isCorrect: false,
        rationale: "É o gás mais abundante na atmosfera.",
      },
      {
        text: "Hidrogênio (H2).",
        isCorrect: true,
        rationale:
          "O Hidrogênio (H2) é a molécula que, quando produzida com energia limpa, é classificada como 'verde' (H2V).",
      },
    ],
    topic: "Ceará/Ciência",
  },
  {
    question:
      "Qual escritora cearense, primeira mulher a ingressar na Academia Brasileira de Letras (ABL) em 1977, é autora de 'O Quinze'?",
    options: [
      {
        text: "Adélia Prado.",
        isCorrect: false,
        rationale:
          "Adélia Prado é mineira e entrou na ABL após Rachel de Queiroz.",
      },
      {
        text: "Nísia Floresta.",
        isCorrect: false,
        rationale: "Pioneira nordestina, mas não a primeira na ABL.",
      },
      {
        text: "Rachel de Queiroz.",
        isCorrect: true,
        rationale:
          "Rachel de Queiroz, nascida em Fortaleza, é a autora de 'O Quinze', um romance sobre a seca de 1915, e a primeira mulher a ser eleita para a ABL.",
      },
      {
        text: "Cora Coralina.",
        isCorrect: false,
        rationale: "Cora Coralina é goiana.",
      },
    ],
    topic: "Ceará/Cultura",
  },
  {
    question:
      "Qual o principal critério que levou o Porto do Pecém a ser classificado como a primeira Zona de Processamento de Exportação (ZPE) do Brasil?",
    options: [
      {
        text: "Isenção total de impostos para todos os produtos.",
        isCorrect: false,
        rationale: "Há isenção de IPI e PIS/Cofins, mas não é total.",
      },
      {
        text: "Restrição de operações apenas para o mercado interno.",
        isCorrect: false,
        rationale: "O foco é na exportação, não no mercado interno.",
      },
      {
        text: "Possibilidade de operar com suspensão de impostos federais para bens destinados à exportação.",
        isCorrect: true,
        rationale:
          "A ZPE é uma área de livre comércio com foco na produção e exportação, usufruindo de suspensão de impostos federais e estaduais.",
      },
      {
        text: "Prioridade para importação de veículos de luxo.",
        isCorrect: false,
        rationale: "Sem relação com a ZPE.",
      },
    ],
    topic: "Ceará/Economia",
  },

  // --- QUESTÕES SOBRE BRASIL (Reforma, Política e Ciência) ---
  {
    question:
      "Aprovada em 2023 e em regulamentação em 2025, qual é o principal objetivo da Reforma Tributária do consumo no Brasil?",
    options: [
      {
        text: "Aumentar a carga tributária sobre a renda dos mais pobres.",
        isCorrect: false,
        rationale:
          "O objetivo é simplificar, e não aumentar a carga sobre os pobres.",
      },
      {
        text: "Substituir o Imposto de Renda por um Imposto sobre Transações Digitais.",
        isCorrect: false,
        rationale:
          "A Reforma Tributária de 2023 foca no consumo, não na renda.",
      },
      {
        text: "Simplificar a cobrança de impostos sobre o consumo (ICMS, IPI, PIS/COFINS) unificando-os no IVA Dual.",
        isCorrect: true,
        rationale:
          "O objetivo central é unificar tributos federais, estaduais e municipais em um Imposto sobre Valor Agregado (IVA) dual: CBS (Federal) e IBS (Estadual/Municipal).",
      },
      {
        text: "Acabar com o Imposto sobre Produtos Industrializados (IPI).",
        isCorrect: false,
        rationale: "O IPI será substituído, mas não simplesmente extinto.",
      },
    ],
    topic: "Brasil/Economia-Política",
  },
  {
    question:
      "Em 2025, o Brasil avançou na discussão sobre a exploração de petróleo e gás em uma região costeira de grande sensibilidade ambiental. Qual é essa região?",
    options: [
      {
        text: "Bacia de Campos (Rio de Janeiro).",
        isCorrect: false,
        rationale: "A Bacia de Campos já é explorada há décadas.",
      },
      {
        text: "Bacia de Santos (Pré-Sal).",
        isCorrect: false,
        rationale: "Também já é explorada.",
      },
      {
        text: "Margem Equatorial (principalmente no Amapá e Pará).",
        isCorrect: true,
        rationale:
          "A Margem Equatorial é a nova fronteira de exploração da Petrobras, gerando grande debate ambiental devido à proximidade com o Amazonas.",
      },
      {
        text: "Bacia do Recôncavo Baiano.",
        isCorrect: false,
        rationale:
          "Área de exploração antiga, sem o mesmo foco de atualidade e debate.",
      },
    ],
    topic: "Brasil/Meio Ambiente-Economia",
  },
  {
    question:
      "Qual o principal órgão federal brasileiro responsável pela vigilância epidemiológica e pela produção de vacinas e medicamentos essenciais, fundamental na resposta a pandemias?",
    options: [
      {
        text: "Agência Nacional de Aviação Civil (ANAC).",
        isCorrect: false,
        rationale: "Regula a aviação.",
      },
      {
        text: "Fundação Oswaldo Cruz (FIOCRUZ).",
        isCorrect: true,
        rationale:
          "A FIOCRUZ é a principal instituição de ciência e tecnologia em saúde do país, vital na pesquisa, produção de vacinas e vigilância.",
      },
      {
        text: "Instituto de Pesquisas Tecnológicas (IPT).",
        isCorrect: false,
        rationale: "Foco em tecnologia e engenharia.",
      },
      {
        text: "Banco Nacional de Desenvolvimento Econômico e Social (BNDES).",
        isCorrect: false,
        rationale: "Banco de fomento.",
      },
    ],
    topic: "Brasil/Saúde-Ciência",
  },
  {
    question:
      "Qual o principal objetivo da PEC da Transição, utilizada pelo governo federal no final de 2022 e início de 2023, que redefiniu o teto de gastos?",
    options: [
      {
        text: "Reduzir o salário mínimo para economizar gastos públicos.",
        isCorrect: false,
        rationale: "O objetivo foi o contrário.",
      },
      {
        text: "Garantir recursos fora do teto de gastos para programas sociais como o Bolsa Família (Auxílio Brasil).",
        isCorrect: true,
        rationale:
          "A PEC da Transição permitiu que despesas essenciais, como o Bolsa Família, ficassem fora da regra do teto de gastos temporariamente.",
      },
      {
        text: "Privatizar todas as empresas estatais federais.",
        isCorrect: false,
        rationale: "Não era o foco da PEC.",
      },
      {
        text: "Criar uma moeda única com o Mercosul.",
        isCorrect: false,
        rationale: "Não tem relação com a PEC.",
      },
    ],
    topic: "Brasil/Política-Economia",
  },

  // --- QUESTÕES SOBRE MUNDO (Geopolítica, Ciência e Tecnologia) ---
  {
    question:
      "Qual é a principal função do Fundo Monetário Internacional (FMI) no sistema financeiro global?",
    options: [
      {
        text: "Financiar a construção de usinas nucleares em países desenvolvidos.",
        isCorrect: false,
        rationale: "Não é a função principal.",
      },
      {
        text: "Oferecer empréstimos a países membros em crise econômica (balanço de pagamentos) em troca de reformas fiscais.",
        isCorrect: true,
        rationale:
          "O FMI atua como 'credor de última instância', oferecendo assistência financeira a países com problemas de balanço de pagamentos, exigindo ajustes econômicos.",
      },
      {
        text: "Regulamentar o preço do petróleo internacionalmente.",
        isCorrect: false,
        rationale: "Função da OPEP e do mercado.",
      },
      {
        text: "Promover o livre comércio entre todos os países, sem tarifas.",
        isCorrect: false,
        rationale: "Função da OMC.",
      },
    ],
    topic: "Mundo/Economia",
  },
  {
    question:
      "Em 2025, a Agência Espacial Europeia (ESA) e a NASA continuaram focadas em qual planeta vizinho para futuras missões tripuladas e de exploração de vida passada?",
    options: [
      {
        text: "Júpiter.",
        isCorrect: false,
        rationale:
          "Júpiter é um gigante gasoso, não foco de missões tripuladas próximas.",
      },
      {
        text: "Vênus.",
        isCorrect: false,
        rationale:
          "Vênus é muito quente para a exploração de vida como a conhecemos.",
      },
      {
        text: "Marte.",
        isCorrect: true,
        rationale:
          "Marte é o principal foco da exploração de vida e de futuras missões tripuladas por EUA e ESA.",
      },
      {
        text: "Mercúrio.",
        isCorrect: false,
        rationale: "Muito próximo ao Sol.",
      },
    ],
    topic: "Mundo/Ciência",
  },
  {
    question:
      "Qual organização de defesa mútua, liderada pelos EUA, se expandiu em 2025 com a adesão de novos membros, aumentando as tensões com a Rússia?",
    options: [
      {
        text: "Cúpula do Mercosul.",
        isCorrect: false,
        rationale: "É um bloco econômico sul-americano.",
      },
      {
        text: "Liga Árabe.",
        isCorrect: false,
        rationale: "Organização de países árabes.",
      },
      {
        text: "Organização do Tratado do Atlântico Norte (OTAN).",
        isCorrect: true,
        rationale:
          "A OTAN é a aliança militar que tem se expandido para o leste europeu desde a guerra na Ucrânia.",
      },
      {
        text: "União Europeia (UE).",
        isCorrect: false,
        rationale: "É um bloco político-econômico.",
      },
    ],
    topic: "Mundo/Geopolítica",
  },
  {
    question:
      "O Protocolo de Kyoto e o Acordo de Paris são marcos na política ambiental global. Qual é a principal diferença de abordagem do Acordo de Paris em relação a Kyoto?",
    options: [
      {
        text: "O Acordo de Paris obriga apenas países ricos a cortar emissões.",
        isCorrect: false,
        rationale: "Kyoto tinha foco em países ricos; Paris envolve todos.",
      },
      {
        text: "O Acordo de Paris não exige metas de redução de emissões.",
        isCorrect: false,
        rationale: "Exige metas, mas são voluntárias (NDCs).",
      },
      {
        text: "O Acordo de Paris estabeleceu metas voluntárias (NDCs) de redução para todos os países, ricos e em desenvolvimento.",
        isCorrect: true,
        rationale:
          "O Acordo de Paris estabeleceu que todos os países devem apresentar Contribuições Nacionalmente Determinadas (NDCs) voluntárias.",
      },
      {
        text: "O Acordo de Paris foca apenas na redução do desmatamento.",
        isCorrect: false,
        rationale:
          "O foco é na redução de emissões de GEEs (Gases de Efeito Estufa).",
      },
    ],
    topic: "Mundo/Meio Ambiente",
  },

  // --- QUESTÕES DIVERSAS (Revisão e Aprofundamento) ---
  {
    question:
      "A Lei Orçamentária Anual (LOA) de Martinópole define as receitas e despesas para um período. Qual o período de vigência de uma LOA?",
    options: [
      {
        text: "Quatro anos, coincidindo com o mandato do prefeito.",
        isCorrect: false,
        rationale: "Este é o período do PPA (Plano Plurianual).",
      },
      {
        text: "Um ano, coincidindo com o exercício financeiro (1º de janeiro a 31 de dezembro).",
        isCorrect: true,
        rationale:
          "A LOA (Lei Orçamentária Anual) tem vigência de um ano (Exercício Financeiro).",
      },
      {
        text: "Três anos, coincidindo com o mandato dos vereadores.",
        isCorrect: false,
        rationale: "Prazo incorreto.",
      },
      {
        text: "Um ano e meio, para englobar dois ciclos agrícolas.",
        isCorrect: false,
        rationale: "Prazo incorreto.",
      },
    ],
    topic: "Martinópole/Administração",
  },
  {
    question:
      "Qual o principal destino dos produtos agrícolas (frutas tropicais, caju) cultivados no interior do Ceará, como parte da exportação brasileira?",
    options: [
      {
        text: "Países Africanos em desenvolvimento.",
        isCorrect: false,
        rationale: "Não é o principal destino.",
      },
      {
        text: "Estados Unidos e União Europeia.",
        isCorrect: true,
        rationale:
          "Os principais mercados para frutas frescas e derivados do caju são a Europa e os EUA, devido ao alto poder de compra.",
      },
      {
        text: "Países do BRICS (China, Índia, Rússia).",
        isCorrect: false,
        rationale:
          "Embora sejam parceiros, o mercado de frutas frescas é dominado pela Europa e EUA.",
      },
      {
        text: "Mercado interno brasileiro, principalmente o Nordeste.",
        isCorrect: false,
        rationale: "O foco econômico da grande produção é a exportação.",
      },
    ],
    topic: "Ceará/Economia",
  },
  {
    question:
      "Qual é a principal diferença entre os poderes de veto do Brasil no Conselho de Segurança da ONU e os dos membros permanentes (P5)?",
    options: [
      {
        text: "O Brasil não possui assento no Conselho de Segurança.",
        isCorrect: false,
        rationale: "O Brasil participa como membro não-permanente (rotativo).",
      },
      {
        text: "O Brasil tem poder de veto, mas só pode usá-lo em questões climáticas.",
        isCorrect: false,
        rationale: "O Brasil não possui poder de veto.",
      },
      {
        text: "Os membros permanentes (P5) possuem poder de veto; o Brasil, como membro rotativo, não possui.",
        isCorrect: true,
        rationale:
          "O poder de veto é exclusivo dos 5 membros permanentes (EUA, Reino Unido, França, Rússia e China).",
      },
      {
        text: "O Brasil tem poder de veto, mas precisa da aprovação de 14 membros.",
        isCorrect: false,
        rationale:
          "O veto anula qualquer resolução, independente do voto dos demais.",
      },
    ],
    topic: "Mundo/Política",
  },
  {
    question:
      "A Lagoa da Angica, próxima a Martinópole, é um importante recurso hídrico. Qual é a principal ameaça ambiental às lagoas e açudes do semiárido cearense?",
    options: [
      {
        text: "O aumento da precipitação anual.",
        isCorrect: false,
        rationale: "O aumento da chuva seria benéfico.",
      },
      {
        text: "O excesso de peixes de água salgada.",
        isCorrect: false,
        rationale: "As lagoas são de água doce ou salobra.",
      },
      {
        text: "A eutrofização (excesso de nutrientes) e o assoreamento (acúmulo de sedimentos).",
        isCorrect: true,
        rationale:
          "O assoreamento e a eutrofização causados pelo uso da terra e esgoto são as maiores ameaças hídricas no interior.",
      },
      {
        text: "A invasão de ursos polares.",
        isCorrect: false,
        rationale: "Absolutamente incorreto.",
      },
    ],
    topic: "Martinópole/Meio Ambiente",
  },
  {
    question:
      "Qual foi a principal causa da extinção do 'Bolsa Família' original (e sua substituição por 'Auxílio Brasil'), e a posterior criação do 'Novo Bolsa Família' em 2023?",
    options: [
      {
        text: "Exigência do FMI para corte de gastos.",
        isCorrect: false,
        rationale: "Não foi a causa.",
      },
      {
        text: "A vontade de rebatizar o programa social pelo novo governo eleito em 2023.",
        isCorrect: true,
        rationale:
          "O 'Auxílio Brasil' foi criado pelo governo anterior, e o 'Novo Bolsa Família' foi retomado e rebatizado pelo governo seguinte, um ato de mudança política e administrativa, mantendo a essência do benefício.",
      },
      {
        text: "O fim da pobreza no Brasil em 2022.",
        isCorrect: false,
        rationale: "A pobreza não acabou.",
      },
      {
        text: "A necessidade de financiar a Copa do Mundo de 2026.",
        isCorrect: false,
        rationale: "Sem relação.",
      },
    ],
    topic: "Brasil/Política-Social",
  },
  {
    question:
      "Em 2025, o Brasil e o Ceará investiram na tecnologia 5G. Qual é o principal benefício do 5G em relação ao 4G?",
    options: [
      {
        text: "Aumento do preço dos smartphones em 50%.",
        isCorrect: false,
        rationale: "É uma consequência indireta, não um benefício.",
      },
      {
        text: "Menor velocidade de download e maior latência (tempo de resposta).",
        isCorrect: false,
        rationale: "O 5G oferece maior velocidade e menor latência.",
      },
      {
        text: "Maior velocidade de transmissão de dados e latência ultrabaixa (essencial para cirurgias remotas e carros autônomos).",
        isCorrect: true,
        rationale:
          "A latência ultrabaixa do 5G é sua característica mais revolucionária, além da velocidade.",
      },
      {
        text: "Diminuição do número de antenas de transmissão.",
        isCorrect: false,
        rationale: "O 5G exige mais antenas.",
      },
    ],
    topic: "Brasil/Tecnologia",
  },
  {
    question:
      "Qual é o principal tipo de desastre natural que mais afeta a economia de Martinópole e do interior do Ceará, causando perdas na agricultura e pecuária?",
    options: [
      {
        text: "Terremotos.",
        isCorrect: false,
        rationale: "Raros e de baixa intensidade no Brasil.",
      },
      {
        text: "Tsunamis.",
        isCorrect: false,
        rationale: "Não ocorrem na costa nordestina.",
      },
      {
        text: "Secas prolongadas (estiagens).",
        isCorrect: true,
        rationale:
          "A seca é o maior desastre natural do Nordeste, afetando diretamente a produção de Martinópole.",
      },
      {
        text: "Neve e congelamento de rios.",
        isCorrect: false,
        rationale: "Incorreto.",
      },
    ],
    topic: "Martinópole/Meio Ambiente",
  },
  {
    question:
      "Qual é o principal instrumento de planejamento municipal, além da LOA e do PPA, que estabelece as diretrizes para o uso e ocupação do solo de Martinópole?",
    options: [
      {
        text: "Código de Defesa do Consumidor.",
        isCorrect: false,
        rationale: "Lei federal de relações de consumo.",
      },
      {
        text: "Plano Diretor Municipal (PDM).",
        isCorrect: true,
        rationale:
          "O PDM é obrigatório para cidades maiores ou com planejamento complexo, orientando o desenvolvimento urbano e rural.",
      },
      {
        text: "Código Penal.",
        isCorrect: false,
        rationale: "Lei federal de crimes.",
      },
      {
        text: "Lei de Diretrizes Orçamentárias (LDO).",
        isCorrect: false,
        rationale: "Foca no orçamento, não no uso do solo.",
      },
    ],
    topic: "Martinópole/Administração",
  },
  {
    question:
      "A Agência Nacional de Vigilância Sanitária (ANVISA) no Brasil é responsável por qual função essencial na saúde pública?",
    options: [
      {
        text: "Comercializar títulos públicos federais.",
        isCorrect: false,
        rationale: "Função da Secretaria do Tesouro Nacional.",
      },
      {
        text: "Regulamentar e fiscalizar produtos (alimentos, remédios, cosméticos) e serviços de saúde.",
        isCorrect: true,
        rationale:
          "A ANVISA garante a segurança sanitária de produtos e serviços.",
      },
      {
        text: "Organizar os concursos públicos federais.",
        isCorrect: false,
        rationale: "Função do Ministério da Gestão e Inovação.",
      },
      {
        text: "Distribuir cestas básicas para a população indígena.",
        isCorrect: false,
        rationale: "Função da FUNAI e do Governo Federal.",
      },
    ],
    topic: "Brasil/Saúde",
  },
  {
    question:
      "Qual o evento cultural tradicional de Martinópole que, geralmente, mobiliza a comunidade em comemoração religiosa e social no mês de Dezembro?",
    options: [
      {
        text: "A festa do Padroeiro São Francisco de Assis.",
        isCorrect: false,
        rationale: "Padroeira é Nossa Senhora da Conceição.",
      },
      {
        text: "As festas juninas do mês de Junho.",
        isCorrect: false,
        rationale: "Ocorre em Junho.",
      },
      {
        text: "A Festa da Padroeira Nossa Senhora da Conceição.",
        isCorrect: true,
        rationale:
          "As festividades da Imaculada Conceição em Dezembro são o ponto alto do calendário religioso de Martinópole.",
      },
      {
        text: "O Carnaval fora de época (Micareta).",
        isCorrect: false,
        rationale: "Ocorre em outras datas.",
      },
    ],
    topic: "Martinópole/Cultura",
  },
  {
    question:
      "O que são as Contribuições Nacionalmente Determinadas (NDCs) no contexto do Acordo de Paris, que o Brasil deve revisar em 2025?",
    options: [
      {
        text: "Doações obrigatórias de países ricos para países pobres.",
        isCorrect: false,
        rationale: "São metas de emissão, não doações.",
      },
      {
        text: "Metas voluntárias de redução de emissões de Gases de Efeito Estufa (GEE) que cada país se compromete a atingir.",
        isCorrect: true,
        rationale:
          "As NDCs representam os esforços de cada país para reduzir suas emissões e se adaptar aos impactos climáticos.",
      },
      {
        text: "Sanções comerciais aplicadas a países que mais poluem.",
        isCorrect: false,
        rationale: "Não são sanções.",
      },
      {
        text: "A lista de espécies em extinção.",
        isCorrect: false,
        rationale: "É a Lista Vermelha da IUCN.",
      },
    ],
    topic: "Mundo/Meio Ambiente",
  },
  {
    question:
      "Qual o setor da economia brasileira que mais emprega formalmente no Ceará, especialmente em Fortaleza e cidades do interior próximas a ela?",
    options: [
      {
        text: "Indústria Automobilística.",
        isCorrect: false,
        rationale: "Concentrada no Sudeste.",
      },
      {
        text: "Setor de Serviços (Comércio, Turismo e Educação).",
        isCorrect: true,
        rationale:
          "O setor terciário (serviços) é o maior empregador do Brasil e do Ceará, responsável pela maior parte do PIB do estado.",
      },
      {
        text: "Agropecuária de grande escala (Soja e Milho).",
        isCorrect: false,
        rationale:
          "A agropecuária emprega, mas não é o maior empregador formal.",
      },
      {
        text: "Extração Mineral (Minério de Ferro).",
        isCorrect: false,
        rationale: "Não é o principal produto do Ceará.",
      },
    ],
    topic: "Ceará/Economia",
  },
  {
    question:
      "Qual o nome da aliança internacional de países emergentes que, em 2025, busca desdolarizar o comércio global, incluindo o Brasil?",
    options: [
      {
        text: "G7.",
        isCorrect: false,
        rationale: "É um grupo de países ricos (EUA, Canadá, Europa, Japão).",
      },
      {
        text: "Mercosul.",
        isCorrect: false,
        rationale: "Bloco regional sul-americano.",
      },
      {
        text: "BRICS (Brasil, Rússia, Índia, China, África do Sul e novos membros).",
        isCorrect: true,
        rationale:
          "O BRICS é o principal fórum de cooperação entre economias emergentes com essa agenda de desdolarização.",
      },
      {
        text: "União Africana.",
        isCorrect: false,
        rationale: "Bloco regional africano.",
      },
    ],
    topic: "Mundo/Economia",
  },
  {
    question:
      "Qual o principal órgão do Ceará que formula as políticas de ciência e tecnologia e que tem incentivado as pesquisas em energias renováveis na região?",
    options: [
      {
        text: "Secretaria de Turismo (SETUR).",
        isCorrect: false,
        rationale: "Foca em turismo.",
      },
      {
        text: "Secretaria da Ciência, Tecnologia e Educação Superior (SECITECE).",
        isCorrect: true,
        rationale:
          "A SECITECE é a pasta estadual que coordena as políticas de ciência e inovação.",
      },
      {
        text: "Assembleia Legislativa do Ceará (ALCE).",
        isCorrect: false,
        rationale: "É o poder Legislativo.",
      },
      {
        text: "Tribunal de Justiça do Ceará (TJCE).",
        isCorrect: false,
        rationale: "É o poder Judiciário.",
      },
    ],
    topic: "Ceará/Administração-Ciência",
  },
  {
    question:
      "Qual o principal tipo de solo encontrado na região de Martinópole, característico de áreas semiáridas e que requer técnicas de irrigação para alta produtividade?",
    options: [
      {
        text: "Terra Preta de Índio (Antrossolo).",
        isCorrect: false,
        rationale: "Encontrada na Amazônia.",
      },
      { text: "Latossolo.", isCorrect: false, rationale: "Comum no Cerrado." },
      {
        text: "Argissolo e Luvissolo (Solos de textura mais argilosa e rasos).",
        isCorrect: true,
        rationale:
          "Esses são tipos de solos comuns na Caatinga, sendo rasos e com alta suscetibilidade à erosão, necessitando de manejo adequado.",
      },
      {
        text: "Solo Vulcânico (Nitossolo).",
        isCorrect: false,
        rationale: "Não há vulcões no Ceará.",
      },
    ],
    topic: "Martinópole/Geografia",
  },
  {
    question:
      "No Brasil, o conceito de 'Fundo Partidário' refere-se a qual fonte de financiamento da atividade política?",
    options: [
      {
        text: "Doações de empresas privadas para campanhas eleitorais.",
        isCorrect: false,
        rationale: "Doações de empresas foram proibidas.",
      },
      {
        text: "Recursos públicos destinados ao custeio e manutenção das atividades cotidianas dos partidos políticos.",
        isCorrect: true,
        rationale:
          "O Fundo Partidário é um recurso público (orçamentário) para custear os partidos.",
      },
      {
        text: "Arrecadação de multas de trânsito em âmbito federal.",
        isCorrect: false,
        rationale: "Sem relação.",
      },
      {
        text: "Dinheiro proveniente da venda de produtos licenciados dos partidos.",
        isCorrect: false,
        rationale: "É uma fonte privada de baixa relevância.",
      },
    ],
    topic: "Brasil/Política",
  },
  {
    question:
      "Qual o principal impacto socioeconômico esperado da transição para o Hidrogênio Verde no Complexo do Pecém?",
    options: [
      {
        text: "Aumento da dependência de combustíveis fósseis.",
        isCorrect: false,
        rationale: "O H2V visa reduzir a dependência de combustíveis fósseis.",
      },
      {
        text: "Criação de novos empregos e atração de investimentos em energias renováveis.",
        isCorrect: true,
        rationale:
          "O projeto H2V visa gerar um novo ciclo econômico no Ceará, com foco em tecnologia e empregos de alta qualificação.",
      },
      {
        text: "Fechamento de todas as indústrias tradicionais.",
        isCorrect: false,
        rationale: "Não é o objetivo, mas sim a transição.",
      },
      {
        text: "Redução do ICMS para o comércio local.",
        isCorrect: false,
        rationale:
          "O impacto é macroeconômico, não focado em um único imposto.",
      },
    ],
    topic: "Ceará/Economia",
  },
  // ATENÇÃO: A vírgula é essencial para conectar com o array anterior!
  // --- QUESTÕES DE MARTINÓPOLE (Foco em Locais e Administração) ---
  {
    question:
      "Além da Sede, qual dos seguintes é um distrito oficialmente reconhecido no município de Martinópole, Ceará?",
    options: [
      {
        text: "Serra da Ibiapaba.",
        isCorrect: false,
        rationale: "Ibiapaba é uma serra, não um distrito de Martinópole.",
      },
      {
        text: "Canafístula.",
        isCorrect: true,
        rationale:
          "Canafístula é um dos distritos que compõem o município de Martinópole.",
      },
      {
        text: "Juremal.",
        isCorrect: false,
        rationale: "Nome não relacionado a um distrito oficial de Martinópole.",
      },
      {
        text: "Pecém.",
        isCorrect: false,
        rationale: "Pecém é um complexo portuário em outro município do Ceará.",
      },
    ],
    topic: "Martinópole/Geografia",
  },
  {
    question:
      "Qual o nome do principal estádio municipal de Martinópole que sedia os campeonatos locais de futebol?",
    options: [
      {
        text: "Estádio Castelão.",
        isCorrect: false,
        rationale: "O Castelão fica em Fortaleza.",
      },
      {
        text: "Estádio Paulo Cruz.",
        isCorrect: true,
        rationale:
          "O Estádio Municipal Paulo Cruz é o principal local de jogos em Martinópole.",
      },
      {
        text: "Estádio Plácido Aderaldo Castelo.",
        isCorrect: false,
        rationale: "Nome oficial do Castelão em Fortaleza.",
      },
      {
        text: "Estádio do Canarinho.",
        isCorrect: false,
        rationale: "Estádio em outro município.",
      },
    ],
    topic: "Martinópole/Esporte",
  },
  {
    question:
      "Qual o principal critério utilizado pela Secretaria de Saúde de Martinópole para a distribuição de vacinas e medicamentos?",
    options: [
      {
        text: "A ordem alfabética dos sobrenomes dos cidadãos.",
        isCorrect: false,
        rationale: "A distribuição é feita por necessidade e risco.",
      },
      {
        text: "O critério de prioridade epidemiológica e vulnerabilidade social, conforme as normas do SUS.",
        isCorrect: true,
        rationale:
          "O planejamento segue as diretrizes do SUS, priorizando grupos de risco e áreas com maior necessidade de saúde pública.",
      },
      {
        text: "A prioridade para funcionários da prefeitura.",
        isCorrect: false,
        rationale: "A prioridade é para o público-alvo epidemiológico.",
      },
      {
        text: "A cor da pele dos pacientes.",
        isCorrect: false,
        rationale: "Critério incorreto e discriminatório.",
      },
    ],
    topic: "Martinópole/Saúde",
  },
  {
    question:
      "A Escola Estadual de Ensino Médio em Martinópole é de responsabilidade de qual esfera administrativa?",
    options: [
      {
        text: "Municipal.",
        isCorrect: false,
        rationale:
          "O município geralmente cuida do Ensino Fundamental e Educação Infantil.",
      },
      {
        text: "Federal (Governo do Brasil).",
        isCorrect: false,
        rationale: "A União cuida de Universidades e Institutos Federais.",
      },
      {
        text: "Estadual (Governo do Ceará).",
        isCorrect: true,
        rationale:
          "O Ensino Médio é a principal atribuição da Secretaria de Educação do Ceará (SEDUC).",
      },
      {
        text: "Particular.",
        isCorrect: false,
        rationale: "Escola *Estadual* é pública.",
      },
    ],
    topic: "Martinópole/Educação",
  },
  {
    question:
      "O Fundo Municipal de Saúde (FMS) de Martinópole é composto por recursos de quais fontes principais?",
    options: [
      {
        text: "Apenas por multas de trânsito.",
        isCorrect: false,
        rationale:
          "A principal fonte são as transferências e recursos próprios.",
      },
      {
        text: "Transferências da União e do Estado, além de recursos próprios do Tesouro Municipal.",
        isCorrect: true,
        rationale:
          "Os recursos de saúde vêm das três esferas de governo e são gerenciados pelo FMS.",
      },
      {
        text: "Exclusivamente por doações de empresas privadas.",
        isCorrect: false,
        rationale: "As doações são complementares.",
      },
      {
        text: "Apenas pelo pagamento de IPTU.",
        isCorrect: false,
        rationale: "O IPTU é uma receita própria, mas não a única fonte.",
      },
    ],
    topic: "Martinópole/Administração",
  },
  // Adicione mais questões locais aqui, se necessário, seguindo o modelo.
  {
    question:
      "O que significa a sigla SEMACE, órgão do Ceará fundamental na fiscalização ambiental de projetos como os de Hidrogênio Verde?",
    options: [
      {
        text: "Secretaria Estadual de Meio Ambiente e Combate à Extinção.",
        isCorrect: false,
        rationale: "O nome oficial é mais completo.",
      },
      {
        text: "Superintendência Estadual do Meio Ambiente.",
        isCorrect: true,
        rationale:
          "A SEMACE é a autarquia do governo cearense responsável pela fiscalização, licenciamento e controle ambiental.",
      },
      {
        text: "Serviço Municipal de Águas e Coleta de Esgoto.",
        isCorrect: false,
        rationale: "Função de autarquias municipais.",
      },
      {
        text: "Sistema Eletrônico de Monitoramento de Áreas de Conflito.",
        isCorrect: false,
        rationale: "Incorreto.",
      },
    ],
    topic: "Ceará/Meio Ambiente",
  },
  {
    question: "Qual é a principal função do Conselho Tutelar em Martinópole?",
    options: [
      {
        text: "Julgar e prender pais irresponsáveis.",
        isCorrect: false,
        rationale: "Não tem poder de julgar ou prender (poder Judiciário).",
      },
      {
        text: "Garantir os direitos das crianças e adolescentes ameaçados ou violados.",
        isCorrect: true,
        rationale:
          "O Conselho Tutelar é um órgão autônomo, responsável por zelar pelo cumprimento dos direitos previstos no ECA.",
      },
      {
        text: "Organizar o transporte escolar do município.",
        isCorrect: false,
        rationale: "Função da Secretaria de Educação.",
      },
      {
        text: "Aplicar multas de trânsito em vias urbanas.",
        isCorrect: false,
        rationale: "Função do órgão de trânsito municipal.",
      },
    ],
    topic: "Martinópole/Social",
  },

  // --- QUESTÕES SOBRE BRASIL (Poderes e Direito) ---
  {
    question:
      "Qual dos Três Poderes da União (Executivo, Legislativo ou Judiciário) tem a principal função de administrar, governar e executar as leis no Brasil?",
    options: [
      {
        text: "Poder Legislativo.",
        isCorrect: false,
        rationale: "O Legislativo cria leis.",
      },
      {
        text: "Poder Judiciário.",
        isCorrect: false,
        rationale: "O Judiciário julga e interpreta leis.",
      },
      {
        text: "Poder Executivo.",
        isCorrect: true,
        rationale:
          "O Executivo (Presidente, Governadores, Prefeitos) administra e executa as políticas públicas e as leis.",
      },
      {
        text: "Ministério Público.",
        isCorrect: false,
        rationale: "O MP é uma função essencial à Justiça, não um poder.",
      },
    ],
    topic: "Brasil/Política",
  },
  {
    question:
      "O Supremo Tribunal Federal (STF) é o guardião de qual documento fundamental no Brasil?",
    options: [
      {
        text: "O Código de Defesa do Consumidor.",
        isCorrect: false,
        rationale: "É uma lei ordinária.",
      },
      {
        text: "O Código Civil.",
        isCorrect: false,
        rationale: "É uma lei ordinária.",
      },
      {
        text: "A Constituição Federal de 1988.",
        isCorrect: true,
        rationale:
          "O STF tem a função precípua de interpretar e guardar a Constituição Federal.",
      },
      {
        text: "A Lei Orçamentária Anual (LOA).",
        isCorrect: false,
        rationale: "É uma lei orçamentária.",
      },
    ],
    topic: "Brasil/Política-Direito",
  },
  {
    question:
      "O artigo 5º da Constituição Federal de 1988 garante os Direitos Fundamentais. Qual é o princípio básico que esse artigo garante a todos os cidadãos brasileiros e estrangeiros residentes?",
    options: [
      {
        text: "O direito exclusivo de ter um veículo de luxo.",
        isCorrect: false,
        rationale: "Direito não fundamental.",
      },
      {
        text: "A inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.",
        isCorrect: true,
        rationale:
          "O 'caput' do Art. 5º lista esses direitos como invioláveis.",
      },
      {
        text: "O direito de ser eleito Presidente da República obrigatoriamente.",
        isCorrect: false,
        rationale: "Direito político com requisitos específicos.",
      },
      {
        text: "A isenção total de impostos e taxas municipais.",
        isCorrect: false,
        rationale: "Não é um direito fundamental.",
      },
    ],
    topic: "Brasil/Direito",
  },
  {
    question:
      "Qual é a principal atribuição da Câmara dos Deputados no Congresso Nacional?",
    options: [
      {
        text: "Julgar o Presidente da República em crimes comuns.",
        isCorrect: false,
        rationale: "Função do STF.",
      },
      {
        text: "Representar os Estados e o Distrito Federal (função do Senado).",
        isCorrect: false,
        rationale: "Função do Senado.",
      },
      {
        text: "Representar o povo e iniciar o processo de impeachment do Presidente.",
        isCorrect: true,
        rationale:
          "A Câmara representa o povo e tem o poder de autorizar a abertura de processo de impeachment.",
      },
      {
        text: "Apenas fiscalizar as contas do Poder Executivo.",
        isCorrect: false,
        rationale:
          "A fiscalização é feita com o Tribunal de Contas da União (TCU).",
      },
    ],
    topic: "Brasil/Política",
  },
  {
    question:
      "O que define o crime de responsabilidade, que pode levar ao impeachment do Presidente da República?",
    options: [
      {
        text: "Qualquer erro administrativo cometido pelo Presidente.",
        isCorrect: false,
        rationale: "Precisa ser um ato grave que atente contra a Constituição.",
      },
      {
        text: "A falta de pagamento de uma multa de trânsito.",
        isCorrect: false,
        rationale: "Ato sem gravidade constitucional.",
      },
      {
        text: "Atos do Presidente que atentem contra a Constituição Federal, como a probidade na administração e o cumprimento das leis orçamentárias.",
        isCorrect: true,
        rationale:
          "O crime de responsabilidade é a violação de deveres funcionais estabelecidos na Constituição.",
      },
      {
        text: "Um discurso público que cause polêmica.",
        isCorrect: false,
        rationale: "Não é um crime de responsabilidade.",
      },
    ],
    topic: "Brasil/Política-Direito",
  },

  // --- QUESTÕES SOBRE MUNDO (Revisão e Aprofundamento) ---
  {
    question:
      "Qual é o principal desafio enfrentado pela União Europeia (UE) em 2025 que envolve questões de fronteira, política de asilo e segurança interna?",
    options: [
      {
        text: "A dificuldade em padronizar o idioma oficial (francês ou alemão).",
        isCorrect: false,
        rationale: "A UE respeita a diversidade de idiomas.",
      },
      {
        text: "A crise de migração e a gestão das fronteiras externas e internas.",
        isCorrect: true,
        rationale:
          "A gestão dos fluxos migratórios e a política de asilo são desafios centrais e recorrentes na UE.",
      },
      {
        text: "A obrigação de usar apenas carvão como fonte de energia.",
        isCorrect: false,
        rationale: "A UE busca fontes renováveis.",
      },
      {
        text: "O fim do uso da moeda Euro em todos os países membros.",
        isCorrect: false,
        rationale: "O Euro é estável e continua sendo usado.",
      },
    ],
    topic: "Mundo/Geopolítica",
  },
  {
    question:
      "Qual o principal critério utilizado pela Organização Mundial da Saúde (OMS) para classificar uma doença como 'pandemia'?",
    options: [
      {
        text: "O número de mortes causadas pela doença.",
        isCorrect: false,
        rationale:
          "A fatalidade é um critério de gravidade, não de classificação de pandemia.",
      },
      {
        text: "A obrigatoriedade de uso de máscara no país de origem.",
        isCorrect: false,
        rationale: "Não é um critério da OMS.",
      },
      {
        text: "A disseminação da doença por múltiplos países e continentes, afetando um grande número de pessoas.",
        isCorrect: true,
        rationale:
          "Uma pandemia é uma epidemia que se espalha globalmente (em vários continentes) e afeta uma grande proporção da população mundial.",
      },
      {
        text: "O tempo que a doença leva para ser curada.",
        isCorrect: false,
        rationale: "Não é um critério.",
      },
    ],
    topic: "Mundo/Saúde",
  },
  {
    question:
      "Qual cientista é mundialmente conhecido por sua Teoria da Relatividade Geral, que revolucionou a física no século XX e é aplicada em tecnologias como o GPS?",
    options: [
      {
        text: "Isaac Newton.",
        isCorrect: false,
        rationale: "Conhecido pela lei da gravidade universal.",
      },
      {
        text: "Albert Einstein.",
        isCorrect: true,
        rationale:
          "Einstein é o autor da Teoria da Relatividade, fundamental para o cálculo preciso de tempo e espaço no GPS.",
      },
      {
        text: "Galileu Galilei.",
        isCorrect: false,
        rationale: "Pai da astronomia observacional.",
      },
      {
        text: "Stephen Hawking.",
        isCorrect: false,
        rationale: "Físico teórico britânico contemporâneo.",
      },
    ],
    topic: "Mundo/Ciência",
  },
  {
    question: "O que significa o termo 'Globalização', no sentido mais amplo?",
    options: [
      {
        text: "A criação de uma única moeda para todos os países.",
        isCorrect: false,
        rationale: "É um aspecto econômico, não a definição completa.",
      },
      {
        text: "A interconexão e interdependência econômica, política, social e cultural em escala mundial.",
        isCorrect: true,
        rationale:
          "A globalização refere-se à crescente integração e interdependência de todas as esferas da vida humana no mundo.",
      },
      {
        text: "O aumento da distância entre os países.",
        isCorrect: false,
        rationale: "O oposto: a distância relativa diminui.",
      },
      {
        text: "A separação de blocos econômicos e alianças militares.",
        isCorrect: false,
        rationale: "O oposto.",
      },
    ],
    topic: "Mundo/Social",
  },
  {
    question:
      "Qual a principal causa do fenômeno El Niño, que afeta o clima global e está associado a secas no Nordeste do Brasil?",
    options: [
      {
        text: "O aumento da atividade vulcânica no Oceano Pacífico.",
        isCorrect: false,
        rationale: "Não há relação direta.",
      },
      {
        text: "O resfriamento anormal das águas do Oceano Pacífico equatorial (La Niña).",
        isCorrect: false,
        rationale: "Isso descreve o La Niña.",
      },
      {
        text: "O aquecimento anormal das águas do Oceano Pacífico equatorial.",
        isCorrect: true,
        rationale:
          "O El Niño é caracterizado pelo aquecimento das águas do Pacífico, que altera a circulação atmosférica e causa secas no Nordeste e chuvas no Sul do Brasil.",
      },
      {
        text: "A redução das correntes marítimas do Atlântico Norte.",
        isCorrect: false,
        rationale: "Afeta a Europa.",
      },
    ],
    topic: "Mundo/Meio Ambiente",
  },
  {
    question:
      "Qual o principal órgão do Ceará responsável pela segurança pública e que coordena a Polícia Militar, Civil e a Perícia Forense?",
    options: [
      {
        text: "Tribunal de Contas do Estado (TCE).",
        isCorrect: false,
        rationale: "Órgão de controle financeiro.",
      },
      {
        text: "Secretaria da Segurança Pública e Defesa Social (SSPDS).",
        isCorrect: true,
        rationale:
          "A SSPDS é o órgão de cúpula que coordena todas as forças policiais do estado.",
      },
      {
        text: "Secretaria de Saúde do Ceará (SESA).",
        isCorrect: false,
        rationale: "Foca em saúde.",
      },
      {
        text: "Companhia de Água e Esgoto do Ceará (CAGECE).",
        isCorrect: false,
        rationale: "Foca em saneamento.",
      },
    ],
    topic: "Ceará/Administração",
  },
  {
    question:
      "A Lei de Acesso à Informação (LAI) no Brasil garante qual direito fundamental do cidadão em relação ao governo de Martinópole?",
    options: [
      {
        text: "O direito de não pagar impostos municipais.",
        isCorrect: false,
        rationale: "A LAI não trata de impostos.",
      },
      {
        text: "O direito de receber informações públicas dos órgãos, com exceções de sigilo legal.",
        isCorrect: true,
        rationale:
          "A LAI garante o acesso a dados e informações públicas produzidas ou custodiadas pelos órgãos, fortalecendo a transparência.",
      },
      {
        text: "O direito de ser empregado em um cargo público imediatamente.",
        isCorrect: false,
        rationale: "Não garante emprego.",
      },
      {
        text: "O direito de morar em qualquer bairro da cidade.",
        isCorrect: false,
        rationale: "Direito de ir e vir, não de acesso à informação.",
      },
    ],
    topic: "Brasil/Direito",
  },
  {
    question:
      "Qual o papel do Tribunal de Contas da União (TCU) no contexto do Poder Executivo Federal?",
    options: [
      {
        text: "Criar as leis de orçamento para o próximo ano.",
        isCorrect: false,
        rationale: "Função do Congresso Nacional.",
      },
      {
        text: "Julgar crimes comuns cometidos pelo Presidente.",
        isCorrect: false,
        rationale: "Função do STF.",
      },
      {
        text: "Fiscalizar a aplicação dos recursos públicos federais, auxiliando o Congresso Nacional.",
        isCorrect: true,
        rationale:
          "O TCU é o órgão auxiliar do Congresso na fiscalização contábil, financeira e orçamentária do Governo Federal.",
      },
      {
        text: "Administrar o sistema de segurança nacional.",
        isCorrect: false,
        rationale: "Função do Executivo.",
      },
    ],
    topic: "Brasil/Política",
  },
];

// --- ADICIONE MAIS 87 QUESTÕES AQUI ---
// Para preencher o total de 102 perguntas, você deve adicionar mais 87 objetos
// neste array, seguindo o modelo da Seção 2.
// Você pode dividir as 87 perguntas (ex: 20 Martinópole, 20 Ceará, 25 Brasil, 22 Mundo)
// para cobrir todos os tópicos solicitados.

// O resto do código JavaScript (a lógica do quiz) continua a partir daqui,
// inalterado e pronto para lidar com o total de 102 perguntas:

let currentQuestionIndex = 0;
let userAnswers = {};
let isAnswered = {};

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const scoreText = document.getElementById("score-text");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const checkBtn = document.getElementById("check-btn");
const submitBtn = document.getElementById("submit-btn");

function loadQuestion() {
  // Lógica para carregar a pergunta e atualizar botões
  const qData = quizQuestions[currentQuestionIndex];
  const isChecked = isAnswered[currentQuestionIndex];

  // Atualiza o estado dos botões de controle
  prevBtn.classList.toggle("hidden", currentQuestionIndex === 0);
  prevBtn.disabled = currentQuestionIndex === 0;

  if (isChecked) {
    checkBtn.classList.add("hidden");
    nextBtn.classList.toggle(
      "hidden",
      currentQuestionIndex === quizQuestions.length - 1
    );
    submitBtn.classList.toggle(
      "hidden",
      currentQuestionIndex !== quizQuestions.length - 1
    );
    nextBtn.disabled = false;
  } else {
    checkBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    submitBtn.classList.add("hidden");
    checkBtn.disabled = !userAnswers[currentQuestionIndex];
  }

  // Geração do HTML da pergunta
  quizContainer.innerHTML = "";
  const questionCard = document.createElement("div");
  questionCard.className = "question-card";

  let optionsHTML = qData.options
    .map((option, i) => {
      const isSelected = userAnswers[currentQuestionIndex] === option.text;
      let className = "";

      if (isChecked) {
        if (option.isCorrect) {
          className = "correct";
        } else if (isSelected) {
          className = "incorrect";
        }
      } else if (isSelected) {
        className = "selected";
      }

      return `
            <label class="${className}">
                <input type="radio" name="question-${currentQuestionIndex}" value="${
        option.text
      }" 
                       ${isSelected ? "checked" : ""} 
                       ${isChecked ? "disabled" : ""}>
                ${option.text}
            </label>
        `;
    })
    .join("");

  let rationaleHTML = "";
  if (isChecked) {
    const correctOption = qData.options.find((opt) => opt.isCorrect);
    rationaleHTML = `
            <div class="rationale">
                <strong>Racional:</strong> ${correctOption.rationale}
            </div>
        `;
  }

  questionCard.innerHTML = `
        <h3>${currentQuestionIndex + 1}/${quizQuestions.length}. (${
    qData.topic
  }) ${qData.question}</h3>
        <div class="options" id="options-${currentQuestionIndex}">
            ${optionsHTML}
        </div>
        ${rationaleHTML}
    `;

  quizContainer.appendChild(questionCard);

  if (!isChecked) {
    document
      .querySelectorAll(`input[name="question-${currentQuestionIndex}"]`)
      .forEach((input) => {
        input.addEventListener("change", (e) => {
          userAnswers[currentQuestionIndex] = e.target.value;
          checkBtn.disabled = false;
          document
            .querySelectorAll(`#options-${currentQuestionIndex} label`)
            .forEach((label) => label.classList.remove("selected"));
          e.target.parentElement.classList.add("selected");
        });
      });
  }
}

function checkAnswer() {
  const selectedAnswer = userAnswers[currentQuestionIndex];

  if (!selectedAnswer) {
    alert("Por favor, selecione uma resposta antes de verificar.");
    return;
  }

  isAnswered[currentQuestionIndex] = true;
  loadQuestion();

  checkBtn.classList.add("hidden");

  if (currentQuestionIndex === quizQuestions.length - 1) {
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    nextBtn.disabled = false;
  }
}

function moveToNextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function moveToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function calculateScore() {
  let score = 0;
  quizQuestions.forEach((qData, index) => {
    const correctOption = qData.options.find((opt) => opt.isCorrect);
    if (userAnswers[index] === correctOption.text) {
      score++;
    }
  });
  return score;
}

function showResults() {
  const score = calculateScore();
  const total = quizQuestions.length;

  quizContainer.classList.add("hidden");
  document.getElementById("controls").classList.add("hidden");
  resultsContainer.classList.remove("hidden");

  scoreText.innerHTML = `Sua pontuação final é: **${score}** de **${total}** perguntas!`;

  let feedbackHTML =
    '<h3 style="margin-top:20px; color: var(--primary-color);">Revisão das Perguntas</h3>';
  quizQuestions.forEach((qData, index) => {
    const correctOption = qData.options.find((opt) => opt.isCorrect);
    const userAnswer = userAnswers[index] || "Não Respondida";
    const isCorrect = userAnswer === correctOption.text;

    feedbackHTML += `
            <div class="feedback-item" style="text-align: left; margin-top: 15px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                <p><strong>${index + 1}. (${qData.topic}) ${
      qData.question
    }</strong></p>
                <p><strong>Sua Resposta:</strong> <span style="color: ${
                  isCorrect ? "var(--success-color)" : "var(--danger-color)"
                }; font-weight: bold;">${userAnswer}</span></p>
                <p><strong>Resposta Correta:</strong> <span style="color: var(--success-color);">${
                  correctOption.text
                }</span></p>
            </div>
        `;
  });

  document.getElementById("result-details").innerHTML = feedbackHTML;
}

function restartQuiz() {
  // Limpa estados
  currentQuestionIndex = 0;
  userAnswers = {};
  isAnswered = {};

  // Esconde/mostra elementos
  resultsContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  document.getElementById("controls").classList.remove("hidden");

  // Restaura botões
  nextBtn.classList.add("hidden");
  submitBtn.classList.add("hidden");
  checkBtn.classList.remove("hidden");

  loadQuestion();
}

// Event Listeners
nextBtn.addEventListener("click", moveToNextQuestion);
prevBtn.addEventListener("click", moveToPreviousQuestion);
checkBtn.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", showResults);

// Inicialização
loadQuestion();
