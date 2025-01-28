// const api_key = "AIzaSyBeYjsLzPjdo7d8qwoi-vmRjFcYZVRkXPk";

// const api_key = "AIzaSyBqJXemfupKhnP3WWrcFRHLIL8DG3PHmBU";

const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000 && value < 1000000) {
    return Math.floor(value / 1000) + "K";
  } else if (value <= 1000) {
    return value;
  }
};

export { valueConverter };
