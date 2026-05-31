# nba_match_predictor

Predicts NBA game outcomes using a neural network. Pick two teams and a date — get a win probability.

---

## What it does

- Pulls historical NBA game data and builds rolling pre-game features (win %, home/away splits, head-to-head, injury scores, rest days)
- Trains a binary classification neural network to predict the home team's win probability
- Serves predictions via a REST API
- Frontend lets users select teams and a date to view a prediction

---

## Stack

| Layer | Tech |
|---|---|
| ML | PyTorch |
| API | FastAPI + Uvicorn |
| Data | nba_api, pandas |
| Frontend | TBD |

---

## Running locally

### Backend

```bash
# Install dependencies
pip install -r requirements.txt

# Start the API (from project root)
uvicorn backend.api:app --reload
```

API runs at `http://localhost:8000`.

### Frontend

```bash
cd frontend
# instructions TBD
```

---

## How predictions work

Features are computed from rolling historical data — only stats available *before* the game tip-off are used, so there's no data leakage. The model outputs a win probability for the home team.

Key features:
- Season win % (home and away team)
- Last-10-game win %
- Home/away split win %
- Days since last game (rest)
- Head-to-head average point differential
- Injury score (minutes lost to injured players)

---

## Status

Work in progress — learning project built alongside Andrej Karpathy's neural network series.
