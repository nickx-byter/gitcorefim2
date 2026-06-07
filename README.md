<div align="center">

# 🗑️ TRASHBUCKET
### *Tecnologia & Sustentabilidade em um só lugar*

![Badge](https://img.shields.io/badge/Status-Concluído-00c853?style=for-the-badge)
![Badge](https://img.shields.io/badge/Curso-Ciência%20da%20Computação-0a0a0a?style=for-the-badge)
![Badge](https://img.shields.io/badge/Universidade-FUMEC-00c853?style=for-the-badge)
![Badge](https://img.shields.io/badge/Disciplina-Introdução%20à%20Programação%20Web-0a0a0a?style=for-the-badge)

> *"Cada eletrônico descartado corretamente é um passo para um planeta mais sustentável."*

---

🌐 **[Acesse o Projeto Publicado](#)** ← *(link será inserido após publicação)*

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Páginas & Funcionalidades](#-páginas--funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Equipe](#-equipe)
- [Finalidade Social](#-finalidade-social)
- [Conclusão](#-conclusão)

---

## 🌿 Sobre o Projeto

O **TRASHBUCKET** é uma plataforma educativa e interativa desenvolvida para conscientizar o público jovem sobre dois problemas ambientais urgentes: a **obsolescência programada** e o **descarte incorreto de lixo eletrônico**.

O projeto nasce de uma preocupação real: o lixo eletrônico é o tipo de resíduo que mais cresce no mundo, com **mais de 50 milhões de toneladas geradas por ano**, e menos de **20% desse volume é reciclado corretamente**. Com uma interface moderna, visual e acessível, o TRASHBUCKET busca transformar dados alarmantes em aprendizado prático e atitudes sustentáveis.

O site foi desenvolvido como projeto final da disciplina de **Introdução à Programação Web** do curso de Ciência da Computação da Universidade FUMEC, aplicando na prática os fundamentos de HTML5, CSS3 e JavaScript em um produto digital com impacto social real.

---

## 🖥️ Páginas & Funcionalidades

O site é composto por **sete páginas interligadas** por um menu de navegação completo, cada uma com funcionalidades específicas:

### 🏠 Página Inicial — `index.html`
A porta de entrada do TRASHBUCKET apresenta:
- **Tabela de descarte de eletrônicos** com informações organizadas por tipo de dispositivo
- **Cards informativos clicáveis** com modais explicativos sobre diferentes categorias de e-lixo
- **Celular animado interativo** onde o usuário pode clicar em componentes específicos — bateria, processador, câmera e alto-falante — e visualizar informações detalhadas sobre cada peça, seu impacto ambiental e dicas de reciclagem

### ♻️ Obsolescência Programada — `obsolescencia.html`
Página educativa aprofundada que explora:
- O que é obsolescência programada e quais são seus tipos (planejada, percebida e de software)
- O impacto direto desse fenômeno no aumento do lixo eletrônico global
- Formas práticas de combater o descarte prematuro de dispositivos
- **Imagens clicáveis de produtos eletrônicos** com popups informativos contextualizados

### 🔄 Reciclagem — `reciclagem.html`
Guia visual e interativo que apresenta:
- O processo de reciclagem eletrônica dividido em **etapas visuais ilustradas**
- **Modal de mapa interativo** onde o usuário pode buscar pontos de coleta de eletrônicos por cidade ou ativar a **geolocalização automática do navegador** para encontrar os pontos mais próximos

### 🧮 Calculadora de Lixo Eletrônico — `calculo.html`
Ferramenta interativa desenvolvida em JavaScript que permite ao usuário:
- Inserir a quantidade de dispositivos que possui (celulares, tablets, notebooks, impressoras, baterias e fones de ouvido)
- Calcular o **peso total estimado em lixo eletrônico** que seria gerado com o descarte desses equipamentos
- Visualizar **comparações visuais** para dimensionar o impacto real
- Receber **dicas personalizadas de descarte** com base nos itens informados

### 📬 Formulário de Contato — `formulario.html`
Canal de comunicação com a equipe, desenvolvido com:
- Método **GET** para envio de dados, conforme requisito técnico da disciplina
- **Validação de todos os campos** via JavaScript antes do envio
- **Mensagem de confirmação** exibida ao usuário após o preenchimento correto

### 🚀 Landing Page — `ldpage.html`
Página de apresentação impactante do projeto, com:
- **Hero section** visualmente marcante para atrair atenção
- **Grid de cards** resumindo os principais tópicos do site
- **Chamadas para ação (CTAs)** direcionando o usuário para as páginas mais relevantes

### 👥 Nossa Equipe — `membros.html`
Apresentação dos integrantes do grupo com fotos, cargos e links para redes sociais.

---

## 🛠️ Tecnologias Utilizadas

O TRASHBUCKET foi construído inteiramente com tecnologias web nativas, aplicando os conteúdos da disciplina de forma aprofundada:

### HTML5
- Elementos semânticos: `<header>`, `<nav>`, `<section>`, `<footer>` para estrutura acessível e bem organizada
- Tabelas para exibição de dados de descarte
- Formulários com método GET e validação integrada
- `<iframe>` para incorporação de mapas do Google Maps
- Links de navegação internos entre todas as páginas do projeto

### CSS3
- **Flexbox e Grid Layout** para organização responsiva dos elementos
- **Variáveis CSS (Custom Properties)** para consistência visual entre todas as páginas (`--color-bg: #0a0a0a`, `--color-accent: #00c853`)
- **Animações com `@keyframes`** para transições suaves e elementos animados
- **Pseudo-classes** como `:hover` e `:focus` para interatividade visual
- **Media Queries** para garantir responsividade em dispositivos móveis e desktops
- Posicionamento com `position: absolute` e `position: fixed` para elementos sobrepostos

### JavaScript
- Manipulação do **DOM** para criar, modificar e remover elementos dinamicamente
- **Eventos de clique e teclado** para interatividade completa
- **Validação de formulários** com feedback em tempo real ao usuário
- **Cálculos matemáticos** para a calculadora de lixo eletrônico
- **Abertura e fechamento de modais** com acessibilidade por teclado (tecla ESC)
- **`IntersectionObserver` e scroll events** para animações de entrada ao rolar a página
- **API de Geolocalização do navegador** para localização automática de pontos de coleta
- **`URLSearchParams`** para detecção de envio do formulário GET

---

## 👨‍💻 Equipe

<table>
  <tr>
    <th>Integrante</th>
    <th>Papel</th>
    <th>Responsabilidades</th>
  </tr>
  <tr>
    <td><strong>Tomás Costa e Gloria</strong></td>
    <td>🏗️ Tech Lead</td>
    <td>Liderança técnica do projeto, organização geral da equipe, tomada de decisões estruturais, definição da arquitetura das páginas, acompanhamento do cronograma de desenvolvimento e suporte técnico aos demais integrantes.</td>
  </tr>
  <tr>
    <td><strong>João Vitor Nogueira de Assis</strong></td>
    <td>🎨 Designer</td>
    <td>Identidade visual completa do projeto — criação do logotipo, definição da paleta de cores (tema escuro com destaque em verde <code>#00c853</code>), escolha da tipografia Poppins, design das páginas, organização dos layouts e criação dos elementos visuais.</td>
  </tr>
  <tr>
    <td><strong>Nicolle Neiva</strong></td>
    <td>💻 Desenvolvedora Front-End</td>
    <td>Desenvolvimento e programação de todas as páginas do site — implementação de HTML5, CSS3 e JavaScript, criação de funcionalidades interativas como o celular animado, modais, calculadora de lixo eletrônico, animações de scroll, cards clicáveis e mapa interativo.</td>
  </tr>
  <tr>
    <td><strong>Matheus Nogueira da Silva Lima</strong></td>
    <td>💻 Desenvolvedor Front-End</td>
    <td>Desenvolvimento e implementação de componentes front-end do projeto, contribuindo com a programação das interfaces e estruturação do código em HTML, CSS e JavaScript para garantir funcionalidade e qualidade técnica nas páginas do site.</td>
  </tr>
  <tr>
    <td><strong>Henrique Araujo</strong></td>
    <td>✍️ Redator & Pesquisador</td>
    <td>Pesquisa e produção de todo o conteúdo textual do site — textos sobre obsolescência programada, impacto ambiental do lixo eletrônico, formas de reciclagem, dicas de descarte correto, informações sobre componentes eletrônicos e demais conteúdos educativos presentes em todas as páginas do projeto.</td>
  </tr>
</table>

---

## 🌍 Finalidade Social

O TRASHBUCKET foi desenvolvido para atender uma **demanda social e educacional real**. O público-alvo principal é o jovem e estudantil — o maior consumidor de tecnologia e, consequentemente, um dos principais geradores de lixo eletrônico.

O projeto pode ser utilizado como ferramenta de conscientização em:

- 🏫 **Escolas e instituições de ensino** em aulas de educação ambiental e tecnologia
- 🎪 **Feiras técnicas e acadêmicas** para demonstração de projetos web com impacto social
- 📢 **Campanhas de sustentabilidade** promovidas por ONGs e prefeituras
- 🎓 **Projetos de extensão universitária** voltados para educação ambiental comunitária

Ao apresentar de forma clara e interativa os problemas causados pelo descarte incorreto de eletrônicos e as soluções disponíveis, o projeto contribui diretamente para a formação de consumidores mais conscientes e responsáveis com o meio ambiente.

---

## ✅ Conclusão

O desenvolvimento do **TRASHBUCKET** foi uma experiência completa que uniu tecnologia, educação e sustentabilidade em uma única plataforma digital. Ao longo do processo, a equipe aplicou na prática os conteúdos aprendidos na disciplina, enfrentou desafios reais de desenvolvimento web e construiu uma solução funcional e relevante para um problema ambiental contemporâneo.

O projeto representa não apenas um trabalho acadêmico, mas um **primeiro passo no portfólio profissional** dos integrantes — demonstrando capacidade de trabalho em equipe, organização, criatividade e aplicação técnica dos conhecimentos adquiridos no primeiro semestre do curso.

---

<div align="center">

**🗑️ TRASHBUCKET — ECOLIXO © 2026**

*Projeto Final — Introdução à Programação Web*
*Universidade FUMEC — Ciência da Computação*

</div>
