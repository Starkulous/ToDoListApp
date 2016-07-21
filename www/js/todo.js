function getArray()
{
     var toDoList = new Array;                                       //Create An Array
	 var taskStr = LocalStorage.getItem(toDoList);                  //Get the Task from Input using LocalStorage
	 if(taskStr !== null)                                          //if the value is NOT empty --null--
     	 {                                                        //parse the data into the Array
		      toDoList = JSON.parse(taskStr);  
    	 }
		 return toDoList;
}

function addTask()
{
     var task = document.getElementById("taskName").value;        //create a variable to hold value of input
	 var array = getArray();                                     //create a variable to hold our Array
	 array.push(task);                                          //pushing the task into the Array
	 localStorage.setItem(array, JSON.stringify(task));        //Store the task LocalStorage saving to the Array
     show();                                                 
     
     return false;
}



function show()
{
	var array = getArray();                                        //create the variable to hold the Array
	var htmlFormat = "<ul>";                                      //Add unordered List
	
	for (var i=0; i < array.length; i++)                         //A For Loop display the Array
		{
		    htmalFormat+= "<li>" + array[i] + "</li>";
		}
	htmlFormat += "</ul>";
	document.getElementById(array).innerHTML = htmlFormat;    //Show the document
}

doctument.getElementById('add').addEventListener('click',addTask);
show();