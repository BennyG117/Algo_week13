/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {ListNode} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
      this.data = data;
      /**
       * This property is used to link this node to whichever node is next
       * in the list. By default, this new node is not linked to any other
       * nodes, so the setting / updating of this property will happen sometime
       * after this node is created.
       *
       * @type {ListNode|null}
       */
      this.next = null;
    }
  }
  
  /**
   * This class keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
      /** @type {ListNode|null} */
      this.head = null;
    }
  
    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isEmpty() {
      // return this.head === null;
      if (this.head === null) {
        console.log("This list is empty Son!!")
        return true;
      } else {
        return false
      }
    }
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(value) {
      if (this.isEmpty()) {
        this.head = new ListNode(value)
        return this;
      }
      let runner = this.head;
  
      while (runner.next != null) {
        runner = runner.next;
      }
  
      runner.next = new ListNode(value)
      return this;
  
    }
  
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?ListNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackRecursive(data, runner = this.head) {
      // Check if the list is empty (head is null)
      if (this.isEmpty()) {
        // If the list is empty, create a new node with the data and set it as the head of the list
        this.head = new SLNode(data);
        return this; // Return the updated list
      }
  
      // Check if the next node of the current runner is null, i.e., we are at the last node of the list
      if (runner.next === null) {
        // If we are at the last node, create a new node with the data and set it as the next node of the current runner
        runner.next = new SLNode(data);
        return this; // Return the updated list
      }
  
      // If we haven't reached the last node yet, recursively call the function with the next node as the new runner
      return this.insertAtBackRecursive(data, runner.next);
    }
  
    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
      for (const item of vals) {
        this.insertAtBack(item);
      }
      return this;
    }
    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(value) {
      // Step 1: Let's create our new node
      let newNode = new ListNode(value);
  
      // Step 2: Assign that new node's .next pointer to be the current head of the list
      newNode.next = this.head;
  
      // Step 3: And reassign the head of the list to now be the new node.
      this.head = newNode;
  
      // Step 4: Return the list.
      return this;
    }
  
  
    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead() {
      // If the list is empty, we can't possibly remove anything
      if (this.isEmpty()) {
        // So let's let it be known and just return the list.
        console.log("List is already empty.");
        return null;
      }
      // Let's hold onto the current head so we can eventually return it
      let removed = this.head;
      // Set the head to the current head's next node
      this.head = removed.next;
      // Chop off the removed node's .next so we can treat it
      // as a stand-alone node
      removed.next = null;
  
      // and return it.
      return removed;
    }
  
    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
      // Check if the list is empty. If so, return null.
      if (this.isEmpty()) {
        return null;
      }
      // Initialize variables to keep track of the sum of data and the count of nodes in the list.
      let runner = this.head;
      let sum = 0;
      let cnt = 0;
      // Iterate through each node in the list.
      while (runner) {
        // Increment the count of nodes.
        cnt++;
        // Add the data of the current node to the sum.
        sum += runner.data;
        // Move the runner to the next node.
        runner = runner.next;
      }
      // Calculate and return the average by dividing the sum by the count of nodes.
      return sum / cnt;
    }
  
    /**
     * Removes the last node of this list.
     * - HINT: Figuring out a way to find the SECOND TO LAST node will be immensely helpful!
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
      // First step: Is the list empty?
      if (this.isEmpty()) {
        console.log("List is empty.");
        return null;
      }
      // Second step: Is the list only one element long? 
      // If so, just set the head to null
      else if (this.head.next == null) {
        let temp = this.head;
        this.head = null;
        return temp;
      }
      //If either of those conditions weren't met, let's get down to business
      else {
        // We'll need 2 iterators. Let's call them runner and walker
        // walker will start at the head, and runner at the 2nd node
        let walker = this.head;
        let runner = this.head.next;
  
        // And let's iterate so that runner reachest the last node,
        // with walker remaining 1 node behind
        while (runner.next != null) {
          // move walker to the runner
          walker = runner;
          // and move runner to the next node
          runner = runner.next;
        }
        // If we've broken out of the loop, then runner is the last node,
        // and walker is the second to last node.
  
        // Set walker.next to null, which essentially lops runner off 
        walker.next = null;
        // and return the runner (previously the final node)
        return runner;
      }
    }
  
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
      // Start from the head of the linked list.
      let runner = this.head;
      // Loop through the linked list until we reach the end (runner becomes null).
      while (runner) {
        // Check if the current node's data is equal to the given value.
        if (runner.data === val) {
          // If we find the value in the linked list, return true.
          return true;
        }
        // Move to the next node in the linked list.
        runner = runner.next;
      }
      // If the loop completes without finding the value, it is not in the list, so return false.
      return false;
    }
  
    /** EXTRA
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
      // Base case: If we reach the end of the list (current is null),
      // we didn't find the value, so return false.
      if (current === null) {
        return false;
      }
      // Check if the current node's data is equal to the given value.
      if (current.data === val) {
        // If we find the value in the current node, return true.
        return true;
      }
      // Recursive case: Call the function again with the next node in the linked list.
      // This will continue the search through the list until the base case is reached.
      return this.containsRecursive(val, current.next);
    }
  
    // EXTRA
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {ListNode} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {ListNode} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {
      // Base case: If the list is empty (head is null), return null.
      if (this.head === null) {
        return null;
      }
      // Base case: If we have reached the end of the list (runner is null),
      // return the data of the node containing the maximum value.
      if (runner === null) {
        return maxNode.data;
      }
      // Compare the data of the current node (runner) with the maximum node (maxNode).
      // If the data of the current node is greater than the data of the maximum node,
      // update maxNode to point to the current node.
      if (runner.data > maxNode.data) {
        maxNode = runner;
      }
      // Recursive case: Call the function again with the next node in the linked list
      // and the updated maxNode.
      // This will continue to traverse through the list, updating maxNode whenever a larger value is found.
      return this.recursiveMax(runner.next, maxNode);
    }
  //! --------------------------8/3/23------------------------
  //! --------------------------8/3/23------------------------

    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        if (this.head == null || this.head.next == null) {
            return null;
        }
        let runner = this.head;
        while (runner.next.next != null){
            runner = runner.next;
        }
        return runner.data;
     }
  
    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        if (this.head == null) {
            return null;
        }
        // if (this.isEmpty()){
        //     return false;
        // }
        let runner = this.head;
        if (runner.data == val){
            this.head = runner.next;
            return true
        }
        while (runner.next !== null) {
            if (runner.next.data == val){
                runner.next = runner.next.next;
                return true
            }
            runner = runner.next;
        }
        return false

        }
     
  
    // EXTRA
    /**
     * Inserts a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend(newVal, targetVal) { }
  
  //! ----------------------------------------------
  //! ----------------------------------------------
    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
      const arr = [];
      let runner = this.head;
  
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  
    /**
     * Creates a comma separated string of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, vals str grows as list grows.
     * @returns {string} The comma separate data of all the nodes.
     */
    print() {
      let runner = this.head;
      let vals = "";
  
      while (runner) {
        vals += `${runner.data}${runner.next ? ", " : ""}`;
        runner = runner.next;
      }
      console.log(vals);
      return vals;
    }
  
  }
  
  /******************************************************************* 
  Multiple test lists already constructed to test your methods on.
  Below commented code depends on insertAtBack method to be completed,
  after completing it, uncomment the code.
  */
  
  // const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
  // const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
  // const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
  // const unorderedList = new SinglyLinkedList().insertAtBackMany([
  //   -5, -10, 4, -3, 6, 1, -7, -2,
  // ]);
  
  /* node 4 connects to node 1, back to head */
  // const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // perfectLoopList.head.next.next.next = perfectLoopList.head;
  
  /* node 4 connects to node 2 */
  // const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
  // loopList.head.next.next.next = loopList.head.next;
  
  // const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  //   1, 1, 1, 2, 3, 3, 4, 5, 5,
  // ]);
  
  const emptyList = new SinglyLinkedList();
  let myList = new SinglyLinkedList();
  
  // myList.insertAtBack(1).insertAtBack(2).insertAtBack(3).insertAtBack(4).insertAtBack(5).insertAtBack(-8).insertAtBack(-6);
  myList.insertAtFront(1).insertAtFront(2).insertAtFront(3).insertAtFront(4).insertAtFront(5).insertAtFront(-8).insertAtFront(-6);
  // myList.insertAtBackRecursive(1).insertAtBackRecursive(2).insertAtBackRecursive(3).insertAtBackRecursive(4).insertAtBackRecursive(5).insertAtBackRecursive(-8).insertAtBackRecursive(-6);
  // console.log(myList)
  // console.log(myList.toArr())
  myList.print()
    console.log("===============\n");

//   myList.removeHead()
//   console.log(myList.average())
//   myList.print()
//   myList.removeBack()
//   myList.print()
//   console.log(myList.contains(4))
//   console.log(myList.contains(20))
//   console.log(myList.containsRecursive(4))
//   console.log(myList.containsRecursive(20))
//   console.log(myList.recursiveMax())
console.log("*******secondToLast Test******");
console.log(myList.secondToLast());
  myList.print()
  console.log("===============\n");

  console.log("*******removeVal Test******");
console.log(myList.removeVal(-8));
  myList.print()
    console.log("===============\n");



