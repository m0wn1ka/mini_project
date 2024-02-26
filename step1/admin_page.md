## admin
- user does the login normally
- in backend it will be checked for admin -admin and send different status code and jwt token
- based on the resonse from login component we redict to a protected route where the state is protected by state is admin=true
- so we defiene such a action to set is admin propety to true
- on that page admin gets on each click a new data from backend 
- the backend will send one by one by findone
- we add a property called verified to the alumini schema
- if admin verifies ok then the propery will be added 
## display
- we display all which are verified