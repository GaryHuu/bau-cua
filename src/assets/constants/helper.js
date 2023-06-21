import { FACES } from './index'

export function getRandomResult() {
  return [
    FACES[Math.floor(Math.random() * 6)],
    FACES[Math.floor(Math.random() * 6)],
    FACES[Math.floor(Math.random() * 6)],
  ]
}
