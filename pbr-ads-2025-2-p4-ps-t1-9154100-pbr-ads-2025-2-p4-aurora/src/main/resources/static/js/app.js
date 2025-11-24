import { startRouter } from "./router.js";

startRouter();

export function renderHome() {

  const tipoAcesso = sessionStorage.getItem("tipoAcesso");

  const cardsContainer = document.querySelector('#cardsContainer');

  const cards = [
    { name: "Universidade", href: "#/universidade", icon: "bi-bank", roles: ["PROFESSOR"] },
    { name: "Unidade", href: "#/unidade", icon: "bi-geo-alt", roles: ["PROFESSOR"] },
    { name: "Departamento", href: "#/departamento", icon: "bi-diagram-3", roles: ["PROFESSOR"] },
    { name: "Curso", href: "#/curso", icon: "bi-mortarboard", roles: ["PROFESSOR", "ALUNO"] },

    { name: "Professor", href: "#/professor", icon: "bi-person", roles: ["PROFESSOR"] },
    { name: "Aluno", href: "#/aluno", icon: "bi-people", roles: ["PROFESSOR", "ALUNO"] },

    { name: "Titulação", href: "#/titulacao", icon: "bi-award", roles: ["PROFESSOR"] },
    { name: "Regime de Dedicação", href: "#/dedicacao", icon: "bi-clock", roles: ["PROFESSOR"] },
    { name: "Regime de Trabalho", href: "#/regimeTrabalho", icon: "bi-briefcase", roles: ["PROFESSOR"] },
    { name: "Categoria", href: "#/categoria", icon: "bi-tags", roles: ["PROFESSOR"] },
    { name: "Turno", href: "#/turno", icon: "bi-brightness-high", roles: ["PROFESSOR", "ALUNO"] },

    { name: "Tipo de Turma", href: "#/tipoTurma", icon: "bi-tags-fill", roles: ["PROFESSOR"] },

    { name: "Disciplina", href: "#/disciplina", icon: "bi-journal-bookmark", roles: ["PROFESSOR", "ALUNO"] },
    { name: "Plano de Ensino", href: "#/planoEnsino", icon: "bi-journal-text", roles: ["PROFESSOR", "ALUNO"] },
    { name: "Oferta de Disciplinas", href: "#/oferta", icon: "bi-calendar-week", roles: ["PROFESSOR"] },
    { name: "Turma", href: "#/turma", icon: "bi-collection", roles: ["PROFESSOR", "COORDENADOR"] },
    { name: "Alocação Professor", href: "#/alocacao", icon: "bi-people-fill", roles: ["PROFESSOR"] },

    { name: "Histórico Acadêmico", href: "#/historico", icon: "bi-file-earmark-text", roles: ["PROFESSOR", "PROFESSOR", "ALUNO"] },

    {
      name: "Sair",
      logout: true,
      icon: "bi-box-arrow-right",
      roles: ["PROFESSOR", "ALUNO"]
    }
  ];

  cards.forEach(card => {
    if (!card.roles.includes(tipoAcesso)) return;

    if (card.logout) {
      cardsContainer.innerHTML += `
            <a href="#" class="card logout" onclick="logout()">
                <i class="bi ${card.icon} icon"></i>
                <h3>${card.name}</h3>
            </a>`;
    } else {
      cardsContainer.innerHTML += `
            <a href="${card.href}" class="card">
                <i class="bi ${card.icon} icon"></i>
                <h3>${card.name}</h3>
            </a>`;
    }
  });
}

// Função genérica para preencher selects
export async function preencherSelect(selectId, apiUrl, valueProp = 'id', textProp = 'nome') {
  const select = document.getElementById(selectId);
  if (!select) return;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`Erro ao buscar dados de ${apiUrl}: Status ${res.status}`);

    const data = await res.json();

    select.innerHTML = '<option value="">-- Selecione --</option>';

    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item[valueProp];

      if (apiUrl.includes('/api/turma') && item.disciplina) {
        option.textContent = `${item.nome} (${item.disciplina.nome})`;

      } else if (apiUrl.includes('/api/alocacao')) {
        const profNome = item.professor ? item.professor.nome : 'N/A';
        const turmaId = item.turma ? item.turma.id : 'N/A';
        option.textContent = `Prof: ${profNome} (Turma ID: ${turmaId})`;

      } else if (apiUrl.includes('/api/oferta')) {
        const discNome = item.disciplina ? item.disciplina.nome : 'N/A';
        const turnoNome = item.turno ? item.turno.nome : 'N/A';
        option.textContent = `Disc: ${discNome} (Turno: ${turnoNome})`;
      } else if (apiUrl.includes('/api/turma')) {
        const tipo = item.tipo ? item.tipo.descricao : 'Tipo N/A';
        const disc = item.oferta?.disciplina ? item.oferta.disciplina.nome : 'Disc. N/A';
        option.textContent = `${tipo} - ${disc}`;
      } else {
        option.textContent = item[textProp];
      }

      select.appendChild(option);
    });

  } catch (error) {
    console.error(`Erro ao carregar dados de ${apiUrl}:`, error);
    select.innerHTML = '<option value="">ERRO ao carregar dados</option>';
  }
}

function logout() {
  sessionStorage.clear()
  window.location.href = "../index.html";
}

window.logout = logout;