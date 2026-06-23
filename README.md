# Rippoutai (離魂体) — Detached Soul Prototype

Indie game prototype exploring **impossible mechanics**, **shadow/soul figures**, and **grounded fantasy** with strong silhouettes and emotional authenticity (Yoshida-inspired).

## Project Vision
A game about detached souls (離魂体 — "Rippoutai"), perspective shifts, and reconnection. The impossible cube serves as the central metaphor and primary interaction object. Shadow figures react with agency, memory, and emotional weight.

Current prototype: Lightweight HTML/JS implementation (see `index.html`).

## Current State (June 2026)
- **Fluid single-axis rotation** implemented using spring-damper steering model (precise, park-anywhere, no hard snapping).
- **Multi-axis mode added** (toggleable): Horizontal drag = Yaw, Vertical drag = Pitch. Both axes use identical fluid characteristics for full exploration of all cube faces.
- 3 reactive shadow/soul figures that respond continuously to cube orientation on both axes (facing, bobbing, emissive state).
- Clean English UI, Three.js prototype, mouse + touch support, keyboard shortcuts.
- v0.2 core loop is now significantly advanced — the cube feels alive and explorable.

## v0.2 Milestone Targets

Target these concrete goals to deliver a coherent, playable, and emotionally promising slice:

- **Impossible Cube Core Loop**: Player can reliably select, rotate, and trigger non-Euclidean reconfigurations or perspective shifts. At least 3–4 distinct, meaningful cube states. The "impossible" quality must be immediately felt and learnable in the first 2–3 minutes.
- **Shadow/Soul Figure Agency**: 2–3 shadow figures with reactive behaviors tied to cube state and player actions (echoing, merging/splitting, attraction/avoidance). Behaviors read clearly through strong silhouettes and expressive animation. They must feel alive with inner life.
- **One Resonant Perspective-Shift Moment**: A discoverable interaction where cube manipulation produces a clear "soul reconnection" or reality shift with emotional/curiosity payoff.
- **Visual & Animation Production Baseline**: All primary entities have final-direction art with strong readable silhouettes, raw emotional texture, at least two animation states each, and consistent transparent exports ready for use. No placeholders in the core slice.
- **Focused Playable Experience**: Self-contained 5–10 minute session with onboarding, shadow interaction, the resonant moment, and basic recovery states.
- **Technical Foundation & Hygiene**: Clean input handling, simple state system for shadows, perspective support for impossible feel. Properly versioned with changelog linked to play observations.
- **Playtest-Ready**: Easily runnable. Prepared focused playtest questions around cube feeling "impossibly good", shadows having soul/agency, and emotional impact of perspective shifts.

## Fluid Controls Design (Critical v0.2 Improvement)

**Problem**: Discrete snapping to cardinal angles makes manipulation feel imprecise and breaks the organic "impossible" and soul-like reactivity we're aiming for.

**Approach**: Treat rotation as **continuous** (any floating-point angle) using a steering-inspired control model (spring toward target + damping), similar to autonomous driving path-following algorithms. No automatic return to 0/90/180 on release unless explicitly triggered by gameplay (e.g. soul-link alignment).

This enables precise placement at any angle while preserving weighted, intentional feel — essential for emergence and emotional resonance.

### Core Implementation (Pseudo-code)

```js
// Per-entity state
let currentAngle = 0;      // radians or degrees — continuous
let targetAngle = 0;
let angularVelocity = 0;

// Input handler (e.g. pointer drag)
function handleInput(delta, isActive) {
  if (isActive) {
    const sensitivity = 1.2; // tune per device/feel
    targetAngle = currentAngle + (delta * sensitivity);
    // Alternative velocity-based: angularVelocity += delta * torque;
  }
  // On release: do NOT snap. Let player "park" at any angle.
}

// Per-frame update (dt in seconds)
function update(dt) {
  const springStrength = 18;
  const damping = 0.85;     // tune for natural stopping (higher = stops faster)

  const angleError = shortestAngleDifference(targetAngle, currentAngle);
  angularVelocity += angleError * springStrength * dt;
  angularVelocity *= Math.pow(damping, dt * 60); // frame-rate independent

  currentAngle += angularVelocity * dt;

  // Optional: only "magnetic" snap at deliberate interaction points
  // if (nearLinkPoint && Math.abs(angleError) < threshold) { currentAngle = targetAngle; ... }

  drawEntity(currentAngle);
}
```

**Tuning**: Expose springStrength and damping as live sliders during prototyping. Add input curves for fine control near zero.

**Benefits for Rippoutai**:
- Precise, fluid cube manipulation supports the "impossible" fantasy.
- Shadows can react continuously and expressively to exact cube state.
- Players can create and hold meaningful non-cardinal configurations.
- Feels responsive and "alive" rather than mechanical.

### Multi-Axis Extension (v0.2)
The same spring-damper model was extended to a second axis (Pitch/X) and made toggleable via the **"Multi-Axis Orbit"** button.

- **OFF** (default): Classic single-axis behavior (Yaw only) — preserves the original focused "north/south pole" interaction.
- **ON**: Full two-axis control. Horizontal drag rotates Yaw, vertical drag rotates Pitch. Both axes use identical spring strength + damping values so the feel remains consistent and precise.
- Purpose: Allow players to freely explore **all faces** of the impossible cube while maintaining the weighted, park-anywhere control quality.
- Shadows were updated to react to the combined orientation for richer emotional agency.

This directly advances the **Impossible Cube Core Loop** and **Shadow/Soul Figure Agency** v0.2 milestones.

## Character & Shadow Design Notes (Playability)

To support fluid controls and readability:
- Silhouettes and landmark features (eyes, structure, markings) must remain strong and unambiguous at **any** intermediate angle.
- Add secondary motion and overlap on rotation starts/stops for weight and responsiveness.
- Shadow figures: smooth continuous lerping of facing, posture, and state indicators. Use subtle emissive/particle changes to telegraph behavioral state (attracted, echoing, destabilized, integrated).
- Visual feedback must make the precision of continuous input *visible* so players trust and enjoy the controls.

## How to Run

1. Open `index.html` in a modern browser.
2. Drag horizontally to rotate the cube (fluid spring-damper control).
3. Click **"Multi-Axis Orbit"** to toggle full two-axis exploration (horizontal = Yaw, vertical = Pitch).
4. Use **R** to reset, **Space** to randomize, **S** to toggle shadows, or **M** for multi-axis.
5. Shadows react continuously to the cube's full orientation.

## Development & Iteration

- Small, testable increments only.
- Every change must clearly advance the core fantasy: detached soul, impossible perspective, emotional reconnection.
- Playtest frequently with focused questions.
- Document decisions here and in code comments.

For detailed iteration checklists and design lenses, refer to the project's game-improvement guidance.

---

**Status**: Actively iterating toward v0.2. Fluid controls implementation is the current priority.

Last updated: June 2026
