type IRegExpVariants = keyof typeof regExpObject;

const regExpObject = {
  //Ввод больше 2-х пробелов
  NO_MULTIPLE_SPACES: /\s{2,}/,

  //Ввод без пробелов
  NO_SPACES: /\s/,

  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  ONE_LETTER: /[A-Za-zА-Яа-яЁё]/,

  TELEGRAM: /^@[a-zA-Z0-9_]{5,32}$/,

  URL: /^(https?:\/\/)?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/.*)?$/,
};

export const regExpHelper = (variant: IRegExpVariants): RegExp => regExpObject[variant];
