// Qualitative editorial placement by research focus, not a measured AI/SE score.
// Keys keep the layout stable when projects are reordered in the portfolio.
const researchPlacement = {
  'Safe Coordination of Untrusted AI Agents': {x:22,y:90,world:'ai',nodeLabel:'Untrusted AI',label:'Formal coordination for AI agents',reason:'A deterministic software controller structures untrusted AI proposals through explicit dependencies and guarded publication.',related:['AgentM2M','AutoM2M','SkillSpec']},
  'AutoM2M': {x:22,y:45,world:'ai',label:'AI systems → reliable teams',reason:'LLM-assembled agent teams are the subject; checked transformations make their collaboration reliable.',related:['AgentM2M','SkillSpec']},
  'RES-AI': {x:20,y:62,world:'ai',label:'Engineering for AI',reason:'Readiness evidence supports trustworthy AI experiments on shared infrastructure.',related:['use-hpc']},
  'use-hpc': {x:24,y:80,world:'ai',label:'Engineering for AI',reason:'Agent-configured experiment pipelines connect AI research with checked execution infrastructure.',related:['RES-AI']},
  'TAAF / TraceQA-100': {x:49,y:42,world:'bridge',label:'AI for software understanding',reason:'Language models and knowledge graphs turn software execution traces into explainable answers.',related:['SIKG']},
  'AgentM2M': {x:51,y:55,world:'bridge',label:'Model-driven agent collaboration',reason:'Software modeling and typed transformations structure the collaboration of AI agents.',related:['AutoM2M','SkillSpec']},
  'SkillSpec': {x:49,y:68,world:'bridge',label:'Formal methods for AI skills',reason:'Verifiable software contracts sit between agent capabilities and dependable skill composition.',related:['AgentM2M','AutoM2M']},
  'SIKG': {x:52,y:82,world:'bridge',label:'AI for software testing',reason:'Semantic knowledge graphs connect intelligent impact analysis with test selection and prioritization.',related:['TAAF / TraceQA-100','MRegTest']},
  'RapidPay': {x:78,y:43,world:'se',label:'Software maintenance',reason:'The central task is identifying and prioritizing technical-debt chains in software systems.',related:['SIKG']},
  'RATEN / ra4xstate': {x:80,y:58,world:'se',label:'Software robustness',reason:'State-machine properties and quantitative robustness analysis support test enhancement.',related:['MRegTest']},
  'MRegTest': {x:78,y:74,world:'se',label:'Software regression testing',reason:'Deterministic replay supports regression testing of distributed software models.',related:['MReplayer','RATEN / ra4xstate']},
  'MReplayer': {x:80,y:90,world:'se',label:'Software execution & replay',reason:'Model analysis reconstructs and replays distributed system executions.',related:['MRegTest']}
};
