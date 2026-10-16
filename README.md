# No Prazo

Aplicativo de planejamento financeiro pessoal, responsivo para iPhone e computador.

- Compromissos com valores e vencimentos.
- Saldo atual e entradas previstas ou recebidas.
- Meta diária calculada considerando todos os vencimentos.
- Pagamentos, dias de trabalho, temas claro e escuro.
- Backup e restauração em JSON.

## Usar
Abra `index.html` em um servidor estático. Não há dependências ou etapa de compilação. Os arquivos estão na raiz, preparados para hospedagem estática.

## Dados
Os dados são salvos apenas no navegador do aparelho, sem sincronização. Dados financeiros e backups pessoais não devem ser adicionados ao repositório.

## Cálculo
Para cada vencimento, somam-se as contas até a data, descontam-se saldo e entradas previstas até essa data e divide-se pelos dias de trabalho restantes, incluindo hoje e o vencimento. A maior média é a meta diária constante. Valores são tratados em centavos. Prazos vencidos ou sem dias de trabalho disponíveis geram um aviso imediato.
