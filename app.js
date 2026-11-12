'use strict';

// All entries are local editorial content. No external API or account is required.
const skills = [
  {id:'sku',title:'SKU 视频 Skill 构建',kind:'工作流',categories:['workflow','video'],icon:'↗',tag:'商品资料 → 可复用生产规则',description:'把商品信息、卖点与素材约束，整理成可独立交付的 SKU 视频生产 Skill。',input:'商品 Brief、实拍素材、卖点与产品状态规则。',output:'包含规则、素材映射、示例与校验内容的 SKU Skill 包。',source:'sku-skill-builder',steps:['先理解商品结构、使用状态和卖点的证明方式。','明确素材角色，把脚本拆成可检查的生成单元。','生成自包含的规则包，并用代表性样例和 Badcase 回归检查。'],note:'构建 Skill 与执行视频生成是不同步骤。实际生产仍包含素材确认与质量审核。'},
  {id:'poster',title:'照片 → 艺术印刷海报',kind:'图像设计',categories:['image'],icon:'◩',tag:'真实照片 → 几何艺术海报',description:'保留照片里的主体与环境，把色彩、几何块面和印刷颗粒组织成完整画面。',input:'一张真实照片，可选的画法参考，以及需要保留的内容。',output:'完整海报 Prompt、艺术海报或原图与成品对照。',source:'photo-to-paper-poster',steps:['从照片辨认主体、姿态、环境和主要色域。','把场景简化为二维色块，保留关键辨识点与空间关系。','检查主体一致性、纸本颗粒和小字排版，按需要制作照片对照。'],note:'图像生成需要相应模型或工具；这里只展示方法与所需输入。'},
  {id:'footage',title:'实拍素材 → 短片',kind:'视频制作',categories:['video'],icon:'▷',tag:'已有素材 → 可修改的短片',description:'从照片、视频和音频出发，完成选片、排序、节奏、字幕与成片检查。',input:'本地照片或视频、期望时长与画幅；可选配乐和主题。',output:'短片、可修改的时间线与素材检查记录。',source:'footage-to-film',steps:['检查素材并抽帧，先看画面，再决定选片。','确定顺序、时长、裁切、字幕与转场，输出第一版。','检查画面、编码和转场；根据反馈修改时间线。'],note:'用于剪辑已有素材。音乐与人声字幕需要对应素材或可核对的转写。'},
  {"id": "meta", "title": "Meta Skill · 从新品到 SKU Skill", "kind": "工作流", "categories": ["workflow"], "icon": "↗", "tag": "新品资料 → 可用的 SKU Skill", "description": "把商品理解、卖点整理、素材映射与首条验证串成步骤，指引新手构建新品 SKU Skill。", "input": "新品资料、实拍图片 / 视频、卖点说明，以及品类通用规则。", "output": "商品事实与缺口、卖点和素材映射、SKU Skill 初稿与首条验证记录。", "source": "本人实践 · 新品 SKU Skill 构建方法", "credit": "个人构建 · 方法摘要", "provenance": "依据 2026 年 7 月商品模块讨论及本人实践整理，2026.10.26 核对。这里展示构建方法，完整 Skill 发布包另行整理。", "steps": ["先核对商品结构、颜色和使用状态，列出不清楚的地方，避免在错误理解上写规则。", "合并可共同表达的卖点，逐项确认图片或视频参考；复杂动作单独处理。", "把通用 Prompt、节奏和检查规则转成这个商品的 SKU Skill，明确不能生成的内容。", "用代表性脚本验证首条，区分素材缺口、规则问题、模型表现和平台故障，再更新 Skill。"], "note": "Meta Skill 指导构建新品 Skill；SKU Skill 执行具体商品任务。商品事实和素材选取仍需人工确认，不承诺任何品类都能自动一次通过。", "project": "notv"}
];

Object.assign(skills.find(skill=>skill.id==='sku'),{
  credit:'个人构建 · 方法摘要',
  provenance:'从 0 到 1 构建的商品视频生产规则方法。依据 NoTV 实操分享与商品模块讨论整理，2026.10.26 核对；完整发布包另行整理。',
  project:'notv'
});

