# homework
Todo CLI
Write an interactive CLI todo list application using Node's readline and fs modules. The following describes what each action does. It would be best to implement each action as its own function.

The Menu
When the todoCLI.js is first executed, a menu as shown below should be displayed. These are all the options the user should be able to perform.

$ node todoCLI.js

Welcome to Todo CLI!
--------------------
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
>
View
From the Todo Menu pressing v then Enter should display the contents of the todo list then the Todo Menu again. See the example below.

$ node todoCLI.js

Welcome to Todo CLI!
--------------------
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> v

0 [✓] Take out the trash
1 [✓] Buy toothpaste
2 [ ] Buy Snickerdoodles
3 [ ] Fix the climate
4 [ ] Find a cure for aging

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
>
Add
From the Todo Menu pressing n then Enter should ask the user what item to add to the list. The user can then write a response. Save their response as a new item at the end of the todo list.

$ node todoCLI.js

Welcome to Todo CLI!
--------------------
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> n

What?
>Go hunting for pesky beetles (not the band)

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
>
Complete
From the Todo Menu pressing cX where X refers to the index of a Todo item then Enter should mark that item as complete. Tell the user which item was marked. Then, re-display the Todo Menu.

$ node todoCLI.js

Welcome to Todo CLI!
--------------------
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> c2

Completed "Buy Snickerdoodles"

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
>
When displaying the list, completed items should have a checkmark (i.e. ✓) besides their title. For example:

0 [✓] Take out the trash
Delete
From the Todo Menu pressing dX where X refers to the index of a Todo item then Enter should remove that from the list. Tell the user which item was deleted. Then, re-display the Todo Menu.

$ node todoCLI.js

Welcome to Todo CLI!
--------------------
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> d0

Deleted "Take out the trash"

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
Quit
From the Todo Menu pressing q quits the application. Say farewell.

$ node todoCLI.js

Welcome to Todo CLI!
--------------------
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> q

See you soon! 😄
$
All Together
As a complete example, here's an interaction with the application using all possible actions.

$ node todoCLI.js

Welcome to Todo CLI!
--------------------
(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> v

List is empty...

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> n

What?
> Have lunch

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> n

What?
> Fix the climate

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> n

What?
> Go beetle hunting (not rock star kind)

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> v

0 [ ] Have lunch
1 [ ] Fix the climate
2 [ ] Go beetle hunting (not rock star kind)

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> c0

Completed "Have lunch"

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> v

0 [✓] Have lunch
1 [ ] Fix the climate
2 [ ] Go beetle hunting (not rock star kind)

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> d2

Deleted "Go beetle hunting (not rock star kind)"

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> v

0 [✓] Have lunch
1 [ ] Fix the climate

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> c1

Completed "Fix the climate"

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> v

0 [✓] Have lunch
1 [✓] Fix the climate

(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit
> q
See you soon! 😄

$
