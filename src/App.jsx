import React, { useState } from 'react';

// --- DADOS DA FASE DE GRUPOS ---
const initialData = [
  {
    grupo: "A",
    selecoes: [
      { id: "mex", nome: "México", iso: "mx", jogadores: [] },
      { id: "rsa", nome: "África do Sul", iso: "za", jogadores: [] },
      { id: "kor", nome: "Coreia do Sul", iso: "kr", jogadores: [] },
      { id: "cze", nome: "Tchéquia", iso: "cz", jogadores: [] },
    ],
    partidas: [
      { id: 1, mandante: "mex", visitante: "rsa", placarM: "", placarV: "", data: "11/06", hora: "16:00" },
      { id: 2, mandante: "kor", visitante: "cze", placarM: "", placarV: "", data: "11/06", hora: "23:00" },
      { id: 13, mandante: "cze", visitante: "rsa", placarM: "", placarV: "", data: "18/06", hora: "13:00" },
      { id: 14, mandante: "mex", visitante: "kor", placarM: "", placarV: "", data: "18/06", hora: "22:00" },
      { id: 25, mandante: "cze", visitante: "mex", placarM: "", placarV: "", data: "24/06", hora: "22:00" },
      { id: 26, mandante: "rsa", visitante: "kor", placarM: "", placarV: "", data: "24/06", hora: "22:00" },
    ]
  },
  {
    grupo: "B",
    selecoes: [
      { id: "can", nome: "Canadá", iso: "ca", jogadores: [] },
      { id: "bih", nome: "Bósnia", iso: "ba", jogadores: [] },
      { id: "qat", nome: "Qatar", iso: "qa", jogadores: [] },
      { id: "sui", nome: "Suíça", iso: "ch", jogadores: [] },
    ],
    partidas: [
      { id: 3, mandante: "can", visitante: "bih", placarM: "", placarV: "", data: "12/06", hora: "16:00" },
      { id: 4, mandante: "qat", visitante: "sui", placarM: "", placarV: "", data: "13/06", hora: "16:00" },
      { id: 15, mandante: "sui", visitante: "bih", placarM: "", placarV: "", data: "18/06", hora: "16:00" },
      { id: 16, mandante: "can", visitante: "qat", placarM: "", placarV: "", data: "18/06", hora: "19:00" },
      { id: 27, mandante: "sui", visitante: "can", placarM: "", placarV: "", data: "24/06", hora: "16:00" },
      { id: 28, mandante: "bih", visitante: "qat", placarM: "", placarV: "", data: "24/06", hora: "16:00" },
    ]
  },
  {
    grupo: "C",
    selecoes: [
      { id: "bra", nome: "Brasil", iso: "br", jogadores: [] },
      { id: "mar", nome: "Marrocos", iso: "ma", jogadores: [] },
      { id: "hai", nome: "Haiti", iso: "ht", jogadores: [] },
      { id: "sco", nome: "Escócia", iso: "gb-sct", jogadores: [] },
    ],
    partidas: [
      { id: 5, mandante: "bra", visitante: "mar", placarM: "", placarV: "", data: "13/06", hora: "19:00" },
      { id: 6, mandante: "hai", visitante: "sco", placarM: "", placarV: "", data: "13/06", hora: "22:00" },
      { id: 17, mandante: "sco", visitante: "mar", placarM: "", placarV: "", data: "19/06", hora: "19:00" },
      { id: 18, mandante: "bra", visitante: "hai", placarM: "", placarV: "", data: "19/06", hora: "22:00" },
      { id: 29, mandante: "sco", visitante: "bra", placarM: "", placarV: "", data: "24/06", hora: "19:00" },
      { id: 30, mandante: "mar", visitante: "hai", placarM: "", placarV: "", data: "24/06", hora: "19:00" },
    ]
  },
  {
    grupo: "D",
    selecoes: [
      { id: "usa", nome: "EUA", iso: "us", jogadores: [] },
      { id: "par", nome: "Paraguai", iso: "py", jogadores: [] },
      { id: "aus", nome: "Austrália", iso: "au", jogadores: [] },
      { id: "tur", nome: "Turquia", iso: "tr", jogadores: [] },
    ],
    partidas: [
      { id: 7, mandante: "usa", visitante: "par", placarM: "", placarV: "", data: "12/06", hora: "22:00" },
      { id: 8, mandante: "aus", visitante: "tur", placarM: "", placarV: "", data: "13/06", hora: "01:00" },
      { id: 19, mandante: "usa", visitante: "aus", placarM: "", placarV: "", data: "19/06", hora: "16:00" },
      { id: 20, mandante: "tur", visitante: "par", placarM: "", placarV: "", data: "19/06", hora: "01:00" },
      { id: 31, mandante: "tur", visitante: "usa", placarM: "", placarV: "", data: "25/06", hora: "23:00" },
      { id: 32, mandante: "par", visitante: "aus", placarM: "", placarV: "", data: "25/06", hora: "23:00" },
    ]
  },
  {
    grupo: "E",
    selecoes: [
      { id: "ger", nome: "Alemanha", iso: "de", jogadores: [] },
      { id: "cuw", nome: "Curaçao", iso: "cw", jogadores: [] },
      { id: "civ", nome: "C. Marfim", iso: "ci", jogadores: [] },
      { id: "ecu", nome: "Equador", iso: "ec", jogadores: [] },
    ],
    partidas: [
      { id: 9, mandante: "ger", visitante: "cuw", placarM: "", placarV: "", data: "14/06", hora: "14:00" },
      { id: 10, mandante: "civ", visitante: "ecu", placarM: "", placarV: "", data: "14/06", hora: "20:00" },
      { id: 21, mandante: "ger", visitante: "civ", placarM: "", placarV: "", data: "20/06", hora: "17:00" },
      { id: 22, mandante: "ecu", visitante: "cuw", placarM: "", placarV: "", data: "20/06", hora: "21:00" },
      { id: 33, mandante: "cuw", visitante: "civ", placarM: "", placarV: "", data: "25/06", hora: "17:00" },
      { id: 34, mandante: "ecu", visitante: "ger", placarM: "", placarV: "", data: "25/06", hora: "17:00" },
    ]
  },
  {
    grupo: "F",
    selecoes: [
      { id: "ned", nome: "Holanda", iso: "nl", jogadores: [] },
      { id: "jpn", nome: "Japão", iso: "jp", jogadores: [] },
      { id: "swe", nome: "Suécia", iso: "se", jogadores: [] },
      { id: "tun", nome: "Tunísia", iso: "tn", jogadores: [] },
    ],
    partidas: [
      { id: 11, mandante: "ned", visitante: "jpn", placarM: "", placarV: "", data: "14/06", hora: "17:00" },
      { id: 12, mandante: "swe", visitante: "tun", placarM: "", placarV: "", data: "14/06", hora: "23:00" },
      { id: 23, mandante: "ned", visitante: "swe", placarM: "", placarV: "", data: "20/06", hora: "14:00" },
      { id: 24, mandante: "tun", visitante: "jpn", placarM: "", placarV: "", data: "20/06", hora: "01:00" },
      { id: 35, mandante: "jpn", visitante: "swe", placarM: "", placarV: "", data: "25/06", hora: "20:00" },
      { id: 36, mandante: "tun", visitante: "ned", placarM: "", placarV: "", data: "25/06", hora: "20:00" },
    ]
  },
  {
    grupo: "G",
    selecoes: [
      { id: "bel", nome: "Bélgica", iso: "be", jogadores: [] },
      { id: "egy", nome: "Egito", iso: "eg", jogadores: [] },
      { id: "irn", nome: "Irã", iso: "ir", jogadores: [] },
      { id: "nzl", nome: "N. Zelândia", iso: "nz", jogadores: [] },
    ],
    partidas: [
      { id: 37, mandante: "bel", visitante: "egy", placarM: "", placarV: "", data: "15/06", hora: "16:00" },
      { id: 38, mandante: "irn", visitante: "nzl", placarM: "", placarV: "", data: "15/06", hora: "22:00" },
      { id: 39, mandante: "bel", visitante: "irn", placarM: "", placarV: "", data: "21/06", hora: "16:00" },
      { id: 40, mandante: "nzl", visitante: "egy", placarM: "", placarV: "", data: "21/06", hora: "23:00" },
      { id: 41, mandante: "nzl", visitante: "bel", placarM: "", placarV: "", data: "26/06", hora: "00:00" },
      { id: 42, mandante: "egy", visitante: "irn", placarM: "", placarV: "", data: "26/06", hora: "00:00" },
    ]
  },
  {
    grupo: "H",
    selecoes: [
      { id: "esp", nome: "Espanha", iso: "es", jogadores: [] },
      { id: "cpv", nome: "Cabo Verde", iso: "cv", jogadores: [] },
      { id: "sau", nome: "A. Saudita", iso: "sa", jogadores: [] },
      { id: "uru", nome: "Uruguai", iso: "uy", jogadores: [] },
    ],
    partidas: [
      { id: 43, mandante: "esp", visitante: "cpv", placarM: "", placarV: "", data: "15/06", hora: "13:00" },
      { id: 44, mandante: "sau", visitante: "uru", placarM: "", placarV: "", data: "15/06", hora: "19:00" },
      { id: 45, mandante: "esp", visitante: "sau", placarM: "", placarV: "", data: "21/06", hora: "13:00" },
      { id: 46, mandante: "uru", visitante: "cpv", placarM: "", placarV: "", data: "21/06", hora: "19:00" },
      { id: 47, mandante: "cpv", visitante: "sau", placarM: "", placarV: "", data: "26/06", hora: "21:00" },
      { id: 48, mandante: "uru", visitante: "esp", placarM: "", placarV: "", data: "26/06", hora: "21:00" },
    ]
  },
  {
    grupo: "I",
    selecoes: [
      { id: "fra", nome: "França", iso: "fr", jogadores: [] },
      { id: "sen", nome: "Senegal", iso: "sn", jogadores: [] },
      { id: "irq", nome: "Iraque", iso: "iq", jogadores: [] },
      { id: "nor", nome: "Noruega", iso: "no", jogadores: [] },
    ],
    partidas: [
      { id: 49, mandante: "fra", visitante: "sen", placarM: "", placarV: "", data: "16/06", hora: "16:00" },
      { id: 50, mandante: "irq", visitante: "nor", placarM: "", placarV: "", data: "16/06", hora: "19:00" },
      { id: 51, mandante: "fra", visitante: "irq", placarM: "", placarV: "", data: "22/06", hora: "18:00" },
      { id: 52, mandante: "nor", visitante: "sen", placarM: "", placarV: "", data: "22/06", hora: "21:00" },
      { id: 53, mandante: "nor", visitante: "fra", placarM: "", placarV: "", data: "26/06", hora: "16:00" },
      { id: 54, mandante: "sen", visitante: "irq", placarM: "", placarV: "", data: "26/06", hora: "16:00" },
    ]
  },
  {
    grupo: "J",
    selecoes: [
      { id: "arg", nome: "Argentina", iso: "ar", jogadores: [] },
      { id: "alg", nome: "Argélia", iso: "dz", jogadores: [] },
      { id: "aut", nome: "Áustria", iso: "at", jogadores: [] },
      { id: "jor", nome: "Jordânia", iso: "jo", jogadores: [] },
    ],
    partidas: [
      { id: 55, mandante: "arg", visitante: "alg", placarM: "", placarV: "", data: "16/06", hora: "22:00" },
      { id: 56, mandante: "aut", visitante: "jor", placarM: "", placarV: "", data: "16/06", hora: "01:00" },
      { id: 57, mandante: "arg", visitante: "aut", placarM: "", placarV: "", data: "22/06", hora: "14:00" },
      { id: 58, mandante: "jor", visitante: "alg", placarM: "", placarV: "", data: "22/06", hora: "00:00" },
      { id: 59, mandante: "alg", visitante: "aut", placarM: "", placarV: "", data: "27/06", hora: "23:00" },
      { id: 60, mandante: "jor", visitante: "arg", placarM: "", placarV: "", data: "27/06", hora: "23:00" },
    ]
  },
  {
    grupo: "K",
    selecoes: [
      { id: "por", nome: "Portugal", iso: "pt", jogadores: [] },
      { id: "cod", nome: "RD Congo", iso: "cd", jogadores: [] },
      { id: "uzb", nome: "Uzbequistão", iso: "uz", jogadores: [] },
      { id: "col", nome: "Colômbia", iso: "co", jogadores: [] },
    ],
    partidas: [
      { id: 61, mandante: "por", visitante: "cod", placarM: "", placarV: "", data: "17/06", hora: "14:00" },
      { id: 62, mandante: "uzb", visitante: "col", placarM: "", placarV: "", data: "17/06", hora: "23:00" },
      { id: 63, mandante: "por", visitante: "uzb", placarM: "", placarV: "", data: "23/06", hora: "14:00" },
      { id: 64, mandante: "col", visitante: "cod", placarM: "", placarV: "", data: "23/06", hora: "23:00" },
      { id: 65, mandante: "col", visitante: "por", placarM: "", placarV: "", data: "27/06", hora: "20:30" },
      { id: 66, mandante: "cod", visitante: "uzb", placarM: "", placarV: "", data: "27/06", hora: "20:30" },
    ]
  },
  {
    grupo: "L",
    selecoes: [
      { id: "eng", nome: "Inglaterra", iso: "gb-eng", jogadores: [] },
      { id: "cro", nome: "Croácia", iso: "hr", jogadores: [] },
      { id: "gha", nome: "Gana", iso: "gh", jogadores: [] },
      { id: "pan", nome: "Panamá", iso: "pa", jogadores: [] },
    ],
    partidas: [
      { id: 67, mandante: "eng", visitante: "cro", placarM: "", placarV: "", data: "17/06", hora: "17:00" },
      { id: 68, mandante: "gha", visitante: "pan", placarM: "", placarV: "", data: "17/06", hora: "20:30" },
      { id: 69, mandante: "eng", visitante: "gha", placarM: "", placarV: "", data: "23/06", hora: "17:00" },
      { id: 70, mandante: "pan", visitante: "cro", placarM: "", placarV: "", data: "23/06", hora: "20:00" },
      { id: 71, mandante: "pan", visitante: "eng", placarM: "", placarV: "", data: "27/06", hora: "18:00" },
      { id: 72, mandante: "cro", visitante: "gha", placarM: "", placarV: "", data: "27/06", hora: "18:00" },
    ]
  }
];

