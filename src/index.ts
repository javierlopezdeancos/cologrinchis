interface Color {
  background: string;
  text: string;
}


const warnColors: Color = {
  background: 'yellow',
  text: 'black'
}

const infoColors: Color = {
  background: 'yellow',
  text: 'black'
}

const logColors: Color = {
  background: '#e2e2e2',
  text: 'black'
}

export const warn = (label: string, message: string): void => {
  console.warn('%c' + label, `background-color: ${warnColors.background}; color: ${warnColors.text}; padding: 5px; font-weight: bold;`, message);
};

export const info = (label: string, message: string): void => {
  console.info('%c' + label, `background-color: ${infoColors.background}; color: ${infoColors.text}; padding: 5px; font-weight: bold;`, message);
};

export const log = (label: string, message: string): void => {
  console.log('%c' + label, `background-color: ${logColors.background}; color: ${logColors.text}; padding: 5px; font-weight: bold;`, message);
};
