import { Handler } from './Handler'

export class ProtocolHandler extends Handler {
  protected process(url: string): void {
    const index = url.indexOf('://')
    if (index !== -1) {
      this.displayResult('PROTOCOL', url.substring(0, index))
    } else {
      this.displayResult('PROTOCOL', 'NONE')
    }
  }
}
