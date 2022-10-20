import JSONDATA from "./countries.json";

const FindFlag = (code) => {
  const flag = JSONDATA.find((item) => item.code.toUpperCase() === code).image;
  return flag;
};

export default FindFlag;
