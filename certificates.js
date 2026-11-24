(() => {
  'use strict';

  const languageKey = 'academic-homepage-language';
  let language = 'zh';
  let activeCategory = 'all';
  let filteredItems = [];
  let modalIndex = -1;

  try {
    if (localStorage.getItem(languageKey) === 'en') language = 'en';
  } catch {
    // Continue with default
  }

  const certificates = [
    {
      id: 'caet-qitu',
      category: 'competition',
      date: '2026.11',
      file: 'assets/certificates/2026_11_caet_ai_education_qitu.jpg',
      downloadName: '2026-11_CAET_AI-Education_Second-Prize_Qitu-Zhixue.jpg',
      redacted: false,
      zh: {
        title: '“AI+教育”创新应用技能大赛 全国二等奖',
        issuer: '中国教育技术协会 (CAET)',
        detail: '作品《启途智学——与AI共成长，启发新思维》· 团队负责人 · 大学生AI创新创业组（大学生OPC创新创业 AI Agent）'
      },
      en: {
        title: 'National Second Prize — "AI + Education" Innovation Application Skills Competition',
        issuer: 'China Association for Educational Technology (CAET)',
        detail: '"Qitu Zhixue: Growing with AI, Inspiring New Thinking" · Team Leader · University OPC AI Agent Track'
      }
    },
    {
      id: 'caet-lanji',
      category: 'competition',
      date: '2026.11',
      file: 'assets/certificates/2026_11_caet_ai_education_lanji.jpg',
      downloadName: '2026-11_CAET_AI-Education_Second-Prize_Lanji-Zhiyan.jpg',
      redacted: false,
      zh: {
        title: '“AI+教育”创新应用技能大赛 全国二等奖',
        issuer: '中国教育技术协会 (CAET)',
        detail: '作品《览籍智研——个人科研辅助 Agent》· 团队成员 · AI+教科研服务创新赛道'
      },
      en: {
        title: 'National Second Prize — "AI + Education" Innovation Application Skills Competition',
        issuer: 'China Association for Educational Technology (CAET)',
        detail: '"Lanjing Zhiyan: Personal Research Assistant Agent" · Team Member · AI + Education & Research Service Track'
      }
    },
    {
      id: 'bohr-scimaster',
      category: 'competition',
      date: '2026.01',
      file: 'assets/certificates/2026_01_bohr_scimaster_researchmind.jpg',
      downloadName: '2026-01_Bohr-SciMaster_Excellence-Award_ResearchMind.jpg',
      redacted: false,
      zh: {
        title: '玻尔 + SciMaster 科研智能体开发大赛 优秀奖',
        issuer: '上海赛兰德智能科技 · 深势科技 · 北京科学智能研究院',
        detail: 'ResearchMind 队（2025年11月—2026年1月）'
      },
      en: {
        title: 'Excellence Award — Bohr + SciMaster Scientific AI Agent Development Contest',
        issuer: 'Sailand AI · DP Technology · AI for Science Institute, Beijing',
        detail: 'ResearchMind Team (Nov. 2025 – Jan. 2026)'
      }
    },
    {
      id: 'volcano-cup',
      category: 'competition',
      date: '2025.07',
      file: 'assets/certificates/2025_07_xjtu_volcano_cup.jpg',
      downloadName: '2025-07_XJTU_Volcano-Cup_Third-Prize.jpg',
      redacted: false,
      zh: {
        title: '西安交通大学“火山杯”人工智能创新大赛 三等奖',
        issuer: '西安交通大学“人工智能先导计划”竞赛组委会',
        detail: '作品《深度调研助手》· 科研增效赛道'
      },
      en: {
        title: 'Third Prize — XJTU "Volcano Cup" AI Innovation Contest',
        issuer: 'Xi\'an Jiaotong University AI Pioneer Initiative Committee',
        detail: '"Deep Research Assistant" · Research Efficiency Track'
      }
    },
    {
      id: 'ai-information-literacy',
      category: 'competition',
      date: '2025.10',
      file: 'assets/certificates/2025_10_xjtu_ai_information_literacy.jpg',
      downloadName: '2025-10_XJTU_AI-Information-Literacy_Excellence-Award.jpg',
      redacted: false,
      zh: {
        title: '2025年大学生“AI+信息素养”大赛西安交通大学校赛 优秀奖',
        issuer: '西安交通大学图书馆',
        detail: '在“2025年大学生‘AI+信息素养’大赛西安交通大学校赛”中荣获优秀奖'
      },
      en: {
        title: 'Excellence Award — 2025 University "AI + Information Literacy" Competition (XJTU Campus Contest)',
        issuer: 'Xi\'an Jiaotong University Library',
        detail: 'Recognized with Excellence Award in the 2025 "AI + Information Literacy" Competition at XJTU'
      }
    },
    {
      id: 'china-mobile-hackathon',
      category: 'competition',
      date: '2024.12',
      file: 'assets/certificates/2024_12_china_mobile_hackathon.jpg',
      downloadName: '2024-12_China-Mobile_Maker-Marathon_Third-Prize.jpg',
      redacted: false,
      zh: {
        title: '2024 年中国移动创客马拉松大赛 AI+行业应用专题赛 三等奖',
        issuer: '西安交通大学—中国移动通信集团有限公司数字政府联合研究院',
        detail: '项目《智热未来——AI驱动的热界面材料创新》'
      },
      en: {
        title: 'Third Prize — 2024 China Mobile Maker Marathon (AI+ Industry Application Track)',
        issuer: 'XJTU – China Mobile Joint Research Institute for Digital Government',
        detail: '"Smart Thermal Future: AI-Driven Innovation in Thermal Interface Materials"'
      }
    },
    {
      id: 'cet6',
      category: 'qualification',
      date: '2024.06',
      file: 'assets/certificates/2024_06_cet6.png',
      downloadName: '2024-06_CET6_Score-Report_Redacted.png',
      redacted: true,
      zh: {
        title: '全国大学英语六级考试（CET-6）成绩报告单',
        issuer: '教育部教育考试院 · 西安交通大学',
        detail: '总分 488（听力 177 / 阅读 184 / 写作和翻译 127）'
      },
      en: {
        title: 'College English Test Band 6 (CET-6) Score Report',
        issuer: 'NEEA, Ministry of Education · Xi\'an Jiaotong University',
        detail: 'Total Score: 488 (Listening 177 / Reading 184 / Writing & Translation 127)'
      }
    },
    {
      id: 'national-scholarship-2021',
      category: 'honor',
      date: '2021.11',
      file: 'assets/certificates/2021_11_national_encouragement_scholarship.jpg',
      downloadName: '2021-11_National-Encouragement-Scholarship_2020-2021.jpg',
      redacted: false,
      zh: {
        title: '2020—2021 学年“国家励志奖学金”',
        issuer: '武汉理工大学',
        detail: '连续两学年获得国家励志奖学金'
      },
      en: {
        title: 'National Encouragement Scholarship (2020–2021)',
        issuer: 'Wuhan University of Technology',
        detail: 'Awarded for two consecutive academic years'
      }
    },
    {
      id: 'outstanding-leader-2021',
      category: 'honor',
      date: '2021.11',
      file: 'assets/certificates/2021_11_outstanding_student_leader.jpg',
      downloadName: '2021-11_WHUT_Outstanding-Student-Leader.jpg',
      redacted: false,
      zh: {
        title: '2020—2021 学年“校优秀学生干部”',
        issuer: '武汉理工大学',
        detail: '德智体美劳全面发展，评为武汉理工大学校优秀学生干部'
      },
      en: {
        title: 'University Outstanding Student Leader (2020–2021)',
        issuer: 'Wuhan University of Technology',
        detail: 'Recognized for all-round academic and leadership excellence'
      }
    },
    {
      id: 'jiangxi-scholarship-2021',
      category: 'honor',
      date: '2021.11',
      file: 'assets/certificates/2021_11_jiangxi_building_materials_scholarship.jpg',
      downloadName: '2021-11_WHUT_Jiangxi-Building-Materials-Scholarship.jpg',
      redacted: false,
      zh: {
        title: '2020—2021 学年“江西建材三等奖学金”',
        issuer: '武汉理工大学',
        detail: '专项社会捐赠奖学金'
      },
      en: {
        title: 'Jiangxi Building Materials Third-Class Scholarship (2020–2021)',
        issuer: 'Wuhan University of Technology',
        detail: 'Sponsored academic merit scholarship'
      }
    },
    {
      id: 'ncre-python-2021',
      category: 'qualification',
      date: '2021.03',
      file: 'assets/certificates/2021_03_ncre_level2_python.png',
      downloadName: '2021-03_NCRE-Level2_Python_Redacted.png',
      redacted: true,
      zh: {
        title: '全国计算机等级考试二级合格证书（Python）',
        issuer: '教育部考试中心 (NCRE)',
        detail: '二级 Python 语言程序设计 · 成绩：良好'
      },
      en: {
        title: 'National Computer Rank Examination (NCRE) Level 2 — Python',
        issuer: 'National Education Examinations Authority (NEEA)',
        detail: 'Python Programming · Grade: Good'
      }
    },
    {
      id: 'cet4',
      category: 'qualification',
      date: '2020.12',
      file: 'assets/certificates/2020_12_cet4.png',
      downloadName: '2020-12_CET4_Score-Report_Redacted.png',
      redacted: true,
      zh: {
        title: '全国大学英语四级考试（CET-4）成绩报告单',
        issuer: '教育部教育考试院 · 武汉理工大学',
        detail: '总分 519（听力 155 / 阅读 197 / 写作和翻译 167）'
      },
      en: {
        title: 'College English Test Band 4 (CET-4) Score Report',
        issuer: 'NEEA, Ministry of Education · Wuhan University of Technology',
        detail: 'Total Score: 519 (Listening 155 / Reading 197 / Writing & Translation 167)'
      }
    },
    {
      id: 'national-scholarship-2020',
      category: 'honor',
      date: '2020.11',
      file: 'assets/certificates/2020_11_national_encouragement_scholarship.jpg',
      downloadName: '2020-11_National-Encouragement-Scholarship_2019-2020.jpg',
      redacted: false,
      zh: {
        title: '2019—2020 学年“国家励志奖学金”',
        issuer: '武汉理工大学',
        detail: '2019—2020 学年国家励志奖学金荣誉证书'
      },
      en: {
        title: 'National Encouragement Scholarship (2019–2020)',
        issuer: 'Wuhan University of Technology',
        detail: 'Awarded for academic excellence during the 2019–2020 academic year'
      }
    },
    {
      id: 'merit-student-2020',
      category: 'honor',
      date: '2020.11',
      file: 'assets/certificates/2020_11_merit_student.jpg',
      downloadName: '2020-11_WHUT_Merit-Student.jpg',
      redacted: false,
      zh: {
        title: '2019—2020 学年“校三好学生”',
        issuer: '武汉理工大学',
        detail: '德智体美劳全面发展，评为武汉理工大学校三好学生'
      },
      en: {
        title: 'University Merit Student (2019–2020)',
        issuer: 'Wuhan University of Technology',
        detail: 'Recognized for outstanding academic and personal achievements'
      }
    }
  ];

  const uiText = {
    zh: {
      lang: 'zh-CN',
      pageTitle: '荣誉与证书档案 | 刘宇杰 (Yujie Liu)',
      heading: '荣誉与证书档案',
      skip: '跳到正文',
      back: '← 返回个人主页',
      zipBtn: '打包下载全部证书 (.zip)',
      subtitle: '共收录 14 项竞赛获奖、奖学金荣誉及语言技能证书，支持点击查看大图、单份下载及一键打包下载。涉及个人身份证号与校验码的证书已作隐私脱敏处理。',
      categories: {
        all: '全部证书',
        competition: '竞赛获奖',
        honor: '奖学金与荣誉',
        qualification: '语言与技能'
      },
      preview: '查看大图',
      download: '下载原图',
      downloadModal: '下载此证书',
      redactedTag: '隐私已脱敏',
      close: '关闭',
      prev: '上一张',
      next: '下一张',
      logos: { xjtu: '西安交通大学', whut: '武汉理工大学' }
    },
    en: {
      lang: 'en',
      pageTitle: 'Certificates & Honors | Yujie Liu',
      heading: 'Certificates & Honors',
      skip: 'Skip to content',
      back: '← Back to Homepage',
      zipBtn: 'Download All Certificates (.zip)',
      subtitle: 'Archive of 14 competition awards, scholarships, and qualification certificates with full-size preview, individual download, and one-click ZIP archive. Personal ID and verification codes have been redacted for privacy.',
      categories: {
        all: 'All',
        competition: 'Competitions',
        honor: 'Scholarships & Honors',
        qualification: 'Language & Skills'
      },
      preview: 'Preview',
      download: 'Download',
      downloadModal: 'Download Certificate',
      redactedTag: 'Redacted',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
      logos: { xjtu: 'Xi\'an Jiaotong University', whut: 'Wuhan University of Technology' }
    }
  };

  const els = {
    heading: document.getElementById('cert-page-heading'),
    skip: document.getElementById('cert-skip'),
    backLink: document.getElementById('cert-back-link'),
    zipBtn: document.getElementById('cert-zip-btn'),
    subtitle: document.getElementById('cert-subtitle'),
    filters: document.getElementById('cert-filters'),
    grid: document.getElementById('cert-grid'),
    langBtn: document.getElementById('language-switch'),
    modal: document.getElementById('cert-modal'),
    modalBackdrop: document.getElementById('cert-modal-backdrop'),
    modalTitle: document.getElementById('cert-modal-title'),
    modalSub: document.getElementById('cert-modal-sub'),
    modalImg: document.getElementById('cert-modal-img'),
    modalCounter: document.getElementById('cert-modal-counter'),
    modalDownload: document.getElementById('cert-modal-download'),
    modalClose: document.getElementById('cert-modal-close'),
    modalPrev: document.getElementById('cert-modal-prev'),
    modalNext: document.getElementById('cert-modal-next')
  };

  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function countByCategory(cat) {
    if (cat === 'all') return certificates.length;
    return certificates.filter(item => item.category === cat).length;
  }

  function renderFilters() {
    const t = uiText[language];
    const order = ['all', 'competition', 'honor', 'qualification'];
    els.filters.replaceChildren(...order.map(cat => {
      const btn = el('button', `${t.categories[cat]} (${countByCategory(cat)})`, 'cert-filter-btn');
      btn.type = 'button';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(activeCategory === cat));
      if (activeCategory === cat) btn.classList.add('active');
      btn.addEventListener('click', () => {
        activeCategory = cat;
        renderFilters();
        renderGrid();
      });
      return btn;
    }));
  }

  function renderGrid() {
    const t = uiText[language];
    filteredItems = activeCategory === 'all'
      ? certificates
      : certificates.filter(item => item.category === activeCategory);

    els.grid.replaceChildren(...filteredItems.map((item, idx) => {
      const info = item[language];
      const card = el('article', undefined, 'cert-card');

      const thumbBtn = el('button', undefined, 'cert-thumb-btn');
      thumbBtn.type = 'button';
      thumbBtn.setAttribute('aria-label', `${t.preview}: ${info.title}`);
      thumbBtn.addEventListener('click', () => openModal(idx));

      const img = el('img', undefined, 'cert-thumb-img');
      img.src = item.file;
      img.alt = info.title;
      img.loading = 'lazy';
      thumbBtn.append(img);

      if (item.redacted) {
        thumbBtn.append(el('span', t.redactedTag, 'cert-redacted-badge'));
      }

      const body = el('div', undefined, 'cert-card-body');
      const meta = el('div', undefined, 'cert-card-meta');
      meta.append(
        el('span', t.categories[item.category], 'paper-tag'),
        el('span', item.date, 'cert-card-date')
      );

      const title = el('h2', info.title, 'cert-card-title');
      const issuer = el('p', info.issuer, 'cert-card-issuer');
      const detail = el('p', info.detail, 'cert-card-detail');
      body.append(meta, title, issuer, detail);

      const actions = el('div', undefined, 'cert-card-actions');
      const previewBtn = el('button', t.preview, 'cert-action-btn secondary');
      previewBtn.type = 'button';
      previewBtn.addEventListener('click', () => openModal(idx));

      const downloadLink = el('a', t.download, 'cert-action-btn primary');
      downloadLink.href = item.file;
      downloadLink.download = item.downloadName;

      actions.append(previewBtn, downloadLink);
      card.append(thumbBtn, body, actions);
      return card;
    }));
  }

  function updateModalContent() {
    if (modalIndex < 0 || modalIndex >= filteredItems.length) return;
    const item = filteredItems[modalIndex];
    const info = item[language];
    const t = uiText[language];

    els.modalTitle.textContent = info.title;
    els.modalSub.textContent = `${item.date} · ${info.issuer}`;
    els.modalImg.src = item.file;
    els.modalImg.alt = info.title;
    els.modalCounter.textContent = `${modalIndex + 1} / ${filteredItems.length}`;
    els.modalDownload.href = item.file;
    els.modalDownload.download = item.downloadName;
    els.modalDownload.textContent = t.downloadModal;
    els.modalPrev.hidden = filteredItems.length <= 1;
    els.modalNext.hidden = filteredItems.length <= 1;
  }

  function openModal(index) {
    modalIndex = index;
    updateModalContent();
    els.modal.hidden = false;
    document.body.style.overflow = 'hidden';
    els.modalClose.focus();
  }

  function closeModal() {
    els.modal.hidden = true;
    document.body.style.overflow = '';
    modalIndex = -1;
  }

  function stepModal(delta) {
    if (modalIndex < 0 || !filteredItems.length) return;
    modalIndex = (modalIndex + delta + filteredItems.length) % filteredItems.length;
    updateModalContent();
  }

  function render() {
    const t = uiText[language];
    document.documentElement.lang = t.lang;
    document.title = t.pageTitle;
    els.heading.textContent = t.heading;
    els.skip.textContent = t.skip;
    els.backLink.textContent = t.back;
    els.zipBtn.textContent = t.zipBtn;
    els.subtitle.textContent = t.subtitle;
    els.modalClose.setAttribute('aria-label', t.close);
    els.modalPrev.setAttribute('aria-label', t.prev);
    els.modalNext.setAttribute('aria-label', t.next);

    for (const node of document.querySelectorAll('[data-logo]')) {
      if (t.logos[node.dataset.logo]) node.alt = t.logos[node.dataset.logo];
    }

    els.langBtn.textContent = language === 'zh' ? 'English' : '中文';
    els.langBtn.lang = language === 'zh' ? 'en' : 'zh-CN';
    els.langBtn.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');

    renderFilters();
    renderGrid();
    if (!els.modal.hidden) updateModalContent();
  }

  els.langBtn.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem(languageKey, language); } catch { /* Ignore */ }
    render();
  });

  els.modalClose.addEventListener('click', closeModal);
  els.modalBackdrop.addEventListener('click', closeModal);
  els.modalPrev.addEventListener('click', () => stepModal(-1));
  els.modalNext.addEventListener('click', () => stepModal(1));

  document.addEventListener('keydown', event => {
    if (els.modal.hidden) return;
    if (event.key === 'Escape') closeModal();
    else if (event.key === 'ArrowLeft') stepModal(-1);
    else if (event.key === 'ArrowRight') stepModal(1);
  });

  render();
})();