const projects = {
  nostudio:{"title":"NoStudio（品牌内容创作与协作平台）","label":"品牌内容工作空间 / 商品与素材规则实践","lead":"面向品牌内容团队，将品牌资产、创作、审核与复用放在同一工作空间。","image":"assets/works/nostudio-current-records.webp","alt":"NoStudio 实践版本 · 2026.10 生成记录","productGuide":{"modules":[["创作","把需求变成内容","输入 Prompt、引用图片 / 视频 / 音频，选择模型与参数，发起多模态生成。"],["资产","把资料与结果存清楚","分类管理品牌、商品、人物、场景等素材，并集中查看生成记录。"],["Skill","把生产经验变成规则","按通用、商品创作、元 Skill 分类，检索、查看和发布可复用的技能包。"],["模板广场","从已有方案开始创作","按商品展示、口播、剧情等用途查找个人、团队或公开模板，也可从视频创建模板。"],["项目","按业务任务组织工作","按项目、商品或参与者查找项目，用状态与关注情况筛选，查看自己的进行中任务。"]],"evidence":[{"title":"商品与素材：先明确“生成哪个产品”","purpose":"解决商品资料、参考图片和生产素材分散，开工前反复找资料的问题。","src":"assets/works/nostudio-current-products.webp","alt":"NoStudio 商品管理页，展示商品资料、素材数量与项目关联","points":[["顶部资产分类","品牌、商品、人物、场景、动作库、音色等分开管理，方便按素材角色查找。"],["商品卡片","呈现商品名称、说明和素材 / 项目数量，把商品信息与相关资源放在同一入口。"],["检索与筛选","按商品名或 SPU 搜索，结合状态与排序定位目标商品。"]]},{"title":"多模态创作：把描述和参考素材一起交给模型","purpose":"解决提示词、素材与生成参数分开配置的问题，让一次任务的输入集中可见。","src":"assets/works/nostudio-current-creation.webp","alt":"NoStudio 创作页，包含生成类型、参考素材、Prompt、模型和参数选择","points":[["创作类型","切换视频、图片、音频、配音或音乐；按任务选择合适的生成方式。"],["Prompt 与素材","写清主体、场景、动作和镜头，通过参考素材与 @ 引用补充上下文。"],["模型与参数","选择模型、参考模式、画幅、清晰度和时长；导演模式支持拆分镜头。"]]},{"title":"生成记录：找到结果，再判断是否需要返修","purpose":"解决生成后不知道任务状态、结果在哪，以及同类产出难以回看的问题。","src":"assets/works/nostudio-current-records.webp","alt":"NoStudio 生成记录页，展示图片视频结果及状态与筛选项","points":[["结果卡片","直接预览图像与视频，查看任务类型、完成状态、结果数量和生成时间。"],["筛选与收藏","用状态、问题类型、搜索或收藏缩小范围，快速找到需要检查的结果。"],["人工判断","这里用于回看产出；商品是否准确、画面是否合格，仍需人工质检。"]]},{"title":"SkillHub：把有效方法留下来供下次使用","purpose":"解决同类商品反复整理规则、重新编写提示词，以及经验难以交接的问题。","src":"assets/works/nostudio-current-skills.webp","alt":"NoStudio SkillHub，展示商品创作 Skill 和元 Skill 的分类、版本与查看入口","points":[["分类与检索","区分通用 Skill、商品创作与元 Skill，通过名称、标签或状态查找。"],["版本与关联","列表显示技能说明、类别、版本和关联商品数量，便于识别适用范围。"],["图中实例","商品状态变化 Skill 约束电商演示镜头；sku-skill-builder 用于构建和改造商品 Skill。"]]}]},"sections":[["协作分工","我负责商品、素材与 Skill 的使用规则，以及需求整理和联调复测；平台底层开发、模型接入和接口工程由研发完成。"]],"note":"产品定位按 2026.11.09 官网更新；下方功能图解保留 2026.10.27 核对的实践版本。平台底层开发、模型接入和接口工程由研发完成。","links":[{"label":"查看 NoStudio 最新官网","url":"https://studio.nodesk.art/"}]},
  notv:{"title":"Studio Work（视频创作智能体）","label":"原 NoTV / NoDesk AI 工作项目","lead":"把脚本、素材、生成与返修串成可审核、可修改的生产流程。","image":"assets/product-updates/studio-work-20261109.png","alt":"NoTV / Studio Work 生产流程界面","sections":[["协作分工","我负责流程定义、商品规则与 Skill、测试验证和团队培训；客户端、后端与模型接口由研发实现。"],["60% 的口径","该比例来自个人生产实践估算，尚未经过统一样本的对照统计；并发提效与成本节省未单独给出量化幅度。"]],"note":"以原 NoTV 阶段的需求稿、实操录屏和工作记录说明我的贡献。新版产品截图来自 Studio Work 官网（2026.11.09 核对），用于说明产品现貌。","links":[{"label":"查看 Studio Work 最新产品页","url":"https://studio.nodesk.art/studio-work"}]},
  'yogurt-demo':{title:'茉酸奶 · 巡店日历',label:'项目界面 / 团队协作',lead:'以月历呈现巡店日期、城市及任务安排，展示排期方案在产品界面中的承载方式。',image:'assets/works/yogurt-calendar-demo.webp',alt:'茉酸奶智能督导巡店日历完整截图，人员与门店名称已遮挡',sections:[['我的分工','业务翻译、巡店排期规则与流程梳理，协同研发进行方案验证。界面与工程开发由团队研发同事完成。']],note:'团队项目界面，截图于 2026 年 10 月 27 日。人员与门店名称已遮挡，项目处于交付验证阶段。',links:[{label:'打开完整截图',url:'assets/works/yogurt-calendar-demo.webp'}]},
  yogurt:{"title": "茉酸奶 · 门店风险评估与智能巡店 Agent", "label": "企业 AI 应用 / 业务方案与评测交付", "lead": "将经营、巡检和客诉数据转成应巡名单、风险优先级和到店任务，衔接排期与整改复核。", "sections": [["项目要解决什么", "督导需要从分散数据中判断哪些店要巡、先巡哪家、到店查什么，再跟踪整改。项目把这些判断拆成可复算的风险规则、任务触发条件和执行方案，减少依赖个人经验及重复协调。"], ["两套判断｜名单与优先级", "应巡名单由巡店要求、门店状态和专项事件决定；优先级根据健康风险、问题复发与任务时限等排序。健康扣分不直接等于新增一次巡店，名单、评分和排期分别定义。"], ["输入输出与系统分工", "输入是经营、巡检、评论、门店状态及督导日程。核对门店编码、字段口径和缺数处理后，输出带风险原因、检查动作和期限的任务单及日历安排。Skill 负责流程编排，确定性工具负责数据与计算，慧运营承接执行和结果回传；底层工程由研发实现。"], ["我的职责｜业务翻译与协作", "梳理六维门店健康评估、月度排期、事件重排及整改复核；定义逐环节输入输出、接口复用与新增工具需求、Skill 调用条件和人工确认点，与算法工程团队对齐实现和验收样例。"], ["异常处理｜不能只写正常流程", "暂缓保留任务和时限；暂停或停复营按状态与生效时间处理。请假、会议等占用影响日程容量；同店多项任务合并共有检查动作。到店完成、整改完成与风险关闭分别判断，缺失数据不当作零风险。"], ["已交付｜可复算与可评审", "构建 1,339 条门店月度案例、可复算脚本及 33 套候选配置，完成巡检、差评、业绩三维规则批量试算。交付三组共 88 家门店的评审材料，将风险证据和优先建议集中呈现，支持业务核验及规则校准。"], ["效果与范围口径", "1,339 指门店月度案例，不是独立门店数；88 家评审门店不与案例数相加。六维是方案结构，本轮试算覆盖三维。上述为已完成的方案和评测产物，不等于完整系统上线或业务验收；本期不包含路线与差旅成本优化。"]], "note": "依据 2026.11.02 核对的业务方案、工具协作需求与评测交付说明整理。公开展示脱敏摘要，实际业务收益以业务反馈与运行数据为准。", "links": []},
  nofile:{title:'NoFile',label:'个人产品 / macOS 文件悬浮架',lead:'截图之后，不必再翻半天文件夹。',image:'assets/nofile.png',alt:'NoFile 文件流转产品概念图',sections:[['从一个日常问题开始','截图、下载和复制的图片，会不断在桌面、聊天、浏览器和设计工具之间流转。NoFile 给这些临时素材一个随手可用的暂存位置。'],['产品做什么','监听桌面与下载文件夹，收集剪贴板图片，把文件放在置顶悬浮架里。支持预览、复制、重命名、分组、打开位置，并将文件拖进其他应用。'],['实现与状态','以 Electron、React 和 TypeScript 构建，属于个人 Vibe Coding 产品。本地项目已有实现；本次作品集制作核对了项目说明，未重新验证全部功能或发行状态。']],note:'上图来自 NoFile 项目的产品概念图。真实交互与当前代码可在仓库继续查看。',url:'https://github.com/HXZ09845/nofile',urlText:'查看 NoFile 项目 ↗'},
  'note-quality':{title:'为什么先验证一条，再批量生成？',label:'生产方法 / 基于 Studio Work 实践整理',lead:'批量会放大效率，也会放大同一个错误。',sections:[['先确认真正要验证什么','商品外观、使用状态、动作和卖点表达，需要在一条代表性样例里同时检查。只看画面是否漂亮，不能确认流程能进入生产。'],['把反馈落到具体环节','外观不对时，回看参考素材与产品规则；镜头表达不对时，回看脚本与 Prompt；提交失败时，检查任务和工具状态。不同问题进入不同的修改路径。'],['通过之后再放大','通过首条验证后，再扩展到同类单元与批次；保留检查点和局部重跑，让修改范围与问题范围一致。']],note:'这是方法整理稿。具体案例的样例对照与评测数据，将在后续迭代中补充。'},
  'note-business':{title:'把业务问题翻译成可执行规则',label:'项目手记 / 茉酸奶',lead:'「这家店要重点看一下」，还不够让 Agent 开始执行。',sections:[['先问清判断依据','为什么是这家店？门店状态是什么？有哪些可核对的信号？这些信号来自哪里？先把业务同学的经验拆成信息与判断。'],['再区分不同阶段','识别候选门店、判断优先级、安排到店和跟进问题，是不同阶段。每一段都需要明确输入、输出以及不能自动处理的情况。'],['最后明确完成标准','系统返回了一个结果，不等于业务问题已经解决。把证据、人工核对和验收标准一起写进方案，才能继续推进真实验证。']],note:'基于茉酸奶业务方案与评测实践整理，记录名单、排序和执行规则的拆解方法。'},
  'note-training':{title:'从自己会用，到让团队也能用起来',label:'分享与培训 / 方法整理',lead:'一套流程有没有用，也看它能不能被另一个人接住。',sections:[['把演示拆成任务','Studio Work / NoStudio 的上手材料围绕资料输入、计划审核、首条验证、批量生产和结果回看组织，让使用者知道每一步在解决什么问题。'],['讲清正常路径，也讲清失败路径','除了成功演示，还要解释状态停滞、素材不匹配、生成质量不合格时应看哪里、怎样修改，以及何时需要研发协助。'],['让反馈进入产品迭代','培训中的重复提问，是发现命名、提示和流程缺口的机会。把这些观察带回产品需求与说明文档，减少后续重复沟通。']],note:'这里展示 2026 年 7 月杯子、服饰两类实际教学录屏。培训材料与使用反馈可证明上手支持工作；团队采用率和留存变化尚未量化。'},
  'digital-human':{title:'数字人内容制作',label:'多模态生产 / 制作实践',lead:'先确认声音与表达，再组织人物画面和生成镜头。',sections:[['项目中的实践','在纽迪希亚视频生产、满婷等项目中，参与音频前置、数字人与生成视频组合，以及脚本、音色、人物和商品素材的整理与校验。'],['制作流程','脚本预处理 → 音频与音色确认 → 数字人 / 生视频方案组合 → 人物与商品一致性检查 → 剪辑与返修。根据镜头需要选择表达方式，并保留人工质量检查。'],['我的工作','整理脚本和素材输入，参与生成方案验证、声音与人物一致性检查、交付素材组织及问题反馈。']],note:'本页说明已有制作实践，数字人样片仍在整理；不将数字人视频制作等同于直播数字人、实时交互或底层模型研发。'},
};

