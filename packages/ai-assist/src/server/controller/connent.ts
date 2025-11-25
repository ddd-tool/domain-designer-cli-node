import { HttpWrapper } from '../wrapper'

export function handleConnect(wrapper: HttpWrapper) {
  wrapper.keepAliveClient()
}
