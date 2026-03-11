const PARTY_VOTES = [
  { party: "राष्ट्रिय स्वतन्त्र पार्टी", votes: 5167429 },
  { party: "नेपाली काँग्रेस", votes: 1757100 },
  { party: "नेपाल कम्युनिष्ट पार्टी (एकीकृत मार्क्सवादी लेनिनवादी)", votes: 1453789 },
  { party: "नेपाली कम्युनिष्ट पार्टी", votes: 810479 },
  { party: "श्रम संस्कृति पार्टी", votes: 385806 },
  { party: "राष्ट्रिय प्रजातन्त्र पार्टी", votes: 330386 },
  { party: "जनता समाजवादी पार्टी, नेपाल", votes: 179397 },
  { party: "राष्ट्रिय परिवर्तन पार्टी", votes: 172243 },
  { party: "जनमत पार्टी", votes: 79225 },
  { party: "एकल चिन्ह चकिया (जाँतो) (राष्ट्रिय मुक्ति पार्टी नेपाल/जनता समाजवादी पार्टी/नागरिक उन्मुक्ति पार्टी, नेपाल)", votes: 62002 },
  { party: "नेपाल मजदुर किसान पार्टी", votes: 42265 },
  { party: "राष्ट्र निर्माण दल नेपाल", votes: 39273 },
  { party: "राष्ट्रिय जनमोर्चा", votes: 29448 },
  { party: "एकल चिन्ह बस (नेपाल संघीय समाजवादी पार्टी/बहुजन एकता पार्टी नेपाल/नेपाल जनजागृति पार्टी)", votes: 28974 },
  { party: "नेपाल जनता संरक्षण पार्टी", votes: 28305 },
  { party: "प्रगतिशील लोकतान्त्रिक पार्टी", votes: 24653 },
  { party: "नेपाल कम्युनिस्ट पार्टी (माओवादी)", votes: 23853 },
  { party: "मंगोल नेशनल अर्गनाइजेशन", votes: 20819 },
  { party: "एकल चिन्ह मोबाइल (आम जनता पार्टी/जनादेश पार्टी नेपाल)", votes: 16245 },
  { party: "सार्वभौम नागरिक पार्टी", votes: 14861 },
  { party: "राष्ट्रिय मुक्ति आन्दोलन, नेपाल", votes: 10707 },
  { party: "संयुक्त नागरिक पार्टी", votes: 9128 },
  { party: "स्वाभिमान पार्टी", votes: 8152 },
  { party: "राष्ट्रिय जनमुक्ति पार्टी", votes: 7209 },
  { party: "नेपाल जनता पार्टी", votes: 7159 },
  { party: "राष्ट्रिय एकता दल", votes: 7064 },
  { party: "नेपाल कम्युनिष्ट पार्टी (मार्क्सवादी-लेनिनवादी)", votes: 6167 },
  { party: "राष्ट्रिय गौरव पार्टी", votes: 5244 },
  { party: "नेशनल रिपब्लिक नेपाल", votes: 5159 },
  { party: "नेपालका लागि नेपाली पार्टी", votes: 5011 },
  { party: "नेपाल कम्युनिष्ट पार्टी मार्क्सवादी (पुष्पलाल)", votes: 4829 },
  { party: "संघीय लोकतान्त्रिक राष्ट्रिय मञ्च", votes: 4674 },
  { party: "गतिशील लोकतान्त्रिक पार्टी", votes: 4642 },
  { party: "नेपाल कम्युनिष्ट पार्टी (संयुक्त)", votes: 4510 },
  { party: "राष्ट्रिय उर्जाशील पार्टी, नेपाल", votes: 4316 },
  { party: "समावेशी समाजवादी पार्टी नेपाल", votes: 4274 },
  { party: "नेपाल लोकतान्त्रिक पार्टी", votes: 4112 },
  { party: "नेपाल मातृभूमि पार्टी", votes: 3225 },
  { party: "जय मातृभूमि पार्टी", votes: 2978 },
  { party: "राष्ट्रिय जनता पार्टी नेपाल", votes: 2931 },
  { party: "बहुजन शक्ति पार्टी", votes: 2761 },
  { party: "प्रजातान्त्रिक पार्टी नेपाल", votes: 2240 },
  { party: "नेपाल जनमुक्ति पार्टी", votes: 2168 },
  { party: "जन अधिकार पार्टी", votes: 2110 },
  { party: "नेपाल सद्‍भावना पार्टी", votes: 2015 },
  { party: "पिपुल फर्ष्ट पार्टी", votes: 1799 },
  { party: "नेपाली काँग्रेस (वी.पी.)", votes: 1785 },
  { party: "नागरिक शक्ति, नेपाल", votes: 1730 },
  { party: "नेपाली जनश्रमदान संस्कृति पार्टी", votes: 1637 },
  { party: "नेपाली जनता दल", votes: 1451 },
  { party: "समावेशी समाजवादी पार्टी", votes: 1394 },
  { party: "जनता लोकतान्त्रिक पार्टी, नेपाल", votes: 1301 },
  { party: "एकल चिन्ह जगर भएको सिंह(सचेत नेपाली पार्टी/नागरिक सर्वोच्चता पार्टी नेपाल)", votes: 1128 },
  { party: "जनप्रिय लोकतान्त्रिक पार्टी", votes: 951 },
  { party: "मितेरी पार्टी नेपाल", votes: 771 },
  { party: "उन्‍नत लोकतन्त्र पार्टी", votes: 726 },
  { party: "त्रिमुल नेपाल", votes: 691 }
];

