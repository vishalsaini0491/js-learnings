1. Javascript ek sequentially run language hai

2. Kuch exceptions hai, we will learn ahead:

3. JS events are part of javascript asynchronous programming. Which invokes asynchronously on some activity.

4. Approach to use events in JS: 

    a. Use in html elements only (not a feasible approach,  causes lot of problems when our application scales)

    b. By below approach:
     document.getElementById('prayer').onclick= function(){
        alert("Hare krishna, Hare Rama");
    }

    c. (BEST APPROACH) Using addEventListener:  
    document.getElementById('japan').addEventListener('click', function(){

    }, false); 

    By default the third argument in function is false only


    D. Using attachEvent()

    E. jQuery - on



# Events : using addEventListener

// have to study on own:
1. types of events
2. timestamp
3. defaultPrevented
4. target
5. toElement
6. srcElement
7. currentTarget
8. clientX, clientY, screenX, screenY
9. altkey, ctrlkey, shiftkey, keyCode


# event propagation :  the order in which event handlers are called when an event occurs on a nested element.

Iske 2 context hote hai-
=> Event bubbling : if the event handlers are called from inside to outside/ bottom to up, it is event bubbling as bubble rises up. It happend when the third argument in addEventListener() is false. to stop any event to bubble up add : e.stopPropagation() in the function of addEventListener(). 

ex.  document.getElementById('images').addEventListener('click', function(e){}, true);

    

=> event capturing: When the order of event handlers called is from outside to inside in nested elements or say from top to bottom, then it is referred to as event capturing. It happens when the third argument in addEventListener() is made true. 

ex. document.getElementById('owl').addEventListener('click', function(e){}, true);

=> If we want to stop a event to propagate further to other nested parts, use: e.stopPropagation();

📌 Syntax:
addEventListener(type, listener, options);
type: e.g., "click"

listener: the callback function

options: can be a boolean (true or false) or an object like { capture: true }

✅ If you pass a boolean:
true → listener is triggered during capturing

false (default) → listener is triggered during bubbling

----------------------------------------------------------------------------------
Event spillover is an informal term used to describe a side effect of event propagation — when an event affects components or elements that weren’t intended to respond.

It's a problematic outcome caused by uncontrolled propagation.

Example:

Clicking a button in a modal also triggers a background click listener that closes the modal — accidental closure due to spillover.

