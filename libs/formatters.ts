export const formatTime = (timeInSeconds: number): string => {
    if (typeof timeInSeconds !== 'number' || isNaN(timeInSeconds)) {
      return '0:00';
    }
    
    // Ensure timeInSeconds is a positive number
    timeInSeconds = Math.max(0, timeInSeconds);
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };