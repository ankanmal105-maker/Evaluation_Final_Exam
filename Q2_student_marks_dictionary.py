students = {
    "Ankan": 78,
    "Ihsan": 45,
    "krishna": 92,
    "Sumit": 50,
    "Sagar": 36,
}

print("All students and marks:")
for name, marks in students.items():
    print(name, ":", marks)

print("\nStudents who scored 50 or above:")
for name, marks in students.items():
    if marks >= 50:
        print(name)

highest = max(students.values())
print("\nHighest mark:", highest)
