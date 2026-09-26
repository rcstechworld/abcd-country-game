#!/usr/bin/env python3
"""
Generate fixed Indian-English MP3 audio for the ABCD Country Game.

Voice:
  en-IN-NeerjaNeural  (Microsoft Indian-English neural voice)

Install:
  python -m pip install edge-tts

Run from the project root:
  python generate_audio.py

Output:
  audio/countries/<country-code>.mp3
"""

import asyncio
import re
from pathlib import Path

import edge_tts

APP_JS = Path("app.js")
OUT_DIR = Path("audio/countries")
VOICE = "en-IN-NeerjaNeural"

def parse_countries():
    text = APP_JS.read_text(encoding="utf-8")
    # Matches entries such as:
    # ["🇮🇳","India","New Delhi"]
    pattern = re.compile(r'\["([^"]*)","([^"]*)","([^"]*)"\]')
    return pattern.findall(text)

def flag_code(flag):
    chars = [
        c for c in flag
        if 0x1F1E6 <= ord(c) <= 0x1F1FF
    ]
    return "".join(
        chr(ord(c) - 0x1F1E6 + ord("a"))
        for c in chars
    )

async def make_audio():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    countries = parse_countries()
    print(f"Found {len(countries)} countries.")

    for n, (flag, country, capital) in enumerate(countries, 1):
        code = flag_code(flag)
        output = OUT_DIR / f"{code}.mp3"
        text = f"{country}. The capital is {capital}."

        if output.exists() and output.stat().st_size > 1000:
            print(f"[{n}/{len(countries)}] exists: {output}")
            continue

        print(f"[{n}/{len(countries)}] generating: {country} -> {capital}")
        communicate = edge_tts.Communicate(
            text,
            VOICE,
            rate="-10%",
            pitch="+0Hz",
        )
        await communicate.save(str(output))

if __name__ == "__main__":
    asyncio.run(make_audio())
