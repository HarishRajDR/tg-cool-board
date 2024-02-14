# Top Gear Cool Wall API

The Cool Wall, introduced in the sixth episode of Series 1, was a wall on which Top Gear presenters Jeremy Clarkson and Richard Hammond decided which cars were cool and which were not by placing photographs of them on to various sections of the wall. The categories were, from left to right; 'Seriously Uncool', 'Uncool', 'Cool', and 'Sub Zero'. Later the categories were expanded.

## Technologies used

- [Nitro](https://nitro.unjs.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel Postgres](https://vercel.com/storage/postgres)
- [Prisma](https://prisma.io)
- [Vercel](https://vercel.com/)

## Documentation

### 1. All cars on the wall

```plaintext
/api/wall
```

Response

```json
{
  "data": [
    {
      "id": 1,
      "Car": "BMW Z3",
      "InitialRanking": null,
      "Series": 1,
      "Episode": 6,
      "rankingId": 4,
      "Ranking": {
        "rank": "U",
        "desc": "Uncool"
      }
    }, ...
  ]
}
```

### 2. Specific car on the wall

```plaintext
/api/wall/[id]
```

Response for `api/wall/1`

```json
{
  "data": {
    "id": 1,
    "Car": "BMW Z3",
    "InitialRanking": null,
    "Series": 1,
    "Episode": 6,
    "rankingId": 4,
    "Ranking": {
      "rank": "U",
      "desc": "Uncool"
    }
  }
}
```

### 3. Ranks

```plaintext
/api/rankings
```

Response

```json
{
  "data": [
    {
      "id": 1,
      "rank": "SZF",
      "desc": "Sub-Zero Fridge-bar, also referred to as the Aston fridge."
    },
    {
      "id": 2,
      "rank": "SZ",
      "desc": "Sub-Zero"
    },
    {
      "id": 3,
      "rank": "C",
      "desc": "Cool"
    },
    {
      "id": 4,
      "rank": "U",
      "desc": "Uncool"
    },
    {
      "id": 5,
      "rank": "SU",
      "desc": "Seriously uncool"
    },
    {
      "id": 6,
      "rank": "X",
      "desc": "Undecided"
    },
    {
      "id": 7,
      "rank": "TOB",
      "desc": "Taken Off Board"
    },
    {
      "id": 8,
      "rank": "WBU",
      "desc": "Way Beyond Seriously Uncool"
    },
    {
      "id": 9,
      "rank": "WBSZ",
      "desc": "Way Beyond Sub-Zero"
    }
  ]
}
```

### 4. Cars with specific rank

```plaintext
/api/rankings/[rank]
```

The available ranks are,
| Rank | Descroption                 | Endpoint             |
| ---- | --------------------------- | -------------------- |
| SZF  | Sub-Zero Fridge-bar         | `/api/rankings/szf`  |
| SZ   | Sub-Zero (best)             | `/api/rankings/sz`   |
| C    | Cool (good)                 | `/api/rankings/c`    |
| U    | Uncool (bad)                | `/api/rankings/u`    |
| SU   | Seriously uncool (worst)    | `/api/rankings/su`   |
| X    | Undecided                   | `/api/rankings/x`    |
| TOB  | Taken Off Board             | `/api/rankings/tob`  |
| WBSU | Way Beyond Seriously Uncool | `/api/rankings/wbsu` |

Example Response for `/api/rankings/szf`

```json
{
  "data": [
    {
      "id": 49,
      "Car": "Aston Martin DB9",
      "InitialRanking": null,
      "Series": 4,
      "Episode": 1,
      "rankingId": 1
    },
    {
      "id": 87,
      "Car": "Aston Martin V8 Vantage",
      "InitialRanking": null,
      "Series": 7,
      "Episode": 3,
      "rankingId": 1
    }
  ]
}
```

### 5. Cars from a specific series

```plaintext
/api/series/[seriesNumber]
```

Response for `api/series/7`

```json
{
  "data": [
    {
      "id": 87,
      "Car": "Aston Martin V8 Vantage",
      "InitialRanking": null,
      "Series": 7,
      "Episode": 3,
      "rankingId": 1,
      "Ranking": {
        "rank": "SZF",
        "desc": "Sub-Zero Fridge-bar, also referred to as the Aston fridge."
      }
    },
    {
      "id": 88,
      "Car": "Vauxhall Astra VXR",
      "InitialRanking": null,
      "Series": 7,
      "Episode": 3,
      "rankingId": 3,
      "Ranking": {
        "rank": "C",
        "desc": "Cool"
      }
    },
    {
      "id": 89,
      "Car": "Mercedes-Benz SLK55 AMG",
      "InitialRanking": 3,
      "Series": 7,
      "Episode": 3,
      "rankingId": 4,
      "Ranking": {
        "rank": "U",
        "desc": "Uncool"
      }
    },
    {
      "id": 90,
      "Car": "BMW M6",
      "InitialRanking": 2,
      "Series": 7,
      "Episode": 3,
      "rankingId": 6,
      "Ranking": {
        "rank": "X",
        "desc": "Undecided"
      }
    }
  ]
}
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).
