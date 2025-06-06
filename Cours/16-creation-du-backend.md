# Projet JSON Database API - Structure complète

## Structure des dossiers

```
json-database-api/
├── package.json
├── app.js
├── middleware/
│   └── jsonDb.js
├── controllers/
│   ├── games.js
│   └── clients.js
├── routes/
│   ├── games.js
│   └── clients.js
├── db/
│   ├── games.json
│   └── clients.json
├── README.md
└── .gitignore
```

## Instructions d'installation

1. Créez un nouveau dossier pour votre projet
2. Copiez tous les fichiers ci-dessous dans leur dossier respectif
3. Exécutez `npm install` pour installer les dépendances
4. Lancez le serveur avec `npm start`

---

## 📁 package.json
```json
{
  "name": "json-database-api",
  "version": "1.0.0",
  "type": "module",
  "description": "API REST avec base de données JSON mockée",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "node --watch app.js",
    "test": "echo \"Tests à implémenter\" && exit 1"
  },
  "keywords": ["json", "api", "rest", "nodejs", "express", "crud"],
  "author": "Votre nom",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
```

---

## 📁 app.js
```javascript
import express from 'express';
import gamesRoutes from './routes/games.js';
import clientsRoutes from './routes/clients.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware global
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS simple (pour le développement)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Routes
app.use('/api/games', gamesRoutes);
app.use('/api/clients', clientsRoutes);

// Route de test
app.get('/', (req, res) => {
  res.json({ 
    message: 'API JSON Database', 
    version: '1.0.0',
    endpoints: {
      games: [
        'GET /api/games - Récupérer tous les jeux',
        'GET /api/games/:id - Récupérer un jeu par ID',
        'POST /api/games - Créer un nouveau jeu',
        'PUT /api/games/:id - Mettre à jour un jeu',
        'DELETE /api/games/:id - Supprimer un jeu',
        'GET /api/games/search?q=... - Rechercher des jeux',
        'GET /api/games/genre/:genre - Jeux par genre',
        'GET /api/games/top-rated - Jeux les mieux notés'
      ],
      clients: [
        'GET /api/clients - Récupérer tous les clients',
        'GET /api/clients/:id - Récupérer un client par ID',
        'POST /api/clients - Créer un nouveau client',
        'PUT /api/clients/:id - Mettre à jour un client',
        'DELETE /api/clients/:id - Supprimer un client',
        'GET /api/clients/search?q=... - Rechercher des clients',
        'GET /api/clients/active - Clients actifs'
      ]
    }
  });
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📖 Documentation disponible sur http://localhost:${PORT}`);
});

export default app;
```

---

## 📁 middleware/jsonDb.js

```javascript

import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

/**
 * Middleware générique pour les opérations CRUD sur des fichiers JSON
 */
class JsonDbMiddleware {
  constructor(dbPath) {
    this.dbPath = dbPath;
    this.ensureDbExists();
  }

  /**
   * S'assure que le fichier DB existe avec un tableau vide
   */
  async ensureDbExists() {
    if (!existsSync(this.dbPath)) {
      const dir = path.dirname(this.dbPath);
      if (!existsSync(dir)) {
        await import('fs/promises').then(fs => fs.mkdir(dir, { recursive: true }));
      }
      await writeFile(this.dbPath, JSON.stringify([], null, 2), 'utf8');
    }
  }

