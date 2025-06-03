
export const getCompetitionColor = (level: string) => {
  switch (level) {
    case 'Low': return 'text-green-500 bg-green-50 dark:bg-green-950/20';
    case 'Medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20';
    case 'High': return 'text-red-500 bg-red-50 dark:bg-red-950/20';
    default: return 'text-gray-500 bg-gray-50 dark:bg-gray-950/20';
  }
};
