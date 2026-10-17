window.homepageContent = {
  zh: {
    lang: 'zh-CN',
    title: '刘宇杰 | Yujie Liu',
    description: '刘宇杰的学术个人主页 - 西安交通大学材料科学与工程学院',
    profile: {
      name: '刘宇杰',
      position: '博士研究生（硕博连读）',
      supervisor: '导师：Turab Lookman 教授（美国物理学会会士 APS Fellow）',
      badges: ['中共党员', '英语 CET-6', 'GPA: 3.958/5', '机器学习预测', '大模型逆向设计', 'AI Agent'],
      affiliations: [
        '西安交通大学 材料科学与工程学院',
        '金属材料强度国家重点实验室 / 多孔金属材料国家重点实验室'
      ],
      emails: [
        { text: 'liu_yujie@stu.xjtu.edu.cn', address: 'liu_yujie@stu.xjtu.edu.cn' }
      ],
      phone: '176-7117-1543',
      links: [
        { text: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=jOu_s-sAAAAJ' },
        { text: 'GitHub', url: 'https://github.com/Jack-Liu0227' }
      ]
    },
    sections: {
      about: {
        title: '个人简介',
        paragraphs: [
          '我是西安交通大学材料科学与工程学院硕博连读研究生，导师为 **Turab Lookman 教授**（美国物理学会会士 APS Fellow，前美国洛斯阿拉莫斯国家实验室资深科学家）。本科毕业于武汉理工大学新能源材料与器件专业（保研至西安交通大学）。',
          '我的主要研究方向为**机器学习模型预测**以及**大语言模型在材料中的性能预测与逆向设计**，紧密围绕材料信息学（Materials Informatics）前沿。致力于结合数据驱动算法、高通量计算与大语言模型（LLMs），解决先进无机材料与合金的关键性质预测、分布外泛化（OOD）及新型功能晶体结构的逆向自主发现问题。已在 ***Advanced Science***（第一作者）、***Advanced Materials***、***Applied Physics Letters*** 等国际期刊发表多篇高水平论文。',
          '学术之外：我热爱前沿 AI 技术的探索与 Vibe Coding 智能开发工作流，长期实践从单一 Agent 到多 Agent 协同任务看板架构，致力于打造端到端个人科研智能体（AI Agent）以实现自动化工作流；平时喜欢运动（篮球）和听音乐，保持积极乐观的生活态度。很高兴认识各位学术同仁与朋友，欢迎交流探讨！'
        ]
      },
      education: {
        title: '教育背景',
        items: [
          {
            period: '2023.09 — 至今',
            institution: '西安交通大学 (985)',
            degree: '材料科学与工程（保研） · 硕博连读（工学博士在读）',
            gpa: 'GPA：3.958 / 5',
            supervisor: '导师：Turab Lookman 教授（APS Fellow）',
            courses: '主修课程：计算方法、有限元方法及 CAE 软件应用、计算材料学、Physical Properties of Materials 等。'
          },
          {
            period: '2019.09 — 2023.07',
            institution: '武汉理工大学 (211)',
            degree: '新能源材料与器件 · 工学学士',
            gpa: 'GPA：3.92 / 5',
            courses: '主修课程：物理化学、材料科学基础、固体物理、半导体物理、新能源材料制备与性能实验等。'
          }
        ]
      },
      projects: {
        title: '项目经历',
        items: [
          {
            period: '2023.09 — 2025.09',
            title: '基于机器学习与大语言模型的材料性质预测与逆向设计',
            role: '课题负责人 / 核心研究员',
            content: '机器学习模型快速预测晶格热导率与力学弹性性质，大语言模型辅助超低晶格热导率硫属化物材料逆向设计。',
            method: '利用晶体图卷积网络（GNN）与深度卷积神经网络（CNN）训练性质预测模型，结合大语言模型实现新型功能晶体结构的筛选与逆向发现。',
            results: [
              '**Yujie Liu**, et al. **LLM-Assisted Design of Ultralow-κ Chalcogenides**. ***Advanced Science***, 2026: e78175. [DOI: 10.1002/advs.78175](https://doi.org/10.1002/advs.78175) <span class="paper-tag">顶刊一作 · 匹配最新论文</span>',
              '**Yujie Liu**, et al. **PINK: physical-informed machine learning for lattice thermal conductivity**. *Journal of Materials Informatics*, 2025, 5: 12. [DOI: 10.20517/jmi.2025.04](https://doi.org/10.20517/jmi.2025.04) | [arXiv:2503.17060](https://arxiv.org/abs/2503.17060) <span class="paper-tag">一作</span>',
              '**刘宇杰#**，王振宇#，雷航#，张国宇，咸家伟，高志斌*，孙军，宋海峰，丁向东*. **卷积神经网络辅助无机晶体弹性性质预测**. *物理学报 (Acta Physica Sinica)*, 2025, 74(12): 120702. [DOI: 10.7498/aps.74.20250013](https://doi.org/10.7498/aps.74.20250013) <span class="paper-tag">一作</span>'
            ]
          },
          {
            period: '2025.09 — 至今',
            title: '大语言模型在金属材料中的性能预测与设计',
            role: '课题核心研究员',
            content: '利用大语言模型增强金属材料性能预测与自主设计。',
            method: '利用通用大语言模型预测金属力学性能，结合最优传输（Optimal Transport）实现分布外（OOD）泛化；通过数据驱动和大模型结合实现新材料自主发现。',
            results: [
              'Turab Lookman*, **Yujie Liu**, Zhibin Gao*. **Materials informatics: Emergence to autonomous discovery in the age of ai**. ***Advanced Materials***, 2026, 38(29): e2515941. [DOI: 10.1002/adma.202515941](https://doi.org/10.1002/adma.202515941)',
              '**Yujie Liu**, et al. **LLM Property Prediction and Out-of-Distribution Generalization for Alloys via Optimal Transport** (*Under review*, 2026)'
            ]
          },
          {
            period: '2021.01 — 2022.09',
            title: '碳基材料用于分相传输 Zn 空气电池正极',
            role: '国家级大学生创新创业训练计划项目 · 项目负责人',
            content: '碳基骨架及其性能调优化的工艺调控。',
            method: '通过 3D 打印制备、冷干、碳化、电沉积等工艺调控电化学性能，实现了碳基双功能多孔骨架制备。',
            results: [
              '国家授权发明专利一项：《一种基于 3D 打印的锌空气电池复合正极的制备方法》（已授权）'
            ]
          }
        ]
      },
      agent_dev: {
        title: '社会实践 & 学生工作 & 开发经验',
        items: [
          {
            period: '2025.03 — 至今',
            title: '科研类 AI Agent 项目经验与智能体平台开发',
            content: '聚焦 AI Agent 在科研全流程中的落地应用，开发文献调研、数据挖掘到实验计算方案一体化推荐平台。',
            results: [
              '基于交小智平台的文献调研助手（**校级三等奖**）',
              '波尔 + Scimaster 科研智能体开发大赛——文献调研到实验方案推荐一体化平台（**优秀奖**）',
              '西安交通大学人工智能先导计划——“火山杯”（**三等奖**，2025年7月）'
            ]
          },
          {
            period: '2023.09 — 至今',
            title: 'Vibe Coding 自动化高效开发经验',
            content: '探索从单一 Agent 到多 Agent 协同与任务看板结合的高效率自动开发模式。',
            method: '熟练掌握并深度实践：Cursor → Augment Code → Trae/Qoder → Claude Code/Codex/Opencode → WorkBuddy → Pi → Multica/Orca/AionUI 工具体系，实现端到端任务看板与自动化流水线。'
          },
          {
            period: '2020.06 — 2021.06',
            title: '武汉理工大学数据科学协会 技术部部长',
            content: '担任部长期间负责技术部日常运营与数据分析技术分享，参与承办校级赛事《第十五届大学生职业生涯规划设计大赛》，学年获评校优秀学生干部。'
          }
        ]
      },
      publications: {
        title: '学术成果与论文',
        items: [
          '[1] **Yujie Liu**, Congran Jia, Yuzhou Hao, Xuejie Li, Yang Wang, Artem R. Oganov, Jun Sun, Xiangdong Ding, Turab Lookman*, Zhibin Gao*. **LLM-Assisted Design of Ultralow-κ Chalcogenides**. ***Advanced Science***, 2026: e78175. [DOI: 10.1002/advs.78175](https://doi.org/10.1002/advs.78175) <span class="paper-tag">第一作者 · 顶刊</span>',
          '[2] Turab Lookman*, **Yujie Liu**, Zhibin Gao*. **Materials Informatics: Emergence to Autonomous Discovery in the Age of AI**. ***Advanced Materials***, 2026, 38(29): e2515941. [DOI: 10.1002/adma.202515941](https://doi.org/10.1002/adma.202515941)',
          '[3] **Yujie Liu**, Xiaotian Wang, Yuzhou Hao, Xuejie Li, Jun Sun, Turab Lookman, Xiangdong Ding, Zhibin Gao*. **PINK: physical-informed machine learning for lattice thermal conductivity**. *Journal of Materials Informatics*, 2025, 5: 12. [DOI: 10.20517/jmi.2025.04](https://doi.org/10.20517/jmi.2025.04) | [arXiv:2503.17060](https://arxiv.org/abs/2503.17060) <span class="paper-tag">第一作者</span>',
          '[4] **刘宇杰#**，王振宇#，雷航#，张国宇，咸家伟，高志斌*，孙军，宋海峰，丁向东*. **卷积神经网络辅助无机晶体弹性性质预测**. *物理学报 (Acta Physica Sinica)*, 2025, 74(12): 120702. [DOI: 10.7498/aps.74.20250013](https://doi.org/10.7498/aps.74.20250013) <span class="paper-tag">第一作者</span>',
          '[5] Yuzhou Hao, **Yujie Liu**, Xuejie Li, Turab Lookman, Xiangdong Ding, Jun Sun, Zhibin Gao*. **LLM-driven discovery for carbon allotropes with bond-network entropy**. *Applied Physics Letters*, 2026, 128(10): 102103. [DOI: 10.1063/5.0298765](https://doi.org/10.1063/5.0298765)',
          '[6] Xuejie Li, Yuzhou Hao, **Yujie Liu**, Xiaotian Wang, Turab Lookman, Jun Sun, Xiangdong Ding, Zhibin Gao*. **Same-group element replacement enhances superconductivity in clathrate-like YH4**. *The Journal of Chemical Physics*, 2025, 163(10): 104702. [DOI: 10.1063/5.0289123](https://doi.org/10.1063/5.0289123)',
          '[7] Yang Wang, Xiaotian Wang, Yuzhou Hao, Xuejie Li, **Yujie Liu**, Jun Sun, Xiangdong Ding, Zhibin Gao*. **Strain-engineering the lattice thermal conductivity of 2D kagome silica**. *Applied Physics Letters*, 2025, 126(7): 072201. [DOI: 10.1063/5.0253456](https://doi.org/10.1063/5.0253456)',
          '[8] **Yujie Liu**, et al. **LLM Property Prediction and Out-of-Distribution Generalization for Alloys via Optimal Transport**. *Under review*, 2026.'
        ]
      },
      awards: {
        title: '荣誉奖励等',
        items: [
          { period: '2025.07', institution: '西安交通大学人工智能先导计划——“火山杯”三等奖', detail: '' },
          { period: '2025', institution: '基于交小智平台的文献调研助手（校级三等奖）', detail: '' },
          { period: '2025', institution: '波尔+Scimaster 科研智能体开发大赛 优秀奖', detail: '文献调研到实验方案推荐一体化平台' },
          { period: '2023 — 2024', institution: '西安交通大学 校级一等学业奖学金', detail: '' },
          { period: '2020 — 2021', institution: '国家励志奖学金', detail: '中华人民共和国教育部' },
          { period: '2019 — 2020', institution: '国家励志奖学金', detail: '中华人民共和国教育部' },
          { period: '2022', institution: '国家发明专利授权：《一种基于 3D 打印的锌空气电池复合正极的制备方法》', detail: '第一发明人学生成员，已授权' },
          { period: '2020 — 2021', institution: '武汉理工大学 校优秀学生干部', detail: '' }
        ]
      },
      interests: {
        title: '兴趣爱好与特长',
        paragraphs: [
          '**积极生活**：喜欢运动（篮球）和听音乐，对生活保持着积极乐观的态度。',
          '**前沿极客**：热爱研究前沿技术，对 AI agent 前沿领域以及其与工作、学习和生活结合、提高效率有着浓厚兴趣，计划打造个人 AI Agent 解放双手，实现自动化科研工作流。'
        ]
      }
    },
    labels: {
      skip: '跳到正文', photo: '照片', email: '电子邮箱', phone: '联系电话',
      navigation: '栏目导航', profile: '个人资料', unfilled: '待补充',
      pageViews: '访问次数', viewUnit: '次', visitors: '访客人数', visitorUnit: '人',
      statisticsLoading: '访问统计加载中…', statisticsUnavailable: '访问统计暂不可用',
      logos: { xjtu: '西安交通大学', whut: '武汉理工大学' },
      contentLabel: '研究内容：', methodLabel: '研究方法：', resultLabel: '工作成果：', courseLabel: '主修课程：'
    }
  },
  en: {
    lang: 'en',
    title: 'Yujie Liu',
    description: 'Academic homepage of Yujie Liu - School of Materials Science and Engineering, Xi\'an Jiaotong University',
    profile: {
      name: 'Yujie Liu',
      position: 'Ph.D. Student',
      supervisor: 'Supervisor: Prof. Turab Lookman (Fellow of APS)',
      badges: ['CPC Member', 'CET-6', 'GPA: 3.958/5', 'ML Prediction', 'LLM Inverse Design', 'AI Agent'],
      affiliations: [
        'School of Materials Science and Engineering, Xi\'an Jiaotong University',
        'State Key Laboratory for Mechanical Behavior of Materials'
      ],
      emails: [
        { text: 'liu_yujie@stu.xjtu.edu.cn', address: 'liu_yujie@stu.xjtu.edu.cn' }
      ],
      phone: '+86 176-7117-1543',
      links: [
        { text: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=jOu_s-sAAAAJ' },
        { text: 'GitHub', url: 'https://github.com/Jack-Liu0227' }
      ]
    },
    sections: {
      about: {
        title: 'About Me',
        paragraphs: [
          'I am a Ph.D. student (direct Ph.D. track) in the School of Materials Science and Engineering at Xi\'an Jiaotong University, supervised by **Prof. Turab Lookman** (Fellow of the American Physical Society, APS, former Senior Scientist at Los Alamos National Laboratory). I received my Bachelor\'s degree in New Energy Materials and Devices from Wuhan University of Technology (recommended for exemption from the National Entrance Exam to XJTU).',
          'My core research focuses on **Machine Learning Model Prediction** and **Large Language Models (LLMs) for Materials Property Prediction and Inverse Design**, closely situated within the frontier of Materials Informatics. I integrate data-driven algorithms, high-throughput calculations, and foundation models to tackle critical property prediction, out-of-distribution (OOD) generalization, and autonomous inverse design of novel inorganic materials and alloys. I have published papers in premier journals including ***Advanced Science*** (first author), ***Advanced Materials***, and ***Applied Physics Letters***.',
          'Outside academia, I am passionate about pioneering AI agent architectures and Vibe Coding workflows to build end-to-end scientific agents for workflow automation. In my spare time, I enjoy basketball and music. I warmly welcome academic discussions and collaborations!'
        ]
      },
      education: {
        title: 'Education',
        items: [
          {
            period: '2023.09 - Present',
            institution: 'Xi\'an Jiaotong University (985)',
            degree: 'Materials Science and Engineering (Direct Ph.D. Track, Early Admission)',
            gpa: 'GPA: 3.958 / 5',
            supervisor: 'Supervisor: Prof. Turab Lookman (APS Fellow)',
            courses: 'Key Courses: Computational Methods, Finite Element Method & CAE Applications, Computational Materials Science, Physical Properties of Materials, etc.'
          },
          {
            period: '2019.09 - 2023.07',
            institution: 'Wuhan University of Technology (211)',
            degree: 'New Energy Materials and Devices · B.Eng.',
            gpa: 'GPA: 3.92 / 5',
            courses: 'Key Courses: Physical Chemistry, Fundamentals of Materials Science, Solid State Physics, Semiconductor Physics, Experiments on New Energy Materials Preparation and Performance, etc.'
          }
        ]
      },
      projects: {
        title: 'Research Projects',
        items: [
          {
            period: '2023.09 - 2025.09',
            title: 'Materials Property Prediction and Inverse Design via Machine Learning and LLMs',
            role: 'Project Leader / Core Researcher',
            content: 'Rapid prediction of lattice thermal conductivity and elastic properties via machine learning models, and LLM-assisted inverse design of ultralow-κ chalcogenides.',
            method: 'Crystal graph convolutional networks (GNN) and convolutional neural networks (CNN) for property modeling, combined with foundation models for crystal screening and autonomous inverse discovery.',
            results: [
              '**Yujie Liu**, et al. **LLM-Assisted Design of Ultralow-κ Chalcogenides**. ***Advanced Science***, 2026: e78175. [DOI: 10.1002/advs.78175](https://doi.org/10.1002/advs.78175) <span class="paper-tag">First Author · Top Journal</span>',
              '**Yujie Liu**, et al. **PINK: physical-informed machine learning for lattice thermal conductivity**. *Journal of Materials Informatics*, 2025, 5: 12. [DOI: 10.20517/jmi.2025.04](https://doi.org/10.20517/jmi.2025.04) | [arXiv:2503.17060](https://arxiv.org/abs/2503.17060) <span class="paper-tag">First Author</span>',
              '**Yujie Liu#**, Zhenyu Wang#, Hang Lei#, Guoyu Zhang, Jiawei Xian, Zhibin Gao*, Jun Sun, Haifeng Song, Xiangdong Ding*. **Convolutional neural network-assisted prediction of elastic properties of inorganic crystals** (卷积神经网络辅助无机晶体弹性性质预测). *Acta Phys. Sin.*, 2025, 74(12): 120702. [DOI: 10.7498/aps.74.20250013](https://doi.org/10.7498/aps.74.20250013) <span class="paper-tag">First Author</span>'
            ]
          },
          {
            period: '2025.09 - Present',
            title: 'Large Language Models in Metal Materials: Property Prediction and Autonomous Design',
            role: 'Core Researcher',
            content: 'LLM-enhanced property prediction and autonomous inverse discovery for alloy systems.',
            method: 'Utilizing foundation models to forecast mechanical behavior, incorporating optimal transport for out-of-distribution (OOD) generalization, and combining data-driven workflows for new alloy discovery.',
            results: [
              'Turab Lookman*, **Yujie Liu**, Zhibin Gao*. **Materials informatics: Emergence to autonomous discovery in the age of ai**. ***Advanced Materials***, 2026, 38(29): e2515941. [DOI: 10.1002/adma.202515941](https://doi.org/10.1002/adma.202515941)',
              '**Yujie Liu**, et al. **LLM Property Prediction and Out-of-Distribution Generalization for Alloys via Optimal Transport** (*Under review*, 2026)'
            ]
          },
          {
            period: '2021.01 - 2022.09',
            title: 'Carbon-Based Scaffolds for Phase-Separated Transport in Zinc-Air Battery Cathodes',
            role: 'National Innovation Project · Project Leader',
            content: 'Microstructural and electrochemical tuning of carbon-based porous matrices.',
            method: '3D printing, freeze drying, carbonization, and electrodeposition to tailor dual-functional porous frameworks for zinc-air battery cathodes.',
            results: [
              'Authorized National Invention Patent: A method for preparing 3D-printed composite cathode for zinc-air batteries (Granted)'
            ]
          }
        ]
      },
      agent_dev: {
        title: 'Practical Experience & AI Agent Development',
        items: [
          {
            period: '2025.03 - Present',
            title: 'Scientific AI Agents & Multi-Agent Workflow Engineering',
            content: 'Engineering autonomous agents across scientific literature research, automated data extraction, and experimental protocol recommendation.',
            results: [
              'AI Literature Survey Assistant on Jiao-Xiao-Zhi Platform (**University 3rd Prize**)',
              'Boer + Scimaster AI Agent Development Contest: Literature-to-Experiment Platform (**Excellence Award**)',
              'AI Initiative "Volcano Cup", Xi\'an Jiaotong University (**3rd Prize**, July 2025)'
            ]
          },
          {
            period: '2023.09 - Present',
            title: 'Vibe Coding & Automated High-Efficiency Development',
            content: 'Designing multi-agent workflows and Kanban pipelines for automated scientific inquiry and software generation.',
            method: 'Deeply proficient in: Cursor → Augment Code → Trae/Qoder → Claude Code/Codex/Opencode → WorkBuddy → Pi → Multica/Orca/AionUI.'
          },
          {
            period: '2020.06 - 2021.06',
            title: 'Director of Technical Department, Data Science Association, WUT',
            content: 'Led data science tutorials, co-organized university career planning competitions, and awarded Outstanding Student Leader.'
          }
        ]
      },
      publications: {
        title: 'Publications',
        items: [
          '[1] **Yujie Liu**, Congran Jia, Yuzhou Hao, Xuejie Li, Yang Wang, Artem R. Oganov, Jun Sun, Xiangdong Ding, Turab Lookman*, Zhibin Gao*. **LLM-Assisted Design of Ultralow-κ Chalcogenides**. ***Advanced Science***, 2026: e78175. [DOI: 10.1002/advs.78175](https://doi.org/10.1002/advs.78175) <span class="paper-tag">First Author · Top Journal</span>',
          '[2] Turab Lookman*, **Yujie Liu**, Zhibin Gao*. **Materials Informatics: Emergence to Autonomous Discovery in the Age of AI**. ***Advanced Materials***, 2026, 38(29): e2515941. [DOI: 10.1002/adma.202515941](https://doi.org/10.1002/adma.202515941)',
          '[3] **Yujie Liu**, Xiaotian Wang, Yuzhou Hao, Xuejie Li, Jun Sun, Turab Lookman, Xiangdong Ding, Zhibin Gao*. **PINK: physical-informed machine learning for lattice thermal conductivity**. *Journal of Materials Informatics*, 2025, 5: 12. [DOI: 10.20517/jmi.2025.04](https://doi.org/10.20517/jmi.2025.04) | [arXiv:2503.17060](https://arxiv.org/abs/2503.17060) <span class="paper-tag">First Author</span>',
          '[4] **Yujie Liu#**, Zhenyu Wang#, Hang Lei#, Guoyu Zhang, Jiawei Xian, Zhibin Gao*, Jun Sun, Haifeng Song, Xiangdong Ding*. **Convolutional neural network-assisted prediction of elastic properties of inorganic crystals** (卷积神经网络辅助无机晶体弹性性质预测). *Acta Phys. Sin.*, 2025, 74(12): 120702. [DOI: 10.7498/aps.74.20250013](https://doi.org/10.7498/aps.74.20250013) <span class="paper-tag">First Author</span>',
          '[5] Yuzhou Hao, **Yujie Liu**, Xuejie Li, Turab Lookman, Xiangdong Ding, Jun Sun, Zhibin Gao*. **LLM-driven discovery for carbon allotropes with bond-network entropy**. *Applied Physics Letters*, 2026, 128(10): 102103. [DOI: 10.1063/5.0298765](https://doi.org/10.1063/5.0298765)',
          '[6] Xuejie Li, Yuzhou Hao, **Yujie Liu**, Xiaotian Wang, Turab Lookman, Jun Sun, Xiangdong Ding, Zhibin Gao*. **Same-group element replacement enhances superconductivity in clathrate-like YH4**. *The Journal of Chemical Physics*, 2025, 163(10): 104702. [DOI: 10.1063/5.0289123](https://doi.org/10.1063/5.0289123)',
          '[7] Yang Wang, Xiaotian Wang, Yuzhou Hao, Xuejie Li, **Yujie Liu**, Jun Sun, Xiangdong Ding, Zhibin Gao*. **Strain-engineering the lattice thermal conductivity of 2D kagome silica**. *Applied Physics Letters*, 2025, 126(7): 072201. [DOI: 10.1063/5.0253456](https://doi.org/10.1063/5.0253456)',
          '[8] **Yujie Liu**, et al. **LLM Property Prediction and Out-of-Distribution Generalization for Alloys via Optimal Transport**. *Under review*, 2026.'
        ]
      },
      awards: {
        title: 'Honors & Awards',
        items: [
          { period: '2025.07', institution: '3rd Prize, AI Initiative "Volcano Cup", Xi\'an Jiaotong University', detail: '' },
          { period: '2025', institution: '3rd Prize, AI Literature Research Assistant on Jiao-Xiao-Zhi Platform, XJTU', detail: '' },
          { period: '2025', institution: 'Excellence Award, Boer + Scimaster AI Agent Development Competition', detail: 'Literature-to-Experiment Integrated Platform' },
          { period: '2023 - 2024', institution: 'First-Class Academic Scholarship, Xi\'an Jiaotong University', detail: '' },
          { period: '2020 - 2021', institution: 'National Encouragement Scholarship', detail: 'Ministry of Education of China' },
          { period: '2019 - 2020', institution: 'National Encouragement Scholarship', detail: 'Ministry of Education of China' },
          { period: '2022', institution: 'Authorized National Invention Patent: 3D-Printed Composite Cathode for Zinc-Air Battery', detail: 'Granted' },
          { period: '2020 - 2021', institution: 'Outstanding Student Leader, Wuhan University of Technology', detail: '' }
        ]
      },
      interests: {
        title: 'Interests & Hobbies',
        paragraphs: [
          '**Sports & Life**: Fond of basketball and music, always maintaining an energetic and optimistic attitude.',
          '**Tech Exploration**: Passionate about frontier AI agents, automating research workflows, and pushing the boundaries of AI-driven autonomous discovery.'
        ]
      }
    },
    labels: {
      skip: 'Skip to content', photo: 'Photo', email: 'Email', phone: 'Phone',
      navigation: 'Page sections', profile: 'Personal profile', unfilled: 'to be added',
      pageViews: 'Page views', viewUnit: '', visitors: 'Visitors', visitorUnit: '',
      statisticsLoading: 'Loading visitor statistics...', statisticsUnavailable: 'Visitor statistics unavailable',
      logos: { xjtu: "Xi'an Jiaotong University", whut: 'Wuhan University of Technology' },
      contentLabel: 'Research Focus: ', methodLabel: 'Methodology: ', resultLabel: 'Key Outcomes: ', courseLabel: 'Core Courses: '
    }
  }
};
