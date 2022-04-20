POST MODEL
------------------------------------------------
id - serial (int) - primary key
likes - int
content - string

author - int - foreign key (USER.id) NOT NULL
parentComment - int - foreign key (POST.ID)

OPTIONAL STRETCH GOAL: reshares - int


USER MODEL 
-----------------------------------------------
id - int
username - string


getUserPosts {
	
	ARRAY USERPOST;

	while (allpost) {

		if (author = author) USERPOST.add(comment)

	}

	return USERPOST;
}