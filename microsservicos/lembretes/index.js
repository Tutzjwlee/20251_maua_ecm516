const express = require('express')
const app = express()
// API: uma colecao de endpoints
// um end point é caracterizado por
// um metodo do protocolo http
// um padrao de acesso
// uma funcionalidade
// GET /lembretes () => {}
app.get('/lembretes', (req,res) => {})