## PHONE-BOOK:-Dotnet with-Angular 


# COMMANDS -1
==================================================================

dotnet new sln
dotnet new webapi --no-https
dotnet sln add .
===================
dotnet restore
dotnet list package
Add-Migration "InitialCreate"
Update-Database
dotnet watch run

=================================================================
SELECT * FROM INFORMATION_SCHEMA.SCHEMATA
dotnet add package Microsoft.EntityFrameworkCore.Tools

version #3 Vs #5

=================================================================

# DATABASE ENVIROMENT -2

1. AtPort 1344
2. Disable shared memory
3. Firewall-MSSQL1433
4. Start the SQL Browser service 
5. Security- allow SQL
6. Require distributed transactiosn for server-to-server communication

==================================================================================
  # MIGRATION: MSSQL-1: MYSQL-2: POSTGRESS-3:

  "ConnectionStrings": {
    "DevConnection": "Server=localhost;Database=PRESLY;Trusted_Connection=True;MultipleActiveResultSets=True;"
  }

# THREE OBJECTS -4 
1. Worker-Employee
2. Contact
3. Banker