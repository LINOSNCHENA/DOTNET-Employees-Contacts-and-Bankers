# Version Studio 2022 Vs [Blend] Version Studio 2022

## Creation - Commands

dotnet add package Newtonsoft.Json --version 13.0.2
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 7.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0.0
dotnet tool update --global dotnet-ef --version 7.0.0

## Execution - Commands
dotnet ef migrations add "initial_migrations"
dotnet ef database update
dotnet build
dotnet run

## Routes(Five)

https://localhost:5002/swagger/index.html

https://localhost:5002/Employees
https://localhost:5002/Employees/1

https://localhost:5002/banker/Bankers
https://localhost:5002/banker/Bankers/1

https://localhost:5002/api/Todo
https://localhost:5002/api/Todo/1

https://localhost:5002/contact/Contacts
https://localhost:5002/contact/Contacts/1


## Frontend
http://localhost:4200/

# End