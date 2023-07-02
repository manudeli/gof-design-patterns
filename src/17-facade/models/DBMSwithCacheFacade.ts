import { Cache } from './Cache'
import { DBMS } from './DBMS'
import { Message } from './Message'

export class DBMSwithCacheFacade {
  constructor(private resources: { dbms: DBMS; cache: Cache }) {}

  query(name: string, options: { onLoading: () => void; onSuccess: () => void; domOutput: Element }): void {
    const row = this.resources.cache.get(name)

    if (!row) {
      options.onLoading()

      this.resources.dbms.query(name, (row) => {
        options.onSuccess()
        if (row) {
          this.resources.cache.put(row)
        }
        const message = new Message(row)
        message.print(options.domOutput)
      })
    } else {
      const message = new Message(row)
      message.print(options.domOutput)
    }
  }
}