// --- ESTRUTURA INICIAL DO MATA-MATA ---
const initialKnockout = {
  "16 Avos": [
    { id: 73, m: "2A", v: "2B", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "28/06", hora: "16h" },
    { id: 76, m: "1C", v: "2F", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "29/06", hora: "14h" },
    { id: 74, m: "1E", v: "3º (A/B/C/D/F)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "29/06", hora: "17h30" },
    { id: 75, m: "1F", v: "2C", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "29/06", hora: "22h" },
    { id: 78, m: "2E", v: "2I", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "30/06", hora: "14h" },
    { id: 77, m: "1I", v: "3º (C/D/F/G/H)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "30/06", hora: "18h" },
    { id: 79, m: "1A", v: "3º (C/E/F/H/I)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "30/06", hora: "22h" },
    { id: 80, m: "1L", v: "3º (E/H/I/J/K)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "01/07", hora: "13h" },
    { id: 82, m: "1G", v: "3º (A/E/H/I/J)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "01/07", hora: "17h" },
    { id: 81, m: "1D", v: "3º (B/E/F/I/J)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "01/07", hora: "21h" },
    { id: 84, m: "1H", v: "2J", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "02/07", hora: "16h" },
    { id: 83, m: "2K", v: "2L", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "02/07", hora: "20h" },
    { id: 85, m: "1B", v: "3º (E/G/I/J)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "02/07", hora: "00h" },
    { id: 88, m: "2D", v: "2G", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "03/07", hora: "15h" },
    { id: 86, m: "1J", v: "2H", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "03/07", hora: "19h" },
    { id: 87, m: "1K", v: "3º (D/E/I/J/L)", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "03/07", hora: "22:30" },
  ],
  "Oitavas": [
    { id: 90, m: "Venc. 73", v: "Venc. 75", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "04/07", hora: "14h" },
    { id: 89, m: "Venc. 74", v: "Venc. 77", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "04/07", hora: "18h" },
    { id: 91, m: "Venc. 76", v: "Venc. 78", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "05/07", hora: "17h" },
    { id: 92, m: "Venc. 79", v: "Venc. 80", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "05/07", hora: "21h" },
    { id: 93, m: "Venc. 83", v: "Venc. 84", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "06/07", hora: "16h" },
    { id: 94, m: "Venc. 81", v: "Venc. 82", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "06/07", hora: "21h" },
    { id: 95, m: "Venc. 86", v: "Venc. 88", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "07/07", hora: "13h" },
    { id: 96, m: "Venc. 85", v: "Venc. 87", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "07/07", hora: "17h" },
  ],
  "Quartas": [
    { id: 97, m: "Venc. 89", v: "Venc. 90", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "09/07", hora: "17h" },
    { id: 98, m: "Venc. 93", v: "Venc. 94", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "10/07", hora: "16h" },
    { id: 99, m: "Venc. 91", v: "Venc. 92", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "11/07", hora: "18h" },
    { id: 100, m: "Venc. 95", v: "Venc. 96", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "11/07", hora: "22h" },
  ],
  "Semis": [
    { id: 101, m: "Venc. 97", v: "Venc. 98", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "14/07", hora: "16h" },
    { id: 102, m: "Venc. 99", v: "Venc. 100", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "15/07", hora: "16h" },
  ],
  "Finais": [
    { id: 103, m: "Perd. 101", v: "Perd. 102", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "18/07", hora: "18h", label: "3º LUGAR" },
    { id: 104, m: "Venc. 101", v: "Venc. 102", pM: "", pV: "", proM: "", proV: "", penM: "", penV: "", data: "19/07", hora: "16h", label: "GRANDE FINAL" },
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState('grupos');
  const [data, setData] = useState(JSON.parse(JSON.stringify(initialData)));
  const [knockout, setKnockout] = useState(JSON.parse(JSON.stringify(initialKnockout)));
  const [isAnimClosed, setIsAnimClosed] = useState(false);

  // ESTADO PARA DESEMPATES MANUAIS (Armazena os pontos manuais de cada time pelo ID)
  const [manualTiebreakers, setManualTiebreakers] = useState({});

  const handleResetGroups = () => {
    if (window.confirm("Tem certeza que deseja zerar todos os placares da Fase de Grupos? A Fase Final também será resetada.")) {
      setData(JSON.parse(JSON.stringify(initialData)));
      setKnockout(JSON.parse(JSON.stringify(initialKnockout)));
      setManualTiebreakers({});
      setIsAnimClosed(false);
    }
  };

  const handleResetKnockout = () => {
    if (window.confirm("Tem certeza que deseja zerar todos os placares da Fase Final?")) {
      setKnockout(JSON.parse(JSON.stringify(initialKnockout)));
      setIsAnimClosed(false);
    }
  };

  const getTeamIso = (teamName) => {
    for (let group of data) {
      const team = group.selecoes.find(s => s.nome === teamName);
      if (team) return team.iso;
    }
    return null;
  };

  const getMatchWinnerInfo = (m) => {
    if (m.pM === "" || m.pV === "") return { winner: null, loser: null };

    // Tempo normal
    if (m.pM > m.pV) return { winner: m.m, loser: m.v };
    if (m.pV > m.pM) return { winner: m.v, loser: m.m };

    // Se empatou no tempo normal, analisa Prorrogação
    if (m.pM === m.pV) {
      if (m.proM !== "" && m.proV !== "") {
        if (m.proM > m.proV) return { winner: m.m, loser: m.v };
        if (m.proV > m.proM) return { winner: m.v, loser: m.m };

        // Se empatou na prorrogação, analisa Pênaltis
        if (m.proM === m.proV && m.penM !== "" && m.penV !== "") {
          if (m.penM > m.penV) return { winner: m.m, loser: m.v };
          if (m.penV > m.penM) return { winner: m.v, loser: m.m };
        }
      }
    }
    return { winner: null, loser: null };
  };

  const getChampion = () => {
    const finalMatch = knockout["Finais"]?.find(j => j.id === 104);
    if (finalMatch) {
      return getMatchWinnerInfo(finalMatch).winner;
    }
    return null;
  };

  const syncBracket = (currentKnockout) => {
    const allStandings = data.map(g => ({ grupo: g.grupo, times: getStandings(g) }));
    const firsts = {}; const seconds = {}; const thirds = [];

    allStandings.forEach(g => {
      firsts[g.grupo] = g.times[0];
      seconds[g.grupo] = g.times[1];
      thirds.push({ grupo: g.grupo, time: g.times[2] });
    });

    thirds.sort((a, b) =>
      (b.time.p - a.time.p) ||
      (b.time.sg - a.time.sg) ||
      (b.time.gp - a.time.gp) ||
      ((manualTiebreakers[b.time.id] || 0) - (manualTiebreakers[a.time.id] || 0))
    );
    const bestThirds = thirds.slice(0, 8);

    const thirdSlots = [
      { id: 74, allowed: ['A', 'B', 'C', 'D', 'F'] },
      { id: 77, allowed: ['C', 'D', 'F', 'G', 'H'] },
      { id: 79, allowed: ['C', 'E', 'F', 'H', 'I'] },
      { id: 80, allowed: ['E', 'H', 'I', 'J', 'K'] },
      { id: 82, allowed: ['A', 'E', 'H', 'I', 'J'] },
      { id: 81, allowed: ['B', 'E', 'F', 'I', 'J'] },
      { id: 85, allowed: ['E', 'F', 'G', 'I', 'J'] },
      { id: 87, allowed: ['D', 'E', 'I', 'J', 'L'] },
    ];

    let assignedThirds = {};
    const assign = (slotIndex, availableThirds) => {
      if (slotIndex === thirdSlots.length) return true;
      const slot = thirdSlots[slotIndex];
      for (let i = 0; i < availableThirds.length; i++) {
        const t = availableThirds[i];
        if (slot.allowed.includes(t.grupo)) {
          assignedThirds[slot.id] = t.time.nome;
          const remaining = availableThirds.filter((_, idx) => idx !== i);
          if (assign(slotIndex + 1, remaining)) return true;
        }
      }
      return false;
    };
    assign(0, bestThirds);

    const winners = {};
    const losers = {};

    const updatedKnockout = { ...currentKnockout };

    updatedKnockout["16 Avos"] = updatedKnockout["16 Avos"].map(match => {
      const origM = initialKnockout["16 Avos"].find(m => m.id === match.id).m;
      const origV = initialKnockout["16 Avos"].find(m => m.id === match.id).v;

      let newM = origM, newV = origV;

      if (origM.length === 2 && ['1', '2'].includes(origM[0])) newM = origM[0] === '1' ? firsts[origM[1]].nome : seconds[origM[1]].nome;
      if (origV.length === 2 && ['1', '2'].includes(origV[0])) newV = origV[0] === '1' ? firsts[origV[1]].nome : seconds[origV[1]].nome;

      if (origM.includes("3º")) newM = assignedThirds[match.id] || origM;
      if (origV.includes("3º")) newV = assignedThirds[match.id] || origV;

      const mData = { ...match, m: newM, v: newV };
      const info = getMatchWinnerInfo(mData);
      winners[mData.id] = info.winner;
      losers[mData.id] = info.loser;
      return mData;
    });

    const rounds = ["Oitavas", "Quartas", "Semis", "Finais"];
    rounds.forEach(round => {
      updatedKnockout[round] = updatedKnockout[round].map(match => {
        const origM = initialKnockout[round].find(m => m.id === match.id).m;
        const origV = initialKnockout[round].find(m => m.id === match.id).v;
        let newM = origM, newV = origV;

        if (origM.startsWith("Venc.")) {
          const gameId = parseInt(origM.split(" ")[1]);
          newM = winners[gameId] || origM;
        } else if (origM.startsWith("Perd.")) {
          const gameId = parseInt(origM.split(" ")[1]);
          newM = losers[gameId] || origM;
        }

        if (origV.startsWith("Venc.")) {
          const gameId = parseInt(origV.split(" ")[1]);
          newV = winners[gameId] || origV;
        } else if (origV.startsWith("Perd.")) {
          const gameId = parseInt(origV.split(" ")[1]);
          newV = losers[gameId] || origV;
        }

        const mData = { ...match, m: newM, v: newV };
        const info = getMatchWinnerInfo(mData);
        winners[mData.id] = info.winner;
        losers[mData.id] = info.loser;
        return mData;
      });
    });

    setKnockout(updatedKnockout);
  };

  const handleScoreChange = (grupoIdx, partidaId, campo, valor) => {
    const newData = [...data];
    const partida = newData[grupoIdx].partidas.find(p => p.id === partidaId);
    partida[campo] = valor === "" ? "" : parseInt(valor);
    setData(newData);
  };

  const handleKnockoutChange = (rodada, id, campo, valor) => {
    const newKnockout = { ...knockout };
    const jogo = newKnockout[rodada].find(j => j.id === id);
    jogo[campo] = valor === "" ? "" : parseInt(valor);

    // Limpeza automática: se deixar de ser empate, limpa a prorrogação/pênaltis
    if (campo === 'pM' || campo === 'pV') {
      if (jogo.pM !== jogo.pV) {
        jogo.proM = ""; jogo.proV = ""; jogo.penM = ""; jogo.penV = "";
      }
    }

    syncBracket(newKnockout);
    setIsAnimClosed(false);
  };

  const handleManualTiebreaker = (teamId, value) => {
    setManualTiebreakers(prev => ({
      ...prev,
      [teamId]: value === "" ? 0 : parseInt(value)
    }));
  };

  const getStandings = (grupo) => {
    let stats = grupo.selecoes.map(s => ({ ...s, p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 }));
    grupo.partidas.forEach(m => {
      if (m.placarM !== "" && m.placarV !== "") {
        const home = stats.find(s => s.id === m.mandante);
        const away = stats.find(s => s.id === m.visitante);
        home.j += 1; away.j += 1;
        home.gp += m.placarM; home.gc += m.placarV;
        away.gp += m.placarV; away.gc += m.placarM;
        home.sg = home.gp - home.gc; away.sg = away.gp - away.gc;
        if (m.placarM > m.placarV) { home.p += 3; home.v += 1; away.d += 1; }
        else if (m.placarV > m.placarM) { away.p += 3; away.v += 1; home.d += 1; }
        else { home.p += 1; away.p += 1; home.e += 1; away.e += 1; }
      }
    });
    return stats.sort((a, b) =>
      (b.p - a.p) ||
      (b.sg - a.sg) ||
      (b.gp - a.gp) ||
      ((manualTiebreakers[b.id] || 0) - (manualTiebreakers[a.id] || 0))
    );
  };

  const getThirdPlaceTable = () => {
    let thirds = [];
    data.forEach(g => {
      const standings = getStandings(g);
      thirds.push({ grupo: g.grupo, time: standings[2] });
    });
    return thirds.sort((a, b) =>
      (b.time.p - a.time.p) ||
      (b.time.sg - a.time.sg) ||
      (b.time.gp - a.time.gp) ||
      ((manualTiebreakers[b.time.id] || 0) - (manualTiebreakers[a.time.id] || 0))
    );
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans pb-10 text-gray-900 relative">

      <header className="bg-[#0258B7] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tighter italic">HUB DA <span className="font-light not-italic text-blue-200 ml-1 underline decoration-2">COPA DO MUNDO 2026</span></h1>
            <div className="flex gap-2 items-center">
              <div className="text-[10px] bg-blue-800 px-2 py-1 rounded font-bold uppercase tracking-widest hidden sm:block">Simulador Interativo</div>
            </div>
          </div>
          <nav className="flex gap-2">
            <button onClick={() => setActiveTab('grupos')} className={`flex-1 py-2 text-xs font-bold rounded-md transition duration-200 ${activeTab === 'grupos' ? 'bg-white text-[#0258B7] shadow-sm' : 'bg-blue-800/50 text-blue-100 hover:bg-blue-700'}`}>FASE DE GRUPOS</button>
            <button onClick={() => setActiveTab('final')} className={`flex-1 py-2 text-xs font-bold rounded-md transition duration-200 ${activeTab === 'final' ? 'bg-white text-[#0258B7] shadow-sm' : 'bg-blue-800/50 text-blue-100 hover:bg-blue-700'}`}>FASE FINAL</button>
          </nav>
        </div>
      </header>

      {getChampion() && !isAnimClosed && activeTab === 'final' && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl border-4 border-[#0258B7] p-8 shadow-2xl flex flex-col items-center justify-center gap-6 animate-in zoom-in duration-500 z-40 relative">
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">HUB DA COPA 2026</p>
            <p className="text-sm text-[#0258B7] font-black uppercase tracking-widest">O VENCEDOR É:</p>
            <div className="flex flex-col items-center gap-6">
              <p className="text-5xl font-black text-gray-900 uppercase tracking-tighter text-center">{getChampion()}</p>
              <img src={`https://flagcdn.com/w160/${getTeamIso(getChampion())}.png`} className="w-32 shadow-2xl border-4 border-gray-100 rounded-lg animate-pulse object-cover" alt="" />
            </div>
            <div className="bg-[#0258B7] text-white px-6 py-4 rounded-full shadow-inner animate-bounce mt-4">
              <p className="text-xl font-black uppercase tracking-widest">CAMPEÃO DO MUNDO!</p>
            </div>
            <button onClick={() => setIsAnimClosed(true)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto p-4 mt-4 relative">

        {/* === FASE DE GRUPOS === */}
        {activeTab === 'grupos' && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm gap-4">
              <div>
                <h2 className="text-[#0258B7] font-black text-lg">Fase de Grupos</h2>
                <p className="text-sm text-gray-500">Preencha os resultados para definir os classificados.</p>
              </div>
              <button onClick={handleResetGroups} className="w-full sm:w-auto bg-red-50 text-red-600 hover:bg-red-100 font-bold py-2 px-6 rounded-lg transition-colors border border-red-100 uppercase tracking-widest text-xs">
                ZERAR GRUPOS
              </button>
            </div>

            {/* AVISO DO DESEMPATE MANUAL */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm flex items-start gap-3">
              <span className="text-xl">ℹ️</span>
              <div className="text-sm text-yellow-800">
                <strong className="block mb-1">Como funciona a coluna "DM" (Desempate Manual):</strong>
                Se duas seleções ficarem empatadas em Pontos, Saldo de Gols e Gols Pró, digite um valor maior na coluna <b>DM</b> da equipe que deve avançar (simulando, por exemplo, menos cartões vermelhos/amarelos ou melhor ranking da FIFA). O sistema vai reordenar a tabela na mesma hora.
              </div>
            </div>

            <div className="flex flex-col gap-12 mt-4">
              {data.map((grupo, gIdx) => (
                <div key={grupo.grupo} className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3 bg-white rounded shadow-sm border border-gray-200 overflow-x-auto">
                    <div className="bg-[#0258B7]/5 p-3 border-b border-gray-200 flex justify-between items-center font-bold text-[#0258B7]">
                      <span>GRUPO {grupo.grupo}</span>
                    </div>
                    <table className="w-full text-[13px] text-left border-collapse min-w-[500px]">
                      <thead className="bg-gray-50 text-gray-400 font-bold border-b border-gray-100 text-[11px]">
                        <tr>
                          <th className="p-3 w-10">#</th>
                          <th className="p-3">EQUIPE</th>
                          <th className="p-2 text-center w-10">P</th>
                          <th className="p-2 text-center w-10">J</th>
                          <th className="p-2 text-center w-8">V</th>
                          <th className="p-2 text-center w-8">E</th>
                          <th className="p-2 text-center w-8">D</th>
                          <th className="p-2 text-center w-10">GP</th>
                          <th className="p-2 text-center w-10">GC</th>
                          <th className="p-2 text-center w-10">SG</th>
                          <th className="p-2 text-center w-12 cursor-help group relative" title="Desempate Manual (Pontos de Fair Play ou Ranking FIFA)">
                            DM 🛠️
                            {/* Tooltip Hover no Header */}
                            <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-[10px] p-2 rounded shadow-lg z-10 font-normal">
                              Digite um número maior para forçar a classificação desta equipe em caso de empate total.
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {getStandings(grupo).map((time, idx) => (
                          <tr key={time.id} className="border-b border-gray-50 hover:bg-blue-50/30">
                            <td className="p-3 text-center font-bold">
                              <div className="flex items-center gap-2"><span className={`w-1 h-5 rounded-full ${idx < 2 ? 'bg-green-500' : idx === 2 ? 'bg-blue-400' : 'bg-gray-300'}`}></span>{idx + 1}</div>
                            </td>
                            <td className="p-3 flex items-center gap-3">
                              <img src={`https://flagcdn.com/w20/${time.iso}.png`} className="w-5 h-3.5 shadow-sm border border-gray-100 rounded-[1px] object-cover" alt="" />
                              <span className="font-semibold text-gray-700">{time.nome}</span>
                            </td>
                            <td className="p-2 text-center font-bold text-[#0258B7] bg-blue-50/20">{time.p}</td>
                            <td className="p-2 text-center text-gray-600 font-medium">{time.j}</td><td className="p-2 text-center text-gray-500">{time.v}</td><td className="p-2 text-center text-gray-500">{time.e}</td><td className="p-2 text-center text-gray-500">{time.d}</td><td className="p-2 text-center text-gray-500">{time.gp}</td><td className="p-2 text-center text-gray-500">{time.gc}</td>
                            <td className={`p-2 text-center font-bold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-400'}`}>{time.sg > 0 ? `+${time.sg}` : time.sg}</td>
                            <td className="p-2 text-center">
                              <input type="number" className="w-10 bg-gray-100 border border-gray-200 rounded text-center text-xs py-1 text-[#0258B7] font-bold outline-none" placeholder="0" value={manualTiebreakers[time.id] || ""} onChange={(e) => handleManualTiebreaker(time.id, e.target.value)} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="lg:w-1/3 space-y-3">
                    <div className="flex items-center justify-between px-2"><h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Partidas</h4><div className="h-[1px] flex-grow mx-4 bg-gray-200"></div></div>
                    {grupo.partidas.map(p => (
                      <div key={p.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        <div className="bg-gray-50 px-3 py-1.5 flex justify-between items-center text-[9px] font-bold text-gray-400 border-b border-gray-100 uppercase tracking-tighter">
                          <span>{p.data}</span><span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-sm">{p.hora} BRT</span>
                        </div>
                        <div className="flex items-center justify-between p-3 gap-2">
                          <div className="flex flex-col items-center gap-1 w-1/3 text-center">
                            <img src={`https://flagcdn.com/w40/${grupo.selecoes.find(s => s.id === p.mandante).iso}.png`} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt="" />
                            <span className="text-[10px] font-bold text-gray-600 truncate w-full">{grupo.selecoes.find(s => s.id === p.mandante).nome}</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                            <input type="number" className="w-7 bg-transparent text-center font-black text-[#0258B7] outline-none text-base" value={p.placarM} onChange={(e) => handleScoreChange(gIdx, p.id, 'placarM', e.target.value)} placeholder="-" />
                            <span className="text-gray-300 font-bold text-xs">:</span>
                            <input type="number" className="w-7 bg-transparent text-center font-black text-[#0258B7] outline-none text-base" value={p.placarV} onChange={(e) => handleScoreChange(gIdx, p.id, 'placarV', e.target.value)} placeholder="-" />
                          </div>
                          <div className="flex flex-col items-center gap-1 w-1/3 text-center">
                            <img src={`https://flagcdn.com/w40/${grupo.selecoes.find(s => s.id === p.visitante).iso}.png`} className="w-6 h-4 object-cover rounded-sm shadow-sm" alt="" />
                            <span className="text-[10px] font-bold text-gray-600 truncate w-full">{grupo.selecoes.find(s => s.id === p.visitante).nome}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* TABELA DOS MELHORES TERCEIROS */}
            <div className="mt-12 bg-white rounded shadow-sm border border-gray-200 overflow-x-auto">
              <div className="bg-[#0258B7] text-white p-4 flex justify-between items-center font-bold">
                <span>RANKING: MELHORES 3º COLOCADOS</span>
                <span className="text-xs text-blue-200 font-normal hidden sm:block">Os 8 melhores avançam para a Fase Final</span>
              </div>
              <table className="w-full text-[13px] text-left border-collapse min-w-[500px]">
                <thead className="bg-gray-50 text-gray-400 font-bold border-b border-gray-100 text-[11px]">
                  <tr>
                    <th className="p-3 w-10">#</th>
                    <th className="p-3 w-16 text-center">GRUPO</th>
                    <th className="p-3">EQUIPE</th>
                    <th className="p-2 text-center w-10">P</th>
                    <th className="p-2 text-center w-10">J</th>
                    <th className="p-2 text-center w-8">V</th>
                    <th className="p-2 text-center w-8">E</th>
                    <th className="p-2 text-center w-8">D</th>
                    <th className="p-2 text-center w-10">GP</th>
                    <th className="p-2 text-center w-10">GC</th>
                    <th className="p-2 text-center w-10">SG</th>
                    <th className="p-2 text-center w-12 cursor-help group relative" title="Desempate Manual">
                      DM 🛠️
                      {/* Tooltip Hover no Header */}
                      <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full right-0 mb-2 w-48 bg-gray-800 text-white text-[10px] p-2 rounded shadow-lg z-10 font-normal">
                        Em caso de empate absoluto, defina aqui quem passa.
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getThirdPlaceTable().map((item, idx) => (
                    <tr key={item.time.id} className="border-b border-gray-50 hover:bg-blue-50/30">
                      <td className="p-3 text-center font-bold">
                        <div className="flex items-center gap-2">
                          <span className={`w-1 h-5 rounded-full ${idx < 8 ? 'bg-blue-400' : 'bg-red-400'}`}></span>
                          {idx + 1}
                        </div>
                      </td>
                      <td className="p-3 text-center font-bold text-gray-400">{item.grupo}</td>
                      <td className="p-3 flex items-center gap-3">
                        <img src={`https://flagcdn.com/w20/${item.time.iso}.png`} className="w-5 h-3.5 shadow-sm border border-gray-100 rounded-[1px] object-cover" alt="" />
                        <span className="font-semibold text-gray-700">{item.time.nome}</span>
                      </td>
                      <td className="p-2 text-center font-bold text-[#0258B7] bg-blue-50/20">{item.time.p}</td>
                      <td className="p-2 text-center text-gray-600 font-medium">{item.time.j}</td>
                      <td className="p-2 text-center text-gray-500">{item.time.v}</td>
                      <td className="p-2 text-center text-gray-500">{item.time.e}</td>
                      <td className="p-2 text-center text-gray-500">{item.time.d}</td>
                      <td className="p-2 text-center text-gray-500">{item.time.gp}</td>
                      <td className="p-2 text-center text-gray-500">{item.time.gc}</td>
                      <td className={`p-2 text-center font-bold ${item.time.sg > 0 ? 'text-green-600' : item.time.sg < 0 ? 'text-red-600' : 'text-gray-400'}`}>{item.time.sg > 0 ? `+${item.time.sg}` : item.time.sg}</td>
                      <td className="p-2 text-center">
                        <input type="number" className="w-10 bg-gray-100 border border-gray-200 rounded text-center text-xs py-1 text-[#0258B7] font-bold outline-none" placeholder="0" value={manualTiebreakers[item.time.id] || ""} onChange={(e) => handleManualTiebreaker(item.time.id, e.target.value)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* === FASE FINAL === */}
        {activeTab === 'final' && (
          <div className="space-y-6 animate-in fade-in duration-300 relative z-10">

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-[#0258B7] font-black text-lg">Definir Chaveamento</h2>
                <p className="text-sm text-gray-500">Puxe os classificados e defina os jogos até a Grande Final.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button onClick={handleResetKnockout} className="flex-1 md:flex-none bg-red-50 text-red-600 hover:bg-red-100 font-bold py-3 px-6 rounded-lg transition-colors border border-red-100 uppercase tracking-widest text-xs">
                  ZERAR FASE FINAL
                </button>
                <button onClick={() => syncBracket(knockout)} className="flex-1 md:flex-none bg-[#0258B7] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors uppercase tracking-widest text-xs">
                  ATUALIZAR CHAVES
                </button>
              </div>
            </div>

            <div className="bg-[#F2F2F2] p-4 sm:p-8 rounded-2xl w-full">
              {Object.entries(knockout).map(([rodada, jogos]) => (
                <div key={rodada} className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-[#0258B7] font-black uppercase text-xl border-l-4 border-[#0258B7] pl-3">{rodada}</h3>
                    <div className="h-[2px] flex-grow bg-gray-300/50"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {jogos.map(j => (
                      <div key={j.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative flex flex-col">
                        <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-[10px] font-bold text-gray-500 border-b border-gray-200">
                          <span className="uppercase tracking-widest text-[#0258B7]">Jogo {j.id}</span>
                          <span>{j.data} - {j.hora}</span>
                        </div>

                        <div className="p-4 space-y-4 flex-grow">
                          <div className="flex justify-between items-center gap-2 relative">
                            <div className="flex items-center gap-2 w-2/3">
                              {getTeamIso(j.m) ? (
                                <img src={`https://flagcdn.com/w20/${getTeamIso(j.m)}.png`} className="w-5 h-3.5 object-cover shadow-sm rounded-[1px]" alt="" />
                              ) : (
                                <div className="w-5 h-3.5 bg-gray-200 rounded-[1px]"></div>
                              )}
                              <span className={`text-[12px] font-black truncate ${getMatchWinnerInfo(j).winner === j.m ? 'text-green-600' : 'text-gray-800'}`}>{j.m}</span>
                            </div>
                            <input type="number" className="w-12 h-10 bg-gray-50 border border-gray-200 rounded-md text-center font-black text-lg text-[#0258B7] outline-none focus:border-blue-500 transition z-10" value={j.pM} placeholder="-" onChange={(e) => handleKnockoutChange(rodada, j.id, 'pM', e.target.value)} />
                          </div>
                          <div className="flex justify-between items-center gap-2 relative">
                            <div className="flex items-center gap-2 w-2/3">
                              {getTeamIso(j.v) ? (
                                <img src={`https://flagcdn.com/w20/${getTeamIso(j.v)}.png`} className="w-5 h-3.5 object-cover shadow-sm rounded-[1px]" alt="" />
                              ) : (
                                <div className="w-5 h-3.5 bg-gray-200 rounded-[1px]"></div>
                              )}
                              <span className={`text-[12px] font-black truncate ${getMatchWinnerInfo(j).winner === j.v ? 'text-green-600' : 'text-gray-800'}`}>{j.v}</span>
                            </div>
                            <input type="number" className="w-12 h-10 bg-gray-50 border border-gray-200 rounded-md text-center font-black text-lg text-[#0258B7] outline-none focus:border-blue-500 transition z-10" value={j.pV} placeholder="-" onChange={(e) => handleKnockoutChange(rodada, j.id, 'pV', e.target.value)} />
                          </div>

                          {j.pM !== "" && j.pV !== "" && j.pM === j.pV && (
                            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                              <div className="flex justify-between items-center bg-orange-50 px-2 py-1 rounded">
                                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Prorrog.</span>
                                <div className="flex items-center gap-1">
                                  <input type="number" className="w-8 h-7 bg-white border border-orange-200 rounded text-center font-bold text-sm text-orange-700 outline-none focus:border-orange-500" value={j.proM} placeholder="-" onChange={(e) => handleKnockoutChange(rodada, j.id, 'proM', e.target.value)} />
                                  <span className="text-orange-300 font-bold">:</span>
                                  <input type="number" className="w-8 h-7 bg-white border border-orange-200 rounded text-center font-bold text-sm text-orange-700 outline-none focus:border-orange-500" value={j.proV} placeholder="-" onChange={(e) => handleKnockoutChange(rodada, j.id, 'proV', e.target.value)} />
                                </div>
                              </div>

                              {j.proM !== "" && j.proV !== "" && j.proM === j.proV && (
                                <div className="flex justify-between items-center bg-red-50 px-2 py-1 rounded animate-in fade-in slide-in-from-top-2 duration-300">
                                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Pênaltis</span>
                                  <div className="flex items-center gap-1">
                                    <input type="number" className="w-8 h-7 bg-white border border-red-200 rounded text-center font-bold text-sm text-red-700 outline-none focus:border-red-500" value={j.penM} placeholder="-" onChange={(e) => handleKnockoutChange(rodada, j.id, 'penM', e.target.value)} />
                                    <span className="text-red-300 font-bold">:</span>
                                    <input type="number" className="w-8 h-7 bg-white border border-red-200 rounded text-center font-bold text-sm text-red-700 outline-none focus:border-red-500" value={j.penV} placeholder="-" onChange={(e) => handleKnockoutChange(rodada, j.id, 'penV', e.target.value)} />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                        </div>
                        {j.label && <div className="bg-[#0258B7] text-white text-[10px] font-black text-center py-1.5 uppercase tracking-widest relative z-10">{j.label}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </main>
    </div>
  );
}

export default App;