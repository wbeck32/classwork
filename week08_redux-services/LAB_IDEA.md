
Budget Tracker
====

Build a react/redux app for tracking budget expenses by category

## Features

### category 

Categories for expenses. Should contain at least the following properties:

* `_id` a uuid
* `timestamp` a date from when the category was created
* `name` a string that is the name of the category
* `budget` a number that is the total amount of $ in the category 
* feel free to add more to your categories if you want

#### actions
* `CATEGORY_CREATE`
* `CATEGORY_UPDATE`
* `CATEGORY_DESTORY`

#### components
* Dashboard
* CategoryForm -- for creating categorys
* [Category Item] -- list of category items
* CategoryForm  -- for updating categorys

###### Dashboard Component 
* should be displayed on the `/` route
* should display a `CategoryForm` for adding categories to the app state
* should display a `CategoryItem` for each category in the app state

###### CategoryForm Component
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForms State when the form is submited
* should expect a `buttonText` prop to be configure the submit buttons text
* should support and optional `category` prop that will initialize the state of the form

###### CategoryItem Component
* should display the category's name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* should display a CategoryForm  
  * `onComplete` the form should update the component in the application state
* add an ExpenseForm to your category item that enables the user to create expenses for this category
* display list all the ExpenseItems belonging to the category

### expense
expense should contain at least the following propertys:
* `_id` a uuid
* `category` an id that corresponds to an existing category
* `timestamp` a date from when the category was created
* `name` a string that is the name of the category
* `price` a number that is the total amount of $ for the expense 
* feel free to add more to your expense if you want

#### actions
* `EXPENSE_CREATE` -- store an expense
* `EXPENSE_UPDATE` -- update an existing expense
* `EXPENSE_DELETE` -- delete an existing expense

#### components
* ExpenseForm -- for creating expenses
* [ExpenseItem]  -- list of expense items
* ExpenseForm -- for updating an expense
```

##### ExpenseItem Component 
* should have a button that will delete the expense
* should display the `name` and `price` of the component
* should be able to display an ExpenseForm that will enable the user to update the expense

### expense dnd BONUS

Check out: https://react-dropzone.js.org/

* Make each Category a Dropzone
* Make each Expense a Draggable 
* Update the expense to the new Category when dropped

## Test
* Snapshot test each state of presentation components
* Unit test actions creators
* Unit test reducers

##  Documentation  
Write a description of the project in your README.md
