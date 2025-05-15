section .data
num1 db 3 ; First number
num2 db 4 ; Second number
result db 0 ; Storage for result
msg db 'Result: ', 0
len equ $ - msg

section .bss
res resb 1 ; Reserve space for the result

section .text
global _start
_start:
mov al, [num1] ; Load num1 into register AL
add al, [num2] ; Add num2 to AL
mov [result], al; Store the result in memory

; Print the message
mov rax, 1 ; Syscall number for write
mov rdi, 1 ; File descriptor 1 (stdout)
mov rsi, msg ; Address of the message
mov rdx, len ; Length of the message
syscall

; Print the result
mov al, [result] ; Load the result into AL
add al, '0' ; Convert the result to ASCII
mov [res], al ; Store the ASCII character
mov rax, 1 ; Syscall number for write
mov rdi, 1 ; File descriptor 1 (stdout)
mov rsi, res ; Address of the result
mov rdx, 1 ; Length of the result
syscall

; Exit program
mov eax, 60 ; Syscall number for exit
xor edi, edi ; Exit code 0
syscall