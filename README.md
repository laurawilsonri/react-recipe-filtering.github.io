Recipe Filtering & Sorting Website

# Introduction
    The purpose of this project is to develop a React website that has the ability
    to filter and sort a list of items, as well as search.

# How to run:
    1. Clone & download this repository.
    2. In a terminal, cd into the folder that was downloaded. The location is most likely "Downloads/recipe-filtering-master".
    3. Run "npm install" then "npm start" in your terminal.
    4. The website should launch in a browser!

# How to use:
    The recipes can be filtered by the type of meal and dietary restriction
    (vegan or not vegan) by selecting from the options in the drop down buttons
    on the toolbar. In addition, you can sort the recipes by the cook time,
    either from Low->High or High->Low. To reset the filters to their
    default, press the Reset button on the left. Lastly, you can search
    the recipes with the search bar on the top.

# Design:
    The design of this website was intended to be clean and simple, with the filtering
    and sorting options clearly located at the top of the recipe list.  High contrast
    colors were used to improve readability. In addition, the selected filter/sort options
    are visible from the dropdown, so that the user is always aware of what filters are selected.
    In addition, the filter & sort fields are visible on the recipe cards, so the user is assured
    that the filter/sort is accurate.

# Data:
    Each recipe begins as a list of key-value pairs in App, which is passed to FilteredList
    to be filtered according to the current sort state and specified filters (set by the dropdowns
    of the toolbar). Then, the recipes are passed to the List component, which maps the list of
    key value pairs to the RecipeItem Component, which sets the layout of the fields.
    When a selection from a drop down button is made, a change in state is triggered and the
    list of recipes is appropriately filtered by the current state's filter and sort properties.

# Overall Value:
    This application provides the user an efficient way to find recipes that meet
    their specific needs, whether that be vegan options, ideas for breakfast, or
    dishes that can be made in a time crunch!
