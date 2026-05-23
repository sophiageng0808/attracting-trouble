import React from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  light?: boolean;
};

type FigureBlockProps = {
  title?: string;
  caption: React.ReactNode;
  note?: string;
  children?: React.ReactNode;
};

type FailureRateRow = {
  model: string;
  source: string;
  energy: string;
  force: string;
};

const accent = {
  teal: "#53999d",
  tealDark: "#4098ac",
  blue: "#7cc0ce",
  mint: "#bfdfd2",
  sand: "#dcc992",
  gold: "#ecb66b",
  orange: "#ec9e59",
  coral: "#ec8e5a",
};

const takeawayBullets: string[] = [
  "reduces unphysical close-contact structures",
  "better reproduces the true Lennard-Jones pair-distance distribution",
  "more closely matches the reference energy-shape behavior",
];

const pretrainedFailureRows: FailureRateRow[] = [
  { model: "MACE-OMol", source: "pretrained MACE model", energy: "26.97%", force: "100.00%" },
  { model: "UMA", source: "FairChem pretrained model", energy: "15.06%", force: "100.00%" },
  { model: "UMA-M-1P1", source: "FairChem pretrained model", energy: "15.04%", force: "100.00%" },
  { model: "UMA-S-1P1", source: "FairChem pretrained model", energy: "15.09%", force: "100.00%" },
  { model: "eSEN", source: "FairChem pretrained model", energy: "62.07%", force: "99.18%" },
  { model: "eSEN-MD-direct", source: "FairChem pretrained model", energy: "99.29%", force: "100.00%" },
  { model: "eSEN-SM-conserving", source: "FairChem pretrained model", energy: "31.29%", force: "99.97%" },
  { model: "eSEN-SM-direct", source: "FairChem pretrained model", energy: "55.65%", force: "97.57%" },
];

