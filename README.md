# astro-plugin-c2
Meu plugin "Astro" para o construct 2

## Ações
Tem atualmente 2 ações no plugin
### 1 - Quando o jogo for minimizado
Sempre quando o jogo minimiza, o jogo para de roda e recebe um pause, com esse plugin você pode pausar e despausar o jogo quando for minimizado.
### 2 - Notificar
Essa ação pode criar notificações no seu jogo para conquista, avisos, etc... com as sequintes opções:
- Titulos
- Descrição
- Icone *( Coloque o icone utilizando Base64 ou usando uma URL local ou na rede )*
- Modo Silencioso *( esse é um modo que quando a notificação vier, apite o som padrão de notificação do computador )*

## Contições
Possui apenas 1 condição
### 1 - Elemento Existe
Ve se algum elemento em JSON existe ou não.
- Json *( onde vai estar o JSON em string )*
- Elemento *( o elemento que você está procurando )*
- Caminho *1, 2, 3... ( sub-caminhos para chegar onde supostamente o elemento estaria ou não ) *
