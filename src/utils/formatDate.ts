/* eslint-disable import/no-duplicates */
import { format, parseISO } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';

const formatDate = (value: string): string => {
  const date = format(parseISO(value), 'dd/MM/yyyy', { locale });

  return date;
};

export default formatDate;
