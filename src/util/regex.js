export const cmdRegex = {
  CREATE_KEY: /^(C)\s\s+([1-9]\d?)\s\s+([1-9]\d?)$/,
  INSERT_KEY: /^(N)\s\s+(\d+)\s\s+(\d+)\s\s+(\d{1,3})$/,
  SUM_KEY: /^(S)\s\s+(\d+)\s\s+(\d+)\s\s+(\d+)\s\s+(\d+)\s\s+(\d+)\s\s+(\d+)$/,
  EXIT_KEY: /^(Q)\s\s+$/
}
