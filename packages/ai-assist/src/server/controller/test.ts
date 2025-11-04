import { HttpWrapper } from '../wrapper'

export function handleTest(wrapper: HttpWrapper) {
  wrapper.replyJson(200, { status: 'ok' })
}
