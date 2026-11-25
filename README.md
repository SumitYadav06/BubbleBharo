# BubbleFodo

Bubble shooter — 30 levels (Easy/Medium/Hard), endless after level 30, ads-only, free game

**Package (Android application ID):** `com.bubblebharo.shooter`

## Play it

Open `www/index.html` in a browser — no build step needed for the web version.

## Build the Android APK (GitHub Actions)

Every push to `main` runs `.github/workflows/build-apk.yml` and produces a
debug APK (`bubblebharo-debug-apk`). For a signed release APK, add these repo
secrets (Settings → Secrets and variables → Actions) once:

- `ANDROID_KEYSTORE_BASE64` — base64 of your `.keystore` file
- `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`

Then the workflow also uploads `bubblebharo-release-apk`. Keep the keystore
file and its passwords safe — without them, later updates cannot be signed
with the same key.

## Ads — AdMob (real IDs added 2026-11-25)

Earning is ads-only (video ads, no pop-ups, no paid Premium):

- App Open ad — once, when the app opens
- Banner — Home screen only, never while playing
- Interstitial — after every 3rd level
- Rewarded video — no rewarded (Watch Ad) placement in this game yet; the rewarded unit ID is stored in the ADMOB block for future use

The real AdMob IDs are in the marked **ADMOB** config block in
`www/index.html` (search for `ADMOB`): `appId`, `bannerId`,
`interstitialId`, `rewardedId`, `appOpenId`. Real ads only run
after the APK is built and uploaded.
Each game has its own AdMob app and its own IDs; IDs from another game
do not work here.
