import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: Date) => format(date, 'dd MMMM yyyy', { locale: ru });

export const parseDate = (dateString: string) => parse(dateString, 'yyyy-mm-dd', new Date());
