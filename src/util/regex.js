export const cmdRegex = {
  CREATE_KEY: /^(C)\s([1-9]\d?)\s([1-9]\d?)$/,
  INSERT_KEY: /^(N)\s(\d+)\s(\d+)\s(\d{1,3})$/,
  SUM_KEY: /^(S)\s(\d+)\s(\d+)\s(\d+)\s(\d+)\s(\d+)\s(\d+)$/,
  EXIT_KEY: /^(Q)$/
}
