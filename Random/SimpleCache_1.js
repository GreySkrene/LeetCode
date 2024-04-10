class SearchCache {
    constructor() {
        this.cache = {};
    }

    // Method to check if a query is cached
    isCached(query) {
        return this.cache.hasOwnProperty(query);
    }

    // Method to get cached results for a query
    getCachedResults(query) {
        if (this.isCached(query)) {
            return this.cache[query];
        } else {
            return null; // Query not found in cache
        }
    }

    // Method to cache results for a query
    cacheResults(query, results) {
        this.cache[query] = results;
    }

    // Method to clear the cache
    clearCache() {
        this.cache = {};
    }
}

// Example usage
let searchCache = new SearchCache();

// Cache results for a query
let query = "example query";
let results = ["result1", "result2", "result3"];
searchCache.cacheResults(query, results);

// Check if a query is cached
if (searchCache.isCached(query)) {
    // Get cached results
    let cachedResults = searchCache.getCachedResults(query);
    console.log(cachedResults);
}

// Clear the cache
searchCache.clearCache();
