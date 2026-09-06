const form = document.querySelector('#ask-form');
const input = document.querySelector('#question');
const send = document.querySelector('#send');
const messages = document.querySelector('#messages');

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);
}

function addUserMessage(text) {
  messages.insertAdjacentHTML('beforeend', `
    <article class="message user">
      <div class="bubble"><p>${escapeHtml(text)}</p></div>
    </article>`);
}

function addAgentMessage(result) {
  const sources = result.sources?.length ? `
    <div class="sources"><strong>官网依据</strong>${result.sources.map(source =>
      `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">↗ ${escapeHtml(source.title)}</a>`
    ).join('')}</div>` : '';
  const entities = result.entities?.length ? `
    <div class="entity-tags">${result.entities.slice(0, 10).map(entity =>
      `<span>${escapeHtml(entity.name)} · ${escapeHtml(entity.type)}</span>`
    ).join('')}</div>` : '';
  messages.insertAdjacentHTML('beforeend', `
    <article class="message assistant">
      <div class="avatar">KG</div>
      <div class="bubble">
        <p>${escapeHtml(result.answer)}</p>${entities}${sources}
        <small>${escapeHtml(result.reasoning || '知识图谱检索')}</small>
      </div>
    </article>`);
  messages.scrollTop = messages.scrollHeight;
}

async function ask(question) {
  if (!question.trim() || send.disabled) return;
  addUserMessage(question);
  input.value = '';
  send.disabled = true;
  send.textContent = '查询中…';
  messages.scrollTop = messages.scrollHeight;
  try {
    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || '请求失败');
    addAgentMessage(result);
  } catch (error) {
    addAgentMessage({ answer: `服务暂时不可用：${error.message}`, sources: [], entities: [] });
  } finally {
    send.disabled = false;
    send.innerHTML = '查询图谱 <span>↗</span>';
    input.focus();
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  ask(input.value);
});
input.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});
document.querySelectorAll('[data-question]').forEach(button => {
  button.addEventListener('click', () => ask(button.dataset.question));
});

fetch('/api/stats').then(response => response.json()).then(stats => {
  document.querySelector('#entity-count').textContent = stats.entities;
  document.querySelector('#relationship-count').textContent = stats.relationships;
  document.querySelector('#source-count').textContent = stats.sources;
}).catch(() => {});