const TOTAL_VOTES = 10804701;
const PARTY_META = {
  "राष्ट्रिय स्वतन्त्र पार्टी": {
    emoji: "🔔",
    color: "#38bdf8",
    shortName: "रास्वपा",
    textClass: "text-dark"
  },
  "नेपाली काँग्रेस": {
    emoji: "🌳",
    color: "#2f855a",
    shortName: "काँग्रेस"
  },
  "नेपाल कम्युनिष्ट पार्टी (एकीकृत मार्क्सवादी लेनिनवादी)": {
    emoji: "☀️",
    color: "#f59e0b",
    shortName: "एमाले",
    textClass: "text-dark"
  },
  "नेपाली कम्युनिष्ट पार्टी": {
    emoji: "★",
    color: "#dc2626",
    shortName: "नेकपा"
  },
  "श्रम संस्कृति पार्टी": {
    emoji: "💪",
    color: "#8b5e34",
    shortName: "श्रम संस्कृति"
  },
  "राष्ट्रिय प्रजातन्त्र पार्टी": {
    emoji: "🐄",
    color: "#111827",
    shortName: "राप्रपा"
  }
};

function formatNumber(value, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(value);
}

function formatPercentLabel(value) {
  return Number.isInteger(value) ? String(value) : String(value);
}

