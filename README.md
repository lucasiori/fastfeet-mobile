<h1 align="center">
  <image src="https://github.com/lucasiori/fastfeet-mobile/blob/master/.github/fastfeet-mobile.png" alt="FastFeet" />
</h1>

<h3 align="center">👞 FastFeet</h3>

<blockquote align="center">Aplicação base desenvolvida durante o Bootcamp GoStack</blockquote>

<p align="center">
  <a href="#sobre-aplicacao">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#comecando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#preview">Preview</a>
</p>

<br />

<h2 id="sobre-aplicacao">ℹ Sobre a aplicação</h2>
<p>A aplicação trata-se de um sistema de gerenciamento para transportadoras.</p>
<p>Na plataforma web, são cadastrados os entregadores, destinatário e encomendas. Também são listadas todas as encomendas cadastradas
e você pode consultar os detalhes, como produto, status e se a entrega teve/possui algum problema.</p>
<p>No aplicativo mobile, o usuário pode consultar o status da entrega e cadastrar problemas para a mesma, além de finalizar a entrega 
enviando uma foto da assinatura do destinatário</p>
<p>⚙ Backend: <a href="https://github.com/lucasiori/fastfeet-backend">FastFeet - Backend</a></p>
<p>💻 Frontend: <a href="https://github.com/lucasiori/fastfeet-frontend">FastFeet - Frontend</a></p>
<p>
  <h3>📱 Mobile</h3>
  <p>A aplicação mobile é de uso exclusivo dos entregadores e possui as seguintes funções:</p>
  <p><strong>Consultas:</strong> O usuário pode consultar suas entregas pendentes, ou que já foram entregues. Além de consultar também, 
  os problemas que foram apontados para a entrega.</p>
  <p><strong>Problemas na Entrega:</strong> O usuário consegue apontar problemas que possam surgir durante a entrega.</p>
  <p><strong>Iniciar Entrega:</strong> É através do aplicativo que o entregador aponta a data e hora de início da entrega.</p>
  <p><strong>Finalizar Entrega:</strong> O usuário registra a conclusão da entrega, enviando uma foto da assinatura do destinatário.</p>
  <p><strong>OBS: </strong>O projeto foi desenvolvido exclusivamente para dispositivos Android.</p>
</p>

<br /> 

<h2 id="comecando">▶ Começando</h2>

<h3>✔ Iniciando o backend</h3>
<p>Antes de iniciar a aplicação web você já deve estar com backend da aplicação em execução, que pode ser encontrado através do link: 
<a href="https://github.com/lucasiori/fastfeet-backend">FastFeet - Backend</a>.</p>

<h3>📱 Iniciando o mobile (Android)</h3>
<p>Certifique-se de estar com o ambiente configurado. Você pode encontrar mais informações acessando
o link: <a href="https://docs.rocketseat.dev/ambiente-react-native/usb/android">Emulando Aplicativos via USB</a></p>
<p>Acesse a pasta do projeto e execute o comando <code>npm install</code> para instalar as dependências.</p>
<p>Você precisará informar o IP onde esta sendo executado o servidor backend, para isso acesse o arquivo localizado em 
 <code>src/services/api.js</code> e substitua <code>localhost</code> pelo IP do servidor.</p>
<p>Com todas as dependências instaladas e com o dispositivo conectado, execute o comando <code>react-native run-android</code>.
A inicialização pode demorar alguns minutos, aguarde.</p>

<br />

<h2 id="preview">👀 Preview da Aplicação</h2>

<p align="center">
  <image src="https://github.com/lucasiori/fastfeet-mobile/blob/master/.github/app-screenshots.png" alt="Screenshot" />
</p>
