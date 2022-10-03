#include <stdio.h>
#include <string.h>

// #define TRUE 1
// #define FALSE 0

void validator(char user_input[]);  

int main(void) {

    char user_input[10];    // includes \0 at the end

    printf("Enter Password: "); 
    fgets(user_input, 10, stdin); 

    validator(user_input); 

    return 0; 
}

void validator(char user_input[]) {

    char password[] = "u2&igqGui";  

    user_input[strcspn(user_input, "\n")] = '\0'; // strcspn checks if the string contains the given char, and returns the index of it. we're setting the newline to the end of the string
    // why is "\n" an int when '\n'? isn't it a char? 

    while (1 == 1) {
        if (strcmp(password, user_input) == 0) {    // taking new line character at the end
            printf("(Congrats! Flag is TEST0{N0t_iT_;D})\n");  
            return; 
        } else {
            printf("Wrong ;)\n"); 
            printf("Try again: "); 
            fgets(user_input, 10, stdin); 
        }
    }
}

// echo "hi" | md5sum
// cp -a "folder" "target" (copy folder and all contents to location)
// rm -r "folder" (remove folder and all contents)