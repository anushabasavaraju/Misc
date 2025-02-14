/* 
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.*/

/* Algorithm
1. Initiate the capacity and create a new map in the constructor
2. For the get functionality, search the map with the provided key. If it does not exist or the value is undefined, return -1.
3. Else, delete the key valaue and store it in a temp variable. dd it to the map again at the end, so that it indicates that it is the least recetly used.
4. return the value.
5. For the put method, check if the size of the map is equal to capacity or if the givendoes not exist in the map.
5. If yes, remove the first key from the map.
6. Else, delete the key and add they key back to it.*/

class LRUCache {
    capacity: number
    map: Map<number, number>
    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
    }

    get(key: number): number {
        const value = this.map.get(key)
        if(value === undefined) return -1
        this.map.delete(key)
        this.map.set(key, value)
        return value
    }

    put(key: number, value: number): void {
        if(this.map.size >= this.capacity && !this.map.has(key))
        {
            const firstKey = this.map.keys().next().value
            this.map.delete(firstKey)
        }
        this.map.delete(key)
        this.map.set(key, value)
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
