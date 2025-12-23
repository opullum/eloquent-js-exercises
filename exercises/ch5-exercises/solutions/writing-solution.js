
/**
 * This function is provided in the text reference and has been provided for convenience.
 * Returns an array of objects with the elements found in each group identified with groupName
 * @param items An iterable group of items to apply to function groupName()
 * @param groupName A function to compute (and return) the group name for an element from items
 * @returns An array of objects where each object {name, count} provides the group name and
 * the items belonging to that group
 */
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({ name, count: 1 });
        } else {
            known.count++;
        }
    }
    return counts;
}


function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}


export function dominantDirection(text) {
    // Your code here.
}