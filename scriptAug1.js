/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
    //! 7/31/23
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
        if (this.isEmpty()){
            this.head = new ListNode(data);
            return this;
        }
        // check if next node is empty
        if (runner.next !== null){
            // if next node is not empty, recursive call to set runner to next node
            return this.insertAtBackRecursive(data, runner = runner.next);
        } else { // if next node IS empty
            // set next node to equal new data
            runner.next = new ListNode(data);
            return this;
        }
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
    //! 8/1/23  =============================
    // insertAtFront(data) {
    //     //if check to confirm if empty or not
    //     if (this.isEmpty()){
    //         this.head = new ListNode(data);
    //         return this;
    //     //if not empty...
    //     } 
    //     this.unshift(new ListNode(data))
    //     return this;
    //  }

    insertAtFront(data) {
        //define newNode
        let newNode = new ListNode(data);
        //assigning the newNode's pointer (the .next) is going to be the current head of the list
        newNode.next = this.head;
        //re-assigning the head of the list
        this.head = newNode;
        //returning this result
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead() { 
            if(!this.head) {
                return;
            }
            this.head = this.head.next;
            return this;
    }

    //TODO: Reminder to complete Average*
    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() { 
        let sum = 0, total = 0, runner = this.head;
        while(runner){
            sum += runner.data;
            total += 1;
            runner = runner.next;
        }
        console.log(`sum: ${sum}`);
        console.log(`number of indexes: ${total}`);
        return sum/total;
    }
  
      //! ===================================
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
  let myList2 = new SinglyLinkedList();
  
  myList.insertAtBack(1).insertAtBack(2).insertAtBack(3).insertAtBack(4).insertAtBack(5).insertAtBack(-8).insertAtBack(-6);
  console.log("============");

  myList.insertAtBackRecursive(1).insertAtBackRecursive(2).insertAtBackRecursive(3).insertAtBackRecursive(4).insertAtBackRecursive(5).insertAtBackRecursive(-8).insertAtBackRecursive(-6).insertAtFront(48).insertAtFront(27)
  console.log("============");

  myList2.insertAtFront(8).insertAtFront(10).insertAtFront(3)
  myList2.removeHead()
  myList2.removeHead()

  console.log(myList2)
myList2.print();
  console.log("============");

  console.log(myList.toArr())
  myList.print()
  console.log("============");
  
  
      
    console.log(myList2)
    console.log(myList2.toArr())
    myList2.print()
    console.log("============");
