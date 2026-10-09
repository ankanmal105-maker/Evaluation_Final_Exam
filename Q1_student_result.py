def calculate(marks):
    """Return total and average of the marks list."""
    total = sum(marks)
    average = total / len(marks)
    return total, average


name = input("Enter student name: ")

marks = []
for i in range(1, 4):
    mark = float(input(f"Enter marks for subject {i}: "))
    marks.append(mark)

total, average = calculate(marks)

print("\n--- Student Result ---")
print("Name   :", name)
print("Total  :", total)
print("Average: {:.2f}".format(average))

if average >= 40:
    print("Result : Pass")
else:
    print("Result : Fail")
