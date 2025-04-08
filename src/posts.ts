import type { Post } from "./post";

export const posts: Post[] = [
    {
        id:"5",
        titulo: "Integração com API de Pagamentos Finalizada",
        versao: "22.4",
        data_de_postagem: new Date("2025-04-07"),
        conteudo: `Concluímos a integração com a nova API de pagamentos da empresa parceira PayConnect, que substitui a antiga solução utilizada até então. A mudança traz diversos benefícios, incluindo maior estabilidade, processamento de transações mais rápido, além de suporte expandido para múltiplos métodos de pagamento, como cartões de crédito, débito, boleto e Pix.

Durante a implementação, também revisamos todo o fluxo de checkout para garantir uma experiência mais fluida para os usuários finais. Isso incluiu melhorias na validação de dados do cartão, feedbacks mais claros em caso de erros, e uma nova tela de confirmação com status em tempo real do pagamento.

Do lado do back-end, atualizamos nossos webhooks para receber notificações assíncronas de aprovação, cancelamento e reembolso, e melhoramos os logs para facilitar a auditoria de transações. Além disso, realizamos testes de carga para garantir que a nova integração possa lidar com picos de uso em períodos de alta demanda.

Por fim, corrigimos alguns bugs que afetavam o cálculo de taxas de serviço em compras internacionais. Essa atualização é parte do nosso compromisso contínuo com a estabilidade e segurança das operações financeiras na plataforma.`
    },
    {
        id:"4",
        titulo: "Melhorias de Performance no Painel Administrativo",
        versao: "22.3",
        data_de_postagem: new Date("2025-04-02"),
        conteudo: `Realizamos uma grande atualização de performance no painel administrativo com foco em escalabilidade e redução do tempo de resposta das principais funcionalidades utilizadas por nossos usuários internos e parceiros.

As otimizações incluem refatoração de consultas complexas ao banco de dados, criação de índices estratégicos em colunas com alta cardinalidade e reestruturação de algumas tabelas para reduzir joins desnecessários. Também implementamos cache Redis para armazenar resultados de operações com baixo índice de alteração, como a lista de usuários ativos e as permissões por perfil.

No front-end, reduzimos o carregamento de recursos desnecessários e aplicamos técnicas de lazy loading em gráficos e tabelas com grande volume de dados. As páginas do painel agora carregam em média 40% mais rápido, e o consumo de memória do navegador caiu significativamente em cenários com grande quantidade de registros.

Para garantir a qualidade da entrega, realizamos testes de estresse com mais de 10 mil acessos simultâneos e monitoramos os resultados com ferramentas como New Relic e Datadog. O impacto positivo foi imediato e deve beneficiar todos os administradores que acessam a plataforma diariamente.`
    },
    {
        id:"3",
        titulo: "Novo Sistema de Autenticação com 2FA",
        versao: "22.2",
        data_de_postagem: new Date("2025-03-25"),
        conteudo: `A segurança das contas dos nossos usuários é uma prioridade, e por isso implementamos um novo sistema de autenticação em duas etapas (2FA). Com essa funcionalidade ativada, mesmo que uma senha seja comprometida, será necessário um segundo fator (como um código gerado por aplicativo autenticador) para acessar a conta.

O sistema foi projetado para ser simples de ativar e utilizar. Nas configurações da conta, o usuário pode ativar o 2FA e escanear um QR Code com seu app autenticador preferido (Google Authenticator, Authy, Microsoft Authenticator, entre outros). Uma vez habilitado, o código gerado será solicitado a cada novo login ou alteração sensível na conta, como mudança de senha ou e-mail.

Além disso, introduzimos um sistema de backup com códigos de recuperação únicos, para evitar bloqueios em caso de perda do dispositivo autenticador. Esses códigos devem ser salvos com segurança pelo usuário.

No back-end, a verificação foi totalmente integrada à nossa API de autenticação, e novos logs foram adicionados para registrar tentativas falhas e alertar o usuário em caso de atividade suspeita. O 2FA estará disponível inicialmente para contas de administradores e, nas próximas semanas, será liberado gradualmente para todos os usuários.`
    },
    {
        id:"2",
        titulo: "Dashboard de Métricas Atualizado",
        versao: "22.1",
        data_de_postagem: new Date("2025-03-18"),
        conteudo: `Lançamos uma nova versão do nosso dashboard de métricas, reformulado para oferecer maior clareza, controle e personalização. O novo layout prioriza a visualização de dados em tempo real e a interação do usuário com gráficos e relatórios.

Entre as novidades, destacamos os gráficos com zoom dinâmico, filtros personalizáveis por data, categoria, e origem dos dados, além de suporte à exportação de relatórios em CSV, Excel e PDF. A nova barra lateral permite salvar conjuntos de filtros para reutilização posterior, facilitando o acompanhamento de métricas recorrentes.

Na parte visual, os gráficos agora utilizam uma paleta de cores mais acessível, com melhor contraste e responsividade em telas menores. A experiência do usuário foi pensada para facilitar a tomada de decisões com base em dados precisos e atualizados.

Do lado técnico, migramos o sistema de geração de métricas para uma nova arquitetura baseada em streams de eventos e banco de dados orientado a colunas, o que proporcionou ganhos substanciais em performance, especialmente em consultas históricas.

Essa atualização é apenas a primeira etapa de uma série de melhorias planejadas para as ferramentas de análise de dados da plataforma. Agradecemos a todos os usuários que contribuíram com sugestões!`
    },
    {
        id:"1",
        titulo: "Correção de Erros em Notificações por E-mail",
        versao: "22.0",
        data_de_postagem: new Date("2025-03-10"),
        conteudo: `Foi identificado e corrigido um problema que impedia o envio de notificações por e-mail para contas criadas após fevereiro. Esse bug estava relacionado a uma falha na configuração de DNS de nossos servidores SMTP secundários, o que ocasionava falhas intermitentes no envio de mensagens transacionais.

Além disso, alguns e-mails enviados com marcações HTML incorretas estavam sendo tratados como spam por alguns provedores, o que levou à revisão completa do nosso sistema de templates. Reestruturamos todos os modelos de e-mail com foco em compatibilidade com os principais clientes (Gmail, Outlook, Apple Mail) e com melhor suporte mobile.

Aproveitamos para revisar os triggers de notificação, evitando redundâncias e melhorando o tempo de entrega em eventos como recuperação de senha, avisos de login suspeito, notificações de integração e alertas de sistema.

Incluímos também uma nova seção no painel do usuário para visualizar o histórico de notificações enviadas e reenvio manual em caso de falha. Para os administradores, adicionamos métricas de entregabilidade no painel de e-mails.

Seguimos monitorando a estabilidade do sistema e, como sempre, agradecemos os feedbacks da comunidade que nos ajudam a evoluir.`
    }
];