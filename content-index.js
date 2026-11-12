'use strict';

// Public summaries, maintained separately from rendering. Evidence stays in case-studies.js.
// Dates below are editorial dates, not claims of product release or client acceptance.
const projectBriefs = {
  nostudio: {
    problem: '面向品牌内容团队，把品牌资产、创作、审核与复用放在同一工作空间，解决资料分散、素材混用与重复沟通。',
    role: '梳理商品、素材与 Skill 的关联规则，将生产问题整理为需求、复现步骤与验收条件，协同研发联调。',
    result: '交付素材使用规则、端到端验证报告和问题清单，将生产异常转成研发可复现、可验收的事项。',
    flow: [
      ['INPUT / 输入', '商品资料、参考素材、创作需求与生产反馈'],
      ['PROCESS / 处理', '关联商品与素材 → 网页创作 → 回看任务、质检与反馈'],
      ['OUTPUT / 输出', '可检索的商品资产、生成记录与内容结果']
    ],
    detailLabel: '展开协作分工与产品关系',
    evidenceLabel: '查看需求讨论与工作记录'
  },
  notv: {
    problem: '面向 AIGC 生产同学，解决脚本、素材、提示词和生成任务来回切换，同类商品反复配置的问题。',
    role: '负责原 NoTV 阶段从 0 到 1 的流程定义、SKU Skill / Meta Skill、测试与培训；与算法工程团队协作，将创作经验转成可执行的生产流程。',
    result: '形成可复用的批量生产链路与团队教学材料；并发提交减少逐条操作与等待，商品幻觉率降低约 60%，减少重复生成与试错成本。',
    flow: [
      ['INPUT / 输入', '脚本、商品事实、参考素材与 SKU Skill'],
      ['PROCESS / 处理', '编排 Prompt 与素材 → 审核计划 → CLI / MCP 并发提交 → 质检修改'],
      ['OUTPUT / 输出', '可审核的视频素材、修改记录与可复用生产规则']
    ],
    detailLabel: '职责边界与成效口径',
    evidenceLabel: '查看 Skill 示例与工作记录'
  },
  yogurt: {
  "problem": "督导需要从分散数据中判断哪些店要巡、先巡哪家、到店查什么，再跟踪整改。项目把这些判断拆成可复算的风险规则、任务触发条件和执行方案，减少依赖个人经验及重复协调。",
  "role": "负责业务翻译：梳理六维门店健康评估、月度排期、事件重排及整改复核；定义逐环节输入输出、接口复用与新增工具需求、Skill 调用条件和人工确认点，与算法工程团队对齐实现和验收样例。 底层工具、数据接入与工程开发由研发实现。",
  "result": "交付业务方案、接口与 Skill 需求；构建 1,339 条门店月度案例和可复算脚本，交付覆盖 88 家门店的评审材料。将重复核算转为批量试算，为督导核验和规则调优提供依据。",
  "flow": [
    [
      "INPUT / 输入",
      "经营、巡检、客诉、门店状态、督导归属与日程"
    ],
    [
      "PROCESS / 处理",
      "确认应巡名单 → 风险排序 → 排期与任务编排 → 整改复核"
    ],
    [
      "OUTPUT / 输出",
      "巡店日历、风险证据与检查任务单、整改与复核要求"
    ]
  ],
  "detailLabel": "名单与优先级、异常规则、分工及效果口径",
  "evidenceLabel": "查看业务流程、关键判断与交付依据"
}
};

// Add a record here and its body in projects (app.js); the index and search update together.
const notebookEntries = [
  {id:'note-quality', category:'生产方法', title:'为什么先验证一条，再批量生成？', description:'把素材、规则、模型与平台问题分开定位，再决定修改和重跑范围。', tags:['AIGC','质量验证'], related:'notv'},
  {id:'note-business', category:'业务翻译', title:'把“应该先巡哪家店”变成可执行的规则', description:'分清任务名单、优先级与排期约束，让业务和研发讨论同一个问题。', tags:['Agent','规则设计'], related:'yogurt'},
  {id:'model-boundaries', category:'模型评估', title:'判断模型能力边界，而不只比较画面好不好看', description:'从商品保真、文字、动作与一致性出发，选择生成、实拍或后期方案。', tags:['AIGC','模型选型'], related:'notv'},
  {id:'note-training', category:'团队协作', title:'从自己会用，到让团队也能用起来', description:'把操作、检查点与常见问题留成可以回看的录屏和方法。', tags:['培训','方法复用'], related:'notv'}
];
