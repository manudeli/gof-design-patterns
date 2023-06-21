import Draft from './Draft'

export default interface Display {
  title(draft: Draft): void
  author(draft: Draft): void
  content(draft: Draft): void
}
