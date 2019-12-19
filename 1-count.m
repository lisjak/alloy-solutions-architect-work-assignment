// OBJECTIVE: Do the same in **Objective-C**

#import <Foundation/Foundation.h>
// This statement is written above the main function. 
// When Xcode creates the project, it will import the Foundation framework. 
// A framework is a set of related classes, functions, constants, and types. 
// The Foundation framework contains fundamental classes that are used in all iOS apps and OS X applications.

void counter (int num){
// the function is declared in the above line 
// void is the return type and indicates the function returns no result and simply displays a message
// counter is the name of the function 
// the function takes one integer argument
    for (int i = num; i <= 10; i++)
    // a simple for loop in which the index is defined as zero and loop increases by one until the index is greater than or equal to 10.
    {
        NSLog(i);
        // NSLog which is a function brought in by the Foundation Framework. 
        // This function is akin to console.log() in JS.
    }
}

int main (int argc, const char * argv[])
// This is the program's entry point.
// It tells the Objective-C compiler where to start program execution.
// It is a function called main with an integer return type.
// The argc argument contains a count of the number of arguments that were found on the command line when the program was executed.
// argv is a pointer to an array containing those arguments.
{
    @autoreleasepool {
    // @autoreleaspool manages memory in the program and creates an autorelease pool to handle every autorelease that happens inside your main function
    // Automatic reference counting (ARC) is utilized.
        counter(0);
        // the counter function is invoked with a parameter of zero
    }
    return 0;
    // By convention, a return value of zero indicates that the function was successful
}
