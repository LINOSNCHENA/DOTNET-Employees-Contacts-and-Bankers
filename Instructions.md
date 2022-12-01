# Version Studio 2022 Vs [Blend] Version Studio 2022

## Simple API
dotnet --list-sdks
dotnet new webapi -o Ndola
dotnet new webapi -n Lusaka
dotnet add package Swashbuckle.AspNetCore --version 6.4.0
dotnet tool install -g Microsoft.dotnet-openapi

## Terminal - Good Commands

dotnet add package Newtonsoft.Json --version 13.0.2
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 7.0.0
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0.0
dotnet tool update --global dotnet-ef --version 7.0.0

dotnet ef migrations add "initial_migrations"
dotnet ef database update
dotnet build
dotnet run

## Routes

https://localhost:5002/swagger/index.html
https://localhost:5002/api/controller
https://localhost:5002/api/Todo
https://localhost:5002/api/Todo/2
https://localhost:5002/api/Todo/3

# End