'use strict';

// Short visual readings; the source material remains available in the project archive.
const projectStories = {
  notv: {
    name:'Studio Work', descriptor:'视频创作智能体', context:'NoDesk AI · 原 NoTV',
    thesis:'让视频生产，从逐条操作走向批量协作。',
    problem:'视频生产要在脚本、素材与生成工具间反复切换，同类商品逐条配置，返修成本高。',
    role:'从 0 到 1 定义早期流程，构建 SKU Skill / Meta Skill，完成测试与团队培训；与算法工程团队协作推进。',
    value:'减少商品失真和重复生成',
    valueNote:'先验证代表性任务，再并发提交。',
    deliverables:'SKU / Meta Skill · 生产流程 · 团队培训',
    steps:[['输入','脚本、商品资料、参考素材'],['过程','Skill 编排 → 审核计划 → CLI / MCP 并发生成'],['输出','视频素材与修改记录；自然语言返修后复用规则']],
    focus:'把商品约束和素材引用写进 Skill，让每次修改有明确的落点。'
  },
  nostudio: {
    name:'NoStudio', descriptor:'品牌 AI 设计工作空间', context:'NoDesk AI · 商品与素材规则实践',
    thesis:'让商品资料，成为创作时真正可用的上下文。',
    problem:'品牌团队的商品资料、素材、创作与审核分散，容易混用素材、反复沟通，生产问题难定位。',
    role:'梳理商品、素材与 Skill 的关联规则，把生产问题转成需求、复现步骤和验收条件，协同研发联调。',
    value:'异常可复现，修改可验收',
    valueNote:'联调中定位人物引用权限与视频路由异常。',
    deliverables:'素材使用规则 · 验证报告 · 问题清单',
    steps:[['输入','商品资料、参考素材与创作需求'],['过程','关联素材 → 发起创作 → 回读结果与复测'],['输出','内容资产、生成记录与可复用规则']],
    focus:'商品资料不等于生成参考。先分清素材用途，再规定如何被任务引用。'
  },
  yogurt: {
    name:'茉酸奶', descriptor:'门店风险评估与智能巡店 Agent', context:'企业 AI 应用 · 业务方案与评测',
    thesis:'哪些店要巡，先巡哪家，到店查什么？',
    problem:'督导要从分散的经营、巡检与客诉信息中做判断，还要安排日程、跟踪整改。',
    role:'负责业务翻译：拆解名单、排序、排期与整改规则，定义输入输出、接口和 Skill 需求，协同算法工程团队构建评测集并调优。',
    value:'重复核算 → 批量试算',
    valueNote:'评审时可对照风险证据与巡店优先建议。',
    deliverables:'1,339 条门店月度案例 · 88 家门店评审材料 · 排期与整改方案',
    steps:[['输入','经营、巡检、客诉与督导日程'],['过程','应巡名单 → 风险排序 → 排期与整改复核'],['输出','风险证据、检查任务与巡店日历方案']],
    focus:'需要巡店的名单，与巡店的优先级，是两套判断。风险扣分不直接等于新增任务。'
  },
  nofile: {
    name:'NoFile', descriptor:'macOS 文件悬浮架', context:'个人探索 · Vibe Coding',
    thesis:'给截图和下载，一个随手可用的位置。',
    problem:'临时文件不断在桌面、聊天和设计工具之间流转，找文件打断了手头的工作。',
    role:'从自己的使用需求出发，通过 Vibe Coding 构建文件暂存、预览和拖拽流程。',
    value:'暂存后直接拖用，减少文件查找',
    deliverables:'macOS 文件悬浮架 · 本地实现',
    steps:[['输入','截图、下载与剪贴板图片'],['过程','暂存 → 预览、分组与整理'],['输出','拖入需要使用文件的应用']],
    focus:'临时文件需要的是更短的流转路径。'
  }
};