function minimumVotesToQualify(thresholdVotes) {
  return Number.isInteger(thresholdVotes) ? thresholdVotes : Math.floor(thresholdVotes) + 1;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function seatTitle(seat) {
  if (seat === 1) return "Step-by-step: Allocating Seat 1";
  if (seat === 2) return "Recalibrating the Gears: Seat 2";
  return `Allocating Seat ${seat}`;
}

function partyMeta(party) {
  return PARTY_META[party] || {
    emoji: "•",
    color: "#475569",
    shortName: party
  };
}

function computeAllocation(parties, totalVotes, seatCount, thresholdPercent) {
  const thresholdVotes = totalVotes * (thresholdPercent / 100);
  const minimumQualifyingVotes = minimumVotesToQualify(thresholdVotes);

  const eligible = [];
  const excluded = [];

  for (const entry of parties) {
    if (entry.votes >= minimumQualifyingVotes) {
      eligible.push({ ...entry });
    } else {
      excluded.push({ ...entry });
    }
  }

  eligible.sort((left, right) => right.votes - left.votes);
  excluded.sort((left, right) => right.votes - left.votes);

  const seatMap = Object.fromEntries(eligible.map((entry) => [entry.party, 0]));
  const rounds = [];

  for (let seat = 1; seat <= seatCount; seat += 1) {
    let winner = null;
    const snapshot = [];

    for (const entry of eligible) {
      const seatsWon = seatMap[entry.party];
      const divisor = seatsWon * 2 + 1;
      const quotient = entry.votes / divisor;
      snapshot.push({
        party: entry.party,
        votes: entry.votes,
        divisor,
        quotient,
        seatsWon
      });

      if (
        !winner ||
        quotient > winner.quotient ||
        (quotient === winner.quotient && entry.votes > winner.votes)
      ) {
        winner = {
          party: entry.party,
          votes: entry.votes,
          divisor,
          quotient,
          seatsBefore: seatsWon
        };
      }
    }

    if (!winner) break;

    seatMap[winner.party] += 1;
    rounds.push({
      seat,
      ...winner,
      seatsAfter: seatMap[winner.party],
      snapshot,
      tray: rounds.map((round) => ({ seat: round.seat, party: round.party })).concat({
        seat,
        party: winner.party
      })
    });
  }

  const eligibleVotes = eligible.reduce((sum, item) => sum + item.votes, 0);
  const excludedVotes = excluded.reduce((sum, item) => sum + item.votes, 0);

  const results = eligible
    .map((entry) => ({
      ...entry,
      seats: seatMap[entry.party],
      eligibleVoteShare: eligibleVotes === 0 ? 0 : entry.votes / eligibleVotes
    }))
    .sort((left, right) => right.seats - left.seats || right.votes - left.votes);

  return {
    thresholdPercent,
    thresholdVotes,
    minimumQualifyingVotes,
    eligible,
    excluded,
    eligibleVotes,
    excludedVotes,
    results,
    rounds
  };
}

function renderAllocation(model) {
  const totalVotesEl = document.getElementById("total-votes");
  const thresholdLabelEl = document.getElementById("threshold-label");
  const thresholdVotesEl = document.getElementById("threshold-votes");
  const qualifyingCountEl = document.getElementById("qualifying-count");
  const eligibleVotesEl = document.getElementById("eligible-votes");
  const allocationBody = document.getElementById("allocation-body");
  const resultNote = document.getElementById("result-note");
  const thresholdExplainer = document.getElementById("threshold-explainer");
  const eligibleList = document.getElementById("eligible-list");
  const excludedList = document.getElementById("excluded-list");
  const seatDetails = document.getElementById("seat-details");

  totalVotesEl.textContent = formatNumber(TOTAL_VOTES);
  thresholdLabelEl.textContent = `${formatPercentLabel(model.thresholdPercent)}% cutoff`;
  thresholdVotesEl.textContent = `${formatNumber(model.minimumQualifyingVotes)} votes`;
  qualifyingCountEl.textContent = String(model.eligible.length);
  eligibleVotesEl.textContent = formatNumber(model.eligibleVotes);

  resultNote.textContent =
    `${formatNumber(model.excludedVotes)} votes are excluded before seat allocation.`;
  thresholdExplainer.textContent =
    `${formatPercentLabel(model.thresholdPercent)}% of ${formatNumber(TOTAL_VOTES)} is ${formatNumber(model.thresholdVotes, 2)}. ` +
    `Because vote counts are whole numbers, a party needs at least ${formatNumber(model.minimumQualifyingVotes)} votes to qualify.`;

  const largestSeatCount = model.results.length === 0 ? 0 : Math.max(...model.results.map((item) => item.seats));

  allocationBody.innerHTML = model.results.length === 0
    ? `
      <tr>
        <td colspan="4">No party meets the threshold at the current settings.</td>
      </tr>
    `
    : model.results
    .map((entry) => {
      const width = largestSeatCount === 0 ? 0 : (entry.seats / largestSeatCount) * 100;
      const meta = partyMeta(entry.party);
      return `
        <tr>
          <td><span class="party-chip"><span>${meta.emoji}</span><span>${escapeHtml(entry.party)}</span></span></td>
          <td class="mono">${formatNumber(entry.votes)}</td>
          <td class="seat-cell">
            <div class="seat-bar"><span style="width:${width}%; background: ${meta.color};"></span></div>
            <span class="seat-caption">${formatNumber(entry.eligibleVoteShare * 100, 2)}% of qualifying votes</span>
          </td>
          <td class="mono">${entry.seats}</td>
        </tr>
      `;
    })
    .join("");

  eligibleList.innerHTML = model.eligible.length === 0
    ? "<li>No party qualifies under the current threshold.</li>"
    : model.eligible
    .map((entry) => {
      const meta = partyMeta(entry.party);
      return `<li><span class="party-chip"><span>${meta.emoji}</span><span>${escapeHtml(entry.party)}</span></span>: <span class="mono">${formatNumber(entry.votes)}</span></li>`;
    })
    .join("");

  excludedList.innerHTML = model.excluded.length === 0
    ? "<li>No party is excluded.</li>"
    : model.excluded
    .map((entry) => `<li>${escapeHtml(entry.party)}: <span class="mono">${formatNumber(entry.votes)}</span></li>`)
    .join("");

  seatDetails.innerHTML = model.rounds.length === 0
    ? "<p>No seat rounds can be calculated because no party qualifies.</p>"
    : `
      <div class="legend-row">
        ${model.eligible.map((entry) => {
          const meta = partyMeta(entry.party);
          return `
            <span class="legend-item ${meta.textClass || ""}" style="background:${meta.color}; color:${meta.textClass ? "var(--ink)" : "#fff"};">
              <span>${meta.emoji}</span>
              <span>${escapeHtml(entry.party)}</span>
            </span>
          `;
        }).join("")}
      </div>
      ${model.rounds.map((round) => {
        const winnerMeta = partyMeta(round.party);
        const gridHeader = round.snapshot.map((entry) => {
          const meta = partyMeta(entry.party);
          return `
            <div class="seat-grid-cell party-head ${meta.textClass || ""}" style="background:${meta.color}; color:${meta.textClass ? "var(--ink)" : "#fff"};">
              <span>${meta.emoji}</span>
              <span class="party-name-short">${escapeHtml(meta.shortName)}</span>
            </div>
          `;
        }).join("");

        const divisorRow = round.snapshot.map((entry) => `
          <div class="seat-grid-cell mono">÷ ${entry.divisor}</div>
        `).join("");

        const quotientRow = round.snapshot.map((entry) => {
          const previousText = entry.divisor > 1 ? `<span class="quotient-secondary mono">${formatNumber(entry.votes)}</span>` : "";
          const isWinner = entry.party === round.party;
          return `
            <div class="seat-grid-cell quotient-cell ${isWinner ? "winner" : ""}" style="color:${isWinner ? winnerMeta.color : "inherit"};">
              ${previousText}
              <span class="quotient-primary mono">${formatNumber(entry.quotient, 2)}</span>
            </div>
          `;
        }).join("");

        const nextDivisorRow = round.snapshot.map((entry) => {
          const nextDivisor = entry.party === round.party ? entry.divisor + 2 : entry.divisor;
          return `
            <div class="seat-grid-cell mono bottom-row">÷ ${nextDivisor}</div>
          `;
        }).join("");

        const tray = round.tray.map((entry) => {
          const meta = partyMeta(entry.party);
          return `
            <span class="seat-token ${meta.textClass || ""}" style="background:${meta.color}; color:${meta.textClass ? "var(--ink)" : "#fff"};">
              <span>${meta.emoji}</span>
              <span>Seat ${entry.seat}</span>
            </span>
          `;
        }).join("");

        return `
          <details class="seat-step" ${round.seat === 1 ? "open" : ""}>
            <summary>
              <span class="seat-step-title">
                <span>${winnerMeta.emoji}</span>
                <span>${seatTitle(round.seat)}</span>
              </span>
              <span class="seat-step-meta">Winner: ${escapeHtml(round.party)} | Quotient ${formatNumber(round.quotient, 2)}</span>
            </summary>
            <div class="seat-step-body">
              <span class="winner-note ${winnerMeta.textClass || ""}" style="background:${winnerMeta.color}; color:${winnerMeta.textClass ? "var(--ink)" : "#fff"};">
                ${winnerMeta.emoji} Seat ${round.seat} goes to ${escapeHtml(round.party)} because ${formatNumber(round.votes)} / ${round.divisor} = ${formatNumber(round.quotient, 2)}.
              </span>
              <div class="seat-grid-wrap">
                <div class="seat-grid">
                  <div class="seat-grid-cell row-head">Party</div>
                  ${gridHeader}
                  <div class="seat-grid-cell row-head">Current divisor</div>
                  ${divisorRow}
                  <div class="seat-grid-cell row-head">Active quotient</div>
                  ${quotientRow}
                  <div class="seat-grid-cell row-head bottom-row">Next divisor</div>
                  ${nextDivisorRow}
                </div>
              </div>
              <div>
                <p class="explanation">Running seat tray after seat ${round.seat}.</p>
                <div class="seat-tray">${tray}</div>
              </div>
            </div>
          </details>
        `;
      }).join("")}
    `;
}

function readInputs() {
  const seatCount = Number(document.getElementById("seat-count").value);
  const thresholdPercent = Number(document.getElementById("threshold-percent").value);

  return {
    seatCount: Number.isFinite(seatCount) && seatCount > 0 ? Math.floor(seatCount) : 110,
    thresholdPercent:
      Number.isFinite(thresholdPercent) && thresholdPercent >= 0 ? thresholdPercent : 3
  };
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 720px)").matches;
}

