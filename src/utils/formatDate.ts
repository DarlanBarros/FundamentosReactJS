/* eslint-disable import/no-duplicates */
import { parseISO, formatRelative } from 'date-fns';

import pt from 'date-fns/locale/pt-BR';

const formatDate = (date: string): string => {
  const data = date.split('.');

  const formatedDate = parseISO(data[0]);

  return formatRelative(formatedDate, 2020, { locale: pt });
};

export default formatDate;
