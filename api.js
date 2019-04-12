export const getNotesFromAPI = () => new Promise(resolve => setTimeout(() => resolve([
  {
    id: '1',
    title: 'Notiz 1',
    description: 'Das ist meine erste Notiz',
    isArchived: false
  },
  {
    id: '2',
    title: 'Notiz 2',
    description: 'Das ist meine zweite Notiz',
    isArchived: true
  },
  {
    id: '3',
    title: 'Notiz 3',
    description: 'Das ist meine dritte Notiz',
    isArchived: true
  }
]), 2000))

export const someAPICall = () => new Promise(resolve => setTimeout(resolve, 2000))
