employee_file = open("import/employee.txt", "r")

for employee in employee_file.readlines():
    print(employee)
employee_file.close()