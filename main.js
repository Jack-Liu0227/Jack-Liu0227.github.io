(() => {
  'use strict';

  const content = window.homepageContent;
  const settings = window.homepageSettings;
  const languageKey = 'academic-homepage-language';
  const sectionOrder = ['about', 'education', 'projects', 'agent_dev', 'publications', 'awards', 'interests'];
  const main = document.getElementById('main-content');
  const languageButton = document.getElementById('language-switch');
  const status = document.getElementById('statistics-status');
  let language = 'zh';
  let statisticsState = 'statisticsUnavailable';

  try {
    if (localStorage.getItem(languageKey) === 'en') language = 'en';
  } catch {
    // Continue with default if storage is restricted
  }

  function showRandomGreeting() {
    const storageKey = 'academic-homepage-greeting';
    const phrases = settings.greetings?.length ? settings.greetings : ['Hello!'];
    let previous = '';
    try { previous = localStorage.getItem(storageKey); } catch { /* Ignore */ }
    const alternatives = phrases.filter(phrase => phrase !== previous);
    const choices = alternatives.length ? alternatives : phrases;
    const greeting = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('random-greeting').textContent = greeting;
    try { localStorage.setItem(storageKey, greeting); } catch { /* Ignore */ }
  }

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function safeLink(text, url) {
    if (!url) return null;
    try {
      const parsed = new URL(url, document.baseURI);
      if (!['http:', 'https:', 'mailto:'].includes(parsed.protocol)) return null;
      const anchor = element('a', text);
      anchor.href = url;
      if (parsed.protocol !== 'mailto:') {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }
      return anchor;
    } catch {
      return null;
    }
  }

  // Parse markdown-style [link](url), ***bold-italic***, **bold**, *italic*, and <span class="paper-tag">...</span>
  function parseFormattedText(text) {
    const fragment = document.createDocumentFragment();
    // Matches: [link](url) | <span class="...">...</span> | ***bold-italic*** | **bold** | *italic*
    const pattern = /\[([^\]]+)\]\(([^\s)]+)\)|<span class="([^"]+)">([^<]+)<\/span>|\*\*\*([^*]+)\*\*\*|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
    let cursor = 0;
    let match;

    while ((match = pattern.exec(text)) !== null) {
      if (match.index > cursor) {
        fragment.append(document.createTextNode(text.slice(cursor, match.index)));
      }
      if (match[1] !== undefined) {
        // [text](url)
        const a = safeLink(match[1], match[2]);
        fragment.append(a || document.createTextNode(match[0]));
      } else if (match[3] !== undefined) {
        // <span class="...">text</span>
        const span = element('span', match[4], match[3]);
        fragment.append(span);
      } else if (match[5] !== undefined) {
        // ***bold-italic***
        const strong = element('strong');
        strong.append(element('em', match[5]));
        fragment.append(strong);
      } else if (match[6] !== undefined) {
        // **bold**
        fragment.append(element('strong', match[6]));
      } else if (match[7] !== undefined) {
        // *italic*
        fragment.append(element('em', match[7]));
      }
      cursor = pattern.lastIndex;
    }

    if (cursor < text.length) {
      fragment.append(document.createTextNode(text.slice(cursor)));
    }
    return fragment;
  }

  function linkedParagraph(text) {
    const paragraph = element('p');
    paragraph.append(parseFormattedText(text));
    return paragraph;
  }

  function renderProfile(data) {
    const profile = data.profile;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-position').textContent = profile.position;

    // Supervisor
    const supEl = document.getElementById('profile-supervisor');
    if (supEl) {
      supEl.textContent = profile.supervisor;
    }

    // Badges
    const badgesEl = document.getElementById('profile-badges');
    if (badgesEl && profile.badges) {
      badgesEl.replaceChildren(
        ...profile.badges.map(b => element('span', b, 'profile-tag'))
      );
    }

    // Affiliations
    document.getElementById('profile-affiliations').replaceChildren(
      ...profile.affiliations.map(text => element('p', text))
    );

    // Emails
    document.getElementById('profile-emails').replaceChildren(
      ...profile.emails.map(email => {
        return safeLink(email.text || email.address, email.address ? `mailto:${email.address}` : '') || element('span', email.text);
      })
    );

    // Phone
    const phoneEl = document.getElementById('profile-phone');
    if (phoneEl) {
      phoneEl.textContent = profile.phone || '';
    }

    // Links
    document.getElementById('profile-links').replaceChildren(
      ...profile.links.map(link => {
        const item = element('li');
        item.append(safeLink(link.text, link.url) || element('span', `${link.text} (${data.labels.unfilled})`, 'unfilled-link'));
        return item;
      })
    );

    // Portrait
    const portrait = document.getElementById('portrait');
    const placeholder = document.getElementById('portrait-placeholder');
    portrait.alt = profile.name;
    if (settings.portrait && !portrait.dataset.failed) {
      portrait.onerror = () => {
        portrait.dataset.failed = 'true';
        portrait.hidden = true;
        placeholder.hidden = false;
      };
      if (portrait.getAttribute('src') !== settings.portrait) portrait.src = settings.portrait;
      portrait.hidden = false;
      placeholder.hidden = true;
    }
  }

  function renderSection(id, data, labels) {
    if (!data) return element('div');
    const section = element('section', undefined, 'content-section');
    section.id = id;
    section.setAttribute('aria-labelledby', `${id}-title`);

    // Solid blue badge heading matching resume PPTX
    const heading = element('h2', data.title, 'section-badge-header');
    heading.id = `${id}-title`;
    section.append(heading);

    if (id === 'about' || id === 'interests') {
      const paragraphs = element('div', undefined, 'paragraphs');
      paragraphs.append(...data.paragraphs.map(linkedParagraph));
      section.append(paragraphs);
    } else if (id === 'education') {
      const list = element('div', undefined, 'education-list');
      list.append(...data.items.map(entry => {
        const card = element('div', undefined, 'resume-card');
        const header = element('div', undefined, 'resume-card-header');
        const titleArea = element('div', undefined, 'resume-card-title');
        titleArea.append(element('span', undefined, 'item-square'), document.createTextNode(entry.institution));
        header.append(titleArea, element('span', entry.period, 'resume-card-period'));

        const body = element('div', undefined, 'resume-card-body');
        const deg = element('div', undefined, 'resume-field');
        deg.append(element('strong', entry.degree), document.createTextNode(' | ' + entry.gpa));
        body.append(deg);

        if (entry.supervisor) {
          const sup = element('div', undefined, 'resume-field');
          sup.append(parseFormattedText(entry.supervisor));
          body.append(sup);
        }

        if (entry.courses) {
          const crs = element('div', undefined, 'resume-field');
          crs.append(parseFormattedText(entry.courses));
          body.append(crs);
        }

        card.append(header, body);
        return card;
      }));
      section.append(list);
    } else if (id === 'projects' || id === 'agent_dev') {
      const list = element('div', undefined, 'projects-list');
      list.append(...data.items.map(entry => {
        const card = element('div', undefined, 'resume-card');
        const header = element('div', undefined, 'resume-card-header');
        const titleArea = element('div', undefined, 'resume-card-title');
        titleArea.append(element('span', undefined, 'item-square'), document.createTextNode(entry.title));
        if (entry.role) {
          const roleBadge = element('span', entry.role, 'paper-tag');
          titleArea.append(roleBadge);
        }
        header.append(titleArea, element('span', entry.period, 'resume-card-period'));

        const body = element('div', undefined, 'resume-card-body');

        if (entry.content) {
          const f1 = element('div', undefined, 'resume-field');
          const lbl = element('span', labels.contentLabel, 'resume-field-label');
          f1.append(lbl, parseFormattedText(entry.content));
          body.append(f1);
        }

        if (entry.method) {
          const f2 = element('div', undefined, 'resume-field');
          const lbl2 = element('span', labels.methodLabel, 'resume-field-label');
          f2.append(lbl2, parseFormattedText(entry.method));
          body.append(f2);
        }

        if (entry.results && entry.results.length) {
          const f3 = element('div', undefined, 'resume-field');
          const lbl3 = element('span', labels.resultLabel, 'resume-field-label');
          f3.append(lbl3);
          const ul = element('ul', undefined, 'resume-results-list');
          ul.append(...entry.results.map(res => {
            const li = element('li');
            li.append(parseFormattedText(res));
            return li;
          }));
          f3.append(ul);
          body.append(f3);
        }

        card.append(header, body);
        return card;
      }));
      section.append(list);
    } else if (id === 'publications') {
      const list = element('div', undefined, 'publication-list');
      list.append(...data.items.map(citation => {
        const item = element('div', undefined, 'publication-item');
        item.append(parseFormattedText(citation));
        return item;
      }));
      section.append(list);
    } else if (id === 'awards') {
      const list = element('ul', undefined, 'history-list');
      list.append(...data.items.map(entry => {
        const item = element('li');
        const details = element('div', undefined, 'history-details');
        const inst = linkedParagraph(entry.institution);
        inst.className = 'history-institution';
        details.append(inst);
        if (entry.detail) {
          const det = linkedParagraph(entry.detail);
          det.className = 'history-detail-text';
          details.append(det);
        }
        item.append(element('span', entry.period, 'history-period'), details);
        return item;
      }));
      section.append(list);
    }
    return section;
  }

  function render() {
    const data = content[language];
    document.documentElement.lang = data.lang;
    document.title = data.title;
    document.querySelector('meta[name="description"]').content = data.description;
    for (const node of document.querySelectorAll('[data-label]')) {
      if (data.labels[node.dataset.label] !== undefined) {
        node.textContent = data.labels[node.dataset.label];
      }
    }
    for (const node of document.querySelectorAll('[data-logo]')) {
      if (data.labels.logos[node.dataset.logo] !== undefined) {
        node.alt = data.labels.logos[node.dataset.logo];
      }
    }
    for (const link of document.querySelectorAll('[data-section]')) {
      const secData = data.sections[link.dataset.section];
      if (secData) link.textContent = secData.title;
    }
    document.getElementById('section-nav').setAttribute('aria-label', data.labels.navigation);
    document.getElementById('profile').setAttribute('aria-label', data.labels.profile);
    languageButton.textContent = language === 'zh' ? 'English' : '中文';
    languageButton.lang = language === 'zh' ? 'en' : 'zh-CN';
    languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
    renderProfile(data);
    main.replaceChildren(...sectionOrder.map(id => renderSection(id, data.sections[id], data.labels)));
    if (status) status.textContent = data.labels[statisticsState] || '';
  }

  languageButton.addEventListener('click', () => {
    const currentSection = [...main.children].find(section => section.getBoundingClientRect().bottom > 0);
    const offset = currentSection?.getBoundingClientRect().top;
    const restorePosition = window.scrollY > main.offsetTop;
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem(languageKey, language); } catch { /* Ignore */ }
    render();
    if (restorePosition && currentSection) {
      const nextSection = document.getElementById(currentSection.id);
      if (nextSection) {
        window.scrollBy(0, nextSection.getBoundingClientRect().top - offset);
      }
    }
  });

  function setStatisticsState(state) {
    statisticsState = state;
    if (status) status.textContent = content[language].labels[state] || '';
  }

  function loadStatistics() {
    const config = settings.statistics;
    if (!config.enabled) return;
    const host = location.hostname;
    const isAllowed = config.hostnames.some(h => host === h || host.endsWith('.' + h));
    if (!isAllowed) return;

    setStatisticsState('statisticsLoading');
    const values = ['site_pv', 'site_uv'].map(key => document.getElementById(`busuanzi_value_${key}`));
    const containers = ['site_pv', 'site_uv'].map(key => document.getElementById(`busuanzi_container_${key}`));
    
    const observer = new MutationObserver(() => {
      if (values.some(node => node && node.textContent.trim())) {
        if (status) status.hidden = true;
        containers.forEach(c => { if (c) c.style.display = 'inline'; });
        clearTimeout(timeout);
      }
      if (values.every(node => node && node.textContent.trim())) observer.disconnect();
    });
    for (const value of values) {
      if (value) observer.observe(value, { childList: true, characterData: true, subtree: true });
    }
    const timeout = setTimeout(() => setStatisticsState('statisticsUnavailable'), 10000);
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    script.onerror = () => {
      clearTimeout(timeout);
      observer.disconnect();
      setStatisticsState('statisticsUnavailable');
    };
    document.body.append(script);
  }

  render();
  showRandomGreeting();
  window.addEventListener('pageshow', event => {
    if (event.persisted) showRandomGreeting();
  });
  const initialSection = sectionOrder.find(id => location.hash === `#${id}`);
  if (initialSection) requestAnimationFrame(() => {
    const el = document.getElementById(initialSection);
    if (el) el.scrollIntoView();
  });
  loadStatistics();
})();
