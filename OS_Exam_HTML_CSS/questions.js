/* Operating System questions. Edit text / options / correct answer here. */
window.EXAM_DATA = {
    "subject": "OS",
    "heading": "Operating System",
    "resultName": "Operating System",
    "minutes": 30,
    "questions": [
        {
            "question": "What is the primary purpose of an operating system?",
            "options": [
                "To act as an interface between the user and the hardware",
                "To design web pages",
                "To store data permanently on disk",
                "To compile high-level source code"
            ],
            "answer": "A"
        },
        {
            "question": "Which of the following is NOT an operating system?",
            "options": [
                "Linux",
                "Windows",
                "Oracle",
                "macOS"
            ],
            "answer": "C"
        },
        {
            "question": "A program in execution is called a:",
            "options": [
                "File",
                "Process",
                "Compiler",
                "Register"
            ],
            "answer": "B"
        },
        {
            "question": "Which structure stores all the information about a process?",
            "options": [
                "File Allocation Table",
                "Page Table",
                "Process Control Block",
                "Symbol Table"
            ],
            "answer": "C"
        },
        {
            "question": "Which scheduling algorithm may cause starvation of long processes?",
            "options": [
                "First Come First Served",
                "Shortest Job First",
                "Round Robin",
                "FIFO"
            ],
            "answer": "B"
        },
        {
            "question": "Round Robin scheduling is based on which concept?",
            "options": [
                "Priority number",
                "Time quantum",
                "Burst time only",
                "Arrival order only"
            ],
            "answer": "B"
        },
        {
            "question": "The convoy effect is mainly associated with which scheduling algorithm?",
            "options": [
                "FCFS",
                "SJF",
                "Priority scheduling",
                "Round Robin"
            ],
            "answer": "A"
        },
        {
            "question": "Which of the following is a non-preemptive scheduling algorithm?",
            "options": [
                "Round Robin",
                "Preemptive SJF",
                "FCFS",
                "Shortest Remaining Time First"
            ],
            "answer": "C"
        },
        {
            "question": "A situation where two or more processes wait for each other indefinitely is called:",
            "options": [
                "Starvation",
                "Deadlock",
                "Thrashing",
                "Aging"
            ],
            "answer": "B"
        },
        {
            "question": "Which of the following is NOT a necessary condition for deadlock?",
            "options": [
                "Mutual exclusion",
                "Hold and wait",
                "Circular wait",
                "Preemption of all resources"
            ],
            "answer": "D"
        },
        {
            "question": "Which algorithm is used for deadlock avoidance?",
            "options": [
                "Banker's algorithm",
                "LRU algorithm",
                "Round Robin",
                "Shortest Job First"
            ],
            "answer": "A"
        },
        {
            "question": "A thread is also known as a:",
            "options": [
                "Heavyweight process",
                "Lightweight process",
                "System call",
                "Device driver"
            ],
            "answer": "B"
        },
        {
            "question": "Which state does a process enter while waiting for an I/O operation to finish?",
            "options": [
                "Ready state",
                "Running state",
                "Waiting state",
                "New state"
            ],
            "answer": "C"
        },
        {
            "question": "A semaphore is best described as:",
            "options": [
                "A type of memory chip",
                "An integer variable used for process synchronization",
                "A scheduling algorithm",
                "A file access method"
            ],
            "answer": "B"
        },
        {
            "question": "Which system call is used to create a new process in UNIX?",
            "options": [
                "exec()",
                "fork()",
                "wait()",
                "open()"
            ],
            "answer": "B"
        },
        {
            "question": "What happens during a context switch?",
            "options": [
                "The CPU saves the state of one process and loads another",
                "The system shuts down safely",
                "A file is copied to disk",
                "A new program is compiled"
            ],
            "answer": "A"
        },
        {
            "question": "The section of code where a process accesses shared resources is called the:",
            "options": [
                "Kernel section",
                "Critical section",
                "Boot section",
                "Swap section"
            ],
            "answer": "B"
        },
        {
            "question": "The core part of an operating system that manages hardware resources is the:",
            "options": [
                "Shell",
                "Kernel",
                "Compiler",
                "Loader"
            ],
            "answer": "B"
        },
        {
            "question": "Which memory management technique divides memory into fixed-size blocks?",
            "options": [
                "Segmentation",
                "Paging",
                "Compaction",
                "Swapping"
            ],
            "answer": "B"
        },
        {
            "question": "Internal fragmentation mainly occurs in which technique?",
            "options": [
                "Paging",
                "Segmentation",
                "Dynamic partitioning",
                "Linked allocation"
            ],
            "answer": "A"
        },
        {
            "question": "External fragmentation mainly occurs in which technique?",
            "options": [
                "Paging",
                "Segmentation",
                "Demand paging",
                "Overlaying"
            ],
            "answer": "B"
        },
        {
            "question": "Virtual memory allows a system to:",
            "options": [
                "Increase the CPU clock speed",
                "Execute programs larger than the physical memory",
                "Remove the need for secondary storage",
                "Prevent all page faults"
            ],
            "answer": "B"
        },
        {
            "question": "Excessive paging activity that severely reduces CPU performance is called:",
            "options": [
                "Thrashing",
                "Spooling",
                "Buffering",
                "Caching"
            ],
            "answer": "A"
        },
        {
            "question": "Belady's anomaly is observed in which page replacement algorithm?",
            "options": [
                "LRU",
                "FIFO",
                "Optimal",
                "LFU"
            ],
            "answer": "B"
        },
        {
            "question": "Which page replacement algorithm replaces the page that has not been used for the longest time?",
            "options": [
                "FIFO",
                "LRU",
                "MRU",
                "Random"
            ],
            "answer": "B"
        },
        {
            "question": "Which memory is the fastest for the CPU to access?",
            "options": [
                "Hard disk",
                "Main memory",
                "Cache memory",
                "CPU registers"
            ],
            "answer": "D"
        },
        {
            "question": "Keeping several processes in memory at the same time to improve CPU utilisation is called:",
            "options": [
                "Multiprogramming",
                "Batch processing",
                "Spooling",
                "Time stamping"
            ],
            "answer": "A"
        },
        {
            "question": "Which file allocation method suffers from external fragmentation?",
            "options": [
                "Contiguous allocation",
                "Linked allocation",
                "Indexed allocation",
                "Hashed allocation"
            ],
            "answer": "A"
        },
        {
            "question": "Which type of operating system guarantees a response within a strict time limit?",
            "options": [
                "Batch operating system",
                "Real-time operating system",
                "Distributed operating system",
                "Time-sharing system"
            ],
            "answer": "B"
        },
        {
            "question": "Which Linux command displays the currently running processes?",
            "options": [
                "ls",
                "ps",
                "cd",
                "mkdir"
            ],
            "answer": "B"
        }
    ]
};
