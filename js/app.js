
/**
 * Fetch curriculum data from JSON file
 * @param {string|null} audience - 'teacher', 'parent', 'student' or null for all
 * @returns {Promise<Array>} - Array of modules
 */
async function getCurriculum(audience = null) {
    try {
        const response = await fetch('data/curriculum.json');
        const data = await response.json();
        
        if (audience) {
            return data.filter(module => {
                const moduleAudience = module.audience || 'student';
                return moduleAudience === audience;
            });
        }
        return data;
    } catch (error) {
        console.error('Error loading curriculum:', error);
        return [];
    }
}

/**
 * Initialize Lucide icons
 */
function initIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

/**
 * Helper to get status colors (similar to PHP version)
 */
function getStatusColor(status) {
    switch (status) {
        case 'completed': return 'bg-green-100 text-green-700 border-green-200';
        case 'active': return 'bg-blue-100 text-blue-700 border-blue-200';
        case 'locked': return 'bg-gray-100 text-gray-500 border-gray-200';
        default: return 'bg-gray-100 text-gray-700';
    }
}