function storyFigure(src,alt,caption){
  const e=escapeHTML;
  return `<figure class="story-figure"><a href="${e(src)}" target="_blank" rel="noopener" aria-label="${e(alt)}，打开大图"><img src="${e(src)}" alt="${e(alt)}"></a><figcaption>${e(caption)} <a href="${e(src)}" target="_blank" rel="noopener">查看大图 ↗</a></figcaption></figure>`;
}

function storyMedia(id,project){
  const e=escapeHTML;
  if(id==='notv'){
    const r=project.recordings[0];
    return `<figure class="story-recording"><video controls playsinline preload="metadata" poster="${e(r.poster)}" aria-label="${e(r.title)}"><source src="${e(r.file)}" type="video/mp4">当前浏览器不支持视频播放，请打开下方录屏链接。</video><figcaption><span><strong>杯子类实操</strong> · ${e(r.duration)} · 从素材到生成结果</span><a href="${e(r.file)}" target="_blank" rel="noopener">单独播放 ↗</a></figcaption><p class="story-source">${e(r.date)} 团队教学录屏 · 原 NoTV 版本</p></figure>`;
  }
  if(id==='nostudio'){
    const labels=['商品资产','创作','生成记录','Skill'];
    const notes=['商品资料、素材数量与项目关联，集中在同一个商品入口。','把 Prompt、素材引用与模型参数放在一次任务中。','回看生成结果与状态，再判断哪些内容需要返修。','按适用范围查找规则，核对版本与关联商品。'];
    return `<section class="story-explorer" aria-label="NoStudio 界面浏览"><div class="story-screen-switch" aria-label="选择产品界面">${labels.map((label,i)=>`<button type="button" data-story-screen="${i}" aria-pressed="${i===0}" aria-controls="story-screen-${i}">${label}</button>`).join('')}</div>${project.productGuide.evidence.map((item,i)=>`<div id="story-screen-${i}" class="story-screen" ${i?'hidden':''}>${storyFigure(item.src,item.alt,'实践版本 · 2026.10.27')}<p class="story-image-note">${e(notes[i])}</p></div>`).join('')}</section>`;
  }
  if(id==='yogurt')return storyFigure('assets/works/yogurt-calendar-demo.webp','茉酸奶巡店日历，人员与门店名称已遮挡','团队项目界面 · 2026.10 · 展示排期承载方式');
  return storyFigure(project.image,project.alt,'产品概念图 · 实现说明见项目档案');
}

function renderStoryEvidence(id){
  if(id==='notv'){
    return `<section class="story-evidence" aria-label="分镜审核与批量生成">
      <h3>为什么先审分镜，再批量生成？</h3>
      <p>一次素材引用错误会影响整批镜头。我在早期流程里把脚本、商品约束和参考素材放进 Plan，提交前先核对关键镜头。</p>
      <div class="story-chapters" aria-label="跳转到录屏片段">
        <button type="button" data-story-time="120">2:00 · 查看脚本与素材如何进入 Plan</button>
        <button type="button" data-story-time="150">2:30 · 提交任务并轮询</button>
        <button type="button" data-story-time="195">3:15 · 查看生成结果</button>
      </div>
      <p class="story-source">录屏演示素材编排、提交与结果回看。P0 需求稿另外定义了首条验证与局部返修，底层功能由研发实现。</p>
    </section>`;
  }
  if(id==='nostudio'){
    return `<section class="story-evidence" aria-label="素材规则与验收">
      <h3>换了 SKU，哪些素材要重新绑定？</h3>
      <p>上方的商品资产界面里，牙膏商品卡显示已有 7 份素材。复盘该商品详情时，正面、侧面、背面三个必填素材槽位仍显示 0/3。文件上传后，还要按款式和用途建立绑定。</p>
      <dl class="story-asset-rules">
        <div><dt>商品外观</dt><dd>换 SKU 后重新绑定包装、颜色和结构参考，按新商品核对。</dd></div>
        <div><dt>场景与动作</dt><dd>通用环境图按任务复用。商品特写和使用动作引用新款对应的参考素材。</dd></div>
        <div><dt>验收示例</dt><dd>检查目标 SKU、素材用途和必填槽位。核对换款后的任务是否仍引用旧款素材。</dd></div>
      </dl>
      <p class="story-source">我的交付包括素材关联规则、异常复现步骤和验收条件。联调时曾遇到预检通过但参考视频生成被拒，后续分别核对真实生成、结果回读与计费。</p>
    </section>`;
  }
  return '';
}

