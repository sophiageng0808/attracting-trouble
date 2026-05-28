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

const conclusionBullets: string[] = [
  "Sampler training explores atom–atom distances far outside MLIP training distributions",
  "Leading MLIPs can be attractive, not repulsive, at those distances, and samplers amplify that failure",
  "Targeted diagnostics can help design future MLIPs for generative sampling",
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
    id: "bannwarth2019gfn2xtb",
    title: "GFN2-xTB: An Accurate and Broadly Parametrized Self-Consistent Tight-Binding Quantum Chemical Method with Multipole Electrostatics and Density-Dependent Dispersion Contributions",
    url: "https://doi.org/10.1021/acs.jctc.8b01176",
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
    energyMonotonic: "1 / 17 = 5.88%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "6 / 17 = 35.29%",
  },
  {
    suite: "in-molecule",
    model: "MACE-OMol",
    modelUrl:
      "https://github.com/ACEsuit/mace-foundations/releases/download/mace_omol_0/MACE-omol-0-extra-large-1024.model",
    energyMonotonic: "250 / 1000 = 25.0%",
    pairForceMonotonic: "688 / 1000 = 68.8%",
    positiveForceAtMinDistance: "907 / 1000 = 90.7%",
  },
  {
    suite: "diatomic",
    model: "UMA-M-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-m-1p1.pt",
    energyMonotonic: "0 / 17 = 0.00%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "0 / 17 = 0.00%",
  },
  {
    suite: "diatomic",
    model: "UMA-S-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-s-1p1.pt",
    energyMonotonic: "0 / 17 = 0.00%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "1 / 17 = 5.88%",
  },
  {
    suite: "diatomic",
    model: "UMA-S-1P2",
    modelUrl: "https://huggingface.co/facebook/UMA",
    energyMonotonic: "0 / 17 = 0.00%",
    pairForceMonotonic: "0 / 17 = 0.00%",
    positiveForceAtMinDistance: "0 / 17 = 0.00%",
  },
  {
    suite: "in-molecule",
    model: "UMA-M-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-m-1p1.pt",
    energyMonotonic: "0 / 1000 = 0.00%",
    pairForceMonotonic: "0 / 1000 = 0.00%",
    positiveForceAtMinDistance: "4 / 1000 = 0.40%",
  },
  {
    suite: "in-molecule",
    model: "UMA-S-1P1",
    modelUrl: "https://huggingface.co/facebook/UMA/blob/main/checkpoints/uma-s-1p1.pt",
    energyMonotonic: "0 / 1000 = 0.00%",
    pairForceMonotonic: "0 / 1000 = 0.00%",
    positiveForceAtMinDistance: "21 / 1000 = 2.10%",
  },
  {
    suite: "in-molecule",
    model: "UMA-S-1P2",
    modelUrl: "https://huggingface.co/facebook/UMA",
    energyMonotonic: "0 / 1000 = 0.00%",
    pairForceMonotonic: "0 / 1000 = 0.00%",
    positiveForceAtMinDistance: "166 / 1000 = 16.60%",
  },
  {
    suite: "diatomic",
    model: "GFN2-xTB",
    energyMonotonic: "17 / 17 = 100.0%",
    pairForceMonotonic: "17 / 17 = 100.0%",
    positiveForceAtMinDistance: "17 / 17 = 100.0%",
  },
  {
    suite: "in-molecule",
    model: "GFN2-xTB",
    energyMonotonic: "946 / 1000 = 94.6% (not converged)",
    pairForceMonotonic: "946 / 1000 = 94.6% (not converged)",
    positiveForceAtMinDistance: "946 / 1000 = 94.6% (not converged)",
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
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">System</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">Model / method</th>
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

function HistogramFigures() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
          Pair-distance histogram
        </div>
        <img
          src={`${import.meta.env.BASE_URL}assets/pair_distance_histograms_by_type.png`}
          alt="Pair-distance histograms comparing vanilla MACE and 1/r^12-augmented MACE against the reference"
          className="block w-full"
        />
      </div>
      <div>
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
          Energy histogram
        </div>
        <img
          src={`${import.meta.env.BASE_URL}assets/energy_histograms_by_type.png`}
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
            <a href="#introduction" className="hover:text-slate-900">Background</a>
            <a href="#sampling-failure" className="hover:text-slate-900">Sampling failure</a>
            <a href="#repulsion-diagnostic" className="hover:text-slate-900">Diagnosis</a>
            <a href="#repulsion-fix" className="hover:text-slate-900">Fix</a>
            <a href="#conclusions" className="hover:text-slate-900">Conclusions</a>
            <a href="#references" className="hover:text-slate-900">References</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <div className="text-center">
              <h1 className="mx-auto max-w-4xl font-serif text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Attracting Trouble?
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-slate-700 md:text-2xl">
                How MLIPs fail for diffusion-based sampling
              </p>
              <div className="mt-6 text-base text-slate-700">
                Sophia Geng<sup>1</sup>, Andreas Burger<sup>1,2,3</sup>, Varinia Bernales<sup>1,4</sup>, Alán Aspuru-Guzik<sup>1,2,3,4</sup>
              </div>
              <div className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                <sup>1</sup> University of Toronto · <sup>2</sup> Vector Institute · <sup>3</sup> NVIDIA · <sup>4</sup> Acceleration Consortium
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                Diffusion-based samplers trained on MLIPs can generate unphysical structures with clashing atoms.
                We trace this failure to a short-range pathology: state-of-the-art MLIPs sometimes assign low energies and attractive forces to configurations where atoms are already too close.

                Using the Lennard-Jones 13-atom cluster (LJ13) as a test system, we show that an additive <R12Term /> repulsive term restores the short-range barrier and produces more physically realistic samples than vanilla MACE.
              </p>
            </div>
          </div>
        </section>

        <Section id="abstract" title="Abstract" light={true}>
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Diffusion-based samplers are generative models that can generate molecular configurations, potentially replacing the need for long molecular dynamics simulations. They can be trained directly on energies and forces, without precollected data. Machine learning interatomic potentials (MLIPs) could make this tractable by replacing expensive quantum chemistry energy and force calculations.
            </p>
            <p>
              Yet we observe that diffusion-based sampling with MLIPs can fail in practice. During the noising phase of training, the sampler discovers clashing-atom structures that the learned potential scores too favorably. On LJ13, vanilla MACE samples contain unrealistically short pair distances corresponding to extremely large energies, even though MACE assigns them low energies.
            </p>
            <p>
              We find that state-of-the-art MLIPs like MACE and UMA can predict <em>low</em> energies and <em>attractive</em> forces when atoms are too close, where the energy should instead rise sharply. An additive <R12Term /> repulsive term recovers the correct short-range behavior and improves Adjoint Schrödinger Bridge Sampler (ASBS) samples on LJ13.
            </p>
          </div>
        </Section>

        <Section id="introduction" title="Background: MLIPs for diffusion-based sampling">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Diffusion-based samplers
              <sup>
                <a href="#neural-samplers-note" className="ml-0.5 text-slate-500 hover:text-slate-900">1</a>
              </sup>{" "}
              are generative models that generate molecular structures according to a distribution, usually the Boltzmann distribution
              <Citation ids={["noe2019boltzmann", "zhang2021path", "vargas2023denoising", "akhoundsadegh2024iterateddenoisingenergymatching", "berner2022optimal"]} />.
            </p>

            <EquationBlock>
              <span className="italic">p</span>
              <span>(x) ∝ e</span>
              <sup className="text-[0.7em] align-[0.55em]">
                -E(x)/(<KBTerm />T)
              </sup>
            </EquationBlock>

            <p>
              By structures or configurations, we mean the 3D coordinates of the atomic nuclei,{" "}
              <InlineMath>
                <span className="italic">x</span> ∈ ℝ
                <sup>3N</sup>
                <sub>Atoms</sub>
              </InlineMath>.
              This means these samplers generate low-energy structures more often than high-energy structures. These Boltzmann-distributed samples represent the same equilibrium structures that would be observed in long molecular dynamics (MD) simulations. A trained generative sampler can therefore replace costly MD to estimate static observables.
            </p>

            <p>
              Like regular diffusion models, these samplers learn the Stein score of the distribution,{" "}
              <InlineMath>∇<sub>x</sub> log p(x)</InlineMath>, which is related to the force by{" "}
              <InlineMath>
                ∇<sub>x</sub> log p(x) = -∇<sub>x</sub> E(x) / <KBTerm />T = F(x) / <KBTerm />T
              </InlineMath>.
              Unlike regular diffusion models, diffusion-based samplers are not trained on data; instead, they are trained reinforcement-learning-style on energies and forces. Very roughly, the diffusion model predicts a structure, we evaluate its energies and forces, and update the diffusion model to prefer structures with lower energy.
              <Citation ids={["akhoundsadegh2024iterateddenoisingenergymatching", "havens2025adjoint", "liu2026adjoint", "bridge2026matching"]} />.
            </p>

            <p>
              Machine learning interatomic potentials (MLIPs) provide a way to get these energies and forces for 3D structures. MLIPs are trained on precollected datasets of expensive quantum chemistry calculations, such as density functional theory (DFT). The datasets for MLIPs are usually structures from molecular dynamics, which are very different from the noisy structures encountered during training of diffusion-based samplers.
              <Citation ids={["thiede2026mole", "burger2025hip"]} />.
            </p>

            <p>
              For example, the usual equilibrium bond distance between two atoms is <InlineMath>0.75-1.55 Å</InlineMath>. The smallest distance between any two atoms in the 4M split of the OMol25 dataset is{" "}
              <InlineMath>0.4 Å</InlineMath>. Meanwhile, untrained diffusion-based samplers routinely generate geometries with atoms unrealistically close to each other <InlineMath>&lt;&lt; 0.1 Å</InlineMath>. This creates a distribution shift between the structures used to train MLIPs and the structures encountered during sampler training.
            </p>

            <p id="neural-samplers-note" className="border-t border-slate-200 pt-3 text-sm leading-6 text-slate-500">
              <sup>1</sup> Diffusion-based samplers are also called neural samplers, which can include normalizing flows.
            </p>
          </div>
        </Section>

        <Section id="sampling-failure" title="The symptom: clashing atoms in the distribution">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              We first observed the problem when training a diffusion-based sampler using a commonly used MLIP. To reproduce this in a controlled environment, we use the Adjoint Schrödinger Bridge Sampler (ASBS) to generate LJ13 structures from the Boltzmann distribution. As the energy function we train a MACE MLIP on the reference distribution. The reference distribution was obtained by sampling the true analytic Lennard-Jones potential with Langevin dynamics by prevous works.
              <Citation ids={["havens2025adjoint", "liu2026adjoint"]} />
            </p>
            <p>
              With vanilla MACE, ASBS generates structures with atoms much too close together. These structures have extremely high true LJ energies, but vanilla MACE assigns them low learned energies, so the sampler treats them as favorable.
            </p>
          </div>

          <div className="mt-8">
            <FigureBlock
              caption={
                <>
                  Pair-distance and energy distributions from ASBS on LJ13. Sampling against vanilla MACE produces unphysically short interatomic distances (top left), which MACE scores as low energy (bottom left, orange) despite their extremely high true LJ energies (bottom left, blue). The <R12Term />-augmented result on the right shows the same evaluation after adding the short-range repulsive term.
                </>
              }
            >
              <HistogramFigures />
            </FigureBlock>
          </div>
        </Section>

        <Section id="repulsion-diagnostic" title="Diagnosing the problem: lack of repulsion at close ranges">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              To test the short-range repulsion of commonly used MLIPs directly, we use two "compression scans".
              First, we select a few of the most common atom pairs and scan the pair separation from <InlineMath>0.30 Å</InlineMath> down to <InlineMath>0.03 Å</InlineMath> on a 30-point distance grid.
              Then, we distort real OMol molecular geometries. For each sampled structure, we choose an atom <InlineMath>i</InlineMath>, identify its nearest neighbor <InlineMath>j</InlineMath>, and move one atom toward the other using the same grid. At these short distances, the energy should rise sharply, and the force should be repulsive.
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
              <span> - </span>
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
              Similarly, MLIP arena <Citation ids={["chiang2026mlip"]} /> uses Spearman's coefficients to measure the monotonicity of the potential energy at short interatomic distances. The MinDScAIP paper <Citation ids={["liu2026evaluation"]} /> introduced the Bond Smoothness Characterization Test (BSCT) to identify discontinuities, artificial minima, and spurious forces, both near and far from equilibrium.
            </p>
            <p>
              As a baseline, we use the fast, trusted GFN2-xTB <Citation ids={["bannwarth2019gfn2xtb"]} />. GFN2-xTB passes all checks except for a few calculations where the self-consistent field (SCF) convergence fails.
              This simple heuristic test shows that commonly used MLIPs fail to reproduce the correct short-range repulsion, and that failure is not limited to a single architecture.
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
                    src={`${import.meta.env.BASE_URL}assets/proper_xyz_animate_trajectory.gif`}
                    alt="Animated 3D molecular trajectory for the short-range compression scan"
                    className="mx-auto block h-[min(60vw,320px)] w-auto max-w-full object-contain sm:h-[360px]"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}assets/final_compression_probe_two_model.gif`}
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
              Repulsion diagnostic pass rates across MACE-OMol, UMA checkpoints, and GFN2-xTB. Diatomic sweeps use 17 common element pairs. The in-molecule sweeps are based on 1000 OMol samples. For GFN2-xTB, all 946 converged in-molecule calculations passed all three checks, while the remaining 54 failed to converge.
            </p>
          </div>
        </Section>

        <Section id="repulsion-fix" title="A simple fix: adding a repulsion prior">
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              To address this failure, we augment MACE with an additive <R12Term /> repulsive term. At training and test time, MACE predicts the residual between the true energy and the repulsion prior. The goal here is to add the missing short-range barrier in the part of configuration space where clashing atoms appear during sampler training, while preserving the flexibility of MACE's learned many-body representation at longer distances.
              <Citation ids={["reschutzegger2026equivariant", "fdossantos2025improving"]} />.
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
              <sup className="text-[0.7em] align-[0.45em]">-12</sup>
            </EquationBlock>

            <p>
              where r<sub>ij</sub> is the distance between atoms i and j, s(r<sub>ij</sub>) is a cutoff function, and λ controls the strength of the additive repulsive term. Because forces are obtained from the energy gradient, the same term raises the energy and pushes atoms apart as they are compressed.
            </p>
            <p>
              Concurrently with our work, Geodite <Citation ids={["reschutzegger2026equivariant"]} /> models short-range repulsion using a term based on the Ziegler-Biersack-Littmark (ZBL) functional.
              A different approach could be to collect additional data. Physics-constrained data augmentation (PCDA) <Citation ids={["fdossantos2025improving"]} /> augments the training dataset with inexpensive data along dissociation curves generated from a Morse potential. Adding data introduces additional complexities, like balancing the data mixture and normalizing across multiple orders of magnitude, that we avoid with our approach.
            </p>
            <p>
              Evaluated using the same OMol25 compression scans, the <R12Term />-augmented model achieves a 0% failure rate on the repulsion diagnostic. Using the same correction during LJ13 sampling removes the clashing atoms from the distribution. The pair-distance and energy distributions move back toward the reference distribution and qualitatively match the location of the modes.
            </p>
          </div>
        </Section>

        <Section id="conclusions" title="Conclusions" light={true}>
          <div className="space-y-4 text-[15px] leading-7 text-slate-600">
            <p>
              Diffusion-based samplers trained on MLIPs can fail for a reason that is easy to miss on equilibrium benchmarks: the geometries encountered during sampler training are not the geometries used to fit the potential. Our compression scans and LJ13 ASBS experiments point to three conclusions:
            </p>
            <BulletList items={conclusionBullets} />
            <div className="pt-7">
              <h3 className="font-serif text-lg font-semibold tracking-tight text-slate-900">
                Future directions
              </h3>
              <div className="mt-4 space-y-4">
                <p>
                  MACE plus the <R12Term /> prior localizes the right modes, but does not yet match the reference distribution quantitatively. This may be because MACE was not trained long enough, because the sampler needs both attraction and repulsion constrained, for example with a harmonic potential around the equilibrium geometry as in adjoint sampling, or because the out-of-equilibrium forces, and therefore the score, remain poor even with delta learning.
                </p>
                <p>
                  We first observed this problem when training a diffusion-based sampler using our Hessian Interatomic Potential (HIP) model <Citation ids={["burger2025hip"]} />. It would also be interesting to extend the approach for higher-order derivatives, such as Hessians.
                </p>
                <p>
                  A recent paper from our group, MōLe <Citation ids={["thiede2026mole"]} />, showed that predicting the underlying coupled-cluster wavefunction leads to highly accurate models that extrapolates robustly to stretched and compressed geometries.
                </p>
              </div>
            </div>
            <p className="pt-7">
              <span className="block">Questions, comments, or ideas? Please reach out!</span>
              <span className="block pl-4">sophia.geng (at) mail.utoronto.ca</span>
              <span className="block pl-4">me (at) andreas-burger.com</span>
            </p>
          </div>
          <div className="h-14" aria-hidden="true" />
          <p className="text-sm leading-7 text-slate-600">
            If you found this helpful for your own research, please cite:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5 text-left text-xs leading-6 text-slate-700">
{`@misc{geng2026attractingtrouble,
  title = {Attracting Trouble? How MLIPs fail for diffusion-based sampling},
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