import { Lesson, Sport } from '../types';

export const lessonsData: Record<Sport, Lesson[]> = {
  natacao_adulto: [
    {
      id: 1,
      title: 'Adaptação ao Meio Líquido',
      description: 'Exercícios de respiração, flutuação e pequenos deslocamentos para familiarização com a água, construindo confiança e segurança no ambiente aquático.',
      objectives: ['Controlar a respiração na água', 'Aprender a flutuar sem auxílio', 'Perder o medo do ambiente aquático', 'Realizar o primeiro deslize'],
      materials: ['Pranchas', 'Flutuadores'],
      duration: 50,
      activities: [
        { name: 'Respiração Aquática (Bolinhas)', description: 'Em pé na parte rasa, inspirar o ar pela boca, submergir o rosto e soltar o ar pelo nariz e boca, fazendo bolhas. Focar em um ritmo constante.' },
        { name: 'Flutuação Ventral com Apoio', description: 'Segurando na borda ou em uma prancha, estender o corpo na água em posição ventral, relaxando o pescoço e mantendo o rosto na água por 10 segundos.' },
        { name: 'Flutuação Dorsal com Apoio', description: 'Com auxílio do professor ou de flutuadores, deitar de costas na água, mantendo o quadril elevado e o corpo relaxado.' },
        { name: 'Deslize Impulsionado', description: 'Apoiado na borda, o aluno se impulsiona com os pés na parede e desliza pela água com os braços estendidos à frente, tentando manter a posição.' }
      ]
    },
    {
      id: 2,
      title: 'Pernada de Crawl',
      description: 'Foco na técnica da pernada do nado crawl, utilizando pranchas para apoio e isolamento do movimento para máxima propulsão.',
      objectives: ['Desenvolver propulsão eficiente com as pernas', 'Manter o corpo alinhado durante a pernada', 'Automatizar o movimento contínuo das pernas'],
      materials: ['Pranchas'],
      duration: 50,
      activities: [
        { name: 'Pernada Sentado na Borda', description: 'Sentado na borda da piscina, realizar o movimento alternado das pernas, com os pés em ponta e relaxados, simulando a pernada do crawl.' },
        { name: 'Pernada Ventral com Prancha', description: 'Segurando a prancha com os braços estendidos, realizar a pernada de crawl, focando em manter os joelhos pouco flexionados e o movimento partindo do quadril.' },
        { name: 'Pernada Lateral com Prancha', description: 'Alternar a posição do corpo (lateral direita e esquerda), segurando a prancha com uma mão, para trabalhar a rotação do tronco associada à pernada.' }
      ]
    },
    {
      id: 3,
      title: 'Braçada de Crawl',
      description: 'Introdução e correção da braçada do nado crawl, com exercícios educativos e de coordenação para um nado mais eficiente.',
      objectives: ['Sincronizar braçada com respiração lateral', 'Aumentar a amplitude da braçada', 'Corrigir a entrada e finalização da mão na água'],
      materials: ['Pranchas', 'Palmares', 'Flutuador de pernas'],
      duration: 50,
      activities: [
        { name: 'Braçada Unilateral com Prancha', description: 'Segurando a prancha com um braço, realizar a braçada completa com o outro, focando na respiração lateral.' },
        { name: 'Exercício do "Zíper"', description: 'Com flutuador entre as pernas para isolar o movimento, realizar a braçada lentamente, focando em passar o polegar pela lateral do corpo, como se estivesse fechando um zíper.' },
        { name: 'Nado com Palmar', description: 'Utilizar palmares para aumentar a sensibilidade e a percepção da tração da água durante a fase submersa da braçada.' }
      ]
    },
    {
      id: 4,
      title: 'Nado Costas Iniciação',
      description: 'Primeiros movimentos do nado costas, focando na flutuação dorsal e na propulsão coordenada de pernas e braços.',
      objectives: ['Manter a flutuação dorsal estável', 'Coordenar o movimento alternado dos braços', 'Aprender a respiração contínua no nado costas'],
      materials: ['Pranchas', 'Flutuadores'],
      duration: 50,
      activities: [
        { name: 'Flutuação Dorsal com Pernada', description: 'Deitado de costas com uma prancha sobre o peito, realizar a pernada de costas, mantendo o quadril alto e o queixo levemente afastado do peito.' },
        { name: 'Braçada Unilateral de Costas', description: 'Manter um braço estendido ao longo do corpo enquanto o outro realiza o movimento completo da braçada de costas.' },
        { name: 'Coordenação Básica', description: 'Realizar o nado completo lentamente, contando 3 pernadas para cada braçada para estabelecer um ritmo inicial.' }
      ]
    },
    {
      id: 5,
      title: 'Iniciação ao Nado Peito',
      description: 'Aprendizagem da coordenação da pernada e braçada do nado peito, focando na "pernada do sapo" e na respiração.',
      objectives: ['Executar a pernada de peito corretamente', 'Sincronizar a braçada com a pernada', 'Coordenar a respiração com o movimento completo'],
      materials: ['Pranchas', 'Flutuador de pernas'],
      duration: 50,
      activities: [
        { name: 'Pernada de Peito na Borda', description: 'Sentado na borda, realizar o movimento da pernada: calcanhares próximos ao glúteo, girar os pés para fora e empurrar a água em um movimento circular.' },
        { name: 'Pernada de Peito com Prancha', description: 'Com uma prancha, realizar a pernada de peito em decúbito ventral, focando na fase de propulsão e no deslize após o movimento.' },
        { name: 'Braçada de Peito (Movimento do Coração)', description: 'Em pé, com a água na altura do peito, praticar o movimento de braçada, que se assemelha a desenhar um coração na água.' }
      ]
    },
  ],
  futsal: [
    {
      id: 1,
      title: 'Fundamentos: Passe e Recepção',
      description: 'Exercícios em duplas e em grupos para aprimorar a qualidade do passe de chapa e da recepção com a sola do pé.',
      objectives: ['Melhorar a precisão do passe de chapa', 'Dominar a bola rapidamente com a sola (pisada)', 'Comunicar-se durante o jogo'],
      materials: ['Bolas de futsal', 'Cones'],
      duration: 50,
      activities: [
        { name: 'Passe em Duplas', description: 'Jogadores a 5 metros de distância, trocando passes de chapa (com a parte interna do pé), focando na precisão e na recepção firme com a sola.' },
        { name: 'Quadrado de Passe', description: 'Quatro jogadores nos vértices de um quadrado de 8x8m. O objetivo é trocar passes, sempre dominando com a sola e passando de primeira ou com dois toques.' },
        { name: 'Bobinho (3x1 ou 4x1)', description: 'Em um círculo, jogadores trocam passes enquanto um marcador no centro tenta interceptar. Excelente para treinar passe, recepção e movimentação sob pressão.' }
      ]
    },
    {
      id: 2,
      title: 'Drible e Condução de Bola',
      description: 'Circuitos com cones para treinar a condução de bola com ambas as pernas e fintas para superar os adversários.',
      objectives: ['Aumentar o controle da bola em velocidade', 'Executar dribles básicos (corte, elástico)', 'Proteger a bola do adversário'],
      materials: ['Bolas de futsal', 'Cones', 'Coletes'],
      duration: 50,
      activities: [
        { name: 'Slalom entre Cones', description: 'Conduzir a bola em zigue-zague através de uma fileira de cones, usando a parte interna e externa de ambos os pés.' },
        { name: '1 contra 1 com Finalização', description: 'Atacante parte com a bola contra um defensor em um espaço limitado. O objetivo é driblar o defensor e finalizar no mini-gol.' },
        { name: 'Proteção de Bola em Círculo', description: 'Um jogador com a bola no centro de um círculo deve protegê-la dos colegas que tentam desarmá-lo sem fazer falta.' }
      ]
    },
    {
      id: 3,
      title: 'Finalização ao Gol',
      description: 'Treinamento de chutes de diferentes distâncias e ângulos, com foco na precisão e potência do chute de bico e de chapa.',
      objectives: ['Aumentar a taxa de acerto ao gol', 'Chutar com mais potência e precisão', 'Aprender a finalizar sob pressão'],
      materials: ['Bolas de futsal', 'Gols', 'Cones'],
      duration: 50,
      activities: [
        { name: 'Chute após Domínio', description: 'Jogador recebe um passe, domina a bola e finaliza ao gol. Variar o tipo de passe (rasteiro, aéreo) e a posição do chute.' },
        { name: 'Circuito de Finalização', description: 'Um circuito com diferentes estações: chute de primeira, chute após drible em cone, chute de bico e chute colocado.' },
        { name: 'Finalização sob Pressão', description: 'Atacante recebe a bola de costas para o gol com um defensor marcando. Ele deve girar e finalizar o mais rápido possível.' }
      ]
    },
     {
      id: 4,
      title: 'Tática: 2x1 e 3x2',
      description: 'Exercícios de superioridade numérica para treinar a tomada de decisão rápida em situações de ataque e defesa.',
      objectives: ['Entender e criar vantagens numéricas', 'Realizar triangulações ofensivas', 'Melhorar a cobertura defensiva em desvantagem'],
      materials: ['Bolas de futsal', 'Gols', 'Coletes'],
      duration: 50,
      activities: [
        { name: 'Ataque 2x1', description: 'Dois atacantes partem do meio da quadra contra um defensor. Devem usar passes e movimentação para criar uma chance clara de gol.' },
        { name: 'Transição 3x2', description: 'O jogo começa 3x2. Se a defesa rouba a bola, ela inicia um contra-ataque. Foco na velocidade da tomada de decisão.' },
        { name: 'Jogo de Goleiro-Linha', description: 'Simular uma situação de final de jogo, onde uma equipe usa o goleiro para criar superioridade numérica no ataque (5x4).' }
      ]
    },
    {
      id: 5,
      title: 'Sistemas Defensivos: Marcação Quadrante',
      description: 'Introdução ao sistema de marcação por zona (quadrante), melhorando o posicionamento defensivo e a cobertura.',
      objectives: ['Entender a responsabilidade de cada zona', 'Melhorar a comunicação defensiva', 'Praticar a flutuação e cobertura'],
      materials: ['Bolas de futsal', 'Coletes', 'Cones para delimitar'],
      duration: 50,
      activities: [
        { name: 'Defesa 4x0 (Sombra)', description: 'Quatro defensores se posicionam e movimentam a bola entre si, enquanto a defesa flutua, ajustando o posicionamento conforme a bola se move, sem dar o bote.' },
        { name: 'Jogo dos Quadrantes', description: 'Dividir a quadra de defesa em 4 quadrantes. A equipe defensora marca por zona, enquanto o ataque tenta fazer o gol. O defensor só pode dar o bote dentro de sua zona.' },
        { name: 'Defesa em Inferioridade (2x3)', description: 'Dois defensores tentam impedir o ataque de três jogadores, forçando-os a tomar decisões rápidas e a defesa a fazer coberturas eficientes.' }
      ]
    },
    {
      id: 6,
      title: 'Jogadas Ensaiadas: Escanteio e Falta',
      description: 'Treinamento de jogadas de bola parada (escanteio e falta) para criar oportunidades de gol em situações específicas.',
      objectives: ['Executar cobranças de escanteio com precisão', 'Criar bloqueios e movimentações em faltas', 'Sincronizar o time em jogadas de bola parada'],
      materials: ['Bolas de futsal', 'Cones', 'Barreira móvel'],
      duration: 50,
      activities: [
        { name: 'Escanteio Curto com Bloqueio', description: 'Cobrança curta para um jogador que recebe e finaliza, enquanto outro faz um bloqueio no marcador mais próximo para criar espaço.' },
        { name: 'Falta com Rolada e Chute', description: 'Um jogador rola a bola para o lado e o companheiro vem de trás para chutar. Treinar o tempo da corrida e a precisão do chute.' },
        { name: 'Simulação de Jogo com Foco em Bola Parada', description: 'Mini-jogo onde o treinador apita faltas e escanteios com frequência para que as equipes pratiquem as jogadas ensaiadas em contexto de jogo.' }
      ]
    },
  ],
  natacao_infantil: [
    {
      id: 1,
      title: 'Pequenos Peixinhos',
      description: 'Atividades lúdicas para adaptação à água, como soprar bolinhas, buscar objetos e deslizar com ajuda do professor.',
      objectives: ['Familiarizar-se com a água de forma divertida', 'Controlar a respiração de forma lúdica', 'Desenvolver a confiança no ambiente aquático'],
      materials: ['Bolas coloridas', 'Brinquedos de piscina', 'Tapetes flutuantes'],
      duration: 50,
      activities: [
        { name: 'Caça ao Tesouro', description: 'Espalhar brinquedos que afundam na parte rasa da piscina para as crianças buscarem, incentivando a imersão do rosto.' },
        { name: 'Corrida de Bolinhas', description: 'Cada criança recebe uma bolinha de pingue-pongue e deve soprá-la para fazê-la atravessar uma pequena distância.' },
        { name: 'Escorregador no Tapete', description: 'Usar um tapete flutuante como escorregador, onde a criança senta e desliza para dentro da água com o auxílio do professor.' }
      ]
    },
    {
      id: 2,
      title: 'Estrelinha do Mar',
      description: 'Ensinar a flutuação ventral e dorsal de forma divertida, com músicas e brincadeiras para manter o engajamento.',
      objectives: ['Aprender a flutuar sem ajuda', 'Manter a calma na posição de flutuação', 'Alternar entre flutuação ventral e dorsal'],
      materials: ['Flutuadores tipo "macarrão"', 'Pranchas infantis'],
      duration: 50,
      activities: [
        { name: 'Música da Estrelinha', description: 'Cantar uma música sobre a estrelinha do mar enquanto as crianças, com ajuda, tentam flutuar de costas e de barriga.' },
        { name: 'Pegando Sol', description: 'Deitadas de costas com a orelha na água, as crianças devem "pegar sol na barriga", trabalhando a flutuação dorsal.' },
        { name: 'Morto-Vivo Aquático', description: 'Ao comando "morto", as crianças flutuam de barriga para baixo. Ao comando "vivo", ficam em pé. Uma brincadeira para controlar a flutuação.' }
      ]
    },
    {
      id: 3,
      title: 'Perninhas de Foguete',
      description: 'Introdução à pernada com o uso de pranchas, incentivando o movimento contínuo e forte das pernas como um foguete.',
      objectives: ['Desenvolver a propulsão das pernas', 'Manter as pernas na superfície', 'Coordenar pernada com flutuação'],
      materials: ['Pranchas infantis', 'Brinquedos que afundam'],
      duration: 50,
      activities: [
        { name: 'Foguete na Borda', description: 'Sentadas na borda, as crianças batem as perninhas na água, fazendo "muita espuma".' },
        { name: 'Viagem de Prancha', description: 'Segurando a prancha, as crianças devem usar suas "perninhas de foguete" para se deslocarem de um ponto a outro da piscina.' },
        { name: 'Tubarão', description: 'Uma criança (ou o professor) é o tubarão e tenta pegar as outras, que devem usar a pernada rápida para escapar.' }
      ]
    },
     {
      id: 4,
      title: 'Mergulho do Sapo',
      description: 'Exercícios de imersão e controle da respiração. Buscar objetos no fundo da piscina (parte rasa) para desenvolver a capacidade pulmonar.',
      objectives: ['Mergulhar de forma controlada', 'Abrir os olhos debaixo d\'água (com ou sem óculos)', 'Associar mergulho com diversão'],
      materials: ['Argolas', 'Brinquedos de mergulho'],
      duration: 50,
      activities: [
        { name: 'Passagem Submarina', description: 'As crianças devem passar por baixo de um "macarrão" flutuante ou das pernas do professor, incentivando a imersão completa.' },
        { name: 'Caça às Argolas', description: 'Jogar argolas de diferentes cores no fundo da piscina e pedir para as crianças pegarem uma cor específica.' },
        { name: 'O Sapo e a Mosca', description: 'As crianças são os sapos e devem mergulhar para "pegar a mosca" (um objeto) quando o professor der o sinal.' }
      ]
    },
    {
      id: 5,
      title: 'Bracinhos de Jacaré',
      description: 'Introdução lúdica à braçada do crawl, associando o movimento dos braços ao de um jacaré nadando.',
      objectives: ['Iniciar o movimento alternado dos braços', 'Coordenar a respiração lateral com a braçada', 'Manter a propulsão com as pernas durante a braçada'],
      materials: ['Pranchas infantis', 'Flutuadores tipo "macarrão"'],
      duration: 50,
      activities: [
        { name: 'Jacaré na Borda', description: 'Em pé, as crianças imitam a boca de um jacaré abrindo e fechando com as mãos, e depois praticam o movimento da braçada, um braço de cada vez.' },
        { name: 'Jacaré com Prancha', description: 'Segurando a prancha com uma mão, a criança faz a braçada com o outro braço, girando a cabeça para o lado para "respirar".' },
        { name: 'Passeio do Jacaré', description: 'Com "macarrão" sob as axilas, as crianças tentam se deslocar usando os "bracinhos de jacaré" e as "perninhas de foguete" ao mesmo tempo.' }
      ]
    },
  ],
  hidroginastica: [
    {
      id: 1,
      title: 'Hidro Power',
      description: 'Aula com foco no condicionamento cardiovascular e fortalecimento muscular, utilizando a resistência da água ao máximo.',
      objectives: ['Aumentar a resistência cardiovascular', 'Tonificar os principais grupos musculares', 'Melhorar a coordenação motora'],
      materials: ['Halteres aquáticos', 'Tornozeleiras aquáticas'],
      duration: 50,
      activities: [
        { name: 'Corrida Estacionária', description: 'Simular uma corrida no lugar, elevando os joelhos o máximo possível contra a resistência da água. Variar a velocidade.' },
        { name: 'Polichinelo Aquático', description: 'Realizar o movimento de polichinelo, focando em empurrar a água com braços e pernas para maximizar o esforço.' },
        { name: 'Chute Frontal e Traseiro', description: 'Com o corpo estabilizado, alternar chutes para frente e para trás, trabalhando quadríceps, glúteos e posteriores de coxa.' }
      ]
    },
    {
      id: 2,
      title: 'Hidro Local',
      description: 'Exercícios localizados para membros superiores, inferiores e abdômen, com alta intensidade e foco na definição muscular.',
      objectives: ['Fortalecer braços e pernas de forma isolada', 'Trabalhar a região do core com estabilidade', 'Aumentar a consciência corporal'],
      materials: ['Halteres aquáticos', 'Flutuadores tipo "macarrão"'],
      duration: 50,
      activities: [
        { name: 'Rosca Bíceps com Halter', description: 'Usando halteres aquáticos, realizar o movimento de rosca bíceps, empurrando o halter para baixo e controlando a subida.' },
        { name: 'Agachamento com Macarrão', description: 'Com um "macarrão" debaixo dos pés, realizar o agachamento, usando a instabilidade para ativar o core.' },
        { name: 'Abdominal na Borda', description: 'De costas para a parede da piscina, com os braços apoiados na borda, elevar os joelhos em direção ao peito.' }
      ]
    },
    {
      id: 3,
      title: 'Hidro Relax',
      description: 'Aula com exercícios de alongamento, flexibilidade e relaxamento, aproveitando a flutuabilidade da água para aliviar tensões.',
      objectives: ['Aumentar a flexibilidade articular', 'Reduzir o estresse muscular e mental', 'Melhorar a amplitude dos movimentos'],
      materials: ['Flutuadores tipo "macarrão"', 'Bolas'],
      duration: 50,
      activities: [
        { name: 'Alongamento em Flutuação', description: 'Com um "macarrão" embaixo das axilas e outro nos joelhos, flutuar de costas e relaxar completamente o corpo.' },
        { name: 'Pêndulo de Pernas', description: 'Apoiado na borda, balançar as pernas lentamente para um lado e para o outro, alongando a região lombar e o quadril.' },
        { name: 'Respiração Guiada', description: 'Em flutuação ou em pé, seguir as instruções do professor para uma respiração profunda e controlada, focando no relaxamento.' }
      ]
    },
    {
      id: 4,
      title: 'Hidro Dance',
      description: 'Aula coreografada com músicas animadas para um treino divertido e aeróbico, melhorando o humor e a resistência.',
      objectives: ['Queimar calorias de forma divertida', 'Melhorar o ritmo e a coordenação', 'Promover a socialização e o bem-estar'],
      materials: ['Nenhum específico'],
      duration: 50,
      activities: [
        { name: 'Passo Base (Marcha)', description: 'Marchar no lugar seguindo o ritmo da música, adicionando movimentos de braço.' },
        { name: 'Samba Aquático', description: 'Simular o passo básico do samba, trabalhando a cintura e a coordenação.' },
        { name: 'Giro com Elevação de Joelho', description: 'Combinar um giro de 90 ou 180 graus com a elevação do joelho oposto, criando uma coreografia dinâmica e divertida.' }
      ]
    },
    {
      id: 5,
      title: 'Hidro Circuito Funcional',
      description: 'Um circuito com estações que trabalham diferentes capacidades físicas (força, equilíbrio, cardio) de forma dinâmica e desafiadora.',
      objectives: ['Melhorar o condicionamento físico geral', 'Trabalhar múltiplos grupos musculares em uma aula', 'Manter a frequência cardíaca elevada com variedade de estímulos'],
      materials: ['Halteres aquáticos', 'Tornozeleiras', 'Pranchas', 'Macarrão'],
      duration: 50,
      activities: [
        { name: 'Estação 1: Força de Braços', description: 'Com halteres, realizar uma sequência de supino aquático e remada por 1 minuto.' },
        { name: 'Estação 2: Cardio', description: 'Realizar "Skipping" (corrida com joelhos altos) com máxima intensidade por 1 minuto.' },
        { name: 'Estação 3: Equilíbrio e Core', description: 'Em pé sobre um "macarrão", tentar manter o equilíbrio sem tocar os pés no chão por 1 minuto.' },
        { name: 'Estação 4: Força de Pernas', description: 'Com tornozeleiras, realizar uma sequência de abdução e adução de quadril por 1 minuto.' }
      ]
    },
  ],
};