function renderProjectStory(id){
  const e=escapeHTML,s=projectStories[id],p=projects[id];
  const sections=p.sections.map(([title,text])=>`<section class="detail-section"><h3>${e(title)}</h3><p>${e(text)}</p></section>`).join('');
  const recordBody=`${renderProductGuide(p.productGuide)}${caseStudies[id]?renderCaseStudy(id):''}${renderProductContext(p)}${sections}<p class="story-source">${e(p.note)}</p>`;
  const extraRecordings=p.recordings?.length>1?`<details class="story-archive"><summary>更多实操录屏 <span>服饰类 · ${e(p.recordings[1].duration)}</span></summary>${renderRecordings(p.recordings.slice(1))}</details>`:'';
  const links=(p.links||[]).map(link=>`<a href="${e(link.url)}" target="_blank" rel="noopener">${e(link.label)} ↗</a>`).join('');
  return `<article class="project-story">
    <header class="story-heading"><p>${e(s.context)}</p><h2 id="dialog-title">${e(s.name)}<small>（${e(s.descriptor)}）</small></h2></header>
    <div class="story-overview"><section class="story-first-read" aria-label="项目问题、职责与价值"><h3>${e(s.thesis)}</h3><dl><div><dt>解决什么问题</dt><dd>${e(s.problem)}</dd></div><div><dt>我做了什么</dt><dd>${e(s.role)}</dd></div></dl><section class="story-impact" aria-label="交付产物与价值"><h4>带来什么价值</h4><p class="story-value">${e(s.value)}</p>${s.valueNote?`<p class="story-value-note">${e(s.valueNote)}</p>`:''}<p class="story-deliverables"><span>交付</span>${e(s.deliverables)}</p></section></section><div class="story-primary-media">${storyMedia(id,p)}</div></div>
    <section class="story-flow" aria-label="输入、过程与输出"><ol>${s.steps.map(([label,text])=>`<li><span>${e(label)}</span><p>${e(text)}</p></li>`).join('')}</ol></section>
    ${renderStoryEvidence(id)}
    <aside class="story-judgment"><span class="story-label">一个关键判断</span><p>${e(s.focus)}</p></aside>
    <div class="story-footnotes">${links?`<div class="story-links">${links}</div>`:''}<details class="story-archive"><summary>项目档案 <span>完整职责、设计判断与交付依据</span></summary><div class="story-archive-body">${recordBody}</div></details>${extraRecordings}<div class="story-links">${id==='notv'?'<button data-detail="model-boundaries">模型选型与审美判断 ↗</button>':''}${p.url?`<a href="${e(p.url)}" target="_blank" rel="noopener">查看项目仓库 ↗</a>`:''}</div></div>
  </article>`;
}

document.addEventListener('click',event=>{
  const chapter=event.target.closest('[data-story-time]');
  if(chapter){
    const video=chapter.closest('.project-story').querySelector('.story-recording video');
    video.currentTime=Number(chapter.dataset.storyTime);
    video.scrollIntoView({block:'nearest'});
    video.focus({preventScroll:true});
    video.play().catch(()=>{});
    return;
  }
  const button=event.target.closest('[data-story-screen]');
  if(!button)return;
  const explorer=button.closest('.story-explorer');
  explorer.querySelectorAll('[data-story-screen]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  explorer.querySelectorAll('.story-screen').forEach((panel,i)=>{panel.hidden=String(i)!==button.dataset.storyScreen;});
});
