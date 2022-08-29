export const markdownFormatter = (text: string) => {

  return text;
}

export const codeMarkdown = (text: string) => {
  const re = /`(.*?)`/g;
  const split = text.split(re);
  console.log(split);
  return split;
}