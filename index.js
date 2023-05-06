module.exports = function NumberToHex(num) {
  const val = Number(num);
  const toHexNum = "0x" + val.toString(16);
  return toHexNum;
};
