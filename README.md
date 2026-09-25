# ABCD Country Game v2

Child-friendly country/capital learning game.

## v2 features
- Country and capital learning
- Country flags
- ABCD multiple-choice quiz
- 10-question random quiz
- 3 lives
- Score and best score saved in browser
- Easy / Medium / Challenge labels
- Voice pronunciation using browser Speech Synthesis
- Correct-answer celebration
- Final stars/reward screen
- Mobile-friendly design

## Docker

```bash
docker build --no-cache -t abcd/v1:latest .
docker run -d --name abcd-game -p 8081:80 abcd/v1:latest
```

Open:
http://localhost:8081

## Check

```bash
curl http://localhost:8081 | grep "ABCD Country Game"
```

## Kubernetes / AKS

Change `YOUR_ACR.azurecr.io` in `k8s.yaml`, then:

```bash
kubectl apply -f k8s.yaml
kubectl get pods -l app=abcd-game
kubectl get svc abcd-game
```


## v3 fixes
- Quiz options use event listeners and are clickable reliably.
- Country names are shown with real flag images.
- Quiz question also shows the country's flag.
- Correct answer is highlighted after a wrong selection.

\n## v4 fixes
- Search results now retain the original country index, so clicking India opens India (not Afghanistan).
- Removed the fragile image onerror HTML that could display text such as `AF">`.
- Country cards remain explicitly clickable.

\n## v5 Indian-English voice
- Prefers an `en-IN` / Indian-English browser voice.
- Falls back to another English voice if an Indian voice is unavailable.
- The browser/Windows must provide an Indian-English voice for true Indian accent playback.
- On Windows, install/add an English (India) language/voice in Windows Speech settings if `en-IN` is not available.

\n## v6 learning navigation
- Click a country flag to hear the country and capital.
- Learning screen has Previous and Next buttons.
- Previous/Next automatically announces the selected country and capital.
- Shows `Country X of 195`.

\n## v7 click fix
- Country cards use a dedicated click handler on the country grid.
- Clicking anywhere on a country card or flag opens that country's learning page.
- Search keeps the original country index, so filtered results open the correct country.

\n## v8 country popup
- Clicking a country flag/card opens a centered popup window.
- Popup shows the large flag, country name and capital.
- Previous / Listen / Next buttons are inside the popup.
- Previous/Next automatically speaks the selected country and capital.
- Close with X, clicking outside, or Escape.

\n## v9 popup flag voice
- Clicking the large flag inside the popup speaks the country name and capital.
- Listen button continues to do the same.
- Clicking the popup flag also triggers the child-friendly celebration.

\n## v10 modal controls fix
- Previous, Next, Listen and Close use one reliable delegated click handler.
- Clicking the popup flag speaks exactly one time per click.
- Opening the popup does not automatically speak.
- Previous/Next do not automatically speak, preventing repeated voice.
- Close works by X, outside click, or Escape.
- Speech is cancelled before a new utterance starts.

\n## v11 critical fix
- Moved `app.js` below the popup HTML in `index.html`.
- This fixes the JavaScript initialization error that prevented popup controls from being bound.
- Close, Previous, Next, Listen and flag-click voice now initialize after their HTML elements exist.
- Close button is locked to the top-right corner of the popup.

\n## v12 voice reliability
- Removed the pause/resume sequence that could interfere with Edge speech playback.
- Prefers `en-IN`, then Indian-named voice, then another English voice, then the browser default.
- Added a `🗣️ Test Voice` button inside the popup.
- If the selected voice fails, the app retries with the browser default voice.
- Speech is cancelled before each new utterance to prevent repeated audio.
