export const generateData = () => {
    const data = [];
    for (let i = 1; i <= 365; i++) {
        data.push({
            date: `2025-${String(Math.floor(i / 30) + 1).padStart(2, "0")}-${String(i % 30 || 30).padStart(2, "0")}`,
            calories: Math.floor(Math.random() * 500) + 100,
            steps: Math.floor(Math.random() * 10000) + 2000,
            activeMinutes: Math.floor(Math.random() * 60) + 10,
            progress: Math.floor(Math.random() * 100),
        });
    }
    return data;
};
