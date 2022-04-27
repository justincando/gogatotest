POST MODEL
------------------------------------------------
![diagram](https://raw.githubusercontent.com/Revature-GoGato/GoGatoFrontEnd/development/public/Notes/diagram.png)

	id - serial (int) - primary key  
	likes - int  
	contents - string/text  

	userid - int - foreign key (USER.id) NOT NULL  
	parent - int - foreign key (POST.ID)  

	OPTIONAL STRETCH GOAL: reshares - int  


USER MODEL 
-----------------------------------------------
	id - int  
	username - string  
