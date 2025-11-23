[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20128255&assignment_repo_type=AssignmentRepo)
# Projeto Aurora: Um Sistema Integrado de Gestão Acadêmica para Universidades


# Equipe

<ul>
  <li>
    <p align="justify">
      <strong>Arthur Monteiro Parreiras</strong> — Discente do curso Bacharelado em Sistemas de Informação da Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG, Brasil.  
      📧 amparreiras@sga.pucminas.br  
      🔗 https://orcid.org/0009-0009-9134-6739
    </p>
  </li>

  <li>
    <p align="justify">
      <strong>Brenda Stefany de Oliveira Rocha</strong> — Discente do curso Bacharelado em Sistemas de Informação da Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG, Brasil.  
      📧 brenda.rocha.1456390@sga.pucminas.br  
      🔗 https://orcid.org/0009-0000-9118-8309
    </p>
  </li>

  <li>
    <p align="justify">
      <strong>Bruna Letícia Silva</strong> — Discente do curso Bacharelado em Sistemas de Informação da Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG, Brasil.  
      📧 bruna.silva.1439853@sga.pucminas.br  
      🔗 https://orcid.org/0009-0003-7933-8038
    </p>
  </li>

  <li>
    <p align="justify">
      <strong>Eduarda Faria Pinheiro</strong> — Discente do curso Bacharelado em Sistemas de Informação da Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG, Brasil.  
      📧 eduarda.pinheiro.1457485@sga.pucminas.br  
      🔗 https://orcid.org/0009-0003-9183-4296
    </p>
  </li>

  <li>
    <p align="justify">
      <strong>Elenice Florentina de Oliveira dos Reis</strong> — Discente do curso Bacharelado em Sistemas de Informação da Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG, Brasil.  
      📧 eforeis@sga.pucminas.br  
      🔗 https://orcid.org/0009-0000-5410-2684
    </p>
  </li>

  <li>
    <p align="justify">
      <strong>Marco Aurélio de Faria Ramos</strong> — Discente do curso Bacharelado em Sistemas de Informação da Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG, Brasil.  
      📧 maframos@sga.pucminas.br  
      🔗 https://orcid.org/0009-0006-6636-9873
    </p>
  </li>
</ul>

## Professor Orientador

<ul>
  <li>
    <p align="justify">
      <strong>Wesley Dias Maciel</strong> — Docente da Pontifícia Universidade Católica de Minas Gerais, Belo Horizonte, MG, Brasil.  
      📧 wesleydiasmaciel@gmail.com  
      🔗 https://orcid.org/0000-0003-0879-0943
    </p>
  </li>
</ul>


# Resumo


<p align="justify">
A gestão universitária atualmente enfrenta crescentes desafios relacionados à integração de informações, eficiência administrativa e atendimento às demandas acadêmicas. Nesse contexto, os sistemas de informação emergem como ferramentas estratégicas para modernizar processos, ampliar a transparência e apoiar a tomada de decisão [Campos et al., 2014; Fatkuroji et al., 2025]. Neste trabalho, apresentamos o desenvolvimento do Sistema Aurora, focado na gestão de disciplinas e alocação de turmas, com o objetivo de otimizar processos e melhorar a usabilidade para a comunidade acadêmica. A metodologia foi baseada em um ciclo de análise, design e implementação. Foram realizadas entrevistas com potenciais usuários para levantar os requisitos e um protótipo foi criado e validado em um ambiente controlado antes do desenvolvimento final. Os resultados mostram que o Aurora melhora a eficiência da gestão curricular, reduzindo erros em matrículas e alocações. Conclui-se que o Aurora é uma contribuição valiosa para a gestão universitária. Ele integra processos, aumenta a confiabilidade das informações e oferece uma solução escalável para a instituição.</p>


# Palavras-chave: 

> 1. Gestão universitária.
> 2. Sistema de informação acadêmico.
> 3. Governança universitária.
> 4. Rest.
> 5. Tecnologia da Informação.

# Introdução