function syncOrientationGuard() {
  const guard = document.getElementById("orientation-guard");
  if (!guard || typeof window === "undefined") return;

  const showGuard = isMobileViewport() && window.matchMedia("(orientation: portrait)").matches;
  guard.hidden = !showGuard;
  document.body.classList.toggle("lock-landscape", showGuard);
}

async function tryLockLandscape() {
  if (typeof window === "undefined" || !isMobileViewport()) return;
  if (!window.screen?.orientation?.lock) return;

  try {
    await window.screen.orientation.lock("landscape");
  } catch {
    // Browsers commonly reject orientation lock outside fullscreen/PWA mode.
  }
}

function initApp() {
  const inputs = ["seat-count", "threshold-percent"];

  const rerender = () => {
    const { seatCount, thresholdPercent } = readInputs();
    const model = computeAllocation(PARTY_VOTES, TOTAL_VOTES, seatCount, thresholdPercent);
    renderAllocation(model);
  };

  for (const id of inputs) {
    document.getElementById(id).addEventListener("input", rerender);
  }

  syncOrientationGuard();
  window.addEventListener("resize", syncOrientationGuard);
  window.addEventListener("orientationchange", syncOrientationGuard);
  tryLockLandscape();

  rerender();
}

if (typeof document !== "undefined") {
  initApp();
}

if (typeof module !== "undefined") {
  module.exports = {
    computeAllocation,
    minimumVotesToQualify
  };
}
