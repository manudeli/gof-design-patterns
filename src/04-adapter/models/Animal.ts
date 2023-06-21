export default abstract class Animal {
  constructor(protected name: string) {}
  abstract sound(): void
}
