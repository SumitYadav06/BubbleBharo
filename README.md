# BubbleFodo

Bubble shooter — 45 handcrafted levels (Easy/Medium/Hard/Expert), endless after level 45, ads-only, free game

**Package (Android application ID):** `com.bubblebharo.shooter`

## Play it

Open `www/index.html` in a browser — no build step needed for the web version.

## Build the Android APK (GitHub Actions)

Every push to `main` runs `.github/workflows/build-apk.yml` and produces a
debug APK (`bubblebharo-debug-apk`). A signed release APK is a separate
later step — the workflow currently builds debug only, so it needs no
keystore secrets.

## What's inside (content — 2026-11-25 growth pass)

- **45 handcrafted levels** (Easy 1–10, Medium 11–20, Hard 21–30, Expert 31–45) with 3 new expert patterns (rings, spiral, waves), then endless generated levels
- **Artwork** (`www/assets/art/`, ~11.2 MB): splash art on Home + win screen, and one full-screen background per theme (ocean / sunset / candy, 1120×2240). Lazy-loaded after first paint so the game still opens instantly; all local, works offline
- **Music** (`www/assets/audio/`, 3 tracks × ~90 s): *Ocean Breeze* (ocean theme), *Sunset Glow* (sunset theme), *Candy Pop* (candy theme) — the track follows the selected theme and respects the Music toggle. Plus 3 real sound effects (pop / win jingle / click) with the old synth sounds as fallback
- **4 bubble skins** (Classic / Neon / Pastel / Jewel) in Settings, saved with progress

### Audio & art licence

All music, sound effects and artwork are **original works made for this game**: the music/SFX were composed and synthesized from scratch by the assistant with a Python synthesizer (no samples, no third-party recordings, no copyrighted melodies), and the artwork was AI-generated for this game. No copyrighted commercial music is used anywhere. Safe for Uptodown upload and for monetisation (no copyright strikes).

## Ads — Unity Ads (since 2026-11-27; the previous network was fully removed)

Earning is ads-only (video ads, no pop-ups, no paid Premium):

- Banner — Home screen only, never while playing (real native banner,
  320×50 pinned to the bottom). No reserved empty ad space: there is no
  placeholder box on Home — the banner only takes space when a real
  banner is actually showing.
- Interstitial — after every 3rd completed level (real ad first,
  3-second demo overlay only as fallback)
- Rewarded video — only when the player taps Watch Ad on the Lose screen
  ("Watch Ad — Continue", one extra life per attempt); the reward is
  granted only when Unity reports the ad watched to the end (COMPLETED)
- No App Open: Unity Ads has no app-open format, so there is no
  app-open ad slot at all (nothing shows on cold start)

**The IDs in `www/index.html` are the real BubbleFodo Unity IDs**
(Android Game ID `800457126`, placements `BP_Rewarded_Android`,
`BP_Interstitial_Android`, `BP_Banner_Android`, created 2026-11-27 —
no store URL was needed at signup). Each game has its own Unity app
and its own IDs; IDs from another game do not work here.

**Integration:** Unity Ads Android SDK 4.18.0 through a minimal local
Capacitor plugin in `plugins/unity-ads/` (no maintained npm plugin for
Unity Ads exists, so the plugin is written here: `initialize` / load /
show + `BannerView`, wrapped in JS as `window.UnityAdsNative`). The
workflow verifies the wiring on every build (plugin registered, Game
ID + 3 placements present, no old-network IDs) and fails the build
otherwise. Release build uses `testMode: false`.

## Notifications

Daily notification at 10:00 AM local time, scheduled once on first open
after the notification permission prompt (Capacitor LocalNotifications).

