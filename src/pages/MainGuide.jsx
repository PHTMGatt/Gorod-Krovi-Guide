import React from 'react';
import '../styles/MainGuide.css';

const MainGuide = () => (
  <div className="main-guide-page">
    <div className="glass-card main-guide-card">
      <h1 className="section-title">Love and War</h1>
      <p className="section-intro">
        Love and War is the main Easter Egg on Gorod Krovi in Call of Duty: Black Ops III. You have 115 minutes (1 hr 55 min) to complete it; co-op is recommended for multitasking through the timed, randomized steps.
      </p>

      <section id="prerequisites">
        <h2 className="step-title">Prerequisites</h2>
        <ul className="step-list">
          <li>Turn on the Power</li>
          <li>Build the Guard of Fafnir</li>
          <li>Assemble the Dragon Network Controller</li>
          <li>Obtain the Dragon Strike</li>
          <li>Obtain the Gauntlet of Siegfried</li>
          <li>Optional: Complete Dragon Wings &amp; Mangler Helmet challenges</li>
        </ul>
      </section>

      <section id="step-1">
        <h2 className="step-title">Step 1: Power Up &amp; Obtain Dragon Egg</h2>
        <p className="step-text">
          In the Hatchery basement, destroy a Valkyrie Drone near the covered generator (under a green/black tarp) to activate it. Then shoot down the green-scaled Dragon Egg on the rafters, pick it up, and place it in any Nest to begin incubation. This also starts a 5-minute timer for Step 2.
        </p>
        <p className="step-text">
          <strong>Advanced method:</strong> On Round 3, power on at Dragon Command and interact with S.O.P.H.I.A. early so Code Cylinders drop sooner. By Round 6–7, retrieve and nest the Egg; complete Gauntlet of Siegfried trials by Round 10–11 for optimal pacing.
        </p>
      </section>

      <section id="step-2">
        <h2 className="step-title">Step 2: Interact with Valves</h2>
        <p className="step-text">
          There are six valves around the map—one whistles and holds the Master Code Cylinder. Leave the whistling valve untouched (green), rotate the other five until they glow blue (air flowing), then retrieve the cylinder and return it to S.O.P.H.I.A.
        </p>
      </section>

      <section id="step-3">
        <h2 className="step-title">Step 3: Crack S.O.P.H.I.A.’s Code</h2>
        <p className="step-text">
          Spell “KRONOS” by shooting each letter on the spin wheels (avoid the centers), then press the interact button. If incorrect, wait for the next round to retry.
        </p>
      </section>

      <section id="step-4">
        <h2 className="step-title">Step 4: Collect Six Silver Trophies</h2>
        <ul className="step-list">
          <li>
            <strong>Gersh Soul/Planet Trophy:</strong> Shoot the right-hand statue at Dragon Command entrance.
          </li>
          <li>
            <strong>Valkyrie Drone Trophy:</strong> Use Guard of Fafnir fireball on the Tank Factory pipe outside Double Tap.
          </li>
          <li>
            <strong>Mangler Trophy:</strong> Let the Supply Depot laser trap expire; pick up the revealed trophy.
          </li>
          <li>
            <strong>Group 935 Trophy:</strong> In the sewer pipe, shoot the red light; later check the Pack-a-Punch toilet.
          </li>
          <li>
            <strong>Nuke Trophy:</strong> Dragon Strike the puddle outside Supply Depot near Speed Cola.
          </li>
          <li>
            <strong>Groph Pod Trophy:</strong> Punch the safe in Operations Bunker with the Gauntlet’s 115 Punch (after launching the Whelp).
          </li>
        </ul>
      </section>

      <section id="step-5">
        <h2 className="step-title">Step 5: S.O.P.H.I.A.’s Six Tasks</h2>
        <ol className="step-list">
          <li><strong>Simon Says Boom!</strong> Defuse bombs in the slow flash order within the time limit.</li>
          <li><strong>Capture Gersh:</strong> Shoot the yellow orb until it glows purple; follow it to Dragon Command.</li>
          <li><strong>Escort the Mangler:</strong> Guide the green-eyed Mangler to the pad without killing it.</li>
          <li><strong>Escort the Valkyrie Drone:</strong> Stay close and lead the damaged drone through its path.</li>
          <li><strong>Protect the Groph Pod:</strong> Defend the pod (no zombies spawn solo), then send the Whelp to retrieve cargo.</li>
          <li><strong>Information Download:</strong> Use the key card in the Hatchery terminal, survive the Mangler lockdown, then return the card to S.O.P.H.I.A.</li>
        </ol>
      </section>

      <section id="step-6">
        <h2 className="step-title">Step 6: Free Original Nikolai</h2>
        <p className="step-text">
          Interact with S.O.P.H.I.A. to receive the power core. In Belinski Square, launch the Whelp at Nikolai’s mech to install it, then return to S.O.P.H.I.A. to detach and trigger the boss fight.
        </p>
      </section>

      <section id="step-7">
        <h2 className="step-title">Step 7: The Boss Fight</h2>
        <p className="step-text">
          See the dedicated Boss Fight section for detailed phase-by-phase strategy.
        </p>
      </section>
    </div>
  </div>
);

export default MainGuide;