Object.assign(projects,{"skill-system": {"title": "SKU Skill：把经验写成可复用规则", "label": "Agent 工作流 / 方法沉淀", "lead": "从一次生成的经验，整理出下一次任务也能使用的输入、规则与检查点。", "sections": [["我的工作", "参与母 Skill、品类 Skill 和 SKU Skill 的分层组织，把商品事实、状态、卖点、素材映射、Prompt 计划和质量要求整理为生产规则。"], ["关键判断", "先由人确认产品事实和关键素材，再由 Skill 编排生成步骤；将规则检查、实际生成和人工质量验收分开，避免“校验通过”被误认为“成片可交付”。"], ["如何验证", "结合具体 SKU 检查素材引用、商品状态、输出结构与 Badcase；记录版本、问题和复测情况，并把使用说明交给生产同学。"]], "note": "这是基于已有工作记录的实践摘要。完整生产包、原始客户资料及未核对的 Skill 不作为公开下载内容。"}, "evaluation": {"title": "效果评估：从失败定位到复测", "label": "质量与迭代 / 实践摘要", "lead": "先说清楚什么算可用，再判断该改素材、Prompt，还是流程。", "sections": [["评估什么", "围绕商品保真、人物与动作一致性、场景服从、结果状态及镜头可用性建立判断维度，结合模型应用对照与 Badcase 记录判断能力边界。"], ["如何定位", "把输入素材问题、模型生成问题、规则遗漏和产品链路故障分开。生成质量问题回到素材与规则；任务失败则记录复现条件、状态与实际输出，交给对应环节处理。"], ["如何迭代", "用代表性样例验证修改，再决定是否扩展。NoStudio 与 Skill 联调中，分别记录预检、生成、结果回读和人工验收状态，保留未解决的阻塞项。"]], "note": "现有材料支持应用评估与复测实践；小样本比较不代表稳定生产指标。量化提效、长期业务效果和完整对照媒体仍待补充。"}, "delivery": {"title": "跨团队协作：把问题推进到交付节点", "label": "协作与交付 / 实践摘要", "lead": "业务口径、研发事项和生产验收，需要能彼此对应。", "sections": [["业务侧", "在茉酸奶项目中拆解门店识别、优先级和到店核对依据，与团队对齐数据口径、规则边界和异常分支，为 Agent 方案提供结构化输入。"], ["研发侧", "在 NoStudio / Studio Work 迭代中，把素材引用、任务状态、结果预览和异常重跑问题整理为具体反馈，协同研发复现、定位和复测。"], ["生产侧", "围绕品牌生产组织素材、Skill、操作说明与质量检查，配合返修和交接；通过演示、录屏及带教解释正常流程和失败处理。"]], "note": "本人职责是业务、产品、规则、验证和推进。研发实现、最终客户验收与完整项目管理范围按各案例单独说明。"}});

Object.assign(projects,{"personal-site": {"title": "这个个人网站", "label": "个人实验 / AI 协作开发", "lead": "让陌生访客通过项目与作品，理解我能承担什么工作。", "sections": [["从什么问题出发", "工作经历涉及产品、AIGC、Agent、Skill、评估和交付，需要整理为清楚的浏览入口，让不同岗位的读者能找到相关案例。"], ["怎样构建", "本人提出定位、内容分类和审美要求，通过 AI 辅助编写 HTML、CSS 和 JavaScript，持续评审页面并调整。首页保持单屏，详情按需进入。"], ["如何验证", "检查桌面与手机布局、页面切换、弹窗、标签、键盘操作和作品播放。每轮反馈用于调整下一版。"], ["当前状态", "收录项目案例、图像与视频作品及个人积累，持续维护。"]], "note": "这是 AI 协作开发实践，区分本人提出需求、取舍与评审的工作，以及 AI 辅助生成和修改代码的过程。"}});

projects.notv.recordings=[
  {title:'杯子类 · 从素材到生成结果',date:'2026.07.03',duration:'3:40',file:'assets/demos/notv-cup-tutorial.mp4?v=0.69.1',poster:'assets/notv.jpg',description:'查看脚本与素材输入、Prompt 计划、任务提交及结果修改的实际操作。'},
  {title:'服饰类 · NoTV 录屏教学',date:'2026.07.05',duration:'3:50',file:'assets/demos/notv-apparel-tutorial.mp4?v=0.69.1',poster:'assets/demos/notv-apparel-poster.jpg',description:'查看服饰脚本、参考素材与生产任务如何在同一流程中衔接。'}
];

