README my-app Recipe Filtering Website!

INTRODUCTION
    The purpose of this project is to develop a React website that has the ability
    to filter and sort a list of items.

HOW TO RUN:
    1. Check that you have node installed by running node --version in your terminal. If you don't, you'll need to install it.
    3. In your terminal, run sudo npm install -g create-react-app (you may
    need to type in your system password); note that Windows users should instead
    run npm install -g create-react-app, as Windows does not have the
    ‘sudo’ command
    4. Once everything is downloaded, move into the directory in which you want your
    app to be created (cd Documents)
    5. Run "create-react-app my-app" to create your app
    6. Then run "cd my-app" to go into that directory
    7. Run "npm start" to start your app
    8. In your browser, go to http://localhost:3000/ to see the app live!

HOW TO USE:
    The recipes can be filtered by the type of meal and dietary restriction
    (vegan or not vegan) by selecting from the options in the drop down buttons
    on the toolbar. In addition, you can sort the recipes by the cook time,
    either from Low->High or High->Low. To reset the filters and sort to their
    default, press the Reset button on the left. Lastly, you can search from
    the recipes with the search bar on the top.

DESIGN:
    The design of this website was intended to be clean and simple, with the filtering
    and sorting options clearly located at the top of the recipe list.  High contrast
    colors were used to improve readability. In addition, the selected filter/sort options
    are visible from the dropdown, so that the user is always aware of what filters are selected.
    In addition, the filter & sort fields are visible on the recipe cards, so the user is assured
    that the filter/sort is accurate.

DATA:
    Each recipe begins as a list of key-value pairs in App, which is passed to FilteredList
    to be filtered according to the current sort state and specified filters (set by the dropdowns
    of the toolbar). Then, the recipes are passed to the List component, which maps the list of
    key value pairs to the RecipeItem Component, which sets the layout of the fields.
    When a selection from a drop down button is made, a change in state is triggered and the
    list of recipes is appropriately filtered by the current state's filter and sort properties.

OVERALL VALUE:
    This application provides the user an efficient way to find recipes that meet
    their specific needs, whether that be vegan options, ideas for breakfast, or
    dishes that can be made in a time crunch!
