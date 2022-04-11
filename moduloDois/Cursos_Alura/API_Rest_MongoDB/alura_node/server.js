// server.js tem a função de inicializar o servidor
import app from './src/app.js';

const PORT = process.env.PORT || 3000; // ou porta do ambiente de produção ou a do localhost 3000

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});