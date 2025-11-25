import { useAiAssistAgg } from '#lib/domain/ai-assist'
import type { SseEvent } from '#lib/domain/ai-assist/define'

const aiAssistAgg = useAiAssistAgg()
const decoder = new TextDecoder('utf-8')

aiAssistAgg.events.onQueryStartedEvent.listen(async ({ data }) => {
  console.info('onQueryStartedEvent', data)
  const attachments = data.filesPath
  const res = await fetch(`/api/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${aiAssistAgg.states.apiKey.value}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      host: 'Kimi',
      query: data.query,
      attachments,
    }),
  })
  const reader = res.body?.getReader()
  for (;;) {
    const { value, done } = await reader!.read()
    if (done) break
    const str = decoder.decode(value, { stream: true })
    // 这里根据你的格式处理：直接输出、按 \n 切行、或拼到 buffer 再解析
    // datas.push(str)
    const events = str.split('data:')
    for (let event of events) {
      event = event.trim()
      if (!event) {
        continue
      }
      const eventObj: SseEvent | undefined = JSON.parse(event)
      if (!eventObj) {
        continue
      }
      const content = eventObj?.choices[0]?.delta?.content || ''
      if (!content) {
        content
      }
      if (typeof content !== 'string') {
        console.warn('content is not string', content)
        continue
      }
      aiAssistAgg.commands.conversationOnMessage(data.conversationId, content)
    }
    // console.debug('received content: ', str)
  }
  // 可选：flush 尾部
  decoder.decode()
  return res
})
