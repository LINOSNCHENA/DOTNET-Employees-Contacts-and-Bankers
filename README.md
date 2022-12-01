# PHONE-BOOK:   Dotnet with Angular

## Simple API Commands

```
npm i --legacy-peer-deps

dotnet restore
dotnet --list-sdks
dotnet list package

Add-Migration "InitialCreate"
Update-Database
dotnet watch run

dotnet new webapi -o Ndola
dotnet new webapi -n Lusaka
dotnet add package Swashbuckle.AspNetCore --version 6.4.0
dotnet tool install -g Microsoft.dotnet-openapi

```

## DATABASE ENVIROMENT 

1. Version #3 Vs #5
2. AtPort 1344
3. Disable shared memory
4. Firewall-MSSQL1433
5. Start the SQL Browser service
6. PortA "sslPort": 44321
7. Security- allow SQL
8. Require distributed transactiosn for server-to-server communication

## MIGRATION: MSSQL-1: MYSQL-2: POSTGRESQL-3:

```
  "ConnectionStrings": {
    "DevConnection": "Server=localhost;Database=PRESLY;Trusted_Connection=True;MultipleActiveResultSets=True;"
  }

```

## Object Models

1. Employee
2. Contact
3. Banker
4. Item

## Interface UX

Below are some Screens shots from the application(five)

![ Muntu#1 ](https://github.com/LINOSNCHENA/DOTNET-Phone-book/blob/master/UXViews/page1.png)
![ Muntu#2 ](https://github.com/LINOSNCHENA/DOTNET-Phone-book/blob/master/UXViews/page2.png)
![ Muntu#3 ](https://github.com/LINOSNCHENA/DOTNET-Phone-book/blob/master/UXViews/page3.png)
![ Muntu#4 ](https://github.com/LINOSNCHENA/DOTNET-Phone-book/blob/master/UXViews/page4.png)
![ Muntu#5 ](https://github.com/LINOSNCHENA/DOTNET-Phone-book/blob/master/UXViews/page5.png)




## Versioning and Updates:  LECTURE # 36

```
03/30/2022
12/01/2022

```

# END