  /**
   * Lit tous les enregistrements du fichier JSON
   */
  async readAll() {
    try {
      const data = await readFile(this.dbPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Erreur lecture ${this.dbPath}:`, error);
      return [];
    }
  }

  /**
   * Écrit tous les enregistrements dans le fichier JSON
   */
  async writeAll(data) {
    try {
      await writeFile(this.dbPath, JSON.stringify(data, null, 2), 'utf8');
      return true;
    } catch (error) {
      console.error(`Erreur écriture ${this.dbPath}:`, error);
      return false;
    }
  }

  /**
   * Génère un ID unique basé sur le timestamp et un nombre aléatoire
   */
  generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Middleware Express pour récupérer tous les enregistrements
   */
  getAll() {
    return async (req, res, next) => {
      try {
        const data = await this.readAll();
        
        // Filtrage optionnel
        let filteredData = data;
        if (req.query.filter) {
          const filterKey = Object.keys(req.query.filter)[0];
          const filterValue = req.query.filter[filterKey];
          filteredData = data.filter(item => 
            item[filterKey] && item[filterKey].toString().toLowerCase().includes(filterValue.toLowerCase())
          );
        }

        // Pagination optionnelle
        if (req.query.page && req.query.limit) {
          const page = parseInt(req.query.page) || 1;
          const limit = parseInt(req.query.limit) || 10;
          const startIndex = (page - 1) * limit;
          const endIndex = page * limit;
          
          const paginatedData = filteredData.slice(startIndex, endIndex);
          return res.json({
            data: paginatedData,
            pagination: {
              page,
              limit,
              total: filteredData.length,
              totalPages: Math.ceil(filteredData.length / limit)
            }
          });
        }

        res.json({ data: filteredData, total: filteredData.length });
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      }
    };
  }

  /**
   * Middleware Express pour récupérer un enregistrement par ID
   */
  getById() {
    return async (req, res, next) => {
      try {
        const data = await this.readAll();
        const item = data.find(record => record.id === req.params.id);
        
        if (!item) {
          return res.status(404).json({ error: 'Enregistrement non trouvé' });
        }
        
        res.json({ data: item });
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'enregistrement' });
      }
    };
  }

  /**
   * Middleware Express pour créer un nouvel enregistrement
   */
  create(validationSchema = null) {
    return async (req, res, next) => {
      try {
        // Validation optionnelle
        if (validationSchema) {
          const validation = validationSchema(req.body);
          if (!validation.isValid) {
            return res.status(400).json({ 
              error: 'Données invalides', 
              details: validation.errors 
            });
          }
        }

        const data = await this.readAll();
        const newItem = {
          id: this.generateId(),
          ...req.body,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        data.push(newItem);
        const success = await this.writeAll(data);
        
        if (success) {
          res.status(201).json({ 
            message: 'Enregistrement créé avec succès', 
            data: newItem 
          });
        } else {
          res.status(500).json({ error: 'Erreur lors de la création' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'enregistrement' });
      }
    };
  }

  /**
   * Middleware Express pour mettre à jour un enregistrement
   */
  update(validationSchema = null) {
    return async (req, res, next) => {
      try {
        // Validation optionnelle
        if (validationSchema) {
          const validation = validationSchema(req.body);
          if (!validation.isValid) {
            return res.status(400).json({ 
              error: 'Données invalides', 
              details: validation.errors 
            });
          }
        }

        const data = await this.readAll();
        const index = data.findIndex(record => record.id === req.params.id);
        
        if (index === -1) {
          return res.status(404).json({ error: 'Enregistrement non trouvé' });
        }

        // Mise à jour partielle ou complète
        const updatedItem = {
          ...data[index],
          ...req.body,
          id: req.params.id,
          createdAt: data[index].createdAt,
          updatedAt: new Date().toISOString()
        };

        data[index] = updatedItem;
        const success = await this.writeAll(data);
        
        if (success) {
          res.json({ 
            message: 'Enregistrement mis à jour avec succès', 
            data: updatedItem 
          });
        } else {
          res.status(500).json({ error: 'Erreur lors de la mise à jour' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'enregistrement' });
      }
    };
  }

  /**
   * Middleware Express pour supprimer un enregistrement
   */
  delete() {
    return async (req, res, next) => {
      try {
        const data = await this.readAll();
        const index = data.findIndex(record => record.id === req.params.id);
        
        if (index === -1) {
          return res.status(404).json({ error: 'Enregistrement non trouvé' });
        }

        const deletedItem = data[index];
        data.splice(index, 1);
        const success = await this.writeAll(data);
        
        if (success) {
          res.json({ 
            message: 'Enregistrement supprimé avec succès', 
            data: deletedItem 
          });
        } else {
          res.status(500).json({ error: 'Erreur lors de la suppression' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'enregistrement' });
      }
    };
  }

  /**
   * Middleware Express pour la recherche avancée
   */
  search() {
    return async (req, res, next) => {
      try {
        const data = await this.readAll();
        const { q, fields } = req.query;
        
        if (!q) {
          return res.json({ data: [], total: 0 });
        }

        const searchFields = fields ? fields.split(',') : Object.keys(data[0] || {});
        const results = data.filter(item => 
          searchFields.some(field => 
            item[field] && 
            item[field].toString().toLowerCase().includes(q.toLowerCase())
          )
        );

        res.json({ data: results, total: results.length });
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la recherche' });
      }
    };
  }
}

export default JsonDbMiddleware;
```

---

## 📁 controllers/games.js

```javascript
import JsonDbMiddleware from '../middleware/jsonDb.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialiser le middleware pour la ressource "games"
const gamesDb = new JsonDbMiddleware(path.join(__dirname, '../db/games.json'));

/**
 * Schéma de validation pour les games
 */
function validateGame(gameData) {
  const errors = [];
  
  if (!gameData.title || gameData.title.trim().length < 2) {
    errors.push('Le titre est requis et doit contenir au moins 2 caractères');
  }
  
  if (!gameData.genre || gameData.genre.trim().length === 0) {
    errors.push('Le genre est requis');
  }
  
  if (gameData.price && (isNaN(gameData.price) || gameData.price < 0)) {
    errors.push('Le prix doit être un nombre positif');
  }

  if (gameData.releaseDate && isNaN(Date.parse(gameData.releaseDate))) {
    errors.push('La date de sortie doit être une date valide');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Exportation des middlewares configurés pour les games
export const getAllGames = gamesDb.getAll();
export const getGameById = gamesDb.getById();
export const createGame = gamesDb.create(validateGame);
export const updateGame = gamesDb.update(validateGame);
export const deleteGame = gamesDb.delete();
export const searchGames = gamesDb.search();

// Contrôleurs personnalisés spécifiques aux games
export const getGamesByGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const data = await gamesDb.readAll();
    const gamesByGenre = data.filter(game => 
      game.genre && game.genre.toLowerCase() === genre.toLowerCase()
    );
    
    res.json({ 
      data: gamesByGenre, 
      total: gamesByGenre.length,
      genre 
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des jeux par genre' });
  }
};

export const getTopRatedGames = async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const data = await gamesDb.readAll();
    
    const topGames = data
      .filter(game => game.rating)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, parseInt(limit));
    
    res.json({ 
      data: topGames, 
      total: topGames.length 
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des jeux les mieux notés' });
  }
};
```

---

## 📁 controllers/clients.js

```javascript
import JsonDbMiddleware from '../middleware/jsonDb.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialiser le middleware pour la ressource "clients"
const clientsDb = new JsonDbMiddleware(path.join(__dirname, '../db/clients.json'));

/**
 * Schéma de validation pour les clients
 */
function validateClient(clientData) {
  const errors = [];
  
  if (!clientData.name || clientData.name.trim().length < 2) {
    errors.push('Le nom est requis et doit contenir au moins 2 caractères');
  }
  
  if (!clientData.email || !isValidEmail(clientData.email)) {
    errors.push('Un email valide est requis');
  }
  
  if (clientData.age && (isNaN(clientData.age) || clientData.age < 0 || clientData.age > 120)) {
    errors.push('L\'âge doit être un nombre entre 0 et 120');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Exportation des middlewares configurés pour les clients
export const getAllClients = clientsDb.getAll();
export const getClientById = clientsDb.getById();
export const createClient = clientsDb.create(validateClient);
export const updateClient = clientsDb.update(validateClient);
export const deleteClient = clientsDb.delete();
export const searchClients = clientsDb.search();

// Contrôleur personnalisé pour les clients actifs
export const getActiveClients = async (req, res) => {
  try {
    const data = await clientsDb.readAll();
    const activeClients = data.filter(client => client.isActive !== false);
    
    res.json({ 
      data: activeClients, 
      total: activeClients.length 
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des clients actifs' });
  }
};
```

---

## 📁 routes/games.js

```javascript
import express from 'express';
import {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
  searchGames,
  getGamesByGenre,
  getTopRatedGames
} from '../controllers/games.js';

const router = express.Router();

// Routes spéciales (doivent être avant les routes avec paramètres)
router.get('/search', searchGames);              // GET /games/search?q=...
router.get('/top-rated', getTopRatedGames);      // GET /games/top-rated
router.get('/genre/:genre', getGamesByGenre);    // GET /games/genre/action

// Routes CRUD de base
router.get('/', getAllGames);                    // GET /games
router.get('/:id', getGameById);                 // GET /games/:id
router.post('/', createGame);                    // POST /games
router.put('/:id', updateGame);                  // PUT /games/:id
router.patch('/:id', updateGame);                // PATCH /games/:id
router.delete('/:id', deleteGame);               // DELETE /games/:id

export default router;
```

---

## 📁 routes/clients.js

```javascript
import express from 'express';
import {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  searchClients,
  getActiveClients
} from '../controllers/clients.js';

const router = express.Router();

// Routes spéciales
router.get('/search', searchClients);            // GET /clients/search?q=...
router.get('/active', getActiveClients);         // GET /clients/active

// Routes CRUD de base
router.get('/', getAllClients);                  // GET /clients
router.get('/:id', getClientById);               // GET /clients/:id
router.post('/', createClient);                  // POST /clients
router.put('/:id', updateClient);                // PUT /clients/:id
router.patch('/:id', updateClient);              // PATCH /clients/:id
router.delete('/:id', deleteClient);             // DELETE /clients/:id

export default router;
```

---

## 📁 db/games.json

```json
[
  {
    "id": "1701234567890-abcdefgh1",
    "title": "The Legend of Zelda: Breath of the Wild",
    "genre": "Adventure",
    "price": 59.99,
    "rating": 9.5,
    "releaseDate": "2017-03-03",
    "platform": "Nintendo Switch",
    "description": "Jeu d'aventure en monde ouvert",
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2024-01-15T10:00:00.000Z"
  },
  {
    "id": "1701234567891-abcdefgh2",
    "title": "Cyberpunk 2077",
    "genre": "RPG",
    "price": 39.99,
    "rating": 7.8,
    "releaseDate": "2020-12-10",
    "platform": "PC",
    "description": "RPG futuriste dans Night City",
    "createdAt": "2024-01-15T11:00:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  },
  {
    "id": "1701234567892-abcdefgh3",
    "title": "Minecraft",
    "genre": "Sandbox",
    "price": 26.95,
    "rating": 9.0,
    "releaseDate": "2011-11-18",
    "platform": "Multi-platform",
    "description": "Jeu de construction et de survie",
    "createdAt": "2024-01-15T12:00:00.000Z",
    "updatedAt": "2024-01-15T12:00:00.000Z"
  }
]
```

---

## 📁 db/clients.json

```json
[
  {
    "id": "1701234567893-client01",
    "name": "Jean Dupont",
    "email": "jean.dupont@email.com",
    "age": 32,
    "city": "Paris",
    "isActive": true,
    "registrationDate": "2024-01-10",
    "createdAt": "2024-01-15T09:00:00.000Z",
    "updatedAt": "2024-01-15T09:00:00.000Z"
  },
  {
    "id": "1701234567894-client02",
    "name": "Marie Martin",
    "email": "marie.martin@email.com",
    "age": 28,
    "city": "Lyon",
    "isActive": true,
    "registrationDate": "2024-01-12",
    "createdAt": "2024-01-15T09:30:00.000Z",
    "updatedAt": "2024-01-15T09:30:00.000Z"
  }
]
```

---

## 📁 README.md

```markdown
# JSON Database API

Une API REST simple utilisant des fichiers JSON comme base de données mockée.

## Installation

```bash
npm install
```

## Démarrage

```bash
npm start
```

Le serveur démarre sur le port 3000 par défaut.

## Endpoints disponibles

### Games
- `GET /api/games` - Tous les jeux
- `GET /api/games/:id` - Jeu par ID
- `POST /api/games` - Créer un jeu
- `PUT /api/games/:id` - Modifier un jeu
- `DELETE /api/games/:id` - Supprimer un jeu
- `GET /api/games/search?q=...` - Rechercher
- `GET /api/games/genre/:genre` - Par genre
- `GET /api/games/top-rated` - Mieux notés

### Clients
- `GET /api/clients` - Tous les clients
- `GET /api/clients/:id` - Client par ID
- `POST /api/clients` - Créer un client
- `PUT /api/clients/:id` - Modifier un client
- `DELETE /api/clients/:id` - Supprimer un client
- `GET /api/clients/search?q=...` - Rechercher
- `GET /api/clients/active` - Clients actifs

## Exemples d'utilisation

### Créer un jeu

```bash
curl -X POST http://localhost:3000/api/games \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Super Mario Bros",
    "genre": "Platform",
    "price": 29.99,
    "rating": 9.2
  }'
```

### Rechercher des jeux

```bash
curl "http://localhost:3000/api/games/search?q=mario"
```

### Pagination

```bash
curl "http://localhost:3000/api/games?page=1&limit=5"
```
```

---

## 📁 .gitignore

```
node_modules/
.env
.DS_Store
*.log
dist/
build/
```

---

## Instructions pour télécharger

1. **Créez un nouveau dossier** pour votre projet (ex: `json-database-api`)
2. **Copiez chaque fichier** dans sa structure de dossier appropriée
3. **Ouvrez un terminal** dans le dossier racine
4. **Exécutez** : `npm install`
5. **Lancez le serveur** : `npm start`

L'API sera disponible sur `http://localhost:3000`