Object.assign(projects.notv,{"productContext": {"title": "新版产品：从需求到成片的创作工作台", "copy": "Studio Work 将创作对话、任务进度、素材与成片预览放在同一工作空间，连接 NoStudio CLI、创作 Skills 与本地剪辑工具。", "image": "assets/product-updates/studio-work-20261109.png", "caption": "Studio Work 官网公开界面 · 2026.11.09 核对 · 展示产品现貌"}, "walkthrough": {"title": "用杯子视频，看懂我搭建的流程", "caption": "对应上方杯子类实操录屏；以下是流程复盘，具体操作以录制时版本为准。", "steps": [["输入：把商品与任务说清楚", "准备脚本、商品事实、结构与动作参考；把说明资料和生成参考分开。", "整理 SKU Skill 的商品约束、卖点与素材映射。"], ["过程：先审计划，再并发生成", "脚本拆成镜头，绑定 Prompt 与素材；审核后通过 CLI / MCP 提交，定位失败单元。", "定义输入输出、人工确认点和任务状态，打通素材编排与自然语言修改。"], ["输出：验收内容，沉淀规则", "得到可审核视频素材及修改记录，检查商品保真、构图、节奏与卖点表达。", "结合模型能力与审美判断返修；更新 Skill、测试样例和团队使用指引。"]]}});
Object.assign(projects.nostudio,{"productContext": {"title": "新版定位：品牌内容创作与协作平台", "copy": "官网将 NoStudio 定位为 AI 设计工作空间，围绕品牌资产组织创作、审核与复用。下方保留我实际参与的商品、素材与 Skill 规则及联调证据。"}, "walkthrough": {"title": "从商品资产到可用的生产上下文", "caption": "我的侧重点：资料怎么组织、素材怎么引用、生成结果怎么核对。", "steps": [["输入：商品资料与参考素材", "收集商品事实、卖点、图片 / 视频及创作要求。", "区分资料与生成参考，明确商品、素材和 Skill 的对应关系。"], ["过程：关联、创作与结果回读", "把素材带入任务，检查媒体类型、任务状态、生成结果与异常。", "整理复现步骤与验收条件，与研发联调、复测。"], ["输出：资产、内容与可复用规则", "留下可检索的商品资产、生成记录，以及生产规则与使用指引。", "形成素材使用规则、验证报告和问题清单，减少重复核对。"]]}});

const videos={
  kettle:{title:'让产品进入生活场景',subtitle:'苏泊尔 · 家电主图视频',file:'assets/kettle.mp4',poster:'assets/kettle.jpg'},
  fashion:{title:'把穿着感，放进镜头',subtitle:'服饰主图视频',file:'assets/fashion.mp4',poster:'assets/fashion.jpg'},
  'kettle-ad':{title:'同一件商品，不同的表达',subtitle:'家电搜推视频',file:'assets/kettle-ad.mp4',poster:'assets/kettle-ad.jpg'}
};

Object.assign(videos,{"lock-drama": {"title": "乐扣乐扣 · 家庭情景短剧", "subtitle": "剧情短片 / 2026.08 / 团队作品 · 1:22", "file": "assets/works/lock-drama.mp4", "poster": "assets/works/lock-drama.jpg", "description": "以家庭人物对话串起杯子的使用场景和功能展示。此处展示群内交付的纯净版。", "credit": "团队协作作品。本人在乐扣项目中承担商品生成规则与生产支持；本条短剧的脚本、画面生成与剪辑由团队协作完成。"}, "manting-tvc": {"title": "满婷 · 养发皂品宣", "subtitle": "创意品宣 / 2026.06 / 方案验证样片 · 0:41", "file": "assets/works/manting-tvc.mp4", "poster": "assets/works/manting-tvc.jpg", "description": "用草本成分、材质微距和产品镜头组织品牌视觉表达。群内记录于 6 月 23 日确认定稿。", "credit": "本人构建满婷商品 Skill、提供初始素材与生成样片，并支持生产问题处理；最终成片由团队补充生成与剪辑完成。"}, "lock-spring": {"title": "乐扣乐扣 · 春日创意混剪", "subtitle": "创意混剪 / 2026.03 / 团队作品 · 0:20", "file": "assets/works/lock-spring.mp4", "poster": "assets/works/lock-spring.jpg", "description": "春日视觉钩子衔接真人讲解与商品展示，呈现创意镜头和实拍素材的组合方式。", "credit": "乐扣项目团队作品。本人在项目中负责生成规则与生产支持，本条混剪由团队制作；展示的是 AI 创意镜头与真人素材结合的形式。"}, "manting-human": {"title": "满婷 · 数字人口播与生成镜头", "subtitle": "AI 数字人 / 2026.04 / 脚本 10 修改版 · 1:36", "file": "assets/works/manting-human.mp4", "poster": "assets/works/manting-human.jpg", "description": "数字人口播衔接头皮、发丝等生成镜头，展示人物表达与商品内容的组合。人物画面含 AI 生成。", "credit": "本人负责数字人形象与场景确认、口播生成及修改，处理声音、人物比例与背景一致性问题；团队完成剪辑、字幕与包装。展示 4 月 15 日群内修改版。"}});
projects['digital-human'].video='manting-human';
projects['digital-human'].note='已收录满婷脚本 10 的数字人口播修改版。此处展示内容制作实践，不涉及直播数字人或实时交互。';
projects['starbucks-poc']={"title": "星巴克 · 朋克芭蕾长图方案", "label": "2026.07 / 商品视觉与详情页 / 团队概念验证", "lead": "将品牌视觉、商品图与卖点模块组织成完整长图，验证 AI 生成与分层编辑的协作流程。", "image": "assets/works/starbucks-poc.webp", "alt": "星巴克朋克芭蕾系列商品长图方案 完整样图", "sections": [["我的工作", "提供详情页生成 Skill 与流程支持；长图生成、设计调整和 PSD 整理由团队协作完成。"], ["验证内容", "检查 KV 与商品模块的风格衔接、产品和文字排版，以及后续分层编辑的可行性。"], ["案例状态", "展示 2026 年 7 月 17 日项目群中的方案验证版本。后续仍有品牌规范与分层效果调整，不作为正式上线页面展示。"]], "note": "图中品牌与商品素材用于该项目的效果验证。此案例展示团队方案验证与本人方法支持，不将整张长图认领为个人独立设计。"};

Object.assign(videos,{"supor-cup-poc1": {"title": "苏泊尔旋一口 · 高铁出行", "subtitle": "商品场景 / 2026.04 / 夏季杯子方案验证 · 0:30", "file": "assets/works/supor-cup-poc1.mp4", "poster": "assets/works/supor-cup-poc1.jpg", "description": "以高铁出行为场景，展示泡果茶、旋盖饮用和随身收纳。验证产品结构、旋盖动作与出行场景的表达。", "credit": "本人提供脚本所需静帧与生成素材，指导同事补充画面，协作推进两条验证样片的制作与迭代；剪辑由同事完成。"}, "supor-cup-poc2": {"title": "苏泊尔旋一口 · 夏日 City Walk", "subtitle": "商品场景 / 2026.04 / 夏季杯子方案验证 · 0:30", "file": "assets/works/supor-cup-poc2.mp4", "poster": "assets/works/supor-cup-poc2.jpg", "description": "以夏日逛街为场景，展示冰饮、倒饮与多色杯身。验证产品状态、饮用动作与夏日场景的表达。", "credit": "本人提供脚本所需静帧与生成素材，指导同事补充画面，协作推进两条验证样片的制作与迭代；剪辑由同事完成。"}});

