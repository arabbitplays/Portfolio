export const border_colors = [
  "border-pink-500",
  "border-violet-500",
  "border-cyan-500",
  "border-lime-500",
] as const;

export const decoration_colors = [
  "decoration-pink-500",
  "decoration-violet-500",
  "decoration-cyan-500",
  "decoration-lime-500",
] as const;

function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

export function getColorIdx(key: string, offset: number): number {
    let color_idx = (Math.abs(hashString(key)) + offset) % border_colors.length;
    return color_idx;
}
