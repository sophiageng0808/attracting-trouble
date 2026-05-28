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

type DiagnosticResultRow = {
  suite: string;
  model: string;
  modelUrl?: string;
  sweeps: string;
  calcSuccess: string;
  energyMonotonic: string;
  pairForceMonotonic: string;
  positiveForceAtMinDistance: string;
};

type Reference = {
  id: string;
  title: string;
  url: string;
  secondaryUrl?: string;
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

const references: Reference[] = [
  {
    id: "noe2019boltzmann",
    title: "Boltzmann generators: Sampling equilibrium states of many-body systems with deep learning",
    url: "https://www.science.org/doi/10.1126/science.aaw1147",
  },
  {
    id: "zhang2021path",
    title: "Path Integral Sampler: a stochastic control approach for sampling",
    url: "https://arxiv.org/abs/2111.15141",
  },
  {
    id: "vargas2023denoising",
    title: "Denoising Diffusion Samplers",
    url: "https://arxiv.org/abs/2302.13834",
  },
  {
    id: "akhoundsadegh2024iterateddenoisingenergymatching",
    title: "Iterated Denoising Energy Matching for Sampling from Boltzmann Densities",
    url: "https://arxiv.org/abs/2402.06121",
  },
  {
    id: "berner2022optimal",
    title: "An optimal control perspective on diffusion-based generative modeling",
    url: "https://arxiv.org/abs/2211.01364",
  },
  {
    id: "havens2025adjoint",
    title: "Adjoint Sampling: Highly Scalable Diffusion Samplers via Adjoint Matching",
    url: "https://openreview.net/forum?id=6Eg1OrHmg2",
    secondaryUrl: "https://github.com/facebookresearch/adjoint_sampling",
  },
  {
    id: "liu2026adjoint",
    title: "Adjoint Schrödinger Bridge Sampler",
    url: "https://proceedings.neurips.cc/paper_files/paper/2025/hash/174692c52dc84fad2b2e99dd8637ce6a-Abstract-Conference.html",
    secondaryUrl: "https://github.com/facebookresearch/adjoint_samplers",
  },
  {
    id: "bridge2026matching",
    title: "Bridge Matching Sampler: Scalable Sampling via Generalized Fixed-Point Diffusion Matching",
    url: "https://arxiv.org/abs/2603.00530",
  },
  {
    id: "chiang2026mlip",
    title: "MLIP arena: Advancing fairness and transparency in machine learning interatomic potentials via an open, accessible benchmark platform",
    url: "https://proceedings.neurips.cc/paper_files/paper/2025/hash/bfa45223cc236855dbaa5c468c809896-Abstract-Datasets_and_Benchmarks_Track.html",
  },
  {
    id: "liu2026evaluation",
    title: "From Evaluation to Design: Using Potential Energy Surface Smoothness Metrics to Guide Machine Learning Interatomic Potential Architectures",
    url: "https://arxiv.org/abs/2602.04861",
  },
  {
    id: "reschutzegger2026equivariant",
    title: "Equivariant Interatomic Potentials without Tensor Products",
    url: "https://arxiv.org/abs/2601.15492",
  },
  {
    id: "fdossantos2025improving",
    title: "Improving bond dissociations of reactive machine learning potentials through physics-constrained data augmentation",
    url: "https://pubs.acs.org/doi/10.1021/acs.jcim.4c01847",
  },
  {
    id: "thiede2026mole",
    title: "Coupled Cluster con MoLe: Molecular Orbital Learning for Neural Wavefunctions",
    url: "https://openreview.net/forum?id=i5QhkUCzJh",
  },
  {
    id: "burger2025hip",
    title: "Shoot from the HIP: Hessian Interatomic Potentials without derivatives",
    url: "https://arxiv.org/abs/2509.21624",
  },
];

const diagnosticResultRows: DiagnosticResultRow[] = [
  {
    suite: "diatomic",
    model: "MACE-OMol",
    modelUrl:
      "https://github.com/ACEsuit/mace-foundations/releases/download/mace_omol_0/MACE-omol-0-extra-large-1024.model",
    sweeps: "17",
    calcSuccess: "17 / 17 = 100.0%",
    energyMonotonic: "1 / 17 = 5.88%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "6 / 17 = 35.29%",
  },
  {
    suite: "in-molecule",
    model: "MACE-OMol",
    modelUrl:
      "https://github.com/ACEsuit/mace-foundations/releases/download/mace_omol_0/MACE-omol-0-extra-large-1024.model",
    sweeps: "1000",
    calcSuccess: "1000 / 1000 = 100.0%",
    energyMonotonic: "250 / 1000 = 25.0%",
    pairForceMonotonic: "688 / 1000 = 68.8%",
    positiveForceAtMinDistance: "907 / 1000 = 90.7%",
  },
  {
    suite: "diatomic",
    model: "UMA-M-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-m-1p1.pt",
    sweeps: "17",
    calcSuccess: "17 / 17 = 100.0%",
    energyMonotonic: "0 / 17 = 0.00%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "0 / 17 = 0.00%",
  },
  {
    suite: "diatomic",
    model: "UMA-S-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-s-1p1.pt",
    sweeps: "17",
    calcSuccess: "17 / 17 = 100.0%",
    energyMonotonic: "0 / 17 = 0.00%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "1 / 17 = 5.88%",
  },
  {
    suite: "diatomic",
    model: "UMA-S-1P2",
    modelUrl: "https://huggingface.co/facebook/UMA",
    sweeps: "17",
    calcSuccess: "17 / 17 = 100.0%",
    energyMonotonic: "0 / 17 = 0.00%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "0 / 17 = 0.00%",
  },
  {
    suite: "in-molecule",
    model: "UMA-M-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-m-1p1.pt",
    sweeps: "1000",
    calcSuccess: "1000 / 1000 = 100.0%",
    energyMonotonic: "0 / 1000 = 0.00%",
    pairForceMonotonic: "0 / 1000 = 0.00%",
    positiveForceAtMinDistance: "4 / 1000 = 0.40%",
  },
  {
    suite: "in-molecule",
    model: "UMA-S-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-s-1p1.pt",
    sweeps: "1000",
    calcSuccess: "1000 / 1000 = 100.0%",
    energyMonotonic: "0 / 1000 = 0.00%",
    pairForceMonotonic: "0 / 1000 = 0.00%",
    positiveForceAtMinDistance: "21 / 1000 = 2.10%",
  },
  {
    suite: "in-molecule",
    model: "UMA-S-1P2",
    modelUrl: "https://huggingface.co/facebook/UMA",
    sweeps: "1000",
    calcSuccess: "1000 / 1000 = 100.0%",
    energyMonotonic: "0 / 1000 = 0.00%",
    pairForceMonotonic: "0 / 1000 = 0.00%",
    positiveForceAtMinDistance: "166 / 1000 = 16.60%",
  },
  {
    suite: "diatomic",
    model: "GFN2-xTB",
    sweeps: "17",
    calcSuccess: "17 / 17 = 100.0%",
    energyMonotonic: "17 / 17 = 100.0%",
    pairForceMonotonic: "17 / 17 = 100.0%",
    positiveForceAtMinDistance: "17 / 17 = 100.0%",
  },
  {
    suite: "in-molecule",
    model: "GFN2-xTB",
    sweeps: "1000",
    calcSuccess: "946 / 1000 = 94.6%",
    energyMonotonic: "946 / 1000 = 94.6%",
    pairForceMonotonic: "946 / 1000 = 94.6%",
    positiveForceAtMinDistance: "946 / 1000 = 94.6%",
  },
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

function Citation({ ids }: { ids: string[] }) {
  const citedReferences = ids
    .map((id) => {
      const referenceIndex = references.findIndex((reference) => reference.id === id);
      return referenceIndex >= 0 ? { id, number: referenceIndex + 1 } : null;
    })
    .filter((reference): reference is { id: string; number: number } => reference !== null);

  return (
    <sup className="whitespace-nowrap">
      {citedReferences.map((reference, idx) => (
        <React.Fragment key={reference.id}>
          <a href={`#ref-${reference.id}`} className="ml-0.5 text-slate-500 hover:text-slate-900">
            [{reference.number}]
          </a>
          {idx < citedReferences.length - 1 ? "," : null}
        </React.Fragment>
      ))}
    </sup>
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

function InlineMath({ children }: { children: React.ReactNode }) {
  return <span className="whitespace-nowrap font-serif text-slate-800">{children}</span>;
}

function KBTerm() {
  return (
    <>
      k<sub className="text-[0.7em] align-[-0.25em]">B</sub>
    </>
  );
}

function DiagnosticResultsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
      <table className="min-w-full border-collapse text-left text-xs">
        <thead>
          <tr style={{ backgroundColor: `${accent.mint}40` }}>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">Suite</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">Model / method</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">Sweeps</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">Calc success</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">Energy monotonic</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">Pair-force monotonic</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">
              Positive force at min distance
            </th>
          </tr>
        </thead>
        <tbody>
          {diagnosticResultRows.map((row, idx) => (
            <tr
              key={`${row.suite}-${row.model}`}
              style={{ backgroundColor: idx % 2 === 0 ? "white" : "rgba(248,250,252,0.7)" }}
            >
              <td className="whitespace-nowrap border-t border-slate-200 px-4 py-3 text-slate-600">
                {row.suite}
              </td>
              <td className="border-t border-slate-200 px-4 py-3 font-medium text-slate-900">
                {row.modelUrl ? (
                  <a
                    href={row.modelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap underline decoration-slate-300 underline-offset-4 hover:text-slate-950"
                  >
                    {row.model}
                  </a>
                ) : (
                  <span className="whitespace-nowrap">{row.model}</span>
                )}
              </td>
              <td className="whitespace-nowrap border-t border-slate-200 px-4 py-3 text-slate-600">
                {row.sweeps}
              </td>
              <td className="whitespace-nowrap border-t border-slate-200 px-4 py-3 text-slate-600">
                {row.calcSuccess}
              </td>
              <td className="whitespace-nowrap border-t border-slate-200 px-4 py-3 text-slate-600">
                {row.energyMonotonic}
              </td>
              <td className="whitespace-nowrap border-t border-slate-200 px-4 py-3 text-slate-600">
                {row.pairForceMonotonic}
              </td>
              <td className="whitespace-nowrap border-t border-slate-200 px-4 py-3 text-slate-600">
                {row.positiveForceAtMinDistance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const asbsPanels = [
  {
    title: "Vanilla MACE",
    src: "/gifs/adjoint_generation_vanilla_evolve.gif",
    alt: "ASBS under vanilla MACE energy collapsing",
    color: accent.coral,
  },
  {
    title: (
      <>
        <R12Term />-augmented MACE
      </>
    ),
    src: "/gifs/adjoint_generation_r12_evolve.gif",
    alt: "ASBS under 1/r^12-augmented MACE energy",
    color: accent.gold,
  },
] as const;

function ASBSComparison() {
  return (
    <div className="space-y-2">
      <div className="grid gap-x-4 md:grid-cols-2">
        {asbsPanels.map((panel) => (
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
        {asbsPanels.map((panel) => (
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
            <a href="#introduction" className="hover:text-slate-900">Introduction</a>
            <a href="#repulsion-diagnostic" className="hover:text-slate-900">Repulsion diagnostic</a>
            <a href="#repulsion-fix" className="hover:text-slate-900">Repulsion fix</a>
            <a href="#asbs" className="hover:text-slate-900">ASBS</a>
            <a href="#main-takeaway" className="hover:text-slate-900">Main Takeaway</a>
            <a href="#references" className="hover:text-slate-900">References</a>
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
                How MLIPs fail in diffusion-based sampling
              </p>
              <div className="mt-6 text-base text-slate-700">
                Sophia Geng<sup>1</sup>, Andreas Burger<sup>1,2,3</sup>, Varinia Bernales<sup>1</sup>, Alán Aspuru-Guzik<sup>1,2,3</sup>
              </div>
              <div className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                <sup>1</sup> University of Toronto · <sup>2</sup> Vector Institute · <sup>3</sup> NVIDIA
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                Diffusion-based samplers trained on MLIPs can generate unphysical structures with clashing atoms.
                We trace this failure to a short-range pathology: state-of-the-art MLIPs sometimes assign low energies and attractive forces to configurations where atoms are already too close.

                Using the Lennard-Jones 13-atom cluster (LJ13) as a test system, we show that a simple <R12Term />-augmented MACE model produces more physically realistic samples than vanilla MACE.
              </p>
            </div>
          </div>
        </section>

        <Section id="abstract" title="Abstract" light={true}>
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Diffusion-based samplers are generative models that can generate molecular configurations to replace the need for long molecular dynamics simulations. They can be trained without precollected data, by training directly on energies and forces. Machine learning interatomic potentials (MLIPs) could make this tractable by replacing expensive quantum chemistry energy and force calculations. 
            </p>
            <p>
              Yet we observe that training diffusion-based samplers with MLIPs fails in practice. Diffusion-based samplers generate noisy structures during training with atoms close together.
              At short range, the energy should rise sharply and the forces should repel atoms apart. 
            </p>
            <p>
            We find that state of the art MLIPs like MACE and UMA often predict <em>low</em> energies and <em>attractive</em> forces for small atom distances, which leads the sampler to generate unphysical structures.
            We further show that adding a simple <R12Term /> repulsive prior to MACE to recover the correct short-range behvaviour, and locate the correct modes of the distribution with the Adjoint Schrödinger Bridge Sampler (ASBS) on Lennard-Jones 13-atom cluster (LJ13). 
            </p>
          </div>
        </Section>

        <Section id="introduction" title="Introduction">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Diffusion-based samplers
              <sup>
                <a href="#neural-samplers-note" className="ml-0.5 text-slate-500 hover:text-slate-900">1</a>
              </sup>{" "}
              are generative models that generate molecular structures proportional to a distribution, usually the Boltzmann distribution
              <Citation ids={["noe2019boltzmann", "zhang2021path", "vargas2023denoising", "akhoundsadegh2024iterateddenoisingenergymatching", "berner2022optimal"]} />
            </p>

            <EquationBlock>
              <span className="italic">p</span>
              <span>(x) ∝ e</span>
              <sup className="text-[0.7em] align-[0.55em]">
                −E(x)/(<KBTerm />T)
              </sup>
            </EquationBlock>

            <p>
            By structures or configurations, we mean the 3D coordinates of the atom nuclei,{" "}
              <InlineMath>
                <span className="italic">x</span> ∈ ℝ
                <sup>3N</sup>
                <sub>Atoms</sub>
              </InlineMath>
              .
              This means these samplers generate low-energy structures more often than high-energy structures. These Boltzmann-distributed samples represent the same equilibrium structures that would be observed in long molecular dynamics (MD) simulations. A trained generative sampler can therefore replace costly MD to estimate static observables.
            </p>

            <p>
              Like regular diffusion models, these samplers learn the Stein score of the distribution,{" "}
              <InlineMath>∇<sub>x</sub> log p(x)</InlineMath>, which is related to the force by{" "}
              <InlineMath>
                ∇<sub>x</sub> log p(x) = −∇<sub>x</sub> E(x) / <KBTerm />T = F(x) / <KBTerm />T
              </InlineMath>.
              Unlike regular diffusion models, diffusion-based samplers are not trained on data, but reinforcement-learning-style on energies and forces. Very roughly, the diffusion model predicts a structure, we evaluate the energies and forces, and update the diffusion model to prefer structures with lower energy.
              <Citation ids={["akhoundsadegh2024iterateddenoisingenergymatching", "havens2025adjoint", "liu2026adjoint", "bridge2026matching"]} />
            </p>

            <p>
              Machine learning interatomic potentials (MLIPs) provide a way to get these energies and forces for 3D structures. MLIPs are trained on pre-collected datasets of expensive quantum chemistry calculations, such as density functional theory (DFT). The datasets for MLIPs are usually structures from molecular dynamics, which are very different from the noisy structures encountered during training of diffusion-based samplers.
              <Citation ids={["thiede2026mole", "burger2025hip"]} />
            </p>

            <p>
              For example, the usual equilibrium bond distance of two atoms is <InlineMath>0.75-1.55 Å</InlineMath>. The smallest distance between any two atoms in the 4Mio split of the OMol25 dataset is{" "}
              <InlineMath>0.6 Å</InlineMath>. Meanwhile, untrained diffusion-based samplers routinely generate geometries with atoms unrealistically close to each other <InlineMath>&lt;&lt; 0.1 Å</InlineMath>. This creates a distribution shift between the structures used to train MLIPs and the structures encountered during sampler training.
            </p>

            <p id="neural-samplers-note" className="border-t border-slate-200 pt-3 text-sm leading-6 text-slate-500">
              <sup>1</sup> Diffusion-based samplers are part of a broader class sometimes called neural samplers, which can also include normalizing-flow-based models.
            </p>
          </div>
        </Section>

        <Section id="repulsion-diagnostic" title="Diagnosing short-range repulsion failures">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              To test whether MLIPs behave physically at very short distances, we distort real OMol molecular geometries and scan a selected pair separation from <InlineMath>0.30 Å</InlineMath> down to <InlineMath>0.03 Å</InlineMath> on a 30-point distance grid. For each sampled structure, we choose an atom <InlineMath>i</InlineMath>, identify its nearest neighbor <InlineMath>j</InlineMath>, and replace their separation while holding the pair midpoint and direction fixed.
              <Citation ids={["chiang2026mlip", "liu2026evaluation"]} />
            </p>
            <p>
              At each distance, we evaluate the predicted energy <InlineMath>E(r)</InlineMath> and the projected pair-separation force
            </p>

            <EquationBlock>
              <span className="italic">F</span>
              <sub className="text-[0.7em] align-[-0.35em] not-italic">rep</sub>
              <span>(r) = </span>
              <span className="inline-grid grid-rows-[auto_auto] justify-items-center align-middle leading-none mx-[0.18em]">
                <span>1</span>
                <span className="border-t border-slate-700 px-1">2</span>
              </span>
              <span>(</span>
              <span className="font-bold">F</span>
              <sub className="text-[0.7em] align-[-0.35em]">j</sub>
              <span> − </span>
              <span className="font-bold">F</span>
              <sub className="text-[0.7em] align-[-0.35em]">i</sub>
              <span>) · </span>
              <span className="font-serif">r̂</span>
              <sub className="text-[0.7em] align-[-0.35em]">ij</sub>
            </EquationBlock>

            <p>
              where <InlineMath>r̂<sub>ij</sub></InlineMath> points from atom <InlineMath>i</InlineMath> to atom <InlineMath>j</InlineMath>. Positive <InlineMath>F<sub>rep</sub></InlineMath> means the relative force pushes the atoms apart. A model passes the monotonic repulsion check when <InlineMath>E(r)</InlineMath> and <InlineMath>F<sub>rep</sub>(r)</InlineMath> increase as <InlineMath>r</InlineMath> decreases, and when <InlineMath>F<sub>rep</sub>(r) &gt; 0</InlineMath> at the shortest separation.
            </p>
            <p>
              Applied across pretrained MLIPs, including MACE-OMol and FairChem models, this diagnostic shows that short-range repulsion failures are widespread rather than specific to a single architecture.
            </p>
          </div>

          <div className="mt-8">
            <FigureBlock
              caption={
                <>
                  Short-range compression comparing vanilla MACE and <R12Term />-augmented MACE for two atoms compressed from 0.30 Å to 0.03 Å on a 30-point distance grid.
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
            <DiagnosticResultsTable />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Repulsion diagnostic pass rates across MACE-OMol, UMA checkpoints, and GFN2-xTB. Diatomic sweeps use 17 common element pairs; in-molecule sweeps use 1000 OMol contexts. For GFN2-xTB, all 946 converged in-molecule calculations passed all three checks; the remaining 54 were SCF convergence failures rather than non-repulsive converged predictions.
            </p>  
          </div>
        </Section>

        <Section id="repulsion-fix" title="A simple 1/r^12 repulsion fix">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              To address this failure mode, MACE is augmented with an explicit <R12Term /> repulsive prior, which introduces a physically motivated inductive bias in the region of the energy landscape associated with close atomic contacts while preserving the flexibility of MACE’s learned many-body representation at longer distances.
              <Citation ids={["reschutzegger2026equivariant", "fdossantos2025improving"]} />
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
        </Section>

        <Section id="asbs" title="Adjoint Schrödinger Bridge Sampler (ASBS)">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              The Adjoint Schrödinger Bridge Sampler (ASBS) serves as the primary downstream evaluation of whether these local short-range differences affect generative behavior. Sampling under the true analytic Lennard-Jones (LJ) potential establishes a reference distribution for physically meaningful generation on LJ13 energy. The same sampling procedure is then applied using learned MACE energy functions to assess how each model behaves when used as a generative energy landscape.
            </p>
            <p>
              This evaluation shows that the short-range weaknesses observed in vanilla MACE translate into downstream sampling failures as generated structures contain unphysically short interatomic distances and correspondingly high true LJ energies. In contrast, the <R12Term />-augmented MACE model produces more physically consistent samples, with pair-distance and energy distributions that align more closely with the reference distribution (long Langevin dynamics simulation with the true LJ potential).
            </p>
          </div>

          <div className="mt-8">
            <FigureBlock
              caption="ASBS under learned MACE energy landscapes."
            >
              <ASBSComparison />
            </FigureBlock>
          </div>

          <div className="mt-8">
            <FigureBlock
              caption={
                <>
                  Pair-distance and energy distributions from ASBS with vanilla MACE (left) and <R12Term />-augmented MACE (right) on LJ13. Sampling against vanilla MACE samples unphysically short interatomic distances (top left), for which MACE predicts low energies (bottom left, orange), but which have extremely high true LJ energies (bottom left, blue). Sampling against the repulsion-augmented MACE model produces more physically consistent structures that match the correct modes of the reference distribution (top right).
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
              <Citation ids={["chiang2026mlip", "liu2026evaluation"]} />
            </p>
            <p>
              <span className="block">Questions, comments, or ideas? Please reach out!</span>
              <span className="block">sophia.geng (at) mail.utoronto.ca</span>
              <span className="block">me (at) andreas-burger.com</span>
            </p>
          </div>
        </Section>

        <Section id="cite" title="Citation" light={true}>
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
        </Section>

        <Section id="references" title="References">
          <ol className="space-y-3 text-sm leading-6 text-slate-600">
            {references.map((reference, idx) => (
              <li id={`ref-${reference.id}`} key={reference.id} className="scroll-mt-24">
                <span className="font-medium text-slate-900">[{idx + 1}]</span>{" "}
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950"
                >
                  {reference.title}
                </a>
                {reference.secondaryUrl ? (
                  <>
                    {" "}
                    <a
                      href={reference.secondaryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                    >
                      code
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </Section>
      </main>
    </div>
  );
}