videos['puma-poc']={"title": "PUMA · 一脚蹬穿搭", "subtitle": "鞋履穿搭 / 2026.04 / 方案验证样片 · 0:15", "file": "assets/works/puma-poc.mp4", "poster": "assets/works/puma-poc.jpg", "description": "用开箱、上脚与街头穿搭展示黄色一脚蹬鞋款，验证鞋履产品细节与穿着场景的 AI 视频表达。", "credit": "本人构建鞋类 Skill、编写与调整 Prompt，并进行画面生成和效果验证。展示本人于 2026 年 4 月 29 日分享的鞋类方案验证样片。"};

Object.assign(projects,{"lock-images": {"title": "乐扣乐扣 · 冰箱收纳套图", "label": "2025.10 / 场景与卖点图 / 团队协作", "lead": "围绕冰箱收纳、备餐与辅食场景，将不同容量的保鲜盒卖点组织成一组社媒图片。", "sections": [["我的工作", "负责 AI 场景图生成与修改：根据文案组织画面，结合产品白底图调整外观、比例与真实感。团队负责选题文案、图片审核及最终文字排版。"], ["产出内容", "6 张系列图，覆盖厨房收纳、全家使用、600ml 辅食、800ml 外带、1000ml 日常餐食与 1200ml 备菜。"]], "note": "展示项目文档中的配图版本。10 月 30 日记录确认进入加字排版环节；不据此宣称投放或转化效果。", "gallery": [{"src": "assets/works/lock-image-1.webp", "alt": "冰箱收纳主题", "caption": "01 / 冰箱收纳主题"}, {"src": "assets/works/lock-image-2.webp", "alt": "全家使用场景", "caption": "02 / 全家使用场景"}, {"src": "assets/works/lock-image-3.webp", "alt": "辅食场景 · 600ml", "caption": "03 / 辅食场景 · 600ml"}, {"src": "assets/works/lock-image-4.webp", "alt": "冰箱与外带 · 800ml", "caption": "04 / 冰箱与外带 · 800ml"}, {"src": "assets/works/lock-image-5.webp", "alt": "日常餐食 · 1000ml", "caption": "05 / 日常餐食 · 1000ml"}, {"src": "assets/works/lock-image-6.webp", "alt": "全家备菜 · 1200ml", "caption": "06 / 全家备菜 · 1200ml"}]}, "chando-images": {"title": "自然堂 · 产品场景融合", "label": "2025.11—2026.01 / 商品视觉 / 方案验证", "lead": "以现有商品图为基础，探索产品与不同布景的光影融合，以及同一组商品的场景延展。", "sections": [["我的工作", "拆解商品保真、光影融合、横竖版延展与可编辑交付需求，整理生成方案及效果验证材料。"], ["验证重点", "对比原始商品图与暖色植物、红色礼赠布景，检查外观、文字、比例及产品与背景的融合效果。"]], "note": "样图来自《自然堂 AIGC 能力解决方案与效果预期》，作为项目方案验证展示，不标记为正式投放作品。", "gallery": [{"src": "assets/works/chando-source.webp", "alt": "输入参考 / 原始商品图", "caption": "输入参考 / 原始商品图"}, {"src": "assets/works/chando-warm.webp", "alt": "效果验证 / 暖色植物布景", "caption": "效果验证 / 暖色植物布景"}, {"src": "assets/works/chando-red.webp", "alt": "效果验证 / 红色礼赠布景", "caption": "效果验证 / 红色礼赠布景"}]}});

projects['model-boundaries']={"title": "模型选型与能力边界判断", "label": "AIGC 应用评估 / 多品类实践", "lead": "把模型测试与真实生产结合起来，判断什么适合生成、什么需要调整流程，以及何时应改用实拍或后期处理。", "sections": [["模型与评估维度", "关注并测试主流图像、视频模型，如 Wan、Seedance、Kling（可灵）、MiniMax H3，以及 Nano Banana 等，按各模型支持的任务分别评估。围绕商品结构与 Logo、文字可读性、人物真实感、动作逻辑和跨镜头一致性检查结果，按具体版本与任务判断可用性。"], ["商品结构与复杂动作｜杯壶、家电、鞋履", "检查杯盖与提手形态、开合和倒水状态、鞋带与 Logo 等易出错细节。对复杂动作拆分镜头，分开组织开盖与合盖参考素材；必要时采用实拍动作素材，避免仅靠反复修改 Prompt。"], ["细节表达与人物讲解｜美妆、奶粉、洗护", "产品包装和密集文字需要单独核验；涉及配料表等需准确展示的信息，可使用静态商品图或实拍补充。数字人口播先确认声音与表达，再检查人物、产品与生成镜头的衔接。"], ["从问题到复用规则", "记录 Badcase 的输入、错误表现与调整方式，区分素材缺口、Prompt / Skill 规则、模型能力和平台故障。先复测代表性样例，再将可复用经验写入品类与 SKU Skill。"]], "note": "以上为实际应用中的评估方法与历史问题，不将某个版本的表现视为模型永久能力，也不把接触过的模型等同于全部精通。"};

// Each context record carries its own body and index metadata.
for (const record of contextRecords) {
  notebookEntries.push({...record, category:record.type==='practice'?'实践记录':'想法与计划', tags:record.tags, related:null});
  projects[record.id]={title:record.title,label:`${record.status} / 更新于 ${record.updated}`,lead:record.description,
    sections:record.sections,note:'个人持续维护的上下文记录；已做的事与下一步分开记录。'};
}
let activeNoteFilter='all';
const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const dialog=document.querySelector('#detail-dialog');
const dialogBody=document.querySelector('#dialog-body');
const kicker=document.querySelector('#dialog-kicker');
let lastTrigger=null;
let activeFilter='all';

function renderSkills(){
  const query=document.querySelector('#skill-search').value.trim().toLocaleLowerCase();
  const shown=skills.filter(skill=>(activeFilter==='all'||skill.categories.includes(activeFilter))&&[skill.title,skill.description,skill.kind,skill.input,skill.output,skill.source].join(' ').toLocaleLowerCase().includes(query));
  document.querySelector('#skill-grid').innerHTML=shown.map(skill=>`<button class="skill-card" data-skill="${skill.id}"><div class="skill-card-top"><span class="skill-icon" aria-hidden="true">${skill.icon}</span><span class="skill-kind">${skill.kind}</span></div><h3>${skill.title}</h3><p>${skill.description}</p><div class="skill-bottom"><span>${skill.tag}</span><span aria-hidden="true">↗</span></div></button>`).join('');
  document.querySelector('#skill-empty').hidden=shown.length>0;
  document.querySelector('#skill-count').textContent=`显示 ${shown.length} / ${skills.length} 条方法与工具记录 · 个人构建与收录来源在详情中说明`;
}