function Section({ id, title, children, light = false }: SectionProps) {
  return (
    <section id={id} className={light ? "border-y border-slate-200 bg-slate-50/60" : "bg-white"}>
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function FigureBlock({ title, caption, note, children }: FigureBlockProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
        <div
          className="px-6 py-6 text-sm text-slate-500"
          style={{
            background: `linear-gradient(180deg, ${accent.mint}22 0%, ${accent.blue}1f 45%, ${accent.sand}1c 100%)`,
          }}
        >
          {title ? (
            <div className="font-medium" style={{ color: accent.teal }}>
              {title}
            </div>
          ) : null}
          <div className={title ? "mt-4" : undefined}>{children ?? "[Insert figure / animation here]"}</div>
          {note ? (
            <div
              className="mt-5 rounded-2xl border border-dashed bg-white/80 px-4 py-3 text-sm leading-6 text-slate-600"
              style={{ borderColor: accent.mint }}
            >
              <span className="font-medium text-slate-900">Placement note.</span> {note}
            </div>
          ) : null}
        </div>
      </div>
      <p className="mt-4 text-center text-sm leading-6 text-slate-600">{caption}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  const colors = [accent.tealDark, accent.coral, accent.gold];
  return (
    <ul className="mt-4 space-y-3 text-[15px] leading-7 text-slate-600">
      {items.map((item, idx) => (
        <li key={`${idx}-${item}`} className="flex items-start gap-3">
          <div
            className="mt-2 h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: colors[idx % colors.length] }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EquationBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center overflow-x-auto py-2 text-center text-slate-800">
      <div className="font-serif text-[1.35rem] leading-[1.9] text-slate-800">{children}</div>
    </div>
  );
}

function R12Term() {
  return (
    <span className="whitespace-nowrap">
      1/<span className="italic">r</span>
      <sup>12</sup>
    </span>
  );
}

function FailureRatesTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead>
          <tr style={{ backgroundColor: `${accent.mint}40` }}>
            <th className="px-4 py-3 font-semibold text-slate-900">Model</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Source / setting</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Energy failure rate</th>
            <th className="px-4 py-3 font-semibold text-slate-900">Force failure rate</th>
          </tr>
        </thead>
        <tbody>
          {pretrainedFailureRows.map((row, idx) => (
            <tr
              key={row.model}
              style={{ backgroundColor: idx % 2 === 0 ? "white" : "rgba(248,250,252,0.7)" }}
            >
              <td className="border-t border-slate-200 px-4 py-3 font-medium text-slate-900">
                {row.model}
              </td>
              <td className="border-t border-slate-200 px-4 py-3 text-slate-600">{row.source}</td>
              <td className="border-t border-slate-200 px-4 py-3 text-slate-600">{row.energy}</td>
              <td className="border-t border-slate-200 px-4 py-3 text-slate-600">{row.force}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const adjointSamplingPanels = [
  {
    title: "Vanilla MACE",
    src: "/gifs/adjoint_generation_vanilla_evolve.gif",
    alt: "Adjoint sampling under vanilla MACE energy collapsing",
    color: accent.coral,
  },
  {
    title: (
      <>
        <R12Term />-augmented MACE
      </>
    ),
    src: "/gifs/adjoint_generation_r12_evolve.gif",
    alt: "Adjoint sampling under 1/r^12-augmented MACE energy",
    color: accent.gold,
  },
] as const;

function AdjointSamplingComparison() {
  return (
    <div className="space-y-2">
      <div className="grid gap-x-4 md:grid-cols-2">
        {adjointSamplingPanels.map((panel) => (
          <div
            key={`${panel.src}-label`}
            className="min-h-[2.75rem] text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: panel.color }}
          >
            {panel.title}
          </div>
        ))}
      </div>
      <div className="grid gap-x-4 md:grid-cols-2">
        {adjointSamplingPanels.map((panel) => (
          <img
            key={`${panel.title}-gif`}
            src={panel.src}
            alt={panel.alt}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>
    </div>
  );
}

function HistogramFigures() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
          Pair-distance histogram
        </div>
        <img
          src="/images/pair_distance_histograms_by_type.png"
          alt="Pair-distance histograms comparing vanilla MACE and 1/r^12-augmented MACE against the reference"
          className="block w-full"
        />
      </div>
      <div>
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
          Energy histogram
        </div>
        <img
          src="/images/energy_histograms_by_type.png"
          alt="Energy histograms comparing vanilla MACE and 1/r^12-augmented MACE against the reference and true LJ"
          className="block w-full"
        />
      </div>
    </div>
  );
}

export default function MLIPProjectPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="font-serif text-sm font-semibold tracking-[0.08em] text-slate-900">
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#abstract" className="hover:text-slate-900">Abstract</a>
            <a href="#short-range-repulsion" className="hover:text-slate-900">Short range repulsion</a>
            <a href="#adjoint-sampling" className="hover:text-slate-900">Adjoint Sampling</a>
            <a href="#main-takeaway" className="hover:text-slate-900">Main Takeaway</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                University of Toronto
              </div>
              <h1 className="mx-auto mt-4 max-w-4xl font-serif text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Attracting Trouble?
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-slate-700 md:text-2xl">
                How generative modelling fails with MLIPs
              </p>
              <div className="mt-6 text-base text-slate-700">
                Sophia Geng, Andreas Burger, Varinia Bernales, Alán Aspuru-Guzik
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                We study how short-range errors in learned interatomic potentials become amplified during generative sampling. Using the Lennard-Jones 13-atom cluster (LJ13) as a controlled test system, we show that a <R12Term />-augmented MACE model produces more physically realistic adjoint samples than vanilla MACE, improving pair-distance recovery and reducing unphysical high-energy failures.
              </p>
            </div>
          </div>
        </section>

        <Section id="abstract" title="Abstract" light={true}>
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              MLIPs offer a computationally efficient alternative to expensive quantum chemistry energy and force calculations, enabling faster molecular simulation and generative modeling. Yet high accuracy on equilibrium structures does not guarantee physically reliable behavior across the full configuration space. In particular, short-range compressed geometries can expose failures that are not captured by standard energy and force error metrics.
            </p>
            <p>
              This limitation becomes especially important when the learned potential is used for generative sampling. As atoms approach one another, the energy should increase sharply and the forces should repel the atoms apart. If this repulsive response is underestimated, a sampler may exploit artificially low-energy compressed configurations and generate unphysical structures.
            </p>
            <p>
              This project investigates whether adding an explicit <R12Term /> repulsive prior to MACE improves both short-range reliability and downstream adjoint sampling on LJ13. We train vanilla and repulsion-augmented MACE models, evaluate their short-range energy and force behavior, and compare adjoint sampling under the learned potentials against sampling under the true analytic LJ energy. Additional diagnostics on MACE-OMol and FairChem models suggest that close-range reliability is a broader evaluation challenge for MLIPs.
            </p>
          </div>
        </Section>

        <Section id="short-range-repulsion" title="Short range repulsion">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Short-range reliability is evaluated using controlled energy and force dissociation scans on the OMol25 dataset that compress interatomic distances from 0.7 Å to 0.2 Å and test whether each model exhibits the physically expected response: energy should increase under compression, and forces should remain repulsive.
            </p>
            <p>
              Applied across pretrained MLIPs, including MACE-OMol and FairChem models, it is shown that short-range repulsion failures are widespread rather than specific to a single architecture. To address this failure mode, MACE is augmented with an explicit <R12Term /> repulsive prior, which introduces a physically motivated inductive bias in the region of the energy landscape associated with close atomic contacts while preserving the flexibility of MACE’s learned many-body representation at longer distances.
            </p>
            <p>The augmented energy can be written as</p>

            <EquationBlock>
              <span className="italic">E</span>
              <sub className="text-[0.7em] align-[-0.35em] not-italic">aug</sub>
              <span>(x) = </span>
              <span className="italic">E</span>
              <sub className="text-[0.7em] align-[-0.35em] not-italic">MACE</sub>
              <span>(x) + λ </span>
              <span className="inline-grid grid-rows-[auto_auto] justify-items-center align-middle leading-none mx-[0.08em]">
              <span className="text-[2em] leading-[0.9]">∑</span>
              <span className="text-[0.46em] leading-none -mt-[-0.58em]">i&lt;j</span>
              </span>
              <span> s(</span>
              <span className="italic">r</span>
              <sub className="text-[0.7em] align-[-0.35em]">ij</sub>
              <span>) </span>
              <span className="italic">r</span>
              <sub className="text-[0.7em] align-[-0.35em]">ij</sub>
              <sup className="text-[0.7em] align-[0.45em]">−12</sup>
            </EquationBlock>

            <p>
              where r<sub>ij</sub> is the distance between atoms i and j, s(r<sub>ij</sub>) is a switching or cutoff function, and λ controls the strength of the repulsive prior. The force field is obtained from the energy gradient, so the added short-range term is intended to produce both increasing energies and repulsive forces as atoms are compressed.
            </p>
            <p>
              The 1/r<sup>12</sup>-augmented model is then evaluated using the same OMol25 dissociation scans and achieves a 0% failure rate on the repulsion diagnostic. This result indicates that the added prior successfully enforces the intended short-range energy and force behavior in the controlled compression setting.
            </p>
          </div>

          <div className="mt-8">
            <FigureBlock
              caption={
                <>
                  Short-range compression comparing vanilla MACE and <R12Term />-augmented MACE for two atoms compressed from 0.7 Å to 0.2 Å.
                </>
              }
            >
              <div className="flex justify-center">
                <div className="grid w-fit max-w-full grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-6">
                  <img
                    src="/gifs/proper_xyz_animate_trajectory.gif"
                    alt="Animated 3D molecular trajectory"
                    className="mx-auto block h-[min(60vw,320px)] w-auto max-w-full object-contain sm:h-[360px]"
                  />
                  <img
                    src="/gifs/final_compression_probe_two_model.gif"
                    alt="Animated energy and radial force dissociation scans for vanilla MACE and 1/r^12-augmented MACE"
                    className="mx-auto block h-[min(60vw,320px)] w-auto max-w-full object-contain sm:h-[360px]"
                  />
                </div>
              </div>
            </FigureBlock>
          </div>

          <div className="mt-8">
            <FailureRatesTable />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Close-range repulsion failures across pretrained interatomic potentials measured under a compression diagnostic from 0.7 Å to 0.2 Å. 
            </p>  
          </div>
        </Section>

        <Section id="adjoint-sampling" title="Adjoint Sampling">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Adjoint sampling serves as the primary downstream evaluation of whether these local short-range differences affect generative behavior. Sampling under the true analytic Lennard-Jones (LJ) potential establishes a reference distribution for physically meaningful generation on LJ13 energy. The same sampling procedure is then applied using learned MACE energy functions to assess how each model behaves when used as a generative energy landscape.
            </p>
            <p>
              This evaluation shows that the short-range weaknesses observed in vanilla MACE translate into downstream sampling failures as generated structures contain unphysically short interatomic distances and correspondingly high true LJ energies. In contrast, the <R12Term />-augmented MACE model produces more physically consistent samples, with pair-distance and energy distributions that align more closely with the reference distribution (long Langevin dynamics simulation with the true LJ potential).
            </p>
          </div>

          <div className="mt-8">
            <FigureBlock
              caption="Adjoint sampling under learned MACE energy landscapes."
            >
              <AdjointSamplingComparison />
            </FigureBlock>
          </div>

          <div className="mt-8">
            <FigureBlock
              caption={
                <>
                  Pair-distance and energy distributions of adjoint sampling with vanilla MACE (left) and <R12Term />-augmented MACE (right) on LJ13. Sampling against vanilla MACE samples unphysically short interatomic distances (top left), for which MACE predicts low energies (bottom left, orange), but which have extremely high true LJ energies (bottom left, blue). Sampling against the repulsion-augmented MACE model produces more physically consistent structures that match the correct modes of the reference distribution (top right).
                </>
              }
            >
              <HistogramFigures />
            </FigureBlock>
          </div>
        </Section>

        <Section id="main-takeaway" title="Main Takeaway" light={true}>
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>Compared with vanilla MACE, the repulsion-augmented model:</p>
            <BulletList items={takeawayBullets} />
            <p>
              More broadly, these results show that MLIP evaluation should include targeted short-range repulsion diagnostics, since standard energy and force metrics may not reveal failures in compressed regions of configuration space that become apparent only when a learned potential is used as a generative energy landscape. Repulsion diagnostics on MACE-OMol and FairChem models further suggest that close-range reliability is a general evaluation concern for learned interatomic potentials.
            </p>
            <p>
              <span className="block">Questions, comments, or ideas? Please reach out!</span>
              <span className="block">sophia.geng (at) mail.utoronto.ca</span>
              <span className="block">me (at) andreas-burger.com</span>
            </p>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm leading-7 text-slate-600">
              If you found this helpful for your own research, please cite:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5 text-left text-xs leading-6 text-slate-700">
{`@misc{geng2026attractingtrouble,
  title = {Attracting Trouble? How Generative Modelling Fails with MLIPs},
  author = {Geng, Sophia and Burger, Andreas and Bernales, Varinia and Aspuru-Guzik, Alán},
  year = {2026},
  url = {https://sophiageng0808.github.io/attracting-trouble/}
}`}
            </pre>
          </div>
        </div>
      </footer>
    </div>
  );
}