<p align="justify">
A gestão da educação superior, em nível global, tem se tornado amplamente complexa, exigindo das instituições universitárias a adoção de estratégias que garantam não apenas a excelência acadêmica, mas também a eficiência administrativa e a transparência institucional. Nesse panorama, a Tecnologia da Informação (TI) surge como um recurso fundamental, com os sistemas de informação consolidando-se como ferramentas estratégicas para apoiar a tomada de decisão e a otimização de processos (CAMPOS et al., 2014; FATKUROJI et al., 2025).</p>
<p align="justify">
 Entretanto, apesar da reconhecida importância dos sistemas de informação, muitas universidades ainda enfrentam desafios significativos, como a fragmentação de dados e a ineficiência na comunicação intersetorial, o que impacta diretamente a qualidade da gestão e a experiência da comunidade acadêmica (BERNARDES; ABREU, 2004; PEREIRA; FONSECA, 2009). Além disso, a simples existência de uma infraestrutura tecnológica não garante o sucesso, sendo frequentemente observada uma lacuna na governança de TI, que muitas vezes não está devidamente alinhada aos objetivos estratégicos e às necessidades operacionais das universidades (REZENDE, 2002; MAGALHÃES; PINHEIRO, 2007).</p>
 <p align="justify">
Neste trabalho, foi apresentado o desenvolvimento do Sistema Aurora, um sistema de gestão universitária focado na administração de disciplinas e alocação de turmas. O objetivo principal é sanar a lacuna de integração e eficiência nos processos acadêmicos, fornecendo uma plataforma única que otimiza o fluxo de trabalho e garante a confiabilidade das informações.
A motivação para este desenvolvimento reside na necessidade premente de modernizar as operações universitárias. Escolheu-se focar na gestão de disciplinas e turmas por serem pontos críticos onde a ineficiência e a ocorrência de erros são elevadas, afetando diretamente alunos, docentes e a organização curricular como um todo. O Sistema Aurora é, portanto, uma resposta direta à demanda por uma gestão acadêmica mais transparente, automatizada e escalável.</p>

 
> __Metodologia__:

> __Principal resultado__:

# Fundamentação Teórica / Revisão de Literatura
> __OBS__: é opcional, mas é importante ter.<br/>

> Apresentar a fundamentação teórica/ revisão de literatura.

# Trabalhos Relacionados

> Apresentar os trabalhos relacionados.

# Contribuição
> Pprincipal resultado e discussão.  

# Desenvolvimento / Problema / Produto / Serviço 
> __OBS__: aqui, pode-se usar, como título, o nome do projeto / produto / serviço.

> 1. Apresentar o contexto do problema que o projeto aborda.
> 2. Apresentar o problema. 
> 3. Contextualizar com os `Objetivos de Desenvolvimento Sustentável (ODS) da ONU.`. Incluir o(s) número(s) e a(s) descrição(ões) do(s) ODS da ONU que o projeto atende. 
> 4. Descrever a solução proposta para o problema no projeto.
> 5. Descrever o contexto em que a solução é empregada, se houver: empresa, tecnologias, etc.
> 6. Empregar figuras, quadros e tabelas que facilitem o entendimento do trabalho. 

> __OBS__: a equipe pode fazer uso de questionários, entrevistas e dados estatísticos, que possam ser apresentados, com o propósito de esclarecer detalhes do problema abordado no projeto.