function showDialog(html,type,trigger){
  if(!dialog.open)lastTrigger=trigger||document.activeElement;
  dialogBody.querySelectorAll('video').forEach(video=>video.pause());
  dialogBody.innerHTML=html;
  dialog.classList.toggle('project-story-dialog',!!dialogBody.querySelector('.project-story'));
  kicker.textContent=type;
  if(!dialog.open)dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop=0;
  document.querySelector('#dialog-close').focus({preventScroll:true});
}

function renderCaseDecisions(id){
  const study=caseStudies[id];if(!study)return '';
  const e=escapeHTML;
  return `<section class="case-study-section case-key-decisions"><h3>${e(study.decisionsTitle)}</h3><div class="case-decisions">${study.decisions.map(([problem,action,output])=>`<article><h4>${e(problem)}</h4><p>${e(action)}</p><small>${e(output)}</small></article>`).join('')}</div></section>`;
}

function renderCaseStudy(id,{includeDecisions=true,includeFlow=true}={}){
  const study=caseStudies[id];if(!study)return '';
  const e=escapeHTML;
  const flow=study.flow.map(([title,copy],index)=>`<li><span class="case-step-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span><div><h4>${e(title)}</h4><p>${e(copy)}</p></div></li>`).join('');
  const example=study.example?`<details class="case-example"><summary>${e(study.exampleTitle)}<span aria-hidden="true">＋</span></summary><p class="case-caption">${e(study.exampleNote)}</p><dl>${study.example.map(([title,copy])=>`<div><dt>${e(title)}</dt><dd>${e(copy)}</dd></div>`).join('')}</dl></details>`:'';
  const records=study.records.map(([date,type,copy])=>`<li><span>${e(date)}</span><div><strong>${e(type)}</strong><p>${e(copy)}</p></div></li>`).join('');
  return `<div class="case-study"><p class="case-scope">${e(study.scope)}</p>${includeFlow?`<section class="case-study-section"><h3>${e(study.flowTitle)}</h3><p class="case-caption">${e(study.flowNote)}</p><ol class="case-flow">${flow}</ol></section>`:''}${includeDecisions?renderCaseDecisions(id):''}${example}<details class="case-records"><summary>查看阶段记录与依据<span aria-hidden="true">＋</span></summary><ol>${records}</ol><p class="case-caption">${e(study.provenance)}</p></details></div>`;
}

projects['note-training'].recordings=projects.notv.recordings;

function renderRecordings(recordings){
  if(!recordings?.length)return '';
  const e=escapeHTML;
  const player=recording=>`<p class="case-caption">${e(recording.date)} · ${e(recording.duration)} · 实操录屏</p><p class="recording-description">${e(recording.description)}</p><video class="video-player" controls playsinline preload="none" poster="${e(recording.poster)}" aria-label="${e(recording.title)}"><source src="${e(recording.file)}" type="video/mp4">当前浏览器不支持视频播放，请通过下方链接打开。</video><a class="text-link" href="${e(recording.file)}" target="_blank" rel="noopener">单独打开录屏 ↗</a>`;
  return `<section class="project-recordings"><h3>看实际操作</h3><p class="case-caption">当时用于团队分享的完整教学录屏，展示录制时的产品版本。点击播放，可全屏查看。</p><h4>${e(recordings[0].title)}</h4>${player(recordings[0])}${recordings.slice(1).map(recording=>`<details class="recording-more"><summary>再看${e(recording.title)} · ${e(recording.duration)}</summary>${player(recording)}</details>`).join('')}</section>`;
}

function renderProductGuide(guide){
  if(!guide)return '';
  const e=escapeHTML;
  const modules=guide.modules.map(([name,role,copy])=>`<div><dt>${e(name)}</dt><dd><strong>${e(role)}</strong><p>${e(copy)}</p></dd></div>`).join('');
  const evidence=guide.evidence.map((item,index)=>`<details class="product-evidence" ${index===0?'open':''}><summary><span>${e(item.title)}</span><span class="evidence-toggle" aria-hidden="true"></span></summary><p class="evidence-purpose">${e(item.purpose)}</p><dl class="evidence-points">${item.points.map(([label,copy])=>`<div><dt>${e(label)}</dt><dd>${e(copy)}</dd></div>`).join('')}</dl><figure><a href="${e(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="${e(item.alt)}，打开大图"><img src="${e(item.src)}" alt="${e(item.alt)}" loading="lazy"></a><figcaption>2026.10 实践版本 · 点击查看大图 ↗</figcaption></figure></details>`).join('');
  return `<section class="product-guide"><h3>我的实践版本：五个入口如何支撑生产？</h3><dl class="product-module-map">${modules}</dl><p class="product-guide-flow"><strong>一次内容生产</strong><span>整理商品与素材 → 参考 Skill / 模板 → 提交创作 → 回看结果与质检</span></p><h3>结合界面，看功能如何使用</h3><p class="case-caption">展开查看操作位置与用途 · 界面核对于 2026.10.27</p><div class="product-evidence-list">${evidence}</div></section>`;
}

function renderProjectBrief(id){
  const brief=projectBriefs[id];if(!brief)return '';
  const e=escapeHTML;
  return `<section class="project-brief" aria-label="项目摘要"><h3>解决什么问题</h3><p>${e(brief.problem)}</p><dl class="brief-contribution"><div><dt>我的职责</dt><dd>${e(brief.role)}</dd></div><div><dt>产物与结果</dt><dd>${e(brief.result)}</dd></div></dl>${projects[id]?.walkthrough?'':`<ol class="brief-flow">${brief.flow.map(([label,copy])=>`<li><strong>${e(label)}</strong><p>${e(copy)}</p></li>`).join('')}</ol>`}${brief.judgment?`<div class="brief-model-judgment"><h3>模型能力边界与选型</h3><p>${e(brief.judgment)}</p><button class="case-entry" data-detail="model-boundaries">查看判断方法与案例 ↗</button></div>`:''}</section>`;
}

