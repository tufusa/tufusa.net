import { HTMLProcessingParser, jaModel } from 'budoux';
import { win } from 'budoux/dist/win';

const parser = new HTMLProcessingParser(jaModel, {
  separator: win.document.createElement('wbr'),
  className: 'budoux',
});

export const budoux = (html: string) => parser.translateHTMLString(html);