[Prof. Dr. Valtencir Zucolotto, USP](https://www.youtube.com/channel/UCc3JDWPbI4s0b-AeJ3WN03g/videos)

# Especificação do Projeto
<p align="justify">
 O projeto  Aurora tem como foco principal a integração de informações e a automação de processos críticos, visando superar os desafios de fragmentação de dados e ineficiência operacional atualmente enfrentados pelas instituições. A implementação do Aurora utilizará um ciclo de análise, design e implementação, garantindo que o produto final seja escalável, confiável e alinhado às necessidades reais dos usuários, conforme validado por meio de entrevistas e prototipagem.</p>

## 1. Visão Geral do Projeto 
<p align="justify">O Sistema Aurora é um Sistema de Informação Acadêmica (SIA) especializado, projetado para atuar como o hub central da gestão de recursos didáticos e logísticos de uma universidade. Sua principal função é substituir planilhas manuais e sistemas fragmentados por uma solução unificada que gerencia o ciclo de vida completo de uma disciplina, desde o planejamento curricular até a alocação final de alunos e professores em turmas.</p>

## 1.2 Módulos Funcionais Principais
<p align="justify">O Aurora será estruturado em três módulos principais que garantem a integração completa das informações acadêmicas e logísticas.</p>

| Módulo | Descrição Funcional | Benefício Central |
|--------|-----------|------------|
|I. Planejamento Curricular|Gerencia matrizes curriculares, pré-requisitos, e carga horária de disciplinas.|Conformidade regulatória e organização curricular transparente.|
|II. Gestão de Turmas e Oferta	|Define a oferta de disciplinas por semestre, capacidade de sala (lotação) e alocação de docentes (carga horária).|	Otimização do uso de recursos físicos (salas) e humanos (professores).|
|III. Matrícula e Alocação|	Processa as solicitações de matrícula de alunos, respeitando pré-requisitos, choques de horário e capacidade de turma.	|Redução drástica de erros de matrícula e melhora na experiência do aluno.|
## Diagrama de Caso de Uso

![Diagrama-de-caso-de-Uso](docs/imagem/Diagrama%20de%20caso%20de%20uso%20(1).png)

## Público-Alvo

O Projeto Aurora destina-se a modernizar a gestão acadêmica, beneficiando três grupos centrais da comunidade universitária. A seguir, detalhamos o perfil de cada grupo, destacando suas características e a relação com o problema que o sistema se propõe a resolver.

### 1. Corpo Administrativo e de Gestão

Este grupo é formado pelos profissionais responsáveis pela operação e estratégia da instituição, incluindo o **Gestor Institucional (Reitoria)**, a **Administradora Institucional** e a **Secretária Acadêmica**.

* **Perfil e Conhecimentos Prévios:** Possuem vasta experiência em processos administrativos e acadêmicos. Seu conhecimento não é focado em tecnologia, mas sim nas rotinas e regulamentações da universidade.
* **Relação com a Tecnologia:** O nível de familiaridade varia de básico a intermediário. Estão acostumados a utilizar sistemas básicos de gestão, planilhas e e-mail como ferramentas de trabalho, mas não são especialistas em TI.
* **Relações Hierárquicas:** Atuam em diferentes níveis da hierarquia institucional, desde a alta gestão (Reitoria), que define as estratégias, até a equipe de secretaria, que executa as tarefas operacionais do dia a dia.
* **Relação com o Problema:** Sofrem diretamente com a ineficiência causada pela fragmentação de dados. A dependência de "planilhas extensas", "informações duplicadas" e "processos demorados e sujeito a erros" consome tempo, gera retrabalho e dificulta a obtenção de dados consolidados para apoiar decisões estratégicas.

### 2. Corpo Docente e de Coordenação

Composto por profissionais que estão na linha de frente do planejamento e execução acadêmica, como o **Coordenador de Curso** e a **Professora**.

* **Perfil e Conhecimentos Prévios:** São especialistas em suas áreas de conhecimento e dominam as rotinas pedagógicas, como a elaboração de planos de ensino, gestão de turmas e avaliação de alunos.
* **Relação com a Tecnologia:** A proficiência tecnológica é variada. Coordenadores tendem a dominar melhor a tecnologia para fins de gestão, enquanto professores podem ter conhecimentos mais básicos, focados em ferramentas para o ensino.
* **Relações Hierárquicas:** Coordenadores atuam como um elo entre a administração e os professores, sendo responsáveis pelo planejamento do curso. Os professores possuem autonomia em sala de aula, mas respondem à coordenação e à secretaria.
* **Relação com o Problema:** O principal desafio é o excesso de carga administrativa. Atividades como "planejar turmas, alocar professores" e registrar notas e frequências em "processos manuais e formulários impressos" desviam o foco do ensino e são fontes constantes de falhas.

### 3. Corpo Discente (Alunos)

Este grupo representa os estudantes de graduação e pós-graduação, os principais consumidores dos serviços da instituição.

* **Perfil e Conhecimentos Prévios:** Entendem a jornada acadêmica sob a ótica do usuário final, focados em cumprir os requisitos para sua formação, como realizar matrículas, cursar disciplinas e acessar suas notas.
* **Relação com a Tecnologia:** São nativos digitais, "acostumados com o uso diário de computadores e celulares". Eles não apenas utilizam a tecnologia com fluidez, mas também esperam que as soluções institucionais sejam "rápidas e acessíveis".
* **Relações Hierárquicas:** Estão na base da estrutura acadêmica, sendo o foco de todo o processo. Interagem diretamente com professores e secretarias para resolver suas demandas.
* **Relação com o Problema:** Enfrentam uma experiência de usuário frustrante devido a "processos lentos e confusos de matrícula" e à "dificuldade em acessar informações sobre notas, horários e histórico acadêmico" de forma centralizada e intuitiva.


## Personas

## Ana Paula – Administradora Institucional
<p align="justify">Ana Paula tem 38 anos, é administradora de sistemas acadêmicos e formada em Administração. Possui conhecimento intermediário em tecnologia é de sua responsabilidade  manter atualizados os cadastros institucionais.
Seu trabalho exige muita organização, mas ela enfrenta dificuldades com planilhas extensas e informações duplicadas que chegam por e-mail. O excesso de dados manuais torna o processo demorado e sujeito a erros, o que afeta diretamente a confiabilidade das informações da instituição.</p>

---

## Ricardo Mendes – Coordenador de Curso
<p align="justify">Ricardo Mendes tem 45 anos, é coordenador do curso de Sistemas de Informação e mestre em Computação. Domina bem a tecnologia, mas lida diariamente com o desafio de planejar turmas, alocar professores e acompanhar a oferta de disciplinas.  
Ele depende de diferentes planilhas e documentos espalhados, o que dificulta o cruzamento de informações sobre carga horária e disponibilidade docente. Essa falta de integração faz com que o planejamento acadêmico seja trabalhoso e sujeito a falhas.</p>

---

## Juliana Ferreira – Professora
<p align="justify">Juliana Ferreira tem 33 anos, é professora. Tem conhecimentos básicos em tecnologia e dedica grande parte de seu tempo a organizar suas turmas e registrar notas e frequências.  
Atualmente, precisa lidar com processos manuais e formulários impressos, o que consome muito tempo e aumenta as chances de erro. Juliana sente falta de uma ferramenta simples e eficiente que torne o controle acadêmico mais ágil e preciso.</p>

---

## Lucas Andrade – Aluno
<p align="justify">Lucas Andrade tem 21 anos e é estudante de graduação. Acostumado com o uso diário de computadores e celulares, ele valoriza soluções digitais rápidas e acessíveis.  
No entanto, enfrenta frustrações com processos lentos e confusos de matrícula, além da dificuldade em acessar informações sobre notas, horários e histórico acadêmico.</p>

---

## Marta Souza – Secretária Acadêmica
<p align="justify">Marta Souza tem 40 anos, trabalha como secretária da coordenação acadêmica. Técnica administrativa experiente, está acostumada a lidar com planilhas e relatórios em sistemas básicos de gestão. Seu dia a dia é repleto de tarefas repetitivas, como conferir dados de matrícula, consolidar planilhas e gerar relatórios manuais. Esses processos tomam muito tempo e aumentam as chances de inconsistências nos dados, gerando retrabalho e atrasos na comunicação com os setores acadêmicos.</p>

---

## Paulo Almeida – Gestor Institucional (Reitoria)
<p align="justify">Paulo Almeida tem 50 anos, é diretor acadêmico e reitor adjunto da universidade. Doutor em Administração e com conhecimento básico em tecnologia, ele precisa tomar decisões estratégicas baseadas em dados.  
Atualmente, enfrenta dificuldade para obter informações integradas e atualizadas sobre o desempenho institucional. Depende de relatórios manuais e demorados, o que dificulta o planejamento e a otimização de recursos da universidade.</p>


---


## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários.

__Quadro 1__: histórias de usuários.

As histórias de usuário a seguir foram agrupadas por contexto, facilitando a compreensão das funcionalidades e dos valores entregues aos diferentes perfis de usuários do sistema.

## 1. Corpo Administrativo e de Gestão

| **EU COMO...** | **QUERO/PRECISO...** | **PARA...** |
|----------------|----------------------|--------------|
| Administrador do Sistema | Gerenciar cadastros de universidades, unidades e departamentos | Manter os dados institucionais atualizados |
| Administrador do Sistema | Controlar acessos e permissões de usuários | Garantir segurança e integridade do sistema |
| Gestor Institucional | Acompanhar relatórios e indicadores acadêmicos e administrativos | Apoiar decisões estratégicas com base em dados reais |
| Secretário Acadêmico | Gerar relatórios e atualizar registros de alunos e professores | Manter as informações acadêmicas organizadas e atualizadas |

---

## 2. Corpo Docente e de Coordenação

| **EU COMO...** | **QUERO/PRECISO...** | **PARA...** |
|----------------|----------------------|--------------|
| Coordenador de Curso | Gerenciar disciplinas, turmas e alocação de professores | Organizar a oferta acadêmica e otimizar o uso de recursos |
| Coordenador de Curso | Acompanhar desempenho docente e indicadores de curso | Garantir a qualidade do ensino e conformidade com as diretrizes |
| Professor | Acessar minhas turmas e planos de ensino | Planejar e ministrar aulas com base nas informações do sistema |
| Professor | Registrar notas e frequência | Automatizar processos e reduzir erros manuais |

---

## 3. Corpo Discente (Alunos)

| **EU COMO...** | **QUERO/PRECISO...** | **PARA...** |
|----------------|----------------------|--------------|
| Aluno | Realizar matrícula online | Agilizar o processo e evitar filas presenciais |
| Aluno | Consultar notas, horários e histórico acadêmico | Acompanhar meu desempenho e progresso no curso |
| Aluno | Receber notificações sobre prazos e comunicados | Evitar atrasos e manter-me informado sobre a vida acadêmica |

---
**Fonte:** Elaborado pelos autores.


## Requisitos

# Cadastro Inicial – CRUD das Entidades

## Pessoa 1 - Bruna Letícia Silva
**Entidades:** Universidade, Titulação, Categoria

### Universidade
- Criar universidade (nome, sigla, endereço, telefone, e-mail)  
- Ler dados da universidade cadastrada  
- Atualizar informações da universidade  
- Deletar universidade  

### Titulação
- Criar titulação (nome da titulação, ex: Mestre, Doutor)  
- Ler dados das titulações  
- Atualizar informações da titulação  
- Deletar titulação  

### Categoria
- Criar categoria (nome da categoria, ex: Efetivo, Substituto)  
- Ler dados das categorias  
- Atualizar informações da categoria  
- Deletar categoria  

---

## Pessoa 2 - Elenice Florentina de Oliveira dos Reis
**Entidades:** Unidade, Regime de Trabalho, Oferta

### Unidade
- Criar unidade (nome, sigla, endereço, universidade associada)  
- Ler dados das unidades  
- Atualizar informações da unidade  
- Deletar unidade  

### Regime de Trabalho
- Criar regime (nome e carga horária, ex: 20h, 40h, Dedicação Exclusiva)  
- Ler dados dos regimes de trabalho  
- Atualizar informações do regime  
- Deletar regime de trabalho  

### Oferta
- Criar oferta (disciplina, turma, semestre, turno)  
- Ler dados das ofertas  
- Atualizar informações da oferta  
- Deletar oferta  

---

## Pessoa 3 - Eduarda Faria Pinheiro
**Entidades:** Professor, Dedicação, Alocação

### Professor
- Criar professor (nome, CPF, e-mail, departamento, titulação, categoria, regime de trabalho)  
- Ler dados dos professores  
- Atualizar informações do professor  
- Deletar professor  

### Dedicação
- Criar dedicação (professor, carga horária dedicada a uma disciplina/turma)  
- Ler dados das dedicações  
- Atualizar informações da dedicação  
- Deletar dedicação  

### Alocação
- Criar alocação (professor, turma, disciplina, carga horária)  
- Ler dados das alocações  
- Atualizar informações da alocação  
- Deletar alocação  

---

## Pessoa 4 - Brenda Stefany de Oliveira Rocha
**Entidades:** Aluno, Histórico, Tipo de Turma

### Aluno
- Criar aluno (nome, matrícula, CPF, e-mail, curso, certificado de reservista se sexo = M)  
- Ler dados dos alunos  
- Atualizar informações do aluno  
- Deletar aluno  

### Histórico
- Criar histórico (aluno, disciplina, nota, frequência, situação)  
- Ler dados do histórico escolar  
- Atualizar informações do histórico  
- Deletar histórico  

### Tipo de Turma
- Criar tipo de turma (nome do tipo, ex: Teórica, Prática, Laboratório)  
- Ler dados dos tipos de turma  
- Atualizar informações do tipo de turma  
- Deletar tipo de turma  

---

## Pessoa 5 - Marco Aurélio de Faria Ramos
**Entidades:** Curso, Departamento, Plano de Ensino

### Curso
- Criar curso (nome, código, nível, turno, departamento)  
- Ler dados dos cursos  
- Atualizar informações do curso  
- Deletar curso  

### Departamento
- Criar departamento (nome, código, unidade associada)  
- Ler dados dos departamentos  
- Atualizar informações do departamento  
- Deletar departamento  

### Plano de Ensino
- Criar plano de ensino (objetivos, ementa, bibliografia, disciplina associada)  
- Ler dados dos planos de ensino  
- Atualizar informações do plano de ensino  
- Deletar plano de ensino  

---

## Pessoa 6 - Arthur Monteiro Parreiras
**Entidades:** Disciplina, Turma, Turno

### Disciplina
- Criar disciplina (nome, código, carga horária, curso associado)  
- Ler dados das disciplinas  
- Atualizar informações da disciplina  
- Deletar disciplina  

### Turma
- Criar turma (código, disciplina, professor responsável, semestre, tipo de turma)  
- Ler dados das turmas  
- Atualizar informações da turma  
- Deletar turma  

### Turno
- Criar turno (nome do turno, ex: Matutino, Vespertino, Noturno)  
- Ler dados dos turnos  
- Atualizar informações do turno  
- Deletar turno  

---

### Requisitos Funcionais (RF)

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RF-001 | Permitir que a universidade cadastre, atualize, consulte e exclua dados de todas as entidades (CRUD completo). | ALTA |
| RF-002 | Permitir cadastro de universidades com sigla de até 10 caracteres. | ALTA |
| RF-003 | Permitir cadastro de unidades com sigla de 3 caracteres. | ALTA |
| RF-004 | Permitir cadastro de professores vinculados a departamentos, incluindo titulação, categoria e regime de trabalho. | ALTA |
| RF-005 | Exigir certificado de reservista para professores e alunos do sexo masculino. | ALTA |
| RF-006 | Permitir cadastro de alunos vinculados a cursos. | ALTA |
| RF-007 | Permitir criação de turmas associadas a disciplinas e professores. | ALTA |
| RF-008 | Permitir que alunos tenham histórico acadêmico vinculado às disciplinas cursadas. | ALTA |
| RF-009 | Permitir alocação e dedicação de professores às turmas e disciplinas. | ALTA |
| RF-010 | Permitir gerenciamento de planos de ensino vinculados às disciplinas. | ALTA |

---

### Requisitos Não Funcionais (RNF)

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| RNF-001 | A aplicação deve ser desenvolvida em Java utilizando Spring Boot. | ALTA |
| RNF-002 | O banco de dados deve ser PostgreSQL ou MySQL. | ALTA |
| RNF-003 | A aplicação deve utilizar API REST obrigatoriamente. | ALTA |
| RNF-004 | O sistema deve ser responsivo para rodar em dispositivos móveis. | MÉDIA |
| RNF-005 | O sistema deve possuir documentação no GitHub com README e instruções de execução. | ALTA |

---

### Restrições

| Código | Descrição | Prioridade |
|--------|-----------|------------|
| R-001 | A aplicação deve obrigatoriamente implementar CRUD de todas as 18 entidades. | ALTA |
| R-002 | A aplicação deve ser desenvolvida exclusivamente em Java + Spring Boot. | ALTA |
| R-003 | O banco de dados deve ser PostgreSQL ou MySQL. | ALTA |
| R-004 | A aplicação deve obrigatoriamente expor uma API REST. | ALTA |
| R-005 | O projeto deve estar versionado em repositório GitHub com README e instruções. | ALTA |
| R-006 | Campos específicos devem respeitar regras (sigla da Unidade = 3 chars, sigla da Universidade ≤ 10 chars). | ALTA |
| R-007 | Certificado de reservista é obrigatório quando sexo = M (Professor/Aluno). | ALTA |

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Prototipagem e Fluxo do Usuário

![Tela de Login](docs/imagem/Telas_figma/login.png)
![Tela de Cadastro](docs/imagem/Telas_figma/cadastro.png)
![Tela Discente/Alunos](docs/imagem/Telas_figma/discente-alunos.png)
![Tela Alunos](docs/imagem/Telas_figma/alunos.png)
![Tela Histórico](docs/imagem/Telas_figma/historico.png)
![Tela Unidade](docs/imagem/Telas_figma/unidade.png)
![Tela Curso](docs/imagem/Telas_figma/curso.png)
![Tela Disciplina](docs/imagem/Telas_figma/disciplina.png)
![Tela Plano de Ensino](docs/imagem/Telas_figma/plano-ensino.png)
![Tela Turma](docs/imagem/Telas_figma/turma.png)
![Tela Acesso Docente (Coordenação)](docs/imagem/Telas_figma/docente-coordenacao.png)
![Tela Categoria](docs/imagem/Telas_figma/categoria.png)
![Tela Tipo de Turma](docs/imagem/Telas_figma/tipo-turma.png)
![Tela Oferta](docs/imagem/Telas_figma/oferta.png)
![Tela Dedicação](docs/imagem/Telas_figma/dedicacao.png)
![Tela Regime de Trabalho](docs/imagem/Telas_figma/regime-trabalho.png)
![Tela Titulação](docs/imagem/Telas_figma/titulacao.png)
![Tela Acesso Docente (Professor)](docs/imagem/Telas_figma/docente-professor.png)
![Tela Gestão/ADM](docs/imagem/Telas_figma/gestao-adm.png)
![Tela Alocação](docs/imagem/Telas_figma/alocacao.png)
![Tela Departamento](docs/imagem/Telas_figma/departamento.png)
![Tela Universidade](docs/imagem/Telas_figma/universidade.png)
![Tela Professor](docs/imagem/Telas_figma/professor.png)
![Tela Professor](docs/imagem/Telas_figma/turno.png) 





> Apresentar o fluxo do usuário (_user flow_: navegação do usuário pelas telas da aplicação).

![Fluxo de Usuário](docs/imagem/Fluxo-usuario.png)

## Padrão Arquitetural
> Detalhar o padrão arquitetural (arquitetura de _software_) do sistema desenvolvido. <br/>

## Diagrama de Classes 
![alt text](<docs/imagem/Diagrama de Classes.png>)

## Diagrama de Sequência
> Apresentar o diagrama de sequência da aplicação.

## Banco de Dados
<img width="1873" height="778" alt="postgres - universidade" src="https://github.com/user-attachments/assets/27996de1-07a5-444a-aa88-62654432892b" />

PostgreSQL foi escolhido pela forte integridade relacional (PK/FK/UNIQUE/CHECK/ENUM), transações ACID, consultas ricas (CTEs/índices) e ótima integração com o DBeaver — atendendo matrículas, ofertas, notas e relatórios com escala e baixo custo (open-source).

## Padrão de Projeto
<p align="justify">O sistema desenvolvido adota padrões de projeto (GoF) com o propósito de garantir uma arquitetura sólida, modular e de fácil manutenção. Esses padrões foram aplicados estrategicamente para organizar a criação e o acesso aos componentes do sistema, promovendo reuso de código e baixo acoplamento entre as camadas.</p>

<p align="justify">Entre os padrões utilizados, destaca-se o Factory Method, pertencente ao grupo dos padrões criacionais. Esse padrão tem a função de encapsular a lógica de instanciação de objetos, centralizando o processo de criação e evitando que diferentes partes do sistema precisem conhecer os detalhes de como um objeto é construído. Essa abordagem facilita futuras modificações, garante consistência nas instâncias criadas e contribui para a flexibilidade do código.</p>

<p align="justify">Outro padrão presente é o Facade, classificado como um padrão estrutural. Seu principal objetivo é simplificar a comunicação entre diferentes subsistemas, fornecendo uma interface unificada para operações mais complexas. Assim, as camadas superiores da aplicação — como controladores ou serviços externos — podem interagir com o sistema de forma mais direta e intuitiva, sem precisar lidar com a complexidade interna dos módulos. Esse padrão também favorece a organização da lógica de negócio e reduz o acoplamento entre componentes.</p>

<p align="justify">Além desses padrões GoF, o projeto também faz uso de princípios característicos do Spring Boot, como a Inversão de Controle (IoC) e a Injeção de Dependência (Dependency Injection), viabilizadas por anotações como @Component e @RequiredArgsConstructor. Tais práticas reforçam o desacoplamento entre classes e permitem que o próprio framework gerencie a criação e o ciclo de vida dos objetos, o que se alinha aos conceitos de modularidade e manutenção facilitada.</p>

<p align="justify">Em síntese, a aplicação dos padrões Factory e Facade, em conjunto com os princípios de IoC e injeção de dependência, demonstra a preocupação da equipe de desenvolvimento em adotar boas práticas de engenharia de software, resultando em um sistema mais organizado, escalável e aderente aos princípios da programação orientada a objetos.</p>

# Metodologia
Detalhar a metodologia empregada no desenvolvimento do projeto.

> Descrever a metodologia (do geral para o específico): como Design Thinking, Scrum, etc.

## Arquitetura da Aplicação
> Informar a arquitetura da aplicação. <br/>
> __OBS__: neste caso o padrão arquitetural __REST__ (Representational State Transfer). <br/>
> Justificar a escolha da arquitetura de software e apresentar como ele atende aos requisitos levantados.


## Ferramentas
> Informar as tecnologias empregadas.
> Informar a _stack_ de desenvolvimento, com seu devido propósito.
> Listar quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha de cada uma delas. 

## Cronograma

> Apresentar o cronograma de desenvolvimento do projeto.

# Resultado
> Apresentar o(s) resultado(s) encontrado(s). Empregar texto, figuras, tabelas, quadros, gráficos, resultados de cálculos ou de pesquisas, estatíticas, _prints_ das telas da aplicação, etc.

## Validação

> Quando necessário, validar o(s) resultado(s) encontrado(s).
> Validação = qualidade dos resultados, análise de dados, análise estatística: figuras, tabelas, gráficos, imagens, resultados de cálculos ou pesquisas e texto. 

## Discussão

> Discutir (explicar, detalhar, comparar, etc) o(s) resultado(s) encontrado(s).
> Discussão = interpretação, comparação. 

# Conclusão e Trabalhos Futuros

> Apresentar a conclusão e os trabalhos futuros (do específico para o geral);

> 1. __Principais resultados__ (descobertas-chave e interpretação dos resultados principais). 

> 2. __Contribuição__ (demonstrar a importância do trabalho desenvolvido, como o trabalho amplia as fronteiras da área de estudo, implicações dos resultados). 

> 3. __Trabalhos futuros__. 


> __OBS__: cada item com aproximadamente 5 ou 8 linhas.
 

# Referências Bibliográficas
 <p align="justify">
BERNARDES, José Alberto; ABREU, Adilson Luiz de. A contribuição dos sistemas de informações na gestão universitária. Florianópolis: UFSC, 2004. Disponível em: https://core.ac.uk/download/pdf/30355321.pdf.</p>

<p align="justify">
CAMPOS, Maria de Fátima Hanaque; NASCIMENTO, Durbens Martins; VILHENA, Maria das Graças. Sistema de informação na gestão universitária. Revista Reverte, v. 2, n. 1, p. 1-15, 2014. Disponível em: https://fatecid.com.br/reverte2/index.php/reverte/article/view/34
. Acesso em: 31 ago. 2025.</p>

<p align="justify">
FATKUROJI, Ahmad; FIRMANSYAH, Rizky; MULYANA, Eka. Evaluation of Academic Information Systems in Realizing Good University Governance. International Journal of Computer Applications, v. 227, n. 4, 2025. Disponível em: https://www.researchgate.net/publication/389994946_Evaluation_of_Academic_Information_Systems_in_Realizing_Good_University_Governance.</p>

<p align="justify">
MAGALHÃES, Ivan Luizio; PINHEIRO, Patrícia Ribeiro. Governança de tecnologia da informação. São Paulo: Atlas, 2007.</p>

<p align="justify">
PEREIRA, Júlio; FONSECA, Ana Maria. Gestão de sistema de informação acadêmica: um estudo descritivo da satisfação dos usuários. Revista de Administração Mackenzie, v. 10, n. 2, p. 11-34, 2009. Disponível em: https://www.scielo.br/j/ram/a/Yct4J7B7WdDSLf5Nssn9yqB/?lang=pt. </p>

<p align="justify">
REZENDE, Denis Alcides. Tecnologia da informação aplicada a sistemas de informação empresariais: o papel estratégico da informação e dos sistemas de informação nas empresas. São Paulo: Atlas, 2002.</p>


> Incluir todas as referências bibliográficas (livros, artigos, _sites_, etc) utilizados no desenvolvimento do trabalho.

> Consultar por artigos no site da biblioteca.

> Empregar artigos de qualidade. __Exemplo__: artigos da ACM, do IEEE e da Sociedade Brasileira de Computação.

> Empregar o padrão da ABNT.

> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/referencias/)
> - [Referências Bibliográficas da ABNT](https://rockcontent.com/br/talent-blog/referencia-bibliografica-abnt/)
> - [Sintaxe básica de gravação e formatação no GitHub](https://guides.github.com/features/mastering-markdown/)
> - [Suporte Github](https://help.github.com/pt/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)
> - https://usp.br/sddarquivos/aulasmetodologia/abnt6023.pdf 
> - https://usp.br/sddarquivos/arquivos/citacoes10520.pdf 
> - https://tecnoblog.net/responde/referencia-site-abnt-artigos/ 
> - https://tecnoblog.net/responde/como-referenciar-livros-em-abnt/ 


Assista aos vídeos do canal abaixo:

https://www.youtube.com/channel/UCc3JDWPbI4s0b-AeJ3WN03g/videos 



# ANEXO

[Prof. Dr. Valtencir Zucolotto, USP](https://www.youtube.com/channel/UCc3JDWPbI4s0b-AeJ3WN03g/videos):

> __OBS__: <br/>
> É opcional.  <br/>
> Textos, gráficos ou qualquer outro material que __não__ tenha sido produzido pelo(s) autor(es) e que tenha como finalidade conferir complementação ao conteúdo.  <br/>

# APÊNDICE

[Prof. Dr. Valtencir Zucolotto, USP](https://www.youtube.com/channel/UCc3JDWPbI4s0b-AeJ3WN03g/videos):

> __OBS__: <br/>
> É opcional. <br/>
> Textos, gráficos ou qualquer outro material que tenha sido produzido pelo(s) autor(es) e que tenha como finalidade conferir complementação ao conteúdo.