function renderNotebook(){
  const query=document.querySelector('#note-search').value.trim().toLocaleLowerCase();
  const shown=notebookEntries.filter(entry=>(activeNoteFilter==='all'||(entry.type||'practice')===activeNoteFilter)&&[entry.title,entry.category,entry.description,...entry.tags,...(projects[entry.id]?.sections||[]).flat()].join(' ').toLocaleLowerCase().includes(query));
  const e=escapeHTML;
  document.querySelector('#notebook-list').innerHTML=shown.map(entry=>`<button class="notebook-entry" data-detail="${e(entry.id)}"><span class="notebook-category">${e(entry.category)}</span><span class="notebook-entry-copy"><strong>${e(entry.title)}</strong><span>${e(entry.description)}</span><small>${entry.tags.map(e).join(' / ')}${entry.status?` · ${e(entry.status)}`:''}</small></span><span aria-hidden="true">↗</span></button>`).join('');
  document.querySelector('#note-count').textContent=(query||activeNoteFilter!=='all')?`找到 ${shown.length} / ${notebookEntries.length} 条记录`:`${notebookEntries.length} 条上下文与实践记录 · 持续整理`;
  document.querySelector('#note-empty').hidden=shown.length>0;
}
document.querySelector('#note-search').addEventListener('input',renderNotebook);
document.querySelectorAll('[data-note-filter]').forEach(button=>button.addEventListener('click',()=>{activeNoteFilter=button.dataset.noteFilter;document.querySelectorAll('[data-note-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));renderNotebook();}));


function renderProductContext(project){
  if(!project.productContext)return '';
  const e=escapeHTML,c=project.productContext;
  return `<section class="product-version-context"><h3>${e(c.title)}</h3><p>${e(c.copy)}</p>${c.image?`<figure><a href="${e(c.image)}" target="_blank" rel="noopener"><img src="${e(c.image)}" alt="${e(c.caption)}" loading="lazy"></a><figcaption>${e(c.caption)}</figcaption></figure>`:''}</section>`;
}
function renderWalkthrough(project){
  if(!project.walkthrough)return '';
  const e=escapeHTML,w=project.walkthrough;
  return `<section class="case-walkthrough"><h3>${e(w.title)}</h3><p class="case-caption">${e(w.caption)}</p><ol>${w.steps.map(([title,copy,role])=>`<li><h4>${e(title)}</h4><p>${e(copy)}</p><p class="walkthrough-role"><strong>我的工作</strong> ${e(role)}</p></li>`).join('')}</ol></section>`;
}

function openProject(id,trigger){
  const project=projects[id];if(!project)return;
  if(projectStories[id]){
    showDialog(renderProjectStory(id),'项目案例 / '+projectStories[id].name,trigger);
    return;
  }
  const sections=project.sections.map(([heading,text])=>`<section class="detail-section"><h3>${escapeHTML(heading)}</h3><p>${escapeHTML(text)}</p></section>`).join('');
  const gallery=project.gallery?`<div class="project-gallery">${project.gallery.map(item=>`<figure><a href="${escapeHTML(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(item.alt)}，打开大图"><img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt)}" loading="lazy"></a><figcaption>${escapeHTML(item.caption)} <span aria-hidden="true">↗</span></figcaption></figure>`).join('')}</div>`:'';
  const screenshots=project.screenshots?`<section class="current-product-screenshots"><h3>实践版本界面</h3><p class="case-caption">当前网页版实拍 · 2026.10.27 · 点击图片查看大图</p><div class="project-gallery">${project.screenshots.map(item=>`<figure><a href="${escapeHTML(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(item.alt)}，打开大图"><img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt)}" loading="lazy"></a><figcaption>${escapeHTML(item.caption)} ↗</figcaption></figure>`).join('')}</div></section>`:'';
  const media=(project.recordings||project.screenshots||project.productGuide)?'':project.image?`<img class="detail-image" src="${project.image}" alt="${escapeHTML(project.alt)}">`:'';
  const links=(project.links||[]).map(link=>`<a class="text-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} ↗</a>`).join('');
  const actions=(project.url?`<a class="button primary" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.urlText}</a>`:'')+(project.video?`<button class="button primary" data-video="${project.video}">观看生成作品 ▶</button>`:'')+links;
  const brief=projectBriefs[id];
  const notebook=notebookEntries.find(entry=>entry.id===id);
  const context=notebook?`<div class="note-context"><span>${escapeHTML(notebook.category)}${notebook.updated?` · ${escapeHTML(notebook.updated)}`:''}</span>${notebook.related?`<button data-detail="${escapeHTML(notebook.related)}">查看相关项目 ↗</button>`:''}</div>`:'';
  const leadWithDecisions=id==='nostudio'||id==='notv';
  const productDetails=leadWithDecisions?`${renderProjectBrief(id)}${renderWalkthrough(project)}${renderProductGuide(project.productGuide)}<details class="case-reading"><summary>关键判断：为什么这样设计</summary>${renderCaseDecisions(id)}</details><details class="case-reading"><summary>${escapeHTML(brief.evidenceLabel)}</summary>${renderCaseStudy(id,{includeDecisions:false,includeFlow:false})}</details><details class="case-reading"><summary>产品现貌与协作分工</summary>${renderProductContext(project)}${sections}</details>${id==='notv'?'<button class="case-entry" data-detail="model-boundaries">查看模型选型与审美判断方法 ↗</button>':''}`:'';
  const content=productDetails||(brief?`${renderProjectBrief(id)}${screenshots}<details class="case-reading"><summary>${escapeHTML(brief.detailLabel)}</summary>${sections}</details><details class="case-reading"><summary>${escapeHTML(brief.evidenceLabel)}</summary>${renderCaseStudy(id)}</details>`:caseStudies[id]?`${sections}${renderCaseStudy(id)}${media}`:project.gallery?`${sections}${gallery}`:`${media}${sections}`);
  showDialog(`<p class="detail-label">${escapeHTML(project.label)}</p><h2 id="dialog-title">${escapeHTML(notebook?.title||project.title)}</h2>${renderRecordings(project.recordings)}${context}${brief?'':`<p class="detail-lead">${escapeHTML(project.lead)}</p>`}${content}<p class="detail-note">${escapeHTML(project.note)}</p>${actions?`<div class="detail-actions">${actions}</div>`:''}`,notebook?'PRACTICE NOTES':'PROJECT NOTES',trigger);
}

function openVideo(id,trigger){
  const video=videos[id];if(!video)return;
  showDialog(`<p class="detail-label">${video.subtitle}</p><h2 id="dialog-title">${escapeHTML(video.title)}</h2>${video.description?`<p class="detail-lead">${escapeHTML(video.description)}</p>`:''}<video class="video-player" controls playsinline preload="metadata" poster="${video.poster}" aria-label="${video.subtitle}"><source src="${video.file}" type="video/mp4">当前浏览器不支持视频播放，可通过下方链接打开。</video><p class="video-caption">${escapeHTML(video.credit||'比赛团队作品。本人参与 Skill / Prompt、视频生产、剪辑质检与现场演示流程；具体单条分工将在案例中继续补充。')}</p><div class="detail-actions"><a class="text-link" href="${video.file}" target="_blank" rel="noopener">单独打开视频 ↗</a></div>`,'WORK IN MOTION',trigger);
  // Playback stays user-initiated, so browsing never starts audio unexpectedly.
}

function openSkill(id,trigger){
  const skill=skills.find(entry=>entry.id===id);if(!skill)return;
  const e=escapeHTML;
  const provenance=skill.provenance||`来自本地 ${skill.source} 的说明摘要，作者归属与公开版本尚待核对。目前展示用途与流程。`;
  const related=skill.project?`<div class="detail-actions"><button class="text-link" data-detail="${e(skill.project)}">查看实际项目中的应用 ↗</button></div>`:'';
  showDialog(`<p class="detail-label">${e(skill.kind)} / ${e(skill.credit||'收录草稿')}</p><h2 id="dialog-title">${e(skill.title)}</h2><p class="detail-lead">${e(skill.description)}</p><div class="recipe"><div><b>INPUT / 需要什么</b>${e(skill.input)}</div><div><b>OUTPUT / 得到什么</b>${e(skill.output)}</div></div><section class="detail-section"><h3>如何工作</h3><ol>${skill.steps.map(step=>`<li>${e(step)}</li>`).join('')}</ol></section><section class="detail-section"><h3>使用范围</h3><p>${e(skill.note)}</p></section><p class="detail-note">${e(provenance)}</p>${related}`,'SKILL LIBRARY',trigger);
}

