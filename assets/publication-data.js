// Verified links and citation fields; academic statuses remain sourced from the CV.
// Abstract summaries are paraphrases, not publisher abstracts. Missing values are intentional.
const publicationDetails = {
  "SkillSpec: A formally verifiable specification format for composing agent skills.": {
    "key": "babaei-skillspec",
    "type": "inproceedings",
    "author": "M. Babaei and A. Heydarnoori",
    "booktitle": "49th IEEE/ACM International Conference on Software Engineering (ICSE)",
    "checked": "2026-10-26",
    "year": "2027",
    "note": "Research Track; to appear"
  },
  "RATEN: An efficient robustness analysis and test enhancement framework for state machines.": {
    "key": "babaei-raten",
    "type": "article",
    "author": "M. Babaei and Y.-G. Guéhéneuc",
    "journal": "Software and Systems Modeling",
    "checked": "2026-10-26",
    "year": "2026",
    "preprintUrl": "https://assets.ptidej.net/Publications/Documents/SoSym26.doc.pdf",
    "abstractSummary": "RATEN evaluates how finite-state-machine systems respond to unexpected messages, malformed payloads, and missing inputs. Behavioral and property models guide a quantitative assessment of deviations and recovery. The study also integrates this analysis with record-and-replay testing to select smaller regression test suites.",
    "abstractSource": "https://assets.ptidej.net/Publications/Documents/SoSym26.doc.pdf",
    "doi": "10.1007/s10270-026-01371-z",
    "paperUrl": "https://doi.org/10.1007/s10270-026-01371-z",
    "sources": [
      "https://doi.org/10.1007/s10270-026-01371-z",
      "https://assets.ptidej.net/Publications/Documents/SoSym26.doc.pdf"
    ]
  },
  "RapidPay: Identifying and prioritizing self-admitted technical debt chains for effective debt management in software systems.": {
    "key": "babaei-rapidpay",
    "type": "article",
    "author": "M. Babaei and N. Ezzati-Jivan and F. Hendijani Fard and A. Hamou-Lhadj",
    "journal": "Empirical Software Engineering",
    "checked": "2026-10-26",
    "note": "Accepted for publication; final publication details pending"
  },
  "TAAF: A trace abstraction and analysis framework synergizing knowledge graphs and LLMs.": {
    "key": "babaei-taaf",
    "type": "inproceedings",
    "author": "A. Ezaz and G. Khodabandeh and M. Babaei and N. Ezzati-Jivan",
    "booktitle": "48th IEEE/ACM International Conference on Software Engineering (ICSE)",
    "checked": "2026-10-26",
    "year": "2026",
    "doi": "10.1145/3744916.3787832",
    "paperUrl": "https://doi.org/10.1145/3744916.3787832",
    "sources": [
      "https://doi.org/10.1145/3744916.3787832"
    ],
    "pages": "1213--1224",
    "preprintUrl": "https://arxiv.org/abs/2601.02632",
    "abstractSummary": "TAAF helps developers investigate large execution traces by combining time-indexed knowledge graphs with language models. Questions retrieve relevant graph context rather than requiring custom trace-analysis scripts. The work introduces TraceQA-100, a benchmark grounded in kernel traces, and evaluates where graph context improves reasoning and where limitations remain.",
    "abstractSource": "https://arxiv.org/abs/2601.02632"
  },
  "SIKG: A semantic impact knowledge graph approach for adaptive test selection and prioritization.": {
    "key": "babaei-sikg",
    "type": "inproceedings",
    "author": "M. Babaei and N. Ezzati-Jivan and L. Wei",
    "booktitle": "ICSE Companion, Poster Track",
    "checked": "2026-10-26",
    "year": "2026",
    "doi": "10.1145/3774748.3795655",
    "paperUrl": "https://doi.org/10.1145/3774748.3795655",
    "sources": [
      "https://doi.org/10.1145/3774748.3795655"
    ],
    "pages": "407--408",
    "abstractSummary": "SIKG combines semantic classification of source-code changes with propagation through an impact knowledge graph. Test results inform reinforcement-learning updates to graph weights and selection policies. A Visual Studio Code extension applies the approach to Python projects, investigating how semantic information can reduce testing effort while retaining fault detection.",
    "abstractSource": "https://conf.researchr.org/details/icse-2026/icse-2026-posters/4/SIKG-A-Semantic-Impact-Knowledge-Graph-Approach-for-Adaptive-Test-Selection-and-Prio"
  },
  "Utilizing graph neural networks for effective link prediction in microservice architectures.": {
    "key": "babaei-gnn-links",
    "type": "inproceedings",
    "author": "G. Khodabandeh and A. Ezaz and M. Babaei and N. Ezzati-Jivan",
    "booktitle": "16th ACM/SPEC International Conference on Performance Engineering (ICPE)",
    "checked": "2026-10-26",
    "year": "2025",
    "doi": "10.1145/3676151.3719362",
    "paperUrl": "https://doi.org/10.1145/3676151.3719362",
    "sources": [
      "https://doi.org/10.1145/3676151.3719362"
    ],
    "pages": "19--30",
    "preprintUrl": "https://arxiv.org/abs/2501.15019",
    "abstractSummary": "This study predicts future interactions between microservices using graph attention networks. It models the frequent, time-sensitive links in service call graphs through temporal segmentation and negative sampling. Evaluation on real-world traces examines prediction quality, with the aim of supporting proactive monitoring and resource management.",
    "abstractSource": "https://arxiv.org/abs/2501.15019"
  },
  "MemAdapt: Adaptive memory usage monitoring using irregularly sampled data.": {
    "key": "babaei-memadapt",
    "type": "inproceedings",
    "author": "P. Chakraborty and M. Babaei and L. Tahmooresnejad and N. Ezzati-Jivan",
    "booktitle": "34th International Conference on Collaborative Advances in Software and Computing (CASCON)",
    "checked": "2026-10-26",
    "year": "2024",
    "doi": "10.1109/CASCON62161.2024.10838037",
    "paperUrl": "https://doi.org/10.1109/CASCON62161.2024.10838037",
    "sources": [
      "https://doi.org/10.1109/CASCON62161.2024.10838037"
    ],
    "pages": "1--6",
    "abstractSummary": "MemAdapt studies memory monitoring when observations arrive at irregular intervals. The approach examines how sampling frequency affects estimates of memory usage and investigates forecasting models that can predict future behavior from unevenly sampled historical data.",
    "abstractSource": "https://majidbabaei.com/"
  },
  "Communication semantics for IoT-aware business process management systems.": {
    "key": "babaei-iot-semantics",
    "type": "inproceedings",
    "author": "M. Babaei",
    "booktitle": "6th IEEE/ACM International Workshop on Software Engineering Research and Practices for the IoT (SERP4IoT)",
    "checked": "2026-10-26",
    "year": "2024",
    "doi": "10.1145/3643794.3648273",
    "paperUrl": "https://doi.org/10.1145/3643794.3648273",
    "pages": "30--37",
    "sources": [
      "https://doi.org/10.1145/3643794.3648273"
    ]
  },
  "Efficient regression testing of distributed real-time reactive systems in the context of model-driven development.": {
    "key": "babaei-regression-testing",
    "type": "article",
    "author": "M. Babaei and J. Dingel",
    "journal": "Software and Systems Modeling",
    "checked": "2026-10-26",
    "year": "2023",
    "doi": "10.1007/s10270-023-01086-5",
    "paperUrl": "https://doi.org/10.1007/s10270-023-01086-5",
    "sources": [
      "https://doi.org/10.1007/s10270-023-01086-5"
    ],
    "pages": "1565--1587",
    "volume": "22",
    "number": "5",
    "abstractSummary": "MRegTest addresses the difficulty of detecting regressions in nondeterministic distributed real-time software. Its model-driven record-and-replay framework reproduces execution traces while providing control over the changed system. The evaluation compares regression detection, trace storage, and runtime overhead with approaches that record timestamps and variable values.",
    "abstractSource": "https://link.springer.com/article/10.1007/s10270-023-01086-5"
  },
  "ra4xstate: An efficient quantitative robustness analysis approach for statecharts.": {
    "key": "babaei-ra4xstate",
    "type": "inproceedings",
    "author": "M. Babaei and M. Ben-Attia",
    "booktitle": "5th IEEE/ACM International Workshop on Software Engineering Research and Practices for the IoT (SERP4IoT)",
    "checked": "2026-10-26",
    "year": "2023",
    "doi": "10.1109/SERP4IoT59158.2023.00013",
    "paperUrl": "https://doi.org/10.1109/SERP4IoT59158.2023.00013",
    "sources": [
      "https://doi.org/10.1109/SERP4IoT59158.2023.00013"
    ],
    "pages": "46--53"
  },
  "Efficient replay-based regression testing for distributed reactive systems in the context of model-driven development.": {
    "key": "babaei-replay-regression",
    "type": "inproceedings",
    "author": "M. Babaei and J. Dingel",
    "booktitle": "24th ACM/IEEE International Conference on Model Driven Engineering Languages and Systems (MODELS)",
    "checked": "2026-10-26",
    "year": "2021",
    "doi": "10.1109/MODELS50736.2021.00018",
    "paperUrl": "https://doi.org/10.1109/MODELS50736.2021.00018",
    "sources": [
      "https://doi.org/10.1109/MODELS50736.2021.00018"
    ],
    "abstractSummary": "The paper presents a model-driven replay framework for regression testing of distributed reactive systems. Rather than repeatedly rerunning a failing system and relying on chance to reproduce an execution, MRegTest uses recorded traces and execution control to help detect regressions. Evaluation considers detection quality, trace size, and runtime overhead.",
    "abstractSource": "https://ieeexplore.ieee.org/abstract/document/9592407"
  },
  "MRegTest: A replay-based regression testing tool for distributed UML-RT models.": {
    "key": "babaei-mregtest",
    "type": "inproceedings",
    "author": "M. Babaei and J. Dingel",
    "booktitle": "MODELS Companion",
    "checked": "2026-10-26",
    "year": "2021",
    "paperUrl": "https://ieeexplore.ieee.org/document/9643665",
    "sources": [
      "https://ieeexplore.ieee.org/document/9643665",
      "https://majidbabaei.com/"
    ]
  },
  "Efficient reordering and replay of execution traces of distributed reactive systems in the context of model-driven development.": {
    "key": "babaei-reordering-replay",
    "type": "inproceedings",
    "author": "M. Babaei and M. Bagherzadeh and J. Dingel",
    "booktitle": "23rd ACM/IEEE International Conference on Model Driven Engineering Languages and Systems (MODELS)",
    "checked": "2026-10-26",
    "year": "2020",
    "doi": "10.1145/3365438.3410939",
    "paperUrl": "https://doi.org/10.1145/3365438.3410939",
    "sources": [
      "https://doi.org/10.1145/3365438.3410939"
    ],
    "abstractSummary": "This work uses static analysis of communicating state-machine models to reconstruct execution order and replay distributed traces. The approach reduces dependence on detailed timestamp annotations and supports debugging through a centralized representation of the original system. An evaluation examines trace-storage savings and the cost of model interpretation.",
    "abstractSource": "https://qspace.library.queensu.ca/server/api/core/bitstreams/f12a22cf-d1a7-47eb-9328-7d6203b75aca/content"
  },
  "MReplayer: A trace replayer of distributed UML-RT models.": {
    "key": "babaei-mreplayer",
    "type": "inproceedings",
    "author": "M. Babaei and M. Bagherzadeh and J. Dingel",
    "booktitle": "MODELS Companion",
    "checked": "2026-10-26",
    "year": "2020",
    "doi": "10.1145/3417990.3422003",
    "paperUrl": "https://doi.org/10.1145/3417990.3422003",
    "sources": [
      "https://doi.org/10.1145/3417990.3422003"
    ]
  },
  "Solving the RoboSoccer challenge problem with UML-RT and Papyrus-RT.": {
    "key": "babaei-robosoccer",
    "type": "inproceedings",
    "author": "M. Babaei and K. Jahed and J. Dingel",
    "booktitle": "MODELS Companion",
    "checked": "2026-10-26",
    "year": "2019",
    "doi": "10.1109/MODELS-C.2019.00036",
    "paperUrl": "https://doi.org/10.1109/MODELS-C.2019.00036",
    "sources": [
      "https://doi.org/10.1109/MODELS-C.2019.00036"
    ],
    "pages": "221--227"
  },
  "A novel text and image encryption method based on chaos theory and DNA computing.": {
    "key": "babaei-dna-encryption",
    "type": "article",
    "author": "M. Babaei",
    "journal": "Natural Computing",
    "checked": "2026-10-26",
    "year": "2013",
    "doi": "10.1007/s11047-012-9334-9",
    "paperUrl": "https://doi.org/10.1007/s11047-012-9334-9",
    "sources": [
      "https://doi.org/10.1007/s11047-012-9334-9"
    ],
    "pages": "101--107",
    "volume": "12",
    "number": "1",
    "abstractSummary": "The paper investigates text and image encryption through a combination of one-time-pad techniques, chaotic dynamics, and DNA-inspired representations. A logistic map contributes to the encryption procedure, and simulations compare the proposed method with an AES implementation.",
    "abstractSource": "https://link.springer.com/article/10.1007/s11047-012-9334-9"
  },
  "Safe Coordination of Untrusted AI Agents.": {
    "key": "babaei-safe-coordination",
    "type": "unpublished",
    "author": "M. Babaei",
    "note": "Submitted manuscript. Target venue: IEEE Transactions on Software Engineering. Submission confirmed by the author, October 27, 2026.",
    "checked": "2026-10-27",
    "sources": [
      "https://github.com/ai4se4ai-lab/coordination-of-untrusted-ai-agents"
    ]
  },
  "use-hpc: Agent-configured, statically checked Slurm pipelines for large-scale GPU experiments.": {
    "key": "babaei-use-hpc",
    "type": "unpublished",
    "author": "M. Babaei",
    "note": "Under review manuscript. Target venue: ASE journal. Status from the author CV, October 2026.",
    "checked": "2026-10-26",
    "sources": [
      "docs/02_Curriculum_Vitae.tex"
    ]
  },
  "RES-AI: Evidence-bound readiness for AI software engineering experiments on shared HPC infrastructure.": {
    "key": "babaei-res-ai",
    "type": "unpublished",
    "author": "M. Babaei",
    "note": "Submitted manuscript. Target venue: ASE journal. Status from the author CV, October 2026.",
    "checked": "2026-10-26",
    "sources": [
      "docs/02_Curriculum_Vitae.tex"
    ]
  },
  "AgentM2M: M2M transformations for agentic collaborations in software engineering.": {
    "key": "babaei-agentm2m",
    "type": "unpublished",
    "author": "M. Babaei and S. Farshidi and O. Adesina and N. Ezzati-Jivan and L. Wei",
    "note": "Submitted manuscript. Target venue: ICSE 2027 NIER. Status from the author CV, October 2026.",
    "checked": "2026-10-26",
    "sources": [
      "docs/02_Curriculum_Vitae.tex"
    ]
  },
  "When the team writes itself: Reliable and traceable LLM-assembled agent teams through checked model transformations.": {
    "key": "babaei-autom2m",
    "type": "unpublished",
    "author": "M. Babaei",
    "note": "Submitted manuscript. Target venue: EMSE. Status from the author CV, October 2026.",
    "checked": "2026-10-26",
    "sources": [
      "docs/02_Curriculum_Vitae.tex"
    ]
  },
  "Understanding and detecting login flow errors in Android applications.": {
    "key": "babaei-liftdroid",
    "type": "unpublished",
    "author": "Z. Zhou and R. Chen and N. Yun and J. Chen and Y. Liu and M. Babaei and L. Wei",
    "note": "Under review manuscript. Target venue: IEEE TSE. Status from the author CV, October 2026.",
    "checked": "2026-10-26",
    "sources": [
      "docs/02_Curriculum_Vitae.tex"
    ]
  },
  "Mining design decisions and rationale evidence across research software projects.": {
    "key": "babaei-design-rationale",
    "type": "unpublished",
    "author": "S. Farshidi and M. Babaei and B. Tekinerdogan",
    "note": "Submitted manuscript. Target venue: MSR 2027. Status from the author CV, October 2026.",
    "checked": "2026-10-26",
    "sources": [
      "docs/02_Curriculum_Vitae.tex"
    ]
  },
  "Was it my code? Evidence-based performance diagnosis for CI on shared GPUs.": {
    "key": "babaei-gpu-diagnosis",
    "type": "unpublished",
    "author": "N. Ezzati-Jivan and M. Panahandeh and M. Babaei",
    "note": "Submitted manuscript. Target venue: ICSE 2027 NIER. Status from the author CV, October 2026.",
    "checked": "2026-10-26",
    "sources": [
      "docs/02_Curriculum_Vitae.tex"
    ]
  }
};
