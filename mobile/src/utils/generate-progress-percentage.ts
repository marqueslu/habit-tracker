export function generateProgressPercentage(total: number, completed: number) {
  return Math.floor((completed / total) * 100)
}