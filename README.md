# Rippoutai (離魂体) — Detached Soul Prototype

Indie browser prototype exploring **impossible mechanics**, **shadow/soul figures**, and **grounded fantasy** with strong silhouettes and emotional authenticity (Yoshida-inspired).

> Solunip Labs · playable HTML/Three.js slice · open `index.html` (Three.js CDN + `rippoutai-c*.js` playable module)

## Project Vision
A game about detached souls (離魂体 — "Rippoutai"), perspective shifts, and reconnection. The impossible cube is the central metaphor and primary interaction object. Shadow figures react with agency, memory, and emotional weight.

## Current State (September 2026)

**Primary build: `index.html`** — a focused 5–10 minute reconnection slice (beyond the older fluid-controls sandbox).

| Claim | Status in `index.html` |
| --- | --- |
| Fluid spring-damper rotation | **Present** (yaw + pitch always on; park-anywhere) |
| Multi-axis toggle (M) | **Superseded** — multi-axis is always on; toggle lives only in `index-testing.html` |
| 3 reactive shadow/soul figures | **Present** — Sora, the twins, Yoru |
| Mouse + touch | **Present** |
| Keyboard | **R** reset · **Space** explore nudge · (testing build also has S / M) |
| Distinct cube states | **Present** — dormant / discord / weave / ring / ember |
| Resonant reconnection moment | **Present** — hold near a soul’s angle → cinematic dissolve → finale |
| Onboarding + recovery | **Present** — title lore, rotating hints, hold-slip recovery copy |
| CHANGELOG + playtest Qs | **Present** — see `CHANGELOG.md` and below |

### Other files
- `rippoutai-c-init.js` / `rippoutai-c0.js`…`c15.js` / `rippoutai-c-boot.js` — playable game module (base64 chunks assembled at runtime).
- `index-testing.html` — earlier multi-axis sandbox (toggle, Space randomize, S shadows). Useful for control tuning; not the narrative slice.
- `index-2.html` — static marketing/landing mock (video hero); not the playable prototype.
- Concept `IMG_*.jpeg` / generated videos — art reference, not wired into the runtime.

## How to Play
1. Open `index.html` in a modern browser.
2. **BEGIN** — drag to turn the cube (horizontal = yaw, vertical = pitch).
3. Watch the souls’ **eyes**. Bright = warm/near their remembered angle.
4. When a soul stirs, **hold still** until the hold meter fills.
5. Reconnect all three → the cube opens.
6. If you get lost: **Space** parks near a half-remembered angle; **R** resets orientation.

## Cube States (core loop)
1. **Dormant** — quiet frame; meadow holds its breath.
2. **Discord** — restless motion far from memory; beams shiver.
3. **Weave** (Sora) — depth-cheat impossible beams bloom.
4. **Ring** (the twins) — scattered arcs resolve toward one circle.
5. **Ember** (Yoru / finale) — core wakes; meadow keeps the light.

## Shadow Agency (current)
- **Attraction** — lean toward the cube as alignment grows.
- **Echo** — bodies tilt with cube angular velocity.
- **Merge / split** — the twins close ranks when near their angle, separate when cold.
- **Avoidance** — non-focused souls ease outward while another is nearly held.
- **Eyes** — primary warmer/colder tell at any distance.

## v0.2 Milestone Scorecard

| Target | Progress |
| --- | --- |
| Impossible Cube Core Loop (3–4 states, learnable fast) | **Mostly met** — five named states + three payoffs; still tuning discoverability |
| Shadow/Soul Figure Agency | **Advanced** — echo / merge-split / avoidance added; richer choreography still open |
| One Resonant Perspective-Shift Moment | **Met** — per-soul payoff + finale |
| Visual & Animation Production Baseline | **Partial** — intentional procedural meadow/silhouettes; not final concept-art exports |
| Focused Playable Experience (5–10 min) | **Met** — title → play → reconnect → recovery → ending |
| Technical Foundation & Hygiene | **Advanced** — clean input + soul align state; changelog linked to play notes |
| Playtest-Ready | **Ready for first pass** — runnable + questions below |

## Playtest Questions (focused)
1. Did the cube ever feel **impossibly good** (a moment where geometry lied in a satisfying way)? Which state (weave / ring / ember)?
2. Did the shadows feel like they had **inner life**, or like UI indicators? What read clearest (eyes, lean, twins merge, echo tilt)?
3. Was the **hold-to-reconnect** moment emotionally clear, or just a progress bar?
4. If you slipped a hold, did recovery copy / Space help you stay curious?
5. Rough session length — and where did attention drop?

Log answers → turn into the next `CHANGELOG.md` entry.

## Remaining v0.2 Gaps (next increments)
1. **Final-direction art** — replace procedural silhouettes with concept-aligned transparent exports; 2+ authored anim states each.
2. **Deeper agency** — stronger echoing of player intent; clearer merge/split staging; optional attract/avoid between souls.
3. **Discoverability** — ensure first impossible beat lands within ~2–3 minutes for cold players without Space.
4. **Hygiene** — keep README/CHANGELOG in lockstep; retire or clearly label `index-testing.html` / `index-2.html`.

## Fluid Controls (preserved)
Continuous angles via spring-damper steering (no hard snap on release). Deliberate magnetism only near a soul-link. See `CHANGELOG.md` and in-file tunables (`SPRING_STRENGTH`, `DAMPING`, `MAGNET_STRENGTH`).

## Development Notes
- Small, testable increments only.
- Every change must advance: detached soul · impossible perspective · emotional reconnection.
- Playable logic lives in the `rippoutai-c*.js` module (assembled at load); HUD shell stays in `index.html`.

---

**Status**: Playable v0.2 slice in `index.html`. Docs synced September 2026. Next priority: art baseline + deeper shadow choreography after playtest.

Last updated: September 2026