document.addEventListener('click',event=>{
  const target=event.target.closest('button');if(!target)return;
  if(target.dataset.detail)openProject(target.dataset.detail,target);
  if(target.dataset.video)openVideo(target.dataset.video,target);
  if(target.dataset.skill)openSkill(target.dataset.skill,target);
  if(target.dataset.filter){
    activeFilter=target.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(button=>{const selected=button===target;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});
    renderSkills();
  }
});

document.querySelector('#skill-search').addEventListener('input',renderSkills);
function releaseDialog(){
  dialogBody.querySelectorAll('video').forEach(video=>video.pause());
  dialogBody.innerHTML='';
  document.body.classList.remove('modal-open');
  const trigger=lastTrigger;
  lastTrigger=null;
  if(trigger?.isConnected&&trigger.getClientRects().length)trigger.focus({preventScroll:true});
}
function closeDialog(){
  // Release media and scroll lock now, rather than waiting for the queued close event.
  releaseDialog();
  if(dialog.open)dialog.close();
}
document.querySelector('#dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closeDialog();}});
// A queued close event from an older dialog must not erase a newly opened one.
dialog.addEventListener('close',()=>{if(!dialog.open)releaseDialog();});
dialogBody.addEventListener('play',event=>{if(event.target instanceof HTMLVideoElement)dialogBody.querySelectorAll('video').forEach(video=>{if(video!==event.target)video.pause();});},true);
dialogBody.addEventListener('toggle',event=>{if(event.target.matches('.recording-more')&&!event.target.open)event.target.querySelectorAll('video').forEach(video=>video.pause());},true);
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
menuButton.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
navigation.addEventListener('click',event=>{if(event.target.closest('a')){navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){event.preventDefault();navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.focus();}});

// Hash routes switch content views; the home screen never scrolls through sections.
const homeScreen=document.querySelector('#home');
const sectionBrowser=document.querySelector('#section-browser');
const views=[...document.querySelectorAll('#section-content > section')];
// Move keyboard focus without interpreting the main landmark as a page route.
document.querySelector('.skip-link').addEventListener('click',event=>{
  event.preventDefault();
  document.querySelector('#main').focus();
});
const viewNames={lab:'Vibe Coding 项目',capabilities:'实践与案例',production:'AIGC · 产品构建与落地',projects:'项目案例',works:'AIGC · 产出作品',agent:'Agent 业务流程设计与落地',skills:'Skill 工具箱',prompts:'常用提示词',timeline:'我的经历',notes:'个人积累',about:'关于我'};
let previousView=null;
const sectionScroller=document.querySelector('#section-content');
const viewScrollPositions=new Map();
// Route navigation owns scroll restoration, including browser Back/Forward.
if('scrollRestoration' in history)history.scrollRestoration='manual';
function routeView(){
  const requested=location.hash.slice(1);
  const view=Object.hasOwn(viewNames,requested)?requested:'home';
  if(previousView!==null){
    viewScrollPositions.set(previousView,previousView==='home'?window.scrollY:sectionScroller.scrollTop);
  }
  if(dialog.open){lastTrigger=null;closeDialog();}
  homeScreen.hidden=view!=='home';
  sectionBrowser.hidden=view==='home';
  document.body.classList.toggle('home-view',view==='home');
  document.body.classList.toggle('section-view',view!=='home');
  views.forEach(section=>section.hidden=section.id!==view);
  document.querySelector('#section-name').textContent=viewNames[view]||'';
  document.title=view==='home'?'洪新哲 · AI 实践与个人积累':`${viewNames[view]} · 洪新哲`;
  navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');
  const navView=({capabilities:'projects',production:'projects',agent:'projects',lab:'projects',skills:'notes',prompts:'notes',timeline:'about'})[view]||view;
  navigation.querySelectorAll('a').forEach(link=>{const active=link.hash===`#${navView}`;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current',view===navView?'page':'location');else link.removeAttribute('aria-current');});
  const savedScroll=viewScrollPositions.get(view)||0;
  sectionScroller.scrollTop=view==='home'?0:savedScroll;
  window.scrollTo({top:view==='home'?savedScroll:0,behavior:'instant'});
  if(view==='home'){
    homeScreen.querySelector(`a[href="#${previousView}"]`)?.focus({preventScroll:true});
  }else{
    const heading=document.querySelector(`#${view} h2`);heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});
  }
  previousView=view;
}
// Prevent native fragment scrolling from racing with hidden-view switching.
document.addEventListener('click',event=>{
  const link=event.target.closest('a[href]');
  if(!link||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.target||link.hasAttribute('download'))return;
  const url=new URL(link.href,location.href);
  const destination=url.hash.slice(1);
  if(url.origin!==location.origin||url.pathname!==location.pathname||url.search!==location.search||!(destination==='home'||Object.hasOwn(viewNames,destination)))return;
  event.preventDefault();
  if(location.hash===url.hash)return;
  history.pushState(null,'',url.hash);
  routeView();
});
window.addEventListener('popstate',routeView);
window.addEventListener('hashchange',()=>{
  const requested=location.hash.slice(1);
  const view=Object.hasOwn(viewNames,requested)?requested:'home';
  if(view!==previousView)routeView();
});
document.addEventListener('keydown',event=>{
  if(event.key!=='Escape'||event.defaultPrevented||dialog.open||sectionBrowser.hidden)return;
  if(event.target.matches('input[type="search"]'))return;
  location.hash='home';
});
renderSkills();
renderNotebook();
routeView();

// Output types are independent of the product/process entry.
const outputTabs=[...document.querySelectorAll('.output-tabs [role="tab"]')];
function selectOutput(tab){
  outputTabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;});
}
outputTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectOutput(tab));
  tab.addEventListener('keydown',event=>{
    const next=event.key==='ArrowRight'?(index+1)%outputTabs.length:event.key==='ArrowLeft'?(index+outputTabs.length-1)%outputTabs.length:event.key==='Home'?0:event.key==='End'?outputTabs.length-1:null;
    if(next!==null){event.preventDefault();selectOutput(outputTabs[next]);outputTabs[next].focus();}
  });
});

// Keep disclosure instructions in sync with their native open/closed state.
document.querySelectorAll('.prompt-list details, .brand-notebook').forEach(details=>{
  const label=details.querySelector('summary span');
  const isPrompt=details.closest('.prompt-list');
  const syncLabel=()=>{label.textContent=isPrompt
    ?(details.open?'收起模板 −':'展开模板 ＋')
    :(details.open?'收起品牌索引 −':'查看品牌索引 ＋');};
  details.addEventListener('toggle',syncLabel);
  syncLabel();
});
