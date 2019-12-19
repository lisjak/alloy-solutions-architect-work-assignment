
// OBJECTIVE: Provide a function that counts and displays the numbers 0-10 in **Java**

public class 1_Count_To_Ten { 
// the public class name must match the file name
	public static void main(String[] args) {
	// public indicates that the java runtime can execute this method 
	// static means that the method belongs to the Count_To_Ten class and not an object of the Count_To_Ten class 
	// void means that this method does not have a return value 
	// main is the name of java main method which is fixed 
	// Java main method accepts a single argument of type String array
		for(int i = 0; i <= 10; i++)
		//a simple for loop in which the index is defined as zero and loop increases by one until the index is greater than or equal to 10.
		{
			System.out.println(i); // equivalent to console.log in JS where the index is printed out on each loop
		}
	}
}