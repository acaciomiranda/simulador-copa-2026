# 🏆 Hub Copa do Mundo 2026 - Simulador Interativo

O **Hub Copa 2026** é uma aplicação web interativa e robusta desenvolvida em **React** para simular todos os jogos da Copa do Mundo de 2026. O projeto segue rigorosamente as regras oficiais da FIFA para classificação, desempate e chaveamento do novo formato com 48 seleções.

🚀 **Acesse o simulador ao vivo:** [https://hub-copa2026.vercel.app/](https://hub-copa2026.vercel.app/)

---

## 📸 Demonstração

![Fase de Grupos](image.png)
![Fase Final e Chaveamento](image-1.png)

---

## ✨ Funcionalidades Principais

### 📋 Fase de Grupos
- **Simulação Completa:** Preenchimento de placares para os 12 grupos (A ao L).
- **Classificação Automática:** Cálculo em tempo real de Pontos (P), Jogos (J), Vitórias (V), Empates (E), Derrotas (D), Gols Pró (GP), Gols Contra (GC) e Saldo de Gols (SG).
- **Regras FIFA:** Identificação automática dos dois melhores de cada grupo e dos 8 melhores terceiros colocados.
- **🛠️ DM (Desempate Manual):** Coluna exclusiva para resolver empates técnicos absolutos (como critérios de Fair Play ou Ranking da FIFA) de forma manual pelo usuário.

### 🥉 Ranking de Melhores 3º Colocados
- **Tabela Detalhada:** Ranking comparativo completo com todas as estatísticas entre os terceiros colocados de todos os grupos.
- **Status de Vaga:** Visualização clara e imediata de quem está na zona de classificação para o mata-mata (8 melhores) ou eliminação.

### ⚔️ Fase Final (Mata-Mata)
- **Chaveamento Dinâmico:** Os confrontos (do 16-avos de final até a Grande Final) são gerados e atualizados automaticamente com base nos resultados e posições da fase anterior.
- **⏱️ Prorrogação e Pênaltis:** Detalhamento inteligente de placares. Se o jogo terminar empatado no tempo normal, o sistema expande o card revelando os campos de Prorrogação e Pênaltis.
- **Animação de Campeão:** Celebração visual exclusiva na tela ao definir o grande vencedor da competição.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** (Biblioteca principal)
- **Vite** (Build tool de alta performance)
- **Tailwind CSS** (Estilização moderna e responsiva)
- **FlagCDN** (API para renderização de bandeiras oficiais)

---

## 🚀 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/acaciomiranda/simulador-copa-2026.git](https://github.com/acaciomiranda/simulador-copa-2026.git)

## 📖 Regras de Classificação
O sistema aplica automaticamente os seguintes critérios de desempate na fase de grupos, conforme as diretrizes da FIFA:

Pontos ganhos

Saldo de Gols (SG)

Gols Pró / Marcados (GP)

Desempate Manual (DM): Utilizado para forçar a classificação em casos de empate persistente nos critérios técnicos acima (aplicando Ranking FIFA ou Disciplina/Cartões).

## 🌍 Deploy
O projeto conta com deploy contínuo através da Vercel. Cada atualização na branch principal (main) do GitHub reflete automaticamente e de forma instantânea no link oficial do projeto.

## 👤 Autor
Acácio Miranda - GitHub

**Este projeto é uma ferramenta interativa de entretenimento destinada a fãs de futebol e não possui vínculo oficial com a FIFA.**
